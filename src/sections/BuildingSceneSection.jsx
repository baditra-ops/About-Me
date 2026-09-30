import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Compass, Eye, Radio, Layers } from 'lucide-react';
import bhuImage from '../assets/iit-bhu-main.webp';
import './BuildingSceneSection.css';

export default function BuildingSceneSection() {
  const containerRef = useRef(null);
  const stageRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [activeBeacon, setActiveBeacon] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Mouse-responsive 3D tilt
  const handleMouseMove = useCallback((e) => {
    // Check reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Normalized coordinates (-1 to 1)
    const normX = (x / rect.width) * 2 - 1;
    const normY = (y / rect.height) * 2 - 1;

    // Subtle, elegant rotation angles (Max 7.5 deg)
    const rotateY = normX * 7.5;
    const rotateX = -normY * 6;

    setTilt({ x: rotateX, y: rotateY });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
  }, []);

  // Scroll-aware architecture for Prompt 2 transformations
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress of section through the viewport
      const totalDist = windowHeight + rect.height;
      const currentDist = windowHeight - rect.top;
      const progress = Math.min(Math.max(currentDist / totalDist, 0), 1);

      setScrollProgress(progress);
      if (containerRef.current) {
        containerRef.current.style.setProperty('--scroll-progress', progress.toFixed(3));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="experience" className="building-scene-section" ref={containerRef}>
      <div className="container">
        {/* Section Header */}
        <div className="scene-header">
          <div className="scene-pretitle">
            <Radio size={14} className="telemetry-dot" />
            <span>CAMPUS GEOMETRY // CORE ANCHOR</span>
          </div>

          <div className="scene-title-row">
            <h2 className="scene-heading">IIT BHU Main Landmark</h2>

            <div className="scene-telemetry">
              <span className="scene-telemetry-item">
                <Compass size={13} style={{ color: 'var(--accent-cyan)' }} />
                <span>25°16′05.4″N 82°59′31.6″E</span>
              </span>
              <span className="scene-telemetry-item">
                <Layers size={13} style={{ color: 'var(--accent-emerald)' }} />
                <span>ELEVATION: 80M // SECTOR 01</span>
              </span>
            </div>
          </div>
        </div>

        {/* 3D Interactive Viewport Container */}
        <div
          className="scene-viewport"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          role="region"
          aria-label="Interactive 3D view of IIT BHU Main Building"
        >
          {/* Main 3D Transformation Stage */}
          <div
            className="scene-stage"
            ref={stageRef}
            style={{
              transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            }}
          >
            {/* Outer Frame with Datum Precision Brackets */}
            <div className="scene-frame">
              <span className="corner-bracket corner-tl" />
              <span className="corner-bracket corner-tr" />
              <span className="corner-bracket corner-bl" />
              <span className="corner-bracket corner-br" />

              {/* Blueprint Grid Layer */}
              <div className="stage-backdrop" />

              {/* Radar Circle centering on tower */}
              <div className="radar-ring" />

              {/* Building Photographic Core Layer with cinematic vignette */}
              <div className="building-layer">
                <div className="building-image-wrapper">
                  <img
                    src={bhuImage}
                    alt="IIT BHU Main Building with Clock Tower"
                    className="building-image"
                    loading="lazy"
                  />
                  <div className="building-vignette" />
                  <div className="building-scanline" />
                </div>
              </div>

              {/* 3D Floating Telemetry Beacons */}
              <div className="telemetry-beacons">
                {/* Clock Tower Beacon */}
                <div
                  className="beacon-node beacon-tower"
                  onMouseEnter={() => setActiveBeacon('tower')}
                  onMouseLeave={() => setActiveBeacon(null)}
                  tabIndex={0}
                  aria-label="Clock Tower Landmark"
                >
                  <div className="beacon-pulse-core">
                    <span className="beacon-pulse-ring" />
                  </div>
                  <div className="beacon-card">
                    <span className="beacon-tag">NODE 01 // LANDMARK</span>
                    <span className="beacon-title">Clock Tower Apex</span>
                  </div>
                </div>

                {/* Central Entrance Beacon */}
                <div
                  className="beacon-node beacon-entrance"
                  onMouseEnter={() => setActiveBeacon('entrance')}
                  onMouseLeave={() => setActiveBeacon(null)}
                  tabIndex={0}
                  aria-label="Centennial Entrance Quad"
                >
                  <div className="beacon-pulse-core">
                    <span className="beacon-pulse-ring" />
                  </div>
                  <div className="beacon-card">
                    <span className="beacon-tag">NODE 02 // QUADRANGLE</span>
                    <span className="beacon-title">Centennial Heritage Quad</span>
                  </div>
                </div>

                {/* Campus Sector Beacon */}
                <div
                  className="beacon-node beacon-lawn"
                  onMouseEnter={() => setActiveBeacon('lawn')}
                  onMouseLeave={() => setActiveBeacon(null)}
                  tabIndex={0}
                  aria-label="Varanasi Campus Grounds"
                >
                  <div className="beacon-pulse-core">
                    <span className="beacon-pulse-ring" />
                  </div>
                  <div className="beacon-card">
                    <span className="beacon-tag">NODE 03 // GROUNDS</span>
                    <span className="beacon-title">IIT BHU Main Axis</span>
                  </div>
                </div>
              </div>

              {/* Bottom HUD Bar */}
              <div className="scene-hud-bottom">
                <span className="hud-chip">
                  {activeBeacon ? `FOCUS: NODE ${activeBeacon.toUpperCase()} ACTIVE` : 'SCENE ANCHOR // PREPARED FOR DYNAMIC MORPH'}
                </span>
                <span className="hud-hint">
                  <Eye size={12} />
                  <span>{scrollProgress > 0 ? `DEPTH TRACK: ${(scrollProgress * 100).toFixed(0)}%` : 'HOVER TO ENGAGE 3D PERSPECTIVE'}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
