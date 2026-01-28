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

interface Config {
    profile: Profile
    links: Link[]
}

const config: Config = require("./config.json")

export default config
