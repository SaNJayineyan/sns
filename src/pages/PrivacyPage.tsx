import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useSeo } from "../utils/seo";
import { businessConfig } from "../config/businessConfig";

export const PrivacyPage: React.FC = () => {
  useSeo({
    title: "Privacy Policy",
    description: "Privacy policy for Structs N Spaces. Learn how we handle your personal information, consultation enquiries, and site visit details.",
    canonicalPath: "/privacy",
  });

  return (
    <div className="privacy-page">
      <section className="section-sm bg-ivory-light section-border-bottom">
        <div className="container">
          <Link to="/" className="btn-text" style={{ fontSize: "0.8rem", marginBottom: "1rem" }}>
            <ArrowLeft size={14} />
            <span>Return to Home</span>
          </Link>
          <span className="eyebrow">Legal & Compliance</span>
          <h1 style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
            Privacy Policy
          </h1>
          <p style={{ color: "var(--color-charcoal-subtle)", fontSize: "0.9rem" }}>
            Last Updated: October 2026 • {businessConfig.name}
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container container-narrow">
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem", lineHeight: 1.8 }}>
            <div>
              <h2 style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>1. Introduction</h2>
              <p>
                At <strong>{businessConfig.name}</strong> ("we," "our," or "us"), we are committed to safeguarding the privacy and confidentiality of homeowners, prospective clients, and visitors to our website. This Privacy Policy details our practices concerning the collection, use, and disclosure of personal information gathered through our online consultation forms and direct communications.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>2. Information We Collect</h2>
              <p style={{ marginBottom: "0.75rem" }}>
                When you submit an enquiry or request a design consultation through our website, we may collect the following details:
              </p>
              <ul style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <li>Your full name and contact information (phone number, email address).</li>
                <li>Project location and locality within Chennai.</li>
                <li>Property characteristics (type, approximate square footage, handover stage).</li>
                <li>Preferred interior scope, budget parameters, and design notes.</li>
              </ul>
            </div>

            <div>
              <h2 style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>3. How We Use Your Information</h2>
              <p style={{ marginBottom: "0.75rem" }}>
                The details you provide are utilized strictly to:
              </p>
              <ul style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <li>Evaluate your residential requirements and coordinate your initial consultation.</li>
                <li>Schedule on-site property walkthroughs and studio meetings.</li>
                <li>Prepare preliminary design concepts, scope estimates, and project timelines.</li>
                <li>Communicate important updates regarding your active interior project.</li>
              </ul>
              <p style={{ marginTop: "0.75rem" }}>
                We <strong>never sell, lease, or distribute</strong> your personal information or contact details to third-party marketing companies.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>4. Data Security</h2>
              <p>
                We implement reasonable administrative, technical, and physical safeguards designed to protect personal information against unauthorized access, destruction, loss, or alteration. All electronic consultation records are retained with restricted access limited solely to designated design and client coordination team members.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>5. Cookies and Analytics</h2>
              <p>
                Our website may utilize standard functional cookies and basic aggregate analytics to understand visitor navigation patterns, improve page load speeds, and optimize user experience across mobile and desktop devices.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>6. Contact Information</h2>
              <p>
                If you have questions regarding this Privacy Policy, or wish to review, update, or remove your enquiry details from our records, please contact us at:
              </p>
              <p style={{ marginTop: "0.75rem", fontStyle: "italic" }}>
                {businessConfig.name}
                <br />
                Location: {businessConfig.location.city}, {businessConfig.location.state}, India
                <br />
                Email: {businessConfig.contact.email}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
