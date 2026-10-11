import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { businessConfig } from "../../config/businessConfig";

export const Header: React.FC = () => {
  const [isAnnouncementVisible, setIsAnnouncementVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Trap body scroll when mobile drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Announcement Bar */}
      {isAnnouncementVisible && (
        <div className="announcement-bar" role="region" aria-label="Announcement">
          <p>
            Thoughtfully designed interiors. Beautifully executed spaces.
          </p>
          <button
            className="announcement-close"
            onClick={() => setIsAnnouncementVisible(false)}
            aria-label="Dismiss announcement bar"
          >
            <X size={16} />
          </button>
        </div>
      )}

      {/* Main Header */}
      <header className={`site-header ${isScrolled ? "scrolled" : ""}`}>
        <div className="container">
          <div className="header-inner">
            {/* Brand Logo & Wordmark */}
            <Link to="/" className="brand-mark" aria-label="Structs N Spaces Home">
              <img
                src="/logo.png"
                alt="Structs N Spaces Official Brand Logo"
                style={{ height: "46px", width: "auto", objectFit: "contain", borderRadius: "4px" }}
              />
              <div>
                <span className="brand-name">{businessConfig.name}</span>
                <span className="brand-tagline-sub">{businessConfig.tagline}</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="desktop-nav" aria-label="Main Navigation">
              <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
                Home
              </NavLink>
              <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
                About Us
              </NavLink>
              <NavLink to="/services" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
                Our Services
              </NavLink>
              <NavLink to="/projects" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
                Our Projects
              </NavLink>
              <NavLink to="/process" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
                Design Process
              </NavLink>
              <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
                Contact
              </NavLink>
            </nav>

            {/* Actions & Consultation CTA */}
            <div className="header-actions">
              <Link to="/consultation" className="btn btn-primary" style={{ padding: "0.7rem 1.4rem" }}>
                <span>Book a Consultation</span>
                <ArrowRight size={15} />
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="mobile-menu-btn"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={isMobileMenuOpen}
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`mobile-drawer-overlay ${isMobileMenuOpen ? "open" : ""}`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Slide-in Drawer */}
      <aside
        className={`mobile-drawer ${isMobileMenuOpen ? "open" : ""}`}
        aria-label="Mobile Navigation"
        aria-hidden={!isMobileMenuOpen}
      >
        <div>
          <div className="mobile-drawer-header">
            <Link to="/" className="brand-mark" onClick={() => setIsMobileMenuOpen(false)}>
              <img
                src="/logo.png"
                alt="Structs N Spaces Official Brand Logo"
                style={{ height: "42px", width: "auto", objectFit: "contain", borderRadius: "4px" }}
              />
              <div>
                <span className="brand-name">{businessConfig.name}</span>
                <span className="brand-tagline-sub">{businessConfig.tagline}</span>
              </div>
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ background: "none", border: "none", cursor: "pointer", color: "var(--color-charcoal)" }}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="mobile-drawer-nav">
            <NavLink to="/" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              Home <ArrowRight size={16} />
            </NavLink>
            <NavLink to="/about" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              About Us <ArrowRight size={16} />
            </NavLink>
            <NavLink to="/services" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              Our Services <ArrowRight size={16} />
            </NavLink>
            <NavLink to="/projects" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              Our Projects <ArrowRight size={16} />
            </NavLink>
            <NavLink to="/process" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              Design Process <ArrowRight size={16} />
            </NavLink>
            <NavLink to="/contact" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              Contact Us <ArrowRight size={16} />
            </NavLink>
          </nav>
        </div>

        <div className="mobile-drawer-footer">
          <Link
            to="/consultation"
            className="btn btn-primary"
            style={{ width: "100%" }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span>Book a Consultation</span>
            <ArrowRight size={16} />
          </Link>
          <p style={{ fontSize: "0.75rem", color: "var(--color-charcoal-subtle)", textAlign: "center" }}>
            {businessConfig.location.city}, {businessConfig.location.state}
          </p>
        </div>
      </aside>
    </>
  );
};
