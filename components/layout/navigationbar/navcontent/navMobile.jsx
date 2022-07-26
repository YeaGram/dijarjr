import { RiArrowLeftSFill } from "react-icons/ri";
import { BsGithub, BsTwitter, BsInstagram } from "react-icons/bs";
import Brand from "../brand";
import NavItems from "../navitem";
import Image from "next/image";
import CallButton from "../button";

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
            <div className="w-10/12 flex items-center space-x-2">
               <div
                  className={`relative overflow-hidden transition-all ease-bounceOne duration-[600ms] rounded-tl-xl ${
                     active ? "delay-500 w-11 h-11 " : "w-0 h-0"
                  }`}
               >
                  <Image src="/favicon.ico" layout="fill" alt="profile" />
               </div>
               <div className="">
                  <Brand className="text-xl leading-8 text-contentMain-500">
                     DijarJr
                  </Brand>
                  <Brand className="font-normal text-sm text-slate-500">
                     Dimas Januardi
                  </Brand>
               </div>
            </div>
            <div className="flex space-x-1 w-2/12 justify-center items-center font-Poppins text-sm">
               <span
                  className={`sm:hidden cursor-pointer transition-all duration-500 delay-500 ${
                     active ? "text-contentMain-500" : "text-contentMain-0"
                  } hover:text-contentMain-600 transition-all `}
                  onClick={handleHamburger}
               >
                  close
               </span>
               <span
                  className={`${
                     active ? "rotate-0 delay-[400ms]" : "rotate-180"
                  } transition-all duration-700 ease-cubicOne text-contentMain-500 flex items-center`}
               >
                  {/* <MdOutlineArrowBackIosNew /> */}
                  <RiArrowLeftSFill className="text-3xl" />
               </span>
            </div>
         </div>
         <hr />
         <nav
            className={`flex flex-col text-contentMain-600 hover:text-contentMain-400 delay-[0ms] duration-75 `}
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
               Skill
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
               MyProject
            </NavItems>
            <span
               className={`${
                  active ? "w-full" : "w-0"
               } transition-all duration-700 h-[1px] delay-150 block bg-gray-200`}
            ></span>
            <span
               className={`transition-all duration-700 delay-[450ms] ease-bounceOne ${
                  active ? "translate-x-0" : "-translate-x-1/2"
               }`}
            >
               <CallButton varians="fills" className={`my-5 text-white w-fit `}>
                  Hubungi
               </CallButton>
            </span>
         </nav>
         <footer className="absolute bottom-0 m-10 left-0">
            <span className="font-Poppins text-contentMain-600 text-sm block">
               Made With ❤ By <Brand className="inline-block">DijarJr</Brand>
            </span>
            <span className="font-poppins text-contentMain-500 text-xs block">
               Using NextJS and TailwindCSS
            </span>
            <span className="flex space-x-1 text-contentMain-600 text-xl py-2 cursor-pointer">
               <BsGithub />
               <BsTwitter />
               <BsInstagram />
            </span>
         </footer>
      </div>
   );
}
