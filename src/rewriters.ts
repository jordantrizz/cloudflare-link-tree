import config from "./config"
import links from "./links"
import customIcons, { VALID_FONT_AWESOME_ICONS, VALID_FONT_AWESOME_BRAND_ICONS, VALID_FONT_AWESOME_SOLID_ICONS } from "./icons"

// Get icon configuration with defaults
const iconConfig = config.icons || {}
const iconColor = iconConfig.color || "white"
const textIconColor = iconConfig.textIconColor || "black"
const iconSize = iconConfig.size || 24

/**
 * Validates if a Font Awesome icon name exists in the curated list
 */
function isValidFontAwesomeIcon(iconName: string): boolean {
    return VALID_FONT_AWESOME_ICONS.has(iconName)
}

/**
 * Determines the correct Font Awesome style (solid or brands) for an icon
 */
function getFontAwesomeStyle(iconName: string): "solid" | "brands" {
    if (VALID_FONT_AWESOME_BRAND_ICONS.has(iconName)) {
        return "brands"
    }
    return "solid"
}

/**
 * Generates HTML for an icon with configurable color and size
 */
function generateIconHTML(link, showLabel: boolean = false, color: string = iconColor): string {
    let iconHTML = ""

    if (link["fa-name"]) {
        // Font Awesome icon using CSS classes
        const faName = link["fa-name"]
        
        if (isValidFontAwesomeIcon(faName)) {
            // Valid icon - determine correct style (solid or brands)
            const style = getFontAwesomeStyle(faName)
            iconHTML = `<i class="fa-${style} fa-${faName}" style="width: ${iconSize}px; height: ${iconSize}px; display: inline-block; font-size: ${iconSize}px; color: ${color};"></i>`
        } else {
            // Invalid icon - fallback to globe and log error
            console.error(`Invalid Font Awesome icon: "${faName}". Falling back to "globe".`)
            iconHTML = `<i class="fa-solid fa-globe" style="width: ${iconSize}px; height: ${iconSize}px; display: inline-block; font-size: ${iconSize}px; color: ${color};"></i>`
        }
    } else if (link.svg) {
        // Custom SVG icon
        const customSvg = customIcons[link.svg]
        if (customSvg) {
            iconHTML = customSvg
        } else {
            // Fallback if custom icon not found
            console.warn(`Custom icon "${link.svg}" not found in registry`)
            if (showLabel) {
                iconHTML = ""
            } else {
                iconHTML = `<span>${link.name}</span>`
            }
        }
    }

    return iconHTML
}

class AvatarRewriter {
    element(element) {
        const photoUrl = config.profile.photoUrl
        // Check if photoUrl is a local file or a full URL
        const imageUrl =
            photoUrl.startsWith("http://") || photoUrl.startsWith("https://")
                ? photoUrl
                : photoUrl
        element.setAttribute("src", imageUrl)
    }
}

class BodyRewriter {
    element(element) {
        element.setAttribute(
            "style",
            "background-image: url(https://bg-codes.netlify.app/liquid.svg); background-position: center; background-size: cover;",
        )
    }
}

class HeadRewriter {
    element(element) {
        element.append(
            // eslint-disable-next-line quotes
            '<link rel="icon" type="image/png" href="https://bg-codes.netlify.app/favicon.png">',
            {
                html: true,
            },
        )
        element.append(
            // eslint-disable-next-line quotes
            '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">',
            {
                html: true,
            },
        )
        element.append(
            `<style>
                #links a:hover i {
                    color: white !important;
                }
            </style>`,
            {
                html: true,
            },
        )
    }
}

class LinkRewriter {
    element(element) {
        links.forEach(link => {
            const iconHTML = generateIconHTML(link, true, textIconColor)
            const iconPrefix = iconHTML ? `${iconHTML} ` : ""
            element.append(
                `<a href="${link.url}" target="_blank">${iconPrefix}${link.name}</a>`,
                {
                    html: true,
                },
            )
        })
    }
}

class NameRewriter {
    element(element) {
        element.setInnerContent(config.profile.name)
    }
}

class ProfileRewriter {
    element(element) {
        element.removeAttribute("style")
    }
}

class SocialRewriter {
    element(element) {
        element.setAttribute("style", `fill: ${iconColor}`)

        links.forEach(link => {
            const iconHTML = generateIconHTML(link, false)
            element.append(
                `<a href="${link.url}" target="_blank">${iconHTML}</a>`,
                {
                    html: true,
                },
            )
        })
    }
}

class TitleRewriter {
    element(element) {
        element.setInnerContent(config.profile.title)
    }
}

export {
    AvatarRewriter,
    BodyRewriter,
    HeadRewriter,
    LinkRewriter,
    NameRewriter,
    ProfileRewriter,
    SocialRewriter,
    TitleRewriter,
}
