'use client'

const industries = [
  { name: 'E-Commerce', emoji: '🛒', color: '#3b82f6' },
  { name: 'BFSI & Fintech', emoji: '🏦', color: '#6366f1' },
  { name: 'EdTech', emoji: '🎓', color: '#22d3ee' },
  { name: 'Logistics', emoji: '🚚', color: '#f59e0b' },
  { name: 'Healthcare', emoji: '🏥', color: '#10b981' },
  { name: 'Enterprises', emoji: '🏢', color: '#a78bfa' },
  { name: 'Startups', emoji: '🚀', color: '#ec4899' },
]

export default function TrustedBy() {
  return (
    <section
      className="reveal"
      style={{
        padding: '5rem 2rem',
        textAlign: 'center',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Aurora blobs */}
      <div style={{
        position: 'absolute',
        width: 500, height: 300,
        background: 'radial-gradient(ellipse, rgba(99,102,241,0.1) 0%, transparent 70%)',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        width: 300, height: 300,
        background: 'radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 70%)',
        top: '20%', left: '20%',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        width: 300, height: 300,
        background: 'radial-gradient(circle, rgba(236,72,153,0.06) 0%, transparent 70%)',
        top: '30%', right: '15%',
        pointerEvents: 'none',
      }} />

      {/* Label */}
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.4rem',
        fontSize: '0.75rem',
        textTransform: 'uppercase',
        letterSpacing: '0.12em',
        color: 'var(--accent)',
        marginBottom: '1rem',
        position: 'relative',
        zIndex: 1,
      }}>
        <span style={{
          width: 18, height: 1,
          background: 'var(--accent)',
          display: 'inline-block',
        }} />
        Trusted Across Industries
        <span style={{
          width: 18, height: 1,
          background: 'var(--accent)',
          display: 'inline-block',
        }} />
      </div>

      {/* Glass container */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: 800,
        margin: '0 auto',
        padding: '2.5rem 3rem',
        background: 'rgba(255,255,255,0.03)',
        backdropFilter: 'blur(32px)',
        WebkitBackdropFilter: 'blur(32px)',
        borderRadius: 24,
        border: '1px solid rgba(255,255,255,0.08)',
        boxShadow: '0 24px 80px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08)',
      }}>

        {/* Top glow line on container */}
        <div style={{
          position: 'absolute',
          top: 0, left: '20%', right: '20%',
          height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.5), transparent)',
        }} />

        <p style={{
          fontSize: '0.82rem',
          color: 'var(--text3)',
          fontWeight: 300,
          marginBottom: '2rem',
          letterSpacing: '0.02em',
        }}>
          Powering communication for businesses across every sector
        </p>

        {/* Pills */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.75rem',
          flexWrap: 'wrap',
        }}>
          {industries.map((ind) => (
            <div
              key={ind.name}
              className="industry-glass"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.55rem 1.2rem',
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: `1px solid ${ind.color}33`,
                borderRadius: 100,
                fontSize: '0.85rem',
                fontWeight: 500,
                color: 'var(--text)',
                letterSpacing: '0.02em',
                transition: 'all 0.3s ease',
                cursor: 'default',
                boxShadow: `inset 0 1px 0 rgba(255,255,255,0.1), 0 0 16px ${ind.color}11`,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = `${ind.color}18`
                e.currentTarget.style.border = `1px solid ${ind.color}66`
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.boxShadow = `inset 0 1px 0 rgba(255,255,255,0.15), 0 8px 24px ${ind.color}22, 0 0 24px ${ind.color}18`
                e.currentTarget.style.color = '#fff'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                e.currentTarget.style.border = `1px solid ${ind.color}33`
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = `inset 0 1px 0 rgba(255,255,255,0.1), 0 0 16px ${ind.color}11`
                e.currentTarget.style.color = 'var(--text)'
              }}
            >
              <span style={{
                fontSize: '1rem',
                filter: `drop-shadow(0 0 6px ${ind.color}88)`,
              }}>
                {ind.emoji}
              </span>
              <span>{ind.name}</span>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '3rem',
          marginTop: '2.5rem',
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          flexWrap: 'wrap',
        }}>
        {/* Social proof */}
<div style={{
  marginTop: '2rem',
  paddingTop: '1.5rem',
  borderTop: '1px solid rgba(255,255,255,0.06)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',
  flexWrap: 'wrap',
}}>
  <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '0',
  }}>
    {['#3b82f6','#6366f1','#22d3ee','#10b981','#a78bfa'].map((color, i) => (
      <div key={i} style={{
        width: 26, height: 26,
        borderRadius: '50%',
        background: `linear-gradient(135deg, ${color}, ${color}88)`,
        border: '2px solid rgba(7,9,15,0.8)',
        marginLeft: i === 0 ? 0 : -8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '0.6rem',
      }}>
        {['🛒','🏦','🎓','🚚','🏥'][i]}
      </div>
    ))}
  </div>
  <p style={{
    fontSize: '0.82rem',
    color: 'var(--text3)',
    fontWeight: 300,
    margin: 0,
  }}>
    Businesses across <span style={{ color: 'var(--text)', fontWeight: 600 }}>7 industries</span> trust Baynix to power their customer communication
  </p>
</div>
        </div>
      </div>
    </section>
  )
}