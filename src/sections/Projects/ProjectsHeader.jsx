import React from 'react';
import { Layers, Terminal } from 'lucide-react';

export default function ProjectsHeader() {
  return (
    <div className="projects-header-block">
      <div className="projects-eyebrow-row">
        <span className="telemetry-chip">
          <Layers size={11} className="telemetry-dot" />
          <span>03 // SELECTED SYSTEMS</span>
        </span>
        <span className="projects-continuity-tag">
          <Terminal size={11} style={{ display: 'inline', marginRight: '4px' }} />
          PHILOSOPHY → WORKING SYSTEMS
        </span>
      </div>

      <h2 className="projects-main-heading">THINGS I'VE BUILT</h2>
      <p className="projects-sub-heading">
        Turning ideas into systems, interfaces and experiments.
      </p>
    </div>
  );
}
