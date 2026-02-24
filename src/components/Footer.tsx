'use client'

import Image from 'next/image'

const links = {
  Products: [
    { label: 'Bulk SMS', href: '/bulk-sms' },
    { label: 'WhatsApp API', href: '/whatsapp-api' },
    { label: 'RCS Messaging', href: '/rcs-messaging' },
    { label: 'Voice Solutions', href: '/voice' },
    { label: 'Email API', href: '/email-api' },
    { label: 'OTP Auth', href: '/otp' },
  ],
  Solutions: [
    { label: 'E-Commerce', href: '/e-commerce' },
    { label: 'BFSI & Fintech', href: '/fintech' },
    { label: 'EdTech', href: '/edtech' },
    { label: 'Logistics', href: '/logistics' },
    { label: 'Healthcare', href: '/healthcare' },
    { label: 'Startups', href: '/startups' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Blog', href: '/blog' },
    { label: 'Developer Docs', href: 'https://developers.baynix.ai' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Pricing', href: '/pricing' },
  ],
}

export default function Footer() {
  return (
    <footer style={{
      padding: '4rem 2rem 2rem',
      borderTop: '1px solid var(--border)',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: '3rem',
          marginBottom: '3rem',
        }}
        className="footer-grid"
        >
          {/* Brand */}
          <div>
            <Image
              src="/images/baynix-logo.png"
              alt="Baynix"
              width={120}
              height={70}
              style={{ objectFit: 'contain', marginBottom: '0.75rem' }}
            />
            <p style={{
              fontSize: '0.875rem',
              color: 'var(--text3)',
              maxWidth: 260,
              lineHeight: 1.7,
              fontWeight: 300,
              marginTop: '0.75rem',
            }}>
              Your all-in-one AI Communication Platform. Unified messaging across SMS, WhatsApp, RCS, Voice, and Email.
            </p>
            <p style={{
              marginTop: '0.75rem',
              fontSize: '0.78rem',
              color: 'var(--text3)',
            }}>
              📧 hello@baynix.ai &nbsp;|&nbsp; 🌐 baynix.ai
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <div style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                color: 'var(--text2)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '1rem',
              }}>
                {title}
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {items.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} style={{
                      fontSize: '0.85rem',
                      color: 'var(--text3)',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--text2)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text3)'}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div style={{
          paddingTop: '2rem',
          borderTop: '1px solid var(--border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <p style={{ fontSize: '0.8rem', color: 'var(--text3)' }}>
            © 2025–2026 Baynix. All Rights Reserved.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            {['ISO 27001', 'GDPR', 'Meta Partner'].map((badge) => (
              <span key={badge} style={{
                padding: '0.25rem 0.75rem',
                border: '1px solid var(--border2)',
                borderRadius: 6,
                fontSize: '0.7rem',
                color: 'var(--text3)',
                letterSpacing: '0.05em',
              }}>
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}