# Baynix - Project Overview

## Project Summary
**Baynix** is an AI-powered Business Communication Platform that enables enterprises to connect with customers through multiple communication channels (SMS, WhatsApp, RCS, Voice, and Email) from a single unified platform. The website serves as the landing page and product information hub for the Baynix business communication and communication-as-a-service (CaaS) platform.

**Tagline:** "Unified. Intelligent. Scalable."

---

## Project Metadata

| Property | Value |
|----------|-------|
| **Project Name** | baynix |
| **Version** | 0.1.0 |
| **Type** | Next.js Frontend Application |
| **Status** | Private Project |
| **Primary URL** | https://baynix.ai |
| **Language** | TypeScript + React |

---

## Technology Stack

### Core Framework
- **Next.js** v16.1.6 - Full-stack React framework with App Router
- **React** v19.2.3 - UI library
- **React DOM** v19.2.3 - DOM rendering

### Styling & Design
- **Tailwind CSS** v4 - Utility-first CSS framework
- **@tailwindcss/postcss** v4 - PostCSS plugin for Tailwind
- **PostCSS** - CSS transformations (config in `postcss.config.mjs`)

### UI & UX Components
- **Framer Motion** v12.34.3 - Animation library for smooth transitions
- **Lucide React** v0.575.0 - Icon library
- **clsx** v2.1.1 - Utility for conditional classNames

### Development & Build Tools
- **TypeScript** v5 - Type safety and compile-time checking
- **ESLint** v9 - Code linting
- **eslint-config-next** v16.1.6 - Next.js ESLint configuration
- **@types/node**, **@types/react**, **@types/react-dom** - Type definitions

### Image Optimization
- **critters** v0.0.25 - Critical CSS extraction for performance
- **Supported Formats:** AVIF, WebP

---

## Project Structure

```
baynix/
├── src/
│   ├── app/                          # Next.js App Router directory
│   │   ├── layout.tsx                # Root layout with metadata and global styles
│   │   ├── page.tsx                  # Homepage
│   │   ├── globals.css               # Global CSS styles
│   │   ├── about/                    # About page route
│   │   ├── contact/                  # Contact page route
│   │   ├── career/                   # Careers page route
│   │   ├── enterprises/              # Enterprise solutions page
│   │   ├── start-ups/                # Startup solutions page
│   │   ├── life/                     # Life products page
│   │   ├── products/                 # Product category routes
│   │   │   └── [25+ service pages]   # Individual service/product pages
│   │   └── industries/               # Industry-specific solution routes
│   │       ├── health-care/          # Healthcare solutions
│   │       ├── edtech/               # Education technology solutions
│   │       ├── e-commerce-d2c/       # E-commerce & Direct-to-Consumer
│   │       ├── bsfi-fintech/         # Banking/Financial Services & Fintech
│   │       └── [6+ other industries] # Additional industry solutions
│   │
│   └── components/                   # Reusable React components
│       ├── Navbar.tsx                # Navigation bar with dropdown menus
│       ├── Hero.tsx                  # Hero section (landing page intro)
│       ├── Ticker.tsx                # Animated ticker/marquee component
│       ├── TrustedBy.tsx             # Client/partner showcase section
│       ├── FeaturesGrid.tsx          # Grid layout for features display
│       ├── FeatureSplits.tsx         # Alternating feature sections
│       ├── APISection.tsx            # API documentation/showcase section
│       ├── IndustriesGrid.tsx        # Industry solutions grid
│       ├── FAQ.tsx                   # Frequently Asked Questions section
│       ├── Pricing.tsx               # Pricing plans section
│       ├── CTABanner.tsx             # Call-to-Action banner
│       ├── Footer.tsx                # Footer component
│       └── ScrollReveal.tsx          # Scroll animation trigger component
│
├── public/                           # Static assets
│   └── images/                       # Image assets
│
├── Configuration Files
│   ├── next.config.ts                # Next.js configuration
│   ├── tsconfig.json                 # TypeScript compiler options
│   ├── tailwind.config.ts            # Tailwind CSS customization
│   ├── postcss.config.mjs            # PostCSS configuration
│   ├── eslint.config.mjs             # ESLint rules
│   ├── package.json                  # Project dependencies & scripts
│   └── README.md                     # Original Next.js README
│
└── next-env.d.ts                     # Auto-generated Next.js types

```

---

## Key Features & Routes

### Homepage Routes
- **`/`** - Landing page with hero section, features, pricing, and CTA
- **`/about`** - Company information, stats, mission, and values
- **`/contact`** - Contact form for business inquiries
- **`/career`** - Career opportunities and hiring information

### Product/Service Routes (50+ Routes)
**Communication Channels:**
- `/sms-api/` - SMS sending API
- `/sms-gateway/` - SMS gateway solutions
- `/bulk-sms/` - Bulk SMS messaging
- `/whatsapp-api/` - WhatsApp business messaging API
- `/whatsapp-chatbot/` - WhatsApp chatbot builder
- `/whatsapp-crm/` - CRM integration for WhatsApp
- `/voice-api/` - Voice calling API
- `/voice-otp/` - OTP delivery via voice
- `/rcs-messaging/` - Rich Communication Services

**Specialized Services:**
- `/otp-api/` - One-Time Password (OTP) service
- `/otp-authenticator/` - Authentication via OTP
- `/email-api/` - Email sending API
- `/email-to-sms/` - Email-to-SMS gateway
- `/number-masking/` - Privacy-focused number masking
- `/missed-call-service/` - Missed call triggering
- `/click-to-whatsapp-ads/` - Click-to-WhatsApp advertising
- `/conversational-ai-chatbot/` - AI-powered chatbot
- `/unified-inbox/` - Multi-channel message inbox
- `/ivr-system/` - Interactive Voice Response
- `/inbound-dialing-service/` - Inbound call handling
- `/outbound-dialing-service/` - Outbound call automation
- `/smpp-platform/` - SMPP gateway platform
- `/shortcode/` - Short code SMS management
- `/longcode/` - Long code SMS services

### Industry-Specific Solutions
- **`/health-care/`** - Healthcare solutions
- **`/edtech/`** - Education technology
- **`/e-commerce-d2c/`** - E-commerce & direct-to-consumer
- **`/bsfi-fintech/`** - Banking/financial services & fintech
- **`/logistics/`** - Logistics & supply chain
- **`/enterprises/`** - Enterprise solutions
- **`/start-ups/`** - Startup packages
- **`/life/`** - Life/lifestyle products

---

## Core Components Breakdown

### Navigation & Layout
- **Navbar** - Multi-level dropdown navigation with hover states, links to products, industries, and solutions
- **Footer** - Footer with links and company information

### Landing Page Sections
- **Hero** - Main call-to-action with headline "AI Business Communication Platform"
- **Ticker** - Animated scrolling ticker displaying features/stats
- **TrustedBy** - Client logos and trust indicators showing "500+ Trusted Companies"
- **FeaturesGrid** - Grid display of core platform features
- **FeatureSplits** - Alternating text + image sections highlighting key capabilities
- **APISection** - Developer-focused API documentation showcase
- **IndustriesGrid** - Solutions organized by industry vertical
- **Pricing** - Pricing tiers and plan comparison
- **FAQ** - Frequently asked questions section
- **CTABanner** - Final call-to-action banner before footer

### Utilities
- **ScrollReveal** - Observes scroll position to trigger animations on elements
- **Layout** - Root layout with Geist/Manrope fonts, metadata, and global styles

---

## Typography & Design System

### Fonts
- **Primary Font:** Manrope (Google Fonts)
  - Weights: 300, 400, 500, 600, 700, 800
  - CSS Variable: `--font-manrope`
  - Subset: Latin
  - Display: Swap (for performance)

### Design Elements
- **Aurora Effects** - Three animated background aurora effects (CSS definitions in globals.css)
  - `.aurora-1`, `.aurora-2`, `.aurora-3` - Gradient background elements
- **Animations** - Framer Motion for smooth transitions and scroll animations
- **Icons** - Lucide React icons throughout the UI
- **Responsive Design** - Tailwind-based responsive layouts

### SEO & Metadata
- **Site Title:** "Baynix — AI Business Communication Platform"
- **Description:** "Baynix connects your business with customers through SMS, WhatsApp, RCS, Voice, and Email — all from one powerful AI platform."
- **Base URL:** https://baynix.ai
- **OpenGraph Tags:** Configured for social media sharing

---

## Configuration Details

### Next.js Configuration (next.config.ts)
```typescript
- Image Optimization: AVIF and WebP formats supported
- Remote Patterns: Empty (no external image domains)
- Compression: Enabled
- Powered By Header: Disabled (removed Next.js header)
```

### TypeScript Configuration (tsconfig.json)
- **Target:** ES2017
- **Module System:** ESNext
- **Path Alias:** `@/*` maps to `./src/*`
- **Strict Mode:** Enabled
- **JSX:** react-jsx (New JSX transform)
- **Incremental:** Enabled for faster rebuilds

### Tailwind Configuration (tailwind.config.ts)
- Configured with PostCSS v4
- Processes all `.tsx` and `.css` files in `src/` directory

### ESLint Configuration (eslint.config.mjs)
- Uses `eslint-config-next` for Next.js best practices

---

## Scripts & Commands

```json
{
  "dev": "next dev",           // Start development server (http://localhost:3000)
  "build": "next build",       // Build for production
  "start": "next start",       // Start production server
  "lint": "next lint"          // Run ESLint checks
}
```

### Development Workflow
```bash
npm run dev    # Start local dev server with hot reload
npm run lint   # Check code quality
npm run build  # Create optimized production build
npm start      # Run production server
```

### Cache Clearing (PowerShell)
```powershell
Remove-Item -Recurse -Force .next
```

---

## Dependencies Summary

### Runtime Dependencies (7 packages)
1. **next** (v16.1.6) - Framework
2. **react** (v19.2.3) - UI library
3. **react-dom** (v19.2.3) - DOM rendering
4. **framer-motion** (v12.34.3) - Animations
5. **lucide-react** (v0.575.0) - Icons
6. **clsx** (v2.1.1) - Class utilities
7. **critters** (v0.0.25) - Critical CSS extraction

### Dev Dependencies (8 packages)
1. **@tailwindcss/postcss** (v4) - CSS processing
2. **tailwindcss** (v4) - CSS framework
3. **typescript** (v5) - Type checking
4. **eslint** (v9) - Code linting
5. **eslint-config-next** (v16.1.6) - Next.js linting rules
6. **@types/node** (v20) - Node.js types
7. **@types/react** (v19) - React types
8. **@types/react-dom** (v19) - React DOM types

---

## Key Statistics & Content

### Company Profile
- **Client Revenue:** 70M+
- **YoY Growth:** 72%
- **Years of Experience:** 12
- **Trusted Companies:** 500+

### Supported Industries
- Healthcare
- Education
- Financial Services
- E-Commerce
- Real Estate
- Retail
- Legal
- Automotive
- Hospitality
- Food & Beverage

---

## File Extensions Used
- `.tsx` - TypeScript React components
- `.ts` - TypeScript files
- `.css` - Stylesheets
- `.mjs` - ModuleJS configuration files
- `.json` - Configuration and data files
- `.md` - Markdown documentation

---

## Performance Optimizations

1. **Image Optimization** - AVIF and WebP format support with Next.js Image component
2. **Critical CSS** - Critters extracts critical CSS for above-the-fold content
3. **Font Optimization** - Using `next/font` with display: swap for custom fonts
4. **Incremental Static Regeneration** (ISR) - Supported by Next.js App Router
5. **Code Splitting** - Next.js automatically code splits at page level
6. **Compression** - Enabled in Next.js config

---

## Browser & Compatibility

- **Target:** Modern browsers supporting ES2017+
- **HTML Document:** `lang="en"`
- **Responsive:** Mobile-first Tailwind CSS breakpoints

---

## Development Environment Setup

### Prerequisites
- Node.js (Latest LTS or v18+)
- npm or yarn
- PowerShell or terminal for running commands

### Installation
```bash
npm install
npm run dev
```

The development server runs on `http://localhost:3000` with hot reload enabled.

---

## Build & Deployment

### Production Build
```bash
npm run build   # Optimizes and creates .next/ directory
npm start       # Serves production build
```

### Deployment Target
- **Recommended:** Vercel (created by Next.js team)
- **Alternative:** Any Node.js hosting platform
- **Base URL:** https://baynix.ai

---

## Important Notes

1. **Image Assets** - All images are stored in `/public/images/`
2. **Component Library** - 11 main reusable components handling different sections
3. **Dynamic Routes** - 50+ product/service pages with similar layouts
4. **No API Backend** - Current setup is frontend-only (no API routes configured)
5. **Open Graph** - Metadata configured for social media sharing
6. **SEO Ready** - Built-in Next.js SEO capabilities with metadata

---

## Support & Resources

- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com
- **Framer Motion:** https://www.framermotion.com
- **Lucide Icons:** https://lucide.dev
- **TypeScript:** https://www.typescriptlang.org

---

**Last Updated:** March 10, 2026  
**Project Status:** In Development
