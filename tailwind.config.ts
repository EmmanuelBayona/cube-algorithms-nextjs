import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@tremor/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class',
    theme: {
        transparent: 'transparent',
        current: 'currentColor',
        extend: {
            dropShadow: {
                'text': '0 2px 16px rgba(169, 151, 200, 0.45)',
            },
            boxShadow: {
                'dark-button': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.02), inset 0 0 0 1px rgba(255, 255, 255, 0.02), 0 0 0 1px rgba(0, 0, 0, 0.25)',
                'primary-button': '0 0 0 3px rgb(40, 18, 97), inset 0 2px 0 0 rgba(255, 255, 255, 0.2)',
                // light
                'tremor-input': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
                'tremor-card':
                    '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
                'tremor-dropdown':
                    '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
                // dark
                'dark-tremor-input': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
                'dark-tremor-card':
                    '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
                'dark-tremor-dropdown':
                    '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
            },

            borderRadius: {
                'tremor-small': '0.375rem',
                'tremor-default': '0.5rem',
                'tremor-full': '9999px',
            },
            fontSize: {
                'tremor-label': ['0.75rem', { lineHeight: '1rem' }],
                'tremor-default': ['0.875rem', { lineHeight: '1.25rem' }],
                'tremor-title': ['1.125rem', { lineHeight: '1.75rem' }],
                'tremor-metric': ['1.875rem', { lineHeight: '2.25rem' }],
            },
            colors: {
                'background': '#181818',
                'dark': '#232323',
                'primary': '#5B20EF',
                'font': '#F0F0F0',

                tremor: {
                    brand: {
                        faint: colors.blue[50],
                        muted: colors.blue[200],
                        subtle: colors.blue[400],
                        DEFAULT: colors.blue[500],
                        emphasis: colors.blue[700],
                        inverted: colors.white,
                    },
                    background: {
                        muted: colors.gray[50],
                        subtle: colors.gray[100],
                        DEFAULT: colors.white,
                        emphasis: colors.gray[700],
                    },
                    border: {
                        DEFAULT: colors.gray[200],
                    },
                    ring: {
                        DEFAULT: colors.gray[200],
                    },
                    content: {
                        subtle: colors.gray[400],
                        DEFAULT: colors.gray[500],
                        emphasis: colors.gray[700],
                        strong: colors.gray[900],
                        inverted: colors.white,
                    },
                },
                // dark mode
                'dark-tremor': {
                    brand: {
                        faint: '#0B1229',
                        muted: colors.blue[950],
                        subtle: colors.blue[800],
                        DEFAULT: colors.blue[500],
                        emphasis: colors.blue[400],
                        inverted: colors.blue[950],
                    },
                    background: {
                        muted: '#131A2B',
                        subtle: colors.gray[800],
                        DEFAULT: colors.gray[900],
                        emphasis: colors.gray[300],
                    },
                    border: {
                        DEFAULT: colors.gray[800],
                    },
                    ring: {
                        DEFAULT: colors.gray[800],
                    },
                    content: {
                        subtle: colors.gray[600],
                        DEFAULT: colors.gray[500],
                        emphasis: colors.gray[200],
                        strong: colors.gray[50],
                        inverted: colors.gray[950],
                    },
                },

            },
            animation: {
                scaleIn: 'scaleIn 200ms ease',
                scaleOut: 'scaleOut 200ms ease',
                fadeIn: 'fadeIn 200ms ease',
                fadeOut: 'fadeOut 200ms ease',
                enterFromLeft: 'enterFromLeft 250ms ease',
                enterFromRight: 'enterFromRight 250ms ease',
                exitToLeft: 'exitToLeft 250ms ease',
                exitToRight: 'exitToRight 250ms ease',
            },
            keyframes: {
                enterFromRight: {
                    from: { opacity: '0', transform: 'translateX(200px)' },
                    to: { opacity: '1', transform: 'translateX(0)' },
                },
                enterFromLeft: {
                    from: { opacity: '0', transform: 'translateX(-200px)' },
                    to: { opacity: '1', transform: 'translateX(0)' },
                },
                exitToRight: {
                    from: { opacity: '1', transform: 'translateX(0)' },
                    to: { opacity: '0', transform: 'translateX(200px)' },
                },
                exitToLeft: {
                    from: { opacity: '1', transform: 'translateX(0)' },
                    to: { opacity: '0', transform: 'translateX(-200px)' },
                },
                scaleIn: {
                    from: { opacity: '0', transform: 'rotateX(-10deg) scale(0.9)' },
                    to: { opacity: '1', transform: 'rotateX(0deg) scale(1)' },
                },
                scaleOut: {
                    from: { opacity: '1', transform: 'rotateX(0deg) scale(1)' },
                    to: { opacity: '0', transform: 'rotateX(-10deg) scale(0.95)' },
                },
                fadeIn: {
                    from: { opacity: '0' },
                    to: { opacity: '1' },
                },
                fadeOut: {
                    from: { opacity: '1' },
                    to: { opacity: '0' },
                },
                shimmer: {
                    '100%': {
                        transform: 'translateX(100%)',
                    }
                }
            },
        },
        safelist: [
            {
                pattern:
                    /^(bg-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
                variants: ['hover', 'ui-selected'],
            },
            {
                pattern:
                    /^(text-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
                variants: ['hover', 'ui-selected'],
            },
            {
                pattern:
                    /^(border-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
                variants: ['hover', 'ui-selected'],
            },
            {
                pattern:
                    /^(ring-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
            },
            {
                pattern:
                    /^(stroke-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
            },
            {
                pattern:
                    /^(fill-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
            },
        ],
    },
    plugins: [
        require('tailwindcss-animate'),
        require('@headlessui/tailwindcss'),
        require('@tailwindcss/forms')
    ],
}
export default config
