import ArtworkList from "./artworklist";
import MuseumList from "./museumList";
import {
  navbarStyle,
  navbarUl,
  navbarLi,
  navbarTitle,
  navigationTitle,
  contentTitle,
  hrStyle,
} from "./styles";
import root from "../index";
import { useState } from "react";

function NavBar(props) {
  let title = "MUSEOS";
  if (props.museum) {
    title = props.museum;
  }

  function loadMuseums() {
    root.render([<NavBar />, <MuseumList />]);
  }

  return (
    <div>
      <div style={navbarStyle}>
        <ul style={navbarUl}>
          <li style={navbarTitle}>Museos de arte moderno</li>
          <li style={navbarLi}>
            <a>Movimientos</a>
          </li>
          <li style={navbarLi}>
            <a>Artistas</a>
          </li>
          <li style={navbarLi}>
            <a onClick={loadMuseums}>Museos</a>
          </li>
        </ul>
      </div>
      <div>
        <p style={navigationTitle}>Home {">"} Museos</p>
      </div>
      <div style={contentTitle}>
        {title === "MUSEOS"
          ? "MUSEOS"
          : "MUSEO " + title + ": Obras principales"}
      </div>
      <hr style={hrStyle}></hr>
    </div>
  );
}

export default NavBar;
