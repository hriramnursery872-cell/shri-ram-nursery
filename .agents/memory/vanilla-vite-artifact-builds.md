---
name: Vanilla Vite artifact builds
description: Durable build constraints for serving a multi-page vanilla HTML app through a Replit Vite artifact.
---

For a multi-page vanilla app, Vite must receive every HTML page as an explicit Rollup input, runtime files fetched by relative paths (service workers, JSON, and unbundled modules) must be preserved at those exact paths in the production output, and browser-linked CSS should be served from Vite's public directory rather than as a source-file URL.

**Why:** A default Vite build only emitted the root page and hashed imported assets, which made secondary HTML routes and service-worker cache paths incomplete for publishing; direct source CSS URLs were returned as Vite JavaScript transforms in the dev preview and were ignored by the browser.

**How to apply:** Keep the artifact's managed workflow and static production output, add explicit page inputs, serve runtime-linked CSS from public, and preserve the foundation files during the build without introducing a frontend framework.