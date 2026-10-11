/**
 * STRUCTS N SPACES — TYPE DEFINITIONS
 */

export type ProjectCategory = 
  | "All Projects"
  | "Apartments"
  | "Kitchens"
  | "Bedrooms"
  | "Living Spaces"
  | "Independent Homes";

export interface MaterialDetail {
  name: string;
  finish: string;
  notes: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  propertyType: string;
  location: string;
  style: string;
  focus: string;
  areaSqFt: string;
  timeline: string;
  isSampleProject: boolean; // Flag to indicate illustrative sample project
  category: ProjectCategory;
  featured: boolean;
  heroImage: string;
  galleryImages: {
    url: string;
    caption: string;
    alt: string;
  }[];
  overview: string;
  designObjectives: string[];
  designApproach: string;
  materialsAndFinishes: MaterialDetail[];
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  heroImage: string;
  iconName: string;
  features: string[];
  scope: string[];
  deliverables: string[];
  idealFor: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  clientLabel: string;
  propertyType: string;
  location: string;
  keyHighlight: string;
  isSampleFeedback: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface ConsultationFormData {
  fullName: string;
  phone: string;
  email: string;
  projectLocation: string;
  propertyType: string;
  propertySize: string;
  servicesRequired: string[];
  budgetRange: string;
  consultationMethod: string;
  expectedStart: string;
  additionalNotes: string;
  consent: boolean;
}

export interface SubmissionResponse {
  success: boolean;
  enquiryId: string;
  submittedAt: string;
  data: ConsultationFormData;
  message: string;
}
