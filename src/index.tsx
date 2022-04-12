import { createRoot } from "react-dom/client";
import { Overlay } from "./components/Overlay";
import App from "./App";
import "./index.css";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <>
    <App />
    <Overlay />
  </>
);
