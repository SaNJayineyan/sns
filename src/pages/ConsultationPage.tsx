import React from "react";
import { ShieldCheck, Clock, MapPin } from "lucide-react";
import { useSeo } from "../utils/seo";
import { ConsultationForm } from "../components/consultation/ConsultationForm";

export const ConsultationPage: React.FC = () => {
  useSeo({
    title: "Book a Consultation",
    description: "Schedule your interior design consultation with Structs N Spaces in Chennai. Discuss your 2BHK, 3BHK, or villa requirements, space planning, and budget options.",
    canonicalPath: "/consultation",
  });

  return (
    <div className="consultation-page">
      {/* Header Banner */}
      <section className="section-sm bg-ivory-light section-border-bottom">
        <div className="container">
          <span className="eyebrow">Personalized Design Consultation</span>
          <h1 style={{ marginTop: "0.5rem", marginBottom: "1rem" }}>
            Book Your Design Consultation
          </h1>
          <p style={{ maxWidth: "720px", fontSize: "1.15rem" }}>
            Take the first step toward an exquisite home. Share your apartment or villa details below to schedule an initial consultation and site evaluation with our interior team in Chennai.
          </p>

          {/* Reassuring Pillars */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1.25rem",
              marginTop: "2.5rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <ShieldCheck size={20} style={{ color: "var(--color-olive)" }} />
              <span style={{ fontSize: "0.85rem", color: "var(--color-charcoal)" }}>
                No obligation initial discussion
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <Clock size={20} style={{ color: "var(--color-olive)" }} />
              <span style={{ fontSize: "0.85rem", color: "var(--color-charcoal)" }}>
                Prompt coordination within 24 business hours
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <MapPin size={20} style={{ color: "var(--color-olive)" }} />
              <span style={{ fontSize: "0.85rem", color: "var(--color-charcoal)" }}>
                On-site evaluations across Chennai
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="section bg-ivory">
        <div className="container" style={{ maxWidth: "900px" }}>
          <ConsultationForm />
        </div>
      </section>
    </div>
  );
};
