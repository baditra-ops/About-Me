import React from 'react';
import { continuousLearningTracks } from '../../data/educationData';
import { Sparkles, Terminal } from 'lucide-react';
import './CurrentExploration.css';

export default function CurrentExploration() {
  return (
    <div className="current-exploration-card">
      <div className="exploration-header">
        <div className="exploration-meta-left">
          <Sparkles size={13} style={{ color: 'var(--accent-emerald)' }} />
          <span className="exploration-tag">CONTINUOUS LEARNING // BEYOND THE CLASSROOM</span>
        </div>
        <span className="exploration-quote-badge">"Education doesn't stop at the syllabus."</span>
      </div>

      <div className="exploration-lead-row">
        <h4 className="exploration-title">Autonomous Engineering Frontiers</h4>
        <p className="exploration-desc">
          Balancing core undergraduate curriculum with self-driven explorations into backend scale, distributed state, and data infrastructure.
        </p>
      </div>

      <div className="exploration-tracks-grid">
        {continuousLearningTracks.map((track) => (
          <div key={track.id} className="track-item-card">
            <div className="track-top-row">
              <span className="track-badge">{track.tag}</span>
              <Terminal size={11} className="track-terminal-icon" />
            </div>
            <h5 className="track-title">{track.title}</h5>
            <p className="track-desc">{track.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
