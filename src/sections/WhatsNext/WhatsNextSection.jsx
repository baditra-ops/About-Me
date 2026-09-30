import React, { useState } from 'react';
import WhatsNextHeader from './WhatsNextHeader';
import CentralNextNode from './CentralNextNode';
import DirectionalSelector from './DirectionalSelector';
import DirectionalDetailCard from './DirectionalDetailCard';
import { ArrowRight, Terminal } from 'lucide-react';
import './WhatsNextSection.css';

export default function WhatsNextSection() {
  const [activeThemeId, setActiveThemeId] = useState('build');

  return (
    <section id="whats-next" className="whats-next-section" aria-label="What's Next and Future Direction">
      <div className="container">
        {/* Section Header */}
        <WhatsNextHeader />

        {/* Asymmetric Directional Layout */}
        <div className="whats-next-editorial-layout">
          {/* Left Column: Directional Theme Selectors */}
          <aside className="whats-next-nav-col">
            <DirectionalSelector
              activeThemeId={activeThemeId}
              onSelectTheme={setActiveThemeId}
            />
          </aside>

          {/* Right Column: Central Next Node Visual & Deep Dive Specification */}
          <div className="whats-next-showcase-col">
            <CentralNextNode
              activeThemeId={activeThemeId}
              onSelectTheme={setActiveThemeId}
            />
            <DirectionalDetailCard activeThemeId={activeThemeId} />
          </div>
        </div>

        {/* Cinematic Transition Conduit Toward Contact Protocol */}
        <div className="whats-next-exit-conduit">
          <div className="whats-next-exit-meta">
            <Terminal size={13} style={{ color: 'var(--accent-cyan)' }} />
            <span>CONTINUITY // STAGE 09 COMPLETE → THE PATH REMAINS OPEN & EXPANDING</span>
          </div>

          <a
            href="#contact"
            className="whats-next-exit-action"
            data-magnetic="true"
            onClick={(e) => {
              e.preventDefault();
              const contactEl = document.getElementById('contact');
              if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span>PROCEED TO TERMINAL & LET'S CONNECT</span>
            <ArrowRight size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}
