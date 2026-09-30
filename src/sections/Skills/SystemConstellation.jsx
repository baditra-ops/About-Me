import React, { useRef, useState } from 'react';
import { technicalArsenal } from '../../data/skillsData';
import {
  Server,
  Layers,
  Database,
  Radio,
  Cpu,
  Lock,
  Workflow,
  Shield,
  Zap,
  Box,
  GitBranch,
  Terminal,
  Activity
} from 'lucide-react';
import './SystemConstellation.css';

export default function SystemConstellation({
  activeCategory,
  selectedNodeId,
  onSelectNode
}) {
  const containerRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const activeNode = technicalArsenal.find((n) => n.id === selectedNodeId) || technicalArsenal[0];

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

  const getNodeIcon = (id) => {
    switch (id) {
      case 'nodejs':
        return <Server size={14} />;
      case 'express':
        return <Workflow size={14} />;
      case 'auth':
        return <Lock size={14} />;
      case 'java':
        return <Cpu size={14} />;
      case 'socketio':
        return <Radio size={14} />;
      case 'redis':
        return <Activity size={14} />;
      case 'concurrency':
        return <Zap size={14} />;
      case 'postgres':
        return <Database size={14} />;
      case 'mongodb':
        return <Layers size={14} />;
      case 'prisma':
        return <Workflow size={14} />;
      case 'react':
        return <Zap size={14} />;
      case 'javascript':
        return <Terminal size={14} />;
      case 'docker':
        return <Box size={14} />;
      case 'git':
        return <GitBranch size={14} />;
      default:
        return <Cpu size={14} />;
    }
  };

  // Check if a node is in active category
  const isNodeInCategory = (node) => {
    if (activeCategory === 'all') return true;
    return node.category === activeCategory;
  };

  // Check if a node is directly connected to the selected node
  const isNodeConnected = (nodeId) => {
    if (!activeNode) return false;
    if (nodeId === activeNode.id) return true;
    return (
      activeNode.connections.includes(nodeId) ||
      technicalArsenal.find((n) => n.id === nodeId)?.connections.includes(activeNode.id)
    );
  };

  // Group nodes into pipeline tiers
  const tierClient = technicalArsenal.filter((n) => ['react', 'javascript'].includes(n.id));
  const tierGateway = technicalArsenal.filter((n) => ['express', 'auth'].includes(n.id));
  const tierRuntime = technicalArsenal.filter((n) => ['nodejs', 'java'].includes(n.id));
  const tierRealtime = technicalArsenal.filter((n) => ['socketio', 'redis', 'concurrency'].includes(n.id));
  const tierPersistence = technicalArsenal.filter((n) => ['postgres', 'prisma', 'mongodb'].includes(n.id));
  const tierInfra = technicalArsenal.filter((n) => ['docker', 'git'].includes(n.id));

  const renderTierNodes = (nodes) => {
    return nodes.map((node) => {
      const inCategory = isNodeInCategory(node);
      const isSelected = node.id === selectedNodeId;
      const isConnected = isNodeConnected(node.id);

      let statusClass = '';
      if (!inCategory) statusClass += ' category-subdued';
      if (isSelected) statusClass += ' active-selected';
      else if (isConnected) statusClass += ' connection-highlight';

      return (
        <button
          key={node.id}
          type="button"
          role="button"
          id={`node-${node.id}`}
          aria-label={`${node.name} system node`}
          className={`system-node-pill ${statusClass}`}
          onClick={() => onSelectNode(node.id)}
          data-magnetic="true"
        >
          <div className="node-pill-status">
            <span className="node-dot" />
          </div>
          <span className="node-icon">{getNodeIcon(node.id)}</span>
          <div className="node-text-col">
            <span className="node-name">{node.name}</span>
            <span className="node-code">{node.code}</span>
          </div>
        </button>
      );
    });
  };

  return (
    <div
      ref={containerRef}
      className="system-constellation-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
      }}
    >
      {/* Top Telemetry Header */}
      <div className="constellation-header">
        <div className="constellation-meta-left">
          <span className="constellation-pulse" />
          <span className="constellation-code">TOPOLOGY // ARCHITECTURAL FLOW MATRIX</span>
        </div>
        <div className="constellation-meta-right">
          <span className="constellation-chip">
            <Shield size={11} style={{ display: 'inline', marginRight: '4px' }} />
            LAYERED DECOUPLING
          </span>
          <span className="constellation-coords">TIERS [01 → 06]</span>
        </div>
      </div>

      {/* Main Architectural Layers Body */}
      <div className="constellation-body">
        {/* Background Grid Pattern */}
        <div className="constellation-grid-bg" />
        <div className="constellation-glow" />

        {/* Central Flow Conduit */}
        <div className="pipeline-flow-conduit">
          {/* Tier 01: Client */}
          <div className="pipeline-tier-row">
            <div className="tier-label-rail">
              <span className="tier-tag">TIER 01</span>
              <span className="tier-title">CLIENT & INGESTION</span>
              <span className="tier-desc">Browsers, Reactive State & Payloads</span>
            </div>
            <div className="tier-nodes-group">
              {renderTierNodes(tierClient)}
            </div>
          </div>

          <div className="tier-conduit-arrow">
            <span className="conduit-line" />
            <span className="conduit-beacon">REST / HTTP REQUESTS & WEB SOCKETS</span>
            <span className="conduit-line" />
          </div>

          {/* Tier 02: Gateway */}
          <div className="pipeline-tier-row">
            <div className="tier-label-rail">
              <span className="tier-tag">TIER 02</span>
              <span className="tier-title">API GATEWAY & GUARDS</span>
              <span className="tier-desc">Routing, Auth Tokens & Middleware</span>
            </div>
            <div className="tier-nodes-group">
              {renderTierNodes(tierGateway)}
            </div>
          </div>

          <div className="tier-conduit-arrow">
            <span className="conduit-line" />
            <span className="conduit-beacon">VALIDATED DISPATCH & ASYNC STREAMS</span>
            <span className="conduit-line" />
          </div>

          {/* Tier 03: Compute & Runtime */}
          <div className="pipeline-tier-row highlight-tier">
            <div className="tier-label-rail">
              <span className="tier-tag accent">TIER 03</span>
              <span className="tier-title accent">ASYNC ENGINE & DSA</span>
              <span className="tier-desc">Non-Blocking I/O & Core Concurrency</span>
            </div>
            <div className="tier-nodes-group">
              {renderTierNodes(tierRuntime)}
            </div>
          </div>

          <div className="tier-conduit-arrow">
            <span className="conduit-line" />
            <span className="conduit-beacon">PUBSUB CHANNELS & MEMORY STORE</span>
            <span className="conduit-line" />
          </div>

          {/* Tier 04: Real-Time Broker */}
          <div className="pipeline-tier-row highlight-tier">
            <div className="tier-label-rail">
              <span className="tier-tag emerald">TIER 04</span>
              <span className="tier-title emerald">EVENT BROKER & LOCKING</span>
              <span className="tier-desc">Redis In-Memory & Socket.io Mesh</span>
            </div>
            <div className="tier-nodes-group">
              {renderTierNodes(tierRealtime)}
            </div>
          </div>

          <div className="tier-conduit-arrow">
            <span className="conduit-line" />
            <span className="conduit-beacon">ACID TRANSACTIONS & AGGREGATIONS</span>
            <span className="conduit-line" />
          </div>

          {/* Tier 05: Persistence */}
          <div className="pipeline-tier-row">
            <div className="tier-label-rail">
              <span className="tier-tag amber">TIER 05</span>
              <span className="tier-title amber">PERSISTENCE & SCHEMAS</span>
              <span className="tier-desc">Relational ACID & Document Models</span>
            </div>
            <div className="tier-nodes-group">
              {renderTierNodes(tierPersistence)}
            </div>
          </div>

          <div className="tier-conduit-arrow">
            <span className="conduit-line" />
            <span className="conduit-beacon">CONTAINERIZED RUNTIME & VERSIONING</span>
            <span className="conduit-line" />
          </div>

          {/* Tier 06: Infra & Tooling */}
          <div className="pipeline-tier-row">
            <div className="tier-label-rail">
              <span className="tier-tag">TIER 06</span>
              <span className="tier-title">INFRASTRUCTURE & ENVIRONMENT</span>
              <span className="tier-desc">Local Containers & Version Control</span>
            </div>
            <div className="tier-nodes-group">
              {renderTierNodes(tierInfra)}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Telemetry Footer */}
      <div className="constellation-footer">
        <div className="footer-meta-item">
          <span className="meta-key">SELECTED:</span>
          <span className="meta-val">{activeNode.name}</span>
        </div>
        <div className="footer-meta-item">
          <span className="meta-key">LAYER:</span>
          <span className="meta-val">{activeNode.layer}</span>
        </div>
        <div className="footer-meta-item">
          <span className="meta-key">CONNECTIONS:</span>
          <span className="meta-val">{activeNode.connections.length} ACTIVE PATHWAYS</span>
        </div>
      </div>
    </div>
  );
}
