import flowbitePlugin from 'flowbite/plugin'

export default {
    theme: {
        extend: {
            animation: {
                'from-left': 'slideFromLeft 0.2s 1',
                'from-right': 'slideFromRight 0.2s 1',
            },
            keyframes: {
                slideFromLeft: {
                    '0%': {transform: 'translateX(-100%)'},
                    '100%': {transform: 'translateX(0)'},
                },
                slideFromRight: {
                    '0%': {transform: 'translateX(100%)'},
                    '100%': {transform: 'translateX(0)'},
                },
            },
        },
    },
    content: ['node_modules/flowbite-qwik/**/*.{cjs,mjs}', './src/**/*.{html,js,jsx,ts,tsx,mdx}'],
    plugins: [flowbitePlugin],
}
