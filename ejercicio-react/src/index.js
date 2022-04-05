import { createRoot } from "react-dom/client";
import MuseumList from "./components/museumList";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<MuseumList />);
