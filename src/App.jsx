import React from 'react';
import MagneticCursor from './components/MagneticCursor';
import BackgroundAtmosphere from './components/BackgroundAtmosphere';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import BuildingExperience from './sections/BuildingExperience/BuildingExperience';
import AboutSection from './sections/AboutMe/AboutSection';
import ProjectsSection from './sections/Projects/ProjectsSection';
import { personalInfo } from './data/personalInfo';
import { Terminal } from 'lucide-react';
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

        {/* Step 3: About Me — Transition from Place (IIT BHU) to Person (Baditra) */}
        <AboutSection />

        {/* Step 4: Things I've Built — Selected Systems & Engineering Projects */}
        <ProjectsSection />

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
