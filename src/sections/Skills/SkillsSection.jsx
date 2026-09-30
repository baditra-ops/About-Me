import React, { useState } from 'react';
import SkillsHeader from './SkillsHeader';
import CategoryFilter from './CategoryFilter';
import SystemConstellation from './SystemConstellation';
import SkillNodeDetail from './SkillNodeDetail';
import { ArrowRight, BookOpen } from 'lucide-react';
import './SkillsSection.css';

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedNodeId, setSelectedNodeId] = useState('nodejs');

  return (
    <section id="skills" className="skills-section" aria-label="Technical Arsenal and Engineering Architecture">
      <div className="container">
        {/* Section Header */}
        <SkillsHeader />

        {/* Category Filters */}
        <CategoryFilter
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        {/* Asymmetric Technical Arsenal Grid */}
        <div className="skills-architecture-layout">
          {/* Main Visual: Layered Technical Constellation & System Pipeline */}
          <div className="skills-constellation-col">
            <SystemConstellation
              activeCategory={activeCategory}
              selectedNodeId={selectedNodeId}
              onSelectNode={setSelectedNodeId}
            />
          </div>

          {/* Side Inspector: Factual Node Details & Connected Pathways */}
          <div className="skills-detail-col">
            <SkillNodeDetail
              selectedNodeId={selectedNodeId}
              onSelectNode={setSelectedNodeId}
            />
          </div>
        </div>

        {/* Exit Transition Conduit Toward Education Section */}
        <div className="skills-exit-conduit">
          <div className="skills-exit-meta">
            <BookOpen size={13} style={{ color: 'var(--accent-cyan)' }} />
            <span>CONTINUITY // STAGE 07 COMPLETE → TECHNICAL MATRIX & RUNTIMES COMPILED</span>
          </div>

          <a
            href="#education"
            className="skills-exit-action"
            data-magnetic="true"
            onClick={(e) => {
              e.preventDefault();
              const eduEl = document.getElementById('education');
              if (eduEl) eduEl.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span>PROCEED TO ACADEMIC FOUNDATIONS & EDUCATION</span>
            <ArrowRight size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}
