# Structs N Spaces — Premium Interior Design Website

> **"We Make Your Home Exquisite"**  
> Residential Interior Design, Space Planning, and Turnkey Execution in Chennai, Tamil Nadu, India.

---

## 1. Project Overview

Structs N Spaces is a digital presence for an interior design and execution studio with **10+ years of experience** and **50+ completed residential projects** across Chennai.

The site is built with an architectural editorial aesthetic featuring:
- **Brand Palette:** Warm Ivory (`#F7F4EE`), Soft White (`#FFFFFF`), Deep Charcoal (`#242522`), Muted Olive (`#777B64`), Warm Taupe (`#B8A995`), and Fine Architectural Borders (`#E6E0D7`).
- **Typography:** Serif headings (`Cormorant Garamond`) paired with architectural sans-serif (`Manrope`).
- **Multi-page Architecture:** Home, About Us, Our Services, Our Projects, Individual Project Detail, Design Process, Contact Us, Book a Consultation, and Privacy Policy.
- **Conversion Systems:**
  - Validated Consultation Form with Indian mobile number validation, property details, budget ranges, and demo submission states.
  - Interactive Before & After comparison slider with touch, mouse, and keyboard navigation.
  - Fullscreen Gallery Lightbox with keyboard arrow navigation and Escape listener.
  - Accessible FAQ Accordion with ARIA states.
  - Centralized, single-source-of-truth business configuration file.

---

## 2. Centralized Business Configuration

All company details, phone numbers, email addresses, service areas, and consultation settings are managed in a single file:

```
src/config/businessConfig.ts
```

### Updating Contact Information:
Open `src/config/businessConfig.ts` and update the `contact` block:
```typescript
contact: {
  phone: "+91-9840123456",            // Your verified phone number
  phoneDisplay: "+91 98401 23456",    // Display format
  isPhoneConfigured: true,             // Set to true once verified

  email: "contact@structsnspaces.com",
  emailDisplay: "contact@structsnspaces.com",
  isEmailConfigured: true,

  whatsappNumber: "919840123456",     // 10 or 12 digit number without '+'
  isWhatsAppConfigured: true,          // Enables direct WhatsApp chat
  whatsappDefaultMessage: "Hello Structs N Spaces, I would like to discuss my home interior requirements...",
}
```

---

## 3. Managing Projects, Services & Content

| Content Area | Configuration File | Notes |
|---|---|---|
| **Projects Portfolio** | `src/data/projectsData.ts` | 6 sample projects with specs, gallery photos, design approaches, and material palettes. Set `isSampleProject: false` when replacing with actual client photographs. |
| **Interior Services** | `src/data/servicesData.ts` | 8 core offerings with scope of work, features, deliverables, and ideal-for recommendations. |
| **Homeowner Testimonials** | `src/data/testimonialsData.ts` | Sample feedback entries. Replace with approved client feedback before launch. |
| **FAQ Accordion** | `src/data/faqData.ts` | 8 detailed Q&As addressing residential processes, budget tiers, and Chennai coverage. |
| **Consultation Options** | `src/config/businessConfig.ts` | Property types, indicative budget tiers, timelines, and consultation formats. |

---

## 4. Connecting a Live Backend / CRM

The consultation form in `src/components/consultation/ConsultationForm.tsx` currently operates in a demonstration mode.

To connect a live CRM (e.g. Zoho CRM, Salesforce, Webhook, or email service):
1. Copy `.env.example` to `.env.local` and set `VITE_CONSULTATION_API_ENDPOINT`.
2. In `ConsultationForm.tsx`, replace the `setTimeout` simulation in `handleSubmit` with your API `fetch` call:
```typescript
const response = await fetch(import.meta.env.VITE_CONSULTATION_API_ENDPOINT, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData),
});
```

---

## 5. Local Development & Build

### Prerequisites
- Node.js 18+ (tested on Node v22)
- npm 9+

### Commands

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Validate TypeScript and create production bundle
npm run build

# 4. Preview production build locally
npm run preview
```

---

## 6. Pre-Launch Checklist

Before deploying to production:
- [ ] Update `businessConfig.contact.phone` and set `isPhoneConfigured: true`.
- [ ] Update `businessConfig.contact.email` and set `isEmailConfigured: true`.
- [ ] Configure `businessConfig.contact.whatsappNumber` and set `isWhatsAppConfigured: true`.
- [ ] Replace illustrative sample project photographs with verified client work photography.
- [ ] Replace sample testimonial text with approved homeowner reviews.
- [ ] Connect the Consultation Form to your production CRM or notification webhook.
- [ ] Verify domain canonical URL in `src/utils/seo.ts` and `public/robots.txt`.
