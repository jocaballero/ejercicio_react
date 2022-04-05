import {
  cardStyle,
  imageStyle,
  nameStyle,
  cardDescription,
  artList,
  descriptionStyle,
} from "./styles";

function ArtWork(props) {
  return (
    <div style={artList}>
      <div style={cardStyle}>
        <img style={imageStyle} src={props.image} alt={props.name} />
        <h1 style={nameStyle}>{props.name}</h1>
      </div>
      <div style={cardDescription}>
        <p style={descriptionStyle}>{props.description}</p>
      </div>
    </div>
  );
}

export default ArtWork;
