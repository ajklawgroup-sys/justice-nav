<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep every browser dependency the app imports listed in `vite.optimizeDeps.include` in
  `vite.config.ts`, and keep the guard from `src/lib/stale-bundle.ts` rendered by the root
  route's `head()` scripts — a browser left holding modules from two different
  dependency-optimization runs ends up with two React copies, and the router then blanks the
  page with "Cannot read properties of null (reading 'use')".
