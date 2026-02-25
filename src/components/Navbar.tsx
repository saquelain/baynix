'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [companyOpen, setCompanyOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const companyLinks = [
    { label: 'About Us', href: '/about', emoji: '🏢' },
    { label: 'Life at ATPL', href: '/life', emoji: '✨' },
    { label: 'Career', href: '/career', emoji: '🚀' },
    { label: 'Contact Us', href: '/contact', emoji: '💬' },
    ]

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
    <Link href="/" style={{
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        }}>
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
        gap: '2rem',
        listStyle: 'none',
      }}>
        {/* Company dropdown — ADD THIS FIRST */}
  <li className="nav-link-item" style={{ display: 'none', position: 'relative' }}
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
      padding: 0,
      transition: 'color 0.2s',
    }}>
      Company
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
        style={{ transition: 'transform 0.2s', transform: companyOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
      >
        <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>

    {/* Dropdown panel */}
    <div style={{
      position: 'absolute',
      top: 'calc(100% + 12px)',
      left: '50%',
      width: 200,
      background: 'rgba(13,18,32,0.9)',
      backdropFilter: 'blur(32px)',
      WebkitBackdropFilter: 'blur(32px)',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: 16,
      padding: '0.5rem',
      boxShadow: '0 24px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)',
      opacity: companyOpen ? 1 : 0,
      pointerEvents: companyOpen ? 'auto' : 'none',
      transform: companyOpen
        ? 'translateX(-50%) translateY(0)'
        : 'translateX(-50%) translateY(-8px)',
      transition: 'all 0.2s cubic-bezier(0.34,1.56,0.64,1)',
      zIndex: 200,
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
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '0.65rem 0.85rem',
            borderRadius: 10,
            fontSize: '0.85rem',
            color: 'var(--text2)',
            textDecoration: 'none',
            fontWeight: 500,
            transition: 'all 0.15s ease',
          }}
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
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.08)',
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
        {[
          { label: 'Products', href: '#products' },
          { label: 'Developers', href: '#developers' },
          { label: 'Solutions', href: '#solutions' },
          { label: 'Industries', href: '#industries' },
          { label: 'Pricing', href: '#pricing' },
        ].map(({ label, href }) => (
          <li key={label} style={{ display: 'none' }} className="nav-link-item">
            <a href={href} style={{
              fontSize: '0.875rem',
              color: 'var(--text2)',
              textDecoration: 'none',
              fontWeight: 400,
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text2)')}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* Actions */}
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