import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import lang from "./lang.json";

// i18n init
i18n.use(initReactI18next).init({
  resources: lang,
  lng: "ru",
  fallbackLng: "ru",
  interpolation: { escapeValue: false },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
