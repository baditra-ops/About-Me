import React from 'react';
import { personalInfo } from '../../data/personalInfo';
import './Interests.css';

export default function Interests() {
  return (
    <div className="interests-block">
      <div className="interests-header">
        <span className="interests-title">// PERSONALITY & INTERESTS</span>
        <span className="interests-quote">
          "Football is something I follow as much as I play."
        </span>
      </div>

      <div className="interests-grid" role="group" aria-label="Personal Interests">
        {personalInfo.interests.map((item) => (
          <div
            key={item.name}
            className="interest-pill-card"
            data-magnetic="true"
            tabIndex={0}
            aria-label={`${item.name} - ${item.note}`}
          >
            <span className="interest-category-tag">{item.tag}</span>
            <span className="interest-name">{item.name.toUpperCase()}</span>
            <span className="interest-sub-note">{item.note}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
