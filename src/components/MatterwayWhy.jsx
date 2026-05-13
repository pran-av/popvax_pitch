import React from 'react';
import { Zap, Briefcase, Cpu } from 'lucide-react';
import '../App.css';
import '../Matterway.css';

const MatterwayWhy = () => (
  <div className="why-section matterway-section-spaced">
    <h2 className="section-header">Why would I be a good choice?</h2>

    <div className="pointers-grid">
      <div className="glass-card pointer-card">
        <div className="pointer-icon"><Cpu size={24} /></div>
        <h3>Internal Process Automation</h3>
        <p>
          Extensive experience working with internal teams (Finance, Sales, Product, and
          Operations) to identify bottlenecks and automate their core processes for maximum
          efficiency.
        </p>
      </div>

      <div className="glass-card pointer-card">
        <div className="pointer-icon"><Briefcase size={24} /></div>
        <h3>Strategic Roadmap Leadership</h3>
        <p>
          Led the Monetization Roadmap as PM for three years, successfully delivering both B2B
          and B2C solutions in complex, fast-paced environments.
        </p>
      </div>

      <div className="glass-card pointer-card">
        <div className="pointer-icon"><Zap size={24} /></div>
        <h3>Hands-on Builder Mindset</h3>
        <p>
          Developed a personal automation product from scratch that helps job seekers streamline
          their application workflow, demonstrating deep empathy for user productivity.
        </p>
      </div>
    </div>
  </div>
);

export default MatterwayWhy;
