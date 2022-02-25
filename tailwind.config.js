module.exports = {
	content: [    "./pages/**/*.{js,ts,jsx,tsx}",    "./src/components/**/*.{js,ts,jsx,tsx}",  ],
	theme: {
		extend: {
			screens: {
				'xs': {'max': '639px'},
				'xxs': {'max': '480px'},
			}
		},
	},
	plugins: [],
}
