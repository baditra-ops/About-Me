import React from 'react';
import AboutHeader from './AboutHeader';
import ProfileComposition from './ProfileComposition';
import DeveloperIdentity from './DeveloperIdentity';
import SystemVisualization from './SystemVisualization';
import Interests from './Interests';
import { ArrowRight, Layers } from 'lucide-react';
import './AboutSection.css';

export default function AboutSection() {
  return (
    <section id="about" className="about-section" aria-label="About Baditra Choudhury">
      <div className="container">
        {/* Header & Editorial Bridge */}
        <AboutHeader />

        {/* Asymmetric Dual Column Layout */}
        <div className="about-editorial-grid">
          {/* Left Column: Architectural Portrait & Identity Plate */}
          <div className="about-col-left">
            <ProfileComposition />
          </div>

          {/* Right Column: Engineering Philosophy, System Pipeline & Interests */}
          <div className="about-col-right">
            <DeveloperIdentity />
            <SystemVisualization />
            <Interests />
          </div>
        </div>

        {/* Exit Transition Conduit Toward Projects */}
        <div className="about-exit-conduit">
          <div className="exit-meta">
            <Layers size={13} style={{ color: 'var(--accent-cyan)' }} />
            <span>CONTINUITY // STAGE 03 COMPLETE → PREPARED FOR ENGINEERING PROJECTS</span>
          </div>

          <a
            href="#projects"
            className="exit-action-link"
            data-magnetic="true"
            onClick={(e) => {
              e.preventDefault();
              const projectsEl = document.getElementById('projects');
              if (projectsEl) projectsEl.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span>PROCEED TO SELECTED WORKS</span>
            <ArrowRight size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}
