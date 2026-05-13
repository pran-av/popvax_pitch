import React from 'react';
import MatterwayHero from './MatterwayHero';
import MatterwayStrategy from './MatterwayStrategy';
import MatterwayRoadmap from './MatterwayRoadmap';
import MatterwayWhy from './MatterwayWhy';
import MatterwayExperience from './MatterwayExperience';
import '../Matterway.css';

const MatterwayPage = () => (
  <div className="matterway-theme matterway-bg-accents matterway-page">
    <div className="matterway-inner">
      <MatterwayHero />
      <MatterwayStrategy />
      <MatterwayRoadmap />
      <MatterwayWhy />
      <MatterwayExperience />

      <footer
        style={{
          textAlign: 'center',
          marginTop: 'auto',
          padding: '2rem',
          color: 'var(--matterway-text-muted)',
        }}
      >
        <p>Pranav @ Matterway &bull; Optimizing human productivity</p>
      </footer>
    </div>
  </div>
);

export default MatterwayPage;
