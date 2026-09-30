import React from 'react';
import { personalInfo } from '../../data/personalInfo';
import './DeveloperIdentity.css';

export default function DeveloperIdentity() {
  return (
    <div className="developer-identity-block">
      <div className="developer-identity-header">
        <span className="dev-eyebrow">ENGINEERING DIRECTION // WHAT I BUILD</span>
        <h3 className="dev-heading">Behind Every Interface is a System.</h3>
        <p className="dev-subtext">
          I like understanding what happens behind the interface — designing resilient architectures, handling concurrent data flow, and optimizing persistence.
        </p>
      </div>

      {/* 6 Concept Visual Highlights */}
      <div className="dev-concept-grid">
        {personalInfo.developerFocus.map((item) => (
          <div
            key={item.id}
            className="concept-card"
            data-magnetic="true"
            tabIndex={0}
            aria-label={`${item.label}: ${item.desc}`}
          >
            <div className="concept-top-row">
              <span className="concept-label">{item.label}</span>
              <span className="concept-dot" />
            </div>
            <p className="concept-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
