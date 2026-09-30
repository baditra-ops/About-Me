import React, { useState, useRef, useEffect, useCallback } from 'react';
import BuildingScene from './BuildingScene';
import ScrollProgress from './ScrollProgress';
import { Compass, ArrowDown, Radio } from 'lucide-react';
import './BuildingExperience.css';

export default function BuildingExperience() {
  const trackRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [stateIndex, setStateIndex] = useState(1);
  const [viewMode, setViewMode] = useState('perspective');
  const userModeOverride = useRef(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [pointer, setPointer] = useState({ x: 50, y: 50 });
  const [activeNode, setActiveNode] = useState(null);

  // Target tilt for lerping
  const targetTilt = useRef({ x: 0, y: 0 });
  const currentTilt = useRef({ x: 0, y: 0 });
  const animFrameId = useRef(null);

  // Smooth lerp loop for pointer 3D tilt
  useEffect(() => {
    const isTouch = window.matchMedia('(hover: none)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || prefersReducedMotion) return;

    const animateTilt = () => {
      // Damped spring/lerp interpolation (smoothing factor 0.1)
      currentTilt.current.x += (targetTilt.current.x - currentTilt.current.x) * 0.1;
      currentTilt.current.y += (targetTilt.current.y - currentTilt.current.y) * 0.1;

      setTilt({
        x: Number(currentTilt.current.x.toFixed(2)),
        y: Number(currentTilt.current.y.toFixed(2))
      });

      animFrameId.current = requestAnimationFrame(animateTilt);
    };

    animFrameId.current = requestAnimationFrame(animateTilt);
    return () => cancelAnimationFrame(animFrameId.current);
  }, []);

  // Pointer movement handler
  const handleMouseMove = useCallback((e) => {
    const isTouch = window.matchMedia('(hover: none)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || prefersReducedMotion) return;

    const { innerWidth, innerHeight } = window;
    const normX = (e.clientX / innerWidth) * 2 - 1;
    const normY = (e.clientY / innerHeight) * 2 - 1;

    // Subtle, controlled angles (-4.5deg to +4.5deg)
    targetTilt.current = {
      x: -normY * 4.2,
      y: normX * 5.5
    };

    setPointer({
      x: Math.round((e.clientX / innerWidth) * 100),
      y: Math.round((e.clientY / innerHeight) * 100)
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    targetTilt.current = { x: 0, y: 0 };
    setPointer({ x: 50, y: 50 });
  }, []);

  // Mode Selection handler
  const handleSelectViewMode = (modeId) => {
    setViewMode(modeId);
    userModeOverride.current = true;
    // Reset override after 8 seconds of scrolling
    setTimeout(() => {
      userModeOverride.current = false;
    }, 8000);
  };

  // Multi-state scroll calculation
  useEffect(() => {
    const handleScroll = () => {
      if (!trackRef.current) return;
      const rect = trackRef.current.getBoundingClientRect();
      const scrollableDist = rect.height - window.innerHeight;

      if (scrollableDist <= 0) return;

      const progress = Math.min(Math.max(-rect.top / scrollableDist, 0), 1);
      setScrollProgress(progress);

      // Determine the 4 scroll phases and auto-switch modes if user hasn't explicitly clicked a tab
      if (progress < 0.25) {
        setStateIndex(1); // State 1: Approach / Entry
        if (!userModeOverride.current) setViewMode('perspective');
      } else if (progress < 0.55) {
        setStateIndex(2); // State 2: Focal Scan / Tower Target
        if (!userModeOverride.current) setViewMode('tower');
      } else if (progress < 0.82) {
        setStateIndex(3); // State 3: Spatial Map / Campus Expansion
        if (!userModeOverride.current) setViewMode('blueprint');
      } else {
        setStateIndex(4); // State 4: Transition to About Me
        if (!userModeOverride.current) setViewMode('radar');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="experience" className="bhu-experience-track" ref={trackRef}>
      <div
        className="bhu-sticky-viewport"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Minimal High-Tech Telemetry HUD on Left */}
        <ScrollProgress progress={scrollProgress} stateIndex={stateIndex} />

        {/* Section Header */}
        <header className="bhu-section-header">
          <div className="bhu-header-left">
            <span className="bhu-pretitle-chip">
              <Radio size={12} className="telemetry-dot" />
              <span>THE HEART OF IIT BHU // CENTENNIAL ANCHOR</span>
            </span>
            <h2 className="bhu-section-title">THE HEART OF IIT BHU</h2>
            <p className="bhu-primary-statement">BUILT AROUND CURIOSITY.</p>
          </div>

          <div className="bhu-header-right">
            <span className="bhu-secondary-loc">
              <Compass size={12} style={{ display: 'inline', marginRight: '6px' }} />
              IIT BHU · VARANASI
            </span>
            <p className="bhu-philosophy-quote">
              "Where ideas, systems and people intersect."
            </p>
          </div>
        </header>

        {/* Central 3D Interactive Building Environment */}
        <div className="bhu-main-scene-container">
          <BuildingScene
            tilt={tilt}
            pointer={pointer}
            scrollProgress={scrollProgress}
            activeNodeId={activeNode?.id}
            onSelectNode={setActiveNode}
            viewMode={viewMode}
            onSelectViewMode={handleSelectViewMode}
          />
        </div>

        {/* Transition Gateway into Next Section (About Me) */}
        <footer className="bhu-transition-gateway">
          <div className="gateway-chip">
            <span>MODE: {viewMode.toUpperCase()} // ACTIVE FOCUS: {activeNode ? activeNode.title.toUpperCase() : 'CENTENNIAL CLOCK TOWER'}</span>
          </div>

          <a
            href="#about"
            className="gateway-next-prompt"
            data-magnetic="true"
            onClick={(e) => {
              e.preventDefault();
              const aboutEl = document.getElementById('about');
              if (aboutEl) aboutEl.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span>GATEWAY TO BADITRA'S ODYSSEY // PROCEED TO ABOUT ME</span>
            <ArrowDown size={14} className="gateway-pulse-arrow" />
          </a>
        </footer>
      </div>
    </section>
  );
}
