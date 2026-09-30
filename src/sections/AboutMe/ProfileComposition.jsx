import React, { useRef, useState, useCallback } from 'react';
import baditraPhoto from '../../assets/baditra.jpg';
import { personalInfo } from '../../data/personalInfo';
import { MapPin, Cpu, BookOpen } from 'lucide-react';
import './ProfileComposition.css';

export default function ProfileComposition() {
  const frameRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    if (window.matchMedia('(hover: none)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    if (!frameRef.current) return;
    const rect = frameRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const normX = (x / rect.width) * 2 - 1;
    const normY = (y / rect.height) * 2 - 1;

    setTilt({
      x: -normY * 5,
      y: normX * 6
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
  }, []);

  return (
    <div className="profile-composition-wrap">
      {/* 3D Interactive Architectural Portrait */}
      <div
        className="profile-portrait-frame"
        ref={frameRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
        }}
      >
        {/* Precision Framing Corner Brackets */}
        <span className="portrait-bracket p-bracket-tl" />
        <span className="portrait-bracket p-bracket-tr" />
        <span className="portrait-bracket p-bracket-bl" />
        <span className="portrait-bracket p-bracket-br" />

        {/* Matting Container with Baditra's Real Photo */}
        <div className="profile-photo-inner">
          <img
            src={baditraPhoto}
            alt="Baditra Choudhury — Backend-focused Full Stack Developer at IIT BHU"
            className="profile-img"
            loading="lazy"
          />
          <div className="profile-vignette" />
          <div className="profile-scanlines" />

          {/* Subject Telemetry Overlay */}
          <div className="profile-badge-overlay">
            <div className="profile-subject-tag">
              <span className="subject-name">BADITRA CHOUDHURY</span>
              <span className="subject-role">BACKEND & SYSTEMS</span>
            </div>
            <div className="subject-year-pill">IIT BHU '27</div>
          </div>
        </div>
      </div>

      {/* Central Interactive Identity Card */}
      <div className="identity-meta-card">
        <div className="meta-tags-row">
          <span className="meta-pill" data-magnetic="true">
            <MapPin size={10} style={{ display: 'inline', marginRight: '4px' }} />
            BASED IN INDIA
          </span>
          <span className="meta-pill" data-magnetic="true">
            <Cpu size={10} style={{ display: 'inline', marginRight: '4px' }} />
            BUILDING SYSTEMS
          </span>
          <span className="meta-pill" data-magnetic="true">
            <BookOpen size={10} style={{ display: 'inline', marginRight: '4px' }} />
            ALWAYS LEARNING
          </span>
        </div>

        <div className="identity-academic-row">
          <span>{personalInfo.academic.school}</span>
          <span>
            10TH: <span className="academic-score">{personalInfo.academic.metrics.tenth}</span> · 12TH: <span className="academic-score">{personalInfo.academic.metrics.twelfth}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
