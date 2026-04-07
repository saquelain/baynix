import {
  DollarSign, Smartphone, Bot, BarChart3,
  Globe, ShieldCheck, Zap, Headphones,
  Lock, Clock, TrendingUp, Wrench,
  Receipt, MousePointerClick, PhoneOff,
  GitBranchPlus, MapPin, Layers,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type FeatureCell = {
  status: 'win' | 'neutral' | 'lose'
  label: string
}

export type Feature = {
  name: string
  baynix: FeatureCell
  competitor: FeatureCell
  highlight?: boolean
}

export type BattleCard = {
  slug: string
  path: string
  competitor: string
  tagline: string
  verdict: string
  accentColor: string
  painPoints: {
    title: string
    body: string
    icon: string
    iconColor: string
  }[]
  features: Feature[]
  limitationsIntro: string
  limitations: {
    title: string
    body: string
    icon: string
    iconColor: string
  }[]
}

export const battlecards: BattleCard[] = [
  {
    slug: 'karix',
    path: '/blog/karix-alternative',
    competitor: 'Karix',
    accentColor: '#3b82f6',
    tagline: 'Karix has scale. Baynix has the full stack — plus flexibility.',
    verdict: 'Karix is a solid telecom BSP with strong SMS and Voice capabilities. But when it comes to RCS, no-code automation, DPDP compliance, and enterprise-friendly pricing — Baynix delivers where Karix falls short.',
    painPoints: [
      {
        icon: 'Zap',
        iconColor: '#f59e0b',
        title: 'RCS is an afterthought for Karix',
        body: 'Karix offers only limited RCS capabilities. Baynix sends 1B+ RCS messages annually with full carrier integrations — ready for India\'s RCS wave today.',
      },
      {
        icon: 'Wrench',
        iconColor: '#fb923c',
        title: 'No-code flow builder is minimal',
        body: 'Karix\'s automation builder is limited and developer-heavy. Baynix offers a drag-and-drop flow builder that lets marketing teams build multi-channel journeys without code.',
      },
      {
        icon: 'DollarSign',
        iconColor: '#60a5fa',
        title: 'Rigid enterprise-fixed pricing',
        body: 'Karix pricing is locked to enterprise contracts with little flexibility for mid-market. Baynix offers volume-based pricing that scales with your actual usage.',
      },
      {
        icon: 'Headphones',
        iconColor: '#a78bfa',
        title: 'Basic shared team inbox',
        body: 'Karix\'s team inbox is limited in features. Baynix provides a real-time multi-agent inbox with conversation assignment, SLA tracking, and cross-channel threading.',
      },
    ],
    features: [
      { name: 'WhatsApp Business API',   baynix: { status: 'win',     label: 'Official BSP Partner' },           competitor: { status: 'win',     label: 'Official BSP' } },
      { name: 'SMS (DLT)',               baynix: { status: 'win',     label: 'Full DLT, 1B+ annually' },         competitor: { status: 'win',     label: 'Strong SMS' } },
      { name: 'RCS Messaging',           baynix: { status: 'win',     label: '1B+ RCS annually' },               competitor: { status: 'neutral', label: 'Limited' },          highlight: true },
      { name: 'Voice / IVR',            baynix: { status: 'win',     label: 'IVR + Voicebot + Outbound' },      competitor: { status: 'win',     label: 'Voice strong' } },
      { name: 'Omni-channel Fallback',   baynix: { status: 'win',     label: 'WA→RCS→SMS→Voice auto' },         competitor: { status: 'neutral', label: 'Partial' },           highlight: true },
      { name: 'AI Chatbot',              baynix: { status: 'win',     label: 'FAQ + transactional + conv.' },    competitor: { status: 'neutral', label: 'Basic bot' } },
      { name: 'No-code Flow Builder',    baynix: { status: 'win',     label: 'Drag & drop builder' },           competitor: { status: 'neutral', label: 'Limited' },           highlight: true },
      { name: 'Campaign Broadcaster',    baynix: { status: 'win',     label: 'Multi-channel campaigns' },        competitor: { status: 'win',     label: 'Strong' } },
      { name: 'Shared Team Inbox',       baynix: { status: 'win',     label: 'Multi-agent, real-time' },        competitor: { status: 'neutral', label: 'Basic' } },
      { name: 'Analytics Dashboard',     baynix: { status: 'win',     label: 'Real-time, multi-channel' },      competitor: { status: 'win',     label: 'Enterprise grade' } },
      { name: 'ISO 27001:2022',          baynix: { status: 'win',     label: 'Certified' },                     competitor: { status: 'win',     label: 'Certified' } },
      { name: 'SOC Type II',             baynix: { status: 'win',     label: 'Certified' },                     competitor: { status: 'win',     label: 'Certified' } },
      { name: 'DPDP Compliant',          baynix: { status: 'win',     label: 'Compliant' },                     competitor: { status: 'neutral', label: 'In progress' },        highlight: true },
      { name: 'TRAI / DLT Registered',  baynix: { status: 'win',     label: 'Fully registered' },              competitor: { status: 'win',     label: 'Registered' } },
      { name: 'Pricing Flexibility',     baynix: { status: 'win',     label: 'Highly flexible, volume-based' }, competitor: { status: 'neutral', label: 'Enterprise fixed' },   highlight: true },
      { name: 'International Markets',   baynix: { status: 'win',     label: 'India + UAE + MENA' },            competitor: { status: 'win',     label: 'Global' } },
    ],
    limitationsIntro: 'Karix is a large telecom BSP with deep roots in enterprise SMS and Voice. It handles massive volumes and holds the required certifications. However, as enterprise communication evolves toward RCS, AI-driven automation, and true omnichannel — the gaps in Karix\'s platform become apparent.',
    limitations: [
      {
        icon: 'Zap',
        iconColor: '#f59e0b',
        title: 'RCS remains on the backburner',
        body: 'Karix has only a limited RCS offering. For businesses planning to lead on India\'s next messaging channel, waiting on Karix\'s RCS roadmap is a risk you don\'t need to take.',
      },
      {
        icon: 'Layers',
        iconColor: '#f87171',
        title: 'Automation built for developers, not marketers',
        body: 'Building workflows on Karix requires engineering resources. Baynix\'s no-code drag-and-drop builder puts campaign automation directly in the hands of marketing teams.',
      },
      {
        icon: 'Receipt',
        iconColor: '#fb923c',
        title: 'Enterprise-locked pricing with no flex',
        body: 'Karix pricing is designed for large-volume enterprise contracts. Mid-market and growing businesses face stiff minimum commitments without volume flexibility.',
      },
      {
        icon: 'ShieldCheck',
        iconColor: '#c084fc',
        title: 'DPDP compliance still in progress',
        body: 'India\'s Digital Personal Data Protection Act compliance is not yet confirmed for Karix. Baynix is fully compliant — giving your legal and data teams one less worry.',
      },
    ],
  },
  {
    slug: 'gupshup',
    path: '/blog/gupshup-alternative',
    competitor: 'Gupshup',
    accentColor: '#f97316',
    tagline: 'Gupshup is massive. Baynix is built to move faster and cost less.',
    verdict: 'Gupshup is one of the largest BSPs globally, with strong WhatsApp and AI chatbot capabilities. But premium pricing, partial SMS/Voice stacks, and an incomplete DPDP compliance story make it a costly fit for most Indian businesses. Baynix gives you the full omnichannel stack at a fraction of the cost.',
    painPoints: [
      {
        icon: 'DollarSign',
        iconColor: '#f59e0b',
        title: 'Premium pricing for mid-market pain',
        body: 'Gupshup is priced for global enterprises. Indian mid-market businesses end up paying for scale and features they don\'t need yet. Baynix offers volume-based flexible pricing built for your actual stage.',
      },
      {
        icon: 'Smartphone',
        iconColor: '#60a5fa',
        title: 'SMS, RCS, and Voice are only partial',
        body: 'Gupshup\'s SMS stack is not DLT-first, RCS is partial, and Voice/IVR is limited. Baynix runs 3B+ messages across all channels annually with full carrier-grade infrastructure.',
      },
      {
        icon: 'ShieldCheck',
        iconColor: '#a78bfa',
        title: 'DPDP compliance is still in progress',
        body: 'India\'s DPDP Act compliance is not yet confirmed for Gupshup. For regulated industries — BFSI, healthcare, ed-tech — this is a procurement blocker. Baynix is fully compliant.',
      },
      {
        icon: 'Headphones',
        iconColor: '#34d399',
        title: 'Team inbox is only partially built',
        body: 'Gupshup\'s shared inbox is partial. Baynix offers a fully real-time, multi-agent, multi-channel inbox with conversation routing, SLA management, and smart assignment.',
      },
    ],
    features: [
      { name: 'WhatsApp Business API',   baynix: { status: 'win',     label: 'Official BSP Partner' },           competitor: { status: 'win',     label: 'Official BSP' } },
      { name: 'SMS (DLT)',               baynix: { status: 'win',     label: 'Full DLT, 1B+ annually' },         competitor: { status: 'neutral', label: 'Available' },         highlight: true },
      { name: 'RCS Messaging',           baynix: { status: 'win',     label: '1B+ RCS annually' },               competitor: { status: 'neutral', label: 'Partial' },           highlight: true },
      { name: 'Voice / IVR',            baynix: { status: 'win',     label: 'IVR + Voicebot + Outbound' },      competitor: { status: 'neutral', label: 'Partial' },           highlight: true },
      { name: 'Omni-channel Fallback',   baynix: { status: 'win',     label: 'WA→RCS→SMS→Voice auto' },         competitor: { status: 'neutral', label: 'Partial' } },
      { name: 'AI Chatbot',              baynix: { status: 'win',     label: 'FAQ + transactional + conv.' },    competitor: { status: 'win',     label: 'Strong AI' } },
      { name: 'No-code Flow Builder',    baynix: { status: 'win',     label: 'Drag & drop builder' },           competitor: { status: 'win',     label: 'Strong' } },
      { name: 'Campaign Broadcaster',    baynix: { status: 'win',     label: 'Multi-channel campaigns' },        competitor: { status: 'win',     label: 'Strong' } },
      { name: 'Shared Team Inbox',       baynix: { status: 'win',     label: 'Multi-agent, real-time' },        competitor: { status: 'neutral', label: 'Partial' },           highlight: true },
      { name: 'Analytics Dashboard',     baynix: { status: 'win',     label: 'Real-time, multi-channel' },      competitor: { status: 'win',     label: 'Strong' } },
      { name: 'ISO 27001:2022',          baynix: { status: 'win',     label: 'Certified' },                     competitor: { status: 'win',     label: 'Certified' } },
      { name: 'SOC Type II',             baynix: { status: 'win',     label: 'Certified' },                     competitor: { status: 'win',     label: 'Certified' } },
      { name: 'DPDP Compliant',          baynix: { status: 'win',     label: 'Compliant' },                     competitor: { status: 'neutral', label: 'In progress' },        highlight: true },
      { name: 'TRAI / DLT Registered',  baynix: { status: 'win',     label: 'Fully registered' },              competitor: { status: 'win',     label: 'Registered' } },
      { name: 'Pricing Flexibility',     baynix: { status: 'win',     label: 'Highly flexible, volume-based' }, competitor: { status: 'neutral', label: 'Premium priced' },     highlight: true },
      { name: 'International Markets',   baynix: { status: 'win',     label: 'India + UAE + MENA' },            competitor: { status: 'win',     label: 'Global' } },
    ],
    limitationsIntro: 'Gupshup is one of the world\'s largest conversational messaging platforms with 10,000+ clients and strong WhatsApp and AI capabilities. But size has a cost — in pricing, in complexity, and in gaps that Indian businesses notice quickly when they go live.',
    limitations: [
      {
        icon: 'Receipt',
        iconColor: '#f59e0b',
        title: 'Premium pricing out of step with Indian market',
        body: 'Gupshup\'s pricing reflects its global enterprise positioning. For Indian SMBs and mid-market businesses, the cost per message and platform fees are significantly higher than alternatives that deliver the same quality.',
      },
      {
        icon: 'Smartphone',
        iconColor: '#f87171',
        title: 'Channel stack is incomplete',
        body: 'DLT SMS routing, RCS delivery, and IVR/Voicebot capabilities are partial or add-ons in Gupshup. Baynix delivers all three as core, carrier-integrated services — not afterthoughts.',
      },
      {
        icon: 'ShieldCheck',
        iconColor: '#fb923c',
        title: 'DPDP compliance not confirmed',
        body: 'India\'s Digital Personal Data Protection Act is now in effect. Gupshup\'s compliance is still listed as "in progress." For BFSI, healthcare, and edtech clients — this is a procurement red flag.',
      },
      {
        icon: 'Headphones',
        iconColor: '#c084fc',
        title: 'Shared inbox is half-built',
        body: 'Gupshup\'s team inbox lacks the real-time routing, SLA tracking, and multi-channel threading that customer support teams need. Baynix\'s inbox was built for high-volume support operations from day one.',
      },
    ],
  },
  {
    slug: 'aisensy',
    path: '/blog/aisensy-alternative',
    competitor: 'AiSensy',
    accentColor: '#7c3aed',
    tagline: 'AiSensy is WhatsApp. Baynix is the whole conversation.',
    verdict: 'AiSensy is a capable WhatsApp-first platform popular with D2C brands and SMBs. But the moment you need SMS, RCS, Voice, enterprise certifications, or international reach — AiSensy hits a hard wall. Baynix is built for businesses that outgrow WhatsApp-only tools.',
    painPoints: [
      {
        icon: 'Smartphone',
        iconColor: '#f59e0b',
        title: 'WhatsApp is the only channel',
        body: 'AiSensy is built entirely around WhatsApp. Baynix gives you WhatsApp, SMS, RCS, Voice, and Email — with automatic channel fallback so no message ever goes undelivered.',
      },
      {
        icon: 'ShieldCheck',
        iconColor: '#ef4444',
        title: 'No ISO 27001 or SOC Type II',
        body: 'AiSensy is not ISO 27001:2022 or SOC Type II certified. For enterprise procurement, BFSI clients, or regulated sectors — this is a hard blocker. Baynix holds both certifications.',
      },
      {
        icon: 'Globe',
        iconColor: '#60a5fa',
        title: 'India-only with no international reach',
        body: 'AiSensy operates only in India. If you serve customers in UAE, MENA, or Southeast Asia, you need a different solution. Baynix operates across India, UAE, and MENA through Azmarq.',
      },
      {
        icon: 'TrendingUp',
        iconColor: '#34d399',
        title: 'Built for SMBs, not enterprise scale',
        body: 'AiSensy is optimized for small and D2C brands. As you scale to enterprise volumes — 3B+ messages, 700+ clients, multi-region — the platform shows its limits. Baynix is enterprise-grade from day one.',
      },
    ],
    features: [
      { name: 'WhatsApp Business API',   baynix: { status: 'win',  label: 'Official BSP Partner' },           competitor: { status: 'win',  label: 'Official BSP' } },
      { name: 'SMS (DLT)',               baynix: { status: 'win',  label: 'Full DLT, 1B+ annually' },         competitor: { status: 'lose', label: 'Not a focus' },       highlight: true },
      { name: 'RCS Messaging',           baynix: { status: 'win',  label: '1B+ RCS annually' },               competitor: { status: 'lose', label: 'Not offered' },       highlight: true },
      { name: 'Voice / IVR',            baynix: { status: 'win',  label: 'IVR + Voicebot + Outbound' },      competitor: { status: 'lose', label: 'Not offered' },       highlight: true },
      { name: 'Omni-channel Fallback',   baynix: { status: 'win',  label: 'WA→RCS→SMS→Voice auto' },         competitor: { status: 'lose', label: 'WhatsApp only' },     highlight: true },
      { name: 'AI Chatbot',              baynix: { status: 'win',  label: 'FAQ + transactional + conv.' },    competitor: { status: 'neutral', label: 'Basic flows' } },
      { name: 'No-code Flow Builder',    baynix: { status: 'win',  label: 'Drag & drop builder' },           competitor: { status: 'win',  label: 'Good' } },
      { name: 'Campaign Broadcaster',    baynix: { status: 'win',  label: 'Multi-channel campaigns' },        competitor: { status: 'win',  label: 'WA only' } },
      { name: 'Shared Team Inbox',       baynix: { status: 'win',  label: 'Multi-agent, real-time' },        competitor: { status: 'win',  label: 'Good' } },
      { name: 'Analytics Dashboard',     baynix: { status: 'win',  label: 'Real-time, multi-channel' },      competitor: { status: 'neutral', label: 'Basic' } },
      { name: 'ISO 27001:2022',          baynix: { status: 'win',  label: 'Certified' },                     competitor: { status: 'lose', label: 'Not certified' },     highlight: true },
      { name: 'SOC Type II',             baynix: { status: 'win',  label: 'Certified' },                     competitor: { status: 'lose', label: 'Not available' },     highlight: true },
      { name: 'DPDP Compliant',          baynix: { status: 'win',  label: 'Compliant' },                     competitor: { status: 'lose', label: 'Not stated' } },
      { name: 'TRAI / DLT Registered',  baynix: { status: 'win',  label: 'Fully registered' },              competitor: { status: 'lose', label: 'Not applicable' } },
      { name: 'Enterprise Scale',        baynix: { status: 'win',  label: '700+ enterprise clients' },       competitor: { status: 'neutral', label: 'SMB focused' } },
      { name: 'International Markets',   baynix: { status: 'win',  label: 'India + UAE + MENA' },            competitor: { status: 'lose', label: 'India only' },         highlight: true },
    ],
    limitationsIntro: 'AiSensy is a popular WhatsApp Business API platform built for D2C brands, SMBs, and early-stage startups. It has a clean UI, a decent flow builder, and an affordable entry price. But the platform was never designed for enterprises — and those cracks widen fast as you scale.',
    limitations: [
      {
        icon: 'PhoneOff',
        iconColor: '#f59e0b',
        title: 'Locked into WhatsApp with no fallback',
        body: 'AiSensy only operates on WhatsApp. If a message fails — or your customer isn\'t on WhatsApp — there\'s no fallback. Baynix automatically routes to SMS, RCS, or Voice when WhatsApp fails.',
      },
      {
        icon: 'Lock',
        iconColor: '#f87171',
        title: 'No enterprise security certifications',
        body: 'ISO 27001:2022 and SOC Type II are non-negotiable for most enterprise and BFSI procurement processes. AiSensy doesn\'t hold either. Baynix is certified on both — so you can close deals, not lose them.',
      },
      {
        icon: 'BarChart3',
        iconColor: '#fb923c',
        title: 'Analytics is surface-level',
        body: 'AiSensy\'s analytics covers basic WhatsApp message stats. Baynix provides real-time, multi-channel dashboards with delivery analytics, conversion tracking, and campaign-level ROI.',
      },
      {
        icon: 'MapPin',
        iconColor: '#c084fc',
        title: 'India-only with no global expansion path',
        body: 'If you\'re expanding to UAE, Saudi Arabia, or broader MENA — AiSensy can\'t go with you. Baynix operates across India and MENA through Azmarq, so your messaging platform scales with your geography.',
      },
    ],
  },
  {
    slug: 'interakt',
    path: '/blog/interakt-alternative',
    competitor: 'Interakt',
    accentColor: '#10b981',
    tagline: 'Interakt fits D2C. Baynix fits every stage after that.',
    verdict: 'Interakt is a well-designed WhatsApp CRM loved by D2C brands. But it\'s built for one channel, one geography, and one segment. The moment you need SMS, RCS, Voice, enterprise certifications, or international operations — Interakt can\'t follow. Baynix was built for exactly that next stage.',
    painPoints: [
      {
        icon: 'Smartphone',
        iconColor: '#f59e0b',
        title: 'WhatsApp-only with no channel depth',
        body: 'Interakt doesn\'t offer SMS, RCS, or Voice. Baynix runs all four channels with automatic fallback — so your message always reaches the customer, regardless of their preferred channel.',
      },
      {
        icon: 'ShieldCheck',
        iconColor: '#ef4444',
        title: 'Not certified for enterprise procurement',
        body: 'Interakt doesn\'t hold ISO 27001:2022 or SOC Type II certifications. Enterprise, BFSI, and healthcare clients require these at the procurement stage. Baynix has both — so you never lose a deal on compliance.',
      },
      {
        icon: 'Globe',
        iconColor: '#60a5fa',
        title: 'India-only reach limits your growth',
        body: 'Interakt operates exclusively in India. Baynix supports India, UAE, and broader MENA markets through Azmarq — so your messaging infrastructure doesn\'t become a bottleneck when you go international.',
      },
      {
        icon: 'TrendingUp',
        iconColor: '#a78bfa',
        title: 'SMB platform hitting its ceiling at scale',
        body: 'Interakt is optimized for small D2C brands. At enterprise volumes — 700+ clients, 3B+ messages, multi-region deployment — you need infrastructure built for that. Baynix is.',
      },
    ],
    features: [
      { name: 'WhatsApp Business API',   baynix: { status: 'win',  label: 'Official BSP Partner' },           competitor: { status: 'win',  label: 'Official BSP' } },
      { name: 'SMS (DLT)',               baynix: { status: 'win',  label: 'Full DLT, 1B+ annually' },         competitor: { status: 'lose', label: 'Not offered' },       highlight: true },
      { name: 'RCS Messaging',           baynix: { status: 'win',  label: '1B+ RCS annually' },               competitor: { status: 'lose', label: 'Not offered' },       highlight: true },
      { name: 'Voice / IVR',            baynix: { status: 'win',  label: 'IVR + Voicebot + Outbound' },      competitor: { status: 'lose', label: 'Not offered' },       highlight: true },
      { name: 'Omni-channel Fallback',   baynix: { status: 'win',  label: 'WA→RCS→SMS→Voice auto' },         competitor: { status: 'lose', label: 'WhatsApp only' },     highlight: true },
      { name: 'AI Chatbot',              baynix: { status: 'win',  label: 'FAQ + transactional + conv.' },    competitor: { status: 'neutral', label: 'Basic flows' } },
      { name: 'No-code Flow Builder',    baynix: { status: 'win',  label: 'Drag & drop builder' },           competitor: { status: 'win',  label: 'Good' } },
      { name: 'Campaign Broadcaster',    baynix: { status: 'win',  label: 'Multi-channel campaigns' },        competitor: { status: 'win',  label: 'WA only' } },
      { name: 'Shared Team Inbox',       baynix: { status: 'win',  label: 'Multi-agent, real-time' },        competitor: { status: 'win',  label: 'Good' } },
      { name: 'Analytics Dashboard',     baynix: { status: 'win',  label: 'Real-time, multi-channel' },      competitor: { status: 'neutral', label: 'Basic' } },
      { name: 'ISO 27001:2022',          baynix: { status: 'win',  label: 'Certified' },                     competitor: { status: 'lose', label: 'Not certified' },     highlight: true },
      { name: 'SOC Type II',             baynix: { status: 'win',  label: 'Certified' },                     competitor: { status: 'lose', label: 'Not available' },     highlight: true },
      { name: 'DPDP Compliant',          baynix: { status: 'win',  label: 'Compliant' },                     competitor: { status: 'lose', label: 'Not stated' } },
      { name: 'TRAI / DLT Registered',  baynix: { status: 'win',  label: 'Fully registered' },              competitor: { status: 'lose', label: 'Not applicable' } },
      { name: 'REST API Layer',          baynix: { status: 'win',  label: 'Full REST API layer' },           competitor: { status: 'neutral', label: 'Basic' } },
      { name: 'Enterprise Scale',        baynix: { status: 'win',  label: '700+ enterprise clients' },       competitor: { status: 'neutral', label: 'SMB focused' } },
      { name: 'International Markets',   baynix: { status: 'win',  label: 'India + UAE + MENA' },            competitor: { status: 'lose', label: 'India only' },         highlight: true },
    ],
    limitationsIntro: 'Interakt is a clean, well-regarded WhatsApp Business platform built specifically for D2C brands and SMBs. It covers the basics — broadcasting, team inbox, flow builder — and does them well. But Interakt was never designed to be an enterprise platform, and the boundaries show up fast.',
    limitations: [
      {
        icon: 'PhoneOff',
        iconColor: '#f59e0b',
        title: 'One channel — no fallback, no flexibility',
        body: 'Interakt is WhatsApp only. There\'s no SMS, no RCS, no Voice, and no channel fallback if delivery fails. Baynix routes across all four with automatic fallback logic built in.',
      },
      {
        icon: 'Lock',
        iconColor: '#f87171',
        title: 'Missing certifications enterprise clients require',
        body: 'ISO 27001:2022 and SOC Type II aren\'t optional for enterprise procurement. Interakt doesn\'t hold these certifications. Baynix does — and so does your deal sheet.',
      },
      {
        icon: 'GitBranchPlus',
        iconColor: '#fb923c',
        title: 'Basic API layer limits developer integration',
        body: 'Interakt\'s API is basic and limited in scope. Baynix offers a full REST API layer with robust documentation, webhook support, and SDK access — built for teams that integrate deeply.',
      },
      {
        icon: 'MapPin',
        iconColor: '#c084fc',
        title: 'India-only with no international path',
        body: 'Interakt doesn\'t operate outside India. If your business expands to UAE or the broader MENA region, you\'ll need to migrate to a platform that can scale geographically. Baynix already operates there.',
      },
    ],
  },
]
