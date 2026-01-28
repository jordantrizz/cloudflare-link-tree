# AGENTS.md

## Development Notes
* Always provide a git commit message single line with the relative subject feat:, fix:, docs:, style:, refactor:, perf:, test:, chore:

## Overview
This project now supports two methods for displaying social media icons:
1. **Font Awesome Icons via CSS** - Lightweight, cached by browsers, uses CSS classes
2. **Custom SVG Icons** - For icons not available in Font Awesome

## Architecture

### Files Modified/Created

#### 1. `src/config.json`
Updated the link structure to use either:
- `"fa-name": "icon-name"` - For Font Awesome solid icons (e.g., `"mug-hot"`, `"globe"`, `"github"`)
- `"svg": "customIconName"` - For custom SVG icons (references the registry in `icons.ts`)

**Example:**
```json
{
  "name": "Buy me a Coffee",
  "url": "https://ko-fi.com/jordantrask",
  "fa-name": "mug-hot"
}
```

#### 2. `src/icons.ts` (New File)
A registry for custom SVG icons. Map custom icon names to their full SVG strings.

**Structure:**
```typescript
const customIcons: Record<string, string> = {
  "myCustomIcon": '<svg xmlns="..." style="fill: inherit; width: inherit;">...</svg>'
}
```

To add a custom icon:
1. Define it in the `customIcons` object in `src/icons.ts`
2. Reference it in `config.json` with `"svg": "myCustomIcon"`

#### 3. `src/rewriters.ts` (Updated)
- **HeadRewriter**: Added Font Awesome CDN link (`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css`)
- **SocialRewriter**: Updated to handle both icon types:
  - If `fa-name` exists: Renders as `<i class="fa fa-solid fa-{iconName}"></i>`
  - If `svg` exists: Looks up custom SVG from registry and renders inline

#### 4. `src/config.ts` (Updated)
Updated the `Link` interface to support both icon types:
```typescript
interface Link {
    name: string
    url: string
    "fa-name"?: string  // Optional Font Awesome icon name
    svg?: string        // Optional custom SVG icon name
}
```

## How It Works

### Font Awesome Icons
1. Font Awesome CSS is loaded via CDN in the `<head>` element
2. Icons are rendered as `<i>` tags with Font Awesome classes
3. CSS handles all styling and rendering
4. Lighter payload, uses browser caching

### Custom SVG Icons
1. Custom SVG definitions are stored in `src/icons.ts`
2. When a link uses `"svg": "customIconName"`, the SocialRewriter looks up the icon in the registry
3. The full SVG string is rendered inline in the HTML
4. Useful for unique/branded icons not in Font Awesome

## Usage Examples

### Adding a Font Awesome Icon
```json
{
  "name": "GitHub",
  "url": "https://github.com/username",
  "fa-name": "github"
}
```

### Adding a Custom SVG Icon
1. First, add the SVG to `src/icons.ts`:
```typescript
const customIcons: Record<string, string> = {
  "myLogo": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="..."/></svg>'
}
```

2. Then reference it in `config.json`:
```json
{
  "name": "My Brand",
  "url": "https://mybrand.com",
  "svg": "myLogo"
}
```

## Font Awesome Available Icons
Font Awesome Solid style provides 3,600+ icons. Common ones used:
- `github` - GitHub
- `instagram` - Instagram
- `facebook` - Facebook
- `linkedin` - LinkedIn
- `globe` - Website/personal site
- `mug-hot` - Coffee/donations
- `wordpress` - WordPress

Browse all available icons at: https://fontawesome.com/icons

## Development Server
Run with: `wrangler dev`

## Building
Run with: `wrangler build`

## Migration Notes
- Previous config used inline `"svg"` fields with full SVG code
- All existing SVG icons have been migrated to Font Awesome equivalents
- If you need the old inline SVG approach, use the `"svg"` field with a custom icon name in the registry
