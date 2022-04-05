import { useState } from "react";

const cardStyle = {
  border: "1px solid black",
  minHeight: "265px",
  width: "265px",
  backgroundColor: "#C4C4C4",
  margin: "40px 40px 40px 40px",
};

const imageStyle = {
  display: "block",
  margin: "20px auto 5px auto",
  height: "140px",
  width: "180px",
  objectFit: "contain",
};

const nameStyle = {
  textAlign: "center",
  fontFamily: "Roboto",
  fontSize: "32px",
};

const cityStyle = {
  textAlign: "center",
  fontFamily: "Roboto",
  fontSize: "20px",
};

function Museum(props) {
  //State
  const [id] = useState(props.id);
  const [image, setImage] = useState(props.image);
  const [name, setName] = useState(props.name);
  const [city, setCity] = useState(props.city);
  const [gallery, setGallery] = useState(props.gallery);

  return (
    <div style={cardStyle}>
      <img style={imageStyle} className="cardImage" src={image} alt={name} />
      <h1 style={nameStyle}>{name}</h1>
      <h2 style={cityStyle}>{city}</h2>
    </div>
  );
}

export default Museum;
