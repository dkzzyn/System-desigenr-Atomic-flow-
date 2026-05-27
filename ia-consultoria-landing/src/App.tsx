import "./App.css";
import "./styles/responsive.css";
import "./styles/marketing-effects.css";
import "./styles/consultoria-effects.css";
import "./styles/lead-form.css";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { PageLoader, usePageReady } from "./components/layout/PageLoader";
import { LeadQualificationModal } from "./components/lead/LeadQualificationModal";
import { ConsultoriaSections } from "./components/sections/ConsultoriaSections";
import { MarketingSections } from "./components/sections/MarketingSections";
import { useSiteMode } from "./context/SiteModeContext";

export default function App() {
  const pageReady = usePageReady();
  const { mode } = useSiteMode();

  return (
    <>
      <PageLoader />
      <LeadQualificationModal />
      <div className={`app-shell${pageReady ? " app-shell--ready" : ""}`}>
        <Header />
        <main className={`main main--${mode}`}>
          {mode === "marketing" ? <MarketingSections /> : <ConsultoriaSections />}
        </main>
        <Footer />
      </div>
    </>
  );
}
