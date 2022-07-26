import Image from "next/image";
import CallButton from "../navigationbar/button";
export default function Hero() {
   return (
      <div className="bg-hero h-[968px] bg-center bg-cover bg-no-repeat flex items-center justify-center">
         <div className="container h-screen flex flex-col -mt-36 md:mt-32 md:flex-row justify-center items-center md:items-start px-6 sm:px-10">
            <div className="md:w-6/12 font-Montserrat order-2 md:order-1 flex justify-center">
               <div className="max-w-md">
                  <p className="text-3xl font-semibold text-white">Halo!</p>
                  <h2 className="text-6xl font-bold text-contentYellow-500 mb-2">
                     Aga Kareba?
                  </h2>
                  <p className="text-[1rem] font-Poppins mb-4 leading-7 text-contentMain-100">
                     Nama saya MUH. DIMAS JANUARDI NUR biasa dipanggil DIMAS.
                     Saya adalah orang yang membangun website ini dan ini
                     merupakan website pribadi saya.
                  </p>
                  <CallButton varians="fills" className="w-fit text-white">
                     Jelajahi
                  </CallButton>
               </div>
            </div>
            <div className="md:w-6/12 flex justify-center order-1 md:order-2">
               <div className="h-screen max-h-[300px] aspect-square relative ">
                  <Image src="/meHero.png" layout="fill" alt="mehero" />
               </div>
            </div>
         </div>
      </div>
   );
}
