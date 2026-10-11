import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, FileSearch, Sparkles, Hammer, KeyRound } from "lucide-react";
import { useSeo } from "../utils/seo";

export const ProcessPage: React.FC = () => {
  useSeo({
    title: "Our Interior Design Process",
    description: "Discover Structs N Spaces transparent 4-stage residential design & execution methodology in Chennai — from initial floor plan discovery to turnkey handover.",
    canonicalPath: "/process",
  });

  const detailedSteps = [
    {
      num: "01",
      icon: <FileSearch size={28} />,
      title: "Discovery & Spatial Audit",
      subtitle: "Aligning lifestyle, spatial potential, and financial framework",
      description: "Every successful interior begins with deep listening. We conduct an exhaustive audit of your architectural floor plan, evaluate your daily routines, discuss your family's storage priorities, and establish realistic budget parameters.",
      deliverables: [
        "In-depth lifestyle and storage needs audit",
        "Site evaluation or builder blueprint analysis",
        "Indicative budget framework and scope prioritization",
      ],
      clientAction: "Share your floor plan, key handover dates, and aesthetic preferences.",
    },
    {
      num: "02",
      icon: <Sparkles size={28} />,
      title: "Design Concept & Visualizations",
      subtitle: "Translating lifestyle into 2D ergonomics and 3D visual harmony",
      description: "Our design team translates your requirements into millimeter-precise 2D space layouts, furniture clearances, electrical & lighting schemes, and photorealistic 3D perspectives so you can visualize every corner before work commences.",
      deliverables: [
        "2D furniture and spatial layout options",
        "Tactile material board (veneers, laminates, fabrics, stone)",
        "Photorealistic 3D perspectives of primary spaces",
        "Detailed bill of quantities (BOQ) with brand specifications",
      ],
      clientAction: "Review layout iterations and approve finish swatches.",
    },
    {
      num: "03",
      icon: <Hammer size={28} />,
      title: "Planning & Supervised Execution",
      subtitle: "Factory precision woodworking combined with site craftsmanship",
      description: "Once drawings receive client sign-off, work commences across parallel tracks: modular cabinetry carcasses are precision-pressed with European machinery while civil, electrical, false ceiling, and plumbing works advance on-site under active supervision.",
      deliverables: [
        "Reflected ceiling plans and electrical schematics",
        "Precision factory modular joinery fabrication",
        "Supervised on-site carpentry, plumbing, and painting",
        "Milestone progress updates and site check-in visits",
      ],
      clientAction: "Milestone payment clearances and scheduled site walkthroughs.",
    },
    {
      num: "04",
      icon: <KeyRound size={28} />,
      title: "Quality Review & Handover",
      subtitle: "Rigorous snag audit, thorough cleaning, and proud key handover",
      description: "Before handover, our site supervisors conduct an extensive 40-point quality audit—testing all soft-close hinges, drawer runners, lighting circuits, and edge band sealants. After final detailing and deep cleaning, we hand over your exquisite new home.",
      deliverables: [
        "Comprehensive snags and touch-up rectification",
        "Full deep cleaning of all joinery, countertops, and floors",
        "Hardware warranty certificates and care guidance manual",
        "Official handover of your completed residence",
      ],
      clientAction: "Joint final walkthrough, snags sign-off, and key reception.",
    },
  ];

  return (
    <div className="process-page">
      {/* Header Banner */}
      <section className="section-sm bg-ivory-light section-border-bottom">
        <div className="container">
          <span className="eyebrow">Our Methodology</span>
          <h1 style={{ marginTop: "0.5rem", marginBottom: "1rem" }}>
            From First Conversation to Finished Space
          </h1>
          <p style={{ maxWidth: "720px", fontSize: "1.15rem" }}>
            A structured, transparent 4-stage process designed to eliminate surprises, protect your investment, and deliver a home you will love living in for years to come.
          </p>
        </div>
      </section>

      {/* Process Deep Dive */}
      <section className="section bg-white">
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: "3.5rem" }}>
            {detailedSteps.map((step) => (
              <div
                key={step.num}
                className="editorial-card"
                style={{ padding: "clamp(2rem, 4vw, 3rem)" }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", marginBottom: "1.5rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
                    <div
                      style={{
                        width: "56px",
                        height: "56px",
                        background: "var(--color-ivory)",
                        border: "1px solid var(--color-border)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--color-olive)",
                      }}
                    >
                      {step.icon}
                    </div>
                    <div>
                      <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.8rem", color: "var(--color-taupe)", lineHeight: 1 }}>
                        Stage {step.num}
                      </span>
                      <h2 style={{ fontSize: "1.75rem", marginTop: "2px" }}>
                        {step.title}
                      </h2>
                    </div>
                  </div>
                </div>

                <p style={{ fontSize: "1.05rem", color: "var(--color-charcoal-muted)", lineHeight: 1.7, marginBottom: "1.75rem" }}>
                  {step.description}
                </p>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", borderTop: "1px solid var(--color-border)", paddingTop: "1.5rem" }}>
                  <div>
                    <h4 style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--color-olive)", marginBottom: "0.75rem" }}>
                      Key Deliverables
                    </h4>
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      {step.deliverables.map((item, i) => (
                        <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.9rem" }}>
                          <CheckCircle2 size={16} style={{ color: "var(--color-olive)", flexShrink: 0, marginTop: "3px" }} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ background: "var(--color-ivory)", padding: "1.25rem", border: "1px solid var(--color-border)" }}>
                    <h4 style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--color-charcoal)", marginBottom: "0.5rem" }}>
                      Homeowner's Role
                    </h4>
                    <p style={{ fontSize: "0.88rem", color: "var(--color-charcoal-muted)", margin: 0 }}>
                      {step.clientAction}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem", fontSize: "0.8rem", color: "var(--color-charcoal-subtle)" }}>
            * Note: Detailed project schedules, procurement lead times, and builder handover contingencies are finalized in your formal Scope of Work document prior to site commencement.
          </div>
        </div>
      </section>

      {/* Start Project Banner */}
      <section className="section-sm bg-charcoal">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ color: "#FFFFFF", marginBottom: "1rem" }}>
            Ready for Stage 01?
          </h2>
          <p style={{ color: "rgba(247, 244, 238, 0.8)", marginBottom: "2rem", maxWidth: "600px", marginInline: "auto" }}>
            Schedule an initial discovery discussion to explore your floor plan with our design team.
          </p>
          <Link to="/consultation" className="btn btn-secondary">
            <span>Schedule Discovery Consultation</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
};
