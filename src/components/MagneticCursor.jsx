import React, { useEffect, useRef, useState } from 'react';
import './MagneticCursor.css';

export default function MagneticCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  // Position references
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const magneticTarget = useRef(null);
  const animFrameId = useRef(null);

  useEffect(() => {
    // Check if device supports hover / not reduced motion
    const hasHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!hasHover) return;

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (isHidden) setIsHidden(false);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseLeaveWindow = () => setIsHidden(true);
    const handleMouseEnterWindow = () => setIsHidden(false);

    // Magnetic attraction to interactive elements
    const handleMouseOver = (e) => {
      const target = e.target.closest(
        'a, button, .tech-pill, .map-node-anchor, .social-pill, .mode-tab, [data-magnetic]'
      );

      if (target) {
        setIsHovering(true);
        magneticTarget.current = target;
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target.closest(
        'a, button, .tech-pill, .map-node-anchor, .social-pill, .mode-tab, [data-magnetic]'
      );

      if (target) {
        setIsHovering(false);
        if (magneticTarget.current) {
          magneticTarget.current.style.transform = '';
          magneticTarget.current = null;
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeaveWindow);
    document.addEventListener('mouseenter', handleMouseEnterWindow);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    // Smooth lerp loop for the outer ring
    const render = () => {
      if (magneticTarget.current) {
        const rect = magneticTarget.current.getBoundingClientRect();
        const targetCenterX = rect.left + rect.width / 2;
        const targetCenterY = rect.top + rect.height / 2;

        // Pull magnetic element slightly towards cursor (magnetic spring)
        const pullDistX = (mousePos.current.x - targetCenterX) * 0.22;
        const pullDistY = (mousePos.current.y - targetCenterY) * 0.22;
        magneticTarget.current.style.transform = `translate(${pullDistX}px, ${pullDistY}px)`;

        // Ring interpolates towards the target center with magnetic snap
        ringPos.current.x += (targetCenterX + pullDistX * 0.5 - ringPos.current.x) * 0.25;
        ringPos.current.y += (targetCenterY + pullDistY * 0.5 - ringPos.current.y) * 0.25;
      } else {
        // Normal smooth lag tracking
        ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.18;
        ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.18;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%)`;
      }

      animFrameId.current = requestAnimationFrame(render);
    };

    animFrameId.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animFrameId.current);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
      document.removeEventListener('mouseenter', handleMouseEnterWindow);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [isHidden]);

  return (
    <div
      className={`custom-cursor-container ${isHovering ? 'hovering' : ''} ${isClicking ? 'clicking' : ''} ${isHidden ? 'hidden' : ''}`}
      aria-hidden="true"
    >
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </div>
  );
}
