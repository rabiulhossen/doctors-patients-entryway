module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  themes: [
    {
      doctortheme: {
      
"primary": "#13D7F4",    
"secondary": "#3A4256",  
"accent": "#fca6c6",
"neutral": "#15151E",
"base-100": "#EFFEFA",
"info": "#1C89E9",
"success": "#05806D",
"warning": "#C47A03",
"error": "#F95D8C",
      },
    },
  ],
  plugins: [require("daisyui")],
 
}