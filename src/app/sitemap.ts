import type { MetadataRoute } from 'next'

const BASE = 'https://baynix.ai'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const routes: Array<{
    url: string
    priority: number
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
  }> = [
    // Core
    { url: '/', priority: 1.0, changeFrequency: 'weekly' },
    { url: '/contact', priority: 0.9, changeFrequency: 'monthly' },
    { url: '/about', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/career', priority: 0.7, changeFrequency: 'weekly' },
    { url: '/blog', priority: 0.8, changeFrequency: 'weekly' },

    // Company
    { url: '/enterprises', priority: 0.7, changeFrequency: 'monthly' },
    { url: '/start-ups', priority: 0.7, changeFrequency: 'monthly' },
    { url: '/life-at-atpl', priority: 0.5, changeFrequency: 'monthly' },
    { url: '/media-coverage', priority: 0.5, changeFrequency: 'monthly' },

    // SMS products
    { url: '/bulk-sms', priority: 0.9, changeFrequency: 'monthly' },
    { url: '/sms-api', priority: 0.9, changeFrequency: 'monthly' },
    { url: '/sms-gateway', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/smpp-platform', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/shortcode', priority: 0.7, changeFrequency: 'monthly' },
    { url: '/longcode', priority: 0.7, changeFrequency: 'monthly' },
    { url: '/email-to-sms', priority: 0.7, changeFrequency: 'monthly' },

    // WhatsApp products
    { url: '/whatsapp-api', priority: 0.9, changeFrequency: 'monthly' },
    { url: '/whatsapp-chatbot', priority: 0.9, changeFrequency: 'monthly' },
    { url: '/whatsapp-crm', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/click-to-whatsapp-ads', priority: 0.8, changeFrequency: 'monthly' },

    // RCS
    { url: '/rcs-messaging', priority: 0.9, changeFrequency: 'monthly' },

    // Voice products
    { url: '/voice', priority: 0.9, changeFrequency: 'monthly' },
    { url: '/voice-api', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/voice-otp', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/ivr-system', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/inbound-dialing-service', priority: 0.7, changeFrequency: 'monthly' },
    { url: '/outbound-dialing-service', priority: 0.7, changeFrequency: 'monthly' },
    { url: '/missed-call-service', priority: 0.7, changeFrequency: 'monthly' },
    { url: '/number-masking', priority: 0.7, changeFrequency: 'monthly' },

    // Authentication
    { url: '/otp-api', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/otp-authenticator', priority: 0.8, changeFrequency: 'monthly' },

    // Email
    { url: '/email-api', priority: 0.8, changeFrequency: 'monthly' },

    // AI
    { url: '/conversational-ai-chatbot', priority: 0.9, changeFrequency: 'monthly' },

    // Industry solutions
    { url: '/health-care', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/edtech', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/e-commerce-d2c', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/bsfi-fintech', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/logistics', priority: 0.8, changeFrequency: 'monthly' },

    // Blog posts
    { url: '/blog/what-is-rcs-messaging-and-how-does-it-work-2026-guide', priority: 0.7, changeFrequency: 'monthly' },
    { url: '/blog/why-rcs-messaging-is-the-future-of-customer-engagement-and-what-brands-must-do-next', priority: 0.7, changeFrequency: 'monthly' },
    { url: '/blog/a-cut-above-the-competition-why-azmarq-is-1-chat-commerce-alternative', priority: 0.7, changeFrequency: 'monthly' },
    { url: '/blog/karix-alternative', priority: 0.7, changeFrequency: 'monthly' },
    { url: '/blog/gupshup-alternative', priority: 0.7, changeFrequency: 'monthly' },
    { url: '/blog/aisensy-alternative', priority: 0.7, changeFrequency: 'monthly' },
    { url: '/blog/interakt-alternative', priority: 0.7, changeFrequency: 'monthly' },
  ]

  return routes.map(({ url, priority, changeFrequency }) => ({
    url: `${BASE}${url}`,
    lastModified: now,
    changeFrequency,
    priority,
  }))
}
