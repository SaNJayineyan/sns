import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { servicesData } from "../../data/servicesData";
import { SectionHeading } from "../ui/SectionHeading";

export const ServicesGrid: React.FC = () => {
  return (
    <section className="section bg-ivory-light section-border-top" aria-labelledby="services-heading">
      <div className="container">
        <SectionHeading
          eyebrow="Our Expertise"
          title="Curated Interior Solutions"
          subtitle="From single-room carpentry and modular kitchens to comprehensive turnkey residence execution across Chennai."
          centered
        />

        <div className="services-grid">
          {servicesData.map((service) => (
            <article key={service.id} className="service-card">
              <div className="service-card-media">
                <img
                  src={service.heroImage}
                  alt={service.title}
                  loading="lazy"
                />
              </div>

              <div className="service-card-content">
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.shortDescription}</p>

                <Link
                  to={`/services#${service.slug}`}
                  className="btn-text"
                  aria-label={`Explore ${service.title} service details`}
                >
                  <span>Explore Service</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "3.5rem" }}>
          <Link to="/services" className="btn btn-outline">
            <span>View All Interior Services</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};
