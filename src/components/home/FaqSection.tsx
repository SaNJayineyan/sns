import React from "react";
import { Link } from "react-router-dom";
import { faqData } from "../../data/faqData";
import { Accordion } from "../ui/Accordion";
import { SectionHeading } from "../ui/SectionHeading";

export const FaqSection: React.FC = () => {
  return (
    <section className="section bg-white section-border-top" aria-labelledby="faq-heading">
      <div className="container">
        <SectionHeading
          eyebrow="Answers & Insights"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our residential interior design process, budget planning, and project execution in Chennai."
          centered
        />

        <Accordion items={faqData} defaultOpenIndex={0} />

        <div style={{ textAlign: "center", marginTop: "3.5rem" }}>
          <p style={{ marginBottom: "1rem", fontSize: "0.95rem" }}>
            Have a question about your specific floor plan or handover timeline?
          </p>
          <Link to="/contact" className="btn btn-outline">
            <span>Speak With Our Design Team</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
