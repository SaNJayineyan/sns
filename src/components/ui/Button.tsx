import React from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "outline-light" | "text";
  to?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
  ariaLabel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  to,
  href,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  icon,
  ariaLabel,
}) => {
  const variantClass = 
    variant === "primary" ? "btn-primary" :
    variant === "secondary" ? "btn-secondary" :
    variant === "outline" ? "btn-outline" :
    variant === "outline-light" ? "btn-outline-light" :
    "btn-text";

  const fullClass = variant === "text" 
    ? `btn-text ${className}` 
    : `btn ${variantClass} ${className}`;

  if (to) {
    return (
      <Link to={to} className={fullClass} aria-label={ariaLabel}>
        {children}
        {icon && <span className="btn-icon">{icon}</span>}
      </Link>
    );
  }

  if (href) {
    return (
      <a 
        href={href} 
        className={fullClass} 
        aria-label={ariaLabel}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
        {icon && <span className="btn-icon">{icon}</span>}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={fullClass}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
      {icon && <span className="btn-icon">{icon}</span>}
    </button>
  );
};
