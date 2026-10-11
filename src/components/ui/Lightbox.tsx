import React, { useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxImage {
  url: string;
  caption: string;
  alt: string;
}

interface LightboxProps {
  images: LightboxImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onPrev,
  onNext,
}) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [isOpen, onClose, onPrev, onNext]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <div
      className="lightbox-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Enlarged Project Photograph Gallery"
      onClick={onClose}
    >
      <div
        className="lightbox-container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="lightbox-close-btn"
          onClick={onClose}
          aria-label="Close gallery lightbox"
        >
          <X size={20} />
          <span>Close</span>
        </button>

        {/* Previous Button */}
        {images.length > 1 && (
          <button
            className="lightbox-nav-btn prev"
            onClick={onPrev}
            aria-label="View previous image"
          >
            <ChevronLeft size={24} />
          </button>
        )}

        {/* Image Display */}
        <div className="lightbox-image-wrap">
          <img
            src={currentImage.url}
            alt={currentImage.alt}
            className="lightbox-image"
          />
        </div>

        {/* Next Button */}
        {images.length > 1 && (
          <button
            className="lightbox-nav-btn next"
            onClick={onNext}
            aria-label="View next image"
          >
            <ChevronRight size={24} />
          </button>
        )}

        {/* Caption & Counter */}
        <div className="lightbox-caption">
          <p style={{ color: "#E6E0D7", fontWeight: 500 }}>
            {currentImage.caption}
          </p>
          <span style={{ fontSize: "0.75rem", color: "#B8A995", marginTop: "4px", display: "inline-block" }}>
            {currentIndex + 1} of {images.length}
          </span>
        </div>
      </div>
    </div>
  );
};
