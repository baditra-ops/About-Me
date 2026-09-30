import React, { useState } from 'react';
import './MapMarkers.css';

const CAMPUS_NODES = [
  {
    id: 'clock-tower',
    className: 'node-clock-tower',
    category: 'HERITAGE APEX',
    title: 'Centennial Clock Tower',
    coords: '25°16′06″N 82°59′32″E',
    details: 'Iconic architectural focal point and historic campus landmark.'
  },
  {
    id: 'quadrangle',
    className: 'node-quadrangle',
    category: 'CAMPUS HEART',
    title: 'Main Quadrangle',
    coords: '25°16′04″N 82°59′30″E',
    details: 'Colonnaded wings where technical societies and leadership convene.'
  },
  {
    id: 'grounds',
    className: 'node-grounds',
    category: 'CAMPUS AXIS',
    title: 'Grand Central Lawn',
    coords: '25°16′01″N 82°59′25″E',
    details: 'Open expanse uniting engineering disciplines across Varanasi.'
  }
];

export default function MapMarkers({ onSelectNode, activeNodeId }) {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="map-markers-layer" role="group" aria-label="Interactive IIT BHU Map Markers">
      {CAMPUS_NODES.map((node) => {
        const isActive = activeNodeId === node.id || hoveredId === node.id;
        return (
          <div
            key={node.id}
            className={`map-node-anchor ${node.className} ${isActive ? 'active' : ''}`}
            onMouseEnter={() => {
              setHoveredId(node.id);
              if (onSelectNode) onSelectNode(node);
            }}
            onMouseLeave={() => {
              setHoveredId(null);
              if (onSelectNode) onSelectNode(null);
            }}
            onClick={() => {
              if (onSelectNode) onSelectNode(node);
            }}
            tabIndex={0}
            aria-label={`${node.title} - ${node.category}`}
          >
            <div className="sensor-beacon-beacon">
              <span className="sensor-dot" />
              <span className="sensor-ring" />
            </div>

            <div className="map-node-card">
              <span className="node-category">{node.category}</span>
              <span className="node-title">{node.title}</span>
              <div className="node-details">
                <div>{node.coords}</div>
                <div>{node.details}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
