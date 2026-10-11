import React from "react";
import { MessageCircle } from "lucide-react";
import { businessConfig } from "../../config/businessConfig";

export const FloatingWhatsApp: React.FC = () => {
  const { contact, social } = businessConfig;

  const whatsappHref = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(contact.whatsappDefaultMessage)}`;

  return (
    <div className="floating-actions-wrap" role="region" aria-label="Quick Connect Channels">
      {/* Floating Instagram Button */}
      <div className="floating-action-item">
        <span className="floating-action-label">
          Follow {social.instagramHandle}
        </span>
        <a
          href={social.instagram}
          className="floating-instagram-btn"
          aria-label="Follow Structs N Spaces on Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="floating-action-item">
        <span className="floating-action-label">
          Chat on WhatsApp ({contact.phoneDisplay})
        </span>
        <a
          href={whatsappHref}
          className="floating-whatsapp-btn"
          aria-label="Chat with Structs N Spaces on WhatsApp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle size={28} />
        </a>
      </div>
    </div>
  );
};
