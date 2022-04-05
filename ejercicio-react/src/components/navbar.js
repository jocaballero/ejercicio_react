import ArtworkList from "./artworklist";
import MuseumList from "./museumList";
import { navbarStyle } from "./styles";
import root from "../index";

function NavBar() {
  function loadMuseums() {
    root.render([<NavBar />, <MuseumList />]);
  }

  return (
    <div style={navbarStyle}>
      <ul>
        <li onClick={loadMuseums}>Museums</li>
      </ul>
    </div>
  );
}

export default NavBar;
