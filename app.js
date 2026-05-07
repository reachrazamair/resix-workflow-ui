const workflowData = {
  northStar:
    "The loan must be provable before downstream distribution. This flow prioritizes whole loan and MBS execution first, with optional tokenization for selected assets after integrity gates pass.",
  principles: [
    {
      title: "Integrity Before Distribution",
      body: "No whole loan, MBS, or tokenization path opens until integrity and diligence gates pass."
    },
    {
      title: "Fragmented-File Native",
      body: "Assume missing docs, inconsistent tape fields, and broken assignment chains by default."
    },
    {
      title: "Evidence Over Assertion",
      body: "Every material transition carries durable proof context: hash, time, actor, reason, status."
    },
    {
      title: "Enterprise Pivotable",
      body: "Integrations can vary by enterprise, while core schema and eligibility states remain stable."
    },
    {
      title: "Infrastructure Posture",
      body: "Current model supports bilateral commercial workflows as an evidence and integrity layer, not an ATS-first market structure."
    }
  ],
  phases: [
    {
      id: "phase1",
      title: "Loan Tape + Collateral Ingestion",
      short: "Intake and first integrity boundary.",
      objective: "Capture fragmented source inputs and establish initial integrity records.",
      inputs: [
        "Loan tape (CSV, MISMO, XML)",
        "Collateral artifacts (note, mortgage, assignments, title, valuation, servicing)",
        "Exception reports and trailing docs"
      ],
      outputs: [
        "Ingestion manifest",
        "Source integrity record",
        "Initial completeness matrix"
      ],
      controls: [
        "Schema validation",
        "Seller-level source attribution",
        "Immediate file/field hash generation"
      ]
    },
    {
      id: "phase2",
      title: "Structured Loan File Reconstruction",
      short: "Canonical object creation for fragmented files.",
      objective: "Rebuild fragmented records into one canonical, auditable loan object.",
      inputs: [
        "Normalized tape field mappings",
        "Linked artifacts and identifiers",
        "Ownership and assignment timeline"
      ],
      outputs: [
        "Structured loan file (working state)",
        "Coverage score",
        "Reconstruction notes and unresolved gaps"
      ],
      controls: [
        "Conflict resolution workflows",
        "Artifact traceability requirements",
        "Gap tracking and escalation"
      ]
    },
    {
      id: "phase3",
      title: "Defect Tagging and Scoring",
      short: "Turn uncertainty into explicit risk state.",
      objective: "Translate file quality ambiguity into machine-readable risk and remediation states.",
      inputs: [
        "Reconstructed file and linked artifacts",
        "Defect rules (note, assignment, title, valuation, servicing)",
        "Exception metadata"
      ],
      outputs: [
        "Defect register per loan",
        "Severity and tradability class",
        "Cure requirements with ownership and deadlines"
      ],
      controls: [
        "Standard defect taxonomy",
        "Reason-coded exceptions",
        "Re-score on cure completion"
      ]
    },
    {
      id: "phase4",
      title: "Walacor Integrity Layer",
      short: "Evidence anchoring and chain-of-custody.",
      objective: "Anchor lifecycle evidence so state, sequence, and ownership are verifiable.",
      inputs: [
        "File-level and field-level hashes",
        "Defect and cure state transitions",
        "Ownership and servicing events"
      ],
      outputs: [
        "Proof package ID",
        "Audit trail exports",
        "Chain-of-custody timeline"
      ],
      controls: [
        "Immutable event logging",
        "Actor attribution for material decisions",
        "Export-ready diligence evidence"
      ]
    },
    {
      id: "phase5",
      title: "Buyer Exposure + Distribution Readiness",
      short: "Whole loan and MBS readiness, then optional token path.",
      objective:
        "Separate diligence visibility from distribution readiness and only allow tokenization for selected assets.",
      inputs: [
        "Integrity completeness thresholds",
        "Defect disclosure/cure status",
        "Ownership and compliance checks"
      ],
      outputs: [
        "Diligence room visibility",
        "Readiness status (NotReady, DiligenceOpen, WholeLoanReady, MBSReady, TokenCandidate)",
        "Distribution path decision (WholeLoan or MBS)",
        "Optional tokenization subset flags",
        "Status transition event records"
      ],
      controls: [
        "Readiness policy service",
        "Gate-based exposure model",
        "Tracked buyer-side diligence actions",
        "Selective tokenization approval workflow"
      ]
    }
  ],
  modules: {
    core: [
      "Ingestion and normalization service",
      "Document and artifact registry",
      "Defect and cure engine",
      "Walacor proof and audit service",
      "Eligibility and policy service",
      "Diligence room service"
    ],
    pluggable: [
      "Property and valuation providers",
      "Credit, income, and identity providers",
      "Agency and eligibility adapters",
      "Servicer system connectors",
      "Token issuance and custody adapters"
    ]
  },
  screens: [
    {
      name: "Intake Control Tower",
      role: "Operations intake analyst",
      show: [
        "Pool ingestion status",
        "Missing artifact count",
        "Schema validation errors",
        "Integrity generation status"
      ],
      actions: ["Accept ingestion batch", "Request missing files", "Route to reconstruction"]
    },
    {
      name: "Loan Reconstruction Workspace",
      role: "Data operations specialist",
      show: [
        "Canonical fields vs source fields",
        "Artifact linkage panel",
        "Assignment timeline builder",
        "Coverage score and unresolved gaps"
      ],
      actions: ["Resolve mapping conflicts", "Attach/replace artifacts", "Submit for defect scoring"]
    },
    {
      name: "Defect and Cure Console",
      role: "Risk and diligence operations",
      show: [
        "Defect list with severity",
        "Cure requirements and ownership",
        "Tradability class",
        "Exception history"
      ],
      actions: ["Assign cure owner", "Approve exception with reason", "Re-score after cure"]
    },
    {
      name: "Proof and Chain-of-Custody Viewer",
      role: "Compliance and partner reviewers",
      show: [
        "Proof package status",
        "Hash and timestamp entries",
        "Ownership and state transition timeline",
        "Export-ready audit bundle"
      ],
      actions: ["Validate proof set", "Export evidence", "Approve eligibility handoff"]
    },
    {
      name: "Buyer Diligence and Eligibility",
      role: "Capital markets and buyer relations",
      show: [
        "Loan and pool overview metrics",
        "Readiness by asset (whole loan and MBS)",
        "Distribution path by asset",
        "Tokenization status for selected assets",
        "Defect disclosure summary",
        "Servicing continuity status"
      ],
      actions: ["Grant diligence access", "Select distribution path", "Queue optional tokenization", "Record buyer diligence events"]
    }
  ],
  entities: [
    "Seller",
    "Loan",
    "LoanArtifact",
    "LoanStateEvent",
    "Defect",
    "CureAction",
    "ProofPackage",
    "EligibilityDecision",
    "ServicingUpdate",
    "BuyerAccessEvent"
  ],
  statuses: {
    loan: [
      "Ingested",
      "Reconstructed",
      "Scored",
      "ProofAnchored",
      "DiligenceOpen",
      "WholeLoanReady",
      "MBSReady",
      "TokenCandidate",
      "Transferred"
    ],
    defect: ["Open", "InCure", "Resolved", "AcceptedException"],
    eligibility: ["NotReady", "DiligenceOnly", "Eligible"]
  },
  controls: [
    "Full event logging for material state changes",
    "Mandatory reason code for overrides and exceptions",
    "Time-bound cure SLA tracking",
    "Immutable proof and decision history export",
    "Role-based access controls by workflow stage"
  ],
  deckMap: {
    capitalRaise: [
      "Problem: fragmented files create trust and liquidity friction",
      "Solution: proof-first operating flow for non-pristine credit",
      "Moat: normalized artifacts + defect intelligence + proof continuity"
    ],
    partnership: [
      "Architecture: core modules with enterprise pluggable adapters",
      "Operations: role-based screens and gated lifecycle transitions",
      "Governance: evidence and audit controls for counterparties"
    ]
  }
};

const northStarEl = document.getElementById("north-star");
const principlesGridEl = document.getElementById("principles-grid");
const workflowRailEl = document.getElementById("workflow-rail");
const phaseDetailEl = document.getElementById("phase-detail");
const modulesGridEl = document.getElementById("modules-grid");
const screensGridEl = document.getElementById("screens-grid");
const entitiesListEl = document.getElementById("entities-list");
const loanStatusesEl = document.getElementById("loan-statuses");
const otherStatusesEl = document.getElementById("other-statuses");
const controlsListEl = document.getElementById("controls-list");
const deckMapEl = document.getElementById("deck-map");

let activePhaseId = workflowData.phases[0].id;

function listMarkup(items) {
  return `<ul class="list">${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function renderPrinciples() {
  principlesGridEl.innerHTML = workflowData.principles
    .map(
      (principle) => `
      <article class="principle">
        <h3>${principle.title}</h3>
        <p>${principle.body}</p>
      </article>
    `
    )
    .join("");
}

function renderWorkflowRail() {
  workflowRailEl.innerHTML = workflowData.phases
    .map((phase, index) => {
      const selected = phase.id === activePhaseId;
      return `
        <button
          class="phase-node"
          type="button"
          role="tab"
          aria-selected="${selected}"
          aria-controls="phase-detail"
          id="tab-${phase.id}"
          data-phase-id="${phase.id}"
        >
          <span class="phase-index">${index + 1}</span>
          <p class="phase-title">${phase.title}</p>
          <p class="phase-short">${phase.short}</p>
        </button>
      `;
    })
    .join("");
}

function renderPhaseDetail() {
  const phase = workflowData.phases.find((entry) => entry.id === activePhaseId);
  if (!phase) return;

  phaseDetailEl.innerHTML = `
    <h3>${phase.title}</h3>
    <p class="subtle">${phase.objective}</p>
    <div class="detail-grid">
      <section class="detail-card">
        <h4>Inputs</h4>
        ${listMarkup(phase.inputs)}
      </section>
      <section class="detail-card">
        <h4>Outputs</h4>
        ${listMarkup(phase.outputs)}
      </section>
      <section class="detail-card">
        <h4>Key Controls</h4>
        ${listMarkup(phase.controls)}
      </section>
    </div>
  `;
}

function renderModules() {
  modulesGridEl.innerHTML = `
    <article class="panel">
      <h3>Core Modules (MVP-Critical)</h3>
      ${listMarkup(workflowData.modules.core)}
    </article>
    <article class="panel">
      <h3>Pluggable Modules (Enterprise Variant)</h3>
      ${listMarkup(workflowData.modules.pluggable)}
    </article>
  `;
}

function renderScreens() {
  screensGridEl.innerHTML = workflowData.screens
    .map(
      (screen) => `
      <article class="panel">
        <h3>${screen.name}</h3>
        <p class="subtle"><strong>Role:</strong> ${screen.role}</p>
        <h4>Must Show</h4>
        ${listMarkup(screen.show)}
        <h4>Primary Actions</h4>
        ${listMarkup(screen.actions)}
      </article>
    `
    )
    .join("");
}

function renderDataModel() {
  entitiesListEl.innerHTML = workflowData.entities.map((entity) => `<li><code>${entity}</code></li>`).join("");
  loanStatusesEl.innerHTML = workflowData.statuses.loan.map((status) => `<span class="chip">${status}</span>`).join("");
  otherStatusesEl.innerHTML = `
    <article class="panel">
      <h3>Defect Lifecycle</h3>
      <div class="chip-group">
        ${workflowData.statuses.defect.map((status) => `<span class="chip">${status}</span>`).join("")}
      </div>
    </article>
    <article class="panel">
      <h3>Eligibility Lifecycle</h3>
      <div class="chip-group">
        ${workflowData.statuses.eligibility.map((status) => `<span class="chip">${status}</span>`).join("")}
      </div>
    </article>
  `;
}

function renderControlsAndDeckMap() {
  controlsListEl.innerHTML = workflowData.controls.map((item) => `<li>${item}</li>`).join("");
  deckMapEl.innerHTML = `
    <article class="panel">
      <h3>Deck 1: Capital Raise</h3>
      ${listMarkup(workflowData.deckMap.capitalRaise)}
    </article>
    <article class="panel">
      <h3>Deck 2: Partnership and Technical</h3>
      ${listMarkup(workflowData.deckMap.partnership)}
    </article>
  `;
}

function handleRailClick(event) {
  const button = event.target.closest("[data-phase-id]");
  if (!button) return;
  activePhaseId = button.dataset.phaseId;
  renderWorkflowRail();
  renderPhaseDetail();
}

function handleRailKeyboard(event) {
  const tabs = Array.from(workflowRailEl.querySelectorAll("[data-phase-id]"));
  const currentIndex = tabs.findIndex((tab) => tab.dataset.phaseId === activePhaseId);
  if (currentIndex < 0) return;

  if (event.key === "ArrowRight" || event.key === "ArrowDown") {
    event.preventDefault();
    const next = tabs[(currentIndex + 1) % tabs.length];
    activePhaseId = next.dataset.phaseId;
    renderWorkflowRail();
    renderPhaseDetail();
    workflowRailEl.querySelector(`[data-phase-id="${activePhaseId}"]`)?.focus();
  }

  if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
    event.preventDefault();
    const prev = tabs[(currentIndex - 1 + tabs.length) % tabs.length];
    activePhaseId = prev.dataset.phaseId;
    renderWorkflowRail();
    renderPhaseDetail();
    workflowRailEl.querySelector(`[data-phase-id="${activePhaseId}"]`)?.focus();
  }
}

function init() {
  northStarEl.textContent = workflowData.northStar;
  renderPrinciples();
  renderWorkflowRail();
  renderPhaseDetail();
  renderModules();
  renderScreens();
  renderDataModel();
  renderControlsAndDeckMap();

  workflowRailEl.addEventListener("click", handleRailClick);
  workflowRailEl.addEventListener("keydown", handleRailKeyboard);
}

init();
