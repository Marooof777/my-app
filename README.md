HI This project is a solution to a Web Engineer coding assessment, built using Next.js 14 (App Router) with TypeScript, Tailwind CSS, and mock APIs. It includes a collapsible responsive navbar, a multi-step login flow with security logic, and a protected dashboard with dynamic data rendering

Project layout Map:
app/
├── layout.tsx              # Global layout with Navbar
├── page.tsx                # Home page
├── login/page.tsx          # Multi-step login flow
├── dashboard/page.tsx      # Post-login dashboard
├── api/
│   ├── getSecureWord/      # Secure word generation API
│   ├── login/              # Login validation API
│   ├── verifyMfa/          # MFA verification API
│   └── transaction-history/ # Mock data for dashboard table
components/
└── Navbar.tsx  

Challenge 1: Navbar
Title & search input (no logic)

Collapsible menu (hamburger/X toggle)

Login button linking to login page

Responsive for mobile/desktop
Challenge 2: Multi-Step Login Flow
Step 1: Username input → /api/getSecureWord

Step 2: Password input (hashed) → /api/login

Step 3: MFA with 6-digit mock code → /api/verifyMfa

Secure word expires in 60s

Rate limit enforced (10s)

Session is mocked via localStorage
