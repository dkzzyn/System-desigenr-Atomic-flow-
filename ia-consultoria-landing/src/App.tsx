import "./App.css";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { PageLoader, usePageReady } from "./components/layout/PageLoader";
import {
  Differentials,
  FAQ,
  FinalCTA,
  Hero,
  MethodPillars,
  ProblemSection,
  SectorsBlock,
  ServicesGrid,
  SolutionLead,
  TechStrip,
} from "./components/sections";

export default function App() {
  const pageReady = usePageReady();

  return (
    <>
      <PageLoader />
      <div className={`app-shell${pageReady ? " app-shell--ready" : ""}`}>
        <Header />
        <main>
          <Hero />
          <ProblemSection />
          <ServicesGrid />
          <SolutionLead />
          <SectorsBlock />
          <TechStrip />
          <Differentials />
          <MethodPillars />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </>
  );
}
