import React, { useState } from 'react';
import {
  UploadCloud,
  Film,
  Database,
  Cpu,
  Radio,
  Server,
  Workflow,
  Lock,
  Eye,
  ShieldCheck,
  Zap,
  Activity
} from 'lucide-react';
import './ProjectSystemVisual.css';

export default function ProjectSystemVisual({ project }) {
  const [activeNode, setActiveNode] = useState(null);

  if (!project) return null;

  const renderDiagram = () => {
    switch (project.id) {
      case 'videotube':
        return (
          <div className="system-canvas videotube-canvas">
            {/* SVG Connecting Pipelines */}
            <svg className="diagram-svg" viewBox="0 0 600 240" fill="none" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id="cyanLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
                </linearGradient>
                <filter id="glowEffect" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Connecting Flow Lines */}
              <path
                d="M 90 120 L 190 120"
                stroke="url(#cyanLineGrad)"
                strokeWidth="2"
                strokeDasharray="4 4"
                className="animated-flow-line"
              />
              <path
                d="M 230 100 L 320 60"
                stroke="url(#cyanLineGrad)"
                strokeWidth="2"
                strokeDasharray="4 4"
                className="animated-flow-line delay-1"
              />
              <path
                d="M 230 140 L 320 180"
                stroke="url(#cyanLineGrad)"
                strokeWidth="2"
                strokeDasharray="4 4"
                className="animated-flow-line delay-2"
              />
              <path
                d="M 370 60 L 480 100"
                stroke="url(#cyanLineGrad)"
                strokeWidth="2"
                strokeDasharray="4 4"
                className="animated-flow-line delay-3"
              />
              <path
                d="M 370 180 L 480 140"
                stroke="url(#cyanLineGrad)"
                strokeWidth="2"
                strokeDasharray="4 4"
                className="animated-flow-line delay-3"
              />
            </svg>

            {/* Architecture Nodes */}
            <div className="diagram-nodes-grid">
              {/* Node 1: Client Ingest */}
              <div
                className={`arch-node node-upload ${activeNode === 'client' ? 'active' : ''}`}
                style={{ left: '10%', top: '50%' }}
                onMouseEnter={() => setActiveNode('client')}
                onMouseLeave={() => setActiveNode(null)}
                tabIndex={0}
                role="button"
                aria-label="Client Media Ingest Node"
              >
                <div className="node-icon-bubble">
                  <UploadCloud size={16} />
                </div>
                <div className="node-label">CLIENT INGEST</div>
                <div className="node-sub">Multer FileStream</div>
              </div>

              {/* Node 2: Express / JWT Gateway */}
              <div
                className={`arch-node node-gateway ${activeNode === 'gateway' ? 'active' : ''}`}
                style={{ left: '33%', top: '50%' }}
                onMouseEnter={() => setActiveNode('gateway')}
                onMouseLeave={() => setActiveNode(null)}
                tabIndex={0}
                role="button"
                aria-label="API Gateway & JWT Auth Node"
              >
                <div className="node-icon-bubble">
                  <Lock size={16} />
                </div>
                <div className="node-label">API GATEWAY</div>
                <div className="node-sub">JWT Verification</div>
              </div>

              {/* Node 3: Cloudinary Transcoder (Top branch) */}
              <div
                className={`arch-node node-cdn ${activeNode === 'cdn' ? 'active' : ''}`}
                style={{ left: '57%', top: '25%' }}
                onMouseEnter={() => setActiveNode('cdn')}
                onMouseLeave={() => setActiveNode(null)}
                tabIndex={0}
                role="button"
                aria-label="Cloudinary Media Pipeline Node"
              >
                <div className="node-icon-bubble">
                  <Film size={16} />
                </div>
                <div className="node-label">CLOUDINARY CDN</div>
                <div className="node-sub">Transcoding & Storage</div>
              </div>

              {/* Node 4: MongoDB Aggregation (Bottom branch) */}
              <div
                className={`arch-node node-db ${activeNode === 'db' ? 'active' : ''}`}
                style={{ left: '57%', top: '75%' }}
                onMouseEnter={() => setActiveNode('db')}
                onMouseLeave={() => setActiveNode(null)}
                tabIndex={0}
                role="button"
                aria-label="MongoDB Document Aggregation Node"
              >
                <div className="node-icon-bubble">
                  <Database size={16} />
                </div>
                <div className="node-label">MONGODB CLUSTER</div>
                <div className="node-sub">Aggregation Pipelines</div>
              </div>

              {/* Node 5: Responsive Video Feed */}
              <div
                className={`arch-node node-feed ${activeNode === 'feed' ? 'active' : ''}`}
                style={{ left: '86%', top: '50%' }}
                onMouseEnter={() => setActiveNode('feed')}
                onMouseLeave={() => setActiveNode(null)}
                tabIndex={0}
                role="button"
                aria-label="Subscribed Video Feed Client"
              >
                <div className="node-icon-bubble">
                  <Zap size={16} />
                </div>
                <div className="node-label">CLIENT STREAM</div>
                <div className="node-sub">React Player & Feeds</div>
              </div>
            </div>

            {/* Interactive Node Telemetry Inspector */}
            <div className="diagram-telemetry-tray">
              <span className="tray-item">
                <span className="tray-bullet pulse-cyan" />
                <span>PIPELINE: MULTIPART CHUNKED</span>
              </span>
              <span className="tray-divider">/</span>
              <span className="tray-item">
                <span>STATUS: SECURE 200 OK</span>
              </span>
              <span className="tray-divider">/</span>
              <span className="tray-item">
                <span>AUTH: HTTP-ONLY COOKIE</span>
              </span>
            </div>
          </div>
        );

      case 'ticketing-system':
        return (
          <div className="system-canvas ticketing-canvas">
            {/* SVG Event Broker Mesh */}
            <svg className="diagram-svg" viewBox="0 0 600 240" fill="none" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id="emeraldLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#10b981" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.8" />
                </linearGradient>
              </defs>

              <path
                d="M 100 70 L 230 120"
                stroke="url(#emeraldLineGrad)"
                strokeWidth="2"
                strokeDasharray="4 4"
                className="animated-flow-line"
              />
              <path
                d="M 100 170 L 230 120"
                stroke="url(#emeraldLineGrad)"
                strokeWidth="2"
                strokeDasharray="4 4"
                className="animated-flow-line delay-1"
              />
              <path
                d="M 270 120 L 370 120"
                stroke="url(#emeraldLineGrad)"
                strokeWidth="3"
                className="pulse-bridge-line"
              />
              <path
                d="M 410 100 L 510 65"
                stroke="url(#emeraldLineGrad)"
                strokeWidth="2"
                strokeDasharray="4 4"
                className="animated-flow-line delay-2"
              />
              <path
                d="M 410 140 L 510 175"
                stroke="url(#emeraldLineGrad)"
                strokeWidth="2"
                strokeDasharray="4 4"
                className="animated-flow-line delay-3"
              />
            </svg>

            {/* Architecture Nodes */}
            <div className="diagram-nodes-grid">
              {/* Clients 1 & 2 */}
              <div
                className={`arch-node node-ws-client1 ${activeNode === 'ws1' ? 'active' : ''}`}
                style={{ left: '12%', top: '30%' }}
                onMouseEnter={() => setActiveNode('ws1')}
                onMouseLeave={() => setActiveNode(null)}
                tabIndex={0}
                role="button"
                aria-label="Concurrent Agent Alpha Node"
              >
                <div className="node-icon-bubble">
                  <Radio size={16} />
                </div>
                <div className="node-label">AGENT ALPHA</div>
                <div className="node-sub">WebSocket Client</div>
              </div>

              <div
                className={`arch-node node-ws-client2 ${activeNode === 'ws2' ? 'active' : ''}`}
                style={{ left: '12%', top: '70%' }}
                onMouseEnter={() => setActiveNode('ws2')}
                onMouseLeave={() => setActiveNode(null)}
                tabIndex={0}
                role="button"
                aria-label="Concurrent Agent Beta Node"
              >
                <div className="node-icon-bubble">
                  <Radio size={16} />
                </div>
                <div className="node-label">AGENT BETA</div>
                <div className="node-sub">WebSocket Client</div>
              </div>

              {/* Socket.io Server */}
              <div
                className={`arch-node node-socket-server ${activeNode === 'socket' ? 'active' : ''}`}
                style={{ left: '38%', top: '50%' }}
                onMouseEnter={() => setActiveNode('socket')}
                onMouseLeave={() => setActiveNode(null)}
                tabIndex={0}
                role="button"
                aria-label="Socket.io Duplex Server Node"
              >
                <div className="node-icon-bubble highlight">
                  <Server size={18} />
                </div>
                <div className="node-label">SOCKET.IO MESH</div>
                <div className="node-sub">Duplex Handshake</div>
              </div>

              {/* Redis Pub/Sub Core */}
              <div
                className={`arch-node node-redis ${activeNode === 'redis' ? 'active' : ''}`}
                style={{ left: '63%', top: '50%' }}
                onMouseEnter={() => setActiveNode('redis')}
                onMouseLeave={() => setActiveNode(null)}
                tabIndex={0}
                role="button"
                aria-label="Redis In-Memory Pub/Sub Node"
              >
                <div className="node-icon-bubble emerald">
                  <Activity size={18} />
                </div>
                <div className="node-label">REDIS PUB / SUB</div>
                <div className="node-sub">In-Memory Event Bus</div>
              </div>

              {/* State Lock & Mongo Store */}
              <div
                className={`arch-node node-lock ${activeNode === 'lock' ? 'active' : ''}`}
                style={{ left: '88%', top: '28%' }}
                onMouseEnter={() => setActiveNode('lock')}
                onMouseLeave={() => setActiveNode(null)}
                tabIndex={0}
                role="button"
                aria-label="Atomic Ticket Lock Manager Node"
              >
                <div className="node-icon-bubble">
                  <ShieldCheck size={16} />
                </div>
                <div className="node-label">LOCK MANAGER</div>
                <div className="node-sub">No Race Conditions</div>
              </div>

              <div
                className={`arch-node node-mongo-store ${activeNode === 'mongo' ? 'active' : ''}`}
                style={{ left: '88%', top: '72%' }}
                onMouseEnter={() => setActiveNode('mongo')}
                onMouseLeave={() => setActiveNode(null)}
                tabIndex={0}
                role="button"
                aria-label="Persistent MongoDB Store Node"
              >
                <div className="node-icon-bubble">
                  <Database size={16} />
                </div>
                <div className="node-label">PERSISTENCE</div>
                <div className="node-sub">MongoDB Audit Log</div>
              </div>
            </div>

            {/* Interactive Node Telemetry Inspector */}
            <div className="diagram-telemetry-tray">
              <span className="tray-item">
                <span className="tray-bullet pulse-emerald" />
                <span>BROKER: REDIS PUB/SUB</span>
              </span>
              <span className="tray-divider">/</span>
              <span className="tray-item">
                <span>CONCURRENCY: ZERO-COLLISION</span>
              </span>
              <span className="tray-divider">/</span>
              <span className="tray-item">
                <span>CONTAINER: DOCKER COMPOSE</span>
              </span>
            </div>
          </div>
        );

      case 'smartinspect':
        return (
          <div className="system-canvas smartinspect-canvas">
            {/* SVG Pipeline */}
            <svg className="diagram-svg" viewBox="0 0 600 240" fill="none" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id="amberLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
                </linearGradient>
              </defs>

              <path
                d="M 90 75 L 200 75"
                stroke="url(#amberLineGrad)"
                strokeWidth="2"
                strokeDasharray="4 4"
                className="animated-flow-line"
              />
              <path
                d="M 240 75 L 340 120"
                stroke="url(#amberLineGrad)"
                strokeWidth="2"
                strokeDasharray="4 4"
                className="animated-flow-line delay-1"
              />
              <path
                d="M 120 180 L 340 135"
                stroke="url(#amberLineGrad)"
                strokeWidth="2"
                strokeDasharray="4 4"
                className="animated-flow-line delay-2"
              />
              <path
                d="M 380 110 L 480 60"
                stroke="url(#amberLineGrad)"
                strokeWidth="2"
                strokeDasharray="4 4"
                className="animated-flow-line delay-2"
              />
              <path
                d="M 380 140 L 480 180"
                stroke="url(#amberLineGrad)"
                strokeWidth="2"
                strokeDasharray="4 4"
                className="animated-flow-line delay-3"
              />
            </svg>

            {/* Architecture Nodes */}
            <div className="diagram-nodes-grid">
              {/* CCTV Feed */}
              <div
                className={`arch-node node-cctv ${activeNode === 'cctv' ? 'active' : ''}`}
                style={{ left: '10%', top: '30%' }}
                onMouseEnter={() => setActiveNode('cctv')}
                onMouseLeave={() => setActiveNode(null)}
                tabIndex={0}
                role="button"
                aria-label="CCTV Video Feed Ingestion Node"
              >
                <div className="node-icon-bubble">
                  <Eye size={16} />
                </div>
                <div className="node-label">VISION SENSOR</div>
                <div className="node-sub">CCTV Video Frame</div>
              </div>

              {/* YOLO Model Service */}
              <div
                className={`arch-node node-yolo ${activeNode === 'yolo' ? 'active' : ''}`}
                style={{ left: '33%', top: '30%' }}
                onMouseEnter={() => setActiveNode('yolo')}
                onMouseLeave={() => setActiveNode(null)}
                tabIndex={0}
                role="button"
                aria-label="Python YOLO Inference Microservice Node"
              >
                <div className="node-icon-bubble amber">
                  <Cpu size={16} />
                </div>
                <div className="node-label">PYTHON / YOLO</div>
                <div className="node-sub">Hazard Inference</div>
              </div>

              {/* Sensor Telemetry */}
              <div
                className={`arch-node node-metrics ${activeNode === 'metrics' ? 'active' : ''}`}
                style={{ left: '15%', top: '75%' }}
                onMouseEnter={() => setActiveNode('metrics')}
                onMouseLeave={() => setActiveNode(null)}
                tabIndex={0}
                role="button"
                aria-label="Facility Sensor Stream Node"
              >
                <div className="node-icon-bubble">
                  <Activity size={16} />
                </div>
                <div className="node-label">FACILITY TELEMETRY</div>
                <div className="node-sub">IoT & Sensor Stream</div>
              </div>

              {/* Core Node.js Engine */}
              <div
                className={`arch-node node-core-engine ${activeNode === 'core' ? 'active' : ''}`}
                style={{ left: '57%', top: '50%' }}
                onMouseEnter={() => setActiveNode('core')}
                onMouseLeave={() => setActiveNode(null)}
                tabIndex={0}
                role="button"
                aria-label="Node.js Core Orchestration Node"
              >
                <div className="node-icon-bubble highlight">
                  <Workflow size={18} />
                </div>
                <div className="node-label">NODE ORCHESTRATOR</div>
                <div className="node-sub">Event Validation</div>
              </div>

              {/* Prisma PostgreSQL (Top) */}
              <div
                className={`arch-node node-postgres ${activeNode === 'postgres' ? 'active' : ''}`}
                style={{ left: '85%', top: '25%' }}
                onMouseEnter={() => setActiveNode('postgres')}
                onMouseLeave={() => setActiveNode(null)}
                tabIndex={0}
                role="button"
                aria-label="Prisma PostgreSQL ACID Storage Node"
              >
                <div className="node-icon-bubble">
                  <Database size={16} />
                </div>
                <div className="node-label">POSTGRES / PRISMA</div>
                <div className="node-sub">ACID Compliance</div>
              </div>

              {/* Alert WebSocket Broadcast (Bottom) */}
              <div
                className={`arch-node node-alerts ${activeNode === 'alerts' ? 'active' : ''}`}
                style={{ left: '85%', top: '75%' }}
                onMouseEnter={() => setActiveNode('alerts')}
                onMouseLeave={() => setActiveNode(null)}
                tabIndex={0}
                role="button"
                aria-label="WebSocket Real-Time Alert Broadcast Node"
              >
                <div className="node-icon-bubble emerald">
                  <Radio size={16} />
                </div>
                <div className="node-label">ALERT BROADCAST</div>
                <div className="node-sub">Socket.io Push</div>
              </div>
            </div>

            {/* Interactive Node Telemetry Inspector */}
            <div className="diagram-telemetry-tray">
              <span className="tray-item">
                <span className="tray-bullet pulse-amber" />
                <span>INFERENCE: YOLO ASYNC</span>
              </span>
              <span className="tray-divider">/</span>
              <span className="tray-item">
                <span>DATABASE: PRISMA ORM POOL</span>
              </span>
              <span className="tray-divider">/</span>
              <span className="tray-item">
                <span>EVENTS: REDIS CACHED</span>
              </span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="project-system-visual-container">
      {/* Visual Header Strip */}
      <div className="visual-top-strip">
        <div className="visual-meta-left">
          <span className="visual-indicator" />
          <span className="visual-title-code">
            SYS_ARCH // {project.num} :: {project.id.toUpperCase()}
          </span>
        </div>
        <div className="visual-meta-right">
          <span className="visual-mode-badge">ARCHITECTURAL TOPOLOGY</span>
          <span className="visual-grid-coords">GRID [600x240]</span>
        </div>
      </div>

      {/* Main Architectural Canvas */}
      <div className="visual-canvas-body">
        {/* Subtle Background Grid & Coordinate Lines */}
        <div className="canvas-grid-bg" />
        <div className="canvas-radial-glow" />

        {/* Dynamic Abstract Diagram */}
        {renderDiagram()}
      </div>

      {/* Footer System Telemetry Status */}
      <div className="visual-bottom-telemetry">
        <div className="telemetry-stat">
          <span className="stat-label">TOPOLOGY</span>
          <span className="stat-value">{project.category}</span>
        </div>
        <div className="telemetry-stat">
          <span className="stat-label">RELIABILITY</span>
          <span className="stat-value">{project.statsNote}</span>
        </div>
      </div>
    </div>
  );
}
