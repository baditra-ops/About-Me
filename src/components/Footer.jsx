import React from 'react';
import { personalInfo } from '../data/personalInfo';
import { ArrowUp } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-engineering-footer" role="contentinfo">
      <div className="container footer-inner">
        {/* Top Metadata Strip */}
        <div className="footer-telemetry-bar">
          <div className="f-telemetry-item">
            <span className="telemetry-beacon-dot" />
            <span className="telemetry-txt">TRANSMISSION COMPLETE // HASH [IIT-BHU-TECH-27]</span>
          </div>
          <div className="f-telemetry-item">
            <span className="telemetry-dim">COORDINATES:</span>
            <span className="telemetry-bright">25.2677° N, 82.9913° E</span>
          </div>
          <button
            type="button"
            className="footer-back-to-top"
            onClick={scrollToTop}
            data-magnetic="true"
            aria-label="Scroll back to top of the page"
          >
            <span>RETURN TO SUMMIT</span>
            <ArrowUp size={12} />
          </button>
        </div>

        {/* Main Footer Content Grid */}
        <div className="footer-main-row">
          <div className="footer-brand-col">
            <div className="footer-identity-heading">
              <span className="brand-monogram-mini">BC</span>
              <span className="footer-full-name">{personalInfo.name.toUpperCase()}</span>
            </div>
            <p className="footer-role-line">
              Backend-focused Full Stack Developer · Builder · Learner
            </p>
            <p className="footer-college-sub">
              Indian Institute of Technology (BHU), Varanasi · Chemical Engineering '27
            </p>
          </div>

          {/* Verified Social Channels */}
          <div className="footer-channels-col">
            <span className="footer-col-label">VERIFIED CHANNELS</span>
            <div className="footer-social-links-grid">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-nav-link"
                data-magnetic="true"
              >
                <span>GitHub</span>
                <span className="link-arrow">↗</span>
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-nav-link"
                data-magnetic="true"
              >
                <span>LinkedIn</span>
                <span className="link-arrow">↗</span>
              </a>
              <a
                href={personalInfo.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-nav-link"
                data-magnetic="true"
              >
                <span>LeetCode</span>
                <span className="link-arrow">↗</span>
              </a>
              <a
                href={personalInfo.socials.codeforces}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-nav-link"
                data-magnetic="true"
              >
                <span>Codeforces</span>
                <span className="link-arrow">↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Status Line */}
        <div className="footer-bottom-line">
          <span className="copyright-txt">
            © 2026 {personalInfo.name.toUpperCase()}. BUILT FOR IIT BHU TECH TEAM SELECTION.
          </span>
          <span className="tech-stack-sub">
            CRAFTED WITH REACT & VANILLA CSS TOKENS · ZERO COMPROMISE
          </span>
        </div>
      </div>
    </footer>
  );
}
