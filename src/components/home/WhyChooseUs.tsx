import React from "react";
import { UserCheck, Compass, Sparkles, CheckSquare } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";

export const WhyChooseUs: React.FC = () => {
  const principles = [
    {
      icon: <UserCheck size={24} />,
      title: "Personalized Design",
      desc: "Every floor plan is designed around your daily routines, household habits, and aesthetic desires—never forced into generic catalog templates.",
    },
    {
      icon: <Compass size={24} />,
      title: "Functional Planning",
      desc: "We rigorously prioritize spatial ergonomics, intuitive human circulation, cross-ventilation, and hidden storage that keeps your home effortlessly uncluttered.",
    },
    {
      icon: <Sparkles size={24} />,
      title: "Material Harmony",
      desc: "Carefully curated wood finishes, tactile fabrics, durable stones, and warm architectural illumination orchestrated to age gracefully over decades.",
    },
    {
      icon: <CheckSquare size={24} />,
      title: "Execution Focus",
      desc: "Structured milestone stages, rigorous carpentry tolerances, branded hardware specifications, and supervised on-site craftsmanship across Chennai.",
    },
  ];

  return (
    <section className="section bg-ivory section-border-top" aria-labelledby="why-choose-heading">
      <div className="container">
        <SectionHeading
          eyebrow="Our Guiding Principles"
          title="Thoughtful Design. Every Detail Considered."
          subtitle="We bridge the gap between architectural vision and dependable on-site craftsmanship."
          centered
        />

        <div className="principles-grid">
          {principles.map((p, index) => (
            <div key={index} className="principle-card">
              <div className="principle-icon">{p.icon}</div>
              <h3 className="principle-title">{p.title}</h3>
              <p className="principle-text">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
