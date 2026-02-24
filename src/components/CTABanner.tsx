export default function CTABanner() {
  return (
    <section style={{ padding: '2rem 2rem 6rem' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }} className="reveal">
        <div style={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: 24,
          padding: '5rem 3rem',
          textAlign: 'center',
          background: 'linear-gradient(135deg, #0f1f3d 0%, #0a0f1c 50%, #140d28 100%)',
          border: '1px solid rgba(99,102,241,0.2)',
          boxShadow: '0 24px 80px rgba(0,0,0,0.5)',
        }}>

          {/* Glow */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(59,130,246,0.12), transparent)',
            pointerEvents: 'none',
          }} />

          {/* Top glow line */}
          <div style={{
            position: 'absolute',
            top: 0, left: '20%', right: '20%',
            height: 1,
            background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.5), transparent)',
          }} />

          <h2 style={{
            fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
            fontWeight: 800,
            letterSpacing: '-0.025em',
            color: 'var(--text)',
            marginBottom: '1rem',
            position: 'relative',
          }}>
            Delight your customers with<br />
            <span style={{
              background: 'linear-gradient(135deg, #60a5fa, #a78bfa, #22d3ee)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              intelligent conversations.
            </span>
          </h2>

          <p style={{
            fontSize: '1rem',
            color: 'var(--text2)',
            maxWidth: 480,
            margin: '0 auto 2.5rem',
            fontWeight: 300,
            lineHeight: 1.7,
            position: 'relative',
          }}>
            Globally. Securely. At scale. Join thousands of businesses using Baynix to power their communication.
          </p>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            position: 'relative',
            flexWrap: 'wrap',
          }}>
            <a href="https://app.baynix.ai" style={{
              padding: '0.8rem 2rem',
              fontSize: '0.95rem',
              fontWeight: 500,
              color: '#fff',
              background: 'var(--accent)',
              borderRadius: 10,
              textDecoration: 'none',
              boxShadow: '0 0 30px rgba(59,130,246,0.4)',
              transition: 'all 0.25s',
            }}>
              Start for Free →
            </a>
            <a href="/contact" style={{
              padding: '0.8rem 2rem',
              fontSize: '0.95rem',
              fontWeight: 500,
              color: 'var(--text)',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid var(--border2)',
              borderRadius: 10,
              textDecoration: 'none',
              transition: 'all 0.25s',
            }}>
              Contact an Expert
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}