'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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