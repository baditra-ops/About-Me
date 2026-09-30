import React from 'react';
import bhuImage from '../../assets/iit-bhu-main.webp';
import ParallaxLayers from './ParallaxLayers';
import ArchitecturalOverlay from './ArchitecturalOverlay';
import MapMarkers from './MapMarkers';
import SceneLighting from './SceneLighting';
import { Eye, Layers, Compass, Crosshair } from 'lucide-react';
import './BuildingScene.css';

const VIEW_MODES = [
  { id: 'perspective', label: '3D PERSPECTIVE', icon: Eye },
  { id: 'blueprint', label: 'BLUEPRINT X-RAY', icon: Layers },
  { id: 'tower', label: 'TOWER ZOOM', icon: Crosshair },
  { id: 'radar', label: 'CAMPUS ORTHO', icon: Compass }
];

export default function BuildingScene({
  tilt = { x: 0, y: 0 },
  pointer = { x: 50, y: 50 },
  scrollProgress = 0,
  activeNodeId = null,
  onSelectNode = null,
  viewMode = 'perspective',
  onSelectViewMode = null
}) {
  // Balanced scaling: keeps the picture elegant and never huge
  const baseScale = 0.94 + scrollProgress * 0.08;
  const translateY = (scrollProgress - 0.5) * -20;

  return (
    <div className="building-scene-stage-wrap" role="region" aria-label="3D IIT BHU Building Experience">
      {/* Interactive Architectural Viewport Mode Bar */}
      <div className="scene-mode-selector-bar" role="tablist" aria-label="Camera and Blueprint Modes">
        {VIEW_MODES.map((mode) => {
          const Icon = mode.icon;
          const isActive = viewMode === mode.id;
          return (
            <button
              key={mode.id}
              role="tab"
              aria-selected={isActive}
              className={`mode-tab-btn ${isActive ? 'active' : ''}`}
              onClick={() => onSelectViewMode && onSelectViewMode(mode.id)}
              data-magnetic="true"
            >
              <Icon size={12} />
              <span>{mode.label}</span>
              <span className="mode-tab-dot" />
            </button>
          );
        })}
      </div>

      {/* 3D Dynamic Transformation Stage */}
      <div
        className={`building-scene-3d-stage mode-${viewMode}`}
        style={{
          transform: viewMode === 'radar'
            ? undefined
            : `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
        }}
      >
        {/* Master Architectural Frame */}
        <div className="arch-viewport-frame">
          {/* Architectural Drafting Rulers */}
          <div className="arch-ruler-top" aria-hidden="true">
            <span>000</span>
            <span>100</span>
            <span>200</span>
            <span>300</span>
            <span>400</span>
            <span>500</span>
            <span>600</span>
            <span>700</span>
            <span>800</span>
            <span>900</span>
            <span>1000</span>
          </div>

          <div className="arch-ruler-left" aria-hidden="true">
            <span>Y00</span>
            <span>Y20</span>
            <span>Y40</span>
            <span>Y60</span>
            <span>Y80</span>
            <span>Y100</span>
          </div>

          {/* Depth Layer 1: Background & Foreground Parallax Geometry */}
          <ParallaxLayers tilt={tilt} scrollProgress={scrollProgress} />

          {/* Depth Layer 2: Photographic Core Plane */}
          <div
            className="building-photo-plane"
            style={{
              transform: viewMode === 'tower'
                ? undefined
                : `translate3d(0, ${translateY}px, 20px) scale(${baseScale})`
            }}
          >
            <img
              src={bhuImage}
              alt="IIT BHU Varanasi Centennial Clock Tower and Main Building"
              className="building-photo-img"
              loading="lazy"
            />
            <div className="building-texture-scan" />
          </div>

          {/* Depth Layer 3: Dynamic Scene Lighting & Focal Spotlight */}
          <SceneLighting pointer={pointer} progress={scrollProgress} />

          {/* Depth Layer 4: Architectural Blueprint Overlays & Reticles */}
          <ArchitecturalOverlay scrollProgress={scrollProgress} tilt={tilt} />

          {/* Depth Layer 5: Interactive Campus Map Nodes */}
          <MapMarkers activeNodeId={activeNodeId} onSelectNode={onSelectNode} />
        </div>
      </div>
    </div>
  );
}
