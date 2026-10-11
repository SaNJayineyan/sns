import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2, ZoomIn } from "lucide-react";
import { useSeo } from "../utils/seo";
import { projectsData } from "../data/projectsData";
import { Lightbox } from "../components/ui/Lightbox";
import { SectionHeading } from "../components/ui/SectionHeading";

export const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Find project by id or slug
  const project = projectsData.find((p) => p.id === id || p.slug === id);

  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useSeo({
    title: project ? `${project.title} — ${project.propertyType}` : "Project Details",
    description: project ? project.overview : "Residential interior project details by Structs N Spaces Chennai.",
    canonicalPath: `/projects/${id}`,
  });

  if (!project) {
    return (
      <div className="container" style={{ padding: "6rem 1.5rem", textAlign: "center" }}>
        <h2>Project Not Found</h2>
        <p style={{ marginTop: "1rem", marginBottom: "2rem" }}>
          The project you are looking for does not exist or may have been updated.
        </p>
        <Link to="/projects" className="btn btn-primary">
          <ArrowLeft size={16} />
          <span>Return to All Projects</span>
        </Link>
      </div>
    );
  }

  // Related projects (excluding current project)
  const relatedProjects = projectsData
    .filter((p) => p.id !== project.id)
    .slice(0, 3);

  const openLightboxAt = (index: number) => {
    setActiveImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <article className="project-detail-page">
      {/* Top Back Navigation Bar */}
      <div className="section-border-bottom" style={{ background: "var(--color-ivory-light)", padding: "1rem 0" }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link to="/projects" className="btn-text" style={{ fontSize: "0.8rem" }}>
            <ArrowLeft size={14} />
            <span>Back to All Projects</span>
          </Link>
          <span style={{ fontSize: "0.75rem", color: "var(--color-charcoal-subtle)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            Portfolio Feature
          </span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="section-sm bg-ivory">
        <div className="container">
          <div style={{ maxWidth: "860px" }}>
            <span className="eyebrow">{project.style} • {project.location}</span>
            <h1 style={{ marginTop: "0.5rem", marginBottom: "1rem" }}>
              {project.title}
            </h1>
            <p style={{ fontSize: "1.2rem", color: "var(--color-charcoal)", lineHeight: 1.6, marginBottom: "2rem" }}>
              {project.tagline}
            </p>

            {/* Key Project Metrics Strip */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                gap: "1.25rem",
                background: "var(--color-white)",
                border: "1px solid var(--color-border)",
                padding: "1.25rem 1.75rem",
              }}
            >
              <div>
                <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--color-charcoal-subtle)", display: "block" }}>
                  Property Type
                </span>
                <strong style={{ fontSize: "0.95rem", color: "var(--color-charcoal)" }}>
                  {project.propertyType}
                </strong>
              </div>

              <div>
                <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--color-charcoal-subtle)", display: "block" }}>
                  Location
                </span>
                <strong style={{ fontSize: "0.95rem", color: "var(--color-charcoal)" }}>
                  {project.location}
                </strong>
              </div>

              <div>
                <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--color-charcoal-subtle)", display: "block" }}>
                  Floor Area
                </span>
                <strong style={{ fontSize: "0.95rem", color: "var(--color-charcoal)" }}>
                  {project.areaSqFt}
                </strong>
              </div>

              <div>
                <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--color-charcoal-subtle)", display: "block" }}>
                  Timeline
                </span>
                <strong style={{ fontSize: "0.95rem", color: "var(--color-charcoal)" }}>
                  {project.timeline}
                </strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Hero Photograph with Click to Enlarge */}
      <section style={{ backgroundColor: "#242522" }}>
        <div className="container" style={{ padding: "0" }}>
          <div
            style={{
              position: "relative",
              aspectRatio: "21/9",
              minHeight: "360px",
              cursor: "pointer",
              overflow: "hidden",
            }}
            onClick={() => openLightboxAt(0)}
            role="button"
            tabIndex={0}
            aria-label="Click to enlarge primary project photograph in lightbox"
            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") openLightboxAt(0); }}
          >
            <img
              src={project.heroImage}
              alt={project.title}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "1.5rem",
                right: "1.5rem",
                background: "rgba(36, 37, 34, 0.85)",
                color: "#FFFFFF",
                fontSize: "0.8rem",
                padding: "0.5rem 1rem",
                backdropFilter: "blur(6px)",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                borderRadius: "2px",
              }}
            >
              <ZoomIn size={16} />
              <span>Enlarge Photo Gallery</span>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Content Breakdown */}
      <section className="section bg-white">
        <div className="container">
          <div className="split-intro" style={{ alignItems: "flex-start" }}>
            {/* Overview & Design Approach */}
            <div>
              <span className="eyebrow">Project Overview</span>
              <h2 style={{ marginBottom: "1.25rem", fontSize: "2rem" }}>
                The Spatial Concept
              </h2>
              <p style={{ fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                {project.overview}
              </p>

              <h3 style={{ fontSize: "1.4rem", marginBottom: "1rem" }}>
                Our Design Approach
              </h3>
              <p style={{ fontSize: "1rem", lineHeight: 1.75, marginBottom: "2rem" }}>
                {project.designApproach}
              </p>

              <h3 style={{ fontSize: "1.4rem", marginBottom: "1rem" }}>
                Key Design Objectives
              </h3>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2rem" }}>
                {project.designObjectives.map((obj, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", fontSize: "0.95rem" }}>
                    <CheckCircle2 size={18} style={{ color: "var(--color-olive)", flexShrink: 0, marginTop: "3px" }} />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Material & Finish Palette Sidebar */}
            <div
              style={{
                background: "var(--color-ivory-light)",
                border: "1px solid var(--color-border)",
                padding: "2rem",
                position: "sticky",
                top: "100px",
              }}
            >
              <span className="eyebrow">Tactile Direction</span>
              <h3 style={{ fontSize: "1.35rem", marginBottom: "1.5rem" }}>
                Material & Finish Palette
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2rem" }}>
                {project.materialsAndFinishes.map((mat, i) => (
                  <div key={i} style={{ borderBottom: "1px solid var(--color-border)", paddingBottom: "1rem" }}>
                    <div style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--color-olive)", fontWeight: 600 }}>
                      {mat.name}
                    </div>
                    <div style={{ fontSize: "1rem", fontWeight: 600, color: "var(--color-charcoal)", margin: "2px 0" }}>
                      {mat.finish}
                    </div>
                    <div style={{ fontSize: "0.825rem", color: "var(--color-charcoal-muted)" }}>
                      {mat.notes}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ background: "var(--color-white)", padding: "1.25rem", border: "1px solid var(--color-border)", textAlign: "center" }}>
                <p style={{ fontSize: "0.85rem", marginBottom: "1rem", color: "var(--color-charcoal)" }}>
                  Inspired by this design style for your home?
                </p>
                <Link to="/consultation" className="btn btn-primary" style={{ width: "100%", fontSize: "0.8rem" }}>
                  <span>Request Similar Concept</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section bg-ivory section-border-top">
        <div className="container">
          <SectionHeading
            eyebrow="Visual Details"
            title="Project Gallery"
            subtitle="Click on any photograph to view high-resolution details in fullscreen view."
            centered
          />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {project.galleryImages.map((img, index) => (
              <div
                key={index}
                className="editorial-card"
                style={{ cursor: "pointer" }}
                onClick={() => openLightboxAt(index)}
                role="button"
                tabIndex={0}
                aria-label={`View photo ${index + 1}: ${img.caption}`}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") openLightboxAt(index); }}
              >
                <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden" }}>
                  <img
                    src={img.url}
                    alt={img.alt}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    loading="lazy"
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "0.75rem",
                      right: "0.75rem",
                      background: "rgba(36, 37, 34, 0.75)",
                      color: "#FFFFFF",
                      padding: "0.35rem 0.6rem",
                      fontSize: "0.75rem",
                      borderRadius: "2px",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.3rem",
                    }}
                  >
                    <ZoomIn size={13} />
                    <span>Enlarge</span>
                  </div>
                </div>
                <div style={{ padding: "1.25rem" }}>
                  <p style={{ fontSize: "0.88rem", color: "var(--color-charcoal)", fontStyle: "italic" }}>
                    {img.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "2rem", fontSize: "0.8rem", color: "var(--color-charcoal-subtle)" }}>
            * Demonstrative project photography reflecting design intentions and material finish coordination.
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="section bg-white section-border-top">
        <div className="container">
          <SectionHeading
            eyebrow="Explore More"
            title="Related Residential Projects"
            subtitle="Discover other thoughtfully planned residences across Chennai."
            centered
          />

          <div className="portfolio-grid">
            {relatedProjects.map((rel) => (
              <article key={rel.id} className="project-card">
                <Link to={`/projects/${rel.id}`} className="project-card-media">
                  <img src={rel.heroImage} alt={rel.title} loading="lazy" />
                  <span className="project-badge-tag">{rel.propertyType}</span>
                </Link>
                <div className="project-card-content">
                  <div className="project-meta-line">
                    <span>{rel.style}</span> • <span>{rel.location}</span>
                  </div>
                  <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1.35rem", marginBottom: "0.5rem" }}>
                    <Link to={`/projects/${rel.id}`}>{rel.title}</Link>
                  </h4>
                  <p style={{ fontSize: "0.85rem", color: "var(--color-charcoal-muted)", flexGrow: 1, marginBottom: "1rem" }}>
                    {rel.focus}
                  </p>
                  <Link to={`/projects/${rel.id}`} className="btn-text" style={{ fontSize: "0.75rem" }}>
                    <span>View Project</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Lightbox
        images={project.galleryImages}
        currentIndex={activeImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : project.galleryImages.length - 1))}
        onNext={() => setActiveImageIndex((prev) => (prev < project.galleryImages.length - 1 ? prev + 1 : 0))}
      />
    </article>
  );
};
