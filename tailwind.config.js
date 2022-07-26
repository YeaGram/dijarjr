/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      extend: {
         colors: {
            contentYellow: {
               50: "#FFF8E5",
               100: "#FFF1CC",
               200: "#FFE299",
               300: "#FFD466",
               400: "#FFC533",
               500: "#FFB800",
               600: "#CC9200",
               700: "#996E00",
               800: "#664900",
               900: "#332500",
            },
            contentMain: {
               50: "#E1F9F6",
               100: "#C4F3ED",
               200: "#85E5DA",
               300: "#4AD9C8",
               400: "#26B5A5",
               500: "#19776C",
               600: "#146158",
               700: "#0F4841",
               800: "#0A2E2A",
               900: "#051917",
            },
         },
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
