import React from "react";
import { useSeo } from "../utils/seo";
import { HeroSection } from "../components/home/HeroSection";
import { TrustStrip } from "../components/home/TrustStrip";
import { IntroSection } from "../components/home/IntroSection";
import { ServicesGrid } from "../components/home/ServicesGrid";
import { PortfolioSection } from "../components/home/PortfolioSection";
import { WhyChooseUs } from "../components/home/WhyChooseUs";
import { ProcessTimeline } from "../components/home/ProcessTimeline";
import { TransformationSection } from "../components/home/TransformationSection";
import { TestimonialsSection } from "../components/home/TestimonialsSection";
import { FaqSection } from "../components/home/FaqSection";
import { ClosingCta } from "../components/home/ClosingCta";

export const HomePage: React.FC = () => {
  useSeo({
    title: "We Make Your Home Exquisite",
    description: "Structs N Spaces is a premier residential interior design studio in Chennai. Specializing in bespoke apartments, modular kitchens, custom wardrobes, and turnkey execution with 10+ years experience.",
    canonicalPath: "/",
  });

  return (
    <>
      <HeroSection />
      <TrustStrip />
      <IntroSection />
      <ServicesGrid />
      <PortfolioSection />
      <WhyChooseUs />
      <ProcessTimeline />
      <TransformationSection />
      <TestimonialsSection />
      <FaqSection />
      <ClosingCta />
    </>
  );
};
