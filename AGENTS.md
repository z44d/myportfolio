# AGENTS.md

Personal portfolio: Vite + React 18 + TypeScript + MUI v5 (Emotion). Dark theme only (see `src/theme.ts`, accent `#64ffda`).

## Commands

Package manager is **bun** (`bun.lock` — do not use npm/yarn).

- `bun run dev` — Vite dev server
- `bun run build` — `tsc && vite build`; CI runs this exact script
- `bun run typecheck` — `tsc --noEmit`

There are no tests and no linter. Run `bun run typecheck` before declaring work done.

**Never run automated browser checks in this project** (headless Chrome, Playwright, Lighthouse, screenshots, PDF renders, etc.). Finish the work, run `bun run typecheck`, then ask the user to verify manually themselves.

## Deployment

- CI: `.github/workflows/deploy.yml`, triggered by push to `master` (the default branch is `master`, not `main`).
- The workflow builds and **force-pushes `dist/` to an orphan branch named `pages`** (root only, `.nojekyll`, single commit per deploy). Never hand-edit or commit to `pages`; it is rewritten on every run.
- GitHub Pages serves "Deploy from a branch" → `pages` → `/ (root)`.
- Base path comes from `VITE_BASE_PATH` in `vite.config.ts`, default `/` (localhost + custom domains). CI injects it per-run (detected from Pages settings, fallback `/<repo>/`). Don't hardcode `/portfolio-new/` in source.
- If a custom domain is linked, add a `CNAME` file to `public/` so it survives the branch rewrite.

## Layout / mobile rules

- Sections with `Parallax` blobs position them off-screen (`right: -160px`, etc.). The section `Box` must set `overflow: 'hidden'` or the page scrolls sideways on phones. `body { overflow-x: clip }` in `index.css` is only a backstop — `clip` is used (not `hidden`) because `hidden` breaks the sticky AppBar.
- CTA button rows stack as full-width targets on phones: `direction={{ xs: 'column', sm: 'row' }}` plus `sx={{ width: { xs: '100%', sm: 'auto' } }}` on each button.
- Icon tap targets are bumped to 44px via `@media (pointer: coarse)` (see `SocialLinks`).

## Structure

- `src/components/` — one file per page section; `App.tsx` composes them.
- Content (bio, projects, skills, nav) lives in `src/data/` — edit copy there, not inside components. Shared shapes are in `src/types.ts`.
- `public/resume.html` is a standalone static page linked from Navbar/Hero; it is not part of the React app and is not typechecked.
