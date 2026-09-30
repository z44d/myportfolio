Role & Task:
You are an expert full-stack developer and UI/UX designer. Your task is to build a brand-new, modern personal portfolio website from scratch using React, TypeScript, and Material UI (MUI).

---

### 1. Source Context & Information Gathering
Before generating any code, read and parse the local Markdown files to populate all content accurately:
* Resume / Main Bio: Read `me.md` for full background, education, work experience, technical skill set, and personal highlights.
* Project Specifications: Read `domainak.md`, `tgram.md`, `toolsx.md`, `trengine.md`, `serbase.md`, and `short-url.md` to extract feature highlights, tech stacks, tags, and implementation details for each project.

---

### 2. UI/UX & Design System Setup
* UI Framework: Build the entire application using Material UI (MUI v5) with a clean, responsive layout optimized for desktop, tablet, and mobile displays.
* Typography: Integrate and configure Alexandria (via `@fontsource/alexandria` or Google Fonts) as the primary font family across the entire MUI custom theme (`theme.typography.fontFamily`).
* Branding & Social Links:
  - Header and footer navigation must include social links for GitHub and X (formerly Twitter) using official icons.
  - Do NOT include Instagram.
* Theme Aesthetic: Implement a sleek, dark-mode-first developer theme featuring clean card layouts, subtle glassmorphism/border accents, and responsive interactive CTA buttons.

---

### 3. Page Structure & Components

#### A. Header / Navigation
* Sticky top navigation bar with smooth scroll anchors to: `About`, `Projects`, `Skills`, and `Contact`.
* Direct icon links for GitHub and X.

#### B. About / Bio Section ("Introducing Myself")
* Synthesis Requirement: Synthesize background data from `me.md` with key technical achievements from the project `.md` files (`domainak.md`, `tgram.md`, `toolsx.md`, `trengine.md`, `serbase.md`, and `short-url.md`) to craft a compelling, high-impact developer bio.
* Key Focus: Highlight expertise as a full-stack and backend engineer specializing in high-performance tools, custom networking/routing, CLI toolkits, Python libraries, and local database management systems.
* Skills Showcase: Display an interactive skill grid or badge collection derived from `me.md` (e.g., Python, Bun, Hono, TypeScript, SQLite, PostgreSQL, Redis, MongoDB, Docker/Containers, Reverse Proxies).

#### C. Projects Showcase Section
Render project cards in a clean responsive grid with consistent CTA buttons (`GitHub`, `PyPI`, `Live Demo` where applicable):

1. Domainak
   - Description: Self-hosted custom subdomain router. Extract full context from `domainak.md`.
   - Buttons: `GitHub`, `Live Demo` (`https://domainak.z44d.com`)

2. Tgram
   - Description: Developer-friendly Telegram Bot API library designed for Python enthusiasts. Read details from `tgram.md`.
   - GitHub: https://github.com/z44d/tgram
   - Buttons: `GitHub`, `PyPI` (`https://pypi.org/project/tgram/`)

3. toolsx
   - Description: Lightweight CLI toolbox featuring ready-to-use utility commands. Read details from `toolsx.md`.
   - GitHub: https://github.com/z44d/toolsx
   - Buttons: `GitHub`, `PyPI` (`https://pypi.org/project/tools_extra/`)

4. trengine
   - Description: Versatile translation library powered by 5 translation engines with integrated OCR capabilities. Read details from `trengine.md`.
   - GitHub: https://github.com/z44d/trengine
   - Buttons: `GitHub`, `PyPI` (`https://pypi.org/project/trengine/`)

5. serbase
   - Description: Cross-platform desktop application for running local database servers (Redis, MongoDB, PostgreSQL) from a single UI without requiring Docker. Read details from `serbase.md`.
   - GitHub: https://github.com/z44d/serbase
   - Buttons: `GitHub`

6. short-url
   - Description: Minimal, high-performance URL shortener built with Bun, Hono, and SQLite. Read details from `short-url.md`.
   - GitHub: https://github.com/z44d/short-url
   - Buttons: `GitHub`

---

### 4. Technical Implementation Steps
1. Configure the custom MUI theme (`theme.ts`) setting **Alexandria** as the primary font and specifying dark theme colors.
2. Build modular components (`Navbar`, `Hero/About`, `ProjectCard`, `SkillBadge`, `Footer`).
3. Define strict TypeScript interfaces for project structures and bio metadata.