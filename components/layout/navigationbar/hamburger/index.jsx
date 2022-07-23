import styles from "./hamburger.module.css";

export default function Hamburger({ active }) {
   return (
      <div
         className={`${styles.hamburgerContainer} ${
            active ? styles.hamburgerActive : ""
         }`}
      >
         <span></span>
         <span></span>
         <span></span>
      </div>
   );
}
