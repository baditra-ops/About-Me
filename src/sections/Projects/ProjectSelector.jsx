import React from 'react';
import { Layers, Terminal, Server, Shield, Activity } from 'lucide-react';
import './ProjectSelector.css';

export default function ProjectSelector({ projects, activeProjectId, onSelectProject }) {
  const getProjectIcon = (id) => {
    switch (id) {
      case 'videotube':
        return <Server size={14} />;
      case 'ticketing-system':
        return <Activity size={14} />;
      case 'smartinspect':
        return <Shield size={14} />;
      default:
        return <Terminal size={14} />;
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      const nextIndex = (index + 1) % projects.length;
      onSelectProject(projects[nextIndex].id);
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      const prevIndex = (index - 1 + projects.length) % projects.length;
      onSelectProject(projects[prevIndex].id);
    } else if (e.key === 'Home') {
      e.preventDefault();
      onSelectProject(projects[0].id);
    } else if (e.key === 'End') {
      e.preventDefault();
      onSelectProject(projects[projects.length - 1].id);
    }
  };

  return (
    <div
      className="project-selector-rail"
      role="tablist"
      aria-label="Engineered Systems Project Selector"
    >
      <div className="selector-rail-header">
        <span className="rail-label">
          <Layers size={11} style={{ color: 'var(--accent-cyan)' }} />
          <span>INDEX // REPOSITORY</span>
        </span>
        <span className="rail-counter">{projects.length} SYSTEMS</span>
      </div>

      <div className="selector-items-list">
        {projects.map((project, idx) => {
          const isActive = project.id === activeProjectId;
          return (
            <button
              key={project.id}
              role="tab"
              id={`tab-${project.id}`}
              aria-controls={`panel-${project.id}`}
              aria-selected={isActive}
              tabIndex={isActive ? 0 : -1}
              className={`project-tab-btn ${isActive ? 'active' : ''}`}
              onClick={() => onSelectProject(project.id)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              data-magnetic="true"
            >
              {/* Active Indicator Bar */}
              <div className="tab-indicator" />

              <div className="tab-top-row">
                <span className="tab-num">{project.num}</span>
                <span className="tab-badge">{project.badge}</span>
              </div>

              <div className="tab-title-row">
                <span className="tab-icon">{getProjectIcon(project.id)}</span>
                <span className="tab-title">{project.title}</span>
              </div>

              <div className="tab-category">{project.category}</div>

              {/* Status pill on active */}
              {isActive && (
                <div className="tab-status-ping">
                  <span className="status-dot-ping" />
                  <span>ACTIVE INSPECTION</span>
                </div>
              )}
            </button>
          );
        })}
      </div>

      <div className="selector-rail-footer">
        <span className="nav-hint">
          <kbd>↑</kbd> <kbd>↓</kbd> ARROW KEYS TO NAVIGATE
        </span>
      </div>
    </div>
  );
}
