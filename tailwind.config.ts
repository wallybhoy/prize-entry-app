import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#E10D13',
                secondary: '#F4ECDF',
            },
            backgroundImage: {
                checkbox: "url('./assets/images/unchecked.svg')",
                'checkbox-checked': "url('./assets/images/checked.svg')",
                'select-chevron': "url('./assets/images/chevron-down.svg')",
            },
            backgroundPosition: {
                'select-pos': 'right 5px center',
            },
            boxShadow: {
                DEFAULT: '10px 10px 0 0 rgba(0, 0, 0, 0.04)',
            },
            screens: {
                '2xs': '321px',
                xs: '376px',
                lg: '1301px',
                xl: '1441px',
            },
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1.25rem',
                sm: '3rem',
                md: '4rem',
                lg: '6rem',
            },
        },
    },
    plugins: [],
}
export default config
