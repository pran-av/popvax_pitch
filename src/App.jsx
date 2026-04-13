import React from 'react';
import Hero from './components/Hero';
import Roadmap from './components/Roadmap';
import CaseStudiesWidget from './components/CaseStudiesWidget';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Hero />
      <Roadmap />
      <CaseStudiesWidget />
      
      <footer style={{ textAlign: 'center', marginTop: 'auto', padding: '2rem', color: 'var(--color-text-muted)' }}>
        <p>Pranav @ PopVax &bull; Built for the Million Lives Mission</p>
      </footer>
    </div>
  );
}

export default App;
