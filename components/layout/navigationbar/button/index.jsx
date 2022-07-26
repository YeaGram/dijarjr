import Link from "next/link";
export default function CallButton({ children, varians, className, href }) {
   const variants = {
      outlines:
         "outline outline-2 outline-contentYellow-500 text-contentYellow-500 bg-contentMain-600",
      fills: "bg-contentYellow-500",
   };
   const addVarian = variants[varians];
   return (
      <Link href={href}>
         <a
            className={`px-5 py-2 transition-all duration-500 rounded-[50px] font-Poppins font-semibold drop-shadow-md block  ${addVarian} ${className}`}
         >
            {children}
         </a>
      </Link>
   );
}
