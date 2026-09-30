import React, { useState } from 'react';
import EducationHeader from './EducationHeader';
import LearningMap from './LearningMap';
import EducationNodeCard from './EducationNodeCard';
import CurrentExploration from './CurrentExploration';
import { ArrowRight, Terminal } from 'lucide-react';
import './EducationSection.css';

export default function EducationSection() {
  const [selectedMilestoneId, setSelectedMilestoneId] = useState('college');

  return (
    <section id="education" className="education-section" aria-label="Education and Learning Journey">
      <div className="container">
        {/* Section Header */}
        <EducationHeader />

        {/* Asymmetric Learning Journey Grid */}
        <div className="education-editorial-grid">
          {/* Left Column: Interactive Academic Pathway */}
          <div className="education-path-column">
            <LearningMap
              selectedMilestoneId={selectedMilestoneId}
              onSelectMilestone={setSelectedMilestoneId}
            />
          </div>

          {/* Right Column: Active Node Deep-Dive & Continuous Frontiers */}
          <div className="education-details-column">
            <EducationNodeCard selectedMilestoneId={selectedMilestoneId} />
            <CurrentExploration />
          </div>
        </div>

        {/* Exit Transition Conduit Toward What's Next / Contact */}
        <div className="education-exit-conduit">
          <div className="education-exit-meta">
            <Terminal size={13} style={{ color: 'var(--accent-cyan)' }} />
            <span>CONTINUITY // STAGE 08 COMPLETE → ACADEMIC RIGOR & SYSTEMS ROADMAP VERIFIED</span>
          </div>

          <a
            href="#contact"
            className="education-exit-action"
            data-magnetic="true"
            onClick={(e) => {
              e.preventDefault();
              const contactEl = document.getElementById('contact');
              if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span>PROCEED TO TERMINAL & WHAT'S NEXT</span>
            <ArrowRight size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}
