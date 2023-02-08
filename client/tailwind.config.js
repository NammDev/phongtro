module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      charcoal: '#333333',
      primary: '#F5F5F5',
      secondary: '#1266dd',
      tertiary: '#f73859',
    },
    extend: {
      width: {
        1100: '1100px',
      },
      backgroundImage: {
        logo: "url('https://phongtro123.com/images/logo-phongtro.svg')",
      },
    },
  },
  plugins: [],
}
