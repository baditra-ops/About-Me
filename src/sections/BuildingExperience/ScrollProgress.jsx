import React from 'react';
import './BuildingExperience.css';

export default function ScrollProgress({ progress = 0, stateIndex = 1 }) {
  const states = [
    { num: '01', label: 'APPROACH' },
    { num: '02', label: 'FOCAL SCAN' },
    { num: '03', label: 'SPATIAL MAP' },
    { num: '04', label: 'EXPANSION' }
  ];

  const currentState = states[stateIndex - 1] || states[0];

  return (
    <div className="bhu-scroll-progress-dock" aria-hidden="true">
      <div className="progress-telemetry-header">
        <span className="telemetry-idx">{currentState.num}</span>
        <span className="telemetry-lbl">IIT BHU // {currentState.label}</span>
      </div>

      <div className="progress-vertical-bar">
        <div
          className="progress-vertical-fill"
          style={{ height: `${Math.min(Math.max(progress * 100, 4), 100)}%` }}
        />
      </div>

      <div className="progress-coords">
        <span>25.2677° N</span>
        <span>82.9913° E</span>
        <span className="progress-pct">{Math.round(progress * 100)}%</span>
      </div>
    </div>
  );
}
