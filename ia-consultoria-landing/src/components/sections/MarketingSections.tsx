import { Differentials } from "./Differentials";
import { FinalCTA } from "./FinalCTA";
import { Hero } from "./Hero";
import { MarketingChallengeBand } from "./MarketingChallengeBand";
import { MethodPillars } from "./MethodPillars";
import { SectorsBlock } from "./SectorsBlock";
import { ServicesGrid } from "./ServicesGrid";
import { TechStrip } from "./TechStrip";

export function MarketingSections() {
  return (
    <>
      <Hero />
      <MarketingChallengeBand />
      <MethodPillars />
      <ServicesGrid />
      <SectorsBlock />
      <Differentials />
      <TechStrip />
      <FinalCTA />
    </>
  );
}
