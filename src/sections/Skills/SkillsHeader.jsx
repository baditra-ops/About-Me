import React from 'react';
import { Cpu, Terminal } from 'lucide-react';

export default function SkillsHeader() {
  return (
    <div className="skills-header-block">
      <div className="skills-eyebrow-row">
        <span className="telemetry-chip">
          <Cpu size={11} className="telemetry-dot" />
          <span>04 // HOW I BUILD</span>
        </span>
        <span className="skills-continuity-tag">
          <Terminal size={11} style={{ display: 'inline', marginRight: '4px' }} />
          SYSTEMS → ARCHITECTURAL ARSENAL
        </span>
      </div>

      <h2 className="skills-main-heading">TECHNICAL ARSENAL</h2>
      <p className="skills-sub-heading">
        Tools are only useful when you understand the systems behind them.
      </p>
    </div>
  );
}
