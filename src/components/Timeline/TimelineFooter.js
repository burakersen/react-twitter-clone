import React from 'react'

const footerLinks = [
    {
        name: "Terms of Service",
        href: "#"
    },
    {
        name: "Privacy Policy",
        href: "#"
    },
    {
        name: "Cookie Policy",
        href: "#"
    },
    {
        name: "Imprint",
        href: "#"
    },
    {
        name: "Accessibility",
        href: "#"
    },
    {
        name: "Ads info",
        href: "#"
    },
    {
        name: "More...",
        href: "#"
    },
    {
        name: "© 2022 Twitter, Inc.",
        href: "#"
    },
];



const TimelineFooter = () => {
    return (
        <div>
            <div className="m-3 px-3 flex flex-wrap items-center">
                {footerLinks.map(({ name, href}, index) => (
                    <a key={name} href={href} className="mr-3 text-sm hover:underline text-gray-light3">
                        <span>{name}</span>
                    </a>
                ))
                }

            </div>
        </div>
    )
}

export default TimelineFooter