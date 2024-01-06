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
			backgroundImage: {
				'purple-gradient': 'radial-gradient(40% 100% at 50% 0%, #15082B 0%, #000 100%)',
			},
			dropShadow: {
				// 'text': '0 2px 16px rgba(174,207,242, 0.25)',
				// 'text': '0 2px 16px rgba(196, 174, 242, 0.4)',
				'text': '0 2px 16px rgba(169, 151, 200, 0.45)',
			}
		},
	},
	plugins: [],
}
export default config
