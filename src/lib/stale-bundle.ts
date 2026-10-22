/**
 * The preview can end up with modules from two different dependency-optimization
 * runs (react from one, react-router from another). The router's React copy then
 * has no dispatcher and throws "Cannot read properties of null (reading 'use')"
 * from useAwaited, blanking the screen. A clean reload recovers it, so detect the
 * stale-module signatures and reload once instead of leaving a blank page.
 */

const RELOAD_KEY = "ajk-stale-bundle-reload";
const WINDOW_MS = 30000;
const MAX_RELOADS = 2;

const HOOK_READ =
  /reading ['"]?(?:use|useState|useEffect|useContext|useRef|useMemo|useCallback|createElement|startTransition)\b/;
const NULL_REF = /Cannot read properties of (?:null|undefined)/;
const MODULE_LOAD_FAILURES: RegExp[] = [
  /Failed to fetch dynamically imported module/,
  /error loading dynamically imported module/i,
  /Importing a module script failed/,
  /Failed to resolve module specifier/,
];

function messageOf(value: unknown): string {
  if (value instanceof Error) return value.message;
  if (typeof value === "string") return value;
  return "";
}

export function isStaleBundleError(value: unknown): boolean {
  const message = messageOf(value);
  if (!message) return false;
  if (NULL_REF.test(message) && HOOK_READ.test(message)) return true;
  return MODULE_LOAD_FAILURES.some((pattern) => pattern.test(message));
}

/** Reloads at most twice per 30s window. Returns true when a reload was started. */
export function reloadOnceIfStale(value: unknown): boolean {
  if (!isStaleBundleError(value)) return false;
  if (typeof window === "undefined") return false;
  try {
    const raw = window.sessionStorage.getItem(RELOAD_KEY);
    const state = raw ? JSON.parse(raw) : { n: 0, t: 0 };
    const now = Date.now();
    const count = typeof state.n === "number" && now - (state.t || 0) <= WINDOW_MS ? state.n : 0;
    if (count >= MAX_RELOADS) return false;
    window.sessionStorage.setItem(RELOAD_KEY, JSON.stringify({ n: count + 1, t: now }));
  } catch {
    return false;
  }
  window.location.reload();
  return true;
}

/**
 * Inline copy of the guard above. It runs before any app module loads so it can
 * catch a crash that happens during the first render, when no React effect would
 * ever get the chance to run.
 */
export const STALE_BUNDLE_RELOAD_SCRIPT = `(function(){
var K="${RELOAD_KEY}",W=${WINDOW_MS},M=${MAX_RELOADS};
var H=/reading ['"]?(?:use|useState|useEffect|useContext|useRef|useMemo|useCallback|createElement|startTransition)\\b/;
var N=/Cannot read properties of (?:null|undefined)/;
var L=[/Failed to fetch dynamically imported module/,/error loading dynamically imported module/i,/Importing a module script failed/,/Failed to resolve module specifier/];
function stale(m){
if(!m)return false;
if(N.test(m)&&H.test(m))return true;
for(var i=0;i<L.length;i++){if(L[i].test(m))return true}
return false}
function reload(m){
if(!stale(String(m||"")))return;
var now=Date.now(),n=0,t=0;
try{
var r=sessionStorage.getItem(K);
if(r){var s=JSON.parse(r);n=s.n||0;t=s.t||0;if(now-t>W)n=0}
if(n>=M)return;
sessionStorage.setItem(K,JSON.stringify({n:n+1,t:now}))
}catch(e){return}
location.reload()}
window.addEventListener("error",function(e){reload(e&&e.message?e.message:e&&e.error&&e.error.message)},true);
window.addEventListener("unhandledrejection",function(e){var r=e&&e.reason;reload(r&&r.message?r.message:r)},true);
window.addEventListener("load",function(){setTimeout(function(){try{sessionStorage.removeItem(K)}catch(e){}},4000)})
})();`;
