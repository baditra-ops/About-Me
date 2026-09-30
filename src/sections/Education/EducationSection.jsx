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

        {/* Exit Transition Conduit Toward What's Next */}
        <div className="education-exit-conduit">
          <div className="education-exit-meta">
            <Terminal size={13} style={{ color: 'var(--accent-cyan)' }} />
            <span>CONTINUITY // STAGE 08 COMPLETE → ACADEMIC RIGOR & SYSTEMS ROADMAP VERIFIED</span>
          </div>

          <a
            href="#whats-next"
            className="education-exit-action"
            data-magnetic="true"
            onClick={(e) => {
              e.preventDefault();
              const nextEl = document.getElementById('whats-next');
              if (nextEl) nextEl.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span>PROCEED TO THE NEXT NODE & WHAT'S NEXT</span>
            <ArrowRight size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}
