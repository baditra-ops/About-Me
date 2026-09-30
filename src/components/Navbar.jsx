import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section spy
      const sections = personalInfo.navLinks.map((link) => link.href.replace('#', ''));
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Left Brand Identity */}
          <div className="nav-island">
            <a
              href="#home"
              className="nav-brand"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#home');
              }}
            >
              <div className="brand-monogram">BC</div>
              <div className="brand-details">
                <span className="brand-name">BADITRA</span>
                <span className="brand-tag">IIT BHU // CHE '27</span>
              </div>
            </a>
          </div>

          {/* Desktop Center Navigation Island */}
          <nav className="nav-island nav-menu" aria-label="Main Navigation">
            {personalInfo.navLinks.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.href);
                  }}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Status Indicator & Mobile Toggle */}
          <div className="nav-actions">
            <div className="status-badge">
              <span className="status-pulse" />
              <span>TECH TEAM CANDIDATE</span>
            </div>

            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`} aria-hidden={!mobileMenuOpen}>
        <div className="mobile-drawer-header">
          <div className="nav-brand">
            <div className="brand-monogram">BC</div>
            <div className="brand-details">
              <span className="brand-name">BADITRA CHOUDHURY</span>
              <span className="brand-tag">IIT BHU // SYSTEM EXPLORER</span>
            </div>
          </div>
          <button
            className="mobile-toggle"
            style={{ display: 'flex' }}
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <ul className="mobile-nav-list">
          {personalInfo.navLinks.map((item) => {
            const sectionId = item.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.href);
                  }}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="mobile-drawer-footer">
          <span className="telemetry-chip">
            <span className="telemetry-dot" /> IIT BHU VARANASI
          </span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)' }}>
            CH102 // 2024-2028
          </span>
        </div>
      </div>
    </>
  );
}
