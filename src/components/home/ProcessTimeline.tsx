import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";

export const ProcessTimeline: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Discover",
      desc: "We begin by understanding your lifestyle, space requirements, aesthetic aspirations, family routines, and budget parameters through an in-depth conversation.",
    },
    {
      num: "02",
      title: "Design",
      desc: "Our design team develops comprehensive 2D furniture layouts, lighting schemes, tactile material boards, and 3D visualization perspectives for your feedback.",
    },
    {
      num: "03",
      title: "Plan & Execute",
      desc: "Once designs are finalized, we coordinate precise carpentry fabrication, modular factory pressing, civil modifications, and supervised site installation.",
    },
    {
      num: "04",
      title: "Finalize & Handover",
      desc: "We conduct a thorough joint walkthrough, address agreed touch-ups, test all hardware and soft-close mechanisms, and celebrate the handover of your new home.",
    },
  ];

  return (
    <section className="section bg-ivory-light section-border-top" aria-labelledby="process-heading">
      <div className="container">
        <SectionHeading
          eyebrow="Our Methodology"
          title="From First Conversation to Finished Space"
          subtitle="A structured, transparent workflow designed to give you clarity and confidence at every milestone."
          centered
        />

        <div className="timeline-grid">
          {steps.map((step) => (
            <div key={step.num} className="timeline-card">
              <div className="timeline-step-num">{step.num}</div>
              <h3 className="timeline-step-title">{step.title}</h3>
              <p className="timeline-step-desc">{step.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <Link to="/consultation" className="btn btn-primary">
            <span>Start Your Project</span>
            <ArrowRight size={16} />
          </Link>
          <p style={{ marginTop: "0.85rem", fontSize: "0.785rem", color: "var(--color-charcoal-subtle)" }}>
            * Specific project milestones and timelines vary depending on residential scope and builder handover status.
          </p>
        </div>
      </div>
    </section>
  );
};
