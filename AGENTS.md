# Repository Guidelines

## Project Structure & Module Organization

This is a Next.js 16 portfolio using the App Router, TypeScript, React 19, and Tailwind CSS 4. Current source code lives in `src/app`, global styles in `src/app/globals.css`, and static assets in `public/`.

As the portfolio grows, keep a clear separation of concerns:

- `src/app`: routes, layouts, metadata, server actions, and handlers.
- `src/components`: reusable UI and feature components.
- `src/lib`: shared utilities, auth helpers, validation, and configuration.
- `src/services`: data access and business operations.
- `src/types`: shared TypeScript types.
- `src/data` or `src/database`: seed data, persistence adapters, or local data sources.

Prefer Server Components. Use Client Components only for forms, interactive UI, stateful admin screens, or browser APIs.

## Build, Test, and Development Commands

- `pnpm dev`: starts the local development server.
- `pnpm build`: creates a production build and validates Next.js output.
- `pnpm start`: runs the production build locally.
- `pnpm lint`: runs ESLint with Next.js Core Web Vitals and TypeScript rules.

Use `pnpm` because this repository includes `pnpm-lock.yaml` and `pnpm-workspace.yaml`.

## Coding Style & Naming Conventions

Write TypeScript for `strict` mode. Use the `@/*` alias for imports from `src`.

Use PascalCase for components, camelCase for functions and variables, and kebab-case for route folders. Keep files focused: split landing sections, admin forms, and project cards into dedicated components.

Use Tailwind CSS utilities consistently. Avoid unnecessary dependencies, broad abstractions, and duplicated styling patterns.

## Testing Guidelines

No test framework is configured yet. When adding tests, cover project CRUD behavior, authentication guards, form validation, and public project rendering. Name tests close to the unit or route, for example `project-card.test.tsx` or `projects-service.test.ts`.

Until tests exist, run `pnpm lint` and `pnpm build` before opening a pull request.

## Commit & Pull Request Guidelines

The repository currently has only the initial Create Next App commit, so no detailed convention exists. Use concise, imperative messages such as `Add admin project form` or `Create portfolio landing sections`.

Pull requests should include a summary, screenshots for visual changes, environment variable notes, and verification steps such as `pnpm lint` and `pnpm build`.

## Agent-Specific Instructions

This project uses a Next.js version with breaking changes. Before editing Next.js code, read the relevant guide in `node_modules/next/dist/docs/` and follow deprecation notices.

Build this as a real professional portfolio: mobile-first, SEO-aware, maintainable, and ready for a private single-owner admin area with clean project CRUD.
