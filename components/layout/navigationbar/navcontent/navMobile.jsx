import Brand from "../brand";
import NavItems from "../navitem";
export default function NavMobile({ handleHamburger, active }) {
   return (
      <div>
         <div
            className={`order-1 sm:order-2 flex-[2] sm:justify-end sm:hidden sm:space-x-4 fixed sm:static flex-col sm:flex-row text-black flex bg-slate-100 w-[320px] h-full sm:w-auto px-5 sm:px-0 z-10 transition-all ease-in-out duration-700  ${
               active
                  ? "translate-x-0 shadow-myboxOne"
                  : "-translate-x-[320px] shadow-none"
            }`}
         >
            <div className="flex justify-between items-center py-5">
               <div>
                  <Brand>DijarJr</Brand>
               </div>
               <span
                  className="sm:hidden cursor-pointer opacity-50 hover:opacity-100 transition-all"
                  onClick={handleHamburger}
               >
                  close
               </span>
            </div>
            <hr />
            <NavItems href="#">About</NavItems>
            <NavItems href="#">MyProject</NavItems>
            <NavItems href="#">Contact</NavItems>
         </div>
      </div>
   );
}
