export default function Ticker() {
  const items = [
    { label: 'SMS API', sub: 'Guaranteed Delivery' },
    { label: 'WhatsApp Business API', sub: 'Official Partner' },
    { label: 'RCS Messaging', sub: 'Next-Gen Rich Messaging' },
    { label: 'Voice Solutions', sub: 'IVR & Outbound' },
    { label: 'OTP Authenticator', sub: 'Secure Verification' },
    { label: 'Email API', sub: 'Efficient Delivery' },
  ]

  const doubled = [...items, ...items]

  return (
    <div style={{
      overflow: 'hidden',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      padding: '0.9rem 0',
      background: 'rgba(255,255,255,0.015)',
    }}>
      <div style={{
        display: 'flex',
        gap: '4rem',
        animation: 'ticker 30s linear infinite',
        width: 'max-content',
      }}>
        {doubled.map((item, i) => (
          <span key={i} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            fontSize: '0.8rem',
            color: 'var(--text3)',
            whiteSpace: 'nowrap',
            letterSpacing: '0.03em',
          }}>
            <span style={{ color: 'var(--accent3)' }}>✦</span>
            <span style={{ color: 'var(--accent3)' }}>{item.label}</span>
            — {item.sub}
          </span>
        ))}
      </div>
    </div>
  )
}