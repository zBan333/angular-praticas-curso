/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        'grayCustom': {
          '50': '#f7f7f7',
          '100': '#ededed',
          '200': '#dcdcdc',
          '300': '#c8c8c8',
          '400': '#adadad',
          '500': '#999999',
          '600': '#888888',
          '700': '#7b7b7b',
          '800': '#676767',
          '900': '#545454',
          '950': '#363636',
        },
      'wild-sand': {
        '50': '#f5f5f5',
        '100': '#efefef',
        '200': '#dcdcdc',
        '300': '#bdbdbd',
        '400': '#989898',
        '500': '#7c7c7c',
        '600': '#656565',
        '700': '#525252',
        '800': '#464646',
        '900': '#3d3d3d',
        '950': '#292929',
      },
        'secundary': '#4f4f4f',

      },
      spacing: {
        'safezone-laptop': '75.25rem',
        'safezone-tablet': '43.75',
        'safezone-mobile': '22.063S',
        '1200': '1200px',
      },
    },
  },
  plugins: [],
}

