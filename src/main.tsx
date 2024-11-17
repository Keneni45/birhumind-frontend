import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import i18n from "./i18n.tsx";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter as Router } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </Router>
  </StrictMode>
);
