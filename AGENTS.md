# AGENTS.md

## Development Notes
Commit format: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `perf:`, `test:`, `chore:`

## Overview
Two icon methods: **Font Awesome** (lightweight, CSS-based) and **Custom SVG** (inline, for unique icons).

## Configuration

| File | Purpose |
|------|---------|
| `config.json` | Use `"fa-name": "icon-name"` or `"svg": "customIconName"` |
| `icons.ts` | Registry for custom SVG icons |
| `rewriters.ts` | Renders icons (Font Awesome CDN link + lookup logic) |
| `config.ts` | `Link` interface with optional `fa-name` and `svg` fields |

**Font Awesome Example:**
```json
{ "name": "GitHub", "url": "https://github.com/user", "fa-name": "github" }
```

**Custom SVG:**
1. Add to `src/icons.ts`: `{ "myIcon": '<svg>...</svg>' }`
2. Reference in `config.json`: `{ "svg": "myIcon" }`

## Font Awesome Icons
Browse available icons: https://fontawesome.com/icons (3,600+ Solid icons available)

Common icons: `github`, `instagram`, `facebook`, `linkedin`, `globe`, `mug-hot`, `wordpress`

## Development
- Run: `wrangler dev`
- Build: `wrangler build`
