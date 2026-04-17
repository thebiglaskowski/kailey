# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Portfolio site for Kailey Blakely (kaileyblakely.com). Static 3-page site: Home, About (with resume), Work (6 portfolio pieces). Deployed to GitHub Pages via GitHub Actions.

## Commands

```bash
npm run dev        # Local dev server (localhost:4321)
npm run build      # Production build to ./dist/
npm run preview    # Preview production build locally
```

Requires Node.js >= 22.12.0.

## Architecture

- **Astro 6** static site — zero client-side JS, all pages pre-rendered to HTML
- **Tailwind CSS 4** via `@tailwindcss/vite` Vite plugin (not the old `@astrojs/tailwind` integration)
- **No `tailwind.config.js`** — all design tokens live in `src/styles/global.css` using Tailwind 4's `@theme` block
- Images in `src/assets/` are optimized by Astro's `<Image />` component (auto WebP, lazy-load). Files in `public/` are served as-is (PDFs, favicons, CNAME)
- Fonts (Fraunces + Inter) are self-hosted via `@fontsource-variable` — no external requests
- Icons from `@lucide/astro` (not the deprecated `lucide-astro`). Lucide dropped brand icons, so LinkedIn/Facebook use inline SVGs in Footer.astro

## Key Design Tokens

Color palette defined in `src/styles/global.css`: cream (#F5F1E8), cream-deep (#EAE3D2), sage (#8FA68E), sage-deep (#5C7259), tan (#C9A876), tan-deep (#A88555), ink (#2C2A26), ink-soft (#5A554B). Use as Tailwind classes: `bg-cream`, `text-sage-deep`, etc.

Custom component classes: `.btn-primary` (tan CTA), `.btn-secondary` (sage outline), `.container-prose` (max-w-4xl), `.container-wide` (max-w-6xl).

## Component Patterns

- `BaseLayout.astro` wraps every page — pass `title` and `description` props for SEO
- `PortfolioCard.astro` is flexible: supports single `image`, `images` array, text-only, optional `results`, `pullQuote`, and `ctaLabel`/`ctaHref`
- Header active state is detected via `Astro.url.pathname`

## Deployment

Push to `main` triggers `.github/workflows/deploy.yml` which uses `withastro/action@v3` with Node 22. The `public/CNAME` file sets the custom domain.

## Reference

The full project spec with all content, design decisions, and original component code is in `kaileyblakely-site-spec.md` (gitignored but present locally).
