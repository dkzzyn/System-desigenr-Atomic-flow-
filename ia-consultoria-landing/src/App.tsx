import "./App.css";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { PageLoader, usePageReady } from "./components/layout/PageLoader";
import { AnimatedMarqueeTape } from "./components/sections/AnimatedMarqueeTape";
import {
  Differentials,
  FAQ,
  FinalCTA,
  Hero,
  MethodPillars,
  ProblemSection,
  SectorsBlock,
  ServicesGrid,
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
          <AnimatedMarqueeTape />
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
