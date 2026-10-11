import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Compass, HeartHandshake, Layers, ShieldCheck, CheckCircle2 } from "lucide-react";
import { useSeo } from "../utils/seo";
import { businessConfig } from "../config/businessConfig";
import { SectionHeading } from "../components/ui/SectionHeading";

export const AboutPage: React.FC = () => {
  useSeo({
    title: "About Our Studio",
    description: "Learn about Structs N Spaces — 10+ years of residential interior design in Chennai, combining architectural practicality, honest materials, and bespoke home execution.",
    canonicalPath: "/about",
  });

  return (
    <div className="about-page">
      {/* Page Header Banner */}
      <section className="section-sm bg-ivory-light section-border-bottom">
        <div className="container">
          <span className="eyebrow">Our Story & Philosophy</span>
          <h1 style={{ marginTop: "0.5rem", marginBottom: "1rem" }}>
            Creating Homes That Feel Beautifully Yours.
          </h1>
          <p style={{ maxWidth: "700px", fontSize: "1.15rem" }}>
            Structs N Spaces was founded with a singular conviction: your home should be an authentic reflection of how you live, crafted with timeless materials and executed with uncompromising precision.
          </p>
        </div>
      </section>

      {/* Editorial Split Story */}
      <section className="section bg-white">
        <div className="container">
          <div className="split-intro">
            <div>
              <span className="eyebrow">The Studio Vision</span>
              <h2 style={{ marginBottom: "1.5rem" }}>
                Where Architectural Rigor Meets Daily Living
              </h2>
              <p style={{ marginBottom: "1.25rem" }}>
                Over the past <strong>{businessConfig.experienceYears} years</strong>, our team has completed more than <strong>{businessConfig.completedProjectsCount} residential projects</strong> across Chennai. From compact urban 2BHKs in OMR to expansive coastal villas along the ECR, our focus has never been on fleeting trends or decorative excess.
              </p>
              <p style={{ marginBottom: "1.25rem" }}>
                Instead, we approach interior design from the fundamentals: how natural breeze and daylight move across rooms, where daily storage keeps surfaces clear, and how warm textures—hand-rubbed teak, natural cane, matte stone, and indirect cove lighting—create an enduring sense of calm.
              </p>
              <p style={{ marginBottom: "2rem" }}>
                We bridge the critical gap between conceptual 3D renders and on-site reality. Because we manage both design and execution under one roof, our clients enjoy complete peace of mind knowing that what was committed on paper is faithfully built into their homes.
              </p>

              <div style={{ display: "flex", gap: "2rem", borderTop: "1px solid var(--color-border)", paddingTop: "1.5rem" }}>
                <div>
                  <div style={{ fontFamily: "var(--font-serif)", fontSize: "2.2rem", fontWeight: 600, color: "var(--color-charcoal)", lineHeight: 1 }}>
                    {businessConfig.experienceYears}
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "var(--color-olive)", textTransform: "uppercase", letterSpacing: "0.05em", marginTop: "4px" }}>
                    Years Experience
                  </div>
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-serif)", fontSize: "2.2rem", fontWeight: 600, color: "var(--color-charcoal)", lineHeight: 1 }}>
                    {businessConfig.completedProjectsCount}
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "var(--color-olive)", textTransform: "uppercase", letterSpacing: "0.05em", marginTop: "4px" }}>
                    Homes Executed
                  </div>
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-serif)", fontSize: "2.2rem", fontWeight: 600, color: "var(--color-charcoal)", lineHeight: 1 }}>
                    100%
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "var(--color-olive)", textTransform: "uppercase", letterSpacing: "0.05em", marginTop: "4px" }}>
                    Personalized Designs
                  </div>
                </div>
              </div>
            </div>

            <div className="split-intro-image" style={{ aspectRatio: "4/5" }}>
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                alt="Editorial living room interior demonstrating Structs N Spaces aesthetic principles"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pillars of Our Collaboration */}
      <section className="section bg-ivory section-border-top">
        <div className="container">
          <SectionHeading
            eyebrow="Our Commitments"
            title="How We Collaborate With Every Homeowner"
            subtitle="Transparent communication, honest material advice, and unwavering respect for your time and home."
            centered
          />

          <div className="principles-grid">
            <div className="principle-card">
              <div className="principle-icon">
                <HeartHandshake size={24} />
              </div>
              <h3 className="principle-title">Deep Listening</h3>
              <p className="principle-text">
                We take the time to understand your daily rhythms, family habits, and personal tastes before sketching a single layout.
              </p>
            </div>

            <div className="principle-card">
              <div className="principle-icon">
                <Layers size={24} />
              </div>
              <h3 className="principle-title">Material Integrity</h3>
              <p className="principle-text">
                We specify authentic, durable materials—calibrated BWR/BWP plywood, Blum hardware, and high-performance quartz surfaces built for Indian households.
              </p>
            </div>

            <div className="principle-card">
              <div className="principle-icon">
                <Compass size={24} />
              </div>
              <h3 className="principle-title">Spatial Ergonomics</h3>
              <p className="principle-text">
                Every doorway clearance, counter height, and drawer depth is calibrated for natural posture and seamless human movement.
              </p>
            </div>

            <div className="principle-card">
              <div className="principle-icon">
                <ShieldCheck size={24} />
              </div>
              <h3 className="principle-title">Supervised Execution</h3>
              <p className="principle-text">
                Our site coordinators monitor daily progress, verify carpentry tolerances, and keep you informed at every milestone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chennai Regional Context */}
      <section className="section bg-white section-border-top">
        <div className="container">
          <div className="split-intro">
            <div className="split-intro-image" style={{ aspectRatio: "4/3" }}>
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80"
                alt="Contemporary Chennai residential villa with open courtyards and climate-responsive architecture"
                loading="lazy"
              />
            </div>

            <div>
              <span className="eyebrow">Local Understanding</span>
              <h2 style={{ marginBottom: "1.25rem" }}>
                Designing for the Chennai Climate & Lifestyle
              </h2>
              <p style={{ marginBottom: "1.25rem" }}>
                Designing home interiors in Chennai requires deep regional awareness. Coastal humidity, monsoon dampness, and intense summer sunlight demand specific material choices:
              </p>

              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.85rem", marginBottom: "2rem" }}>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", fontSize: "0.95rem" }}>
                  <CheckCircle2 size={18} style={{ color: "var(--color-olive)", flexShrink: 0, marginTop: "3px" }} />
                  <span><strong>Moisture-Resistant Joinery:</strong> BWP Marine-grade plywood with sealed edges to prevent termite infestation and swelling.</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", fontSize: "0.95rem" }}>
                  <CheckCircle2 size={18} style={{ color: "var(--color-olive)", flexShrink: 0, marginTop: "3px" }} />
                  <span><strong>Breathable Natural Textures:</strong> Jute, linen, and handwoven cane louvers that encourage cross-ventilation.</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", fontSize: "0.95rem" }}>
                  <CheckCircle2 size={18} style={{ color: "var(--color-olive)", flexShrink: 0, marginTop: "3px" }} />
                  <span><strong>Pooja & Cultural Spaces:</strong> Seamlessly integrating sacred prayer niches with brass detailing into modern layouts.</span>
                </li>
              </ul>

              <Link to="/consultation" className="btn btn-primary">
                <span>Discuss Your Chennai Home</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section-sm bg-charcoal">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ color: "#FFFFFF", marginBottom: "1rem" }}>
            Ready to Begin Your Home Transformation?
          </h2>
          <p style={{ color: "rgba(247, 244, 238, 0.8)", marginBottom: "2rem", maxWidth: "600px", marginInline: "auto" }}>
            Let's discuss your floor plan, explore material options, and map out your project timeline with our interior architects.
          </p>
          <Link to="/consultation" className="btn btn-secondary">
            <span>Book an Initial Consultation</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
};
