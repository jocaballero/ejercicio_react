import { createRoot } from "react-dom/client";
import MuseumList from "./components/museumList";
import NavBar from "./components/navbar";

const root = createRoot(document.getElementById("root"));

root.render([<NavBar />, <MuseumList />]);

export default root;
