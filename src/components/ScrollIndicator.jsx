import React from 'react';
import './ScrollIndicator.css';

export default function ScrollIndicator({ targetId = '#experience' }) {
  const handleClick = (e) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      className="scroll-indicator-wrap"
      onClick={handleClick}
      aria-label="Scroll down to explore interactive building scene"
    >
      <span className="scroll-cue-text">SCROLL TO EXPLORE</span>
      <div className="scroll-track-container" aria-hidden="true">
        <div className="scroll-traveler" />
      </div>
      <span className="scroll-sub-label" aria-hidden="true">
        CAMPUS SCENE // 25°16' N
      </span>
    </button>
  );
}
