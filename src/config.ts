interface Link {
    name: string
    url: string
    "fa-name"?: string
    svg?: string
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

interface Config {
    profile: Profile
    links: Link[]
    /**
     * Global icon configuration
     */
    icons?: IconConfig
}

import configData from "./config.json"
const config: Config = configData as Config

export default config
