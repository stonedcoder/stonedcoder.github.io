/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
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
        notion: {
          'text-primary': 'var(--color-notion-text-primary)',
          'bg-primary': 'var(--color-notion-bg-primary)',
          'gray-100': 'var(--color-notion-gray-100)',
          'gray-200': 'var(--color-notion-gray-200)',
          'gray-300': 'var(--color-notion-gray-300)',
          'gray-400': 'var(--color-notion-gray-400)',
          'gray-500': 'var(--color-notion-gray-500)',
          'accent-blue': 'var(--color-notion-accent-blue)',
        },
      },
    },
  },
  plugins: [],
}

