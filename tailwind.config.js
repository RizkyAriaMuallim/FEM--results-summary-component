/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      height: {
        'parent' : '750px',
        'box' : '400px',
        'circle' : '150px'
      },
      width: {
        'box' : '600px',
        'circle' : '150px'
      },
      maxWidth: {
        'box' : '197px'
      },
      margin: {
        'border' : '25px'
      },
      fontSize: {
        'para' : '18px',
      },
      backgroundColor: {
        'reaction' : 'rgb(255,246,245)',
        'memory' : 'rgb(255,251,242)',
        'verbal' : 'rgb(242,251,250)',
        'visual' : 'rgb(243,243,253)',
      },
      textColor: {
        'reaction' : 'rgb(255,87,87)',
        'memory' : 'rgb(255,185,51)',
        'verbal' : 'rgb(65,204,172)',
        'visual' : 'rgb(39,56,218)',
      },
      colors: {
        'boxTop' : 'hsl(252, 100%, 67%)',
        'boxBottom' : 'hsl(241, 81%, 54%)',
        'circleTop' : 'hsla(256, 72%, 46%, 1)',
        'circleBottom' : 'hsla(241, 72%, 46%, 0)',
      },
    },
  },
  plugins: [],
}
