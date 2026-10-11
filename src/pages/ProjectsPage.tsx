import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Maximize, Info } from "lucide-react";
import { useSeo } from "../utils/seo";
import { projectsData } from "../data/projectsData";
import type { ProjectCategory } from "../types";
import { SectionHeading } from "../components/ui/SectionHeading";

const categories: ProjectCategory[] = [
  "All Projects",
  "Apartments",
  "Kitchens",
  "Bedrooms",
  "Living Spaces",
  "Independent Homes",
];

export const ProjectsPage: React.FC = () => {
  useSeo({
    title: "Our Projects & Portfolio",
    description: "Explore Structs N Spaces residential interior portfolio in Chennai — contemporary 2BHK and 3BHK apartments, luxury master suites, modular kitchens, and independent villas.",
    canonicalPath: "/projects",
  });

  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All Projects");

  const filteredProjects = activeCategory === "All Projects"
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <div className="projects-page">
      {/* Page Banner */}
      <section className="section-sm bg-ivory-light section-border-bottom">
        <div className="container">
          <span className="eyebrow">Architectural Portfolio</span>
          <h1 style={{ marginTop: "0.5rem", marginBottom: "1rem" }}>
            Spaces We've Brought to Life
          </h1>
          <p style={{ maxWidth: "720px", fontSize: "1.15rem" }}>
            A curated collection of residential interior designs across Chennai. Each project represents our dedication to space optimization, durable natural finishes, and personalized spatial calm.
          </p>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              background: "var(--color-ivory)",
              padding: "0.5rem 0.85rem",
              border: "1px solid var(--color-border)",
              marginTop: "1.5rem",
              fontSize: "0.785rem",
              color: "var(--color-charcoal-subtle)",
            }}
          >
            <Info size={15} style={{ color: "var(--color-olive)" }} />
            <span>Illustrative Sample Portfolio: Demonstrating architectural layouts and finish specifications.</span>
          </div>
        </div>
      </section>

      {/* Filterable Portfolio */}
      <section className="section bg-white">
        <div className="container">
          {/* Category Tabs */}
          <div className="portfolio-filters" role="tablist">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${activeCategory === category ? "active" : ""}`}
                onClick={() => setActiveCategory(category)}
                role="tab"
                aria-selected={activeCategory === category}
                type="button"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="portfolio-grid">
            {filteredProjects.map((project) => (
              <article key={project.id} className="project-card">
                <Link to={`/projects/${project.id}`} className="project-card-media" aria-label={`View ${project.title}`}>
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    loading="lazy"
                  />
                  <span className="project-badge-tag">
                    {project.propertyType}
                  </span>
                </Link>

                <div className="project-card-content">
                  <div className="project-meta-line">
                    <span>{project.style}</span>
                    <span style={{ margin: "0 6px" }}>•</span>
                    <span>{project.location}</span>
                  </div>

                  <h2 className="project-card-title" style={{ fontSize: "1.45rem" }}>
                    <Link to={`/projects/${project.id}`}>
                      {project.title}
                    </Link>
                  </h2>

                  <p className="project-card-focus">{project.focus}</p>

                  <div className="project-card-footer">
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <Maximize size={14} style={{ color: "var(--color-taupe)" }} />
                      <span>{project.areaSqFt}</span>
                    </div>

                    <Link
                      to={`/projects/${project.id}`}
                      className="btn-text"
                      style={{ fontSize: "0.75rem" }}
                    >
                      <span>Explore Project</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Consultation CTA */}
      <section className="section-sm bg-ivory section-border-top">
        <div className="container" style={{ textAlign: "center" }}>
          <SectionHeading
            eyebrow="Have a Similar Space?"
            title="Let's Design Your Chennai Home"
            subtitle="Whether you have an upcoming handover in an apartment complex or are renovating a family residence, our team is ready to assist."
            centered
          />
          <Link to="/consultation" className="btn btn-primary">
            <span>Schedule a Consultation</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
};
