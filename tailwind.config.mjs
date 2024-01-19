/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// primary: 'rgb(243 0 71 / <alpha-value>)',
				primary: 'rgb(220 51 74 / <alpha-value>)',
				secondary: 'rgb(255 229 0 / <alpha-value>)',
				tertiary: 'rgb(0 175 152 / <alpha-value>)',
				surface: 'rgb(74 48 68 / <alpha-value>)'
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography')
	],
}
