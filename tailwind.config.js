/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            typography: {
                DEFAULT: {
                    css: {
                        'code::before': {
                            content: '""'
                        },
                        'code::after': {
                            content: '""'
                        }
                    }
                },
                invert: {
                    css: {
                        '--tw-prose-body': 'var(--tw-prose-invert-body)',
                        '--tw-prose-headings': 'var(--tw-prose-invert-headings)',
                        '--tw-prose-links': 'var(--tw-prose-invert-links)',
                        '--tw-prose-code': 'var(--tw-prose-invert-code)',
                        '--tw-prose-pre-code': 'var(--tw-prose-invert-pre-code)',
                        '--tw-prose-pre-bg': 'var(--tw-prose-invert-pre-bg)',
                        color: 'rgb(134 239 172)', // text-green-300
                        a: {
                            color: 'rgb(74 222 128)', // text-green-400
                            '&:hover': {
                                color: 'rgb(134 239 172)', // text-green-300
                            },
                        },
                        strong: {
                            color: 'rgb(74 222 128)', // text-green-400
                        },
                        h1: {
                            color: 'rgb(74 222 128)', // text-green-400
                        },
                        h2: {
                            color: 'rgb(74 222 128)', // text-green-400
                        },
                        h3: {
                            color: 'rgb(74 222 128)', // text-green-400
                        },
                        h4: {
                            color: 'rgb(74 222 128)', // text-green-400
                        },
                        code: {
                            color: 'rgb(74 222 128)', // text-green-400
                        },
                        'pre code': {
                            color: 'rgb(212 212 212)', // text-neutral-300
                            backgroundColor: 'transparent',
                        },
                        pre: {
                            backgroundColor: 'rgb(39 39 42 / 0.5)', // bg-zinc-800/50
                            border: '1px solid rgb(63 63 70)', // border-zinc-700
                        },
                    },
                },
            },
            fontFamily: {
                sans: ['var(--font-geist-sans)'],
                mono: ['var(--font-geist-mono)'],
            },
        },
    },
    // Typography plugin removed - not compatible with Tailwind CSS v4
    // Using custom prose styles from global.css instead
    plugins: [],
}