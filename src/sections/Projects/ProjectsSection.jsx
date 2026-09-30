import React, { useState } from 'react';
import { personalInfo } from '../../data/personalInfo';
import ProjectsHeader from './ProjectsHeader';
import ProjectSelector from './ProjectSelector';
import ProjectShowcase from './ProjectShowcase';
import { ArrowRight, Shield } from 'lucide-react';
import './ProjectsSection.css';

export default function ProjectsSection() {
  const { projects } = personalInfo;
  const [activeProjectId, setActiveProjectId] = useState(projects[0]?.id || 'videotube');

  const activeProject = projects.find((p) => p.id === activeProjectId) || projects[0];

  return (
    <section id="projects" className="projects-section" aria-label="Engineered Systems & Projects">
      <div className="container">
        {/* Section Header: Identity & Continuity */}
        <ProjectsHeader />

        {/* Asymmetric Editorial Project Explorer */}
        <div className="projects-editorial-layout">
          {/* Left Column: Repository Navigation Rail */}
          <aside className="projects-nav-column">
            <ProjectSelector
              projects={projects}
              activeProjectId={activeProjectId}
              onSelectProject={setActiveProjectId}
            />
          </aside>

          {/* Right Column: Dominant Project Showcase & Live Architectural Canvas */}
          <div className="projects-showcase-column">
            <ProjectShowcase key={activeProject.id} project={activeProject} />
          </div>
        </div>

        {/* Exit Transition Conduit Toward Skills & Technical Matrix */}
        <div className="projects-exit-conduit">
          <div className="projects-exit-meta">
            <Shield size={13} style={{ color: 'var(--accent-emerald)' }} />
            <span>CONTINUITY // STAGE 06 COMPLETE → ARCHITECTURE & EXPERIMENTS VERIFIED</span>
          </div>

          <a
            href="#skills"
            className="projects-exit-action"
            data-magnetic="true"
            onClick={(e) => {
              e.preventDefault();
              const skillsEl = document.getElementById('skills');
              if (skillsEl) skillsEl.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span>PROCEED TO TECHNICAL MATRIX & SKILLS</span>
            <ArrowRight size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}
