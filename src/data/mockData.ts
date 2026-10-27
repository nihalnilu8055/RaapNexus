export interface InteractivePrompt {
  id: string;
  query: string;
  shortLabel: string;
  category: "Sales" | "Finance" | "Inventory" | "Invoicing";
  thinkingSteps: string[];
  responseTitle: string;
  responseSummary: string;
  metrics: { label: string; value: string; change?: string; positive?: boolean }[];
  chartData?: { name: string; value: number; secondary?: number }[];
  chartType?: "bar" | "line" | "area";
  tableHeaders?: string[];
  tableRows?: (string | number)[][];
  isAction?: boolean;
  actionDetails?: {
    type: string;
    customer: string;
    items: { code: string; name: string; qty: number; unitPrice: number; total: number }[];
    subtotal: number;
    vat: number;
    total: number;
    validationChecks: { rule: string; passed: boolean; note: string }[];
    approvalStatus: "PENDING_APPROVAL" | "PRE_VALIDATED" | "READY_TO_POST";
    tenantScope: string;
    requestedBy: string;
  };
}

export const INTERACTIVE_PROMPTS: InteractivePrompt[] = [
  {
    id: "branch-sales",
    query: "What were sales by branch yesterday?",
    shortLabel: "Branch Sales (Yesterday)",
    category: "Sales",
    thinkingSteps: [
      "Authenticating user context (Role: Regional VP, Tenant: GCC-Holdings)...",
      "Mapping natural language 'yesterday' to Date: 2026-10-26T00:00:00Z...",
      "Resolving ERP branch ledger codes (DXB-01, AUH-02, SHJ-03, DOH-04)...",
      "Compiling aggregated sales register and variance against target...",
    ],
    responseTitle: "Consolidated Daily Sales by Branch — Oct 26, 2026",
    responseSummary: "Total net sales across 4 active branches reached $184,420 yesterday, an 11.4% increase over target driven by strong retail performance in Dubai Downtown and Abu Dhabi Mall.",
    metrics: [
      { label: "Total Net Sales", value: "$184,420", change: "+11.4% vs target", positive: true },
      { label: "Total Transactions", value: "1,428", change: "+8.2% DoD", positive: true },
      { label: "Top Branch", value: "Dubai Downtown ($78.5k)", change: "42.6% share", positive: true },
      { label: "Avg Ticket Size", value: "$129.15", change: "+3.1%", positive: true },
    ],
    chartData: [
      { name: "Dubai Downtown", value: 78500, secondary: 70000 },
      { name: "Abu Dhabi Mall", value: 52120, secondary: 48000 },
      { name: "Sharjah Hub", value: 31800, secondary: 30000 },
      { name: "Doha Central", value: 22000, secondary: 25000 },
    ],
    chartType: "bar",
    tableHeaders: ["Branch Name", "Code", "Invoices", "Net Revenue", "Target Variance", "Status"],
    tableRows: [
      ["Dubai Downtown", "DXB-01", 612, "$78,500", "+12.1%", "Above Target"],
      ["Abu Dhabi Mall", "AUH-02", 405, "$52,120", "+8.6%", "Above Target"],
      ["Sharjah Central Hub", "SHJ-03", 248, "$31,800", "+6.0%", "On Target"],
      ["Doha City Center", "DOH-04", 163, "$22,000", "-12.0%", "Below Target"],
    ],
  },
  {
    id: "trial-balance",
    query: "Show the trial balance for August.",
    shortLabel: "August Trial Balance",
    category: "Finance",
    thinkingSteps: [
      "Resolving fiscal period 'August 2026' in General Ledger...",
      "Validating company entity scope (Raap Holding Ltd - Consolidated)...",
      "Pulling closing debit and credit sums from verified ERP charts of accounts...",
      "Verifying zero-discrepancy balance equation...",
    ],
    responseTitle: "Consolidated Trial Balance — Period 08 / FY2026",
    responseSummary: "The trial balance for August 2026 is balanced with equal debits and credits of $4,982,450.00. No unposted journals or suspense balances detected.",
    metrics: [
      { label: "Total Debits", value: "$4,982,450.00", change: "Balanced", positive: true },
      { label: "Total Credits", value: "$4,982,450.00", change: "Balanced", positive: true },
      { label: "Net Working Capital", value: "$1,840,200", change: "+4.8% MoM", positive: true },
      { label: "Unallocated Journals", value: "0 items", change: "All Verified", positive: true },
    ],
    chartData: [
      { name: "Assets", value: 3120000, secondary: 2900000 },
      { name: "Liabilities", value: 1280000, secondary: 1350000 },
      { name: "Equity", value: 1840000, secondary: 1550000 },
      { name: "Revenue (YTD)", value: 4210000, secondary: 3800000 },
      { name: "Expenses (YTD)", value: 2470000, secondary: 2300000 },
    ],
    chartType: "bar",
    tableHeaders: ["Account Code", "Account Name", "Category", "Debit ($)", "Credit ($)"],
    tableRows: [
      ["1010-01", "Operating Cash & Bank (Emirates NBD)", "Current Asset", "$842,500.00", "$0.00"],
      ["1200-00", "Trade Accounts Receivable", "Current Asset", "$1,215,300.00", "$0.00"],
      ["1400-00", "Merchandise Inventory", "Current Asset", "$1,062,200.00", "$0.00"],
      ["2010-00", "Accounts Payable - Vendors", "Current Liability", "$0.00", "$684,200.00"],
      ["2200-00", "Accrued Operating Expenses", "Current Liability", "$0.00", "$595,800.00"],
      ["3010-00", "Paid-In Share Capital", "Equity", "$0.00", "$1,840,000.00"],
    ],
  },
  {
    id: "top-selling",
    query: "What are our top-selling items?",
    shortLabel: "Top-Selling Items (Q3)",
    category: "Inventory",
    thinkingSteps: [
      "Accessing Item Master & Sales Ledger across all warehouses...",
      "Aggregating rolling 90-day unit volumes and gross contribution margins...",
      "Sorting product catalog by velocity and stock turnover index...",
    ],
    responseTitle: "Top Revenue & Volume Drivers (Q3 2026)",
    responseSummary: "Enterprise Server Blades and Smart IoT Gateway Series generated 58% of cumulative Q3 margin. All top 5 SKUs maintain sufficient warehouse coverage (>28 days).",
    metrics: [
      { label: "Top Product Volume", value: "4,820 units", change: "+18.4% YoY", positive: true },
      { label: "Gross Profit Margin", value: "41.8%", change: "+2.4% YoY", positive: true },
      { label: "Avg Turn Time", value: "14.2 days", change: "-2.1 days", positive: true },
      { label: "Stockout Risk", value: "0% across Top 10", change: "Optimal", positive: true },
    ],
    chartData: [
      { name: "Blade Pro X8", value: 89400, secondary: 42000 },
      { name: "IoT Edge Gate-4", value: 68200, secondary: 31000 },
      { name: "Rack Unit 42U", value: 45600, secondary: 19500 },
      { name: "Fiber Optic 100G", value: 38900, secondary: 21400 },
      { name: "Power Module DC", value: 29500, secondary: 14200 },
    ],
    chartType: "bar",
    tableHeaders: ["SKU Code", "Description", "Units Sold", "Revenue ($)", "Margin %", "Stock Cover"],
    tableRows: [
      ["SRV-X8-BLD", "Enterprise Server Blade X8", 1240, "$89,400", "44.2%", "34 Days"],
      ["IOT-GW-04", "Industrial Edge Gateway v4", 2150, "$68,200", "38.6%", "42 Days"],
      ["RCK-42U-MOD", "Modular Server Rack 42U", 412, "$45,600", "41.0%", "28 Days"],
      ["OPT-100G-SW", "Optical Transceiver 100Gbps", 890, "$38,900", "52.3%", "55 Days"],
      ["PWR-DC-800", "Redundant DC Power Module", 760, "$29,500", "36.8%", "31 Days"],
    ],
  },
  {
    id: "outstanding-invoices",
    query: "Show outstanding customer invoices.",
    shortLabel: "Outstanding AR Invoices",
    category: "Finance",
    thinkingSteps: [
      "Accessing Accounts Receivable Subledger...",
      "Filtering open customer invoices past due date > 0 days...",
      "Calculating aging buckets (Current, 1-30, 31-60, 60+ days)...",
      "Checking credit limits and collection escalation tags...",
    ],
    responseTitle: "Aged Receivables Portfolio & Overdue Invoices",
    responseSummary: "Total outstanding accounts receivable stand at $412,650 across 34 customer accounts. 84% falls within standard 30-day payment terms; 3 accounts require collection review.",
    metrics: [
      { label: "Total Outstanding", value: "$412,650", change: "34 Accounts", positive: false },
      { label: "Current (<30 Days)", value: "$346,626", change: "84.0% of Total", positive: true },
      { label: "31-60 Days", value: "$51,580", change: "12.5% of Total", positive: false },
      { label: ">60 Days Overdue", value: "$14,444", change: "3.5% (Watchlist)", positive: false },
    ],
    chartData: [
      { name: "0-30 Days", value: 346626 },
      { name: "31-60 Days", value: 51580 },
      { name: "61-90 Days", value: 11200 },
      { name: ">90 Days", value: 3244 },
    ],
    chartType: "bar",
    tableHeaders: ["Customer", "Invoice #", "Issue Date", "Due Date", "Amount ($)", "Status"],
    tableRows: [
      ["Al Noor Trading LLC", "INV-2026-8842", "2026-09-28", "2026-10-28", "$42,500", "Due Tomorrow"],
      ["Apex Global Logix", "INV-2026-8790", "2026-09-15", "2026-10-15", "$28,400", "12 Days Overdue"],
      ["Emirates Tech Sol", "INV-2026-8811", "2026-09-20", "2026-10-20", "$18,750", "7 Days Overdue"],
      ["Gulf Crescent Corp", "INV-2026-8860", "2026-10-02", "2026-11-02", "$64,200", "Current"],
    ],
  },
  {
    id: "prepare-invoice",
    query: "Create an invoice for Al Noor Trading for 20 units.",
    shortLabel: "Prepare Invoice (Al Noor Trading)",
    category: "Invoicing",
    isAction: true,
    thinkingSteps: [
      "Natural Language Parsing: Target Customer = 'Al Noor Trading', Quantity = 20...",
      "Context Mapping: Resolved customer name to ERP Record 'CUST-04921' (Al Noor Trading LLC)...",
      "Price Book Resolution: Matched default contract SKU 'SRV-X8-BLD' @ Contract Rate $850.00/unit...",
      "Credit Check: Credit limit $100k, Current exposure $42.5k. Available headroom: $57.5k. PASS.",
      "Tax & Compliance Check: UAE FTA TRN #1002948192 verified. 5% VAT applied ($850.00).",
      "Staging draft invoice into ERP staging buffer for authorized review...",
    ],
    responseTitle: "Draft Sales Invoice #DRAFT-2026-9014 Prepared",
    responseSummary: "The invoice draft has been assembled through RaapNexus Application Services with all business rules validated. It is awaiting two-person dual authorization before posting to the ERP General Ledger.",
    metrics: [
      { label: "Invoice Total", value: "$17,850.00", change: "Incl. 5% VAT", positive: true },
      { label: "Customer Credit Headroom", value: "$39,650.00", change: "Safe Headroom", positive: true },
      { label: "ERP Pre-Validation", value: "Passed (6/6)", change: "Zero Errors", positive: true },
      { label: "Workflow Stage", value: "Pending Finance Approval", change: "Action Required", positive: false },
    ],
    actionDetails: {
      type: "Commercial Sales Invoice (Standard)",
      customer: "Al Noor Trading LLC (CUST-04921)",
      items: [
        {
          code: "SRV-X8-BLD",
          name: "Enterprise Server Blade X8 (128GB ECC / Dual NVMe)",
          qty: 20,
          unitPrice: 850.0,
          total: 17000.0,
        },
      ],
      subtotal: 17000.0,
      vat: 850.0,
      total: 17850.0,
      validationChecks: [
        { rule: "Customer Credit Headroom Verification", passed: true, note: "Headroom $57.5k exceeds invoice total $17.8k" },
        { rule: "Warehouse Inventory Allocation", passed: true, note: "DXB-Central has 142 units on hand (20 requested)" },
        { rule: "Contract Pricing Policy Match", passed: true, note: "Tier-1 Master Service Agreement #MSA-2025" },
        { rule: "Tax Registration Number (TRN)", passed: true, note: "TRN 1002948192 validated against tax registry" },
        { rule: "Two-Person Dual Control Rule", passed: true, note: "Invoices > $10,000 require CFO or Controller sign-off" },
      ],
      approvalStatus: "PENDING_APPROVAL",
      tenantScope: "RaapNexus GCC-Holdings (Tenant #TN-8821)",
      requestedBy: "S. Al-Maktoum (Operations Lead via Slack MCP)",
    },
  },
];

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  systemScope: string;
  metrics: { label: string; value: string }[];
  highlightFeatures: string[];
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "conversational-workspace",
    title: "1. AI Conversational Workspace",
    category: "Conversational Intelligence",
    tagline: "Natural dialogue mapped directly to ERP business records",
    description: "Multimodal AI assistant workspace supporting live streaming query execution, role-gated entity lookup, and interactive analytical cards.",
    systemScope: "Global Tenant Scope | Live MCP Integration",
    metrics: [
      { label: "Avg Query Latency", value: "480ms" },
      { label: "Context Accuracy", value: "99.4%" },
      { label: "Supported LLMs", value: "ChatGPT, Claude, Cursor" },
    ],
    highlightFeatures: [
      "Natural language business translation",
      "Live streaming execution status",
      "Role-aware entity auto-completion",
      "Interactive data widget insertion",
    ],
  },
  {
    id: "executive-dashboard",
    title: "2. Executive Business Dashboard",
    category: "Executive Intelligence",
    tagline: "Real-time command center for enterprise leadership",
    description: "High-level consolidated view of cash liquidity, revenue trajectories, operational EBITDA, and cross-subsidiary performance indicators.",
    systemScope: "Consolidated Multi-Entity Rollup",
    metrics: [
      { label: "Consolidated Revenue", value: "$48.2M YTD" },
      { label: "Operating Margin", value: "34.2%" },
      { label: "Active Subsidiaries", value: "7 Entities" },
    ],
    highlightFeatures: [
      "Unified multi-currency consolidation",
      "Real-time cash positioning",
      "Variance alerts and anomaly triggers",
      "Direct drill-down into subsidiary records",
    ],
  },
  {
    id: "financial-trial-balance",
    title: "3. Financial Trial Balance Explorer",
    category: "Financial Control",
    tagline: "Zero-latency balance verification and audit tracing",
    description: "Dynamic ledger browser aggregating debit and credit lines across nested charts of accounts with instant journal voucher drill-through.",
    systemScope: "General Ledger / Period Closing",
    metrics: [
      { label: "Total Balanced Sum", value: "$4.98M" },
      { label: "Journal Reconciliation", value: "100% Verified" },
      { label: "Closing Readiness", value: "Day -2" },
    ],
    highlightFeatures: [
      "Real-time debit/credit balancing verification",
      "Multi-dimensional cost center breakdown",
      "Single-click journal voucher inspection",
      "Automated IFRS / GAAP compliance tagging",
    ],
  },
  {
    id: "branch-sales-analytics",
    title: "4. Branch Sales Analytics",
    category: "Sales & Distribution",
    tagline: "Granular branch-by-branch operational metrics",
    description: "Geographic sales breakdown comparing retail footfall, ticket averages, cashier productivity, and target variances across retail and wholesale hubs.",
    systemScope: "Retail & Wholesale POS / Distribution",
    metrics: [
      { label: "Daily Branch Sales", value: "$184,420" },
      { label: "Top Branch Revenue", value: "$78,500" },
      { label: "Target Achievement", value: "111.4%" },
    ],
    highlightFeatures: [
      "Live branch POS telemetry synchronization",
      "Hourly velocity and cashier basket analysis",
      "Budget vs actual automated variance alarms",
      "Comparative regional heat mapping",
    ],
  },
  {
    id: "inventory-stock-analysis",
    title: "5. Inventory & Stock Velocity",
    category: "Supply Chain",
    tagline: "Predictive inventory health and stockout prevention",
    description: "Comprehensive warehouse coverage metrics, dead stock identification, batch expiry tracking, and automated replenishment recommendations.",
    systemScope: "Warehouse Management System (WMS)",
    metrics: [
      { label: "Inventory Valuation", value: "$1.06M" },
      { label: "Stockout Risk", value: "0% across Top SKUs" },
      { label: "Turnover Velocity", value: "14.2 Days" },
    ],
    highlightFeatures: [
      "Multi-warehouse balance reconciliation",
      "Dynamic reorder point recalculation",
      "Batch / lot serial number tracking",
      "Automated supplier PO draft preparation",
    ],
  },
  {
    id: "invoice-creation-approval",
    title: "6. Invoice Creation & Approval Workflow",
    category: "Transaction Execution",
    tagline: "Controlled transaction preparation with dual sign-off",
    description: "Pre-validated transaction workflow verifying customer credit, inventory reservation, and compliance rules prior to ERP ledger posting.",
    systemScope: "Accounts Receivable & Order Management",
    metrics: [
      { label: "Validation Checks", value: "6/6 Passed" },
      { label: "Approval Latency", value: "< 2 mins" },
      { label: "Direct DB Writes", value: "0 (Zero Allowed)" },
    ],
    highlightFeatures: [
      "Pre-execution credit headroom validation",
      "Tax code & regulatory TRN verification",
      "Human-in-the-loop multi-step approval gate",
      "Immutable cryptographic audit log creation",
    ],
  },
  {
    id: "excel-ready-reporting",
    title: "7. Excel-Ready Financial Reporting",
    category: "Business Reporting",
    tagline: "Structured tabular datasets ready for CFO analysis",
    description: "Export pristine, pivot-ready Excel workbooks complete with headers, formulas, and metadata directly from conversational prompts.",
    systemScope: "BI & Enterprise Reporting Layer",
    metrics: [
      { label: "Export Speed", value: "< 800ms" },
      { label: "Format Fidelity", value: ".xlsx / .csv" },
      { label: "Data Integrity", value: "Bit-level ERP Match" },
    ],
    highlightFeatures: [
      "Clean structured tabular layout with formulas",
      "Automatic column width formatting and headers",
      "Zero truncation on large dataset exports",
      "Includes audit timestamp and user signature",
    ],
  },
  {
    id: "audit-activity-interface",
    title: "8. Enterprise Audit & Event Stream",
    category: "Security & Governance",
    tagline: "Complete transparency into every AI interaction",
    description: "Forensic activity log recording user prompts, model decisions, context mappings, application service calls, and authorization timestamps.",
    systemScope: "SOC2 / ISO 27001 Audit Trail Engine",
    metrics: [
      { label: "Audit Event Retention", value: "7 Years" },
      { label: "Tamper Protection", value: "SHA-256 Hashing" },
      { label: "Log Completeness", value: "100% of Events" },
    ],
    highlightFeatures: [
      "Immutable event ledger with cryptographic hash",
      "Detailed parameter tracking on every API call",
      "User role and company tenant boundary stamps",
      "Searchable compliance filter and export tools",
    ],
  },
  {
    id: "multi-company-tenant-selection",
    title: "9. Multi-Company & Tenant Scope Control",
    category: "Enterprise Architecture",
    tagline: "Strict isolation across corporate entities and branches",
    description: "Seamless tenant switcher allowing authorized users to pivot between legal entities, subsidiaries, and geographic branches with isolated data boundaries.",
    systemScope: "Multi-Tenant Partitioning Engine",
    metrics: [
      { label: "Supported Entities", value: "Unlimited" },
      { label: "Cross-Tenant Leakage", value: "0 (Guaranteed)" },
      { label: "Switch Latency", value: "Instantaneous" },
    ],
    highlightFeatures: [
      "Strict logical data isolation per legal entity",
      "Role-based entity visibility controls",
      "Multi-currency / multi-fiscal year handling",
      "Consolidated or segregated report modes",
    ],
  },
];

export const FAQS = [
  {
    question: "What is RaapNexus?",
    answer: "RaapNexus is an AI-powered enterprise software platform that connects ERP and business systems with modern AI assistants (such as ChatGPT, Claude, Cursor, and MCP-compatible tools). It acts as an intelligent conversational layer, allowing leadership and teams to ask natural-language business questions, uncover live insights, generate structured reports, and prepare controlled business actions with enterprise authorization built in.",
  },
  {
    question: "How does it work with ERP software?",
    answer: "RaapNexus interfaces with your ERP through secure, authorized Application Programming Interfaces (APIs) and supported application services. It does not replace your ERP; rather, it resolves natural-language user requests into validated queries and commands executed strictly through your existing business rules, permissions, and validation routines.",
  },
  {
    question: "Which AI assistants can connect?",
    answer: "RaapNexus supports OpenAI ChatGPT (Custom GPTs / Actions), Anthropic Claude, Cursor, VS Code, and any client utilizing the open Model Context Protocol (MCP). It can also be accessed directly through its native web workspace.",
  },
  {
    question: "Does it replace our existing ERP?",
    answer: "No. RaapNexus is designed to augment and unlock the value of your existing ERP investment. Your ERP remains the authoritative system of record for accounting, inventory, and operations. RaapNexus provides the conversational intelligence, instant reporting, and workflow preparation layer.",
  },
  {
    question: "Can it prepare invoices and other transactions?",
    answer: "Yes. RaapNexus can prepare supported transactions — such as sales invoices, purchase orders, and journal drafts — through authorized business application services. Every transaction is pre-validated against business rules (credit limits, inventory levels, tax compliance) and staged in an approval queue for authorized human sign-off before being committed.",
  },
  {
    question: "Does AI have direct database access?",
    answer: "No. Under no circumstances does an AI model have direct SQL or raw write access to your underlying database. All interactions are brokered through RaapNexus's intermediary authorization engine and ERP application services, ensuring that strict business logic, validation schemas, and audit logs are consistently enforced.",
  },
  {
    question: "How are tenant boundaries protected?",
    answer: "RaapNexus enforces tenant and company-aware authorization at the core architectural level. Every request carries an authenticated user session stamped with verified tenant IDs and role scopes. Queries cannot cross company or tenant boundaries unless explicitly configured in consolidated cross-entity reporting with authorized credentials.",
  },
  {
    question: "Can reports be exported to Excel?",
    answer: "Yes. All reports generated through RaapNexus can be exported instantly to standard Excel (.xlsx) and CSV formats, pre-formatted with appropriate headers, numerical formatting, and metadata ready for immediate financial modeling and executive presentation.",
  },
  {
    question: "How can we request a demonstration?",
    answer: "You can schedule a personalized 1-on-1 demonstration by visiting our Contact & Demo page. Our solutions architecture team will walk you through a tailored demonstration matching your current ERP environment and operational workflows.",
  },
];
