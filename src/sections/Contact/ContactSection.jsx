import React from 'react';
import ContactHeader from './ContactHeader';
import DispatchTerminal from './DispatchTerminal';
import SelectionStatement from './SelectionStatement';
import FinalSystemNode from './FinalSystemNode';
import './ContactSection.css';

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section" aria-label="Terminal & Contact Protocol">
      <div className="container">
        {/* Header Block */}
        <ContactHeader />

        {/* Asymmetric Dispatch Grid */}
        <div className="contact-editorial-layout">
          {/* Main Dispatch Terminal Console */}
          <div className="contact-terminal-col">
            <DispatchTerminal />
          </div>

          {/* IIT BHU Tech Team Selection Statement */}
          <div className="contact-statement-col">
            <SelectionStatement />
          </div>
        </div>

        {/* Final System Convergence Node Moment */}
        <FinalSystemNode />
      </div>
    </section>
  );
}
