// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//   - componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//   - error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  vite: {
    optimizeDeps: {
      // Name every browser dependency up front so the first optimize run covers the
      // whole graph. Anything discovered mid-session forces a second optimize run,
      // and a browser holding modules from both runs ends up with two React copies —
      // which throws "Cannot read properties of null (reading 'use')" inside the router.
      include: [
        "@tanstack/react-router",
        "@tanstack/react-query",
        "class-variance-authority",
        "clsx",
        "framer-motion",
        "lucide-react",
        "sonner",
        "tailwind-merge",
      ],
    },
  },
});
