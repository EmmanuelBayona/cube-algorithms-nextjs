import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			dropShadow: {
				'text': '0 2px 16px rgba(169, 151, 200, 0.45)',
			},
			boxShadow: {
				'dark-button': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.02), inset 0 0 0 1px rgba(255, 255, 255, 0.02), 0 0 0 1px rgba(0, 0, 0, 0.25)',
				'primary-button': '0 0 0 3px rgb(40, 18, 97), inset 0 1px 0 0 rgba(255, 255, 255, 0.2)'
			},
			colors: {
				'background': '#181818',
				'dark': '#232323',
				'primary': '#5B20EF',
				'font': '#F0F0F0',
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
	},
	plugins: [
		require('tailwindcss-animate')
	],
}
export default config
