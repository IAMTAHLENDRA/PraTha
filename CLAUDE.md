# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start       # Dev server (localhost:3000)
npm run build   # Production build into build/
npm test        # react-scripts test (watch mode)
npm run deploy  # Build + publish build/ to the gh-pages branch
```

## Architecture

Placeholder React (CRA, react-scripts 5, React 18) site, a sibling of `../couple-gift`. Currently just one "coming soon" screen in `src/App.js`, with the Pink & Rose palette as CSS variables in `src/App.css`. Fonts (Cormorant Garamond, Great Vibes, Poppins) load in `public/index.html`.

Deployed to GitHub Pages at `https://iamtahlendra.github.io/PraTha/` (the `homepage` in `package.json`; the path is case-sensitive). Photos go in `public/photos/` and are referenced by URL, not imported.
