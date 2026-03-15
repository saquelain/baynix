'use client'

import { useState } from 'react'
import Image from 'next/image'
import GetInTouchModal from '@/components/GetInTouchModal'

const links = {
  Products: [
    { label: 'Bulk SMS', href: '/bulk-sms' },
    { label: 'WhatsApp API', href: '/whatsapp-api' },
    { label: 'RCS Messaging', href: '/rcs-messaging' },
    { label: 'Voice Solutions', href: '/voice' },
    { label: 'Email API', href: '/email-api' },
    { label: 'OTP Auth', href: '/otp-authenticator' },
  ],
  Solutions: [
    { label: 'E-Commerce', href: '/e-commerce-d2c' },
    { label: 'BFSI & Fintech', href: '/bsfi-fintech' },
    { label: 'EdTech', href: '/edtech' },
    { label: 'Logistics', href: '/logistics' },
    { label: 'Healthcare', href: '/health-care' },
    { label: 'Startups', href: '/start-ups' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '/career' },
    { label: 'Media Coverage', href: '/media-coverage' },
    { label: 'Blog', href: '/blog' },
    { label: 'Developer Docs', href: 'https://developers.baynix.ai' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Pricing', href: '/pricing' },
  ],
}

export default function Footer() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
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

        {/* Get in Touch — above the divider */}
        <div style={{ display: 'flex', justifyContent: 'flex-start', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
          <button
            onClick={() => setModalOpen(true)}
            className="glass-btn glass-btn-primary glass-btn-sm"
            style={{ cursor: 'pointer', fontFamily: 'inherit' }}
          >
            Get in Touch
          </button>
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
          <p style={{ fontSize: '0.8rem', color: 'var(--text3)', margin: 0 }}>
            © 2025–2026 Baynix. All Rights Reserved.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {[
              {
                label: 'ISO 27001',
                icon: (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2z"/>
                    <path d="M9 12l2 2 4-4"/>
                  </svg>
                ),
              },
              {
                label: 'VAPT',
                icon: (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="M21 21l-4.35-4.35"/>
                    <path d="M11 8v6M8 11h6"/>
                  </svg>
                ),
              },
              {
                label: 'SOC 2 Type II',
                icon: (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                    <path d="M9 12l2 2 4-4"/>
                    <path d="M3 9h18"/>
                  </svg>
                ),
              },
              {
                label: 'Code Review',
                icon: (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"/>
                    <polyline points="8 6 2 12 8 18"/>
                    <path d="M12 2v20"/>
                  </svg>
                ),
              },
              {
                label: 'SAR',
                icon: (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <path d="M9 13h6M9 17h4"/>
                  </svg>
                ),
              },
            ].map(({ label, icon }) => (
              <span key={label} style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.25rem 0.75rem',
                border: '1px solid var(--border2)',
                borderRadius: 6,
                fontSize: '0.7rem',
                color: 'var(--text3)',
                letterSpacing: '0.05em',
              }}>
                {icon}
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>

    <GetInTouchModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}