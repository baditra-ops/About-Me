import React from 'react';
import { technicalArsenal } from '../../data/skillsData';
import { Cpu, Terminal, ArrowRight, ShieldCheck, Share2 } from 'lucide-react';
import './SkillNodeDetail.css';

export default function SkillNodeDetail({ selectedNodeId, onSelectNode }) {
  const node = technicalArsenal.find((n) => n.id === selectedNodeId) || technicalArsenal[0];

  const connectedNodes = technicalArsenal.filter((n) =>
    node.connections.includes(n.id)
  );

  return (
    <div className="skill-node-detail-panel" aria-live="polite">
      {/* Header Strip */}
      <div className="detail-panel-header">
        <div className="detail-meta-left">
          <span className="detail-indicator" />
          <span className="detail-telemetry-tag">NODE INSPECTOR // {node.code}</span>
        </div>
        <div className="detail-meta-right">
          <span className="detail-category-tag">{node.category.toUpperCase()}</span>
        </div>
      </div>

      {/* Main Node Identity */}
      <div className="detail-identity-block">
        <div className="detail-title-row">
          <h3 className="detail-node-name">{node.name}</h3>
          <span className="detail-layer-pill">
            <Cpu size={12} style={{ color: 'var(--accent-cyan)' }} />
            <span>{node.layer}</span>
          </span>
        </div>
        <p className="detail-role-text">{node.role}</p>
      </div>

      {/* Real Project Usage Provenance */}
      <div className="detail-usage-box">
        <div className="usage-header-row">
          <ShieldCheck size={13} style={{ color: 'var(--accent-emerald)' }} />
          <span className="usage-title">DEMONSTRATED IN PROJECT WORK</span>
        </div>
        <p className="usage-prose">{node.usageContext}</p>
      </div>

      {/* Engineering Concepts Matrix */}
      <div className="detail-concepts-block">
        <div className="concepts-header-row">
          <Terminal size={12} style={{ color: 'var(--accent-cyan)' }} />
          <span className="concepts-title">CORE CONCEPTS & PATTERNS</span>
        </div>
        <div className="concepts-chips-grid">
          {node.concepts.map((concept) => (
            <span key={concept} className="concept-chip">
              <span className="concept-dot" />
              <span>{concept}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Interconnected System Pathways */}
      <div className="detail-pathways-block">
        <div className="pathways-header-row">
          <Share2 size={12} style={{ color: 'var(--text-dim)' }} />
          <span className="pathways-title">CONNECTED ARCHITECTURAL PATHWAYS</span>
        </div>
        <div className="pathway-nodes-list">
          {connectedNodes.map((conn) => (
            <button
              key={conn.id}
              type="button"
              className="pathway-jump-btn"
              onClick={() => onSelectNode(conn.id)}
              data-magnetic="true"
              aria-label={`Inspect connected node ${conn.name}`}
            >
              <span>{conn.name}</span>
              <ArrowRight size={11} className="pathway-arrow" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
