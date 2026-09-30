import React from 'react';
import { directionalThemes, forwardPhilosophies } from '../../data/whatsNextData';
import { Target } from 'lucide-react';
import './DirectionalDetailCard.css';

export default function DirectionalDetailCard({ activeThemeId }) {
  const theme = directionalThemes.find((t) => t.id === activeThemeId) || directionalThemes[0];

  return (
    <div
      className="directional-detail-card"
      role="tabpanel"
      id={`dir-panel-${theme.id}`}
      aria-labelledby={`dir-tab-${theme.id}`}
    >
      {/* Top Telemetry Header */}
      <div className="dir-card-header">
        <div className="dir-meta-left">
          <span className="dir-status-dot" style={{ background: theme.accentColor, boxShadow: `0 0 8px ${theme.accentColor}` }} />
          <span className="dir-telemetry-tag">{theme.telemetry}</span>
        </div>
        <div className="dir-meta-right">
          <span className="dir-status-badge">{theme.status}</span>
        </div>
      </div>

      {/* Title & Tagline */}
      <div className="dir-card-title-block">
        <div className="dir-key-chip">THEME {theme.key} // {theme.label}</div>
        <h3 className="dir-card-title">{theme.title}</h3>
        <p className="dir-card-tagline">{theme.tagline}</p>
      </div>

      {/* Honest Perspective Quote */}
      <div className="dir-quote-box">
        <span className="quote-mark">“</span>
        <p className="quote-text">{theme.quote}</p>
      </div>

      {/* Detailed Narrative */}
      <div className="dir-narrative-prose">
        <p>{theme.narrative}</p>
      </div>

      {/* Focus Areas Matrix */}
      <div className="dir-focus-section">
        <div className="focus-header-row">
          <Target size={12} style={{ color: theme.accentColor }} />
          <span className="focus-title">KEY ENGINEERING TARGETS</span>
        </div>
        <div className="focus-chips-grid">
          {theme.focusAreas.map((area) => (
            <span key={area} className="focus-chip">
              <span className="focus-chip-dot" style={{ background: theme.accentColor }} />
              <span>{area}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Honest Engineering Philosophy Strip */}
      <div className="dir-philosophy-strip">
        <div className="philosophy-item">
          <span className="philo-label">CORE MINDSET:</span>
          <span className="philo-quote">{forwardPhilosophies[0].text}</span>
        </div>
      </div>
    </div>
  );
}
