import ArtworkList from "./artworklist";
import NavBar from "./navbar";
import root from "../index";
import { cardStyle, imageStyle, nameStyle, cityStyle } from "./styles";

function Museum(props) {
  function showDetails() {
    root.render([<NavBar />, <ArtworkList artwork={props.gallery} />]);
  }

  return (
    <div onClick={showDetails} style={cardStyle}>
      <img style={imageStyle} src={props.image} alt={props.name} />
      <h1 style={nameStyle}>{props.name}</h1>
      <h2 style={cityStyle}>{props.city}</h2>
    </div>
  );
}

export default Museum;
export { cardStyle, imageStyle, nameStyle };
