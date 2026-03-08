# Contributing

This is the single source of truth for engineering standards in this repo.

## Scope

- Applies to all contributors: humans and AI agents.
- Applies across all tools and editors (Cursor, Claude, CLI, VS Code, etc).

## Local setup

```bash
npm install
npm run dev
```

- Always use `npm run dev` for local development.
- Do not run `astro dev` directly, since it skips the Tailwind watcher.

## Build and preview

```bash
npm run build
npm run preview
```

## Workflow standards

- Before starting work, sync with main: `git pull origin main`.
- Keep changes small and focused on one intent.
- Do not mix unrelated refactors into feature/content updates.
- Keep docs and standards aligned with this file.

## Pull request checklist

- Branch is up to date with `main`.
- Change is scoped and easy to review.
- Relevant docs are updated (`README.md`, page copy, or this file).
- Build succeeds locally: `npm run build`.

## Code and content standards

- Follow existing Astro patterns and file organization.
- Prefer consistency over introducing new structure.
- Tailwind is the default styling approach for project-owned styles.
- Do not add new page-level `<style>` blocks or new standalone CSS files unless there is a documented exception.
- Keep naming and copy precise and product-accurate.
- Do not claim `SOC 2`, `HIPAA`, or `ISO` certification/compliance in copy unless explicit, current legal/compliance approval exists in this branch.
- When compliance proof is unavailable, use neutral wording like security controls, audit readiness, and healthcare-ready configurations.
- Use these canonical product names exactly:
  - Cora Flex — BYOD or Mac mini included, entry tier ($3,000/mo)
  - Cora Pro — Mac Pro included, runs local/open source models, premium tier ($5,000/mo)
  - Cora Cloud — No hardware, cloud VPS deployment ($3,000/mo)

## Page conventions

- Use `<Layout>` on all pages with explicit `title` and `favicon="favicon.svg"`.
- Keep title format consistent: `Cora — <Page name>` for product/site pages.
- Set `description` and `image` for pages that need share/SEO metadata.
- `Layout` `image` is used for both Open Graph and Twitter images.
- If a page has a hero image, reuse one `heroImage` constant for both `image={heroImage}` and hero `<img src={heroImage}>`.
- Use root-relative image paths from `public/` (example: `/images/example.jpg`).
- Keep global chrome consistent with `<Navbar />` and `<Footer />` unless intentionally creating a special page.

## AI assistant guardrails

- Never run destructive git commands unless explicitly requested.
- Never overwrite unrelated local edits made by others.
- If standards conflict across files, this file wins; update other files to reference this file.
