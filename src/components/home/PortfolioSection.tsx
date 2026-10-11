import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Maximize } from "lucide-react";
import { projectsData } from "../../data/projectsData";
import type { ProjectCategory } from "../../types";
import { SectionHeading } from "../ui/SectionHeading";

const categories: ProjectCategory[] = [
  "All Projects",
  "Apartments",
  "Kitchens",
  "Bedrooms",
  "Living Spaces",
  "Independent Homes",
];

export const PortfolioSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All Projects");

  const filteredProjects = activeCategory === "All Projects"
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section className="section bg-white section-border-top" aria-labelledby="portfolio-heading">
      <div className="container">
        <SectionHeading
          eyebrow="Curated Portfolio"
          title="Spaces We've Brought to Life"
          subtitle="Explore our recent residential interior executions across Chennai. Every home represents a bespoke response to space, light, and lifestyle."
          centered
        />

        {/* Category Filters */}
        <div className="portfolio-filters" role="tablist" aria-label="Filter projects by category">
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

        {/* Portfolio Grid */}
        <div className="portfolio-grid">
          {filteredProjects.map((project) => (
            <article key={project.id} className="project-card">
              <Link to={`/projects/${project.id}`} className="project-card-media" aria-label={`View ${project.title} details`}>
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

                <h3 className="project-card-title">
                  <Link to={`/projects/${project.id}`}>
                    {project.title}
                  </Link>
                </h3>

                <p className="project-card-focus">{project.focus}</p>

                <div className="project-card-footer">
                  <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                    <Maximize size={14} style={{ color: "var(--color-taupe)" }} />
                    <span>{project.areaSqFt}</span>
                  </div>

                  <Link
                    to={`/projects/${project.id}`}
                    className="btn-text"
                    style={{ fontSize: "0.75rem" }}
                  >
                    <span>View Project</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "3.5rem" }}>
          <Link to="/projects" className="btn btn-primary">
            <span>Explore All Projects</span>
            <ArrowRight size={16} />
          </Link>
          <div style={{ marginTop: "1rem", fontSize: "0.8rem", color: "var(--color-charcoal-subtle)" }}>
            * Projects shown represent illustrative architectural concepts and sample residential configurations.
          </div>
        </div>
      </div>
    </section>
  );
};
