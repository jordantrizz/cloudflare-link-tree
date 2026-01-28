# AGENTS.md

## Cloudflare Workers Deployment Notes

### Commit Format
Use conventional commits: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `perf:`, `test:`, `chore:`

Example: `git commit -m "fix: resolve TypeScript compilation errors"`

### Deployment Pipeline
- **Git**: Push to `master` branch triggers automatic Cloudflare build
- **Build Command**: `npm run build`
- **Deploy Command**: `npm run deploy` or `wrangler deploy`
- **Bundler**: Wrangler's built-in esbuild (no webpack)

### TypeScript Configuration
- **Version**: 5.4+ targeting ES2022
- **Module System**: ESNext with bundler resolution
- **Type Definitions**: `["@cloudflare/workers-types", "node"]`

### Key Dependencies
| Package | Version | Purpose |
|---------|---------|---------|
| wrangler | ^4.0.0 | Cloudflare CLI & bundler |
| itty-router | ^5.0.0 | Lightweight router |
| typescript | ^5.4.0 | TypeScript compiler |
| @cloudflare/workers-types | ^4.x | CF Workers API types |

### Scripts
- `npm run dev` - Start local development server (http://localhost:8787)
- `npm run build` - Validate icons + dry-run deploy
- `npm run deploy` - Deploy to Cloudflare Workers
- `npm run validate` - Validate Font Awesome icons only
- `npm run lint` - Run ESLint
- `npm run format` - Format with Prettier

---

## Project Overview
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

## Google Analytics

Add your tracking ID to `config.json`:

```json
{
  "analytics": {
    "googleAnalyticsId": "G-XXXXXXXXXX"
  }
}
```

Supported formats:
- **GA4**: `G-XXXXXXXXXX` (recommended)
- **Universal Analytics**: `UA-XXXXXXXX-X` (legacy)
- **Google Tag Manager**: `GTM-XXXXXXX`

## Favicon

Configure the favicon in `config.json`. Two types are supported:

**Generated from letters (default):**
```json
{
  "favicon": {
    "type": "letters",
    "letters": "JT",
    "backgroundColor": "#4f46e5",
    "textColor": "white"
  }
}
```

**Custom URL:**
```json
{
  "favicon": {
    "type": "url",
    "url": "https://example.com/favicon.png"
  }
}
```

If omitted, the favicon defaults to the first letter of your profile name.

## Font Awesome Icons
Browse available icons: https://fontawesome.com/icons (3,600+ Solid icons available)

Common icons: `github`, `instagram`, `facebook`, `linkedin`, `globe`, `mug-hot`, `wordpress`

## Local Development
```bash
# Install dependencies
npm install

# Start local development server (http://localhost:8787)
npm run dev

# Test in browser
# Navigate to http://localhost:8787

# Deploy to production
npm run deploy
```
