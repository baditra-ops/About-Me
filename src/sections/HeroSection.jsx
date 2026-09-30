import React from 'react';
import { ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon, CodeforcesIcon } from '../components/Icons';
import { personalInfo } from '../data/personalInfo';
import TechIdentity from '../components/TechIdentity';
import ScrollIndicator from '../components/ScrollIndicator';
import './HeroSection.css';

export default function HeroSection() {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-content">
          {/* Institutional / Academic Metadata badge */}
          <div className="hero-meta-bar">
            <span className="telemetry-chip">
              <span className="telemetry-dot" />
              IIT BHU VARANASI
            </span>
            <span className="hero-inst-badge">
              CHEMICAL ENGINEERING // 2ND YEAR
            </span>
          </div>

          {/* Hero Main Copy */}
          <div className="hero-title-wrap">
            <h1 className="hero-title">
              <span className="hero-title-accent">{personalInfo.name.toUpperCase()}</span>
            </h1>
          </div>

          <h2 className="hero-subtitle">
            {personalInfo.role}
          </h2>

          <p className="hero-description">
            "{personalInfo.tagline}"
          </p>

          {/* Live External Developer Profiles */}
          <div className="hero-links-bar" aria-label="Developer Profiles">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill"
            >
              <GithubIcon size={15} />
              <span>GitHub</span>
              <ExternalLink size={12} style={{ opacity: 0.6 }} />
            </a>

            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill"
            >
              <LinkedinIcon size={15} />
              <span>LinkedIn</span>
              <ExternalLink size={12} style={{ opacity: 0.6 }} />
            </a>

            <a
              href={personalInfo.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill"
            >
              <LeetCodeIcon size={15} />
              <span>LeetCode</span>
              <ExternalLink size={12} style={{ opacity: 0.6 }} />
            </a>

            <a
              href={personalInfo.socials.codeforces}
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill"
            >
              <CodeforcesIcon size={15} />
              <span>Codeforces</span>
              <ExternalLink size={12} style={{ opacity: 0.6 }} />
            </a>
          </div>

          {/* Technical Identity Telemetry Indicator */}
          <TechIdentity />
        </div>
      </div>

      {/* Clear Interaction Cue */}
      <div className="hero-footer">
        <ScrollIndicator targetId="#experience" />
      </div>
    </section>
  );
}
