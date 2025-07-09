module.exports = {
  content: [
    './src/**/*.{astro,js,ts,jsx,tsx}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#E11D48', // Fucsia
          light: '#F472B6',
          dark: '#BE185D',
        },
        secondary: {
          DEFAULT: '#2563EB', // Azul
          light: '#60A5FA',
          dark: '#1E40AF',
        },
        neutral: {
          50: '#FAFAFA',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        accent: {
          yellow: '#FBBF24',
          green: '#10B981',
        },
      },
      gradientColorStops: theme => ({
        ...theme('colors'),
        'primary': '#E11D48',
        'secondary': '#2563EB',
      }),
    },
  },
  plugins: [],
}; 