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
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }} className="reveal">

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
          Solutions
        </div>

        <h2 style={{
          fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
          fontWeight: 700,
          letterSpacing: '-0.025em',
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
          Tailored communication solutions for the sectors that need reliable, scalable messaging the most.
        </p>

        <div style={{
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
              style={{
                padding: '1.5rem 1rem',
                background: 'rgba(13,18,32,0.6)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid var(--border)',
                borderRadius: 14,
                textAlign: 'center',
                textDecoration: 'none',
                transition: 'all 0.25s',
                display: 'block',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--accent)'
                e.currentTarget.style.background = 'rgba(59,130,246,0.05)'
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(59,130,246,0.12)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.background = 'rgba(13,18,32,0.6)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <span style={{ fontSize: '1.8rem', display: 'block', marginBottom: '0.6rem' }}>
                {ind.emoji}
              </span>
              <div style={{ fontSize: '0.8rem', color: 'var(--text2)', fontWeight: 500 }}>
                {ind.name}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}