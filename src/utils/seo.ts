import { useEffect } from "react";
import { businessConfig } from "../config/businessConfig";

interface SeoProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
}

export function useSeo({ title, description, canonicalPath = "" }: SeoProps) {
  useEffect(() => {
    // 1. Title
    const formattedTitle = title 
      ? `${title} | ${businessConfig.name} — ${businessConfig.tagline}`
      : `${businessConfig.name} | ${businessConfig.tagline} | Interior Design Chennai`;
    document.title = formattedTitle;

    // 2. Meta description
    const metaDesc = description || 
      `${businessConfig.name} is a premier residential interior design studio in Chennai with ${businessConfig.experienceYears} of experience and ${businessConfig.completedProjectsCount} completed homes. Specializing in bespoke apartments, modular kitchens, and luxury villas.`;
    
    let descTag = document.querySelector('meta[name="description"]');
    if (!descTag) {
      descTag = document.createElement("meta");
      descTag.setAttribute("name", "description");
      document.head.appendChild(descTag);
    }
    descTag.setAttribute("content", metaDesc);

    // 3. Open Graph Title & Description
    let ogTitleTag = document.querySelector('meta[property="og:title"]');
    if (ogTitleTag) ogTitleTag.setAttribute("content", formattedTitle);

    let ogDescTag = document.querySelector('meta[property="og:description"]');
    if (ogDescTag) ogDescTag.setAttribute("content", metaDesc);

    // 4. Canonical
    const siteUrl = "https://structsnspaces.com";
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement("link");
      canonicalTag.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute("href", `${siteUrl}${canonicalPath}`);

    // 5. Scroll to top upon page navigation
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [title, description, canonicalPath]);
}

/**
 * Returns structured JSON-LD for local business and website schemas
 */
export function getStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": businessConfig.name,
    "legalName": businessConfig.legalName,
    "description": "Residential interior design and turnkey execution studio in Chennai.",
    "url": "https://structsnspaces.com",
    "telephone": businessConfig.contact.isPhoneConfigured ? businessConfig.contact.phone : undefined,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": businessConfig.location.city,
      "addressRegion": businessConfig.location.state,
      "addressCountry": businessConfig.location.country,
    },
    "areaServed": businessConfig.location.serviceAreas.map(area => ({
      "@type": "AdministrativeArea",
      "name": `${area}, Chennai`
    })),
    "priceRange": "₹₹ - ₹₹₹₹",
    "knowsAbout": [
      "Residential Interior Design",
      "Modular Kitchens",
      "Apartment Interiors",
      "Custom Wardrobes",
      "Living Room Design"
    ]
  };
}
