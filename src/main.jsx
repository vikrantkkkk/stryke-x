import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ButtonProvider } from "./hooks/ButtonContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ButtonProvider>
      <App />
    </ButtonProvider>
  </StrictMode>
);
