/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [
    require("rippleui")
  ],
}

module.exports = {
	/** @type {import('rippleui').Config} */
	rippleui: {
		themes: [
			{
				themeName: "light",
				colorScheme: "light",
				colors: {
					primary: "#235264",
					backgroundPrimary: "#964643",
				},
			},
			{
				themeName: "dark",
				colorScheme: "dark",
				colors: {
					primary: "#573242",
					backgroundPrimary: "#1a1a1a",
				},
			},
		],
	},
