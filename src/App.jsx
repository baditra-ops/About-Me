import React from 'react';
import MagneticCursor from './components/MagneticCursor';
import BackgroundAtmosphere from './components/BackgroundAtmosphere';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import BuildingExperience from './sections/BuildingExperience/BuildingExperience';
import AboutSection from './sections/AboutMe/AboutSection';
import ProjectsSection from './sections/Projects/ProjectsSection';
import SkillsSection from './sections/Skills/SkillsSection';
import EducationSection from './sections/Education/EducationSection';
import WhatsNextSection from './sections/WhatsNext/WhatsNextSection';
import ContactSection from './sections/Contact/ContactSection';
import Footer from './components/Footer';
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

        {/* Step 5: Technical Arsenal — The Tools & System Architecture */}
        <SkillsSection />

        {/* Step 6: Education & Learning Journey — The Academic Path */}
        <EducationSection />

        {/* Step 7: What's Next — The Next Node & Forward Direction */}
        <WhatsNextSection />

        {/* Step 8: Terminal & Contact Protocol — The Final Destination */}
        <ContactSection />
      </main>

      {/* Polished Minimal Engineering Footer */}
      <Footer />
    </div>
  );
}
