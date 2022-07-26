import Head from "next/head";
import Content from "../components/content";
import Header from "../components/layout/header";
import { useState, useEffect } from "react";
import NavMobile from "../components/layout/navigationbar/navcontent/navMobile";
import Hamburger from "../components/layout/navigationbar/hamburger";
import Hero from "../components/layout/hero";
import MyProject from "../components/content/myproject";
import Profile from "../components/content/profile";
import Skill from "../components/content/skills";
export default function Home() {
   const [active, setActive] = useState(false);
   const handleHamburger = () => {
      active ? setActive(false) : setActive(true);
   };

   // onScroll pos :V
   //get Window Height
   const [winHeight, setWinHeight] = useState(0);
   useEffect(() => {
      setWinHeight(window.innerHeight);
   }, []);

   //getScrollPoss
   const [winPos, setWinPos] = useState(0);
   useEffect(() => {
      const onScroll = () => setWinPos(window.pageYOffset);
      // clean up code
      window.removeEventListener("scroll", onScroll);
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
   }, []);

   // console.log("sekarang di " + winPos);
   // console.log("target " + winHeight);
   // console.log(winPos > winHeight ? "Yesss!!" : "Noooo!! Belum Bang");

   return (
      <div className="overflow-x-hidden ">
         <Head>
            <title>DijarJr</title>
            <meta name="description" content="Dijar Portfolio App" />
            <link rel="icon" href="/favicon.ico" />
         </Head>

         {/* SideNavbar--MobileOnly */}
         <nav>
            <NavMobile active={active} handleHamburger={handleHamburger} />
         </nav>

         {/* HeaderStart!! */}
         <header
            className={`${
               !active ? "translate-x-[0px]" : "translate-x-[83.333333%]"
            } transition-all ease-cubicTwo duration-700 fixed ${
               winPos > winHeight
                  ? "opacity-0  sm:bg-contentMain-500"
                  : "opacity-100"
            } sm:opacity-100  top-0 left-0 right-0 z-20 backdrop-blur-xl`}
         >
            <Header
               active={active}
               handleHamburger={handleHamburger}
               winPos={winPos}
               winHeight={winHeight}
            />
         </header>
         <Hero />

         {/* FLoatingHamburgerButton */}
         <div
            className={`${
               !active ? "translate-x-[0px]" : "translate-x-[83.333333%]"
            } transition-all ease-cubicTwo duration-700 fixed bottom-0 p-4 right-0 m-3 rounded-lg bg-contentMain-500 block z-10 ${
               winPos > winHeight ? "opacity-100" : "opacity-0"
            } sm:opacity-0 sm:hidden`}
            onClick={handleHamburger}
         >
            <Hamburger active={active} />
         </div>

         {/* ContentStart! */}
         <div
            className={`${
               !active ? "translate-x-[0px]" : "translate-x-[83.333333%]"
            } transition-all ease-cubicTwo duration-700`}
         >
            <main className="mt-20 space-y-11 ">
               <Profile />
               <Skill />
               {/* MyProject */}
               <div className="w-screen relative">
                  <svg
                     viewBox="0 0 1280 266"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 0L53.3333 5.54167C106.667 11.0833 213.333 22.1667 320 55.4167C426.667 88.6667 533.333 144.083 640 166.25C746.667 188.417 853.333 177.333 960 144.083C1066.67 110.833 1173.33 55.4167 1226.67 27.7083L1280 0V266H1226.67C1173.33 266 1066.67 266 960 266C853.333 266 746.667 266 640 266C533.333 266 426.667 266 320 266C213.333 266 106.667 266 53.3333 266H0V0Z"
                        fill="#4CBAAC"
                     />
                  </svg>

                  <div className="bg-[#4CBAAC] -mt-10">
                     <MyProject
                        titles="MyProject"
                        id="myproject"
                        subtitle="List Of MyProject"
                        className="text-white"
                     />
                  </div>
                  <svg
                     viewBox="0 0 1280 232"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1280 232L1226.67 227.167C1173.33 222.333 1066.67 212.667 960 183.667C853.333 154.667 746.667 106.333 640 87C533.333 67.6667 426.667 77.3333 320 106.333C213.333 135.333 106.667 183.667 53.3333 207.833L-0.00012207 232V0H53.3333C106.667 0 213.333 0 320 0C426.667 0 533.333 0 640 0C746.667 0 853.333 0 960 0C1066.67 0 1173.33 0 1226.67 0H1280V232Z"
                        fill="#4CBAAC"
                     />
                  </svg>
               </div>

               {/* Contact */}
               <Content
                  titles="Contact"
                  id="kontak"
                  subtitle="Wanna Contact Me?"
               />
            </main>
         </div>
      </div>
   );
}
