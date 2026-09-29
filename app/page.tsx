import { EngagementSection } from "@/components/home/EngagementSection";
import { FinalCta } from "@/components/home/FinalCta";
import { FlagshipStudy } from "@/components/home/FlagshipStudy";
import { FounderSection } from "@/components/home/FounderSection";
import { Hero } from "@/components/home/Hero";
import { ProblemGrid } from "@/components/home/ProblemGrid";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { TechList } from "@/components/home/TechList";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemGrid />
      <ServicesGrid />
      <FlagshipStudy />
      <EngagementSection />
      <ProcessSection />
      <TechList />
      <FounderSection />
      <FinalCta />
    </>
  );
}
