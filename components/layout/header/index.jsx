import Hero from "../hero";
import NavigationBar from "../navigationbar/navcontent";

export default function Header({ active, handleHamburger, winPos, winHeight }) {
   return (
      <div>
         <NavigationBar
            active={active}
            handleHamburger={handleHamburger}
            winPos={winPos}
            winHeight={winHeight}
         />{" "}
      </div>
   );
}
