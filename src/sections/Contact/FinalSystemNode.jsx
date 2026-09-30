import React from 'react';
import { contactSystemStatus } from '../../data/contactData';
import { Radio } from 'lucide-react';
import './FinalSystemNode.css';

export default function FinalSystemNode() {
  return (
    <div className="final-system-node-banner" aria-label="Final System Convergence Node">
      <div className="final-converge-grid" />

      {/* Center Beacon & Conduit Lines */}
      <div className="final-node-center-flow">
        <div className="converge-line left-line" />
        <div className="final-anchor-core">
          <div className="anchor-glow-ring" />
          <Radio size={16} className="anchor-core-icon" />
          <span className="anchor-beacon-ping" />
        </div>
        <div className="converge-line right-line" />
      </div>

      {/* Final Transmission Metadata */}
      <div className="final-node-meta-block">
        <div className="meta-tag-row">
          <span className="final-code">NODE :: {contactSystemStatus.nodeId}</span>
          <span className="final-sep">/</span>
          <span className="final-loc">{contactSystemStatus.location}</span>
          <span className="final-sep">/</span>
          <span className="final-coords">{contactSystemStatus.coordinates}</span>
        </div>

        <h4 className="final-transmission-heading">THE SYSTEM CONTINUES. BUILT TO KEEP LEARNING.</h4>
        <p className="final-transmission-sub">
          Selection Portfolio · IIT BHU Varanasi Tech Team · 2026-2027
        </p>
      </div>
    </div>
  );
}
