# RaapNexus — The Conversational Business Layer for Enterprise ERP

> "Don't just manage your business. Talk to it."

**RaapNexus** is a world-class, premium, futuristic marketing and demonstration website for an AI-powered enterprise software platform that connects ERP and business systems with conversational AI assistants.

---

## 🌟 Executive Summary & Key Highlights

- **Hero Experience:** Cinematic midnight navy canvas (`#07111F`), ambient electric cyan (`#42D9F5`) and violet (`#9B8CFF`) lighting, and an animated live dashboard simulation.
- **Interactive AI Prompt Simulator:** Experience real-time natural language query execution across 5 enterprise scenarios (Branch Sales, August Trial Balance, Q3 Top-Selling Inventory, Aged Receivables, and Controlled Invoice Drafting with dual-sign-off).
- **Premium Product Gallery (9 Enterprise UI Previews):**
  1. AI Conversational Workspace
  2. Executive Business Dashboard
  3. Financial Trial Balance Explorer
  4. Branch Sales Analytics & Telemetry
  5. Inventory & Stock Velocity Monitor
  6. Invoice Creation & Dual-Control Approval
  7. Excel-Ready Financial Reporting
  8. Immutable Audit Activity Interface
  9. Multi-Company & Tenant Scope Switcher
- **Zero-Trust Security Architecture:** Concrete visual topology proving AI models never execute direct SQL or raw table writes; all operations are mediated through validated application services.
- **5 Complete Pages:**
  - Home (`/`)
  - Platform (`/platform`)
  - Solutions (`/solutions`)
  - Security (`/security`)
  - Contact & Demo Request (`/contact`) with full Zod validation and backend route (`/api/demo-request`).
  - Legal & 404 pages (`/privacy`, `/terms`, `/not-found`).

---

## 🛠️ Technology Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript 5 (Strict Mode)
- **Styling:** Tailwind CSS with custom enterprise design tokens
- **Animations:** Framer Motion (respects `prefers-reduced-motion`)
- **Icons:** Lucide React
- **Forms & Validation:** React Hook Form + Zod
- **Data Visualizations:** Recharts & responsive SVG telemetry bars
- **SEO & Structured Data:** OpenGraph, JSON-LD schemas (`Organization`, `WebSite`, `SoftwareApplication`), XML Sitemap, and `robots.txt`.

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v18.17.0` or higher (tested on Node v22.18.0)
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/techlogica/raapnexus.git
cd RaapNexus

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

### Building for Production

```bash
# Run production build and type check
npm run build

# Start the optimized production server
npm run start
```

---

## 🛡️ Enterprise Security Commitments

1. **Zero Direct Database Writes:** AI models never touch SQL tables directly.
2. **Mandatory Human Dual-Control:** Commercial transactions require authorized controller sign-off.
3. **Strict Tenant Isolation:** Cryptographic partitioning per legal subsidiary.
4. **Stateless Processing:** ERP data is never used to train or fine-tune public foundation models.

---

## 📄 License & Legal Notice

© 2026 RaapNexus. All rights reserved. Enterprise AI software for modern business systems.
