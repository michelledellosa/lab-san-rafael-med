import { MenuType } from "@/interFace/interFace";

const menu_data: MenuType[] = [
    {
        id: 1,
        hasDropdown: false,
        active: true,
        title: "Inicio",
       // pluseIncon: true,
        link: "/",
        /*submenus: [
            { title: "Home 1", link: "/" },
            { title: "Home 2", link: "/home-2" },
            { title: "Home 3", link: "/home-3" },
        ],*/

        /*
           id: 6,
        hasDropdown: false,
        active: true,
        title: "Contáctenos",
        link: "/contact",
        
        */
    },
    {
        id: 2,
        hasDropdown: false,
        active: true,
        title: "Sobre Nosotros",
     //   pluseIncon: true,
        link: "/about",
        /*submenus: [
            { title: "Shop grid", link: "/shop-grid" },
            { title: "Shop full width", link: "/shop-full-width" },
            { title: "Shop 04 column", link: "/shop-04-column" },
            { title: "Shop left 02 column", link: "/shop-left-02-column" },
            { title: "shop left sidebar", link: "/shop-left-sidebar" },
            { title: "Shop right sidebar", link: "/shop-right-sidebar" },
            { title: "Product details", link: "/product-details" },
            { title: "Wishlist", link: "/wishlist" },
            { title: "Checkout", link: "/checkout" },
            { title: "Cart", link: "/cart" },
            { title: "Login", link: "/login" },
            { title: "Register", link: "/register" },
        ],*/
    },
   /* {
        id: 3,
        hasDropdown: true,
        active: true,
        title: "Contáctenos",
        pluseIncon: true,
        link: "#",
        submenus: [
            { title: "Team", link: "/team" },
            { title: "Team-details", link: "/team-details" }
        ],
    },*/
    {
        id: 4,
        hasDropdown: true,
        active: true,
        title: "Servicios",
        pluseIncon: true,
        link: "#",
        submenus: [
            { title: "Blog grid", link: "/blog-grid" },
            { title: "Blog-grid-sidebar", link: "/blog-grid-sidebar" },
            { title: "Blog-standard", link: "/services" },
            { title: "blog details", link: "/blog-details" },
        ],
    },
   /* {
        id: 5,
        hasDropdown: true,
        active: true,
        title: "Pages",
        pluseIncon: true,
        link: "#",
        submenus: [
            { title: "My Account", link: "/my-account" },
            { title: "About", link: "/about" },
            { title: "Terms & Condition", link: "/terms-condition" },
            { title: "Privacy & Policy", link: "/privacy-policy" },
            { title: "Refund Policy", link: "/refund-policy" },
            { title: "Faq", link: "/faq" },
            { title: "404 Page", link: "/404-page" },
        ],
    },*/
    {
        id: 6,
        hasDropdown: false,
        active: true,
        title: "Contáctenos",
        link: "/contact",
    },
]

export default menu_data;