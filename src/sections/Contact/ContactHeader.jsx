import React from 'react';
import { Radio, Terminal } from 'lucide-react';

export default function ContactHeader() {
  return (
    <div className="contact-header-block">
      <div className="contact-eyebrow-row">
        <span className="telemetry-chip">
          <Terminal size={11} className="telemetry-dot" />
          <span>07 // CONTACT PROTOCOL</span>
        </span>
        <span className="contact-continuity-tag">
          <Radio size={11} style={{ display: 'inline', marginRight: '4px' }} />
          FORWARD VECTOR → THE FINAL NEXUS
        </span>
      </div>

      <h2 className="contact-main-heading">LET'S CONNECT.</h2>
      <p className="contact-sub-heading">
        The system doesn't end here. The build continues beyond this screen.
      </p>
    </div>
  );
}
