'use client'

const features = [
  {
    icon: '💬',
    color: 'blue',
    title: 'Bulk SMS',
    desc: 'Send high-volume transactional and promotional messages with guaranteed delivery rates and real-time tracking.',
    href: '/bulk-sms',
    stat: '99.9% delivery',
  },
  {
    icon: '📱',
    color: 'green',
    title: 'WhatsApp Business API',
    desc: 'Reach customers on the world\'s most popular messaging platform. Official API with full feature access and chatbot support.',
    href: '/whatsapp-api',
    stat: '2B+ users reached',
  },
  {
    icon: '🌐',
    color: 'purple',
    title: 'RCS Messaging',
    desc: 'Next-generation rich messaging with images, carousels, quick replies, and read receipts — beyond standard SMS.',
    href: '/rcs-messaging',
    stat: 'Next-gen channel',
  },
  {
    icon: '🔒',
    color: 'cyan',
    title: 'OTP Authenticator',
    desc: 'Secure your users with one-time passwords delivered instantly via SMS, Voice, or WhatsApp with 99.9% uptime.',
    href: '/otp',
    stat: '1.2s avg delivery',
  },
  {
    icon: '📞',
    color: 'orange',
    title: 'Voice Solutions',
    desc: 'IVR systems, outbound dialing, inbound handling, voice OTP, and number masking — full voice communication stack.',
    href: '/voice',
    stat: '24/7 uptime',
  },
  {
    icon: '✉️',
    color: 'blue',
    title: 'Email API',
    desc: 'Efficient transactional and marketing email delivery at scale. Deep analytics and integration-ready infrastructure.',
    href: '/email-api',
    stat: '98% inbox rate',
  },
]

const colorMap: Record<string, {
  bg: string
  border: string
  glow: string
  text: string
  topBar: string
}> = {
  blue: {
    bg: 'rgba(59,130,246,0.08)',
    border: 'rgba(59,130,246,0.2)',
    glow: 'rgba(59,130,246,0.15)',
    text: '#60a5fa',
    topBar: 'rgba(59,130,246,0.6)',
  },
  green: {
    bg: 'rgba(16,185,129,0.08)',
    border: 'rgba(16,185,129,0.2)',
    glow: 'rgba(16,185,129,0.15)',
    text: '#34d399',
    topBar: 'rgba(16,185,129,0.6)',
  },
  purple: {
    bg: 'rgba(99,102,241,0.08)',
    border: 'rgba(99,102,241,0.2)',
    glow: 'rgba(99,102,241,0.15)',
    text: '#a78bfa',
    topBar: 'rgba(99,102,241,0.6)',
  },
  cyan: {
    bg: 'rgba(34,211,238,0.08)',
    border: 'rgba(34,211,238,0.2)',
    glow: 'rgba(34,211,238,0.15)',
    text: '#22d3ee',
    topBar: 'rgba(34,211,238,0.6)',
  },
  orange: {
    bg: 'rgba(251,146,60,0.08)',
    border: 'rgba(251,146,60,0.2)',
    glow: 'rgba(251,146,60,0.15)',
    text: '#fb923c',
    topBar: 'rgba(251,146,60,0.6)',
  },
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
            <span style={{
              width: 18, height: 1,
              background: 'var(--accent)',
              display: 'inline-block',
            }} />
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
          gap: '1rem',
        }}>
          {features.map((f) => {
            const c = colorMap[f.color]
            return (
              <div
                key={f.title}
                style={{
                  background: 'rgba(13,18,32,0.7)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: 16,
                  padding: '2rem',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.border = `1px solid ${c.border}`
                  el.style.transform = 'translateY(-4px)'
                  el.style.boxShadow = `0 20px 60px rgba(0,0,0,0.4), 0 0 40px ${c.glow}`
                  const topBar = el.querySelector('.card-top-bar') as HTMLElement
                  if (topBar) topBar.style.opacity = '1'
                  const statBadge = el.querySelector('.card-stat') as HTMLElement
                  if (statBadge) statBadge.style.opacity = '1'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.border = '1px solid rgba(255,255,255,0.07)'
                  el.style.transform = 'translateY(0)'
                  el.style.boxShadow = 'none'
                  const topBar = el.querySelector('.card-top-bar') as HTMLElement
                  if (topBar) topBar.style.opacity = '0'
                  const statBadge = el.querySelector('.card-stat') as HTMLElement
                  if (statBadge) statBadge.style.opacity = '0'
                }}
              >
                {/* Top glow bar — hidden until hover */}
                <div
                  className="card-top-bar"
                  style={{
                    position: 'absolute',
                    top: 0, left: '10%', right: '10%',
                    height: 2,
                    background: `linear-gradient(90deg, transparent, ${c.topBar}, transparent)`,
                    opacity: 0,
                    transition: 'opacity 0.3s',
                    borderRadius: 2,
                  }}
                />

                {/* Background glow blob */}
                <div style={{
                  position: 'absolute',
                  top: -40, right: -40,
                  width: 120, height: 120,
                  background: `radial-gradient(circle, ${c.glow} 0%, transparent 70%)`,
                  pointerEvents: 'none',
                }} />

                {/* Icon + stat row */}
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  marginBottom: '1.2rem',
                }}>
                  <div style={{
                    width: 48, height: 48,
                    borderRadius: 12,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.4rem',
                    background: c.bg,
                    border: `1px solid ${c.border}`,
                    boxShadow: `0 0 20px ${c.glow}`,
                  }}>
                    {f.icon}
                  </div>

                  {/* Stat badge — hidden until hover */}
                  <div
                    className="card-stat"
                    style={{
                      padding: '0.25rem 0.6rem',
                      background: c.bg,
                      border: `1px solid ${c.border}`,
                      borderRadius: 100,
                      fontSize: '0.7rem',
                      color: c.text,
                      fontWeight: 500,
                      opacity: 0,
                      transition: 'opacity 0.3s',
                    }}
                  >
                    {f.stat}
                  </div>
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
                  marginBottom: '1.2rem',
                }}>
                  {f.desc}
                </p>

                <a href={f.href} style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  fontSize: '0.8rem',
                  color: c.text,
                  textDecoration: 'none',
                  fontWeight: 500,
                  transition: 'gap 0.2s',
                }}>
                  Learn more →
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}