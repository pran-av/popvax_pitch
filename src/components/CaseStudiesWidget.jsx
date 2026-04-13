import React, { useState } from 'react';
import { ExternalLink, Presentation, Rocket, Code2 } from 'lucide-react';
import '../App.css';

const CaseStudiesWidget = () => {
  const [activeTab, setActiveTab] = useState('PM');

  const tabs = [
    { id: 'Sales', label: 'Sales', icon: Presentation },
    { id: 'PM', label: 'Product Management', icon: Rocket },
    { id: 'Engineering', label: 'Engineering', icon: Code2 }
  ];

  return (
    <div className="case-studies-section glass-card card-content">
      <div className="section-header">
        <h2>Experience & Case Studies</h2>
        <p style={{ color: "var(--color-text-muted)" }}>Explore my domain-specific highlights</p>
      </div>

      <div className="widget-container">
        <div className="widget-tabs">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
                style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                <Icon size={18} />
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="tab-content glass-card">
          {activeTab === 'Sales' && (
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ marginBottom: '1rem', color: "var(--color-primary)" }}>Sales Highlights</h3>
              <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-muted)', maxWidth: '600px' }}>
                Selling ideas internally, pitching products externally, and building sustainable revenue models for high-growth tech initiatives.
              </p>
              <a href="#" className="placeholder-link">
                View Sales Case Studies <ExternalLink size={18} />
              </a>
            </div>
          )}

          {activeTab === 'PM' && (
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ marginBottom: '1rem', color: "var(--color-primary)" }}>Product Management Highlights</h3>
              <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-muted)', maxWidth: '600px' }}>
                Bridging the gap between deeply technical capabilities and urgent user needs. Owning execution from conception to launch.
              </p>
              <a href="#" className="placeholder-link">
                View PM Case Studies <ExternalLink size={18} />
              </a>
            </div>
          )}

          {activeTab === 'Engineering' && (
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ marginBottom: '1rem', color: "var(--color-primary)" }}>Engineering Highlights</h3>
              <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-muted)', maxWidth: '600px' }}>
                Building robust, scalable architectures and diving deep into code when the team needs an extra set of hands to unblock a sprint.
              </p>
              <a href="#" className="placeholder-link">
                View Engineering Case Studies <ExternalLink size={18} />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesWidget;
