import React from 'react';
import { Compass, Radio } from 'lucide-react';

export default function WhatsNextHeader() {
  return (
    <div className="whats-next-header-block">
      <div className="whats-next-eyebrow-row">
        <span className="telemetry-chip">
          <Radio size={11} className="telemetry-dot" />
          <span>06 // THE NEXT NODE</span>
        </span>
        <span className="whats-next-continuity-tag">
          <Compass size={11} style={{ display: 'inline', marginRight: '4px' }} />
          THE PATH → THE FORWARD VECTOR
        </span>
      </div>

      <h2 className="whats-next-main-heading">WHAT'S NEXT</h2>
      <p className="whats-next-sub-heading">
        Still learning. Still building. Still curious about what comes next.
      </p>
    </div>
  );
}
