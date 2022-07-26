/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      extend: {
         backgroundImage: {
            hero: "url('/herroo.webp')",
         },
         transitionTimingFunction: {
            cubicOne: " cubic-bezier(0.78, 0.11, 0.1, 0.76)",
            cubicTwo: " cubic-bezier(0.44, 0.14, 0.18, 0.88)",
            bounceOne: " cubic-bezier(.57,1.37,.44,1.16)",
         },
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
