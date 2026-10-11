import React from "react";
import { Quote } from "lucide-react";
import { testimonialsData } from "../../data/testimonialsData";
import { SectionHeading } from "../ui/SectionHeading";

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="section bg-ivory section-border-top" aria-labelledby="testimonials-heading">
      <div className="container">
        <SectionHeading
          eyebrow="Homeowner Experiences"
          title="What Our Clients Value Most"
          subtitle="Reflecting our commitment to precision joinery, functional layout design, and transparent site communication across Chennai."
          centered
        />

        <div className="testimonials-grid">
          {testimonialsData.map((item) => (
            <article key={item.id} className="testimonial-card">
              <div>
                <Quote size={32} style={{ color: "var(--color-taupe)", opacity: 0.8, marginBottom: "1rem" }} />
                <p className="testimonial-text">
                  "{item.quote}"
                </p>
              </div>

              <div className="testimonial-author-meta">
                <div style={{ fontWeight: 600, color: "var(--color-charcoal)", fontSize: "0.9rem" }}>
                  {item.keyHighlight}
                </div>
                <div className="testimonial-prop-loc">
                  {item.propertyType} • {item.location}
                </div>
                {item.isSampleFeedback && (
                  <span className="sample-badge">
                    Sample Feedback
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "2.5rem", fontSize: "0.8rem", color: "var(--color-charcoal-subtle)" }}>
          Notice: Quotes shown above are editorial placeholders showcasing formatting and layout. Replace with verified client reviews before public launch.
        </div>
      </div>
    </section>
  );
};
