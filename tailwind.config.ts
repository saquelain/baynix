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
        bg: '#04050a',
        bg2: '#07090f',
        surface: '#0d1220',
        surface2: '#111827',
        accent: '#3b82f6',
        accent2: '#6366f1',
        accent3: '#22d3ee',
        green: '#10b981',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backdropBlur: {
        xs: '4px',
      },
    },
  },
  plugins: [],
}

export default config