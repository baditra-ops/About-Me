import React from 'react';
import { personalInfo } from '../../data/personalInfo';
import { Sparkles, Terminal } from 'lucide-react';

export default function AboutHeader() {
  return (
    <div className="about-header-block">
      {/* Eyebrow & Transition Bridge */}
      <div className="about-eyebrow-row">
        <span className="telemetry-chip">
          <Sparkles size={11} className="telemetry-dot" />
          <span>02 // THE PERSON BEHIND THE SYSTEM</span>
        </span>
        <span className="about-bridge-tag">
          <Terminal size={11} style={{ display: 'inline', marginRight: '4px' }} />
          CAMPUS ARCHITECTURE → DEVELOPER INTELLECT
        </span>
      </div>

      {/* Main Section Heading */}
      <h2 className="about-main-heading">ABOUT ME</h2>

      {/* Narrative Lead Prose */}
      <p className="about-lead-prose">
        "{personalInfo.aboutNarrative.primary}"
      </p>

      {/* Secondary Philosophy Line */}
      <p className="about-secondary-line">
        "{personalInfo.aboutNarrative.secondary}"
      </p>
    </div>
  );
}
