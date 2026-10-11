import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { businessConfig } from "../../config/businessConfig";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-top-grid">
          {/* Column 1: Brand & Tagline */}
          <div className="footer-brand">
            <div style={{ display: "flex", alignItems: "center", gap: "0.85rem", marginBottom: "0.85rem" }}>
              <img
                src="/logo.png"
                alt="Structs N Spaces Brand Logo"
                style={{ height: "48px", width: "auto", objectFit: "contain", borderRadius: "4px", background: "#FFFFFF", padding: "2px" }}
              />
              <h3>{businessConfig.name}</h3>
            </div>
            <p className="footer-tagline">"{businessConfig.tagline}"</p>
            <p>
              A design-led residential interior studio crafting homes that balance
              architectural restraint, tailored functionality, and timeless material beauty across Chennai.
            </p>

            <div className="footer-social-row">
              {/* Instagram SVG */}
              <a
                href={businessConfig.social.instagram}
                className="footer-social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram @structsnspaces_interior"
                title="Follow @structsnspaces_interior"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              {/* Facebook SVG */}
              <a
                href={businessConfig.social.facebook}
                className="footer-social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              {/* LinkedIn SVG */}
              <a
                href={businessConfig.social.linkedin}
                className="footer-social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-nav-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Studio</Link></li>
              <li><Link to="/services">Interior Services</Link></li>
              <li><Link to="/projects">Completed Projects</Link></li>
              <li><Link to="/process">Design Process</Link></li>
              <li><Link to="/consultation">Book a Consultation</Link></li>
              <li><Link to="/contact">Contact Studio</Link></li>
            </ul>
          </div>

          {/* Column 3: Core Offerings */}
          <div>
            <h4 className="footer-col-title">Expertise</h4>
            <ul className="footer-nav-list">
              <li><Link to="/services">Complete Home Interiors</Link></li>
              <li><Link to="/services">Modular Kitchens</Link></li>
              <li><Link to="/services">Living Room Design</Link></li>
              <li><Link to="/services">Custom Wardrobes</Link></li>
              <li><Link to="/services">False Ceilings & Lighting</Link></li>
              <li><Link to="/services">Bespoke Furniture</Link></li>
              <li><Link to="/services">Space Planning</Link></li>
            </ul>
          </div>

          {/* Column 4: Location & Verified Contact Information */}
          <div>
            <h4 className="footer-col-title">Velachery Studio</h4>
            <div className="footer-contact-item">
              <MapPin size={18} />
              <span style={{ fontSize: "0.85rem", lineHeight: 1.5 }}>
                {businessConfig.location.displayAddress}
              </span>
            </div>

            <div className="footer-contact-item">
              <Phone size={18} />
              <a href={`tel:${businessConfig.contact.phone}`} style={{ color: "var(--color-ivory)" }}>
                {businessConfig.contact.phone}
              </a>
            </div>

            <div className="footer-contact-item">
              <Mail size={18} />
              <span>
                {businessConfig.contact.isEmailConfigured
                  ? businessConfig.contact.email
                  : `${businessConfig.contact.emailDisplay}`}
              </span>
            </div>

            <div style={{ marginTop: "1.5rem" }}>
              <Link
                to="/consultation"
                className="btn btn-outline-light"
                style={{ padding: "0.6rem 1.25rem", fontSize: "0.785rem" }}
              >
                <span>Request Site Visit</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom Strip */}
        <div className="footer-bottom">
          <div>
            © {currentYear} {businessConfig.name}. All rights reserved.
          </div>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <Link to="/privacy">Privacy Policy</Link>
            <span style={{ color: "rgba(247, 244, 238, 0.3)" }}>|</span>
            <span style={{ color: "rgba(247, 244, 238, 0.5)" }}>
              {businessConfig.experienceYears} Experience • {businessConfig.completedProjectsCount} Projects
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
