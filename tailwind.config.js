/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      fontSize: {
        // Notion-like scale (example values, can be refined)
        // Base is typically 16px (1rem)
        xs: ['0.75rem', { lineHeight: '1rem' }], // 12px
        sm: ['0.875rem', { lineHeight: '1.25rem' }], // 14px
        base: ['1rem', { lineHeight: '1.5rem' }], // 16px
        lg: ['1.125rem', { lineHeight: '1.75rem' }], // 18px
        xl: ['1.25rem', { lineHeight: '1.75rem' }], // 20px
        '2xl': ['1.5rem', { lineHeight: '2rem' }], // 24px
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }], // 36px
        '5xl': ['3rem', { lineHeight: '1' }], // 48px
      },
      colors: {
        // Notion-like colors
        notion: {
          'text-primary': 'rgb(55, 53, 47)',
          'bg-primary': 'rgb(255, 255, 255)',
          'gray-100': 'rgb(247, 246, 245)', // Lightest gray for backgrounds/borders
          'gray-200': 'rgb(235, 236, 237)',
          'gray-300': 'rgb(224, 224, 224)',
          'gray-400': 'rgb(200, 200, 200)', // More prominent gray
          'gray-500': 'rgb(150, 150, 150)', // Secondary text
          'accent-blue': 'rgb(37, 99, 235)', // A muted blue example for links/highlights
        },
      },
    },
  },
  plugins: [],
}

