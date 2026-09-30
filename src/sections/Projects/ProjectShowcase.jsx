import React, { useRef, useState } from 'react';
import ProjectSystemVisual from './ProjectSystemVisual';
import { ExternalLink, Terminal, ArrowUpRight, Cpu, Server, CheckCircle2 } from 'lucide-react';
import './ProjectShowcase.css';

function GithubIcon({ size = 15 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export default function ProjectShowcase({ project }) {
  const containerRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    // Disable tilt on small screens or reduced-motion
    if (window.innerWidth < 992) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Subtle tilt: max ±3 degrees
    const rotateY = ((x / rect.width) - 0.5) * 4;
    const rotateX = -((y / rect.height) - 0.5) * 4;

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div
      ref={containerRef}
      className={`project-showcase-panel ${isHovered ? 'hovered' : ''}`}
      role="tabpanel"
      id={`panel-${project.id}`}
      aria-labelledby={`tab-${project.id}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      }}
    >
      {/* Visual Canvas Area */}
      <div className="showcase-visual-wrapper">
        <ProjectSystemVisual project={project} />
      </div>

      {/* Editorial Specification Matrix */}
      <div className="showcase-details-card">
        {/* Top Header Row */}
        <div className="details-header-row">
          <div className="meta-identity">
            <span className="project-index-code">{project.num} // SPECIFICATION</span>
            <span className="project-category-badge">{project.category}</span>
          </div>
          <div className="meta-provenance">
            <span className="provenance-pill">
              <CheckCircle2 size={11} className="provenance-icon" />
              <span>{project.badge}</span>
            </span>
          </div>
        </div>

        {/* Project Title & Tagline */}
        <div className="details-title-block">
          <h3 className="showcase-project-title">{project.title}</h3>
          <p className="showcase-project-tagline">{project.tagline}</p>
        </div>

        {/* Narrative Description */}
        <p className="showcase-project-description">{project.description}</p>

        {/* Backend Emphasis Sector */}
        <div className="showcase-backend-section">
          <div className="sub-label-row">
            <Server size={12} style={{ color: 'var(--accent-cyan)' }} />
            <span className="sub-section-title">BACKEND & CONCURRENCY FOCUS</span>
          </div>
          <div className="backend-chips-grid">
            {project.backendFocus.map((focus) => (
              <span key={focus} className="backend-chip">
                <span className="chip-indicator" />
                <span>{focus}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Technology Stack Grid */}
        <div className="showcase-stack-section">
          <div className="sub-label-row">
            <Cpu size={12} style={{ color: 'var(--accent-emerald)' }} />
            <span className="sub-section-title">ENGINEERING STACK</span>
          </div>
          <div className="tech-tags-list">
            {project.techStack.map((tech) => (
              <span key={tech} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Link Dispatch Bar */}
        <div className="showcase-actions-bar">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn action-code"
              data-magnetic="true"
              aria-label={`View ${project.title} Source Code on GitHub`}
            >
              <GithubIcon size={15} />
              <span>VIEW CODE</span>
              <ArrowUpRight size={14} className="action-arrow" />
            </a>
          )}

          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn action-live"
              data-magnetic="true"
              aria-label={`Open ${project.title} Live Application`}
            >
              <ExternalLink size={15} />
              <span>LIVE DEMO</span>
              <ArrowUpRight size={14} className="action-arrow" />
            </a>
          )}

          {project.links.api && (
            <a
              href={project.links.api}
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn action-api"
              data-magnetic="true"
              aria-label={`View ${project.title} Backend API`}
            >
              <Terminal size={15} />
              <span>API SERVICE</span>
              <ArrowUpRight size={14} className="action-arrow" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
