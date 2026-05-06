import React from 'react';
import { Target, Zap, Rocket, Code2, Presentation, Briefcase, Cpu } from 'lucide-react';
import '../App.css';
import '../Matterway.css';

const MatterwayHero = () => {
  return (
    <div className="hero-section">
      <div className="header-goal">
        <h1>Pranav as a <span className="text-gradient">SPM</span></h1>
        
        <div className="header-tags">
          <span className="tag"><Presentation size={14} /> Sales</span>
          <span className="tag"><Rocket size={14} /> Product Management</span>
          <span className="tag"><Code2 size={14} /> Engineering</span>
        </div>

        <p style={{ marginTop: '1.5rem', fontWeight: 600 }}>
          Workplace Productivity + Automation &bull; Human-in-the-loop Systems
        </p>
      </div>

      <div className="why-section">
        <h2 className="section-header">
          Why would I be a good choice?
        </h2>
        
        <div className="pointers-grid">
          <div className="glass-card pointer-card">
            <div className="pointer-icon"><Cpu size={24} /></div>
            <h3>Internal Process Automation</h3>
            <p>
              Extensive experience working with internal teams (Finance, Sales, Product & Operations) to identify bottlenecks and automate their core processes for maximum efficiency.
            </p>
          </div>

          <div className="glass-card pointer-card">
            <div className="pointer-icon"><Briefcase size={24} /></div>
            <h3>Strategic Roadmap Leadership</h3>
            <p>
              Managed the Monetization Roadmap as lead PM for 3 years, successfully delivering both B2B and B2C solutions in complex, fast-paced environments.
            </p>
          </div>

          <div className="glass-card pointer-card">
            <div className="pointer-icon"><Zap size={24} /></div>
            <h3>Hands-on Builder Mindset</h3>
            <p>
              Developed a personal automation product from scratch that helps job seekers automate their application process, demonstrating deep empathy for user productivity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatterwayHero;
