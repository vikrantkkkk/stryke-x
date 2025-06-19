import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ButtonProvider } from "./hooks/ButtonContext.jsx";
import { SnackbarProvider } from "notistack";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ButtonProvider>
      <SnackbarProvider>
        <App />
      </SnackbarProvider>
    </ButtonProvider>
  </StrictMode>
);
