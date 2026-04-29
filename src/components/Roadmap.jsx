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
      "The cycle includes <strong>Sample Collection - Discovery - Pre Clinical Trials - Trials - Commercialization</strong>",
      "<strong>Human trials</strong> will take its natural time to show impact.",
      "<strong>Sample Collection + Discovery + Pre Clinical Trials</strong> is where we can save a lot of time"
    ],
    how: [
      "Launch <strong>Patient Lab Connect Program</strong> where for the first time a patient can directly connect with a lab for a hyper-personalized research focused secondary approach for their treatment.",
      "With <strong>more samples</strong> we get to discover more variety in solutions that can be made ready for Pre-Trials. This means a lot of drugs can be in <strong>trial pipeline simultaneously</strong>.",
      "To enable more discovery we need to improve the <strong>lab setup</strong> to support running <strong>simultaneous discovery pipelines</strong>. No sequential work.",
      "Build <strong>support systems for scientists</strong> so they can hand over operational work and focus max time on investigation. Consider each scientist in a month researching on <strong>2x or 3x more</strong> discovery pipelines.",
      "For Pre-Clinical Trials we explore new methods like <strong>In Silico Trials</strong> where we attempt to replicate human body conditions and measure the drug reaction. This enables us to deliver drugs to trials with <strong>double the confidence</strong> of success."
    ]
  },
  {
    front: "Cure & Technique",
    pointer: "I will build a secure, audit-ready research data infrastructure that enables seamless collaboration while ensuring regulatory compliance and data integrity.",
    initiative: "Trusted Research Data Exchange",
    initiativeDesc: "secure data infrastructure and audit-ready pipelines",
    metric: "% experiments fully ALCOA+ compliant, Data reuse rate across experiments, Time to hire for critical roles, investment conversions",
    caseStudies: "Developed auditable backend systems for payment collection and transaction management that could scale up to 400k monthly transactions with 99.99% uptime.",
    industryBehavior: [
      "<strong>ALCOA+ principles</strong> for Good Laboratory Practices classification",
      "<strong>Data Residency Requirements</strong> and <strong>GDPR</strong> for transfers",
      "Either internal data sharing becomes a <strong>bottleneck</strong> and slows down research or becomes loose enough to risk <strong>data privacy</strong>",
      "Difficuly <strong>finding talent</strong>"
    ],
    how: [
      "<strong>Guardrails</strong> to avoid human errors: Machines should be linked to internal systems to record <strong>state, scientist info, and sample info digitally</strong> for every experiment.",
      "<strong>AI driven audit logs</strong> so any mistakes are caught early instead of during regulatory audits risking the entire drug.",
      "Implement <strong>Deny by Default</strong> data security architecture along with <strong>strict role based access control</strong> with multiparty approval system.",
      "<strong>University programs</strong> to build interest in young scientists and include them in gaining research experience through <strong>internships</strong>. Convert internship to full time.",
      "Improve <strong>public brand reviews</strong> and <strong>work benefits</strong> to attract more talent."
    ]
  },
  {
    front: "Cure & Technique",
    pointer: "I will build a patient intelligence and engagement system that improves drug design, accelerates trial recruitment, and generates real-world evidence at scale.",
    initiative: "Patient Intelligence & Engagement Platform",
    initiativeDesc: "B2C engagement, trial recruitment, and RWE generation",
    metric: "# of actionable insights per disease area, Time to recruit trial participants, % of trials supported with RWE datasets",
    caseStudies: "Experience with B2C product lifecycle. Started and scaled growth initiatives like referrals and renewals.",
    industryBehavior: [
      "The drug adoption in the market depends on the <strong>market sentiment</strong>, like which side effects are less desired. Hence building a good <strong>Target Product Profile</strong> becomes crucial.",
      "Difficulty to <strong>find right patients</strong> for clinical trials and <strong>high drop out rates</strong> in clinical trials",
      "Trials require a lot of data for comparison and to prove <strong>Real World Effectiveness</strong> of the drug"
    ],
    how: [
      "Start building <strong>Patient Self Help Groups</strong> from the very beginning - this will help with access to <strong>patient perspectives</strong> regarding logistics, finances, physical and mental impacts. Much better <strong>product profiling</strong> with this data.",
      "Use the same Self Help Group pipeline to build a <strong>brand</strong> so that candidates for clinical trials can be identified faster through <strong>referrals and word of mouth</strong>",
      "Host <strong>Doctor-Scientist conferences or podcasts</strong> as a brand building measure. Branding should also help with getting <strong>faster permissions for trials</strong> - removing regulatory overhead.",
      "A <strong>B2C initiative</strong> that provides personalised healthcare support to individuals or improves quality of life like <strong>biomarker tracking</strong>. Could include subsidised screening of health individuals - this will help with access to <strong>control data</strong> that will help faster evidence in clinical trials."
    ]
  },
  {
    front: "Cross-cutting",
    pointer: "I will build mission control for execution",
    initiative: "BioTech Execution OS",
    initiativeDesc: "tracking all programs, risks, and owners",
    metric: "100% tracking; all red items owned within 48 hrs",
    caseStudies: "Built dashboards, tracking systems, and execution workflows across teams"
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
                                <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                              ))}
                            </ul>
                          </div>
                        )}
                        {row.how && (
                          <div className="details-section">
                            <h4>How</h4>
                            <ul>
                              {row.how.map((item, i) => (
                                <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
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


