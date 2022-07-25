import Link from "next/link";
export default function Brand({ children, className }) {
   return (
      <Link href="#">
         <a>
            <p className={`font-semibold ${className}`}>{children}</p>
         </a>
      </Link>
   );
}
