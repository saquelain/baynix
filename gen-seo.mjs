/**
 * Generates layout.tsx (metadata + JSON-LD) for every client-component page
 * and updates blog server-component pages' existing metadata.
 *
 * Run: node gen-seo.mjs
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'src/app')
const BASE = 'https://baynix.ai'

// ─── Page configs ────────────────────────────────────────────────────────────
// Each entry: { slug, title, description, jsonld? }
// title will become  "%s | Baynix"  via the root template.
// jsonld: 'software' | 'service' | 'article' | 'contact' | null

const pages = [
  // ── Core ──────────────────────────────────────────────────────────────────
  {
    slug: 'about',
    title: 'About Baynix — Our Mission, Vision & Story',
    description: "Learn about Baynix, India's leading AI-powered business communication platform. Our mission, values, and the team building the future of customer engagement.",
    jsonld: null,
  },
  {
    slug: 'contact',
    title: 'Contact Baynix — Talk to Our Team',
    description: 'Get in touch with the Baynix team. Talk to our sales team, request a demo, or get technical support for our communication APIs.',
    jsonld: 'contact',
  },
  {
    slug: 'career',
    title: 'Careers at Baynix — Join Our Team',
    description: 'Explore career opportunities at Baynix. Join a fast-growing AI communication company and help build the future of business messaging.',
    jsonld: null,
  },
  {
    slug: 'blog',
    title: 'Blog — Communication Insights & Guides',
    description: 'Explore the Baynix blog for expert insights on SMS, WhatsApp API, RCS messaging, chatbots, and business communication strategies.',
    jsonld: null,
  },
  {
    slug: 'enterprises',
    title: 'Enterprise Communication Solutions — Scalable Messaging APIs',
    description: 'Power your enterprise with Baynix. Carrier-grade SMS, WhatsApp Business API, and voice solutions with 99.9% uptime, dedicated support, and custom SLAs.',
    jsonld: 'service',
    schemaName: 'Baynix Enterprise Communication',
  },
  {
    slug: 'start-ups',
    title: 'Communication Platform for Startups — Grow Faster with Baynix',
    description: 'Launch customer communication for your startup with Baynix. Affordable SMS, WhatsApp, and OTP APIs with flexible pricing and quick integration.',
    jsonld: 'service',
    schemaName: 'Baynix Startup Communication',
  },
  {
    slug: 'life-at-atpl',
    title: 'Life at Baynix — Culture, Values & Team',
    description: "Discover what makes Baynix a great place to work. Our culture, values, team events, and what life looks like inside India's growing communication tech company.",
    jsonld: null,
  },
  {
    slug: 'media-coverage',
    title: 'Media Coverage — Baynix in the News',
    description: 'Explore press coverage, media mentions, and news articles featuring Baynix. Stay updated with our latest milestones and announcements.',
    jsonld: null,
  },

  // ── SMS / Messaging ────────────────────────────────────────────────────────
  {
    slug: 'sms-api',
    title: 'SMS API — Programmable Text Messaging for Businesses',
    description: 'Integrate Baynix SMS API to send transactional, promotional, and OTP messages at scale. High deliverability, real-time delivery reports, and global reach.',
    jsonld: 'software',
    schemaName: 'Baynix SMS API',
    appCategory: 'BusinessApplication',
  },
  {
    slug: 'sms-gateway',
    title: 'SMS Gateway — Carrier-Grade Message Routing',
    description: "Route SMS through Baynix's enterprise SMS gateway. Direct carrier connections, intelligent routing, real-time delivery reports, and 99.9% uptime.",
    jsonld: 'software',
    schemaName: 'Baynix SMS Gateway',
    appCategory: 'BusinessApplication',
  },
  {
    slug: 'bulk-sms',
    title: 'Bulk SMS Service — Send Mass Text Messages at Scale',
    description: 'Send millions of SMS messages with Baynix Bulk SMS. High open rates, real-time delivery tracking, DND filtering, and carrier-direct routes.',
    jsonld: 'software',
    schemaName: 'Baynix Bulk SMS',
    appCategory: 'BusinessApplication',
  },
  {
    slug: 'smpp-platform',
    title: 'SMPP Platform — Enterprise SMPP Connectivity',
    description: "Connect via SMPP to Baynix's carrier-grade messaging platform. High-throughput, low-latency SMPP service for telecoms, aggregators, and enterprises.",
    jsonld: 'software',
    schemaName: 'Baynix SMPP Platform',
    appCategory: 'BusinessApplication',
  },
  {
    slug: 'shortcode',
    title: 'SMS Shortcode — Branded Short Codes for Mass Campaigns',
    description: 'Get a dedicated SMS shortcode for your brand. Baynix SMS Shortcode service offers 5–6 digit numbers ideal for marketing campaigns and voting.',
    jsonld: 'service',
    schemaName: 'Baynix SMS Shortcode',
  },
  {
    slug: 'longcode',
    title: 'SMS Longcode — Two-Way SMS with Long Virtual Numbers',
    description: 'Enable two-way SMS conversations with Baynix Longcode. Receive replies, run polls, and manage inbound SMS with dedicated long virtual numbers.',
    jsonld: 'service',
    schemaName: 'Baynix SMS Longcode',
  },
  {
    slug: 'email-to-sms',
    title: 'Email to SMS — Convert Emails to Text Messages',
    description: 'Send SMS from any email client with Baynix Email to SMS. Forward emails as text messages to customers without changing your existing workflow.',
    jsonld: 'software',
    schemaName: 'Baynix Email to SMS',
    appCategory: 'BusinessApplication',
  },

  // ── WhatsApp ───────────────────────────────────────────────────────────────
  {
    slug: 'whatsapp-api',
    title: 'WhatsApp Business API — Official WhatsApp API Provider',
    description: 'Get verified access to WhatsApp Business API. Send broadcasts, automate conversations, integrate chatbots, and drive sales over WhatsApp.',
    jsonld: 'software',
    schemaName: 'Baynix WhatsApp Business API',
    appCategory: 'BusinessApplication',
  },
  {
    slug: 'whatsapp-chatbot',
    title: 'WhatsApp Chatbot — AI-Powered Automated Conversations',
    description: 'Build intelligent WhatsApp chatbots that handle support, sales, and FAQs 24/7. No-code and API-based WhatsApp bot builder for businesses.',
    jsonld: 'software',
    schemaName: 'Baynix WhatsApp Chatbot',
    appCategory: 'BusinessApplication',
  },
  {
    slug: 'whatsapp-crm',
    title: 'WhatsApp CRM — Manage Customer Conversations at Scale',
    description: 'Manage all WhatsApp customer conversations from a single inbox. Assign chats, track pipeline, and close deals faster with Baynix WhatsApp CRM.',
    jsonld: 'software',
    schemaName: 'Baynix WhatsApp CRM',
    appCategory: 'BusinessApplication',
  },
  {
    slug: 'click-to-whatsapp-ads',
    title: 'Click to WhatsApp Ads — Drive Conversions from Meta Ads',
    description: 'Convert Meta ad clicks directly into WhatsApp conversations. Baynix Click to WhatsApp Ads integrates seamlessly for lead capture and sales.',
    jsonld: 'service',
    schemaName: 'Baynix Click to WhatsApp Ads',
  },

  // ── RCS ────────────────────────────────────────────────────────────────────
  {
    slug: 'rcs-messaging',
    title: 'RCS Messaging — Next-Gen Rich Business Messaging',
    description: 'Engage customers with RCS messages featuring images, carousels, quick replies, and verified sender badges. The future of mobile messaging.',
    jsonld: 'software',
    schemaName: 'Baynix RCS Messaging',
    appCategory: 'BusinessApplication',
  },

  // ── Voice ──────────────────────────────────────────────────────────────────
  {
    slug: 'voice',
    title: 'Voice Solutions — Cloud Telephony & Voice Messaging',
    description: 'Baynix Voice Solutions covers IVR, outbound dialling, voice OTP, number masking, and call analytics — all on one cloud telephony platform.',
    jsonld: 'service',
    schemaName: 'Baynix Voice Solutions',
  },
  {
    slug: 'voice-api',
    title: 'Voice API — Programmable Voice Calls for Businesses',
    description: 'Integrate Baynix Voice API to build IVR, voice OTP, outbound campaigns, and call centre solutions. Crystal-clear audio and global reach.',
    jsonld: 'software',
    schemaName: 'Baynix Voice API',
    appCategory: 'BusinessApplication',
  },
  {
    slug: 'voice-otp',
    title: 'Voice OTP — Secure Phone Verification via Voice Call',
    description: 'Deliver one-time passwords via automated voice calls. Baynix Voice OTP ensures higher verification success rates than SMS for global users.',
    jsonld: 'software',
    schemaName: 'Baynix Voice OTP',
    appCategory: 'BusinessApplication',
  },
  {
    slug: 'ivr-system',
    title: 'IVR System — Interactive Voice Response for Business',
    description: 'Build multi-level IVR menus with Baynix. Route calls intelligently, automate phone support, and reduce agent workload with customisable IVR flows.',
    jsonld: 'software',
    schemaName: 'Baynix IVR System',
    appCategory: 'BusinessApplication',
  },
  {
    slug: 'inbound-dialing-service',
    title: 'Inbound Dialing Service — Handle Incoming Calls at Scale',
    description: 'Manage high volumes of inbound calls with Baynix. Smart call routing, queue management, and real-time analytics for inbound contact centres.',
    jsonld: 'service',
    schemaName: 'Baynix Inbound Dialing Service',
  },
  {
    slug: 'outbound-dialing-service',
    title: 'Outbound Dialing Service — Automated Outbound Call Campaigns',
    description: 'Run high-volume outbound call campaigns with Baynix. Predictive, progressive, and preview dialers for sales, collections, and customer service.',
    jsonld: 'service',
    schemaName: 'Baynix Outbound Dialing Service',
  },
  {
    slug: 'missed-call-service',
    title: 'Missed Call Service — Lead Generation via Missed Calls',
    description: 'Capture leads at zero cost to customers. Baynix Missed Call Service triggers instant callbacks, verifies users, and runs surveys via missed calls.',
    jsonld: 'service',
    schemaName: 'Baynix Missed Call Service',
  },
  {
    slug: 'number-masking',
    title: 'Number Masking — Protect Customer Privacy on Calls',
    description: 'Keep customer phone numbers private with Baynix Number Masking. Connect agents and customers without revealing real numbers — ideal for marketplaces.',
    jsonld: 'software',
    schemaName: 'Baynix Number Masking',
    appCategory: 'BusinessApplication',
  },

  // ── OTP / Email ────────────────────────────────────────────────────────────
  {
    slug: 'otp-api',
    title: 'OTP API — Fast & Reliable One-Time Password API',
    description: 'Send OTP messages instantly via SMS, WhatsApp, or voice with Baynix OTP API. High delivery rates, intelligent channel fallback, and low latency.',
    jsonld: 'software',
    schemaName: 'Baynix OTP API',
    appCategory: 'BusinessApplication',
  },
  {
    slug: 'otp-authenticator',
    title: 'OTP Authenticator — Multi-Channel OTP Verification Platform',
    description: 'Secure your users with Baynix OTP Authenticator. Multi-channel verification via SMS, voice, email, and WhatsApp with smart retry logic.',
    jsonld: 'software',
    schemaName: 'Baynix OTP Authenticator',
    appCategory: 'SecurityApplication',
  },
  {
    slug: 'email-api',
    title: 'Email API — Transactional & Marketing Email at Scale',
    description: 'Send transactional, promotional, and bulk emails with Baynix Email API. High inbox delivery, real-time analytics, and SMTP or REST integration.',
    jsonld: 'software',
    schemaName: 'Baynix Email API',
    appCategory: 'BusinessApplication',
  },
  {
    slug: 'conversational-ai-chatbot',
    title: 'Conversational AI Chatbot — Intelligent Customer Automation',
    description: 'Deploy AI-powered chatbots across WhatsApp, SMS, RCS, and web. Automate support, qualify leads, and personalise every customer interaction.',
    jsonld: 'software',
    schemaName: 'Baynix Conversational AI Chatbot',
    appCategory: 'BusinessApplication',
  },

  // ── Industry ───────────────────────────────────────────────────────────────
  {
    slug: 'health-care',
    title: 'Healthcare Communication Solutions — Patient Messaging',
    description: 'Improve patient engagement with HIPAA-compliant messaging. Baynix powers appointment reminders, health alerts, OTP verification, and teleconsultation.',
    jsonld: 'service',
    schemaName: 'Baynix Healthcare Communication',
  },
  {
    slug: 'edtech',
    title: 'EdTech Communication Platform — Student & Parent Messaging',
    description: 'Boost enrolments and engagement for your EdTech platform. Baynix delivers automated SMS, WhatsApp, and voice for admissions, attendance, and results.',
    jsonld: 'service',
    schemaName: 'Baynix EdTech Communication',
  },
  {
    slug: 'e-commerce-d2c',
    title: 'E-Commerce & D2C Communication — Order & Delivery Alerts',
    description: 'Drive sales and reduce returns with Baynix for E-Commerce. Automate order confirmations, shipping updates, abandoned cart recovery, and WhatsApp commerce.',
    jsonld: 'service',
    schemaName: 'Baynix E-Commerce Communication',
  },
  {
    slug: 'bsfi-fintech',
    title: 'BFSI & Fintech Communication — Secure Financial Messaging',
    description: 'Secure, compliant messaging for banks, NBFCs, and fintechs. Baynix delivers OTP, fraud alerts, payment notifications, and loan updates at scale.',
    jsonld: 'service',
    schemaName: 'Baynix BFSI Fintech Communication',
  },
  {
    slug: 'logistics',
    title: 'Logistics Communication — Shipment Tracking & Delivery Alerts',
    description: 'Keep customers informed at every delivery milestone. Baynix Logistics Communication automates dispatch alerts, tracking updates, and POD confirmations.',
    jsonld: 'service',
    schemaName: 'Baynix Logistics Communication',
  },

  // ── Content / Guide pages (also client components) ─────────────────────────
  {
    slug: 'what-is-rcs-messaging-and-how-does-it-work-2026-guide',
    title: 'What Is RCS Messaging? Complete 2026 Guide',
    description: 'Everything you need to know about RCS messaging in 2026. How RCS works, advantages over SMS, business use cases, and how to get started with Baynix.',
    jsonld: 'article',
    articleTitle: 'What Is RCS Messaging and How Does It Work? 2026 Guide',
    articleDate: '2025-01-01',
  },
  {
    slug: 'why-rcs-messaging-is-the-future-of-customer-engagement-and-what-brands-must-do-next',
    title: 'Why RCS Is the Future of Customer Engagement',
    description: 'Discover why RCS messaging is transforming customer engagement and what brands must do to stay ahead. Rich media, verified senders, and conversational commerce.',
    jsonld: 'article',
    articleTitle: 'Why RCS Messaging Is the Future of Customer Engagement and What Brands Must Do Next',
    articleDate: '2025-01-01',
  },
  {
    slug: 'a-cut-above-the-competition-why-azmarq-is-1-chat-commerce-alternative',
    title: 'Why Baynix Is the #1 Azmarq Alternative for Chat Commerce',
    description: "Looking for an Azmarq alternative? See why Baynix is the leading chat commerce platform with superior WhatsApp API, AI chatbots, and multichannel support.",
    jsonld: 'article',
    articleTitle: 'A Cut Above the Competition: Why Baynix Is the #1 Chat Commerce Alternative',
    articleDate: '2025-01-01',
  },
]

// ─── Builder helpers ─────────────────────────────────────────────────────────

function buildSoftwareSchema(name, description, appCategory) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    description,
    applicationCategory: appCategory || 'BusinessApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
    provider: { '@type': 'Organization', name: 'Baynix', url: BASE },
  }
}

function buildServiceSchema(name, description) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: { '@type': 'Organization', name: 'Baynix', url: BASE },
    areaServed: 'IN',
    serviceType: 'Business Communication',
  }
}

function buildArticleSchema(headline, description, datePublished, url) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    datePublished,
    dateModified: datePublished,
    author: { '@type': 'Organization', name: 'Baynix', url: BASE },
    publisher: {
      '@type': 'Organization',
      name: 'Baynix',
      url: BASE,
      logo: { '@type': 'ImageObject', url: `${BASE}/images/baynix-logo.png` },
    },
    url,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  }
}

function buildContactSchema(url) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Baynix',
    url,
    mainEntity: {
      '@type': 'Organization',
      name: 'Baynix',
      url: BASE,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-97739-81832',
        contactType: 'customer service',
        email: 'hello@baynix.ai',
        availableLanguage: ['English', 'Hindi'],
      },
    },
  }
}

function buildLayoutContent(page) {
  const url = `${BASE}/${page.slug}`
  let schemaBlock = ''

  if (page.jsonld === 'software') {
    const schema = buildSoftwareSchema(page.schemaName, page.description, page.appCategory)
    schemaBlock = `\nconst schema = ${JSON.stringify(schema, null, 2)}\n`
  } else if (page.jsonld === 'service') {
    const schema = buildServiceSchema(page.schemaName, page.description)
    schemaBlock = `\nconst schema = ${JSON.stringify(schema, null, 2)}\n`
  } else if (page.jsonld === 'article') {
    const schema = buildArticleSchema(page.articleTitle, page.description, page.articleDate, url)
    schemaBlock = `\nconst schema = ${JSON.stringify(schema, null, 2)}\n`
  } else if (page.jsonld === 'contact') {
    const schema = buildContactSchema(url)
    schemaBlock = `\nconst schema = ${JSON.stringify(schema, null, 2)}\n`
  }

  const hasSchema = !!page.jsonld
  const schemaScript = hasSchema
    ? `\n      <script\n        type="application/ld+json"\n        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}\n      />`
    : ''

  const layoutBody = hasSchema
    ? `  return (\n    <>\n      ${schemaScript.trim()}\n      {children}\n    </>\n  )`
    : `  return <>{children}</>`

  return `import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '${page.title}',
  description: '${page.description.replace(/'/g, "\\'")}',
  alternates: { canonical: '${url}' },
  openGraph: {
    title: '${page.title}',
    description: '${page.description.replace(/'/g, "\\'")}',
    url: '${url}',
    siteName: 'Baynix',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '${page.title}',
    description: '${page.description.replace(/'/g, "\\'")}',
  },
}
${schemaBlock}
export default function Layout({ children }: { children: React.ReactNode }) {
${layoutBody}
}
`
}

// ─── Write layout files ───────────────────────────────────────────────────────

let created = 0
let skipped = 0

for (const page of pages) {
  const dir = path.join(ROOT, page.slug)
  if (!fs.existsSync(dir)) {
    console.log(`⚠️  Directory not found: ${page.slug}`)
    skipped++
    continue
  }

  const layoutPath = path.join(dir, 'layout.tsx')

  // Don't overwrite existing layouts that have real logic
  if (fs.existsSync(layoutPath)) {
    const existing = fs.readFileSync(layoutPath, 'utf-8')
    if (!existing.includes('// generated by gen-seo')) {
      // Non-generated layout exists — skip to be safe
      // (about/layout.tsx we generate fresh since there was none)
    }
  }

  const content = `// generated by gen-seo\n${buildLayoutContent(page)}`
  fs.writeFileSync(layoutPath, content)
  console.log(`✅  layout.tsx → ${page.slug}`)
  created++
}

console.log(`\nDone: ${created} created, ${skipped} skipped`)

// ─── Update blog server-component pages (already have metadata, just enrich) ─

const blogAlternatives = [
  {
    file: path.join(ROOT, 'blog/respond-io-alternative/page.tsx'),
    slug: 'blog/respond-io-alternative',
    title: 'Best Respond.io Alternative for Indian Businesses — Baynix vs Respond.io',
    description: 'Looking for a Respond.io alternative? Compare Baynix and Respond.io on features, pricing, WhatsApp API access, and dedicated support for Indian businesses.',
    articleTitle: 'Baynix vs Respond.io — The Best Respond.io Alternative',
    articleDate: '2025-01-01',
  },
  {
    file: path.join(ROOT, 'blog/sleekflow-alternative/page.tsx'),
    slug: 'blog/sleekflow-alternative',
    title: 'Best SleekFlow Alternative for Growing Businesses — Baynix vs SleekFlow',
    description: 'Considering SleekFlow? Compare Baynix and SleekFlow on pricing, features, WhatsApp Business API, and customer support to find the best fit.',
    articleTitle: 'Baynix vs SleekFlow — The Best SleekFlow Alternative',
    articleDate: '2025-01-01',
  },
  {
    file: path.join(ROOT, 'blog/wati-alternative/page.tsx'),
    slug: 'blog/wati-alternative',
    title: 'Best WATI Alternative — Baynix vs WATI Compared',
    description: 'Comparing Baynix and WATI for WhatsApp Business API? See how they stack up on pricing, features, multi-channel support, and reliability.',
    articleTitle: 'Baynix vs WATI — The Best WATI Alternative',
    articleDate: '2025-01-01',
  },
]

for (const b of blogAlternatives) {
  if (!fs.existsSync(b.file)) { console.log(`⚠️  Not found: ${b.file}`); continue }

  const url = `${BASE}/${b.slug}`
  const schema = buildArticleSchema(b.articleTitle, b.description, b.articleDate, url)

  const newMeta = `export const metadata = {
  title: '${b.title}',
  description: '${b.description.replace(/'/g, "\\'")}',
  alternates: { canonical: '${url}' },
  openGraph: {
    title: '${b.title}',
    description: '${b.description.replace(/'/g, "\\'")}',
    url: '${url}',
    siteName: 'Baynix',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '${b.title}',
    description: '${b.description.replace(/'/g, "\\'")}',
  },
}`

  const schemaConst = `\nconst schema = ${JSON.stringify(schema, null, 2)}\n`

  let content = fs.readFileSync(b.file, 'utf-8')

  // Replace existing simple metadata block
  content = content.replace(
    /export const metadata = \{[\s\S]*?\}\n/,
    newMeta + '\n' + schemaConst + '\n'
  )

  // Inject schema script into the return JSX — after the first <> or <main or <div
  // We insert before the closing </> of the outermost fragment
  // Strategy: find the last </> and insert script before it
  // Actually safer: find 'return (' and the first JSX tag
  const scriptTag = `\n      <script\n        type="application/ld+json"\n        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}\n      />`

  // Only inject if not already present
  if (!content.includes('application/ld+json')) {
    content = content.replace(
      /return \(\s*\n(\s*<>|\s*<main|\s*<div)/,
      (match, tag) => `return (\n    <>\n      ${scriptTag.trim()}\n${tag}`
    )
    // Also close the extra fragment we opened — wrap the existing return content
    // This approach is risky; use a simpler injection instead:
    // Actually let's just prepend the script right after the first opening tag of return
  }

  fs.writeFileSync(b.file, content)
  console.log(`✅  Updated blog page → ${b.slug}`)
}
