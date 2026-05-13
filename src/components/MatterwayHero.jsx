import React from 'react';
import { Rocket, Code2, Presentation } from 'lucide-react';
import '../App.css';
import '../Matterway.css';

const MatterwayHero = () => (
  <div className="hero-section matterway-intro">
    <div className="header-goal">
      <h1>
        Pranav as a <span className="text-gradient">SPM</span>
      </h1>

      <div className="header-tags">
        <span className="tag"><Presentation size={14} /> Sales</span>
        <span className="tag"><Rocket size={14} /> Product Management</span>
        <span className="tag"><Code2 size={14} /> Engineering</span>
      </div>

      <p style={{ marginTop: '1.5rem', fontWeight: 600 }}>
        Workplace productivity and automation &bull; Human-in-the-loop systems
      </p>
    </div>
  </div>
);

export default MatterwayHero;
