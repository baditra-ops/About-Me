import React from 'react';
import { personalInfo } from '../data/personalInfo';
import './TechIdentity.css';

export default function TechIdentity() {
  return (
    <div className="tech-identity-container" aria-label="Core Engineering Stack">
      <div className="tech-identity-header">
        <span className="tech-identity-caption">Primary Systems Core</span>
        <span className="tech-identity-status">LAYER 04 // PROTOCOLS & STACK</span>
      </div>

      <div className="tech-identity-grid">
        {personalInfo.techIdentity.map((item) => (
          <div
            key={item.label}
            className="tech-pill"
            tabIndex={0}
            title={`${item.label} - ${item.category}`}
          >
            <span className="tech-pill-indicator" />
            <div className="tech-pill-content">
              <span className="tech-pill-name">{item.label}</span>
              <span className="tech-pill-layer">{item.layer}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
