import React from 'react';
import { educationMilestones } from '../../data/educationData';
import { MapPin, CheckCircle2, Sparkles, Navigation, Layers } from 'lucide-react';
import './LearningMap.css';

export default function LearningMap({ selectedMilestoneId, onSelectMilestone }) {
  const handleKeyDown = (e, index) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      const nextIndex = (index + 1) % educationMilestones.length;
      onSelectMilestone(educationMilestones[nextIndex].id);
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      const prevIndex = (index - 1 + educationMilestones.length) % educationMilestones.length;
      onSelectMilestone(educationMilestones[prevIndex].id);
    }
  };

  return (
    <div
      className="learning-map-container"
      role="tablist"
      aria-label="Academic Milestones & Learning Journey Path"
    >
      <div className="learning-map-header">
        <span className="map-tag">
          <Navigation size={11} style={{ color: 'var(--accent-cyan)' }} />
          <span>TOPOLOGY // ACADEMIC PATHWAY</span>
        </span>
        <span className="map-coords-badge">VNS · KLN · DISTRIBUTED</span>
      </div>

      <div className="learning-map-body">
        {/* SVG Continuous Backbone Conduit */}
        <div className="conduit-line-vertical" />

        <div className="milestones-track">
          {educationMilestones.map((item, idx) => {
            const isSelected = item.id === selectedMilestoneId;
            const isCurrent = item.isActive;

            return (
              <div
                key={item.id}
                className={`milestone-step-row ${isSelected ? 'selected' : ''} ${isCurrent ? 'is-current' : ''}`}
              >
                {/* Node Milestone Button */}
                <button
                  type="button"
                  role="tab"
                  id={`edu-tab-${item.id}`}
                  aria-selected={isSelected}
                  aria-controls={`edu-panel-${item.id}`}
                  tabIndex={isSelected ? 0 : -1}
                  className="milestone-anchor-node"
                  onClick={() => onSelectMilestone(item.id)}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                  data-magnetic="true"
                  aria-label={`${item.stage} ${item.institution}`}
                >
                  <div className="node-marker-ring">
                    {isCurrent ? (
                      <span className="node-pulse-beacon" />
                    ) : (
                      <CheckCircle2 size={12} className="node-check-icon" />
                    )}
                    <span className="node-num-tag">{item.stage}</span>
                  </div>
                </button>

                {/* Milestone Summary Content Box */}
                <div
                  className="milestone-summary-card"
                  onClick={() => onSelectMilestone(item.id)}
                >
                  <div className="milestone-top-meta">
                    <span className="milestone-phase-code">{item.phase}</span>
                    <span className="milestone-status-pill">
                      {isCurrent ? (
                        <>
                          <span className="status-ping-dot" />
                          <span>CURRENT STANDING</span>
                        </>
                      ) : (
                        <span>{item.period}</span>
                      )}
                    </span>
                  </div>

                  <h3 className="milestone-institution">{item.institution}</h3>

                  <div className="milestone-details-row">
                    <span className="milestone-degree-label">{item.degree}</span>
                    <span className="milestone-location-tag">
                      <MapPin size={10} style={{ display: 'inline', marginRight: '3px' }} />
                      {item.location}
                    </span>
                  </div>

                  {/* Subtle IIT BHU Callback for Stage 02 */}
                  {item.bhuCallback && (
                    <div className="milestone-bhu-callback">
                      <div className="bhu-callback-badge">
                        <Layers size={10} style={{ color: 'var(--accent-cyan)' }} />
                        <span>CAMPUS ENVIRONMENT CALLBACK</span>
                      </div>
                      <span className="bhu-callback-grid">{item.bhuCallback.grid}</span>
                    </div>
                  )}

                  {/* Metric Chips Row */}
                  <div className="milestone-metrics-strip">
                    {item.metrics.map((m) => (
                      <span key={m.label} className="metric-chip">
                        <span className="m-label">{m.label}:</span>
                        <span className="m-val">{m.value}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trajectory Continuity Line (Extending forward) */}
        <div className="trajectory-extension-row">
          <div className="trajectory-node-terminal">
            <Sparkles size={12} style={{ color: 'var(--accent-emerald)' }} />
          </div>
          <div className="trajectory-label-wrap">
            <span className="trajectory-heading">TRAJECTORY // ONGOING EXPLORATION</span>
            <span className="trajectory-sub">The learning curve compounds continuously beyond academic boundaries.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
