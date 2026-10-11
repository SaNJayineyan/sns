import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, PhoneCall } from "lucide-react";

export const ClosingCta: React.FC = () => {
  return (
    <section className="section bg-charcoal" aria-labelledby="closing-cta-heading">
      <div className="container" style={{ textAlign: "center" }}>
        <span className="eyebrow eyebrow-light">
          Begin Your Journey
        </span>

        <h2 id="closing-cta-heading" style={{ color: "#FFFFFF", marginBottom: "1.25rem", maxWidth: "800px", marginInline: "auto" }}>
          Your Home Deserves More Than Ordinary.
        </h2>

        <p style={{ color: "rgba(247, 244, 238, 0.8)", fontSize: "1.15rem", maxWidth: "620px", marginInline: "auto", marginBottom: "2.5rem" }}>
          Let's create a space that feels personal, purposeful, and unmistakably yours. Schedule your initial consultation to discuss your vision with our interior architects.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
          <Link to="/consultation" className="btn btn-secondary">
            <span>Book a Consultation</span>
            <ArrowRight size={16} />
          </Link>
          <Link to="/contact" className="btn btn-outline-light">
            <PhoneCall size={16} />
            <span>Talk to Our Team</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
