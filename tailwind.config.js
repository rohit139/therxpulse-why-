/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // White background canvas
        canvas: '#FFFFFF',
        // Soft gray surfaces
        surface: {
          50: '#F8FAFB',
          100: '#F1F4F6',
          200: '#E6EBEE',
          300: '#D5DCE1',
        },
        // Dark navy typography
        ink: {
          900: '#0B1B2B',
          800: '#13243A',
          700: '#1E3252',
          600: '#2C4364',
          500: '#3B5577',
          400: '#5C7396',
          300: '#8295B3',
        },
        // Emerald accent
        emerald: {
          DEFAULT: '#0F9D74',
          600: '#0B8567',
          500: '#10A884',
          400: '#3FBE9A',
          300: '#7BD4B7',
          200: '#B6E8D6',
          100: '#E2F5EE',
        },
        // Minimal orange highlights
        ember: {
          DEFAULT: '#E87A3E',
          500: '#F08A4B',
          400: '#F5A873',
          200: '#FBE0CC',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      fontSize: {
        // Display scale tuned to McKinsey-presented microsite
        display: ['clamp(3.25rem, 6vw, 5.5rem)', { lineHeight: '1.02', letterSpacing: '-0.03em' }],
        h1: ['clamp(2.5rem, 4.4vw, 3.75rem)', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
        h2: ['clamp(2rem, 3.4vw, 2.75rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        h3: ['clamp(1.5rem, 2.2vw, 1.875rem)', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
        h4: ['clamp(1.25rem, 1.6vw, 1.5rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        eyebrow: ['0.78rem', { lineHeight: '1.4', letterSpacing: '0.18em' }],
        lead: ['clamp(1.125rem, 1.4vw, 1.375rem)', { lineHeight: '1.6', letterSpacing: '-0.005em' }],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.75rem',
      },
      boxShadow: {
        // Soft premium elevation
        lift: '0 1px 2px rgba(11,27,43,0.04), 0 8px 24px -12px rgba(11,27,43,0.12)',
        card: '0 2px 4px rgba(11,27,43,0.04), 0 16px 40px -20px rgba(11,27,43,0.18)',
        glow: '0 0 0 1px rgba(15,157,116,0.18), 0 16px 48px -16px rgba(15,157,116,0.32)',
        glass: 'inset 0 1px 0 rgba(255,255,255,0.6), 0 16px 48px -20px rgba(11,27,43,0.22)',
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(to right, rgba(11,27,43,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(11,27,43,0.04) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-32': '32px 32px',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.22, 1, 0.36, 1)',
        soft: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        'draw-line': {
          '0%': { strokeDashoffset: 'var(--len, 1000)' },
          '100%': { strokeDashoffset: '0' },
        },
        'drift-slow': {
          '0%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(0,-12px,0)' },
          '100%': { transform: 'translate3d(0,0,0)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) both',
        'pulse-soft': 'pulse-soft 3.2s ease-in-out infinite',
        'drift-slow': 'drift-slow 9s ease-in-out infinite',
        'shimmer': 'shimmer 2.4s linear infinite',
      },
    },
  },
  plugins: [],
};