# Endigo Design

The portfolio website of [Chris Simmons](https://endigodesign.com) — senior frontend developer, design engineer, and creator of [Skeleton](https://skeleton.dev). Live at **[endigodesign.com](https://endigodesign.com)**.

The site showcases selected work across design systems, web platforms, and games. Each project lives as an MDX document with its media served from a CDN, rendered through a small set of Astro layouts and components.

## Tech Stack

- **[Astro](https://docs.astro.build)** — content-driven framework, running in server (SSR) mode
- **[React](https://react.dev)** — used only for the interactive hero shader (islands architecture)
- **[Skeleton](https://www.skeleton.dev)** — design system and component primitives (Concord theme)
- **[Tailwind](https://tailwindcss.com)** — utility styling, via the Vite plugin
- **[MDX](https://mdxjs.com)** — authoring format for portfolio entries
- **[Cloudflare](https://developers.cloudflare.com/workers/)** — deployment target, via `@astrojs/cloudflare` + Wrangler
- **[paper-design/shaders](https://shaders.paper.design)** — the animated "warp" gradient in the hero
- **pnpm** — package manager · **oxlint** — linter · **Prettier** — formatter

## Getting Started

Requires Node 24+ and pnpm.

```bash
pnpm install      # install dependencies
pnpm dev          # start the dev server at http://localhost:4321
```

### Scripts

| Command              | Description                                              |
| -------------------- | -------------------------------------------------------- |
| `pnpm dev`           | Start the local dev server                               |
| `pnpm build`         | Type-check (`astro check`) and build for production      |
| `pnpm preview`       | Preview the production build locally                     |
| `pnpm check`         | Run Astro's type/content diagnostics                     |
| `pnpm lint`          | Lint with oxlint                                         |
| `pnpm format`        | Format the codebase with Prettier                        |
| `pnpm format:check`  | Verify formatting without writing changes                |

## Project Structure

```
src/
├── assets/              # Local images optimized by Astro (e.g. avatar)
├── components/
│   ├── Hero.tsx         # React island — animated warp-shader hero background
│   ├── HoverCard.astro  # 3D tilt-on-hover thumbnail card (CSS-driven)
│   ├── Header.astro     # Sticky nav with context-aware links
│   ├── Footer.astro
│   ├── decor-stripes.astro
│   └── mdx/             # Custom element renderers for MDX content + index.ts map
├── content/
│   └── works/           # Portfolio entries as MDX, grouped by client folder
│       ├── skeleton-labs/
│       ├── brain-bones/
│       ├── jackpot-rising/
│       └── gaming/
├── content.config.ts    # Zod schema + glob loader for the "works" collection
├── layouts/
│   ├── LayoutRoot.astro  # <html> shell: SEO meta, Open Graph, view transitions
│   └── LayoutPage.astro  # Page chrome: header, footer, skip-link
├── lib/
│   └── constants.ts     # CDN base URL for portfolio media
├── pages/
│   ├── index.astro       # Home — grouped grid of works
│   ├── about.astro       # About page, media appearances, embedded resume
│   ├── 404.astro
│   ├── sitemap.xml.ts    # Dynamically generated sitemap
│   └── works/[...slug]/  # Dynamic route rendering each work entry
└── styles/
    └── app.css          # Tailwind + Skeleton imports, theme overrides, animations
```

## How It Works

### Content collection

Portfolio projects are an Astro [content collection](https://docs.astro.build/en/guides/content-collections/) named `works`. Each `.mdx` file under [`src/content/works/`](src/content/works/) pairs typed frontmatter (validated by the Zod schema in [content.config.ts](src/content.config.ts)) with a Markdown body:

```yaml
---
order: 0                       # sort order within its group
title: Skeleton
website: https://skeleton.dev/
accent: "#242c46"              # background color behind the thumbnail
thumbnail: /works/sk-logo.png  # CDN-relative path
videos: [{ src: "https://www.youtube.com/embed/..." }]
screenshots: [{ src: "/screenshots/.../001.png", caption: "Homepage" }]
---
```

The folder an entry lives in determines its group on the home page (e.g. `jackpot-rising/arcade.mdx` → the "Jackpot Rising" section). [index.astro](src/pages/index.astro) loads each group, sorts by `order`, and renders a [HoverCard](src/components/HoverCard.astro) per entry. Clicking a card routes to [`/works/<slug>`](src/pages/works/[...slug]/index.astro), which renders the MDX body alongside the project's videos and screenshots.

### Media & the CDN

Project media (thumbnails, screenshots) is **not** stored in this repo. Paths in frontmatter are relative to the CloudFront CDN base URL defined in [constants.ts](src/lib/constants.ts), and resolved at render time. Only local UI assets (the avatar, logo, favicon) live in [`src/assets/`](src/assets/) and [`public/`](public/).

### MDX rendering

MDX bodies use a custom set of element renderers ([`src/components/mdx/`](src/components/mdx/)) so Markdown maps onto Skeleton-styled components. The `componentSet` map is auto-imported into every MDX file via `astro-auto-import` (configured in [astro.config.mjs](astro.config.mjs)), so each entry just needs `export const components = componentSet`.

### The hero

[Hero.tsx](src/components/Hero.tsx) is the only React island, hydrated with `client:visible`. It renders an animated `Warp` shader (palette drawn from the Concord theme) with an SVG film-grain overlay composited on top. All shader parameters are exposed as typed, documented props.

### Styling & theming

Global styles live in [app.css](src/styles/app.css): Tailwind, the Albert Sans variable font, and the Skeleton **Concord** theme, plus custom overrides (beveled buttons, the glitch-text and cube-spin animations). The site is dark-mode only (`<html class="dark">`). Motion-heavy effects — the glitch text and 3D hover tilt — respect `prefers-reduced-motion`.

### SEO

[LayoutRoot.astro](src/layouts/LayoutRoot.astro) centralizes `<head>` concerns: canonical URLs, Open Graph and Twitter card tags, and Astro's [view transitions](https://docs.astro.build/en/guides/view-transitions/). A [sitemap](src/pages/sitemap.xml.ts) is generated from the static pages plus every work entry, and referenced from [robots.txt](public/robots.txt).

## Deployment

The site builds to a Cloudflare Worker via the [`@astrojs/cloudflare`](https://docs.astro.build/en/guides/integrations-guide/cloudflare/) adapter (`output: "server"`) and ships with Wrangler. The [CI workflow](.github/workflows/ci.yml) runs on every push to `main` and on pull requests, validating formatting, lint, types, and a production build.
