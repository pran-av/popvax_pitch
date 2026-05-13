import React from 'react';
import { Layers, CreditCard, Users } from 'lucide-react';
import '../App.css';
import '../Matterway.css';

const MatterwayExperience = () => (
  <div className="why-section matterway-section-spaced">
    <h2 className="section-header">Relevant Past Experiences</h2>

    <div className="pointers-grid">
      <div className="glass-card pointer-card">
        <div className="pointer-icon"><Layers size={24} /></div>
        <h3>Smart Batching</h3>
        <p>
          Developed a system to optimize operations where users receive assignments based on
          real-time availability, significantly improving throughput and resource allocation.
        </p>
        <div style={{ marginTop: 'auto', fontSize: '0.8rem', color: 'var(--matterway-red)', fontWeight: 700 }}>
          INDIGOLD
        </div>
      </div>

      <div className="glass-card pointer-card">
        <div className="pointer-icon"><CreditCard size={24} /></div>
        <h3>FinOps Automation</h3>
        <p>
          Managed critical financial workflows including EMI disbursements and refunds processing,
          ensuring accuracy and speed in high-volume transaction environments.
        </p>
        <div style={{ marginTop: 'auto', fontSize: '0.8rem', color: 'var(--matterway-red)', fontWeight: 700 }}>
          FINANCE OPS
        </div>
      </div>

      <div className="glass-card pointer-card">
        <div className="pointer-icon"><Users size={24} /></div>
        <h3>Sales Enablement</h3>
        <p>
          Built systems for collecting custom payments for sales teams, reducing manual overhead and
          enabling flexible billing solutions for diverse client needs.
        </p>
        <div style={{ marginTop: 'auto', fontSize: '0.8rem', color: 'var(--matterway-red)', fontWeight: 700 }}>
          SALES TECH
        </div>
      </div>
    </div>
  </div>
);

export default MatterwayExperience;
