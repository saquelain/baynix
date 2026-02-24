export default function TrustedBy() {
  const industries = [
    'E-Commerce', 'BFSI & Fintech', 'EdTech',
    'Logistics', 'Healthcare', 'Enterprises', 'Startups',
  ]

  return (
    <section className="reveal" style={{
      padding: '4rem 2rem',
      textAlign: 'center',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
    }}>
      <p style={{
        fontSize: '0.75rem',
        color: 'var(--text3)',
        textTransform: 'uppercase',
        letterSpacing: '0.12em',
        marginBottom: '2rem',
      }}>
        Trusted by companies across industries
      </p>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        flexWrap: 'wrap',
      }}>
        {industries.map((name) => (
          <div key={name} style={{
            padding: '0.6rem 1.4rem',
            background: 'rgba(13,18,32,0.6)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 100,
            fontSize: '0.85rem',
            fontWeight: 600,
            color: 'var(--text3)',
            letterSpacing: '0.03em',
            transition: 'all 0.2s',
          }}>
            {name}
          </div>
        ))}
      </div>
    </section>
  )
}