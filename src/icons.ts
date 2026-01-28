// Custom SVG icon definitions
// Map custom icon names to their SVG strings

const customIcons: Record<string, string> = {
    // Add custom SVG icons here with their full SVG code
    // Example:
    // "myCustomIcon": '<svg xmlns="http://www.w3.org/2000/svg" style="fill: inherit; width: inherit;" role="img" viewBox="0 0 24 24"><title>My Icon</title><path d="M..."/></svg>'
}

// Font Awesome Brand icons (fa-brands)
// Social media and company logos
export const VALID_FONT_AWESOME_BRAND_ICONS = new Set([
    "github",
    "instagram",
    "facebook",
    "linkedin",
    "twitter",
    "youtube",
    "tiktok",
    "discord",
    "slack",
    "reddit",
    "twitch",
    "telegram",
    "whatsapp",
    "pinterest",
    "snapchat",
    "wordpress",
    "drupal",
])

// Curated list of valid Font Awesome 6.4.0 Solid icons
// This is used for runtime validation to prevent silent failures with invalid icon names
export const VALID_FONT_AWESOME_SOLID_ICONS = new Set([
    // Common utility/action icons
    "globe",
    "mug-hot",
    "envelope",
    "phone",
    "link",
    "share",
    "download",
    "upload",
    "heart",
    "star",
    "comment",
    "message",
    "bell",
    "cog",
    "gear",
    "sliders",
    "user",
    "users",
    "briefcase",
    "code",
    "terminal",
    "database",
    "server",
    "cloud",
    "dropbox",
    "google-drive",
    "calendar",
    "clock",
    "map",
    "camera",
    "image",
    "video",
    "music",
    "volume",
    "search",
    "filter",
    "check",
    "times",
    "plus",
    "minus",
    "arrow-up",
    "arrow-down",
])

// Combined set for backward compatibility
export const VALID_FONT_AWESOME_ICONS = new Set([
    ...VALID_FONT_AWESOME_BRAND_ICONS,
    ...VALID_FONT_AWESOME_SOLID_ICONS,
])

export default customIcons
