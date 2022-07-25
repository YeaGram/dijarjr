import Brand from "../brand";
import Hamburger from "../hamburger";
import NavItems from "../navitem";
import { useState } from "react";
import NavMobile from "./navMobile";

export default function NavigationBar({ handleHamburger, active }) {
   return (
      <div className="">
         <div className={`px-5 py-5 bg-green-600 flex item-center text-white`}>
            <nav className="container flex justify-between item-center mx-auto">
               <div className="flex-1 sm:order-1 order-2 justify-end sm:justify-start flex items-center">
                  <Brand className="text-2xl">DijarJr</Brand>
               </div>
               <div
                  className={`order-2 flex-[2] justify-end sm:flex space-x-4 hidden w-auto transition-all `}
               >
                  <NavItems href="#">About</NavItems>
                  <NavItems href="#">MyProject</NavItems>
                  <NavItems href="#">Contact</NavItems>
               </div>
               <div
                  className="block sm:hidden order-1"
                  onClick={handleHamburger}
               >
                  <Hamburger active={active} />
               </div>
            </nav>
         </div>
      </div>
   );
}
