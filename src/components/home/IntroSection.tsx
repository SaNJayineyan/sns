import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const IntroSection: React.FC = () => {
  return (
    <section className="section bg-ivory" aria-labelledby="intro-heading">
      <div className="container">
        <div className="split-intro">
          {/* Left Text Block */}
          <div>
            <span className="eyebrow">Our Philosophy</span>
            <h2 id="intro-heading" style={{ marginBottom: "1.5rem" }}>
              Designing Spaces. Creating Everyday Experiences.
            </h2>
            <p style={{ marginBottom: "1.25rem", fontSize: "1.05rem" }}>
              At Structs N Spaces, we believe an exceptional home is never about superficial ornamentation. It begins with intelligent space planning—understanding how morning sunlight travels through your living room, where your family gathers for conversation, and how everyday storage keeps clutter effortlessly contained.
            </p>
            <p style={{ marginBottom: "2rem" }}>
              Based in Chennai, our studio blends architectural discipline with warm, timeless textures—teak joinery, handwoven cane, tailored fabrics, and soft ambient illumination. We manage every step from initial concept drawings to hands-on site execution, ensuring what is designed on paper is faithfully built into your living space.
            </p>

            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2.5rem" }}>
              <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.95rem", color: "var(--color-charcoal)" }}>
                <CheckCircle2 size={18} style={{ color: "var(--color-olive)", flexShrink: 0 }} />
                <span>Zero cookie-cutter templates—every layout is personalized to your routine</span>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.95rem", color: "var(--color-charcoal)" }}>
                <CheckCircle2 size={18} style={{ color: "var(--color-olive)", flexShrink: 0 }} />
                <span>End-to-end execution with high-grade marine ply, branded fittings, and supervised joinery</span>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.95rem", color: "var(--color-olive-dark)", fontWeight: 500 }}>
                <CheckCircle2 size={18} style={{ color: "var(--color-olive)", flexShrink: 0 }} />
                <span>Transparent milestone updates throughout the Chennai site execution phase</span>
              </li>
            </ul>

            <Link to="/process" className="btn btn-outline">
              <span>Discover Our Approach</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Right Photograph */}
          <div className="split-intro-image">
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
              alt="Editorial living and dining space with bespoke architectural woodwork and warm natural lighting"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
