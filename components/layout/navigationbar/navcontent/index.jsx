import Brand from "../brand";
import Hamburger from "../hamburger";
import NavItems from "../navitem";
import { useState } from "react";

export default function NavigationBar() {
   const [active, setActive] = useState(false);
   const handleHamburger = () => {
      active ? setActive(false) : setActive(true);
   };

   return (
      <div className="px-5 py-5 bg-green-600 flex item-center text-white">
         <nav className="container flex justify-between item-center mx-auto">
            <div className=" flex-1 flex items-center">
               <Brand>DijarJr</Brand>
            </div>
            <div className="flex-[2] justify-end hidden sm:flex space-x-4">
               <NavItems href="#">About</NavItems>
               <NavItems href="#">MyProject</NavItems>
               <NavItems href="#">Contact</NavItems>
            </div>
            <div className="block sm:hidden" onClick={handleHamburger}>
               <Hamburger active={active} />
            </div>
         </nav>
      </div>
   );
}
