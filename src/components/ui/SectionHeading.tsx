import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  lightMode?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  centered = false,
  lightMode = false,
  className = "",
}) => {
  return (
    <div className={`section-header ${centered ? "text-center" : ""} ${className}`}>
      {eyebrow && (
        <span className={`eyebrow ${lightMode ? "eyebrow-light" : ""}`}>
          {eyebrow}
        </span>
      )}
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
};
