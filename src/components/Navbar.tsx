'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import {
  ShoppingCart, Landmark, GraduationCap, Truck, HeartPulse,
  Rocket, Building2, Link2, Settings, Heart, FolderOpen,
  Bot, Sparkles, MailOpen, Smartphone, KeyRound, Hash,
  Mail, Radio, BookOpen, Mic, Bell, Phone, Upload, Download,
  PhoneOff, Palette, Newspaper, MessageSquare, Shield,
  type LucideIcon,
} from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [companyOpen, setCompanyOpen] = useState(false)
  const [devOpen, setDevOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false)
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)
  const [mobileDevOpen, setMobileDevOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileMenuOpen])

  const closeMobileMenu = () => setMobileMenuOpen(false)

  const navLinks = [
    { label: 'Industries', href: '/#industries' },
    { label: 'Pricing', href: '/#pricing' },
  ]

  const solutionSections: { heading: string; links: { label: string; href: string; icon: LucideIcon }[] }[] = [
    {
      heading: 'By Industry',
      links: [
        { label: 'E-Commerce & D2C', href: '/e-commerce-d2c', icon: ShoppingCart },
        { label: 'BSFI & Fintech', href: '/bsfi-fintech', icon: Landmark },
        { label: 'Edtech', href: '/edtech', icon: GraduationCap },
        { label: 'Logistics', href: '/logistics', icon: Truck },
        { label: 'Health Care', href: '/health-care', icon: HeartPulse },
      ],
    },
    {
      heading: 'By Business Type',
      links: [
        { label: 'Startups', href: '/start-ups', icon: Rocket },
        { label: 'Enterprises', href: '/enterprises', icon: Building2 },
      ],
    },
  ]

  const productSections: { heading: string; links: { label: string; href: string; icon: LucideIcon }[] }[] = [
    {
      heading: 'Integrations',
      links: [
        { label: 'Click to WhatsApp Ads', href: '/click-to-whatsapp-ads', icon: Link2 },
        { label: 'SMPP Platform', href: '/smpp-platform', icon: Settings },
      ],
    },
    {
      heading: 'WhatsApp',
      links: [
        { label: 'WhatsApp Business API', href: '/whatsapp-api', icon: Heart },
        { label: 'WhatsApp CRM', href: '/whatsapp-crm', icon: FolderOpen },
        { label: 'WhatsApp Chatbot', href: '/whatsapp-chatbot', icon: Bot },
        { label: 'Conversational AI Chatbot', href: '/conversational-ai-chatbot', icon: Sparkles },
      ],
    },
    {
      heading: 'SMS Messaging',
      links: [
        { label: 'RCS Messaging', href: '/rcs-messaging', icon: MailOpen },
        { label: 'Bulk SMS', href: '/bulk-sms', icon: Smartphone },
        { label: 'OTP Authenticator', href: '/otp-authenticator', icon: KeyRound },
        { label: 'Short Code', href: '/shortcode', icon: Hash },
        { label: 'Email to SMS', href: '/email-to-sms', icon: Mail },
        { label: 'Long Code', href: '/longcode', icon: Radio },
      ],
    },
    {
      heading: 'Voice Solutions',
      links: [
        { label: 'Voice', href: '/voice', icon: Mic },
        { label: 'Voice OTP', href: '/voice-otp', icon: Bell },
        { label: 'IVR System', href: '/ivr-system', icon: Phone },
        { label: 'Outbound Dialing Service', href: '/outbound-dialing-service', icon: Upload },
        { label: 'Inbound Dialing Service', href: '/inbound-dialing-service', icon: Download },
        { label: 'Missed Call Service', href: '/missed-call-service', icon: PhoneOff },
        { label: 'Number Masking', href: '/number-masking', icon: Palette },
      ],
    },
  ]

  const companyLinks: { label: string; href: string; icon: LucideIcon }[] = [
    { label: 'About Us', href: '/about', icon: Building2 },
    { label: 'Life at ATPL', href: '/life-at-atpl', icon: Sparkles },
    { label: 'Career', href: '/career', icon: Rocket },
    { label: 'Media Coverage', href: '/media-coverage', icon: Newspaper },
    { label: 'Contact Us', href: '/contact', icon: MessageSquare },
  ]

  const devLinks: { label: string; href: string; icon: LucideIcon }[] = [
    { label: 'SMS API', href: '/sms-api', icon: MessageSquare },
    { label: 'Voice API', href: '/voice-api', icon: Mic },
    { label: 'OTP API', href: '/otp-api', icon: KeyRound },
    { label: 'Email API', href: '/email-api', icon: Mail },
    { label: 'SMS Gateway', href: '/sms-gateway', icon: Radio },
    { label: 'API Docs', href: '/api-docs/sms', icon: BookOpen },
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
      style={{ transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)', flexShrink: 0 }}
    >
      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )

  const mobileSectionStyle = {
    borderBottom: '1px solid rgba(255,255,255,0.07)',
  }

  const mobileAccordionBtn = {
    width: '100%' as const,
    display: 'flex' as const,
    justifyContent: 'space-between' as const,
    alignItems: 'center' as const,
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    color: 'var(--text)',
    fontSize: '1rem',
    fontFamily: 'Inter, sans-serif',
    fontWeight: 500,
    padding: '1rem 0',
    textAlign: 'left' as const,
  }

  const mobileLinkStyle = {
    display: 'flex' as const,
    alignItems: 'center' as const,
    gap: '0.75rem',
    padding: '0.6rem 0.75rem',
    fontSize: '0.9rem',
    color: 'var(--text3)',
    textDecoration: 'none' as const,
    borderRadius: 8,
  }

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        padding: '0 1.5rem',
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
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', flexShrink: 0 }} onClick={closeMobileMenu}>
          <Image
            src="/images/baynix-logo.png"
            alt="Baynix"
            width={140}
            height={72}
            sizes="140px"
            style={{ objectFit: 'contain' }}
            priority
          />
        </Link>

        {/* Desktop Nav links */}
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
              <div style={{
                position: 'absolute',
                top: 0, left: '20%', right: '20%',
                height: 1,
                background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.5), transparent)',
              }} />

              {companyLinks.map((link) => {
                const Icon = link.icon
                return (
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
                      flexShrink: 0,
                    }}>
                      <Icon size={14} />
                    </span>
                    {link.label}
                  </a>
                )
              })}
            </div>
          </li>

          {/* Solutions dropdown */}
          <li
            className="nav-link-item"
            style={{ display: 'none', position: 'relative' }}
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <button style={{
              display: 'flex', alignItems: 'center', gap: '0.3rem',
              fontSize: '0.875rem',
              color: solutionsOpen ? '#fff' : 'var(--text2)',
              background: 'transparent', border: 'none', cursor: 'pointer',
              fontFamily: 'Inter, sans-serif', fontWeight: 400,
              padding: '0.4rem 0.85rem', borderRadius: 8, transition: 'all 0.2s',
            }}>
              Solutions
              {chevron(solutionsOpen)}
            </button>

            <div style={{
              position: 'absolute', top: 'calc(100%)', left: '50%',
              transform: solutionsOpen
                ? 'translateX(-50%) translateY(0)'
                : 'translateX(-50%) translateY(-8px)',
              width: 380,
              background: 'rgba(13,18,32,0.95)',
              backdropFilter: 'blur(32px)', WebkitBackdropFilter: 'blur(32px)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 20, padding: '1.5rem',
              boxShadow: '0 24px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)',
              opacity: solutionsOpen ? 1 : 0,
              pointerEvents: solutionsOpen ? 'auto' : 'none',
              transition: 'all 0.2s cubic-bezier(0.34,1.56,0.64,1)',
              zIndex: 200,
            }}>
              <div style={{ position: 'absolute', top: 0, left: '20%', right: '20%', height: 1, background: 'linear-gradient(90deg, transparent, rgba(16,185,129,0.5), transparent)' }} />
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.25rem' }}>
                {solutionSections.map((section) => (
                  <div key={section.heading}>
                    <div style={{
                      fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em',
                      textTransform: 'uppercase' as const, color: 'var(--text3)',
                      padding: '0.25rem 0.85rem', marginBottom: '0.25rem',
                    }}>
                      {section.heading}
                    </div>
                    {section.links.map((link) => {
                      const Icon = link.icon
                      return (
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
                            background: 'rgba(16,185,129,0.08)',
                            border: '1px solid rgba(16,185,129,0.15)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                          }}>
                            <Icon size={13} />
                          </span>
                          {link.label}
                        </a>
                      )
                    })}
                  </div>
                ))}
              </div>
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
                    {section.links.map((link) => {
                      const Icon = link.icon
                      return (
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
                          }}>
                            <Icon size={13} />
                          </span>
                          {link.label}
                        </a>
                      )
                    })}
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
              <div style={{
                position: 'absolute',
                top: 0, left: '20%', right: '20%',
                height: 1,
                background: 'linear-gradient(90deg, transparent, rgba(34,211,238,0.5), transparent)',
              }} />

              {devLinks.map((link) => {
                const Icon = link.icon
                return (
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
                      flexShrink: 0,
                    }}>
                      <Icon size={14} />
                    </span>
                    {link.label}
                  </a>
                )
              })}
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

        {/* Desktop Auth buttons */}
        <div className="desktop-auth" style={{ gap: '0.75rem', alignItems: 'center' }}>
          <a href="https://app.baynix.ai/login" className="glass-btn glass-btn-secondary glass-btn-sm">
            Login
          </a>
          <a href="https://app.baynix.ai" className="glass-btn glass-btn-primary glass-btn-sm">
            Sign Up
          </a>
        </div>

        {/* Hamburger button — mobile only */}
        <button
          className="hamburger-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className="mobile-menu-overlay"
        style={{
          position: 'fixed',
          top: '64px', left: 0, right: 0, bottom: 0,
          background: 'rgba(4,5,10,0.97)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          zIndex: 99,
          overflowY: 'auto',
          opacity: mobileMenuOpen ? 1 : 0,
          pointerEvents: mobileMenuOpen ? 'auto' : 'none',
          transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(-8px)',
          transition: 'opacity 0.25s ease, transform 0.25s ease',
        }}
      >
        <div style={{ padding: '0.5rem 1.5rem 3rem' }}>

          {/* Company accordion */}
          <div style={mobileSectionStyle}>
            <button style={mobileAccordionBtn} onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}>
              <span>Company</span>
              {chevron(mobileCompanyOpen)}
            </button>
            {mobileCompanyOpen && (
              <div style={{ paddingBottom: '0.75rem' }}>
                {companyLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <a key={link.label} href={link.href} onClick={closeMobileMenu} style={mobileLinkStyle}>
                      <Icon size={16} style={{ flexShrink: 0 }} />
                      {link.label}
                    </a>
                  )
                })}
              </div>
            )}
          </div>

          {/* Solutions accordion */}
          <div style={mobileSectionStyle}>
            <button style={mobileAccordionBtn} onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}>
              <span>Solutions</span>
              {chevron(mobileSolutionsOpen)}
            </button>
            {mobileSolutionsOpen && (
              <div style={{ paddingBottom: '0.75rem' }}>
                {solutionSections.map((section) => (
                  <div key={section.heading} style={{ marginBottom: '0.5rem' }}>
                    <div style={{
                      fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em',
                      textTransform: 'uppercase' as const, color: 'var(--text3)',
                      padding: '0.5rem 0.75rem 0.25rem',
                    }}>
                      {section.heading}
                    </div>
                    {section.links.map((link) => {
                      const Icon = link.icon
                      return (
                        <a key={link.label} href={link.href} onClick={closeMobileMenu} style={mobileLinkStyle}>
                          <Icon size={16} style={{ flexShrink: 0 }} />
                          {link.label}
                        </a>
                      )
                    })}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Products accordion */}
          <div style={mobileSectionStyle}>
            <button style={mobileAccordionBtn} onClick={() => setMobileProductsOpen(!mobileProductsOpen)}>
              <span>Products</span>
              {chevron(mobileProductsOpen)}
            </button>
            {mobileProductsOpen && (
              <div style={{ paddingBottom: '0.75rem' }}>
                {productSections.map((section) => (
                  <div key={section.heading} style={{ marginBottom: '0.5rem' }}>
                    <div style={{
                      fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em',
                      textTransform: 'uppercase' as const, color: 'var(--text3)',
                      padding: '0.5rem 0.75rem 0.25rem',
                    }}>
                      {section.heading}
                    </div>
                    {section.links.map((link) => {
                      const Icon = link.icon
                      return (
                        <a key={link.label} href={link.href} onClick={closeMobileMenu} style={mobileLinkStyle}>
                          <Icon size={16} style={{ flexShrink: 0 }} />
                          {link.label}
                        </a>
                      )
                    })}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Developers accordion */}
          <div style={mobileSectionStyle}>
            <button style={mobileAccordionBtn} onClick={() => setMobileDevOpen(!mobileDevOpen)}>
              <span>Developers</span>
              {chevron(mobileDevOpen)}
            </button>
            {mobileDevOpen && (
              <div style={{ paddingBottom: '0.75rem' }}>
                {devLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <a key={link.label} href={link.href} onClick={closeMobileMenu} style={mobileLinkStyle}>
                      <Icon size={16} style={{ flexShrink: 0 }} />
                      {link.label}
                    </a>
                  )
                })}
              </div>
            )}
          </div>

          {/* Regular nav links */}
          {navLinks.map(({ label, href }) => (
            <div key={label} style={mobileSectionStyle}>
              <a
                href={href}
                onClick={closeMobileMenu}
                style={{
                  display: 'block',
                  padding: '1rem 0',
                  fontSize: '1rem',
                  color: 'var(--text)',
                  textDecoration: 'none',
                  fontWeight: 500,
                }}
              >
                {label}
              </a>
            </div>
          ))}

          {/* Auth buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1.75rem' }}>
            <a
              href="https://app.baynix.ai/login"
              className="glass-btn glass-btn-secondary"
              onClick={closeMobileMenu}
              style={{ justifyContent: 'center' }}
            >
              Login
            </a>
            <a
              href="https://app.baynix.ai"
              className="glass-btn glass-btn-primary"
              onClick={closeMobileMenu}
              style={{ justifyContent: 'center' }}
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
