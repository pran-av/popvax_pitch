import React from 'react';
import Hero from './Hero';
import Roadmap from './Roadmap';
import CaseStudiesWidget from './CaseStudiesWidget';

const PopVaxPage = () => {
  return (
    <>
      <Hero />
      <CaseStudiesWidget />
      <Roadmap />
      
      <footer style={{ textAlign: 'center', marginTop: 'auto', padding: '2rem', color: 'var(--color-text-muted)' }}>
        <p>Pranav @ PopVax &bull; Built for the Million Lives Mission</p>
      </footer>
    </>
  );
};

export default PopVaxPage;
