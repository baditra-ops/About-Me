import React from 'react';
import { directionalThemes } from '../../data/whatsNextData';
import { Layers, ArrowRight } from 'lucide-react';
import './DirectionalSelector.css';

export default function DirectionalSelector({ activeThemeId, onSelectTheme }) {
  const handleKeyDown = (e, index) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      const nextIndex = (index + 1) % directionalThemes.length;
      onSelectTheme(directionalThemes[nextIndex].id);
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      const prevIndex = (index - 1 + directionalThemes.length) % directionalThemes.length;
      onSelectTheme(directionalThemes[prevIndex].id);
    }
  };

  return (
    <div
      className="directional-selector-rail"
      role="tablist"
      aria-label="Future Directional Vectors"
    >
      <div className="directional-rail-header">
        <span className="rail-title-tag">
          <Layers size={11} style={{ color: 'var(--accent-cyan)' }} />
          <span>DIRECTIONAL AXES // 4 PILLARS</span>
        </span>
        <span className="rail-sub-tag">VECTOR MATRIX</span>
      </div>

      <div className="directional-rail-list">
        {directionalThemes.map((theme, idx) => {
          const isActive = theme.id === activeThemeId;

          return (
            <button
              key={theme.id}
              role="tab"
              id={`dir-tab-${theme.id}`}
              aria-selected={isActive}
              aria-controls={`dir-panel-${theme.id}`}
              tabIndex={isActive ? 0 : -1}
              className={`directional-tab-btn ${isActive ? 'active' : ''}`}
              onClick={() => onSelectTheme(theme.id)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              data-magnetic="true"
            >
              <div
                className="directional-tab-indicator"
                style={{ background: theme.accentColor }}
              />

              <div className="directional-tab-top">
                <span className="theme-key-badge">{theme.key} // {theme.label}</span>
                <span className="theme-status-tag">{theme.status}</span>
              </div>

              <h4 className="theme-tab-title">{theme.title}</h4>
              <p className="theme-tab-tagline">{theme.tagline}</p>

              <div className="directional-tab-action">
                <span className="action-txt">VIEW SPECIFICATION</span>
                <ArrowRight size={11} className="action-arrow" />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
