/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        /* Structural neutrals */
        ink: {
          DEFAULT: '#0F172A',
          800: '#1E293B',
          700: '#334155',
          500: '#64748B',
          300: '#CBD5E1',
          100: '#F1F5F9',
        },
        slate: {
          DEFAULT: '#1E293B',
        },
        /* Warm interior accents */
        cream: {
          DEFAULT: '#F5F5F0',
          deep: '#EAE8E0',
          warm: '#E4DCCB',
        },
        timber: {
          DEFAULT: '#B98A5E',
          light: '#D8B48C',
          dark: '#8C6136',
        },
        /* Brand */
        brand: {
          DEFAULT: '#6366F1',
          50: '#EEF0FF',
          100: '#E0E3FF',
          200: '#C7CBFF',
          400: '#8A8CF7',
          500: '#6366F1',
          600: '#4F46E5',
          700: '#4338CA',
          900: '#312E81',
        },
        moss: {
          DEFAULT: '#1F4D3D',
          light: '#2F6B54',
        },
        danger: {
          DEFAULT: '#DC2626',
          soft: '#FEF2F2',
          border: '#FECACA',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        display: [
          'Plus Jakarta Sans',
          'Inter',
          'system-ui',
          '-apple-system',
          'sans-serif',
        ],
      },
      borderRadius: {
        xl: '0.875rem',
        '2xl': '1.125rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        card: '0 1px 2px rgba(15,23,42,0.04), 0 8px 24px -12px rgba(15,23,42,0.12)',
        lift: '0 2px 4px rgba(15,23,42,0.05), 0 24px 48px -20px rgba(15,23,42,0.22)',
        glow: '0 18px 40px -18px rgba(99,102,241,0.65)',
        inset: 'inset 0 1px 0 rgba(255,255,255,0.6)',
      },
      backgroundImage: {
        'brand-gradient':
          'linear-gradient(120deg, #6366F1 0%, #7C5CF6 45%, #4338CA 100%)',
        'ink-gradient':
          'linear-gradient(150deg, #0F172A 0%, #1E293B 60%, #243449 100%)',
        'cream-gradient':
          'linear-gradient(180deg, #FFFFFF 0%, #F5F5F0 100%)',
        shimmer:
          'linear-gradient(100deg, rgba(255,255,255,0) 20%, rgba(255,255,255,0.55) 50%, rgba(255,255,255,0) 80%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-120%)' },
          '100%': { transform: 'translateX(220%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '70%': { transform: 'scale(1.35)', opacity: '0' },
          '100%': { transform: 'scale(1.35)', opacity: '0' },
        },
        'bar-indeterminate': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(320%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.55s cubic-bezier(0.22,1,0.36,1) both',
        'fade-in': 'fade-in 0.4s ease both',
        'scale-in': 'scale-in 0.35s cubic-bezier(0.22,1,0.36,1) both',
        'slide-in-right':
          'slide-in-right 0.35s cubic-bezier(0.22,1,0.36,1) both',
        shimmer: 'shimmer 1.8s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2s cubic-bezier(0.4,0,0.6,1) infinite',
        'bar-indeterminate':
          'bar-indeterminate 1.4s cubic-bezier(0.65,0,0.35,1) infinite',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
