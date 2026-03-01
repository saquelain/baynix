'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [companyOpen, setCompanyOpen] = useState(false)
  const [devOpen, setDevOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Industries', href: '#industries' },
    { label: 'Pricing', href: '#pricing' },
    ]

    const productSections = [
    {
        heading: 'Integrations',
        links: [
        { label: 'Click to WhatsApp Ads', href: '/click-to-whatsapp-ads', emoji: '🔗' },
        { label: 'SMPP Platform', href: '/smpp-platform', emoji: '⚙️' },
        ],
    },
    {
        heading: 'WhatsApp',
        links: [
        { label: 'WhatsApp Business API', href: '/whatsapp-api', emoji: '💚' },
        { label: 'WhatsApp CRM', href: '/whatsapp-crm', emoji: '🗂️' },
        { label: 'WhatsApp Chatbot', href: '/whatsapp-chatbot', emoji: '🤖' },
        { label: 'Conversational AI Chatbot', href: '/ai-chatbot', emoji: '✨' },
        ],
    },
    {
        heading: 'SMS Messaging',
        links: [
        { label: 'RCS Messaging', href: '/rcs-messaging', emoji: '📨' },
        { label: 'Bulk SMS', href: '/bulk-sms', emoji: '📱' },
        { label: 'OTP Authenticator', href: '/otp-api', emoji: '🔐' },
        { label: 'Short Code', href: '/short-code', emoji: '🔢' },
        { label: 'Email to SMS', href: '/email-to-sms', emoji: '📧' },
        { label: 'Long Code', href: '/long-code', emoji: '📟' },
        ],
    },
    {
        heading: 'Voice Solutions',
        links: [
        { label: 'Voice', href: '/voice-api', emoji: '🎙️' },
        { label: 'Voice OTP', href: '/voice-otp', emoji: '🔔' },
        { label: 'IVR System', href: '/ivr', emoji: '📞' },
        { label: 'Outbound Dialing Service', href: '/obd', emoji: '📤' },
        { label: 'Inbound Dialing Service', href: '/ibd', emoji: '📥' },
        { label: 'Missed Call Service', href: '/missed-call', emoji: '📵' },
        { label: 'Number Masking', href: '/number-masking', emoji: '🎭' },
        ],
    },
    ]

  const companyLinks = [
    { label: 'About Us', href: '/about', emoji: '🏢' },
    { label: 'Life at ATPL', href: '/life', emoji: '✨' },
    { label: 'Career', href: '/career', emoji: '🚀' },
    { label: 'Contact Us', href: '/contact', emoji: '💬' },
  ]

  const devLinks = [
    { label: 'SMS API', href: '/sms-api', emoji: '💬' },
    { label: 'Voice API', href: '/voice-api', emoji: '🎙️' },
    { label: 'OTP API', href: '/otp-api', emoji: '🔐' },
    { label: 'Email API', href: '/email-api', emoji: '✉️' },
    { label: 'SMS Gateway', href: '/sms-gateway', emoji: '📡' },
  ]

  const dropdownBase = {
    position: 'absolute' as const,
    top: 'calc(100%)',
    left: '50%',
    width: 210,
    background: 'rgba(13,18,32,0.9)',
    backdropFilter: 'blur(32px)',
    WebkitBackdropFilter: 'blur(32px)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: 16,
    padding: '0.75rem 0.5rem 0.5rem',
    boxShadow: '0 24px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)',
    transition: 'all 0.2s cubic-bezier(0.34,1.56,0.64,1)',
    zIndex: 200,
  }

  const dropdownLinkStyle = {
    display: 'flex' as const,
    alignItems: 'center' as const,
    gap: '0.75rem',
    padding: '0.65rem 0.85rem',
    borderRadius: 10,
    fontSize: '0.85rem',
    color: 'var(--text2)',
    textDecoration: 'none' as const,
    fontWeight: 500,
    transition: 'all 0.15s ease',
  }

  const chevron = (open: boolean) => (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
      style={{ transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
    >
      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 100,
      padding: '0 2rem',
      height: '64px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: 'rgba(4,5,10,0.75)',
      backdropFilter: 'blur(24px)',
      WebkitBackdropFilter: 'blur(24px)',
      borderBottom: `1px solid ${scrolled ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.07)'}`,
      transition: 'border-color 0.3s',
    }}>

      {/* Logo */}
      <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
        <Image
          src="/images/baynix-logo.png"
          alt="Baynix"
          width={160}
          height={82}
          style={{ objectFit: 'contain' }}
          priority
        />
      </Link>

      {/* Nav links */}
      <ul style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.25rem',
        listStyle: 'none',
        margin: 0,
        padding: 0,
      }}>

        {/* Company dropdown */}
        <li
          className="nav-link-item"
          style={{ display: 'none', position: 'relative' }}
          onMouseEnter={() => setCompanyOpen(true)}
          onMouseLeave={() => setCompanyOpen(false)}
        >
          <button style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.3rem',
            fontSize: '0.875rem',
            color: companyOpen ? '#fff' : 'var(--text2)',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,
            padding: '0.4rem 0.85rem',
            borderRadius: 8,
            transition: 'all 0.2s',
          }}>
            Company
            {chevron(companyOpen)}
          </button>

          <div style={{
            ...dropdownBase,
            opacity: companyOpen ? 1 : 0,
            pointerEvents: companyOpen ? 'auto' : 'none',
            transform: companyOpen
              ? 'translateX(-50%) translateY(0)'
              : 'translateX(-50%) translateY(-8px)',
          }}>
            {/* Top glow line */}
            <div style={{
              position: 'absolute',
              top: 0, left: '20%', right: '20%',
              height: 1,
              background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.5), transparent)',
            }} />

            {companyLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={dropdownLinkStyle}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                  e.currentTarget.style.color = '#fff'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.color = 'var(--text2)'
                }}
              >
                <span style={{
                  width: 28, height: 28,
                  borderRadius: 8,
                  background: 'rgba(99,102,241,0.1)',
                  border: '1px solid rgba(99,102,241,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.8rem',
                  flexShrink: 0,
                }}>
                  {link.emoji}
                </span>
                {link.label}
              </a>
            ))}
          </div>
        </li>

        {/* Products dropdown */}
        <li
        className="nav-link-item"
        style={{ display: 'none', position: 'relative' }}
        onMouseEnter={() => setProductsOpen(true)}
        onMouseLeave={() => setProductsOpen(false)}
        >
        <button style={{
            display: 'flex', alignItems: 'center', gap: '0.3rem',
            fontSize: '0.875rem',
            color: productsOpen ? '#fff' : 'var(--text2)',
            background: 'transparent', border: 'none', cursor: 'pointer',
            fontFamily: 'Inter, sans-serif', fontWeight: 400,
            padding: '0.4rem 0.85rem', borderRadius: 8, transition: 'all 0.2s',
        }}>
            Products
            {chevron(productsOpen)}
        </button>

        {/* Wide mega-dropdown */}
        <div style={{
            position: 'absolute', top: 'calc(100%)', left: '50%',
            transform: productsOpen
            ? 'translateX(-50%) translateY(0)'
            : 'translateX(-50%) translateY(-8px)',
            width: 720,
            background: 'rgba(13,18,32,0.95)',
            backdropFilter: 'blur(32px)', WebkitBackdropFilter: 'blur(32px)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 20,
            padding: '1.5rem',
            boxShadow: '0 24px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)',
            opacity: productsOpen ? 1 : 0,
            pointerEvents: productsOpen ? 'auto' : 'none',
            transition: 'all 0.2s cubic-bezier(0.34,1.56,0.64,1)',
            zIndex: 200,
        }}>
            {/* Top glow */}
            <div style={{
            position: 'absolute', top: 0, left: '20%', right: '20%', height: 1,
            background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.5), transparent)',
            }} />

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.25rem' }}>
            {productSections.map((section) => (
                <div key={section.heading}>
                <div style={{
                    fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em',
                    textTransform: 'uppercase' as const, color: 'var(--text3)',
                    padding: '0.25rem 0.85rem', marginBottom: '0.25rem',
                }}>
                    {section.heading}
                </div>
                {section.links.map((link) => (
                    <a
                        key={link.label}
                        href={link.href}
                        style={dropdownLinkStyle}
                        onMouseEnter={e => {
                            e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                            e.currentTarget.style.color = '#fff'
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.background = 'transparent'
                            e.currentTarget.style.color = 'var(--text2)'
                        }}
                        >
                        <span style={{
                            width: 26, height: 26, borderRadius: 7, flexShrink: 0,
                            background: 'rgba(59,130,246,0.08)',
                            border: '1px solid rgba(59,130,246,0.15)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: '0.75rem',
                        }}>
                            {link.emoji}
                        </span>
                        {link.label}
                    </a>
                ))}
                </div>
            ))}
            </div>
        </div>
        </li>

        {/* Developers dropdown */}
        <li
          className="nav-link-item"
          style={{ display: 'none', position: 'relative' }}
          onMouseEnter={() => setDevOpen(true)}
          onMouseLeave={() => setDevOpen(false)}
        >
          <button style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.3rem',
            fontSize: '0.875rem',
            color: devOpen ? '#fff' : 'var(--text2)',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,
            padding: '0.4rem 0.85rem',
            borderRadius: 8,
            transition: 'all 0.2s',
          }}>
            Developers
            {chevron(devOpen)}
          </button>

          <div style={{
            ...dropdownBase,
            opacity: devOpen ? 1 : 0,
            pointerEvents: devOpen ? 'auto' : 'none',
            transform: devOpen
              ? 'translateX(-50%) translateY(0)'
              : 'translateX(-50%) translateY(-8px)',
          }}>
            {/* Top glow line — cyan for dev */}
            <div style={{
              position: 'absolute',
              top: 0, left: '20%', right: '20%',
              height: 1,
              background: 'linear-gradient(90deg, transparent, rgba(34,211,238,0.5), transparent)',
            }} />

            {devLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={dropdownLinkStyle}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                  e.currentTarget.style.color = '#fff'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.color = 'var(--text2)'
                }}
              >
                <span style={{
                  width: 28, height: 28,
                  borderRadius: 8,
                  background: 'rgba(34,211,238,0.08)',
                  border: '1px solid rgba(34,211,238,0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.8rem',
                  flexShrink: 0,
                }}>
                  {link.emoji}
                </span>
                {link.label}
              </a>
            ))}
          </div>
        </li>

        {/* Regular nav links */}
        {navLinks.map(({ label, href }) => (
          <li key={label} className="nav-link-item" style={{ display: 'none' }}>
            <a
              href={href}
              style={{
                display: 'block',
                padding: '0.4rem 0.85rem',
                fontSize: '0.875rem',
                color: 'var(--text2)',
                textDecoration: 'none',
                fontWeight: 400,
                borderRadius: 8,
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = '#fff'
                e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'var(--text2)'
                e.currentTarget.style.background = 'transparent'
              }}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* Auth buttons */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <a href="https://app.baynix.ai/login" className="glass-btn glass-btn-secondary glass-btn-sm">
          Login
        </a>
        <a href="https://app.baynix.ai" className="glass-btn glass-btn-primary glass-btn-sm">
          Sign Up
        </a>
      </div>
    </nav>
  )
}