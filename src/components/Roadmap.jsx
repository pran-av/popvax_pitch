import React, { useState } from 'react';
import '../App.css';

const strategyPointers = [
  {
    title: "Early Detection and Prevention",
    description: "Scope of treatments are wide and chances or survival increase if we detect early. So the most impactful front becomes - Early Detection and Prevention"
  },
  {
    title: "Cure and Technique",
    description: "The second main front is to deal with the already existing invasion. And with that gain knowledge about the enemy. So primary goal of this front is to cure existing ailments but we have a secondary goal of developing technique and identify the best counter measures. - Cure and Technique"
  }
];

const roadmapData = [
  {
    front: "Early Detection & Prevention",
    pointer: "I will enable mass public screening access",
    initiative: "Population Screening Network",
    initiativeDesc: "partner workflows and insurance-linked incentives",
    metric: "50,000+ people/year; >25% follow-up conversion",
    caseStudies: "Built GTM + funnel systems and dashboards to drive renewals, upsell, and cross-sell decisions"
  },
  {
    front: "Early Detection & Prevention",
    pointer: "I will detect abnormalities via behavior and biomarkers",
    initiative: "Risk Scoring Engine",
    initiativeDesc: "using symptoms, behavior, and biomarker data",
    metric: ">80% follow-up completion for flagged users",
    caseStudies: "Built dashboards and tracking systems to surface actionable insights for decisions"
  },
  {
    front: "Early Detection & Prevention",
    pointer: "I will make detection faster and more accessible",
    initiative: "Rapid Detection Stack",
    initiativeDesc: "low-friction intake, routing, and result delivery",
    metric: "Reduce TAT to <24–48 hours",
    caseStudies: "Reduced ops timelines from 7 days → 48 hours via automation and tooling"
  },
  {
    front: "Early Detection & Prevention",
    pointer: "I will drive adoption via economic incentives",
    initiative: "Insurance & Employer Channel Products",
    initiativeDesc: "preventive screening",
    metric: "Launch 3–5 enterprise pilots in Year 1",
    caseStudies: "Executed GTM programs and built revenue pipelines via cross-functional execution"
  },
  {
    front: "Cure & Technique",
    pointer: "I will build high-throughput discovery and decision systems to increase the probability of trial success.",
    initiative: "Discovery-to-Trial Acceleration Platform",
    initiativeDesc: "high-throughput candidate discovery and In Silico trials",
    metric: "% of drugs entering trials that succeed (trial success rate). # of candidates entering pre-clinical per month (throughput). Time from discovery → trial (cycle time).",
    caseStudies: "Led the Monetization roadmap at Infinity Learn and improved revenues by 6X in my tenure.",
    industryBehavior: [
      "The cycle includes Sample Collection - Discovery - Pre Clinical Trials - Trials - Commericialization",
      "Human trials will take its natural time to show impact.",
      "Sample Collection + Discovery + Pre Clinical Trials is where we can save a lot of time"
    ],
    how: [
      "Launch Patient Lab Connect Program where for the first time a patient can directly connect with a lab for a hyper-personalized research focused secondary approach for their treatment.",
      "With more samples we get to discover more variety in solutions that can be made ready for Pre-Trials.",
      "To enable more discovery we need to improve the lab setup to support running simultaneous discovery pipelines. No sequential work.",
      "Build support systems for scientists so they can hand over operational work and focus max time on investigation.",
      "For Pre-Clincial Trials we explore new methods like In Silico Trials where we attempt to replicate human body conditions and measure the drug reaction."
    ]
  },
  {
    front: "Cure & Technique",
    pointer: "I will enable research collaboration and data sharing",
    initiative: "Research Collaboration Hub",
    initiativeDesc: "shared datasets and insights registry",
    metric: "Quarterly reviews with 100% study visibility",
    caseStudies: "Led cross-team coordination and reporting across multiple stakeholders"
  },
  {
    front: "Cure & Technique",
    pointer: "I will build a patient intelligence and care system",
    initiative: "Precision Disease Companion App",
    initiativeDesc: "education, treatment guidance, trial discovery, and peer support",
    metric: "50%+ active usage, 30%+ trial match CTR, 20%+ reduction in support queries",
    caseStudies: "Built structured product systems and shipped 0→1 products; reduced build time by 3X"
  },
  {
    front: "Cure & Technique",
    pointer: "I will make learnings reusable across programs",
    initiative: "Knowledge-to-Protocol Library",
    initiativeDesc: "capturing insights, failures, and response patterns",
    metric: "100% reuse in new program kickoffs",
    caseStudies: "Built reusable product + GTM artifacts reducing build time by 3X"
  },
  {
    front: "Cross-cutting",
    pointer: "I will build mission control for execution",
    initiative: "BioTech Execution OS",
    initiativeDesc: "tracking all programs, risks, and owners",
    metric: "100% tracking; all red items owned within 48 hrs",
    caseStudies: "Built dashboards, tracking systems, and execution workflows across teams"
  },
  {
    front: "Cross-cutting",
    pointer: "I will improve treatment affordability for patients",
    initiative: "Patient Financing Platform",
    initiativeDesc: "EMI-style plans and chronic-care financing options",
    metric: "Launch 3–5 financing partners; improve treatment conversion by 15%+",
    caseStudies: "Integrated EMI, BNPL, and flexible payments leading to 6X revenue growth"
  },
  {
    front: "Go-to-Market / Brand",
    pointer: "I will build institutional demand and credibility",
    initiative: "Vaccine Brand & Institutional GTM Engine",
    initiativeDesc: "research, patents, publications, and partnerships",
    metric: "5-10 institutional leads, 3+ pilots, growing research visibility",
    caseStudies: "Built outbound funnels (600 prospects), closed enterprise clients, and led GTM execution"
  }
];

const Roadmap = () => {
  const [expandedRow, setExpandedRow] = useState(null);
  const [isEarlyDetectionCollapsed, setIsEarlyDetectionCollapsed] = useState(true);

  const toggleRow = (data, localIndex, globalId) => {
    if (data[localIndex].industryBehavior || data[localIndex].how) {
      setExpandedRow(expandedRow === globalId ? null : globalId);
    }
  };

  const earlyDetectionData = roadmapData.filter(row => row.front === "Early Detection & Prevention");
  const otherRoadmapData = roadmapData.filter(row => row.front !== "Early Detection & Prevention");

  const renderTable = (data, sectionId) => (
    <div className="table-container glass-card">
      <table className="roadmap-table">
        <thead>
          <tr>
            <th>Front</th>
            <th>Pointer (What I will do)</th>
            <th>Productised Initiative</th>
            <th>Target Metric</th>
            <th>Related Case Studies</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => {
            const globalIndex = `${sectionId}-${index}`;
            const hasDetails = row.industryBehavior || row.how;
            return (
              <React.Fragment key={globalIndex}>
                <tr 
                  onClick={() => toggleRow(data, index, globalIndex)}
                  className={`${expandedRow === globalIndex ? 'expanded-row' : ''} ${hasDetails ? 'clickable-row' : ''}`}
                >
                  <td className="front-cell">
                    <strong>{row.front}</strong>
                  </td>
                  <td className="pointer-cell">
                    <div className="pointer-content">
                      {row.pointer}
                      {hasDetails && (
                        <button className="expand-button" onClick={(e) => { e.stopPropagation(); toggleRow(data, index, globalIndex); }}>
                          {expandedRow === globalIndex ? 'Collapse' : 'Expand'}
                        </button>
                      )}
                    </div>
                  </td>
                  <td className="initiative-cell">
                    <strong>{row.initiative}</strong>
                    <span className="desc">{row.initiativeDesc}</span>
                  </td>
                  <td className="metric-cell">{row.metric}</td>
                  <td className="case-cell">{row.caseStudies}</td>
                </tr>
                {expandedRow === globalIndex && (
                  <tr className="details-row">
                    <td colSpan="5">
                      <div className="details-content">
                        {row.industryBehavior && (
                          <div className="details-section">
                            <h4>Industry Behavior</h4>
                            <ul>
                              {row.industryBehavior.map((item, i) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {row.how && (
                          <div className="details-section">
                            <h4>How</h4>
                            <ul>
                              {row.how.map((item, i) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="roadmap-section">
      <h2 className="section-header" style={{ textAlign: "center", marginBottom: "3rem" }}>
        Strategic Roadmap & Initiatives
      </h2>

      <div className="strategy-pointers" style={{ marginBottom: "4rem" }}>
        <h3 className="sub-header" style={{ textAlign: "center", marginBottom: "2rem", opacity: 0.8 }}>
          Core Strategic Fronts
        </h3>
        <div className="pointers-grid">
          {strategyPointers.map((ptr, idx) => (
            <div key={idx} className="pointer-card glass-card">
              <div className="pointer-icon">
                {idx === 0 ? "🎯" : "🔬"}
              </div>
              <h3>{ptr.title}</h3>
              <p>{ptr.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="main-roadmap">
        <h3 className="sub-header" style={{ marginBottom: "2rem", textAlign: "center" }}>
          Implementation & Execution Roadmap
        </h3>
        
        <div className="collapsible-section" style={{ marginBottom: "3rem" }}>
          <button 
            className="section-toggle-btn glass-card"
            onClick={() => setIsEarlyDetectionCollapsed(!isEarlyDetectionCollapsed)}
          >
            <span>Early Detection & Prevention Front</span>
            <span className="toggle-icon">{isEarlyDetectionCollapsed ? '↓' : '↑'}</span>
          </button>
          {!isEarlyDetectionCollapsed && renderTable(earlyDetectionData, 'early')}
        </div>
        
        <div className="other-fronts">
          {renderTable(otherRoadmapData, 'main')}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;


