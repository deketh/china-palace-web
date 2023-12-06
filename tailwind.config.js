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
        'chinapalace': "linear-gradient(to bottom, rgba(0,0,0,0.22), rgba(0,0,0,0.5) 65%, rgba(0,0,0,0.8) 90%), url('../public/img/background.png');",
        'lightflag': "url('../public/img/lightflag.png')",
        'dotted-red': "linear-gradient(135deg,#0000 20%,#503339 0 25%,#0000 0), repeating-linear-gradient(45deg,#503339 -3% 6%, #241F21 0 15%)",
        'red-cloth': 'linear-gradient(90deg, rgba(250, 250, 228, .5) 25%, transparent 0), linear-gradient(rgba(250, 250, 228, .5) 25%, transparent 0), linear-gradient(rgba(128, 72, 72, 1) 100%, transparent 0)',
        'flower-pattern': "url('../public/img/bgpattern.png')"
      },
      fontFamily: {
        'galliard': ['GalliardITC'],
        'galliard-bold': ['GalliardITC-Bold'],
        'guest-check': ['GuestCheck'],
        'liujian': ['LiuJianMaoCao'],
      },
    },
    colors: {
      'primary': '#fafae4',
      'dark': '#241F21',
      'dark-secondary': '#503339',
      'secondary': '#804848',
    },
    screens: {
      sm: '577px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
  },
  plugins: [],
}