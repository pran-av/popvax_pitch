import React from 'react';
import MatterwayHero from './MatterwayHero';
import MatterwayExperience from './MatterwayExperience';
import '../Matterway.css';

const MatterwayPage = () => {
  return (
    <div className="matterway-theme matterway-bg-accents">
      <div className="app-container">
        <MatterwayHero />
        <MatterwayExperience />
        
        <footer style={{ textAlign: 'center', marginTop: 'auto', padding: '2rem', color: 'var(--matterway-text-muted)' }}>
          <p>Pranav @ Matterway &bull; Optimizing Human Productivity</p>
        </footer>
      </div>
    </div>
  );
};

export default MatterwayPage;
