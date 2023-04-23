/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}" ],
  theme: {
    extend: {
      colors: {
        'gray':{
          "1": '#C1C2C2', // text descrip
          "5": '#353535', //background card
          "10":'#252425', //background site
        },
        'white':{
          "1": '#B7B8B7',
          "5": '#EDEEEE',//coins title
          "10":'#DCDDDC',//border search
        },
        'purple':{
          "1": "#7481ff", //menu
          "5": '#DE38DF', //text ticker
          "10":'#646BF5', //header
        }
      }
    },
  },
  plugins: [],
}

