import { useState, useEffect } from "react";
import axios from "axios";
import Museum from "./museum";

const museumList = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  margin: "0px 120px 0px 120px",
};

function MuseumList() {
  const [museums, setMuseums] = useState([]);

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      const result = await axios(
        "https://back-museums-uniandes.herokuapp.com/api/museums"
      );
      if (!ignore) setMuseums(result.data);
    }

    fetchData();
    return () => {
      ignore = true;
    };
  });

  return (
    <div style={museumList}>
      {museums.map((m) => {
        return (
          <Museum
            id={m.id}
            image={m.image}
            name={m.name}
            city={m.city}
            gallery={m.artworks}
          />
        );
      })}
    </div>
  );
}

export default MuseumList;
