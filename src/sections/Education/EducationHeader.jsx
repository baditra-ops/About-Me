import React from 'react';
import { Compass, GraduationCap } from 'lucide-react';

export default function EducationHeader() {
  return (
    <div className="education-header-block">
      <div className="education-eyebrow-row">
        <span className="telemetry-chip">
          <GraduationCap size={11} className="telemetry-dot" />
          <span>05 // EDUCATION</span>
        </span>
        <span className="education-continuity-tag">
          <Compass size={11} style={{ display: 'inline', marginRight: '4px' }} />
          THE TOOLS → THE LEARNING PATH
        </span>
      </div>

      <h2 className="education-main-heading">THE LEARNING JOURNEY</h2>
      <p className="education-sub-heading">
        Learning is less about collecting answers and more about becoming curious about better questions.
      </p>
    </div>
  );
}
