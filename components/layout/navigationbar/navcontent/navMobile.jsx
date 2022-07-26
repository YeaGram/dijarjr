import { MdOutlineArrowBackIosNew } from "react-icons/md";
import Brand from "../brand";
import NavItems from "../navitem";
export default function NavMobile({ handleHamburger, active }) {
   return (
      <div
         className={`order-1 flex-[2] fixed flex-col text-black flex bg-slate-100 w-10/12 px-5 z-30 transition-all ease-cubicTwo duration-700 top-0 left-0 bottom-0  ${
            active
               ? "translate-x-0 shadow-myboxOne"
               : "-translate-x-[100%] shadow-none"
         }`}
      >
         <div className="flex justify-between items-center py-5">
            <div className="w-10/12">
               <Brand className="text-xl leading-8">DijarJr</Brand>
               <Brand className="font-normal text-sm text-slate-500">
                  Dimas Januardi
               </Brand>
            </div>
            <div className="flex space-x-1 w-2/12 justify-center items-center font-Poppins text-sm">
               <span
                  className={`sm:hidden cursor-pointer transition-all duration-500 delay-500 ${
                     active ? "opacity-50" : "opacity-0"
                  } hover:opacity-100 transition-all `}
                  onClick={handleHamburger}
               >
                  close
               </span>
               <span
                  className={`${
                     active ? "rotate-0 delay-[400ms]" : "rotate-180"
                  } transition-all duration-700 ease-cubicOne`}
               >
                  <MdOutlineArrowBackIosNew />
               </span>
            </div>
         </div>
         <hr />
         <nav
            className={`flex flex-col text-zinc-600 hover:text-zinc-900 delay-[0ms] duration-75 `}
         >
            <NavItems
               href="#"
               className={`transition-all duration-700 delay-[150ms] ease-bounceOne  ${
                  active ? "translate-x-0" : "-translate-x-1/2"
               }`}
            >
               About
            </NavItems>
            <span
               className={`${
                  active ? "w-full" : "w-0"
               } transition-all duration-700 h-[1px] delay-150 block bg-gray-200`}
            ></span>
            <NavItems
               href="#"
               className={`transition-all duration-700 delay-[250ms] ease-bounceOne ${
                  active ? "translate-x-0" : "-translate-x-1/2"
               }`}
            >
               MyProject
            </NavItems>
            <span
               className={`${
                  active ? "w-full" : "w-0"
               } transition-all duration-700 h-[1px] delay-150 block bg-gray-200`}
            ></span>
            <NavItems
               href="#"
               className={`transition-all duration-700 delay-[350ms] ease-bounceOne ${
                  active ? "translate-x-0" : "-translate-x-1/2"
               }`}
            >
               Contact
            </NavItems>
            <span
               className={`${
                  active ? "w-full" : "w-0"
               } transition-all duration-700 h-[1px] delay-150 block bg-gray-200`}
            ></span>
         </nav>
         <footer className="absolute bottom-0 m-10 left-0">
            <span className="font-Poppins text-gray-600 text-sm block">
               Made With ❤ By <Brand className="inline-block">DijarJr</Brand>
            </span>
            <span className="font-poppins text-gray-500 text-xs block">
               Using NextJS and TailwindCSS
            </span>
         </footer>
      </div>
   );
}
