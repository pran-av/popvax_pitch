import React from 'react';
import { Target, Activity, Zap, Shield, Microscope } from 'lucide-react';
import '../App.css';

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="header-goal">
        <h1>Pranav for <span className="text-gradient">Chief of Staff</span></h1>
        <p>Aligning execution with the <span className="text-gradient-cyan">Million Lives Mission</span> at PopVax</p>
      </div>

      <div className="hero-split">
        {/* Left Column: Why I want to apply */}
        <div className="glass-card card-content">
          <h2 className="card-title">
            <Activity size={28} />
            Why PopVax?
          </h2>
          <div className="mission-text">
            <p>
              The PopVax mission to save 1 million lives a year from diseases like cancer is deeply personal to me. Having a family member battling cancer has made it my personal mission to help unblock the pathways to hyper-personalized care.
            </p>
            <br />
            <p>
              I want to remove the policy and technology roadblocks standing in the way of groundbreaking treatments. My primary interest is in <strong>Lung Cancer</strong> with no FDA approved treatments, but I recognize that the first critical learnings will be borrowed from treating a wide spectrum of chronic diseases and variations of cancer.
            </p>
          </div>
          <div className="highlight-box">
            <p>I want to gain the critical experience needed in this domain to independently continue building products that help humanity finally defeat our 3000-year-long battle with cancer.</p>
          </div>
        </div>

        {/* Right Column: How Would I Help */}
        <div className="glass-card card-content">
          <h2 className="card-title">
            <Zap size={28} />
            How I Can Help
          </h2>
          <ul className="roadmap-list">
            <li className="roadmap-item">
              <div className="roadmap-icon">
                <Shield size={20} />
              </div>
              <div className="roadmap-content">
                <h4>Remove Clinical Roadblocks</h4>
                <p>Identify and dismantle policy and operational roadblocks, making clinical trials easy, fast, and efficient to conduct in India.</p>
              </div>
            </li>
            
            <li className="roadmap-item">
              <div className="roadmap-icon">
                <Microscope size={20} />
              </div>
              <div className="roadmap-content">
                <h4>Cross-Functional Connective Tissue</h4>
                <p>Align R&D, Manufacturing, and Operations, ensuring that requirement changes are communicated swiftly before they become expensive surprises. [Placeholder]</p>
              </div>
            </li>

            <li className="roadmap-item">
              <div className="roadmap-icon">
                <Target size={20} />
              </div>
              <div className="roadmap-content">
                <h4>Own Execution & Unblock Teams</h4>
                <p>Build the operational infrastructure for speed. Take ownership of ambiguous, cross-cutting orphan problems that don't have an obvious home, letting scientific teams focus on the science. [Placeholder]</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
