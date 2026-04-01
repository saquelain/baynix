import {
  DollarSign, Smartphone, Bot, BarChart3,
  Globe, ShieldCheck, Zap, Headphones,
  Lock, Clock, TrendingUp, Wrench
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type Feature = {
  name: string
  baynix: boolean | string
  competitor: boolean | string
  highlight?: boolean  // true = this row glows, draws attention
}

export type BattleCard = {
  slug: string
  path: string
  competitor: string
  tagline: string        // one-liner verdict
  verdict: string        // 2-3 sentence summary
  accentColor: string    // competitor brand color for theming
  painPoints: {
    title: string
    body: string
    icon: string
    iconColor: string
  }[]
  features: Feature[]
}

export const battlecards: BattleCard[] = [
  {
    slug: 'wati',
    path: '/blog/wati-alternative',
    competitor: 'WATI',
    accentColor: '#4ade80',
    tagline: 'WATI gets you started. Baynix gets you scaled.',
    verdict: 'WATI is a decent entry-level WhatsApp inbox. But the moment you need multi-channel, AI automation, RCS, or transparent pricing — it hits a wall. Baynix was built for exactly that moment.',
    painPoints: [
      {
        icon: 'DollarSign',
        iconColor: '#f59e0b',
        title: 'Hidden costs add up fast',
        body: 'WATI advertises low entry pricing but charges separately for extra users, AI responses, and automation rules. Baynix pricing is flat — what you see is what you pay.',
      },
      {
        icon: 'Smartphone',
        iconColor: '#6b7280',
        title: 'WhatsApp-only limits your reach',
        body: 'WATI locks you into WhatsApp. Baynix unifies SMS, WhatsApp, RCS, Voice, and Email — all in one dashboard, one API.',
      },
      {
        icon: 'Bot',
        iconColor: '#3b82f6',
        title: 'Rigid automation builder',
        body: 'WATI\'s chatbot builder is horizontal and inflexible. Baynix Flow Builder supports complex multi-step journeys across all channels.',
      },
      {
        icon: 'BarChart3',
        iconColor: '#10b981',
        title: 'Basic analytics',
        body: 'WATI gives you a simple dashboard. Baynix provides delivery analytics, conversion tracking, and campaign-level ROI across every channel.',
      },
    ],
    features: [
      { name: 'Bulk SMS',              baynix: true,  competitor: false, highlight: true },
      { name: 'WhatsApp API',          baynix: true,  competitor: true  },
      { name: 'RCS Messaging',         baynix: true,  competitor: false, highlight: true },
      { name: 'Voice Solutions',       baynix: true,  competitor: false, highlight: true },
      { name: 'Email API',             baynix: true,  competitor: false },
      { name: 'OTP Authentication',    baynix: true,  competitor: false },
      { name: 'Omnichannel Inbox',     baynix: true,  competitor: false, highlight: true },
      { name: 'AI Flow Builder',       baynix: true,  competitor: '⚠️ Limited' },
      { name: 'Campaign Analytics',    baynix: true,  competitor: '⚠️ Basic' },
      { name: 'Transparent Pricing',   baynix: true,  competitor: false, highlight: true },
      { name: 'TRAI Compliant (India)',baynix: true,  competitor: false },
      { name: 'Dedicated Support',     baynix: true,  competitor: '⚠️ Chatbot only' },
    ],
  },
  {
    slug: 'respond-io',
    path: '/blog/respond-io-alternative',
    competitor: 'Respond.io',
    accentColor: '#818cf8',
    tagline: 'Respond.io is powerful. Baynix is purpose-built for India.',
    verdict: 'Respond.io is a solid omnichannel CRM but priced for enterprises and built globally. Baynix is built for Indian businesses — TRAI compliant, local support, competitive pricing, and RCS-ready.',
    painPoints: [
      {
        icon: 'DollarSign',
        iconColor: '#f59e0b',
        title: 'Enterprise pricing, SMB pain',
        body: 'Respond.io starts at $79/month for limited contacts. Baynix offers flexible pricing built for Indian SMBs and growing startups.',
      },
      {
        icon: 'Globe',
        iconColor: '#6b7280',
        title: 'Not built for India',
        body: 'Respond.io has no TRAI compliance, no DLT integration, and no local support. Baynix is built ground-up for Indian regulatory requirements.',
      },
      {
        icon: 'Zap',
        iconColor: '#f59e0b',
        title: 'No RCS support',
        body: 'Respond.io doesn\'t support RCS — the next generation of messaging. Baynix is RCS-ready today.',
      },
      {
        icon: 'Wrench',
        iconColor: '#6b7280',
        title: 'Complex setup',
        body: 'Respond.io requires significant onboarding time. Baynix gets you live in under 24 hours with dedicated setup support.',
      },
    ],
    features: [
      { name: 'RCS Messaging',         baynix: true,  competitor: false, highlight: true },
      { name: 'TRAI / DLT Compliant',  baynix: true,  competitor: false, highlight: true },
      { name: 'WhatsApp API',          baynix: true,  competitor: true  },
      { name: 'Bulk SMS',              baynix: true,  competitor: true  },
      { name: 'Voice Solutions',       baynix: true,  competitor: false, highlight: true },
      { name: 'OTP Authentication',    baynix: true,  competitor: '⚠️ Via third-party' },
      { name: 'India Local Support',   baynix: true,  competitor: false, highlight: true },
      { name: 'Transparent Pricing',   baynix: true,  competitor: '⚠️ Per-contact billing' },
      { name: 'AI Flow Builder',       baynix: true,  competitor: true  },
      { name: 'Email API',             baynix: true,  competitor: false },
      { name: 'Go-live in 24 hrs',     baynix: true,  competitor: false },
    ],
  },
  {
    slug: 'sleekflow',
    path: '/blog/sleekflow-alternative',
    competitor: 'SleekFlow',
    accentColor: '#f472b6',
    tagline: 'SleekFlow is feature-heavy. Baynix is built to move fast.',
    verdict: 'SleekFlow packs in a lot — but that complexity comes with a cost in price, onboarding time, and learning curve. Baynix gives you the channels that matter with an API-first approach that developers love.',
    painPoints: [
      {
        icon: 'Wrench',
        iconColor: '#f59e0b',
        title: 'Steep learning curve',
        body: 'SleekFlow requires significant onboarding. Baynix is API-first — developers are live in hours, not weeks.',
      },
      {
        icon: 'DollarSign',
        iconColor: '#60a5fa',
        title: 'Expensive for what you need',
        body: 'SleekFlow bundles CRM features most Indian businesses don\'t need yet. Baynix lets you pay for channels you actually use.',
      },
      {
        icon: 'Globe',
        iconColor: '#a78bfa',
        title: 'Southeast Asia focus',
        body: 'SleekFlow is built for SEA markets. Baynix is built for India — DLT, TRAI, and Indian carrier integrations out of the box.',
      },
      {
        icon: 'Zap',
        iconColor: '#34d399',
        title: 'No RCS',
        body: 'SleekFlow has no RCS support. Baynix is ready for India\'s RCS rollout today.',
      },
    ],
    features: [
      { name: 'RCS Messaging',         baynix: true,  competitor: false, highlight: true },
      { name: 'TRAI / DLT Compliant',  baynix: true,  competitor: false, highlight: true },
      { name: 'WhatsApp API',          baynix: true,  competitor: true  },
      { name: 'Bulk SMS',              baynix: true,  competitor: true  },
      { name: 'Voice Solutions',       baynix: true,  competitor: false, highlight: true },
      { name: 'Email API',             baynix: true,  competitor: true  },
      { name: 'OTP Authentication',    baynix: true,  competitor: false },
      { name: 'India Local Support',   baynix: true,  competitor: false, highlight: true },
      { name: 'API-First SDK',         baynix: true,  competitor: '⚠️ Limited' },
      { name: 'Developer Docs',        baynix: true,  competitor: true  },
      { name: 'Transparent Pricing',   baynix: true,  competitor: '⚠️ Complex tiers' },
    ],
  },
]