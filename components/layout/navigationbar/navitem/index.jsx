import Link from "next/link";
export default function NavItems({ children, href, className }) {
   return (
      <>
         <Link href={href}>
            <a
               className={`sm:py-1 py-4 px-4 transition-all rounded-lg  sm:hover:bg-green-800 font-Montserrat ${className}`}
            >
               {children}
            </a>
         </Link>
      </>
   );
}
