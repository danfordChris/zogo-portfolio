/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0f0fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c3d66',
          950: '#082f49',
        },
        dark: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#626c7d',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#11172a',
        },
        teal: {
          500: '#599692',
          600: '#4a7a77',
        },
        light: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#dfe5ec',
          400: '#d1d5db',
          500: '#9ca3af',
          600: '#6b7280',
          700: '#374151',
          800: '#1f2937',
        },
        glass: {
          light: 'rgba(255, 255, 255, 0.1)',
          lighter: 'rgba(255, 255, 255, 0.15)',
          DEFAULT: 'rgba(255, 255, 255, 0.2)',
          dark: 'rgba(255, 255, 255, 0.05)',
        },
      },
      fontFamily: {
        archivo: ['Archivo', 'sans-serif'],
        grotesk: ['Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-mesh': `radial-gradient(circle at 20% 30%, rgba(14, 165, 233, 0.15) 0%, transparent 50%),
                          radial-gradient(circle at 80% 70%, rgba(14, 165, 233, 0.1) 0%, transparent 50%),
                          radial-gradient(circle at 40% 80%, rgba(14, 165, 233, 0.08) 0%, transparent 50%)`,
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
        'dark-gradient': 'linear-gradient(135deg, #1e1b2e 0%, #2d1b3d 100%)',
        'blue-gradient': 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glass-lg': '0 8px 32px 0 rgba(31, 38, 135, 0.5)',
        glow: '0 0 20px rgba(37, 99, 235, 0.5)',
        'glow-lg': '0 0 40px rgba(37, 99, 235, 0.6)',
      },
      animation: {
        'blob-1': 'blob1 20s infinite',
        'blob-2': 'blob2 25s infinite',
        'blob-3': 'blob3 30s infinite',
        'bounce-slow': 'bounce 3s infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'gradient-shift': 'gradientShift 6s ease infinite',
      },
      keyframes: {
        blob1: {
          '0%': { transform: 'translate(0, 0)' },
          '33%': { transform: 'translate(50px, 30px)' },
          '66%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(0, 0)' },
        },
        blob2: {
          '0%': { transform: 'translate(0, 0)' },
          '33%': { transform: 'translate(-40px, -50px)' },
          '66%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(0, 0)' },
        },
        blob3: {
          '0%': { transform: 'translate(0, 0)' },
          '33%': { transform: 'translate(30px, -40px)' },
          '66%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(0, 0)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(14, 165, 233, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(14, 165, 233, 0.6)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(37, 99, 235, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(37, 99, 235, 0.6)' },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      backdropBlur: {
        glass: '10px',
        xs: '2px',
      },
      transitionDuration: {
        200: '200ms',
        300: '300ms',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.glass-card': {
          '@apply backdrop-blur-glass bg-glass-lighter border border-white/20 rounded-2xl shadow-glass':
            {},
        },
        '.glass-card-lg': {
          '@apply backdrop-blur-glass bg-glass-lighter border border-white/20 rounded-2xl shadow-glass-lg':
            {},
        },
        '.glass-dark': {
          '@apply backdrop-blur-glass bg-glass-dark border border-white/10':
            {},
        },
      });
    },
  ],
};