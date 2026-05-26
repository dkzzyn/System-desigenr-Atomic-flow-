import "./App.css";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
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
  return (
    <>
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
    </>
  );
}
