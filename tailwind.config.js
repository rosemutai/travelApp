module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    borderRadius: {
        'circle': '50%',
        'one': '1rem',
        '45': '5rem',
    },
    
    extend: {
      colors: {
        'teal': '#008080',
      },
      height: {
        '128': '20rem',
        'full-screen': '100vh'
      },

      width: {
        '40': '30%',
      },
      outlineWidth: {
        5: 'none',
      },
      margin: {
        '50': '50%',
      }
    },
  },
  plugins: [],
}