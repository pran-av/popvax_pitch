import React from 'react';
import '../App.css';

const roadmapData = [
  {
    task: "Build a single source of truth for all programs, risks, dependencies, and weekly exec visibility",
    skillset: "Program management, KPI dashboards, Metabase, reporting systems, Jira, Confluence, stakeholder management",
    caseStudies: "Built Metabase dashboards that surfaced renewal, upsell, and cross-sell insights for sales",
    products: <strong>Execution OS</strong>,
    productsDesc: "one live program registry with owners, milestones, blockers, RAG status, auto-reminders, and CEO-ready weekly digest"
  },
  {
    task: "Run a cross-functional cadence across R&D, Manufacturing, QA, and Ops",
    skillset: "Cross-functional execution, agile delivery, planning, release tracking, stakeholder management",
    caseStudies: "Led monetization roadmap at Infinity Learn across sales, finance, engineering, operations, business, and marketing; shipped payment flows, backend order collection, transaction management, discounting, SKU management, invoicing, renewals, and refunds",
    products: <strong>Cross-Functional Command Center</strong>,
    productsDesc: "shared workspace for decisions, action items, approvals, and dependencies so handoffs stop breaking"
  },
  {
    task: "Unblock orphan projects and remove founder bottlenecks",
    skillset: "Execution tracking, prioritization, rapid delivery, problem solving, rollout coordination",
    caseStudies: "Salesportal launched within one week to unblock sales requirements and free engineering time for the long-term solution",
    products: <strong>Rapid-Fix Queue</strong>,
    productsDesc: "a triage system for urgent asks with SLA, owner assignment, temporary workaround, and long-term product ticket"
  },
  {
    task: "Create operational playbooks so execution scales without reinventing the process",
    skillset: "PRDs, execution plans, reusable artifacts, workflow design, product thinking",
    caseStudies: "Built The Trenchmen as a founder and used AI stacks to ship usable products and reusable artifacts; reduced product build time by 3X",
    products: <strong>Playbook Builder</strong>,
    productsDesc: "SOP generator + wiki + workflow templates for every recurring process, versioned by function"
  },
  {
    task: "Build internal tools for reporting, batching, cancellations, conversions, and renewals",
    skillset: "Product ops, backend coordination, analytics, SQL, JS, workflow automation, revenue reporting",
    caseStudies: "Finance dashboard for EMI disbursements and refund approvals; reconciliation reports; automated batching flow; transferring packages, issuing refunds, and launching SKUs reduced from 7 days to 48 hours in most cases",
    products: <strong>Ops Console</strong>,
    productsDesc: "one internal tool for refunds, transfers, SKU launches, batching, approvals, and audit trails"
  },
  {
    task: "Design hiring and onboarding systems that reduce ramp time and keep quality high",
    skillset: "Process design, onboarding workflows, sales enablement, documentation, stakeholder management",
    caseStudies: "Built sales systems covering payment collection, tech troubleshooting, report usage, post-sales invoicing, service activation, and incentive generation",
    products: <strong>Ramp-Up Hub</strong>,
    productsDesc: "onboarding portal with role-based checklists, process guides, FAQ, ownership matrix, and training flows"
  },
  {
    task: "Deliver investor updates and truthful metrics narratives",
    skillset: "Metrics thinking, business reporting, quarterly review preparation, communication, narrative building with data",
    caseStudies: "Responsible for monetization metrics and quarterly leadership reviews, including wins and losses",
    products: <strong>Metrics Cockpit</strong>,
    productsDesc: "investor/leadership dashboard with KPI definitions, trend lines, commentary, and auto-generated quarterly update packs"
  },
  {
    task: "Support external integrations and partner coordination with structured communication and tracking",
    skillset: "Communication, project tracking, external partner coordination, integration delivery, documentation",
    caseStudies: "Integrated payment systems with gateways and independent EMI partners; strong written and oral communication plus project tracking helped deliver the project",
    products: <strong>Partner Integration Hub</strong>,
    productsDesc: "integration tracker with API status, partner SLAs, error handling, reconciliation checks, and launch checklist"
  }
];

const Roadmap = () => {
  return (
    <div className="roadmap-section">
      <h2 className="section-header" style={{ textAlign: "center", marginBottom: "2rem" }}>
        How I Can Help: Operational Roadmap
      </h2>
      
      <div className="table-container glass-card">
        <table className="roadmap-table">
          <thead>
            <tr>
              <th>Task</th>
              <th>Matching Skillset</th>
              <th>Related Case Studies</th>
              <th>Potential Products</th>
            </tr>
          </thead>
          <tbody>
            {roadmapData.map((row, index) => (
              <tr key={index}>
                <td className="task-cell">{row.task}</td>
                <td className="skill-cell">{row.skillset}</td>
                <td className="case-cell">{row.caseStudies}</td>
                <td className="product-cell">
                  {row.products}: {row.productsDesc}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Roadmap;
