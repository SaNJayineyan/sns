import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { businessConfig } from "../../config/businessConfig";

export const HeroSection: React.FC = () => {
  return (
    <section className="hero-section" aria-label="Welcome to Structs N Spaces">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Editorial Headline & Messaging */}
          <div className="hero-content animate-fade-in">
            <span className="eyebrow">
              Interior Design Studio • Chennai
            </span>

            <h1 className="hero-title">
              Spaces That Feel Like You. Homes That Feel Extraordinary.
            </h1>

            <p className="hero-subtitle">
              From thoughtful space planning to beautifully finished interiors, Structs N Spaces transforms houses into homes that reflect your lifestyle, personality, and aspirations.
            </p>

            <div className="hero-ctas">
              <Link to="/projects" className="btn btn-primary">
                <span>Explore Our Projects</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/consultation" className="btn btn-outline">
                <span>Book a Consultation</span>
              </Link>
            </div>

            {/* Restrained Trust Indicator */}
            <div className="hero-trust-indicator">
              <ShieldCheck size={18} style={{ color: "var(--color-olive)" }} />
              <span>
                {businessConfig.experienceYears} Years of Experience &nbsp;|&nbsp; {businessConfig.completedProjectsCount} Projects Completed
              </span>
            </div>
          </div>

          {/* Right Column: Architectural Hero Photograph */}
          <div className="hero-media-wrapper">
            <div className="hero-image-frame">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                alt="Contemporary Chennai apartment living space with natural warm wood and warm sunlight"
                fetchPriority="high"
              />
            </div>

            {/* Floating Architectural Badge */}
            <div className="hero-floating-badge">
              <span className="number">10+</span>
              <span className="text">
                Years of thoughtful residential execution across Chennai
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
