import { useState } from "react";
import ArtWork from "./artwork";

function ArtworkList(props) {
  const [artwork] = useState(props.artwork);

  return (
    <div>
      {artwork.map((a) => {
        return (
          <ArtWork
            id={a.id}
            image={a.image}
            name={a.name}
            description={a.description}
          />
        );
      })}
    </div>
  );
}

export default ArtworkList;
