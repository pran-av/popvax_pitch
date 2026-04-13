import React from 'react';
import { ExternalLink } from 'lucide-react';
import '../App.css';

const CaseStudiesWidget = () => {
  return (
    <div className="case-studies-section glass-card card-content" style={{ textAlign: 'center', padding: '3rem' }}>
      <h2 style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>Experience & Case Studies</h2>
      <p style={{ marginBottom: '2rem', color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
        Detailed case studies highlighting my execution in Sales, Product Management, and Engineering.
      </p>
      
      <a href="#" className="placeholder-link" style={{ fontSize: '1.1rem', padding: '1.25rem 2.5rem' }}>
        View Portfolio & Case Studies <ExternalLink size={20} />
      </a>
    </div>
  );
};

export default CaseStudiesWidget;
