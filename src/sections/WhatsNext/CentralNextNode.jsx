import React, { useRef, useState } from 'react';
import { directionalThemes } from '../../data/whatsNextData';
import { Crosshair, Navigation, Activity } from 'lucide-react';
import './CentralNextNode.css';

export default function CentralNextNode({ activeThemeId, onSelectTheme }) {
  const containerRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const currentTheme = directionalThemes.find((t) => t.id === activeThemeId) || directionalThemes[0];

  const handleMouseMove = (e) => {
    if (window.innerWidth < 992) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Subtle 3D perspective tilt
    const rotateY = ((x / rect.width) - 0.5) * 3;
    const rotateX = -((y / rect.height) - 0.5) * 3;

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      className="central-next-node-canvas"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
      }}
    >
      {/* Top Telemetry Strip */}
      <div className="next-canvas-top-strip">
        <div className="canvas-meta-left">
          <span className="canvas-beacon-dot" />
          <span className="canvas-title-code">
            NEXUS // NEXT_VECTOR :: {currentTheme.telemetry}
          </span>
        </div>
        <div className="canvas-meta-right">
          <span className="canvas-mode-pill">TRAJECTORY MATRIX</span>
          <span className="canvas-grid-coords">ORBIT [360°]</span>
        </div>
      </div>

      {/* Main Architectural Visual Area */}
      <div className="next-canvas-body">
        {/* Architectural Background Grid */}
        <div className="next-canvas-grid" />
        <div className="next-canvas-radial" />

        {/* SVG Orbital Geometry & Radiating Conduit Vectors */}
        <svg
          className="orbital-vector-svg"
          viewBox="0 0 540 380"
          fill="none"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <radialGradient id="centralPulseGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
              <stop offset="60%" stopColor="#38bdf8" stopOpacity="0.08" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="vectorBeamCyan" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="vectorBeamEmerald" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Concentric Orbital Rings */}
          <circle
            cx="270"
            cy="190"
            r="60"
            stroke="rgba(56, 189, 248, 0.25)"
            strokeWidth="1"
            strokeDasharray="3 3"
            className="orbital-ring spin-slow"
          />
          <circle
            cx="270"
            cy="190"
            r="115"
            stroke="rgba(56, 189, 248, 0.15)"
            strokeWidth="1"
            strokeDasharray="6 4"
            className="orbital-ring spin-reverse"
          />
          <circle
            cx="270"
            cy="190"
            r="165"
            stroke="rgba(255, 255, 255, 0.06)"
            strokeWidth="1"
            strokeDasharray="2 4"
          />

          {/* Crosshair Cardinal Grid Lines */}
          <line x1="270" y1="20" x2="270" y2="360" stroke="rgba(56, 189, 248, 0.08)" strokeWidth="1" />
          <line x1="60" y1="190" x2="480" y2="190" stroke="rgba(56, 189, 248, 0.08)" strokeWidth="1" />

          {/* Radiating Directional Ray Vectors to Cardinal Waypoints */}
          {/* North Vector -> BUILD (Top Left) */}
          <line
            x1="270"
            y1="190"
            x2="110"
            y2="75"
            stroke={activeThemeId === 'build' ? '#38bdf8' : 'rgba(56, 189, 248, 0.2)'}
            strokeWidth={activeThemeId === 'build' ? '2' : '1'}
            strokeDasharray={activeThemeId === 'build' ? '4 2' : '2 3'}
            className={activeThemeId === 'build' ? 'active-beam' : ''}
          />
          {/* East Vector -> LEARN (Top Right) */}
          <line
            x1="270"
            y1="190"
            x2="430"
            y2="75"
            stroke={activeThemeId === 'learn' ? '#10b981' : 'rgba(16, 185, 129, 0.2)'}
            strokeWidth={activeThemeId === 'learn' ? '2' : '1'}
            strokeDasharray={activeThemeId === 'learn' ? '4 2' : '2 3'}
            className={activeThemeId === 'learn' ? 'active-beam' : ''}
          />
          {/* South-West Vector -> EXPLORE (Bottom Left) */}
          <line
            x1="270"
            y1="190"
            x2="110"
            y2="305"
            stroke={activeThemeId === 'explore' ? '#f59e0b' : 'rgba(245, 158, 11, 0.2)'}
            strokeWidth={activeThemeId === 'explore' ? '2' : '1'}
            strokeDasharray={activeThemeId === 'explore' ? '4 2' : '2 3'}
            className={activeThemeId === 'explore' ? 'active-beam' : ''}
          />
          {/* South-East Vector -> CONTRIBUTE (Bottom Right) */}
          <line
            x1="270"
            y1="190"
            x2="430"
            y2="305"
            stroke={activeThemeId === 'contribute' ? '#e11d48' : 'rgba(225, 29, 72, 0.2)'}
            strokeWidth={activeThemeId === 'contribute' ? '2' : '1'}
            strokeDasharray={activeThemeId === 'contribute' ? '4 2' : '2 3'}
            className={activeThemeId === 'contribute' ? 'active-beam' : ''}
          />

          {/* Central Radar Sweep Glow */}
          <circle cx="270" cy="190" r="42" fill="url(#centralPulseGrad)" />
        </svg>

        {/* Central Core Node Marker */}
        <div className="central-nexus-point">
          <div className="nexus-core-ring">
            <Crosshair size={18} className="nexus-icon" />
            <span className="nexus-status-ping" />
          </div>
          <div className="nexus-label-block">
            <span className="nexus-title">THE NEXT NODE</span>
            <span className="nexus-coords">STG-06 // VECTOR ZERO</span>
          </div>
        </div>

        {/* Directional Waypoint Anchors on Canvas */}
        <div className="waypoint-anchors-container">
          {/* Waypoint 1: BUILD (Top Left) */}
          <button
            type="button"
            className={`canvas-waypoint-btn wp-build ${activeThemeId === 'build' ? 'active' : ''}`}
            onClick={() => onSelectTheme('build')}
            data-magnetic="true"
            aria-label="Directional Theme: Build"
          >
            <span className="wp-dot" />
            <span className="wp-code">01</span>
            <span className="wp-label">BUILD</span>
          </button>

          {/* Waypoint 2: LEARN (Top Right) */}
          <button
            type="button"
            className={`canvas-waypoint-btn wp-learn ${activeThemeId === 'learn' ? 'active' : ''}`}
            onClick={() => onSelectTheme('learn')}
            data-magnetic="true"
            aria-label="Directional Theme: Learn"
          >
            <span className="wp-dot" />
            <span className="wp-code">02</span>
            <span className="wp-label">LEARN</span>
          </button>

          {/* Waypoint 3: EXPLORE (Bottom Left) */}
          <button
            type="button"
            className={`canvas-waypoint-btn wp-explore ${activeThemeId === 'explore' ? 'active' : ''}`}
            onClick={() => onSelectTheme('explore')}
            data-magnetic="true"
            aria-label="Directional Theme: Explore"
          >
            <span className="wp-dot" />
            <span className="wp-code">03</span>
            <span className="wp-label">EXPLORE</span>
          </button>

          {/* Waypoint 4: CONTRIBUTE (Bottom Right) */}
          <button
            type="button"
            className={`canvas-waypoint-btn wp-contribute ${activeThemeId === 'contribute' ? 'active' : ''}`}
            onClick={() => onSelectTheme('contribute')}
            data-magnetic="true"
            aria-label="Directional Theme: Contribute"
          >
            <span className="wp-dot" />
            <span className="wp-code">04</span>
            <span className="wp-label">CONTRIBUTE</span>
          </button>
        </div>

        {/* Floating Active Trajectory Readout */}
        <div className="canvas-trajectory-tray">
          <span className="tray-bullet" style={{ background: currentTheme.accentColor }} />
          <span className="tray-text">ACTIVE VECTOR: {currentTheme.title.toUpperCase()}</span>
          <span className="tray-div">/</span>
          <span className="tray-status">{currentTheme.status}</span>
        </div>
      </div>

      {/* Bottom Telemetry Footer */}
      <div className="next-canvas-footer">
        <div className="footer-stat">
          <Activity size={12} style={{ color: 'var(--accent-cyan)' }} />
          <span className="stat-txt">DIRECTION: FORWARD TRAJECTORY</span>
        </div>
        <div className="footer-stat">
          <Navigation size={12} style={{ color: 'var(--accent-emerald)' }} />
          <span className="stat-txt">IIT BHU SELECTION CONTEXT</span>
        </div>
      </div>
    </div>
  );
}
