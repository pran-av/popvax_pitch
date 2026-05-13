import React from 'react';
import '../App.css';
import '../Matterway.css';

const STRATEGY_IMAGE = '/Gemini_Generated_Image_arag2marag2marag.png';

const DIAGRAM_ALT =
  'One intelligent system: vertical pillars for Human Resources (Training); Banking (AML, KYC, Disputes); Insurance (Claims, Riders, Verification); Procurement (BOM, SOP, Inventory, logistic planning); and Financial Services (recon, projections, audits)—all resting on horizontal foundations spanning data lookup, processing, navigation, quality control, document processing, decision making, and rapid prototyping.';

const MatterwayStrategy = () => (
  <section className="why-section matterway-section-spaced" aria-labelledby="matterway-strategy-heading">
    <h2 id="matterway-strategy-heading" className="section-header">
      My Strategy
    </h2>

    <figure className="glass-card matterway-strategy-diagram matterway-strategy-figure">
      <p className="matterway-strategy-kicker">One intelligent system</p>
      <img
        className="matterway-strategy-image"
        src={STRATEGY_IMAGE}
        alt={DIAGRAM_ALT}
        width={2752}
        height={1536}
        loading="lazy"
        decoding="async"
      />
    </figure>
  </section>
);

export default MatterwayStrategy;
