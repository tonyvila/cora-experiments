# Cora web

Marketing site for [Cora](https://www.cora.st), deployed to GitHub Pages.

## Engineering standards

All engineering and collaboration standards live in [`CONTRIBUTING.md`](./CONTRIBUTING.md).

## Tech stack

- [Astro](https://astro.build/) static site
- GitHub Pages deploy via GitHub Actions

## Local development

```bash
npm install
npm run dev
```

Use `npm run dev` only. It starts both Astro and the Tailwind watcher.

## Build and preview

```bash
npm run build
npm run preview
```

Build output is written to `dist/`.

## Deployment

- Workflow: `.github/workflows/deploy.yml`
- Trigger: pushes to `main`
- Domain: `www.cora.st` (`public/CNAME`)

## Project structure

```text
src/
  pages/         Astro pages
  components/    Shared UI components
  layouts/       Shared layout templates
  styles/        Global styles
public/          Static assets copied to dist/
```
