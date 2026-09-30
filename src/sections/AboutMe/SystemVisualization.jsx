import React, { useState } from 'react';
import { Server, Activity, Database, Radio, Cpu } from 'lucide-react';
import './SystemVisualization.css';

const PIPELINE_NODES = [
  {
    id: 'client',
    idx: '01',
    name: 'CLIENT APP',
    protocol: 'HTTP/2 · WS',
    desc: 'React SPA · Real-time event emitters & duplex subscriptions',
    icon: Radio
  },
  {
    id: 'gateway',
    idx: '02',
    name: 'API GATEWAY',
    protocol: 'REST · SOCKET.IO',
    desc: 'Auth verification (JWT), rate limiting, request validation & routing',
    icon: Server
  },
  {
    id: 'engine',
    idx: '03',
    name: 'ASYNC ENGINE',
    protocol: 'NODE.JS · JAVA',
    desc: 'Event loop concurrency, business domain logic & distributed tasks',
    icon: Cpu
  },
  {
    id: 'cache',
    idx: '04',
    name: 'CACHE LAYER',
    protocol: 'REDIS PUBSUB',
    desc: 'Sub-millisecond key-value lookups, session store & live pub/sub broadcast',
    icon: Activity
  },
  {
    id: 'db',
    idx: '05',
    name: 'PERSISTENCE',
    protocol: 'POSTGRES · PRISMA',
    desc: 'Relational ACID integrity, indexed queries & schema migrations',
    icon: Database
  }
];

export default function SystemVisualization() {
  const [activeNode, setActiveNode] = useState(PIPELINE_NODES[2]); // Default: Engine

  return (
    <div className="system-visualization-panel" role="region" aria-label="Distributed System Pipeline">
      {/* Panel Header */}
      <div className="system-viz-header">
        <div className="system-viz-title-group">
          <Server size={13} style={{ color: 'var(--accent-cyan)' }} />
          <span className="system-viz-title">SYSTEM TOPOLOGY // DATA CIRCUIT</span>
        </div>
        <div className="system-status-indicator">
          <span className="status-pulse" />
          <span>REAL-TIME STREAMING</span>
        </div>
      </div>

      {/* Node Pipeline Chain with Data Connectors */}
      <div className="system-nodes-chain">
        {PIPELINE_NODES.map((node, i) => (
          <React.Fragment key={node.id}>
            <div
              className={`system-node-item ${activeNode.id === node.id ? 'active' : ''}`}
              onClick={() => setActiveNode(node)}
              onMouseEnter={() => setActiveNode(node)}
              data-magnetic="true"
              tabIndex={0}
              role="button"
              aria-label={`${node.name} layer`}
            >
              <span className="node-idx">L{node.idx}</span>
              <span className="node-name">{node.name}</span>
              <span className="node-protocol">{node.protocol}</span>
            </div>

            {i < PIPELINE_NODES.length - 1 && (
              <div className="system-connector" aria-hidden="true">
                <div className="data-packet" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Focus Telemetry Readout Footnote */}
      <div className="system-viz-footer">
        <span className="viz-focus-label">
          <span>FOCUS:</span>
          <span>{activeNode.name}</span>
          <span style={{ color: 'var(--text-muted)' }}>—</span>
          <span>{activeNode.desc}</span>
        </span>
        <span className="viz-tech-tag">{activeNode.protocol}</span>
      </div>
    </div>
  );
}
