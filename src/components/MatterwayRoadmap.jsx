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
      'Protocol (server–client): a JSON-based DSL for sequential or branched steps; triggers for when the assistant appears (e.g., URL matches */sap/ui*); agent hooks to APIs where agents do heavy work (OCR, data mapping). Plug-and-play agents via a standardized interface—simple regex validators or LLM KYC screeners all return uniform outputs. No-code flow designer (internal, then external) with drag-and-drop steps so flows like purchase training and claims processing share the same infrastructure.',
  },
  {
    track: 'Measurement: the Impact Command Center',
    effort: '~10%',
    goal:
      'Prove 1–2 year payback with dashboards that emphasize dollar value, not just uptime.',
    initiatives:
      'Telemetry: every protocol step emits started, completed, failed, or bypassed_by_human. Calculated ROI: (avg. manual time − assistant time) × executions. Error avoidance: count of red-flag validations that blocked bad data entry. Funnel analytics: spot drop-off inside flows (e.g., many exits at step 3 signal UX friction or a broken capability).',
  },
  {
    track: 'Monetization: the “Automation Marketplace”',
    effort: '~20%',
    goal:
      'Turn Matterway into a self-service revenue channel inside the Cognizant ecosystem.',
    initiatives:
      'Flow Store: catalog in the Assistant (e.g., “Invoice Exception Handler—try 14 days”). Tiered access—Standard (horizontal flows, basic data entry); Professional (vertical solutions like banking/automotive, customer-built simple flows); Enterprise (specialized high-risk agents owned by Matterway). One-click deployment: purchased flows assigned to groups via the protocol surface in the Assistant without a full product update.',
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
