export default function ProjectCard() {
   return (
      <div className="relative p-5 w-fit sm:m-2">
         <span className="absolute -translate-x-1/2 -translate-y-5 bottom-0">
            <svg
               width="36"
               height="220"
               viewBox="0 0 36 220"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
            >
               <rect
                  y="220"
                  width="220"
                  height="36"
                  transform="rotate(-90 0 220)"
                  fill="#1D756C"
               />
            </svg>
         </span>
         <span className="absolute z-20 bottom-0 left-0 ">
            <svg
               width="35"
               height="51"
               viewBox="0 0 35 51"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
            >
               <rect
                  y="51"
                  width="51"
                  height="35"
                  transform="rotate(-90 0 51)"
                  fill="#22AFA1"
               />
            </svg>
         </span>
         <span className="absolute block z-20 bottom-0 right-0 w-fit rounded-xl text-white p-2 bg-[#448D84] font-Poppins">
            <p className="font-semibold">ProjectName</p>
            <p className="opacity-60 whitespace-nowrap text-xs">
               Lorem ipsum dolor sit amet.
            </p>
         </span>
         <div className="w-[300px] h-[230px] bg-white rounded-lg z-10 relative grid place-content-center">
            Project Goes Here...
         </div>
      </div>
   );
}
