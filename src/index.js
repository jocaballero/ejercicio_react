import { createRoot } from "react-dom/client";
import MuseumList from "./components/museumList";
import NavBar from "./components/navbar";

const root = createRoot(document.getElementById("root"));

root.render([<NavBar museum={"MUSEOS"} />, <MuseumList />]);

export default root;
