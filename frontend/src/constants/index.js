import {facebook, instagram, twitter, carrot, spoon, recipe} from "../assets/icons";
import dessert from "../assets/img/menu_dessert.jpg";
import lunch from "../assets/img/menu_lunch.avif";
import dinner from "../assets/img/menu_dinner.webp";
import {friedChicken, chickenMaryland, mixedToastFresh, giatMeatBall, spaghetti} from "../assets/img";

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];

export const navLinks = [
    { href: "/", label: "Home"},
    { href: "/menu", label: "Menu"},
    { href: "/contact-us", label: "Contact us"}
];

export const services = [
    { 
        title: "QUALITY FOODS",
        subtext: "The quality of food begins on the farm and is affected at each link of the food chain, and through the food flow in our kitchen.",
        icon: carrot,
    },
    {
        title: "SECRET RECIPES",
        subtext: "This is a destination for unique recipes, solid cooking techniques, and kitchen inspiration - a mix of swoon worthy food.",
        icon: recipe,
    },
    {
        title: "EXCELLENCE SERVICE",
        subtext: "The best floor staff exhibit a passion for what they do and their aim for every single customer to leave happy.",
        icon: spoon,
    }
]

export const bannerInfo = [
    {
        title: "FRIED CHICKEN & SAUCE",
        price: 13,
        description: "Chicken Maryland with bacon, corn, banana, chick peas, cannelloni beans, fresh mint, wine and cream. Delicious served with some sautéed mushrooms or baked tomatoes, this warming dish is perfect for those cold winter nights or served at a summer BBQ. This is a great comfort dish. ",
        img: friedChicken
    },
    {
        title: "PRESSED CHICKEN MARYLAND",
        price: 15,
        description: "Chicken Maryland with bacon, corn, banana, chick peas, cannelloni beans, fresh mint, wine and cream. Delicious served with some sautéed mushrooms or baked tomatoes, this warming dish is perfect for those cold winter nights or served at a summer BBQ. This is a great comfort dish.",
        img: chickenMaryland
    }
] 

export const bestChoices = [
    {
        title: "APPEALING MENU",
        description: "A great menu has appealing dish descriptions that are concise but with enough infomation ",
    },
    {
        title: "DECOR THAT WOWS",
        description: "We all love a bit of bling and a great restaurant doesn't underestimate the appeal of a beautiful interior"
    },
    {
        title: "COMFORTABLE SEATING",
        description: "Great restaurants offer comfortable chair that are an appropriate height with decently sized table"
    },
    {
        title: "PERFECT TIMING",
        description: "The co-ordination between the kitchen and floor is a well orchestrated ballet at a great restaurant"
    }
]

export const getInTouch = ["Choam Chao, Phnom Penh", "016323451", "rannidecafe@website.com"];
export const workHour = [
    {date: "Monday ________________ 09:00 - 21:00"},
    {date: "Tuesday ________________ 09:00 - 21:00"},
    {date: "Wednesday ____________ 09:00 - 21:00"},
    {date: "Thursday _______________ 09:00 - 21:00"},
    {date: "Friday __________________ 09:00 - 21:00"},
    {date: "Saturday _______________ 09:00 - 21:00"},
    {date: "Sunday ________________ 09:00 - 21:00"},
]

export const menuCategory = ["DESSERT", "DINNER", "LUNCH"];

export const menuList = [
    {
        title: "dessert",
        img: dessert,
        list: [
            {
                name: "GARDEN SUMMER TRIFLE ................................................ ",
                detail: "Mango, passionfruit, pineapple, sweet cream",
                price: 7
            },
            {
                name: "AUSTRALIAN CHEESE PLATE ............................................ ",
                detail: "Quince paste and house baked lavosh",
                price: 13
            },
            {
                name: "RICH CHOCOLATE BROWIE ............................................... ",
                detail: "Chocolate sauce, salted caramel popcorn gelato & caramelised popcorn",
                price: 8
            },
            {
                name: "ZUCCOTTO DI PANETTONE ............................................... ",
                detail: "Panettone stuffed, vanilla ice cream, candied fruit, maraschino cherries",
                price: 6
            },
            {
                name: "ICE CREAM SELECTION ...................................................... ",
                detail: "Ice cream, streusel, shaved chocolate",
                price: 7
            },
            {
                name: "LEMON MERINGUE TART .................................................. ",
                detail: "Lemon curd, scorched meringue, vanilla crumb",
                price: 13
            }
        ]
    },
    {
        title: "dinner",
        img: dinner,
        list: [
            {
                name: "FRIED CHICKEN & SAUCE ................................................. ",
                detail: "Chicken, Salt, Sugar, Tamarind, Aromatic onions, spices",
                price : 12
            },
            {
                name: "GARDEN SUMMER TRIFLE ................................................ ",
                detail: "Mango, passionfruit, pineapple, sweet cream",
                price: 7
            },
            {
                name: "AUSTRALIAN CHEESE PLATE ............................................ ",
                detail: "Quince paste and house baked lavosh",
                price: 13
            },
            {
                name: "LEMON MERINGUE TART .................................................. ",
                detail: "Lemon curd, scorched meringue, vanilla crumb",
                price: 13
            },
            {
                name: "RICH CHOCOLATE BROWIE ............................................... ",
                detail: "Chocolate sauce, salted caramel popcorn gelato & caramelised popcorn",
                price: 8
            },
            {
                name: "ZUCCOTTO DI PANETTONE ............................................... ",
                detail: "Panettone stuffed, vanilla ice cream, candied fruit, maraschino cherries",
                price: 6
            },
        ]
    },
    {
        title: "lunch",
        img: lunch,
        list: [
            {
                name: "FRIED CHICKEN & SAUCE ................................................. ",
                detail: "Chicken, Salt, Sugar, Tamarind, Aromatic onions, spices",
                price : 12
            },
            {
                name: "GARDEN SUMMER TRIFLE ................................................ ",
                detail: "Mango, passionfruit, pineapple, sweet cream",
                price: 7
            },
            {
                name: "AUSTRALIAN CHEESE PLATE ............................................ ",
                detail: "Quince paste and house baked lavosh",
                price: 13
            },
            {
                name: "LEMON MERINGUE TART .................................................. ",
                detail: "Lemon curd, scorched meringue, vanilla crumb",
                price: 13
            },
            {
                name: "RICH CHOCOLATE BROWIE ............................................... ",
                detail: "Chocolate sauce, salted caramel popcorn gelato & caramelised popcorn",
                price: 8
            },
            {
                name: "ZUCCOTTO DI PANETTONE ............................................... ",
                detail: "Panettone stuffed, vanilla ice cream, candied fruit, maraschino cherries",
                price: 6
            },
        ]
    },
    
];

export const locations = [
    {
        name: "PHNOM PENH",
        website: "lannidecafe@website.com",
        tel: "++855 164 899 99",
        detail: "Choam Chao, Phnom Penh"
    },
    {
        name: "SIEM REAP",
        website: "lannidecafe@website.com",
        tel: "+855 693 046 654",
        detail: "Leang Dai, Siem Reap"
    },
    {
        name: "PREAH SIHANOUK",
        website: "lannidecafe@website.com",
        tel: "+855 923 456 664",
        detail: "Phnom Thmei, Sihanouk Ville"
    }
];

export const products = [
    {
        id: 1,
        name: "Chicken Maryland",
        price: 15,
        img: chickenMaryland
    },
    {
        id: 2,
        name: "Fried Chicken & Sauce",
        price: 10,
        img: friedChicken
    },
    {
        id: 3,
        name: "Mixed Toast Fresh",
        price: 6,
        img: mixedToastFresh,
    },
    { 
        id:4,
        name: "Spaghetti",
        price: 8,
        img: spaghetti
    },
    {
        id: 5,
        name: "Giant Meat BAlls",
        price: 5,
        img: giatMeatBall
    },
    {
        id: 6,
        name: "Chicken Maryland",
        price: 15,
        img: chickenMaryland
    },
    {
        id: 7,
        name: "Fried Chicken & Sauce",
        price: 10,
        img: friedChicken
    },
    {
        id: 8,
        name: "Mixed Toast Fresh",
        price: 6,
        img: mixedToastFresh,
    },
    {
        id: 9,
        name: "Spaghetti",
        price: 8,
        img: spaghetti
    },
    {
        id: 10,
        name: "Giant Meat BAlls",
        price: 5,
        img: giatMeatBall
    }
];