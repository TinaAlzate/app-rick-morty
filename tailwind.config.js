/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js"
  ],
  theme: {
    minHeight: {
      '3/4': '75%',
    },
    extend: {
      backgroundImage: {
        "movil": "url('/src/rickandmorty/assets/images/movil.jpg')",
        "movil-d": "url('/src/rickandmorty/assets/images/movil-d.jpg')",
        "tablet": "url('/src/rickandmorty/assets/images/tablet.jpg')",
        "tablet-d": "url('/src/rickandmorty/assets/images/tablet-d.jpg')",
        "laptop": "url('/src/rickandmorty/assets/images/laptop.jpg')",
        "laptop-d": "url('/src/rickandmorty/assets/images/laptop-d.jpg')",
        "desktop": "url('/src/rickandmorty/assets/images/desktop.jpg')",
        "desktop-d": "url('/src/rickandmorty/assets/images/desktop-d.jpg')",
        "image": "url('/src/rickandmorty/assets/images/bg-character.webp')",
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}

