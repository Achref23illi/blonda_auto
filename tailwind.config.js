/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Couleurs personnalisées Blonda Auto
      colors: {
        primary: '#1a1a1a',
        secondary: '#ffffff', 
        accent: '#dc2626',
        'background-alt': '#f8fafc',
        muted: '#64748b',
        border: '#e2e8f0',
        metallic: '#8b9dc3',
        luxury: '#2c3e50',
        highlight: '#fbbf24',
      },
      
      // Polices personnalisées
      fontFamily: {
        'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        'heading': ['Poppins', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      
      // Animations pour les interactions
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

