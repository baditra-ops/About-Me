import React from 'react';
import './ParallaxLayers.css';

export default function ParallaxLayers({ tilt = { x: 0, y: 0 }, scrollProgress = 0 }) {
  // Parallax translation factors for spatial depth
  const bgShiftX = tilt.y * 1.2;
  const bgShiftY = -tilt.x * 1.0 + (scrollProgress - 0.5) * -20;

  const midShiftX = tilt.y * 2.0;
  const midShiftY = -tilt.x * 1.8 + (scrollProgress - 0.5) * -35;

  const fgShiftX = tilt.y * 3.4;
  const fgShiftY = -tilt.x * 3.0 + (scrollProgress - 0.5) * -60;

  return (
    <div className="parallax-layer-group" aria-hidden="true">
      {/* 1. Background Atmospheric Blueprint Layer (Slowest) */}
      <div
        className="parallax-bg-layer"
        style={{
          transform: `translate3d(${bgShiftX}px, ${bgShiftY}px, -80px)`
        }}
      >
        <div className="architectural-blueprint-grid" />
        <div className="blueprint-coordinate-tags">
          <span>CAMPUS COORD // BHU-VN-01</span>
          <span>ELEVATION: 80.4M MSL</span>
          <span>GRID FREQUENCY: 48PX</span>
        </div>
      </div>

      {/* 2. Midground Environmental Horizon Layer (Intermediate) */}
      <div
        className="parallax-mid-layer"
        style={{
          transform: `translate3d(${midShiftX}px, ${midShiftY}px, -30px)`
        }}
      >
        <div className="midground-depth-contour" />
      </div>

      {/* 3. Foreground Architectural Datum Layer (Fastest, High Parallax) */}
      <div
        className="parallax-fg-layer"
        style={{
          transform: `translate3d(${fgShiftX}px, ${fgShiftY}px, 60px)`
        }}
      >
        <div className="fg-datum-lines">
          <div className="datum-h-line" />
          <div className="datum-v-line" />
          <div className="datum-marker-pill">AXIS 01 · TOWER ALIGNMENT</div>
        </div>
      </div>
    </div>
  );
}
