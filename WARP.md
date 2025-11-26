# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Overview

- This repository is an Astro 5 project created from the "Basics" starter.
- The project uses npm scripts defined in `package.json` and currently has no custom linting or testing setup beyond what Astro provides.

## Commands

All commands are run from the project root.

### Install dependencies

- `npm install` – Install project dependencies.

### Development server

- `npm run dev` – Start the Astro dev server (by default on `http://localhost:4321`).

Use this during active development; changes to `.astro` files and assets are hot-reloaded.

### Build & preview

- `npm run build` – Build the production site into the `dist/` directory.
- `npm run preview` – Serve the built site locally for a production-like preview.

### Astro CLI helpers

The `astro` CLI is exposed via an npm script:

- `npm run astro -- <subcommand>` – Run Astro CLI commands.
  - Examples commonly useful in this repo:
    - `npm run astro -- check` – Run Astro's project check (validation/type-check).
    - `npm run astro -- add <integration>` – Add an official Astro integration.

### Linting & tests

- There are **no `lint` or `test` scripts defined** in `package.json` yet.
- Before assuming tests exist, inspect `package.json` for `test`/`lint` scripts and any config files (e.g. Vitest/Jest/ESLint configs). If/when a test runner is added, update this section with:
  - the main test command (e.g. `npm test` or `npm run test`), and
  - how to run a single test file or test pattern (usually via `-- <pattern>` arguments to the test runner).

## High-level architecture

This is a small Astro content site with file-based routing and a single main page. The important pieces are:

### Routing and pages (`src/pages`)

- `src/pages/index.astro` is the root route (`/`).
  - It imports and composes higher-level UI primitives:
    - `../layouts/Layout.astro` – the global HTML shell.
    - `../components/Welcome.astro` – the main landing page content.
  - To add new pages/routes, create new `.astro` files under `src/pages` (e.g. `src/pages/about.astro` → `/about`).

### Layout shell (`src/layouts/Layout.astro`)

- Defines the overall HTML document structure (`<!doctype html>`, `<html>`, `<head>`, `<body>`).
- Sets core `<meta>` tags, favicon, viewport, and `Astro.generator`.
- Provides a `<slot />` where page content from `src/pages/*` is rendered.
- Includes global styles that apply to the entire document (resets for `html`/`body`, full-height layout, etc.).

When modifying global metadata, HTML `<head>` content, or page-wide styling, prefer editing `src/layouts/Layout.astro` rather than individual pages.

### Components (`src/components`)

- `src/components/Welcome.astro` is the main hero/landing component used on the home page.
  - Imports image assets from `src/assets` and renders the primary UI for the starter (logo, docs/Discord links, "What’s New" card).
  - Encapsulates most of the styling for the landing page inside a `<style>` block scoped to this component.

For new sections or reusable UI, create additional `.astro` components in `src/components` and compose them from pages (e.g. from `index.astro`) within the `Layout` wrapper.

### Assets (`src/assets` and `public`)

- `src/assets/` – Imported static assets used by components (e.g. the Astro logo and background SVG). These are bundled via Astro's asset pipeline and typically imported in `.astro` files.
- `public/` – Static files served at the site root without processing (e.g. `public/favicon.svg` is available at `/favicon.svg`).

Prefer `src/assets` for component-specific images that are imported in `.astro` files; use `public/` for static files that should be addressable by direct URL and not tied to a specific component.
