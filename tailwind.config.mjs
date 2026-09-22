/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        butter: {
          50: '#FFFCF2',
          100: '#FFF6E0',
          200: '#FFEFC9',
          300: '#FFE39E',
          400: '#FFD466',
          500: '#FFC93C',
          600: '#F5B028',
          700: '#D99114',
          800: '#A56B0E',
          900: '#6F4A09'
        },
        cream: {
          50: '#FFFDF8',
          100: '#FFF8E8',
          200: '#FCEFCF'
        },
        sunset: {
          gold: '#E0A526',
          rose: '#F2C14E',
          honey: '#F8D26B'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        script: ['"Great Vibes"', 'cursive']
      },
      animation: {
        'fade-in': 'fadeIn 1.2s ease-out forwards',
        'fade-up': 'fadeUp 1s ease-out forwards',
        'float-slow': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 18s linear infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(2deg)' }
        },
        pulseSoft: {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(255, 201, 60, 0.45)' },
          '50%': { transform: 'scale(1.03)', boxShadow: '0 0 0 18px rgba(255, 201, 60, 0)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        }
      },
      boxShadow: {
        'glow': '0 10px 40px -10px rgba(255, 193, 60, 0.55)',
        'soft': '0 20px 50px -20px rgba(214, 145, 20, 0.35)'
      },
      backgroundImage: {
        'sunshine': 'radial-gradient(circle at top, #FFE89C 0%, #FFC93C 45%, #F5B028 100%)',
        'parchment': 'linear-gradient(135deg, #FFFCF2 0%, #FFF6E0 50%, #FFEFC9 100%)'
      }
    }
  },
  plugins: []
};
