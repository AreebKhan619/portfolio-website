# Areeb Khan — Portfolio

Next.js (App Router) + TypeScript + Tailwind CSS v4. Statically prerendered.

## Scripts

```bash
yarn dev        # local dev server
yarn build      # production build
yarn start      # serve the production build
yarn lint       # ESLint (flat config)
yarn typecheck  # next typegen + tsc
```

## Editing content

All resume content lives in `src/data/profile.json`, typed by `src/types/profile.ts`.
Pages, metadata, sitemap, OG image and JSON-LD all read it through `getProfile()` in
`src/lib/content.ts`. To move to a headless CMS, change only that function.

Inside achievement strings:

- `**keyword**` renders bold.
- `[metric: …]` marks a number still to be filled in. It renders highlighted so it is easy to spot.

`site.url` in the data file sets the canonical URL, OpenGraph URLs, the sitemap and robots.txt.
