'use client'

const industries = [
  { emoji: '🛒', name: 'E-Commerce & D2C', href: '/e-commerce' },
  { emoji: '🏦', name: 'BFSI & Fintech', href: '/fintech' },
  { emoji: '🎓', name: 'EdTech', href: '/edtech' },
  { emoji: '🚚', name: 'Logistics', href: '/logistics' },
  { emoji: '🏥', name: 'Healthcare', href: '/healthcare' },
]

export default function IndustriesGrid() {
  return (
    <section id="industries" style={{
      background: 'var(--bg2)',
      borderTop: '1px solid var(--border)',
      padding: '6rem 2rem',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Aurora blobs */}
      <div style={{
        position: 'absolute',
        width: 600, height: 600,
        background: 'radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)',
        top: '50%', left: '30%',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />
      <div style={{
        position: 'absolute',
        width: 500, height: 500,
        background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)',
        top: '50%', left: '70%',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />
      <div style={{
        position: 'absolute',
        width: 300, height: 300,
        background: 'radial-gradient(circle, rgba(34,211,238,0.12) 0%, transparent 70%)',
        top: '20%', left: '50%',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      <div style={{
        maxWidth: 1100,
        margin: '0 auto',
        position: 'relative',
        zIndex: 1,
      }} className="reveal">

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
          Solutions
        </div>

        <h2 style={{
          fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          lineHeight: 1.15,
          color: 'var(--text)',
          marginBottom: '1rem',
        }}>
          Built for every industry
        </h2>

        <p style={{
          fontSize: '1rem',
          color: 'var(--text2)',
          maxWidth: 520,
          lineHeight: 1.7,
          fontWeight: 300,
          marginBottom: '3rem',
        }}>
          Tailored communication solutions for the sectors that need
          reliable, scalable messaging the most.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '1rem',
          }}
          className="industries-grid"
        >
          {industries.map((ind) => (
            <a
              key={ind.name}
              href={ind.href}
              className="industry-glass"
              style={{
                padding: '2rem 1rem',
                background: 'rgba(255,255,255,0.06)',
                backdropFilter: 'blur(40px)',
                WebkitBackdropFilter: 'blur(40px)',
                borderRadius: 16,
                textAlign: 'center',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                display: 'block',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 4px 24px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.12)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
                e.currentTarget.style.transform = 'translateY(-5px)'
                e.currentTarget.style.boxShadow = '0 16px 48px rgba(99,102,241,0.25), inset 0 1px 0 rgba(255,255,255,0.2)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.12)'
              }}
            >

              <span style={{
                fontSize: '2rem',
                display: 'block',
                marginBottom: '0.75rem',
                filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.3))',
              }}>
                {ind.emoji}
              </span>
              <div style={{
                fontSize: '0.82rem',
                color: 'var(--text2)',
                fontWeight: 500,
                letterSpacing: '0.01em',
              }}>
                {ind.name}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}