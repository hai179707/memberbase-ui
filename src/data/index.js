import config from "@/config"

export const navs = [
    {
        id: 1,
        url: config.routes.resources,
        text: "All Resources",
    },
    {
        id: 2,
        url: config.routes.logIn,
        text: "Log In",
    },
]

export const featuredResources = [
    {
        id: 1,
        path: 'grids-alignment',
        author: 'Nikolai Bain',
        title: 'Grids & Alignment',
        description: 'Expedita laborum suscipit sequi et nobis voluptas fuga placeat. Omnis est ratione. Repellendus recusandae a. Nulla quia cum aliquam dolores beatae tempore harum pariatur. Velit amet officiis.',
        image: 'https://assets.website-files.com/62aee78456e420f166ac4d1d/62b0e7a32dd6005e84c2ec75_Ebook%20Cover%201.svg'
    },
    {
        id: 2,
        path: 'remote-work-for-design-teams',
        author: 'Maxwell Milton',
        title: 'Remote Work for Design Teams',
        description: 'Repudiandae asperiores excepturi repellat minus id et. Saepe molestiae accusantium fugit et aut. Reicie',
        image: 'https://assets.website-files.com/62aee78456e420f166ac4d1d/62b0e7b28cc691b2cd70c6ec_Ebook%20Cover%202.svg'
    },
    {
        id: 3,
        path: 'design-systems-in-product-teams',
        author: 'Franko Realguy',
        title: 'Design Systems in Product Teams',
        description: 'Ut libero molestias excepturi veniam et dicta assumenda tenetur voluptatem. Qui dolor officiis eum. Doloribus odit qui quia blanditiis omnis asperiores perspiciatis qui deleniti.',
        image: 'https://assets.website-files.com/62aee78456e420f166ac4d1d/62b0e7c4e63aa2b80006a1d4_Ebook%20Cover%203.svg'
    },
    {
        id: 4,
        path: 'all-in-one-color-handbook',
        author: 'Nikolai Bain',
        title: 'All in One Color Handbook',
        description: 'Vel esse et temporibus inventore alias assumenda. Repellat sit accusamus id sed est animi vel. Odit non ut reprehenderit consequatur sit aliquam. Aut aliquid consequatur',
        image: 'https://assets.website-files.com/62aee78456e420f166ac4d1d/62b0e909698fe432638ec008_Ebook%20Cover%204.svg'
    },
    {
        id: 5,
        path: 'digital-wellbeing-and-support',
        author: 'Tim Tommons',
        title: 'Digital Wellbeing and Support',
        description: 'Dignissimos dolores enim ipsum quia occaecati voluptas aut delectus. Reiciendis recusandae minima quod qui. Eum dicta et nihil ad et nam. Vitae et itaque porro. Ipsa distinctio laboriosam veritatis. Minus quia eos ut.',
        image: 'https://assets.website-files.com/62aee78456e420f166ac4d1d/62b0e91246a49c9989b055c0_Ebook%20Cover%205.svg'
    },
]

export const footerNavs = [
    {
        id: 1,
        title: 'WEBSITE',
        items: [
            {
                id: 1,
                name: 'Home',
                url: '/'
            },
            {
                id: 2,
                name: 'Resources',
                url: '/resources'
            },
            {
                id: 3,
                name: 'Contact',
                url: '/contact'
            },
            {
                id: 4,
                name: 'Ebook (CMS)',
                url: '/ebook'
            },
            {
                id: 5,
                name: 'Terms & Conditions',
                url: '/terms-conditions'
            },
            {
                id: 6,
                name: 'Privacy Policy',
                url: '/privacy-policy'
            },
        ]
    },
    {
        id: 2,
        title: 'MEMBERSHIP',
        items: [
            {
                id: 1,
                name: 'Sign In',
                url: '/sign-in'
            },
            {
                id: 2,
                name: 'Sign Up',
                url: '/sign-up'
            },
            {
                id: 3,
                name: 'User Account',
                url: '/user-account'
            },
            {
                id: 4,
                name: 'Reset Password',
                url: '/reset-password'
            }
        ]
    },
    {
        id: 3,
        title: 'ADMIN',
        items: [
            {
                id: 1,
                name: 'Style Guide',
                url: '/style-guide'
            },
            {
                id: 2,
                name: 'Licenses',
                url: '/licenses'
            },
            {
                id: 3,
                name: 'Instructions',
                url: '/instructions'
            },
            {
                id: 4,
                name: 'Password',
                url: '/password'
            },
            {
                id: 5,
                name: '404',
                url: '/404'
            }
        ]
    }
]