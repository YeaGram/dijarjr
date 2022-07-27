import Brand from "../brand";
import Hamburger from "../hamburger";
import NavItems from "../navitem";
import { useState } from "react";
import NavMobile from "./navMobile";
import CallButton from "../button";

export default function NavigationBar({
   handleHamburger,
   active,
   winPos,
   winHeight,
}) {
   return (
      <div className={``}>
         <div
            className={`px-5 py-4 bg-transparent flex item-center text-white shadow-myboxOne `}
         >
            <nav className="container sm:px-10 flex justify-center sm:justify-between item-center mx-auto ">
               <div className="flex-1 order-2 sm:order-1 justify-end sm:justify-start flex items-center">
                  <Brand className="text-2xl">DijarJr</Brand>
               </div>
               <div
                  className={`order-2 items-center flex-[2] justify-center sm:flex space-x-4 hidden w-auto transition-all `}
               >
                  <NavItems href="#profile">Profile</NavItems>
                  <NavItems href="#skill">Skill</NavItems>
                  <NavItems href="#myproject">MyProject</NavItems>
               </div>
               <div className="order-3 hidden sm:flex flex-1 items-center justify-end ">
                  <CallButton
                     varians={winPos > winHeight ? "fills" : "outlines"}
                     className={``}
                     href="#kontak"
                  >
                     Hubungi!
                  </CallButton>
               </div>
               <div
                  className="block sm:hidden order-1 "
                  onClick={handleHamburger}
               >
                  <Hamburger active={active} />
               </div>
            </nav>
         </div>
      </div>
   );
}
