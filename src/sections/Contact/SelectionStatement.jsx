import React from 'react';
import { selectionClosingStatement } from '../../data/contactData';
import { CheckCircle2, Sparkles, Building2 } from 'lucide-react';
import './SelectionStatement.css';

export default function SelectionStatement() {
  return (
    <div className="selection-statement-card">
      {/* Top Telemetry Header */}
      <div className="statement-header-row">
        <div className="statement-meta-left">
          <Building2 size={13} style={{ color: 'var(--accent-cyan)' }} />
          <span className="statement-tag">IIT BHU TECH TEAM // CANDIDACY PERSPECTIVE</span>
        </div>
        <span className="statement-badge">SELECTION SUBMISSION</span>
      </div>

      {/* Main Philosophy Quotes */}
      <div className="statement-quote-container">
        <h3 className="statement-lead-quote">
          "{selectionClosingStatement.primaryThought}"
        </h3>
        <p className="statement-sub-quote">
          {selectionClosingStatement.secondaryThought}
        </p>
      </div>

      {/* 3 Pillars Matrix */}
      <div className="statement-pillars-grid">
        {selectionClosingStatement.pillars.map((pillar) => (
          <div key={pillar.label} className="statement-pillar-item">
            <div className="pillar-top-row">
              <CheckCircle2 size={12} className="pillar-check" />
              <span className="pillar-label">{pillar.label}</span>
            </div>
            <p className="pillar-note">{pillar.note}</p>
          </div>
        ))}
      </div>

      {/* Final Closing Selection Line */}
      <div className="statement-pledge-strip">
        <Sparkles size={14} style={{ color: 'var(--accent-emerald)' }} />
        <span className="pledge-text">
          {selectionClosingStatement.closingPledge}
        </span>
      </div>
    </div>
  );
}
