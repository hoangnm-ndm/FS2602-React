import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import TienAn from "./TienAn.jsx";
import LeMinhHieu from "./LeMinhHieu.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <TienAn /> */}
    <LeMinhHieu />
  </StrictMode>
);

// const app = document.getElementById("root");
// const root = createRoot(app);
// root.render(<h1>Hello</h1>);
