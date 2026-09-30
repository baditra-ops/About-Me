import React from 'react';
import { educationMilestones } from '../../data/educationData';
import { Compass, CheckCircle2, Award, Building2 } from 'lucide-react';
import './EducationNodeCard.css';

export default function EducationNodeCard({ selectedMilestoneId }) {
  const milestone = educationMilestones.find((m) => m.id === selectedMilestoneId) || educationMilestones[1];

  return (
    <div
      className="education-node-card"
      role="tabpanel"
      id={`edu-panel-${milestone.id}`}
      aria-labelledby={`edu-tab-${milestone.id}`}
    >
      {/* Top Telemetry Header */}
      <div className="edu-card-top-strip">
        <div className="card-meta-left">
          <span className="card-status-dot" />
          <span className="card-phase-tag">{milestone.phase}</span>
        </div>
        <div className="card-meta-right">
          <span className="card-coords-tag">{milestone.coordinates}</span>
        </div>
      </div>

      {/* Main Institution Title Block */}
      <div className="edu-card-title-block">
        <div className="edu-title-stage-row">
          <span className="edu-stage-badge">STAGE {milestone.stage}</span>
          <span className="edu-period-badge">{milestone.period}</span>
        </div>
        <h3 className="edu-card-institution">{milestone.institution}</h3>
        <p className="edu-card-degree">{milestone.degree} · {milestone.location}</p>
      </div>

      {/* Narrative Prose */}
      <div className="edu-card-narrative">
        <p>{milestone.narrative}</p>
      </div>

      {/* IIT BHU Architectural Environment Callback */}
      {milestone.bhuCallback && (
        <div className="edu-card-bhu-panel">
          <div className="bhu-panel-header">
            <Building2 size={13} style={{ color: 'var(--accent-cyan)' }} />
            <span className="bhu-panel-title">THE ARCHITECTURAL ENVIRONMENT</span>
          </div>
          <p className="bhu-panel-prose">{milestone.bhuCallback.focus}</p>
          <div className="bhu-panel-meta">
            <span className="bhu-meta-tag">SECTOR: {milestone.bhuCallback.beacon}</span>
            <span className="bhu-meta-tag">GRID: {milestone.bhuCallback.grid}</span>
          </div>
        </div>
      )}

      {/* Key Takeaways & Rigor Highlights */}
      <div className="edu-card-takeaways">
        <div className="takeaways-header">
          <Award size={12} style={{ color: 'var(--accent-emerald)' }} />
          <span>ACADEMIC RIGOR & MINDSET EVOLUTION</span>
        </div>
        <div className="takeaways-list">
          {milestone.keyTakeaways.map((point) => (
            <div key={point} className="takeaway-item">
              <CheckCircle2 size={13} className="takeaway-icon" />
              <span>{point}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Status Strip */}
      <div className="edu-card-footer">
        <div className="footer-status-item">
          <span className="f-status-label">STATUS:</span>
          <span className="f-status-val">{milestone.status}</span>
        </div>
        <div className="footer-status-item">
          <Compass size={11} style={{ color: 'var(--text-dim)' }} />
          <span className="f-nav-hint">SELECT ANY MILESTONE TO RE-INSPECT</span>
        </div>
      </div>
    </div>
  );
}
