import Image from 'next/image'

const splits = [
  {
    tag: 'One Inbox',
    title: 'Use One Inbox to engage with customers directly.',
    desc: 'Efficiently manage all messages from all channels at the same time, using One Inbox. Never miss a conversation — SMS, WhatsApp, RCS, Voice, and Email all in one place.',
    image: '/images/feature-inbox.png',
    alt: 'Baynix One Inbox — unified messaging dashboard',
    channels: [
      { label: 'WhatsApp', color: '#25d366' },
      { label: 'SMS', color: '#3b82f6' },
      { label: 'RCS', color: '#a78bfa' },
      { label: 'Voice', color: '#f59e0b' },
      { label: 'Email', color: '#22d3ee' },
    ],
    reverse: false,
  },
  {
    tag: 'URL Tracker',
    title: 'Track Your Text Message URLs.',
    desc: 'Shorten your URLs and track click-through rates to see how well your marketing strategy is working. Get real-time analytics on every link you send.',
    image: '/images/feature-url.png',
    alt: 'Baynix URL Tracker — click through rate analytics',
    channels: [],
    reverse: true,
  },
  {
    tag: 'Campaigns',
    title: 'Create Campaigns Focused on the Customer.',
    desc: 'Import and segment your audience to target the right customers with your personalized campaigns. Reach the right people at the right time.',
    image: '/images/feature-campaigns.png',
    alt: 'Baynix Campaigns — audience segmentation',
    channels: [],
    reverse: false,
  },
]

export default function FeatureSplits() {
  return (
    <section id="solutions" style={{
      background: 'var(--bg2)',
      borderTop: '1px solid var(--border)',
    }}>
      {splits.map((s, i) => (
        <div key={s.tag} style={{
          borderBottom: '1px solid var(--border)',
          padding: '6rem 2rem',
        }}>
          <div style={{
            maxWidth: 1100,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '5rem',
            alignItems: 'center',
            direction: s.reverse ? 'rtl' : 'ltr',
          }}
          className="reveal split-grid"
          >
            {/* Text side */}
            <div style={{ direction: 'ltr' }}>
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
                {s.tag}
              </div>

              <h2 style={{
                fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                fontWeight: 700,
                letterSpacing: '-0.025em',
                lineHeight: 1.2,
                color: 'var(--text)',
                marginBottom: '1rem',
              }}>
                {s.title}
              </h2>

              <p style={{
                fontSize: '1rem',
                color: 'var(--text2)',
                lineHeight: 1.7,
                fontWeight: 300,
                maxWidth: 460,
              }}>
                {s.desc}
              </p>

              {/* Channel badges for One Inbox */}
              {s.channels.length > 0 && (
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginTop: '1.5rem',
                }}>
                  {s.channels.map((c) => (
                    <div key={c.label} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      padding: '0.3rem 0.75rem',
                      border: '1px solid var(--border2)',
                      borderRadius: 100,
                      fontSize: '0.78rem',
                      color: 'var(--text2)',
                      background: 'rgba(255,255,255,0.03)',
                    }}>
                      <div style={{
                        width: 6, height: 6,
                        borderRadius: '50%',
                        background: c.color,
                      }} />
                      {c.label}
                    </div>
                  ))}
                </div>
              )}

              <div style={{ marginTop: '2rem' }}>
                <a href="https://app.baynix.ai" style={{
                  padding: '0.8rem 2rem',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  color: '#fff',
                  background: 'var(--accent)',
                  borderRadius: 10,
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 0 24px rgba(59,130,246,0.3)',
                  transition: 'all 0.25s',
                }}>
                  Get Started →
                </a>
              </div>
            </div>

            {/* Image side */}
            <div style={{ direction: 'ltr' }}>
              <div style={{
                background: 'rgba(13,18,32,0.6)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 20,
                overflow: 'hidden',
                aspectRatio: '4/3',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 24px 64px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
                position: 'relative',
              }}
              className="float-anim"
              >
                {/* Placeholder until Figma images are ready */}
                <Image
  src={s.image}
  alt={s.alt}
  fill
  style={{ objectFit: 'cover', borderRadius: 20 }}
/>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}