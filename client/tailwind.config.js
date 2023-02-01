module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      width: {
        1100: '1100px',
      },
      backgroundColor: {
        primary: '#F5F5F5',
        secondary: '#1266dd',
        tertiary: '#f73859',
      },
      backgroundImage: {
        logo: "url('https://phongtro123.com/images/logo-phongtro.svg')",
      },
    },
  },
  plugins: [],
}
