import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, ArrowRight, ShieldCheck } from "lucide-react";
import { useSeo } from "../utils/seo";
import { businessConfig } from "../config/businessConfig";

export const ContactPage: React.FC = () => {
  useSeo({
    title: "Contact Our Chennai Studio",
    description: "Contact Structs N Spaces residential interior design studio in Chennai. Enquire about home interiors, site visits, and schedule a design consultation.",
    canonicalPath: "/contact",
  });

  return (
    <div className="contact-page">
      {/* Header Banner */}
      <section className="section-sm bg-ivory-light section-border-bottom">
        <div className="container">
          <span className="eyebrow">Direct Studio Connect</span>
          <h1 style={{ marginTop: "0.5rem", marginBottom: "1rem" }}>
            Let's Discuss Your Home
          </h1>
          <p style={{ maxWidth: "720px", fontSize: "1.15rem" }}>
            Whether you are receiving possession of a new apartment, planning a villa interior, or exploring custom modular woodwork in Chennai, our design team is here to assist.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="section bg-white">
        <div className="container">
          <div className="split-intro" style={{ alignItems: "flex-start" }}>
            {/* Left: Contact Details & Service Areas */}
            <div>
              <span className="eyebrow">Studio Information</span>
              <h2 style={{ marginBottom: "1.5rem" }}>
                Structs N Spaces Studio
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "2.5rem" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                  <div style={{ width: "40px", height: "40px", background: "var(--color-ivory)", border: "1px solid var(--color-border)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-olive)", flexShrink: 0 }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: "1rem", marginBottom: "2px" }}>Location</h4>
                    <p style={{ fontSize: "0.95rem", color: "var(--color-charcoal-muted)" }}>
                      {businessConfig.location.displayAddress}
                    </p>
                    <span style={{ fontSize: "0.785rem", color: "var(--color-charcoal-subtle)", display: "block", marginTop: "3px" }}>
                      * Studio meetings & site walkthroughs are scheduled upon confirmed consultation booking.
                    </span>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                  <div style={{ width: "40px", height: "40px", background: "var(--color-ivory)", border: "1px solid var(--color-border)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-olive)", flexShrink: 0 }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: "1rem", marginBottom: "2px" }}>Telephone</h4>
                    <p style={{ fontSize: "0.95rem", color: "var(--color-charcoal-muted)" }}>
                      {businessConfig.contact.isPhoneConfigured ? (
                        <a href={`tel:${businessConfig.contact.phone}`}>{businessConfig.contact.phone}</a>
                      ) : (
                        <span>{businessConfig.contact.phoneDisplay}</span>
                      )}
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                  <div style={{ width: "40px", height: "40px", background: "var(--color-ivory)", border: "1px solid var(--color-border)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-olive)", flexShrink: 0 }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: "1rem", marginBottom: "2px" }}>Email Enquiries</h4>
                    <p style={{ fontSize: "0.95rem", color: "var(--color-charcoal-muted)" }}>
                      {businessConfig.contact.isEmailConfigured ? (
                        <a href={`mailto:${businessConfig.contact.email}`}>{businessConfig.contact.email}</a>
                      ) : (
                        <span>{businessConfig.contact.emailDisplay}</span>
                      )}
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                  <div style={{ width: "40px", height: "40px", background: "var(--color-ivory)", border: "1px solid var(--color-border)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-olive)", flexShrink: 0 }}>
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: "1rem", marginBottom: "2px" }}>Working Hours</h4>
                    <p style={{ fontSize: "0.9rem", color: "var(--color-charcoal-muted)" }}>
                      {businessConfig.hours.weekdays}
                      <br />
                      {businessConfig.hours.saturday}
                      <br />
                      <span style={{ fontSize: "0.8rem", color: "var(--color-charcoal-subtle)" }}>
                        {businessConfig.hours.sunday}
                      </span>
                    </p>
                  </div>
                </div>

                {/* Direct WhatsApp & Instagram Action Bar */}
                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "0.5rem" }}>
                  <a
                    href={`https://wa.me/${businessConfig.contact.whatsappNumber}?text=${encodeURIComponent(businessConfig.contact.whatsappDefaultMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                    style={{ backgroundColor: "#25D366", color: "#FFFFFF", borderColor: "#25D366", fontSize: "0.8rem", padding: "0.6rem 1.25rem" }}
                  >
                    <span>Chat on WhatsApp</span>
                  </a>
                  <a
                    href={businessConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                    style={{ fontSize: "0.8rem", padding: "0.6rem 1.25rem" }}
                  >
                    <span>Follow @structsnspaces_interior</span>
                  </a>
                </div>
              </div>

              {/* Service Corridors in Chennai */}
              <div style={{ background: "var(--color-ivory-light)", border: "1px solid var(--color-border)", padding: "1.5rem" }}>
                <h4 style={{ fontSize: "0.95rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--color-olive)", marginBottom: "0.75rem" }}>
                  Key Service Areas in Chennai
                </h4>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {businessConfig.location.serviceAreas.map((area, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: "0.8rem",
                        padding: "0.3rem 0.65rem",
                        background: "var(--color-white)",
                        border: "1px solid var(--color-border)",
                      }}
                    >
                      {area}
                    </span>
                  ))}
                </div>
                <p style={{ fontSize: "0.785rem", color: "var(--color-charcoal-subtle)", marginTop: "0.85rem", margin: 0 }}>
                  {businessConfig.location.serviceCoverageNote}
                </p>
              </div>
            </div>

            {/* Right: Consultation Action Card */}
            <div className="editorial-card" style={{ padding: "2.5rem" }}>
              <span className="eyebrow">Recommended Next Step</span>
              <h3 style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>
                Book an Initial Design Consultation
              </h3>
              <p style={{ fontSize: "0.95rem", color: "var(--color-charcoal-muted)", lineHeight: 1.7, marginBottom: "1.75rem" }}>
                For property evaluations, floor plan reviews, and indicative budget discussions, we recommend using our detailed consultation request form. It captures your property type, layout size, and room priorities so our team can prepare before speaking with you.
              </p>

              <div style={{ background: "var(--color-ivory)", border: "1px solid var(--color-border)", padding: "1.25rem", marginBottom: "2rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--color-olive)", marginBottom: "0.5rem" }}>
                  <ShieldCheck size={18} />
                  <strong style={{ fontSize: "0.85rem" }}>What to Expect:</strong>
                </div>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.4rem", fontSize: "0.85rem", color: "var(--color-charcoal)" }}>
                  <li>• Floor plan feasibility review</li>
                  <li>• Indicative budget & finish recommendations</li>
                  <li>• Estimated execution timeline overview</li>
                  <li>• Zero sales pressure</li>
                </ul>
              </div>

              <Link to="/consultation" className="btn btn-primary" style={{ width: "100%" }}>
                <span>Proceed to Consultation Form</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
