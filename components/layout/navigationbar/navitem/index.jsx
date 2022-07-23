import Link from "next/link";
export default function NavItems({ children, href }) {
   return (
      <Link href={href}>
         <a
            className={`py-1 px-4 transition-all rounded-lg  hover:bg-green-800`}
         >
            {children}
         </a>
      </Link>
   );
}
