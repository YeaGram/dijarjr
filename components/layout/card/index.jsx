import CallButton from "../navigationbar/button";
export default function Card({ title, subtitle, links, children }) {
   return (
      <div className="flex m-3 flex-col bg-[#DBEDEB] justify-center items-center w-[150px] h-[250px] py-7 shadow-lg">
         <div className="flex-[2] flex items-center flex-col justify-center">
            <div className="relative w-[60px] h-[60px] flex items-center justify-center box-content">
               {children}
            </div>
            <div className="mt-5">
               <h4 className="font-Poppins font-semibold text-lg text-center leading-5">
                  {title}
               </h4>
               <p className="text-center font-light text-gray-500">
                  {subtitle}
               </p>
            </div>
         </div>
         <div className="flex-1 flex flex-col justify-end">
            <CallButton
               href={links}
               className="text-center text-white bg-[#22afa1] font-normal rounded-md"
               varians="fills"
            >
               Kunjungi
            </CallButton>
         </div>
      </div>
   );
}
