import React from 'react';
import '../App.css';
import '../Matterway.css';

const ROADMAP_ROWS = [
  {
    phase: 'Strategic alignment',
    timeline: 'Week 1',
    action:
      'Conduct a listening tour with Cognizant BPO leads and Matterway’s founders.',
    insights:
      'Align on what “impact” means (e.g., reducing labor cost vs. improving customer NPS).',
    outcome:
      'A “State of the Union” memo summarizing the gap between current capability and vision.',
  },
  {
    phase: 'Metric & driver identification',
    timeline: 'Week 2',
    action: 'Map the North Star metric (e.g., average handling time, AHT) to its technical drivers.',
    insights:
      'Example: AHT for insurance claims. Drivers: search time for customer IDs, swivel-chair data entry between SAP and legacy web apps, and manual verification of PDF attachments.',
    outcome: '—',
  },
  {
    phase: 'High-volume cohort identification',
    timeline: 'Weeks 3–5',
    action:
      'Using proxy data (e.g., seat count per client or ticket volume logs), find the heavy-hitter processes.',
    insights:
      'Target the roughly 20% of processes that account for roughly 80% of agent time (e.g., KYC sanctions screening, purchase-order administration).',
    outcome: '—',
  },
  {
    phase: 'Pattern recognition & behavioral insights',
    timeline: 'Weeks 3–5',
    action: 'Formulate if–then hypotheses from observed behaviors.',
    insights:
      'Examples: Copy-paste loops across tabs (possible universal context clip); physical SOP notebooks because digital SOPs are slow (embed SOP in assistant UI); idle wait on legacy checks (prefetch via an AI agent).',
    outcome: '—',
  },
  {
    phase: 'Delivery & measurement',
    timeline: 'Weeks 6–12',
    action:
      'Ship a low- or no-code intervention (e.g., a simple UI overlay or automated trigger).',
    insights:
      'Compare before (from shadowing) vs. after for that cohort.',
    outcome:
      'A quick-win report showing roughly 10–15% improvement to support long-term roadmap investment.',
  },
];

const MatterwayRoadmap = () => (
  <section className="why-section matterway-section-spaced" aria-labelledby="matterway-roadmap-heading">
    <h2 id="matterway-roadmap-heading" className="section-header">
      My Roadmap
    </h2>

    <div className="glass-card matterway-roadmap-card">
      <h3 className="matterway-roadmap-card-title">Momentum Roadmap</h3>

      <div className="matterway-roadmap-table-wrap">
        <table className="matterway-roadmap-table">
          <thead>
            <tr>
              <th scope="col">Phase</th>
              <th scope="col">Timeline</th>
              <th scope="col">Action</th>
              <th scope="col">Insights &amp; rationale</th>
              <th scope="col">Artifact / outcome</th>
            </tr>
          </thead>
          <tbody>
            {ROADMAP_ROWS.map((row) => (
              <tr key={`${row.phase}-${row.timeline}`}>
                <th scope="row">{row.phase}</th>
                <td>{row.timeline}</td>
                <td>{row.action}</td>
                <td>{row.insights}</td>
                <td>{row.outcome}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default MatterwayRoadmap;
