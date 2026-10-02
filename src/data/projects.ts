import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: 'domainak',
    title: 'Domainak',
    tagline: 'Self-hosted custom subdomain router',
    description:
      'GitHub-authenticated subdomain routing platform. Register app.example.com, point it at any reachable host and port, and let OpenResty proxy traffic through Redis-backed lookups — with traffic analytics, an admin panel, bans, and a full Docker + Cloudflare Tunnel deployment story.',
    tags: ['TypeScript', 'React', 'Hono', 'Bun', 'PostgreSQL', 'Redis', 'OpenResty', 'Docker'],
    links: [
      { kind: 'github', url: 'https://github.com/z44d/domainak' },
      { kind: 'demo', url: 'https://domainak.z44d.com' },
    ],
  },
  {
    id: 'tgram',
    title: 'Tgram',
    tagline: 'Developer-friendly Telegram Bot API library',
    description:
      'A Telegram Bot API library designed for Python enthusiasts. Smart auto-loadable plugins for modular development, composable filters for handlers, and bound methods across update types — with support for the latest Bot API.',
    tags: ['Python', 'Asyncio', 'Telegram Bot API', 'PyPI'],
    links: [
      { kind: 'github', url: 'https://github.com/z44d/tgram' },
      { kind: 'pypi', url: 'https://pypi.org/project/tgram/' },
    ],
  },
  {
    id: 'toolsx',
    title: 'toolsx',
    tagline: 'Lightweight CLI toolbox',
    description:
      'A small CLI toolbox packed with ready-to-use commands: download YouTube Music songs and playlists as tagged MP3s, upload files to Telegram with a bot session, extract video subtitles as JSON/SRT/TXT, and administer Netis routers from a friendly TUI.',
    tags: ['Python', 'CLI', 'yt-dlp', 'PyPI'],
    links: [
      { kind: 'github', url: 'https://github.com/z44d/toolsx' },
      { kind: 'pypi', url: 'https://pypi.org/project/tools_extra/' },
    ],
  },
  {
    id: 'trengine',
    title: 'trengine',
    tagline: 'Multi-engine translation library with OCR',
    description:
      'A versatile Python translation library powered by five engines — Translate, Google, Hozory, Translatedict, plus OCR via ocr.space — exposed through a single unified API with full sync and async support.',
    tags: ['Python', 'Sync & Async', 'OCR', 'Translation'],
    links: [
      { kind: 'github', url: 'https://github.com/z44d/trengine' },
      { kind: 'pypi', url: 'https://pypi.org/project/trengine/' },
    ],
  },
  {
    id: 'serbase',
    title: 'Serbase',
    tagline: 'Local database servers, one UI — no Docker',
    description:
      'A cross-platform desktop app for running local database servers. Create, start, stop, and wipe Redis, MongoDB, and PostgreSQL instances from a single interface — with in-process RESP and MongoDB wire-protocol engines built in Rust, and real-time status via Tauri events.',
    tags: ['Tauri v2', 'Rust', 'Tokio', 'React', 'TypeScript'],
    links: [{ kind: 'github', url: 'https://github.com/z44d/serbase' }],
  },
  {
    id: 'short-url',
    title: 'short-url',
    tagline: 'Minimal, high-performance URL shortener',
    description:
      'A minimal URL shortener built with Bun, Hono, and SQLite via Drizzle ORM. Optional link expiry, a clean web UI, a REST API, HTTP 302 redirects, and a prebuilt Docker image for one-command self-hosting.',
    tags: ['Bun', 'Hono', 'SQLite', 'Drizzle ORM', 'Docker'],
    links: [
      { kind: 'github', url: 'https://github.com/z44d/short-url' },
      { kind: 'demo', url: 'https://shortly.qzz.io', label: 'Demo 1' },
      { kind: 'demo', url: 'https://syr.qzz.io', label: 'Demo 2' },
    ],
  },
];
