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

const STRATEGIC_ROADMAP_ROWS = [
  {
    track: 'Infrastructure: the “Universal Flow” engine',
    effort: '~70%',
    goal:
      'A schema-driven stack where the Matterway platform is a thin client rendering logic authored on a central server.',
    initiatives:
      'One shared playbook lives on the server; the Matterway UI simply follows it. Define steps (straight or branching), when the assistant should open (for example when an agent reaches a core system screen), and which tools do the grunt work—OCR, moving data between systems, and so on. Any “agent” plugs in behind one contract—whether it is lightweight rules or a heavy AI step. Teams drag and drop flows in a designer so onboarding, claims, finance, etc. reuse the same engine instead of bespoke builds.',
  },
  {
    track: 'Measurement: the Impact Command Center',
    effort: '~10%',
    goal:
      'Prove 1–2 year payback with dashboards that emphasize dollar value, not just uptime.',
    initiatives:
      'Every step in a flow logs start, finish, failure, or “agent skipped this and did it manually.” Tie that to dollars: time saved × how often it runs. Count how often we stop bad submissions before they become rework. Watch where people quit the assistant—steady drop-off at one step flags bad UX or a missing integration.',
  },
  {
    track: 'Monetization: the “Automation Marketplace”',
    effort: '~20%',
    goal:
      'Turn Matterway into a self-service revenue channel inside the Cognizant ecosystem.',
    initiatives:
      'In-product “store” where leaders browse ready-made workflows (trial periods, ratings, upgrades). Pricing tiers: essentials for horizontal work, richer packs for regulated industries plus light self-service build, elite tier for Matterway-built high-risk automations. After purchase, assign a flow to a team and it appears in their Assistant—no traditional release cycle required.',
  },
];

function RoadmapImpactSummary({ impactTimeline, delivery }) {
  return (
    <p className="matterway-roadmap-impact">
      <span className="matterway-roadmap-impact-item">
        <span className="matterway-roadmap-impact-label">Impact timeline:</span>
        {' '}
        {impactTimeline}
      </span>
      <span className="matterway-roadmap-impact-sep" aria-hidden>
        {' · '}
      </span>
      <span className="matterway-roadmap-impact-item">
        <span className="matterway-roadmap-impact-label">Delivery:</span>
        {' '}
        {delivery}
      </span>
    </p>
  );
}

function RoadmapMomentumTable({ rows }) {
  return (
    <div className="matterway-roadmap-table-wrap matterway-roadmap-table-wrap--momentum">
      <table className="matterway-roadmap-table matterway-roadmap-table--momentum">
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
          {rows.map((row) => (
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
  );
}

function RoadmapStrategicTable({ rows }) {
  return (
    <div className="matterway-roadmap-table-wrap matterway-roadmap-table-wrap--strategic">
      <table className="matterway-roadmap-table matterway-roadmap-table--strategic">
        <thead>
          <tr>
            <th scope="col">Track</th>
            <th scope="col">Effort</th>
            <th scope="col">Goal</th>
            <th scope="col">Initiatives &amp; capabilities</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={`${row.track}-${row.effort}`}>
              <th scope="row">{row.track}</th>
              <td>{row.effort}</td>
              <td>{row.goal}</td>
              <td>{row.initiatives}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const MatterwayRoadmap = () => (
  <section className="why-section matterway-section-spaced" aria-labelledby="matterway-roadmap-heading">
    <h2 id="matterway-roadmap-heading" className="section-header">
      My Roadmap
    </h2>

    <div className="matterway-roadmap-stack">
      <div className="glass-card matterway-roadmap-card">
        <header className="matterway-roadmap-card-head">
          <h3 className="matterway-roadmap-card-title">Momentum Roadmap</h3>
          <RoadmapImpactSummary impactTimeline="Quarterly" delivery="2–3 months" />
        </header>
        <RoadmapMomentumTable rows={ROADMAP_ROWS} />
      </div>

      <div className="glass-card matterway-roadmap-card">
        <header className="matterway-roadmap-card-head">
          <h3 className="matterway-roadmap-card-title">Strategic Roadmap</h3>
          <RoadmapImpactSummary impactTimeline="1–2 years" delivery="6–12 months" />
        </header>
        <RoadmapStrategicTable rows={STRATEGIC_ROADMAP_ROWS} />
      </div>
    </div>
  </section>
);

export default MatterwayRoadmap;
