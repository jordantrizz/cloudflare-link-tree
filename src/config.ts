interface Link {
    name: string
    url: string
    "fa-name"?: string
    svg?: string
    /**
     * Whether to open the link in a new tab
     * @default false
     */
    newTab?: boolean
}

interface Profile {
    name: string
    title: string
    description: string
    /**
     * photoUrl can be either:
     * - A full URL (e.g., "https://example.com/photo.jpg")
     * - A local file path (e.g., "./images/photo.jpg" or "/images/photo.jpg")
     */
    photoUrl: string
}

interface IconConfig {
    /**
     * Icon color for social icons at the bottom (CSS color value)
     * @default "white"
     */
    color?: string
    /**
     * Icon color for icons beside link text (CSS color value)
     * @default "black"
     */
    textIconColor?: string
    /**
     * Icon size in pixels
     * @default 24
     */
    size?: number
}

interface AnalyticsConfig {
    /**
     * Google Analytics Measurement ID (e.g., "G-XXXXXXXXXX" for GA4 or "UA-XXXXXXXX-X" for Universal Analytics)
     */
    googleAnalyticsId?: string
}

interface FaviconConfig {
    /**
     * Type of favicon: "url" for external image, "letters" for generated from text
     * @default "letters"
     */
    type?: "url" | "letters"
    /**
     * URL to favicon image (when type is "url")
     */
    url?: string
    /**
     * Letters to display in favicon (when type is "letters", max 2-3 chars recommended)
     * @default First letter of profile name
     */
    letters?: string
    /**
     * Background color for generated favicon (CSS color)
     * @default "#4f46e5" (indigo)
     */
    backgroundColor?: string
    /**
     * Text color for generated favicon (CSS color)
     * @default "white"
     */
    textColor?: string
}

interface Config {
    profile: Profile
    links: Link[]
    /**
     * Global icon configuration
     */
    icons?: IconConfig
    /**
     * Analytics tracking configuration
     */
    analytics?: AnalyticsConfig
    /**
     * Favicon configuration
     */
    favicon?: FaviconConfig
}

import configData from "./config.json"
const config: Config = configData as Config

export default config
