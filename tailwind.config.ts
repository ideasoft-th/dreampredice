import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Prompt', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        brand: {
          50: '#fffbf0',
          100: '#fff7e1',
          200: '#ffecc2',
          300: '#ffdd9b',
          400: '#ffc94d',
          500: '#ffb800',
          600: '#e6a600',
          700: '#cc9500',
          800: '#b38400',
          900: '#996f00',
        },
        gold: {
          50: '#fffdf7',
          100: '#fffaed',
          200: '#fff3d3',
          300: '#ffe9b3',
          400: '#ffd966',
          500: '#ffc107',
          600: '#ffb300',
          700: '#ff8f00',
          800: '#ff6f00',
          900: '#e65100',
        },
        mystical: {
          900: '#0d1117',
          800: '#161b22',
          700: '#21262d',
          600: '#30363d',
          500: '#484f58',
        }
      },
      backgroundImage: {
        'mystical-gradient': 'linear-gradient(135deg, #0d1117 0%, #161b22 25%, #21262d 50%, #161b22 75%, #0d1117 100%)',
        'gold-gradient': 'linear-gradient(135deg, #ffc107 0%, #ffb300 25%, #ff8f00 50%, #ffb300 75%, #ffc107 100%)',
        'mystical-radial': 'radial-gradient(circle at 50% 50%, rgba(255, 193, 7, 0.1) 0%, rgba(13, 17, 23, 0.9) 70%)',
        'stars': 'radial-gradient(2px 2px at 20px 30px, #ffc107, transparent), radial-gradient(2px 2px at 40px 70px, #ffb300, transparent), radial-gradient(1px 1px at 90px 40px, #ff8f00, transparent), radial-gradient(1px 1px at 130px 80px, #ffc107, transparent), radial-gradient(2px 2px at 160px 30px, #ffb300, transparent)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'pulse-gold': 'pulse-gold 2s ease-in-out infinite alternate',
        'twinkle': 'twinkle 4s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'pulse-gold': {
          '0%': { boxShadow: '0 0 0 0 rgba(255, 193, 7, 0.7)' },
          '70%': { boxShadow: '0 0 0 10px rgba(255, 193, 7, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(255, 193, 7, 0)' },
        },
        twinkle: {
          '0%': { opacity: '0.3' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0.3' },
        },
      },
    },
  },
  plugins: [],
}
export default config