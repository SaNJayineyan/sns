import React from "react";
import { BeforeAfterSlider } from "../ui/BeforeAfterSlider";
import { SectionHeading } from "../ui/SectionHeading";

export const TransformationSection: React.FC = () => {
  return (
    <section className="section bg-white section-border-top" aria-labelledby="transformation-heading">
      <div className="container">
        <SectionHeading
          eyebrow="Visual Transformation"
          title="From Raw Structural Shell to Refined Living"
          subtitle="Drag the slider below to compare a typical bare-shell apartment interior with a finished, fully executed design concept."
          centered
        />

        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <BeforeAfterSlider
            beforeImage="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
            afterImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
            beforeLabel="Bare Handover State (Illustrative)"
            afterLabel="Executed Living Suite (Design Concept)"
            beforeAlt="Illustrative raw concrete handover state of apartment space"
            afterAlt="Warm minimalist executed living room with wooden accents and ambient lighting"
          />

          <div style={{ textAlign: "center", marginTop: "1.25rem", fontSize: "0.8rem", color: "var(--color-charcoal-subtle)" }}>
            * Interactive comparison slider demonstrates visual transition. Visuals represent illustrative conceptual imagery.
          </div>
        </div>
      </div>
    </section>
  );
};
