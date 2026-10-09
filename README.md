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

## Resume PDF

`/areeb-khan-resume.pdf` is generated from the same data at build time
(`src/app/areeb-khan-resume.pdf/route.ts`, layout in `src/lib/resume/`). It is
ATS-friendly: one column, standard headings, built-in Helvetica, no hyphenation,
visible URLs. There is no PDF to update by hand.

**Resume-only text.** Any entry can carry a `resumeOverrides` object. Each field in it
replaces the field with the same name, in the PDF only. Fields left out fall back to
the website copy:

```json
{
  "id": "reeco",
  "achievements": ["Long website copy…"],
  "resumeOverrides": { "achievements": ["Short resume bullet…"] }
}
```

- `resumeOverrides.hidden: true` keeps an entry off the resume. `false` puts a
  site-hidden entry back on.
- The fields each entry type allows are listed on its `resumeOverrides` in
  `src/types/profile.ts`. A key that is not allowed fails `yarn typecheck`.
- `getResumeProfile()` in `src/lib/content.ts` applies the overrides. A CMS only has to
  return the same shape.

**Layout settings** live in the top-level `resume` block: file name, button label,
`pageSize` (`A4` or `LETTER`), and `sections`, which sets the order and headings. Remove
a section from that list to drop it. An unknown section id fails the build.

A resume line that still contains a `[metric: …]` placeholder is left out of the PDF,
and the build logs a warning.

The URL is set by the route folder name and `RESUME_PATH` in `src/lib/resume/path.ts`.
Keep the two in sync.
