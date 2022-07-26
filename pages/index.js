import Head from "next/head";
import Content from "../components/content";
import Header from "../components/layout/header";
import { useState, useEffect } from "react";
import NavMobile from "../components/layout/navigationbar/navcontent/navMobile";
import Hamburger from "../components/layout/navigationbar/hamburger";
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
               winPos > 100 ? "opacity-0" : "opacity-100"
            } top-0 left-0 right-0 z-20`}
         >
            <Header active={active} handleHamburger={handleHamburger} />
         </header>

         {/* FLoatingHamburgerButton */}
         <div
            className={`${
               !active ? "translate-x-[0px]" : "translate-x-[83.333333%]"
            } transition-all ease-cubicTwo duration-700 fixed bottom-0 p-4 right-0 m-3 rounded-lg bg-green-500 block z-10 ${
               winPos > 100 ? "opacity-100" : "opacity-0"
            }`}
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
            <main className="mt-20 ">
               <Content />
               <Content />
            </main>
         </div>
      </div>
   );
}
