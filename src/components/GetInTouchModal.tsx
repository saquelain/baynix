'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { detectPage } from '@/lib/detectPage'

interface Props {
  isOpen: boolean
  onClose: () => void
}

export default function GetInTouchModal({ isOpen, onClose }: Props) {
  const pathname = usePathname()
  const source = detectPage(pathname)

  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    if (isOpen) document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [isOpen, onClose])

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source }),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      setForm({ name: '', email: '', phone: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.75rem 1rem',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid var(--border2)',
    borderRadius: 10,
    color: 'var(--text)',
    fontSize: '0.88rem',
    outline: 'none',
    fontFamily: 'inherit',
    transition: 'border-color 0.2s',
  }

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0, zIndex: 9998,
          background: 'rgba(0,0,0,0.7)',
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
          animation: 'fadeIn 0.2s ease',
        }}
      />

      {/* Modal */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '1rem',
        pointerEvents: 'none',
      }}>
        <div style={{
          width: '100%', maxWidth: 820,
          background: 'var(--surface)',
          border: '1px solid var(--border2)',
          borderRadius: 18,
          overflow: 'hidden',
          pointerEvents: 'auto',
          boxShadow: '0 24px 64px rgba(0,0,0,0.5)',
          animation: 'slideUp 0.25s ease',
          position: 'relative',
          display: 'flex',
        }}>
          {/* Left illustration panel */}
          <div style={{
            width: 300, flexShrink: 0,
            background: 'linear-gradient(160deg, rgba(99,102,241,0.18) 0%, rgba(59,130,246,0.1) 50%, rgba(16,185,129,0.08) 100%)',
            borderRight: '1px solid var(--border2)',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            padding: '2rem 1.5rem', gap: '1.25rem',
            position: 'relative', overflow: 'hidden',
          }} className="modal-illustration">
            {/* Decorative blobs */}
            <div style={{
              position: 'absolute', top: '-40px', left: '-40px',
              width: 160, height: 160, borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />
            <div style={{
              position: 'absolute', bottom: '-30px', right: '-30px',
              width: 140, height: 140, borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />

            {/* Placeholder image — replace /images/contact-illustration.png later */}
            <Image src="/images/contact-illustration.svg" alt="Contact illustration" width={180} height={180} sizes="180px" />

            {/* Copy */}
            <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
              <p style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.4rem' }}>
                Let&apos;s talk business
              </p>
              <p style={{ fontSize: '0.78rem', color: 'var(--text3)', lineHeight: 1.7 }}>
                We typically respond within 24 hours. No spam, ever.
              </p>
            </div>

            {/* Trust badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
              {['ISO 27001', 'SOC 2', 'VAPT'].map(b => (
                <span key={b} style={{
                  fontSize: '0.65rem', padding: '0.2rem 0.55rem',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: 5, color: 'var(--text3)',
                  letterSpacing: '0.04em',
                }}>{b}</span>
              ))}
            </div>
          </div>

          {/* Right form panel */}
          <div style={{ flex: 1, padding: '2rem', position: 'relative' }}>
          {/* Close button */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute', top: '1.1rem', right: '1.1rem',
              width: 32, height: 32, borderRadius: '50%',
              border: '1px solid var(--border2)',
              background: 'rgba(255,255,255,0.05)',
              color: 'var(--text3)', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1rem', lineHeight: 1,
              transition: 'all 0.15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'var(--text)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = 'var(--text3)' }}
            aria-label="Close"
          >
            ✕
          </button>

          {status === 'success' ? (
            /* Success state */
            <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
              <div style={{
                width: 56, height: 56, borderRadius: '50%',
                background: 'rgba(16,185,129,0.12)',
                border: '1px solid rgba(16,185,129,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.5rem', margin: '0 auto 1.25rem',
              }}>
                ✓
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.5rem' }}>
                We&apos;ll be in touch!
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text3)', lineHeight: 1.7 }}>
                Thanks for reaching out. Our team will get back to you within 24 hours.
              </p>
              <button
                onClick={onClose}
                style={{
                  marginTop: '1.5rem',
                  padding: '0.65rem 2rem',
                  background: 'rgba(59,130,246,0.12)',
                  border: '1px solid rgba(59,130,246,0.3)',
                  borderRadius: 10, color: '#93c5fd',
                  fontSize: '0.875rem', cursor: 'pointer', fontFamily: 'inherit',
                }}
              >
                Close
              </button>
            </div>
          ) : (
            /* Form */
            <>
              <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.4rem' }}>
                Get in Touch
              </h2>
              <p style={{ fontSize: '0.82rem', color: 'var(--text3)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                Tell us about your needs and we&apos;ll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {/* Name */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text2)', marginBottom: '0.35rem', fontWeight: 600, letterSpacing: '0.04em' }}>
                    Name <span style={{ color: '#f87171' }}>*</span>
                  </label>
                  <input
                    type="text" name="name" required
                    placeholder="Your full name"
                    value={form.name} onChange={handleChange}
                    style={inputStyle}
                    onFocus={e => e.currentTarget.style.borderColor = 'rgba(59,130,246,0.5)'}
                    onBlur={e => e.currentTarget.style.borderColor = 'var(--border2)'}
                  />
                </div>

                {/* Business Email */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text2)', marginBottom: '0.35rem', fontWeight: 600, letterSpacing: '0.04em' }}>
                    Business Email <span style={{ color: '#f87171' }}>*</span>
                  </label>
                  <input
                    type="email" name="email" required
                    placeholder="you@company.com"
                    value={form.email} onChange={handleChange}
                    style={inputStyle}
                    onFocus={e => e.currentTarget.style.borderColor = 'rgba(59,130,246,0.5)'}
                    onBlur={e => e.currentTarget.style.borderColor = 'var(--border2)'}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text2)', marginBottom: '0.35rem', fontWeight: 600, letterSpacing: '0.04em' }}>
                    Phone Number <span style={{ color: '#f87171' }}>*</span>
                  </label>
                  <input
                    type="tel" name="phone" required
                    placeholder="+91 XXXXX XXXXX"
                    value={form.phone} onChange={handleChange}
                    style={inputStyle}
                    onFocus={e => e.currentTarget.style.borderColor = 'rgba(59,130,246,0.5)'}
                    onBlur={e => e.currentTarget.style.borderColor = 'var(--border2)'}
                  />
                </div>

                {/* Message */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text2)', marginBottom: '0.35rem', fontWeight: 600, letterSpacing: '0.04em' }}>
                    Message
                  </label>
                  <textarea
                    name="message" rows={3}
                    placeholder="Tell us about your use case..."
                    value={form.message} onChange={handleChange}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: 80 }}
                    onFocus={e => e.currentTarget.style.borderColor = 'rgba(59,130,246,0.5)'}
                    onBlur={e => e.currentTarget.style.borderColor = 'var(--border2)'}
                  />
                </div>

                {status === 'error' && (
                  <p style={{ fontSize: '0.8rem', color: '#f87171', margin: 0 }}>
                    Something went wrong. Please try again.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  style={{
                    marginTop: '0.25rem',
                    padding: '0.75rem',
                    background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
                    border: 'none', borderRadius: 10,
                    color: '#fff', fontWeight: 600,
                    fontSize: '0.9rem', cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                    opacity: status === 'sending' ? 0.7 : 1,
                    transition: 'opacity 0.2s',
                    fontFamily: 'inherit',
                  }}
                >
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            </>
          )}
          </div>{/* end right form panel */}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px) } to { opacity: 1; transform: translateY(0) } }
        @media (max-width: 600px) { .modal-illustration { display: none !important; } }
      `}</style>
    </>
  )
}
