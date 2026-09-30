import React, { useState } from 'react';
import { dispatchChannels, contactSystemStatus } from '../../data/contactData';
import {
  ExternalLink,
  CheckCircle2,
  Terminal,
  ArrowUpRight,
  Send
} from 'lucide-react';
import './DispatchTerminal.css';

export default function DispatchTerminal() {
  const [selectedChannelId, setSelectedChannelId] = useState('linkedin');
  const [copied, setCopied] = useState(false);

  const activeChannel = dispatchChannels.find((c) => c.id === selectedChannelId) || dispatchChannels[0];

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(activeChannel.url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="dispatch-terminal-card" aria-label="Interactive Communication & Dispatch Terminal">
      {/* Terminal Title Bar */}
      <div className="terminal-titlebar">
        <div className="titlebar-controls">
          <span className="ctrl-dot dot-red" />
          <span className="ctrl-dot dot-yellow" />
          <span className="ctrl-dot dot-green" />
        </div>
        <div className="titlebar-label">
          <Terminal size={12} className="titlebar-icon" />
          <span>CONSOLE // DISPATCH_PROTOCOL.V1</span>
        </div>
        <div className="titlebar-status">
          <span className="status-ping-mini" />
          <span>TLS // SECURE</span>
        </div>
      </div>

      {/* System Readout Matrix Strip */}
      <div className="terminal-status-strip">
        <div className="status-stat-item">
          <span className="stat-dim">NODE:</span>
          <span className="stat-bright">{contactSystemStatus.nodeId}</span>
        </div>
        <div className="status-stat-item">
          <span className="stat-dim">CAMPUS:</span>
          <span className="stat-bright">{contactSystemStatus.location}</span>
        </div>
        <div className="status-stat-item">
          <span className="stat-dim">STATE:</span>
          <span className="stat-emerald">{contactSystemStatus.systemStatus}</span>
        </div>
      </div>

      {/* Terminal Display Screen */}
      <div className="terminal-screen-body">
        <div className="screen-log-lines">
          <div className="log-line text-muted">
            <span className="log-prompt">$</span>
            <span>sys.init --node="Baditra" --campus="IIT BHU"</span>
          </div>
          <div className="log-line text-cyan">
            <span className="log-bullet">✓</span>
            <span>Connection handshake established. Status: OPEN TO COLLABORATION.</span>
          </div>
          <div className="log-line text-dim">
            <span className="log-prompt">&gt;</span>
            <span>COORDINATES: {contactSystemStatus.coordinates}</span>
          </div>
          <div className="log-line text-bright">
            <span className="log-prompt">&gt;</span>
            <span>ACTIVE CHANNEL: <strong style={{ color: 'var(--accent-cyan)' }}>{activeChannel.label}</strong> [{activeChannel.tag}]</span>
          </div>
          <div className="log-line text-secondary">
            <span className="log-prompt">&gt;</span>
            <span>{activeChannel.description}</span>
          </div>
          <div className="log-line text-muted">
            <span className="log-prompt">&gt;</span>
            <span>ROUTING: {activeChannel.routingNote}</span>
          </div>
          <div className="log-line log-cursor-row">
            <span className="log-prompt">&gt;</span>
            <span className="cursor-target">{activeChannel.url}</span>
            <span className="terminal-blinking-cursor" />
          </div>
        </div>
      </div>

      {/* Interactive Channel Selector Bar */}
      <div className="terminal-channel-selector" role="tablist" aria-label="Verified Dispatch Channels">
        <span className="selector-title">SELECT DISPATCH ROUTE:</span>
        <div className="channel-buttons-row">
          {dispatchChannels.map((channel) => {
            const isSelected = channel.id === selectedChannelId;
            return (
              <button
                key={channel.id}
                role="tab"
                id={`channel-tab-${channel.id}`}
                aria-selected={isSelected}
                tabIndex={0}
                className={`channel-pill-btn ${isSelected ? 'active' : ''}`}
                onClick={() => setSelectedChannelId(channel.id)}
                data-magnetic="true"
                aria-label={`Select ${channel.label} communication channel`}
              >
                <span className="ch-dot" />
                <span className="ch-name">{channel.label}</span>
                <span className="ch-tag">{channel.tag}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Dispatch Action Execution Bar */}
      <div className="terminal-action-footer">
        <a
          href={activeChannel.url}
          target="_blank"
          rel="noopener noreferrer"
          className="dispatch-primary-btn"
          data-magnetic="true"
          aria-label={`Open verified ${activeChannel.label} destination`}
        >
          <Send size={14} className="send-icon" />
          <span>{activeChannel.actionText}</span>
          <ArrowUpRight size={14} className="arrow-icon" />
        </a>

        <button
          type="button"
          className="copy-url-btn"
          onClick={handleCopyUrl}
          data-magnetic="true"
          aria-label="Copy channel URL to clipboard"
        >
          {copied ? (
            <>
              <CheckCircle2 size={13} style={{ color: 'var(--accent-emerald)' }} />
              <span>COPIED TO CLIPBOARD</span>
            </>
          ) : (
            <>
              <ExternalLink size={13} />
              <span>COPY URL</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
