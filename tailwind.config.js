/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			keyframes: {
				wiggle: {
					"0%, 100%": { transform: "rotate(-3deg)" },
					"50%": { transform: "rotate(3deg)" },
				},
			},
			animation: {
				wiggle: "wiggle 1s ease-in-out infinite",
			},
			colors: {
				linkedin: "#258dbf",
				github: "#333",
				twitter: "#1DA1F2",
				instagram: "#E1306C",
				twitch: "#6441a5",
				default: "3247df",
			},
		},
		fontFamily: {
			kalina: ["Kalina", "serif"],
			darker: ["Darker Grotesque", "sans-serif"],
		},
	},
	plugins: [],
};

