/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
        veryBrightRed: '#DB1035',
        veryDarkBlue: '#242D52',
        boxColor: '#2A2C2C',
        mainColor: "#DB1035",
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883'
        }
      },
      backgroundImage: {
        'hero-pattern': "url('/src/img/frontCover.png')",
        'hero-bottom': "url('/src/img/svgbg.svg')",
        'hero-backgroundVeggie': "url('/src/img/backgroundVeggie.png')",
        'hero-Veggie': "url('/src/img/intro.jpg')"

      },
      blur: {
        px: `1px`
      },
    },
    fontFamily: {
      osuwald: ['Oswald', 'sans-serif'],
      Josefin: ['Josefin Sans', 'sans-serif'],
      Avenir: ['Avenir'],
      Lulo: ['Lulo'],
      Oswald: ['Oswald', 'sans-serif'],
      Playfair: ['Playfair Display', 'serif']
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    // require('@tailwindcss/aspect-ratio')
  ],
}

