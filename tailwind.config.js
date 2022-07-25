/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      extend: {
         fontFamily: {
            Poppins: ["Poppins"],
            Montserrat: ["Montserrat"],
         },
         dropShadow: {
            mydropOne: "1px 1px 1px rgba(0,0,0, 1)",
         },
         boxShadow: {
            myboxOne: "5px 0px 20px 0px rgba(0,0,0, .3)",
         },
      },
   },
   plugins: [],
};
