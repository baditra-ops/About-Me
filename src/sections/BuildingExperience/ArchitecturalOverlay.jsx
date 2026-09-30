import React from 'react';
import './ArchitecturalOverlay.css';

export default function ArchitecturalOverlay({ scrollProgress = 0, tilt = { x: 0, y: 0 } }) {
  // Laser scanline follows scroll progress across the building
  const scanTopPct = 15 + scrollProgress * 70;

  // Compass rotates subtly with horizontal tilt
  const compassAngle = tilt.y * 3;

  return (
    <div className="arch-overlay-container" aria-hidden="true">
      {/* Precision Corner Brackets */}
      <span className="arch-bracket bracket-tl" />
      <span className="arch-bracket bracket-tr" />
      <span className="arch-bracket bracket-bl" />
      <span className="arch-bracket bracket-br" />

      {/* Futuristic SVG Architectural Vector Overlay */}
      <svg className="arch-vector-svg" viewBox="0 0 1000 600" preserveAspectRatio="none">
        <defs>
          <linearGradient id="vectorLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Diagonal architectural framing & alignment vectors */}
        <line x1="50" y1="50" x2="200" y2="50" stroke="rgba(56, 189, 248, 0.2)" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="50" y1="50" x2="50" y2="200" stroke="rgba(56, 189, 248, 0.2)" strokeWidth="1" strokeDasharray="4 4" />

        {/* Vector line from clock tower to central quadrant */}
        <line
          x1="630"
          y1="145"
          x2="560"
          y2="420"
          stroke="url(#vectorLineGrad)"
          strokeWidth="1.2"
          strokeDasharray="6 4"
        />

        {/* Vector line from clock tower across campus axis */}
        <line
          x1="630"
          y1="145"
          x2="280"
          y2="380"
          stroke="url(#vectorLineGrad)"
          strokeWidth="1"
          strokeDasharray="4 6"
        />

        {/* Focal crosshair point over Tower */}
        <circle cx="630" cy="145" r="4" fill="#38bdf8" />
        <circle cx="630" cy="145" r="16" fill="none" stroke="#38bdf8" strokeWidth="0.8" strokeDasharray="3 3" />
      </svg>

      {/* Clock Tower Targeting Reticle */}
      <div className="tower-focal-reticle">
        <div className="reticle-ring-outer" />
        <div className="reticle-ring-inner" />
        <div className="reticle-crosshair" />
        <div className="reticle-crosshair vert" />
        <div className="reticle-label">FOCAL POINT // CLOCK TOWER</div>
      </div>

      {/* Campus Compass HUD */}
      <div className="arch-compass-hud">
        <div className="compass-dial" style={{ transform: `rotate(${compassAngle}deg)` }} />
        <span>IIT BHU // 25.2677° N · 82.9913° E</span>
      </div>

      {/* Laser Scanline */}
      <div
        className="arch-scanline-laser"
        style={{ top: `${scanTopPct}%` }}
      />

      {/* Technical Readout */}
      <div className="map-border-readout">
        <span className="readout-tag">ARCHITECTURAL NODE 01</span>
        <span>VARANASI // CENTENNIAL QUAD</span>
      </div>
    </div>
  );
}
