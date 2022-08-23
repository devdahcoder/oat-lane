import { navigationStyle } from "../styles/globalStyle";
import { HeaderNavigation } from "../types";
import { HeaderNavigationEnum } from "../types/enums";


export const navigation: HeaderNavigation[] = [
    {
        id: 1,
        title: "Features",
        href: "#",
        type: HeaderNavigationEnum.LINK,
        className: `${navigationStyle}`,
    },
    {
        id: 2,
        title: "Resources",
        href: "#",
        type: HeaderNavigationEnum.LINK,
        className: `${navigationStyle}`,
    },
    {
        id: 3,
        title: "Pricing",
        href: "#",
        type: HeaderNavigationEnum.LINK,
        className: `${navigationStyle}`,
    },
    {
        id: 4,
        title: "Enterprise",
        href: "#",
        type: HeaderNavigationEnum.LINK,
        className: `${navigationStyle}`,
    },
    {
        id: 5,
        title: "Login",
        href: "#",
        type: HeaderNavigationEnum.LINK,
        className: `
            bg-white text-black px-9 py-3.5 border border-green-100 transition-all delay-100 ease-linear 
            rounded-md hover:bg-green-100 hover:text-white`,
    },
    {
        id: 6,
        title: "Sign Up",
        href: "#",
        type: HeaderNavigationEnum.LINK,
        className: `
            bg-green-100 text-white px-9 py-3.5 border border-green-100 transition-all delay-100 ease-linear 
            rounded-md hover:bg-white hover:text-green-100`,
    }
]