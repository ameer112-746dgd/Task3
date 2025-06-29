import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#0D1117', // Main background
        'brand-blue': '#3B82F6', // Buttons, accents
        'brand-light-blue': '#00A3FF',
        'brand-pink': '#E83E8C',
        'brand-gray': '#7D8590', // Muted text
        'brand-border': '#30363D', // Borders
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config