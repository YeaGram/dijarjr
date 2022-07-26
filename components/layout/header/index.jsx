import Hero from "../hero";
import NavigationBar from "../navigationbar/navcontent";

export default function Header({ active, handleHamburger }) {
   return (
      <>
         <NavigationBar active={active} handleHamburger={handleHamburger} />{" "}
      </>
   );
}
