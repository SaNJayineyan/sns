import React, { useState } from "react";
import { CheckCircle2, Send, RefreshCw, Copy, Check, MessageCircle, Database } from "lucide-react";
import { businessConfig } from "../../config/businessConfig";
import type { ConsultationFormData, SubmissionResponse } from "../../types";
import { submitConsultationToSupabase } from "../../utils/supabase";

export const ConsultationForm: React.FC = () => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: "",
    phone: "",
    email: "",
    projectLocation: "",
    propertyType: "3BHK Apartment",
    propertySize: "",
    servicesRequired: ["Complete Home Interiors"],
    budgetRange: "₹10 – 20 Lakh (Comprehensive full-home interior)",
    consultationMethod: "In-Person Site Visit (At your property in Chennai)",
    expectedStart: "Within 1 – 2 Months",
    additionalNotes: "",
    consent: true,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ConsultationFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<SubmissionResponse | null>(null);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [copiedEnquiryId, setCopiedEnquiryId] = useState(false);

  // Validate Indian Phone Number: accepts 10 digits with optional +91, 0 prefix, spaces or dashes
  const validateIndianPhone = (phoneStr: string): boolean => {
    const cleaned = phoneStr.replace(/[\s\-\(\)]/g, "");
    const regex = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/;
    return regex.test(cleaned);
  };

  const validateEmail = (emailStr: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailStr);
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ConsultationFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please provide your full name";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required for consultation coordination";
    } else if (!validateIndianPhone(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit Indian mobile number (e.g., 98401 23456 or +91 7200907677)";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required for sending design proposals";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.projectLocation.trim()) {
      newErrors.projectLocation = "Please specify project area or locality in Chennai (e.g. Velachery, Adyar, OMR)";
    }

    if (formData.servicesRequired.length === 0) {
      newErrors.servicesRequired = "Please select at least one required interior service";
    }

    if (!formData.consent) {
      newErrors.consent = "Please confirm that you agree to be contacted regarding this enquiry";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCheckboxChange = (serviceName: string) => {
    setFormData((prev) => {
      const exists = prev.servicesRequired.includes(serviceName);
      if (exists) {
        return { ...prev, servicesRequired: prev.servicesRequired.filter((s) => s !== serviceName) };
      } else {
        return { ...prev, servicesRequired: [...prev.servicesRequired, serviceName] };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmissionError(null);

    const generatedId = `SNS-${Math.floor(100000 + Math.random() * 900000)}`;

    try {
      // 1. Submit directly to Supabase Backend
      await submitConsultationToSupabase(formData, generatedId);

      const result: SubmissionResponse = {
        success: true,
        enquiryId: generatedId,
        submittedAt: new Date().toLocaleDateString("en-IN", {
          day: "numeric",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
        data: { ...formData },
        message: "Your consultation request has been securely saved to our database.",
      };

      setSubmissionResult(result);
      window.scrollTo({ top: 350, behavior: "smooth" });
    } catch (err: unknown) {
      console.error("Submission failed:", err);
      setSubmissionError(
        "There was a network issue connecting to the database. Please try again or reach us directly on WhatsApp."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyId = () => {
    if (submissionResult) {
      navigator.clipboard.writeText(submissionResult.enquiryId);
      setCopiedEnquiryId(true);
      setTimeout(() => setCopiedEnquiryId(false), 2000);
    }
  };

  const handleReset = () => {
    setSubmissionResult(null);
    setSubmissionError(null);
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      projectLocation: "",
      propertyType: "3BHK Apartment",
      propertySize: "",
      servicesRequired: ["Complete Home Interiors"],
      budgetRange: "₹10 – 20 Lakh (Comprehensive full-home interior)",
      consultationMethod: "In-Person Site Visit (At your property in Chennai)",
      expectedStart: "Within 1 – 2 Months",
      additionalNotes: "",
      consent: true,
    });
    setErrors({});
  };

  // Available Services
  const availableServices = [
    "Complete Home Interiors",
    "Modular Kitchen",
    "Wardrobes & Storage",
    "Living Room Design",
    "Bedroom Interiors",
    "False Ceiling & Lighting",
    "Custom Furniture",
    "Space Planning",
  ];

  // WhatsApp link for instant confirmation
  const getWhatsAppChatUrl = () => {
    if (!submissionResult) return "#";
    const text = `Hello Structs N Spaces, I have submitted a consultation request on your website.\n\nReference ID: ${submissionResult.enquiryId}\nName: ${submissionResult.data.fullName}\nLocation: ${submissionResult.data.projectLocation}, Chennai\nProperty: ${submissionResult.data.propertyType}\nServices: ${submissionResult.data.servicesRequired.join(", ")}\n\nPlease help me schedule our design discussion.`;
    return `https://wa.me/${businessConfig.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  if (submissionResult) {
    return (
      <div className="editorial-card" style={{ padding: "clamp(2rem, 5vw, 3.5rem)", maxWidth: "800px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div
            style={{
              width: "68px",
              height: "68px",
              borderRadius: "50%",
              backgroundColor: "var(--color-ivory)",
              border: "2px solid var(--color-olive)",
              color: "var(--color-olive)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 1.25rem",
            }}
          >
            <CheckCircle2 size={38} />
          </div>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              background: "#EBF3ED",
              color: "#2E5E3B",
              padding: "0.35rem 0.85rem",
              borderRadius: "20px",
              fontSize: "0.785rem",
              fontWeight: 600,
              marginBottom: "1rem",
            }}
          >
            <Database size={14} />
            <span>Saved in Studio Database</span>
          </div>

          <h3 style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>
            Thank You, {submissionResult.data.fullName}!
          </h3>
          <p style={{ maxWidth: "600px", margin: "0 auto", fontSize: "1.05rem" }}>
            Your consultation request has been successfully recorded in our Supabase system. Our interior team from our Velachery studio will connect with you within 24 business hours.
          </p>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              background: "var(--color-ivory)",
              padding: "0.75rem 1.25rem",
              border: "1px solid var(--color-border)",
              marginTop: "1.5rem",
            }}
          >
            <span style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--color-charcoal-subtle)" }}>
              Reference ID:
            </span>
            <strong style={{ fontFamily: "monospace", fontSize: "1.2rem", color: "var(--color-charcoal)" }}>
              {submissionResult.enquiryId}
            </strong>
            <button
              onClick={handleCopyId}
              style={{ background: "none", border: "none", cursor: "pointer", color: "var(--color-olive)", padding: "4px" }}
              aria-label="Copy reference ID"
              title="Copy ID"
            >
              {copiedEnquiryId ? <Check size={16} /> : <Copy size={16} />}
            </button>
          </div>
        </div>

        {/* WhatsApp Fast-Track Button */}
        <div style={{ background: "#F0F9F2", border: "1px solid #CDE8D5", padding: "1.5rem", marginBottom: "2rem", textAlign: "center" }}>
          <h4 style={{ color: "#1D5C2B", fontSize: "1.1rem", marginBottom: "0.4rem" }}>
            Want an Immediate Response?
          </h4>
          <p style={{ fontSize: "0.9rem", color: "#3B6944", marginBottom: "1.25rem" }}>
            Click below to forward your Reference ID directly to our design coordinator on WhatsApp (+91 7200907677).
          </p>
          <a
            href={getWhatsAppChatUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{ backgroundColor: "#25D366", color: "#FFFFFF", borderColor: "#25D366", gap: "0.6rem" }}
          >
            <MessageCircle size={18} />
            <span>Connect on WhatsApp with Reference ID</span>
          </a>
        </div>

        {/* Submitted Enquiry Summary */}
        <div
          style={{
            background: "var(--color-ivory-light)",
            border: "1px solid var(--color-border)",
            padding: "1.5rem",
            marginBottom: "2rem",
          }}
        >
          <h4 style={{ fontSize: "1rem", marginBottom: "1rem", color: "var(--color-charcoal)" }}>
            Submitted Enquiry Summary
          </h4>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem", fontSize: "0.88rem" }}>
            <div>
              <span style={{ color: "var(--color-charcoal-subtle)", display: "block" }}>Property & Size</span>
              <strong>{submissionResult.data.propertyType} {submissionResult.data.propertySize ? `(${submissionResult.data.propertySize} sq.ft.)` : ""}</strong>
            </div>
            <div>
              <span style={{ color: "var(--color-charcoal-subtle)", display: "block" }}>Project Locality</span>
              <strong>{submissionResult.data.projectLocation}, Chennai</strong>
            </div>
            <div>
              <span style={{ color: "var(--color-charcoal-subtle)", display: "block" }}>Consultation Format</span>
              <strong>{submissionResult.data.consultationMethod}</strong>
            </div>
            <div>
              <span style={{ color: "var(--color-charcoal-subtle)", display: "block" }}>Target Investment</span>
              <strong>{submissionResult.data.budgetRange}</strong>
            </div>
            <div>
              <span style={{ color: "var(--color-charcoal-subtle)", display: "block" }}>Target Timeline</span>
              <strong>{submissionResult.data.expectedStart}</strong>
            </div>
            <div>
              <span style={{ color: "var(--color-charcoal-subtle)", display: "block" }}>Contact Number</span>
              <strong>{submissionResult.data.phone}</strong>
            </div>
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <button onClick={handleReset} className="btn btn-outline">
            <RefreshCw size={15} />
            <span>Submit Another Consultation Request</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="editorial-card" style={{ padding: "clamp(1.75rem, 4vw, 3rem)" }}>
      {submissionError && (
        <div
          style={{
            background: "var(--color-error-bg)",
            border: "1px solid var(--color-error)",
            color: "var(--color-error)",
            padding: "1rem",
            marginBottom: "1.5rem",
            borderRadius: "2px",
            fontSize: "0.9rem",
          }}
        >
          {submissionError}
        </div>
      )}

      {/* Client Identity Details */}
      <div style={{ marginBottom: "2rem" }}>
        <h3 style={{ fontSize: "1.35rem", marginBottom: "1.25rem", borderBottom: "1px solid var(--color-border)", paddingBottom: "0.5rem" }}>
          1. Your Contact Details
        </h3>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
          <div className="form-group">
            <label className="form-label" htmlFor="fullName">
              Full Name <span className="required">*</span>
            </label>
            <input
              id="fullName"
              type="text"
              className={`form-input ${errors.fullName ? "has-error" : ""}`}
              placeholder="e.g. Aravind Sundaram"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              aria-required="true"
              aria-invalid={!!errors.fullName}
              aria-describedby={errors.fullName ? "fullName-error" : undefined}
            />
            {errors.fullName && <span id="fullName-error" className="form-error-msg">{errors.fullName}</span>}
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="phone">
              Mobile Number (India) <span className="required">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              className={`form-input ${errors.phone ? "has-error" : ""}`}
              placeholder="e.g. 7200907677 or +91 7200907677"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              aria-required="true"
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "phone-error" : undefined}
            />
            {errors.phone && <span id="phone-error" className="form-error-msg">{errors.phone}</span>}
            <span className="form-help-text">We coordinate site visits via phone / WhatsApp</span>
          </div>

          <div className="form-group" style={{ gridColumn: "1 / -1" }}>
            <label className="form-label" htmlFor="email">
              Email Address <span className="required">*</span>
            </label>
            <input
              id="email"
              type="email"
              className={`form-input ${errors.email ? "has-error" : ""}`}
              placeholder="e.g. aravind@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              aria-required="true"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && <span id="email-error" className="form-error-msg">{errors.email}</span>}
          </div>
        </div>
      </div>

      {/* Property & Location Details */}
      <div style={{ marginBottom: "2rem" }}>
        <h3 style={{ fontSize: "1.35rem", marginBottom: "1.25rem", borderBottom: "1px solid var(--color-border)", paddingBottom: "0.5rem" }}>
          2. Property & Location
        </h3>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
          <div className="form-group">
            <label className="form-label" htmlFor="projectLocation">
              Project Area in Chennai <span className="required">*</span>
            </label>
            <input
              id="projectLocation"
              type="text"
              className={`form-input ${errors.projectLocation ? "has-error" : ""}`}
              placeholder="e.g. Velachery, Adyar, OMR Thoraipakkam, Anna Nagar"
              value={formData.projectLocation}
              onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
              aria-required="true"
              aria-invalid={!!errors.projectLocation}
              aria-describedby={errors.projectLocation ? "projectLocation-error" : undefined}
            />
            {errors.projectLocation && <span id="projectLocation-error" className="form-error-msg">{errors.projectLocation}</span>}
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="propertyType">
              Property Type
            </label>
            <select
              id="propertyType"
              className="form-select"
              value={formData.propertyType}
              onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
            >
              {businessConfig.consultation.propertyTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="propertySize">
              Approximate Size (Sq. Ft.)
            </label>
            <input
              id="propertySize"
              type="text"
              className="form-input"
              placeholder="e.g. 1,450 sq.ft."
              value={formData.propertySize}
              onChange={(e) => setFormData({ ...formData, propertySize: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="expectedStart">
              Expected Project Start
            </label>
            <select
              id="expectedStart"
              className="form-select"
              value={formData.expectedStart}
              onChange={(e) => setFormData({ ...formData, expectedStart: e.target.value })}
            >
              {businessConfig.consultation.timelineOptions.map((timeline) => (
                <option key={timeline} value={timeline}>
                  {timeline}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Services Required (Multi-Select Checkboxes) */}
      <div className="form-group" style={{ marginBottom: "2rem" }}>
        <label className="form-label">
          Services Required <span className="required">*</span>
        </label>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0.65rem", marginTop: "0.5rem" }}>
          {availableServices.map((service) => {
            const isChecked = formData.servicesRequired.includes(service);
            return (
              <label
                key={service}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  fontSize: "0.9rem",
                  padding: "0.6rem 0.85rem",
                  background: isChecked ? "var(--color-taupe-light)" : "var(--color-ivory-light)",
                  border: `1px solid ${isChecked ? "var(--color-taupe)" : "var(--color-border)"}`,
                  cursor: "pointer",
                  borderRadius: "2px",
                  transition: "var(--transition-fast)",
                }}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => handleCheckboxChange(service)}
                  style={{ accentColor: "var(--color-charcoal)" }}
                />
                <span>{service}</span>
              </label>
            );
          })}
        </div>
        {errors.servicesRequired && <span className="form-error-msg">{errors.servicesRequired}</span>}
      </div>

      {/* Scope, Budget & Consultation Method */}
      <div style={{ marginBottom: "2rem" }}>
        <h3 style={{ fontSize: "1.35rem", marginBottom: "1.25rem", borderBottom: "1px solid var(--color-border)", paddingBottom: "0.5rem" }}>
          3. Scope & Budget Guidance
        </h3>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
          <div className="form-group">
            <label className="form-label" htmlFor="budgetRange">
              Indicative Budget Range (INR)
            </label>
            <select
              id="budgetRange"
              className="form-select"
              value={formData.budgetRange}
              onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
            >
              {businessConfig.consultation.budgetRanges.map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="consultationMethod">
              Preferred Consultation Format
            </label>
            <select
              id="consultationMethod"
              className="form-select"
              value={formData.consultationMethod}
              onChange={(e) => setFormData({ ...formData, consultationMethod: e.target.value })}
            >
              {businessConfig.consultation.consultationMethods.map((method) => (
                <option key={method} value={method}>
                  {method}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-group" style={{ marginTop: "1rem" }}>
          <label className="form-label" htmlFor="additionalNotes">
            Additional Notes or Specific Requirements
          </label>
          <textarea
            id="additionalNotes"
            rows={4}
            className="form-textarea"
            placeholder="Tell us about specific room priorities (e.g. Pooja unit, kid's bedroom, modular kitchen requirements, handover date)..."
            value={formData.additionalNotes}
            onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
          />
        </div>
      </div>

      {/* Consent Checkbox */}
      <div className="form-group" style={{ marginBottom: "2rem" }}>
        <label style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", cursor: "pointer", fontSize: "0.85rem", color: "var(--color-charcoal-muted)" }}>
          <input
            type="checkbox"
            checked={formData.consent}
            onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
            style={{ accentColor: "var(--color-charcoal)", marginTop: "3px" }}
          />
          <span>
            I agree to allow Structs N Spaces to contact me regarding my interior design enquiry. We respect your privacy and never share your details with third parties.
          </span>
        </label>
        {errors.consent && <span className="form-error-msg">{errors.consent}</span>}
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="btn btn-primary"
          style={{ width: "100%", padding: "1rem" }}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span>Saving Consultation to Database...</span>
          ) : (
            <>
              <span>Submit Consultation Request</span>
              <Send size={16} />
            </>
          )}
        </button>
        <p style={{ textAlign: "center", fontSize: "0.785rem", color: "var(--color-charcoal-subtle)", marginTop: "0.85rem" }}>
          * Free initial consultation • No obligation • Connected directly to Structs N Spaces Supabase backend
        </p>
      </div>
    </form>
  );
};
