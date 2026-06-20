# dumancic.dev

Personal portfolio and studio site for **Toni Dumančić** — a Mostar-based Web3 &
full-stack developer. Built as a fast, content-driven Next.js app with a custom,
CSS-first design system (no UI framework, no animation libraries).

🌐 **Live:** [dumancic.dev](https://dumancic.dev)

## Highlights

- **Hero bento** — featured work, founder, stats and a "Recognized at" logo wall.
- **Ambient motion** — seeded, per-card aurora glows, drifting contact lines, and a
  scroll-following light line on the About timeline — all `prefers-reduced-motion` aware.
- **MDX content** — work case studies and blog posts authored as MDX with frontmatter.
- **Animated accordions** for Services and FAQ, and scroll-reveal animations site-wide.
- **Privacy-friendly** — no cookies, no analytics, no trackers; fonts are self-hosted via
  `next/font`. The contact form opens the visitor's mail app (`mailto:`) — no server-side
  data collection.

## Tech stack

- [Next.js 15](https://nextjs.org/) (App Router) + React 19
- TypeScript
- MDX via `next-mdx-remote` + `gray-matter`
- `next/font` (Hanken Grotesk + Space Mono)
- `sharp` for image optimization
- Plain CSS (design tokens + utility classes in `src/app/globals.css`) — no Tailwind

## Getting started

```bash
# install (project uses bun; npm/pnpm also work)
bun install        # or: npm install

# dev server
bun dev            # or: npm run dev   → http://localhost:3000

# production build
bun run build && bun start
```

## Project structure

```
content/
  work/            # project case studies (.mdx + frontmatter)
  blog/            # blog posts (.mdx + frontmatter)
public/
  images/          # project shots, avatars, org logos
src/
  app/             # routes: /, /about, /work, /work/[slug], /blog, /blog/[slug]
    globals.css    # design tokens, layout helpers, animations
  components/      # Nav, Footer, Aurora, Reveal, ExperienceTimeline, accordions, ...
  content/site.ts  # central content data (stats, services, awards, recognition, ...)
  lib/posts.ts     # MDX reading/parsing helpers
```

### Adding content

- **Work:** drop an `.mdx` file in `content/work/` with `title`, `publishedAt`, `summary`,
  `images`, `team`, `link` frontmatter. It appears on `/work` automatically.
- **Blog:** drop an `.mdx` file in `content/blog/` with `title`, `publishedAt`, `summary`.
- Edit headline content, services, awards and the "Recognized at" logos in
  `src/content/site.ts`.

## Scripts

| Command | Description |
| --- | --- |
| `dev` | Start the dev server |
| `build` | Production build |
| `start` | Serve the production build |
| `lint` | Run Next.js ESLint |

## License

© Toni Dumančić. All rights reserved. Code is shared for reference; brand assets,
content and images are not licensed for reuse.
