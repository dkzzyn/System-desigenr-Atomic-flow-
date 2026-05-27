import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LeadFormProvider } from "./context/LeadFormContext";
import { SiteModeProvider } from "./context/SiteModeContext";
import "./index.css";
import "./styles/tailwind.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SiteModeProvider>
      <LeadFormProvider>
        <App />
      </LeadFormProvider>
    </SiteModeProvider>
  </StrictMode>,
);
