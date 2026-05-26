import { AnimatedMarqueeTape } from "./AnimatedMarqueeTape";
import { Differentials } from "./Differentials";
import { FAQ } from "./FAQ";
import { FinalCTA } from "./FinalCTA";
import { Hero } from "./Hero";
import { MethodPillars } from "./MethodPillars";
import { ProblemSection } from "./ProblemSection";
import { SectorsBlock } from "./SectorsBlock";
import { ServicesGrid } from "./ServicesGrid";
import { TechStrip } from "./TechStrip";

export function ConsultoriaSections() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <ServicesGrid />
      <div className="ia-marquee-band">
        <AnimatedMarqueeTape />
      </div>
      <SectorsBlock />
      <TechStrip />
      <Differentials />
      <MethodPillars />
      <FAQ />
      <FinalCTA />
    </>
  );
}
