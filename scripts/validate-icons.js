#!/usr/bin/env node
/**
 * Build-time script to validate Font Awesome icon names in config.json
 * Emits warnings (non-blocking) for invalid icon names
 */

const fs = require("fs")
const path = require("path")

// Define the valid Font Awesome icons here
const VALID_FONT_AWESOME_ICONS = new Set([
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

function validateConfig() {
    try {
        const configPath = path.join(__dirname, "..", "src", "config.json")
        const configContent = fs.readFileSync(configPath, "utf-8")
        const config = JSON.parse(configContent)

        const links = config.links || []
        const invalidIcons = []

        links.forEach((link, index) => {
            if (
                link["fa-name"] &&
                !VALID_FONT_AWESOME_ICONS.has(link["fa-name"])
            ) {
                invalidIcons.push({
                    index,
                    name: link.name,
                    icon: link["fa-name"],
                })
            }
        })

        if (invalidIcons.length > 0) {
            console.warn("\n⚠️  Font Awesome Icon Validation Warnings:")
            invalidIcons.forEach(item => {
                console.warn(
                    `   Link #${item.index + 1} "${item.name}": Icon "fa-${item.icon}" is not in the curated list. Will fallback to "globe" at runtime.`,
                )
            })
            console.warn(
                '   Add the icon to scripts/validate-icons.js VALID_FONT_AWESOME_ICONS if it\'s valid.\n',
            )
        } else {
            console.log("✅ All Font Awesome icons validated successfully")
        }
    } catch (error) {
        console.warn(`Icon validation: Could not validate config - ${error.message}`)
    }
}

validateConfig()
