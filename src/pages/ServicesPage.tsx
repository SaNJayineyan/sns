import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useSeo } from "../utils/seo";
import { servicesData } from "../data/servicesData";

export const ServicesPage: React.FC = () => {
  useSeo({
    title: "Interior Design & Execution Services",
    description: "Explore Structs N Spaces residential interior services in Chennai: Complete Home Interiors, Modular Kitchens, Wardrobes, Living Rooms, False Ceilings, and Custom Furniture.",
    canonicalPath: "/services",
  });

  const location = useLocation();

  // Handle deep anchor scrolling (e.g. /services#modular-kitchens)
  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.replace("#", "");
      const elem = document.getElementById(elementId);
      if (elem) {
        setTimeout(() => {
          elem.scrollIntoView({ behavior: "smooth" });
        }, 150);
      }
    }
  }, [location.hash]);

  return (
    <div className="services-page">
      {/* Header Banner */}
      <section className="section-sm bg-ivory-light section-border-bottom">
        <div className="container">
          <span className="eyebrow">Our Design Capabilities</span>
          <h1 style={{ marginTop: "0.5rem", marginBottom: "1rem" }}>
            Interior Design & Turnkey Execution Services
          </h1>
          <p style={{ maxWidth: "720px", fontSize: "1.15rem" }}>
            Whether you require a full turnkey execution for a brand-new Chennai apartment or a precision modular kitchen, our studio provides tailored design and supervised craftsmanship.
          </p>

          {/* Service Quick-Links Bar */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "2rem" }}>
            {servicesData.map((s) => (
              <a
                key={s.id}
                href={`#${s.slug}`}
                className="btn btn-outline"
                style={{ fontSize: "0.75rem", padding: "0.45rem 0.85rem" }}
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Deep-Dives */}
      <div className="services-list-container">
        {servicesData.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <section
              key={service.id}
              id={service.slug}
              className={`section ${isEven ? "bg-white" : "bg-ivory"} section-border-bottom`}
              style={{ scrollMarginTop: "90px" }}
            >
              <div className="container">
                <div className="split-intro" style={{ direction: isEven ? "ltr" : "rtl" }}>
                  {/* Media */}
                  <div className="split-intro-image" style={{ direction: "ltr", aspectRatio: "16/11" }}>
                    <img
                      src={service.heroImage}
                      alt={service.title}
                      loading="lazy"
                    />
                  </div>

                  {/* Details */}
                  <div style={{ direction: "ltr" }}>
                    <span className="eyebrow">Service 0{index + 1}</span>
                    <h2 style={{ marginBottom: "1rem" }}>{service.title}</h2>
                    <p style={{ fontSize: "1.05rem", marginBottom: "1.25rem", color: "var(--color-charcoal)" }}>
                      {service.detailedDescription}
                    </p>

                    {/* Scope of Work */}
                    <div style={{ marginBottom: "1.5rem" }}>
                      <h4 style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--color-olive)", marginBottom: "0.75rem" }}>
                        Scope of Execution
                      </h4>
                      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        {service.scope.map((item, i) => (
                          <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", fontSize: "0.9rem" }}>
                            <CheckCircle2 size={16} style={{ color: "var(--color-olive)", flexShrink: 0, marginTop: "3px" }} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Ideal For Highlight */}
                    <div
                      style={{
                        background: isEven ? "var(--color-ivory)" : "var(--color-white)",
                        border: "1px solid var(--color-border)",
                        padding: "1rem 1.25rem",
                        marginBottom: "1.75rem",
                        fontSize: "0.85rem",
                      }}
                    >
                      <strong style={{ color: "var(--color-charcoal)" }}>Ideal For: </strong>
                      <span style={{ color: "var(--color-charcoal-muted)" }}>{service.idealFor}</span>
                    </div>

                    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                      <Link to="/consultation" className="btn btn-primary">
                        <span>Enquire About {service.title}</span>
                        <ArrowRight size={15} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Consultation Bar */}
      <section className="section-sm bg-charcoal">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ color: "#FFFFFF", marginBottom: "1rem" }}>
            Unsure Which Package Suits Your Home?
          </h2>
          <p style={{ color: "rgba(247, 244, 238, 0.8)", marginBottom: "2rem", maxWidth: "600px", marginInline: "auto" }}>
            Share your floor plan with our design team. We will review your space and outline a prioritized scope of work tailored to your budget.
          </p>
          <Link to="/consultation" className="btn btn-secondary">
            <span>Request a Scope Review</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
};
