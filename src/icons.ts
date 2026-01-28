// Custom SVG icon definitions
// Map custom icon names to their SVG strings

const customIcons: Record<string, string> = {
    // Add custom SVG icons here with their full SVG code
    // Example:
    // "myCustomIcon": '<svg xmlns="http://www.w3.org/2000/svg" style="fill: inherit; width: inherit;" role="img" viewBox="0 0 24 24"><title>My Icon</title><path d="M..."/></svg>'
}

// Curated list of valid Font Awesome 6.4.0 Solid icons
// This is used for runtime validation to prevent silent failures with invalid icon names
export const VALID_FONT_AWESOME_ICONS = new Set([
    // Social media
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
    "wordpress",
    "drupal",
    "react",
    "node",
    "python",
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

export default customIcons
