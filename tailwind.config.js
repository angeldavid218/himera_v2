/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Web3 brand colors
        'eth-purple': '#8a2be2',
        'polygon-purple': '#8247e5',
        'solana-green': '#00ffa3',
        'cardano-blue': '#0033ad',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
    },
  },
  daisyui: {
    themes: [
      {
        web3dark: {
          primary: '#8a2be2',
          secondary: '#00ffa3',
          accent: '#00b7ff',
          neutral: '#1f2937',
          'base-100': '#0f172a',
          'base-200': '#0f1629',
          'base-300': '#0e1425',
          info: '#00b7ff',
          success: '#00cc8f',
          warning: '#ffbe0b',
          error: '#ff3860',
        },
      },
    ],
    darkTheme: 'web3dark',
  },
  plugins: [require('daisyui')],
};
