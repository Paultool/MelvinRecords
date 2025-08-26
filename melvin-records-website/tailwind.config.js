/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    fontFamily: {
      'manrope': ['Manrope', 'sans-serif'],
      'inter': ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        // Melvin Records Brand Colors
        'melvin': {
          'bg-primary': '#0D0D0D',
          'bg-secondary': '#1A1A1A',
          'text-primary': '#E0E0E0',
          'text-secondary': '#888888',
          'accent-cyan': '#00FFFF',
          'accent-magenta': '#FF00FF',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#00FFFF',
          foreground: '#0D0D0D',
        },
        secondary: {
          DEFAULT: '#1A1A1A',
          foreground: '#E0E0E0',
        },
        accent: {
          DEFAULT: '#FF00FF',
          foreground: '#0D0D0D',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: '#1A1A1A',
          foreground: '#888888',
        },
        popover: {
          DEFAULT: '#1A1A1A',
          foreground: '#E0E0E0',
        },
        card: {
          DEFAULT: '#1A1A1A',
          foreground: '#E0E0E0',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        'fade-in-up': {
          from: {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'glow': {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(0, 255, 255, 0.1)',
          },
          '50%': {
            boxShadow: '0 0 25px rgba(0, 255, 255, 0.2), 0 0 35px rgba(0, 255, 255, 0.1)',
          },
        },
        'glitch': {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in-up': 'fade-in-up 0.6s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'glitch': 'glitch 0.3s ease-in-out infinite',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      gridTemplateColumns: {
        'asymmetric': '5fr 7fr',
        'asymmetric-reverse': '7fr 5fr',
      },
      letterSpacing: {
        'tightest': '-0.075em',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
