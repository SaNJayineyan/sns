import React from "react";
import { Clock, Home, Palette } from "lucide-react";
import { businessConfig } from "../../config/businessConfig";

export const TrustStrip: React.FC = () => {
  return (
    <div className="trust-strip" aria-label="Core Studio Proof Points">
      <div className="container">
        <div className="trust-strip-grid">
          <div className="trust-item">
            <div className="trust-item-icon">
              <Clock size={20} />
            </div>
            <div>
              <div className="trust-item-value">{businessConfig.experienceYears} Years</div>
              <div className="trust-item-label">Of Design & Execution Experience</div>
            </div>
          </div>

          <div className="trust-item">
            <div className="trust-item-icon">
              <Home size={20} />
            </div>
            <div>
              <div className="trust-item-value">{businessConfig.completedProjectsCount} Projects</div>
              <div className="trust-item-label">Homes Brought to Life in Chennai</div>
            </div>
          </div>

          <div className="trust-item">
            <div className="trust-item-icon">
              <Palette size={20} />
            </div>
            <div>
              <div className="trust-item-value">Personalized Design</div>
              <div className="trust-item-label">Spaces Planned Around Real Lifestyles</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
