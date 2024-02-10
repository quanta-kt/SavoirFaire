/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
import tailwindcssanimated from 'tailwindcss-animated'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      daisyui: {
        themes: ["light", "dark", "cupcake","dracula","nord"],
      },
      backgroundImage: {
        'landing': "url(../imgs/landing.jpg)"
      }
    }
  },
  
  plugins: [daisyui,tailwindcssanimated],
}
