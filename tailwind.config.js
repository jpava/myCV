/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2C3E50',        // Azul oscuro
        secondary: '#3498DB',      // Azul claro
        background: '#ECF0F1',     // Fondo gris claro
        text: '#2D3436',           // Texto gris oscuro
        accent: '#E74C3C',         // Rojo oscuro
        neutral: '#BDC3C7',        // Gris medio
      },
    },
  },
  plugins: [],
}
