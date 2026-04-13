import React from 'react';
import { Target, Activity, Heart, Globe, Presentation, Rocket, Code2 } from 'lucide-react';
import '../App.css';

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="header-goal">
        <h1>Pranav for <span className="text-gradient">Chief of Staff</span></h1>
        
        {/* Tags added to the header */}
        <div className="header-tags">
          <span className="tag"><Presentation size={14} /> Sales</span>
          <span className="tag"><Rocket size={14} /> Product Management</span>
          <span className="tag"><Code2 size={14} /> Engineering</span>
        </div>

        <p style={{ marginTop: '1rem' }}>
          Aligning execution with the <span className="text-gradient-cyan">Million Lives Mission</span> at PopVax
        </p>
      </div>

      <div className="why-section">
        <h2 className="section-header" style={{ textAlign: "center", marginBottom: "2rem" }}>
          Why PopVax?
        </h2>
        
        <div className="pointers-grid">
          <div className="glass-card pointer-card">
            <div className="pointer-icon"><Heart size={24} /></div>
            <h3>Deeply Personal Mission</h3>
            <p>
              Having a family member battling cancer, it’s my personal mission to help unblock the pathways to hyper-personalized care. The <strong>Million Lives Mission</strong> resonates with my ultimate goal.
            </p>
          </div>

          <div className="glass-card pointer-card">
            <div className="pointer-icon"><Target size={24} /></div>
            <h3>Focus on Hard Problems</h3>
            <p>
              My primary interest lies in tackling diseases like Lung Cancer that currently lack FDA-approved treatments, starting by applying learnings from a wide spectrum of chronic diseases.
            </p>
          </div>

          <div className="glass-card pointer-card">
            <div className="pointer-icon"><Globe size={24} /></div>
            <h3>Removing Roadblocks</h3>
            <p>
              I want to remove the policy and technology roadblocks standing in the way of groundbreaking treatments, ensuring clinical trials can be conducted easily and efficiently in India.
            </p>
          </div>
          
          <div className="glass-card pointer-card">
            <div className="pointer-icon"><Activity size={24} /></div>
            <h3>Gaining Domain Experience</h3>
            <p>
              By aligning my execution skills with PopVax’s biotech expertise, I want to gain the experience required to independently continue building products that help defeat the 3000-year battle against cancer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
