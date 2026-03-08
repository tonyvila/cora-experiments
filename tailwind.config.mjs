/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        v2: {
          bg: '#fffbf7',
          surface: '#ffffff',
          accent: '#d4622b',
          'accent-hover': '#c0561f',
          'accent-softer': '#f4a574',

          'brown-light': '#a67a56',
          text: '#3d2e1f',
          'text-secondary': '#6b5744',
          'text-muted': '#9a8574',
          border: '#f0e4d8',

          'bg-alt': '#f8f0e8',
        },
      },
      borderRadius: {
        v2: '16px',
        'v2-sm': '12px',
        'v2-lg': '20px',
      },
      boxShadow: {
        v2: '0 4px 24px rgba(139, 94, 60, 0.06)',
        'v2-lg': '0 8px 40px rgba(139, 94, 60, 0.1)',
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Cal Sans', 'system-ui', '-apple-system', 'sans-serif'],
      },
      maxWidth: {
        container: '1120px',
      },
    },
  },
  plugins: [],
};
