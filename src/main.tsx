import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./owl.carousel.min.css";
import "./owl.theme.default.min.css";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
