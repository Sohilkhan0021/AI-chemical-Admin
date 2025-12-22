/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar))",
          foreground: "hsl(var(--sidebar-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.btn': {
          padding: '0.625rem 1.25rem',
          borderRadius: theme('borderRadius.lg'),
          fontWeight: '600',
          fontSize: '0.875rem',
          transition: 'all 0.2s ease',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
        },
        '.btn-primary': {
          backgroundColor: theme('colors.accent.DEFAULT'),
          color: theme('colors.accent.foreground'),
          '&:hover': {
            backgroundColor: 'rgba(59, 130, 246, 0.9)',
          },
        },
        '.btn-outline': {
          border: `1px solid ${theme('colors.border')}`,
          color: theme('colors.foreground'),
          '&:hover': {
            backgroundColor: theme('colors.muted.DEFAULT'),
          },
        },
        '.card': {
          backgroundColor: theme('colors.background'),
          border: `1px solid ${theme('colors.border')}`,
          borderRadius: theme('borderRadius.lg'),
          padding: '1.5rem',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        },
        '.admin-table': {
          width: '100%',
          borderCollapse: 'collapse',
          'th': {
            padding: '1rem 1.5rem',
            fontSize: '0.75rem',
            fontWeight: '600',
            textTransform: 'uppercase',
            color: theme('colors.muted.foreground'),
            backgroundColor: theme('colors.muted.DEFAULT'),
            borderBottom: `1px solid ${theme('colors.border')}`,
            textAlign: 'left',
          },
          'td': {
            padding: '1rem 1.5rem',
            fontSize: '0.875rem',
            borderBottom: `1px solid ${theme('colors.border')}`,
          },
        },
      })
    })
  ],
}
