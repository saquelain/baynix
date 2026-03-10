const partnerFiles = [
  'ascensive.png',
  'Brick & Bolt.png',
  'Calibehr_.png',
  'career launcher.png',
  'credable.png',
  'Deerika.png',
  'Ezeepay.png',
  'Farmley.png',
  'Godrej_Logo.png',
  'House of Believe.png',
  'ims.png',
  'kalyan jewellery.png',
  'Lenden.png',
  'lendingkar1.png',
  'lixil.png',
  'M3M.png',
  'madison.png',
  'magicbricks.png',
  'Mahindra_&_Mahindra_Logo.svg.png',
  'Meru.png',
  'money bar.png',
  'PaySprint.png',
  'Popeyes.png',
  'Revenue & Disaster Management.png',
  'save.png',
  'Since 1930.png',
  'Vedanta_idwJCzmpvh_0.png',
  'Vox.png',
  'waaree.png',
  'ymca-logo.png',
  'You broadband.png',
]

const Track = () => (
  <div style={{ position: 'relative', overflow: 'hidden' }}>
    <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: 120, background: 'linear-gradient(to right, var(--bg), transparent)', zIndex: 2, pointerEvents: 'none' }} />
    <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: 120, background: 'linear-gradient(to left, var(--bg), transparent)', zIndex: 2, pointerEvents: 'none' }} />
    <div style={{ display: 'flex', gap: '1.5rem', animation: 'ticker 30s linear infinite', width: 'max-content' }}>
      {[...Array(2)].map((_, repeat) => (
        <div key={repeat} style={{ display: 'flex', gap: '1.5rem' }}>
          {partnerFiles.map((file) => (
            <div key={`${repeat}-${file}`} style={{ flexShrink: 0, width: 160, height: 70, borderRadius: 12, overflow: 'hidden', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.5rem 1rem' }}>
              <img src={`/images/partners/${encodeURIComponent(file)}`} alt={file.replace(/\.png$/i, '')} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
)

interface PartnerMarqueeProps {
  variant?: 'standard' | 'full'
  title?: string
  subtitle?: string
}

export default function PartnerMarquee({
  variant = 'standard',
  title = 'Elevate your company with us',
  subtitle = 'just like 100+ others',
}: PartnerMarqueeProps) {
  if (variant === 'full') {
    return (
      <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: 500, height: 300, background: 'radial-gradient(ellipse, rgba(59,130,246,0.06) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', textTransform: 'uppercase' as const, letterSpacing: '0.12em', color: 'var(--accent)', marginBottom: '1rem' }}>
              <span style={{ width: 18, height: 1, background: 'var(--accent)', display: 'inline-block' }} />
              Our Trusting Partners
            </div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)', marginBottom: '0.75rem' }}>
              Brands that trust Baynix
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--text2)', fontWeight: 300, maxWidth: 480, margin: '0 auto', lineHeight: 1.7 }}>
              We're proud to work with some of India's most recognised companies across industries.
            </p>
          </div>
          <Track />
        </div>
      </section>
    )
  }

  return (
    <section style={{ padding: '3rem 0', borderBottom: '1px solid var(--border)', overflow: 'hidden' }}>
      <p style={{ textAlign: 'center', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text2)', marginBottom: '0.25rem' }}>{title}</p>
      {subtitle && (
        <p style={{ textAlign: 'center', fontSize: '0.75rem', textTransform: 'uppercase' as const, letterSpacing: '0.12em', color: 'var(--text3)', marginBottom: '2rem', fontWeight: 600 }}>{subtitle}</p>
      )}
      {!subtitle && <div style={{ marginBottom: '2rem' }} />}
      <Track />
    </section>
  )
}
