import Head from "next/head";
import Content from "../components/content";
import Header from "../components/layout/header";
import { useState } from "react";
import NavMobile from "../components/layout/navigationbar/navcontent/navMobile";
export default function Home() {
   const [active, setActive] = useState(false);
   const handleHamburger = () => {
      active ? setActive(false) : setActive(true);
   };
   return (
      <div className="overflow-x-hidden">
         <Head>
            <title>DijarJr</title>
            <meta name="description" content="Dijar Portfolio App" />
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <nav>
            <NavMobile active={active} handleHamburger={handleHamburger} />
         </nav>
         <div
            className={`${
               !active ? "translate-x-[0px]" : "translate-x-[83.333333%]"
            } transition-all ease-cubicTwo duration-700 w-full h-full`}
         >
            <header>
               <Header active={active} handleHamburger={handleHamburger} />
            </header>
            <main>
               <Content />
            </main>
         </div>
      </div>
   );
}
