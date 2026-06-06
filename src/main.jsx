import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// const app = document.getElementById("root");
// const root = createRoot(app);
// root.render(<h1>Hello</h1>);
