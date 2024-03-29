import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'spin-y': 'spin-y 2s linear infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        'spin-y': {
          '0%': {
            filter: 'hue-rotate(0deg)',
            transform: 'rotateY(0deg)',
          },
          '100%': {
            filter: 'hue-rotate(360deg)',
            transform: 'rotateY(360deg)',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
export default config
