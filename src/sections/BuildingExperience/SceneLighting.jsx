import React from 'react';
import './BuildingScene.css';

export default function SceneLighting({ pointer = { x: 50, y: 50 }, progress = 0 }) {
  // Tower illumination intensifies in State 2 (progress 0.25 - 0.65)
  const towerGlowOpacity = Math.max(0.25, Math.sin(progress * Math.PI) * 0.85);

  return (
    <div className="scene-lighting-system" aria-hidden="true">
      {/* Dynamic Cursor Spotlight Layer */}
      <div
        className="lighting-cursor-spotlight"
        style={{
          background: `radial-gradient(circle 380px at ${pointer.x}% ${pointer.y}%, rgba(56, 189, 248, 0.12) 0%, transparent 70%)`
        }}
      />

      {/* Clock Tower Focused Architectural Beacon Ray */}
      <div
        className="lighting-tower-halo"
        style={{
          opacity: towerGlowOpacity,
          transform: `scale(${1 + progress * 0.15})`
        }}
      />

      {/* Atmospheric Horizon Gradient */}
      <div className="lighting-horizon-veil" />

      {/* Deep Dark Perimeter Vignette */}
      <div className="lighting-perimeter-vignette" />
    </div>
  );
}
