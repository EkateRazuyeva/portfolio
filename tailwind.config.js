/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
    	extend: {
    		colors: {
    			primary: '#1c1c22',
    			accent: {
    				DEFAULT: '#9933ff',
    				hover: '#8a2eff'
    			}
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		}
    	},
    	container: {
    		center: 'true',
    		padding: '15px'
    	},
    	screens: {
    		sm: '640px',
    		md: '768px',
    		lg: '960px',
    		xl: '1200px'
    	},
    	fontFamily: {
    		mono: ['GetBrains Mono', 'monospace'],
    		primary: 'var(--font-jetbrainsMono)'
    	}
    },
    plugins: [require("tailwindcss-animate")],
};