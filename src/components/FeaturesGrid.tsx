'use client'

const features = [
  {
    icon: '💬',
    color: 'blue',
    title: 'Bulk SMS',
    desc: 'Send high-volume transactional and promotional messages with guaranteed delivery rates and real-time tracking.',
    href: '/bulk-sms',
  },
  {
    icon: '📱',
    color: 'green',
    title: 'WhatsApp Business API',
    desc: 'Reach customers on the world\'s most popular messaging platform. Official API with full feature access and chatbot support.',
    href: '/whatsapp-api',
  },
  {
    icon: '🌐',
    color: 'purple',
    title: 'RCS Messaging',
    desc: 'Next-generation rich messaging with images, carousels, quick replies, and read receipts — beyond standard SMS.',
    href: '/rcs-messaging',
  },
  {
    icon: '🔒',
    color: 'cyan',
    title: 'OTP Authenticator',
    desc: 'Secure your users with one-time passwords delivered instantly via SMS, Voice, or WhatsApp with 99.9% uptime.',
    href: '/otp',
  },
  {
    icon: '📞',
    color: 'orange',
    title: 'Voice Solutions',
    desc: 'IVR systems, outbound dialing, inbound handling, voice OTP, and number masking — full voice communication stack.',
    href: '/voice',
  },
  {
    icon: '✉️',
    color: 'blue',
    title: 'Email API',
    desc: 'Efficient transactional and marketing email delivery at scale. Deep analytics and integration-ready infrastructure.',
    href: '/email-api',
  },
]

const iconColors: Record<string, { bg: string; border: string }> = {
  blue:   { bg: 'rgba(59,130,246,0.1)',  border: 'rgba(59,130,246,0.2)' },
  green:  { bg: 'rgba(16,185,129,0.1)',  border: 'rgba(16,185,129,0.2)' },
  purple: { bg: 'rgba(99,102,241,0.1)',  border: 'rgba(99,102,241,0.2)' },
  cyan:   { bg: 'rgba(34,211,238,0.1)',  border: 'rgba(34,211,238,0.2)' },
  orange: { bg: 'rgba(251,146,60,0.1)',  border: 'rgba(251,146,60,0.2)' },
}

export default function FeaturesGrid() {
  return (
    <section id="products" style={{ padding: '6rem 2rem' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Header */}
        <div className="reveal" style={{ marginBottom: '4rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontSize: '0.75rem',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: 'var(--accent)',
            marginBottom: '1rem',
          }}>
            <span style={{ width: 18, height: 1, background: 'var(--accent)', display: 'inline-block' }} />
            Products
          </div>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
            fontWeight: 700,
            letterSpacing: '-0.025em',
            lineHeight: 1.15,
            color: 'var(--text)',
            marginBottom: '1rem',
          }}>
            Everything you need to<br />engage customers
          </h2>
          <p style={{
            fontSize: '1rem',
            color: 'var(--text2)',
            maxWidth: 520,
            lineHeight: 1.7,
            fontWeight: 300,
          }}>
            One platform to manage all your business communication channels with speed, reliability, and intelligence.
          </p>
        </div>

        {/* Grid */}
        <div className="reveal" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1px',
          background: 'var(--border)',
          border: '1px solid var(--border)',
          borderRadius: 20,
          overflow: 'hidden',
        }}>
          {features.map((f) => (
            <div
              key={f.title}
              style={{
                background: 'rgba(13,18,32,0.8)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                padding: '2.5rem',
                position: 'relative',
                transition: 'background 0.3s',
                cursor: 'pointer',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.background = 'rgba(17,24,39,0.9)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.background = 'rgba(13,18,32,0.8)'
              }}
            >
              {/* Icon */}
              <div style={{
                width: 44, height: 44,
                borderRadius: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.3rem',
                marginBottom: '1.2rem',
                background: iconColors[f.color].bg,
                border: `1px solid ${iconColors[f.color].border}`,
              }}>
                {f.icon}
              </div>

              <div style={{
                fontSize: '1rem',
                fontWeight: 700,
                color: 'var(--text)',
                marginBottom: '0.6rem',
                letterSpacing: '-0.01em',
              }}>
                {f.title}
              </div>

              <p style={{
                fontSize: '0.875rem',
                color: 'var(--text2)',
                lineHeight: 1.65,
                fontWeight: 300,
              }}>
                {f.desc}
              </p>

              <a href={f.href} style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem',
                fontSize: '0.8rem',
                color: 'var(--accent)',
                textDecoration: 'none',
                marginTop: '1rem',
                transition: 'gap 0.2s',
              }}>
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}