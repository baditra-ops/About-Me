import React from 'react';
import MagneticCursor from './components/MagneticCursor';
import BackgroundAtmosphere from './components/BackgroundAtmosphere';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import BuildingExperience from './sections/BuildingExperience/BuildingExperience';
import { personalInfo } from './data/personalInfo';
import { Terminal, Shield } from 'lucide-react';
import './App.css';

export default function App() {
  return (
    <div className="app-wrapper">
      {/* High-Performance Magnetic Reticle Cursor */}
      <MagneticCursor />

      {/* Background Ambience Layer */}
      <BackgroundAtmosphere />

      {/* Futuristic Floating Navigation */}
      <Navbar />

      <main className="main-content">
        {/* Step 1 Foundation: Cinematic Hero */}
        <HeroSection />

        {/* Step 2 Core Selection Focus: The Heart of IIT BHU Interactive Experience */}
        <BuildingExperience />

        {/* Transition Bridge: Reserved Anchor Framework for Step 3 (About Me) */}
        <section id="about" className="section-marker">
          <div className="container">
            <div className="section-marker-inner">
              <span className="marker-telemetry">
                <Terminal size={14} />
                <span>STAGE 03 READY // TRANSITION FROM CAMPUS CORE</span>
              </span>
              <h3 className="marker-title">About Me & Educational Odyssey</h3>
              <p className="marker-desc">
                Seamless transition point into Baditra Choudhury's 2nd Year Chemical Engineering journey, Julien Day School background, and backend systems philosophy.
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="section-marker">
          <div className="container">
            <div className="section-marker-inner">
              <span className="marker-telemetry">
                <Shield size={14} />
                <span>PHASE ARCHITECTURE // STAGE 06 READY</span>
              </span>
              <h3 className="marker-title">Engineering Projects</h3>
              <p className="marker-desc">
                Reserved container for VideoTube, Real-Time Ticketing System, and Smart Real-Time Monitoring System.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="section-marker">
          <div className="container">
            <div className="section-marker-inner">
              <span className="marker-telemetry">
                <Terminal size={14} />
                <span>PHASE ARCHITECTURE // STAGE 07 READY</span>
              </span>
              <h3 className="marker-title">Technical Matrix & Systems Stack</h3>
              <p className="marker-desc">
                Reserved container for Java, WebSockets, Redis, PostgreSQL, Prisma, and distributed systems.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="section-marker">
          <div className="container">
            <div className="section-marker-inner">
              <span className="marker-telemetry">
                <Terminal size={14} />
                <span>PHASE ARCHITECTURE // STAGE 09 READY</span>
              </span>
              <h3 className="marker-title">Terminal & Contact Protocol</h3>
              <p className="marker-desc">
                Reserved container for direct reach-out, email dispatch, and engineering collaboration channels.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Minimal Engineering Footer */}
      <footer className="site-footer">
        <div className="container footer-content">
          <div className="footer-left">
            <span className="footer-brand">{personalInfo.name.toUpperCase()}</span>
            <span className="footer-sub">
              IIT BHU Varanasi • Chemical Engineering '27 • Tech Team Selection
            </span>
          </div>

          <div className="footer-right">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              GitHub ↗
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              LinkedIn ↗
            </a>
            <a
              href={personalInfo.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              LeetCode ↗
            </a>
            <a
              href={personalInfo.socials.codeforces}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Codeforces ↗
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
