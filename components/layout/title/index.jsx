export default function ContentTitle({ ids, children, subtitle, className }) {
   return (
      <div className="px-5">
         <div className="relative w-fit ml-3 ">
            <span className="absolute left-0 -ml-10 z-10 top-0 -mt-2">
               <svg
                  width="64"
                  height="48"
                  viewBox="0 0 64 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <rect width="44" height="28" fill="#1D756C" />
                  <rect x="20" y="14" width="44" height="34" fill="#22AFA1" />
               </svg>
            </span>
            <span className="absolute left-full top-0">
               <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <circle cx="4" cy="4" r="4" fill="#37DFCE" />
               </svg>
            </span>
            <span className="absolute top-full mt-1">
               <svg
                  width="136"
                  height="7"
                  viewBox="0 0 136 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     d="M0.5 6.99998C36.8333 3.66665 114.1 -2.00002 132.5 1.99998C155.5 6.99998 53.5 2.99997 0.5 6.99998Z"
                     fill="#2BADA0"
                  />
               </svg>
            </span>
            <h2
               className={`font-semibold text-4xl my-3 scroll-smooth ${className} relative z-20`}
               id={ids}
            >
               {children}
            </h2>
         </div>
         <p className="font-Poppins text-sm italic text-gray-700">{subtitle}</p>
      </div>
   );
}
