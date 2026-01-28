import config from "./config"
import links from "./links"
import customIcons from "./icons"

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
    }
}

class LinkRewriter {
    element(element) {
        links.forEach(link =>
            element.append(
                `<a href="${link.url}" target="_blank">${link.name}</a>`,
                {
                    html: true,
                },
            ),
        )
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
        element.setAttribute("style", "fill: white")

        links.forEach(link => {
            let iconHTML = ""

            if (link["fa-name"]) {
                // Font Awesome icon using CSS classes
                iconHTML = `<i class="fa fa-solid fa-${link["fa-name"]}" style="width: 1em; height: 1em; display: inline-block;"></i>`
            } else if (link.svg) {
                // Custom SVG icon
                const customSvg = customIcons[link.svg]
                if (customSvg) {
                    iconHTML = customSvg
                } else {
                    // Fallback if custom icon not found
                    console.warn(`Custom icon "${link.svg}" not found in registry`)
                    iconHTML = `<span>${link.name}</span>`
                }
            }

            element.append(
                // eslint-disable-next-line quotes
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
