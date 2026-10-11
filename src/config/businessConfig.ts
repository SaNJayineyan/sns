/**
 * STRUCTS N SPACES — CENTRAL BUSINESS CONFIGURATION
 * 
 * Configured with verified contact details, office address, 
 * Instagram channel, and Supabase backend endpoints.
 */

export interface BusinessConfig {
  name: string;
  legalName: string;
  tagline: string;
  category: string;
  experienceYears: string;
  completedProjectsCount: string;
  
  // Location & Service Area
  location: {
    city: string;
    state: string;
    country: string;
    displayAddress: string;
    hasVerifiedPhysicalAddress: boolean;
    serviceAreas: string[];
    serviceCoverageNote: string;
  };

  // Direct Communication
  contact: {
    phone: string;
    phoneDisplay: string;
    isPhoneConfigured: boolean;

    email: string;
    emailDisplay: string;
    isEmailConfigured: boolean;

    // WhatsApp configuration
    whatsappNumber: string; // e.g. "917200907677"
    whatsappDisplay: string;
    isWhatsAppConfigured: boolean;
    whatsappDefaultMessage: string;
  };

  // Social Channels
  social: {
    instagram: string;
    instagramHandle: string;
    facebook: string;
    pinterest: string;
    linkedin: string;
    youtube: string;
  };

  // Working Hours
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
    note: string;
  };

  // Consultation Settings
  consultation: {
    propertyTypes: string[];
    budgetRanges: string[];
    consultationMethods: string[];
    timelineOptions: string[];
  };

  // Backend Integration
  backend: {
    supabaseUrl: string;
    supabaseProjectId: string;
    isLiveBackend: boolean;
  };
}

export const businessConfig: BusinessConfig = {
  name: "Structs N Spaces",
  legalName: "Structs N Spaces Interior Studio",
  tagline: "We Make Your Home Exquisite",
  category: "Residential Interior Design & Execution",
  experienceYears: "10+",
  completedProjectsCount: "50+",

  location: {
    city: "Chennai",
    state: "Tamil Nadu",
    country: "India",
    displayAddress: "63 B, Janakpuri 1st St, TN Police Housing Colony, Velachery, Chennai, Tamil Nadu 600042",
    hasVerifiedPhysicalAddress: true,
    serviceAreas: [
      "Velachery & Madipakkam",
      "Adyar & Besant Nagar",
      "OMR (Old Mahabalipuram Road)",
      "ECR (East Coast Road)",
      "Anna Nagar & Kilpauk",
      "T. Nagar & Nungambakkam",
      "Perungudi & Thoraipakkam",
      "Sholinganallur & Navalur",
      "Porur & Alapakkam",
      "Guindy & Saidapet",
    ],
    serviceCoverageNote: "Headquartered in Velachery, Chennai. We undertake residential projects across greater Chennai.",
  },

  contact: {
    phone: "+91 7200907677",
    phoneDisplay: "+91 7200907677",
    isPhoneConfigured: true,

    email: "enquiry@structsnspaces.com",
    emailDisplay: "enquiry@structsnspaces.com",
    isEmailConfigured: true,

    // WhatsApp number for form & direct chat: +91 7200907677
    whatsappNumber: "917200907677",
    whatsappDisplay: "+91 7200907677",
    isWhatsAppConfigured: true,
    whatsappDefaultMessage: "Hello Structs N Spaces, I would like to discuss my home interior requirements. Please help me schedule a consultation.",
  },

  social: {
    instagram: "https://www.instagram.com/structsnspaces_interior/",
    instagramHandle: "@structsnspaces_interior",
    facebook: "https://facebook.com/structsnspaces",
    pinterest: "https://pinterest.com/structsnspaces",
    linkedin: "https://linkedin.com/company/structsnspaces",
    youtube: "https://youtube.com/@structsnspaces",
  },

  hours: {
    weekdays: "Monday – Friday: 10:00 AM – 7:00 PM IST",
    saturday: "Saturday: 10:00 AM – 6:00 PM IST",
    sunday: "Sunday: Closed (Consultations by Prior Appointment)",
    note: "Studio visits and site evaluations are scheduled upon prior appointment.",
  },

  consultation: {
    propertyTypes: [
      "1BHK Apartment",
      "2BHK Apartment",
      "3BHK Apartment",
      "4BHK or Larger Apartment",
      "Independent House or Villa",
      "Individual Room / Partial Renovation",
      "Other Residential Space",
    ],
    budgetRanges: [
      "Under ₹5 Lakh (Selected rooms/modular focus)",
      "₹5 – 10 Lakh (Essential 2BHK/3BHK woodwork)",
      "₹10 – 20 Lakh (Comprehensive full-home interior)",
      "₹20 – 35 Lakh (Premium finishes & bespoke furniture)",
      "₹35 Lakh and above (Luxury residential / Villa)",
      "Not decided yet (Request guidance during consultation)",
    ],
    consultationMethods: [
      "In-Person Site Visit (At your property in Chennai)",
      "Velachery Studio Meeting (By Appointment)",
      "WhatsApp & Phone Discussion",
      "Virtual Video Consultation",
    ],
    timelineOptions: [
      "Immediate (Ready for possession/starting this month)",
      "Within 1 – 2 Months",
      "Within 3 – 6 Months",
      "Planning Stage (Handover expected in 6+ months)",
    ],
  },

  backend: {
    supabaseUrl: "https://ajbixzfkdpxnitwedmpa.supabase.co",
    supabaseProjectId: "ajbixzfkdpxnitwedmpa",
    isLiveBackend: true,
  },
};
