'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { detectPage } from '@/lib/detectPage'

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
  boxSizing: 'border-box',
}

const focusedStyle: React.CSSProperties = {
  ...inputStyle,
  border: '1px solid rgba(99,102,241,0.5)',
  background: 'rgba(255,255,255,0.06)',
  boxShadow: '0 0 0 3px rgba(99,102,241,0.1)',
}

const labelStyle: React.CSSProperties = {
  fontSize: '0.8rem',
  fontWeight: 500,
  color: 'var(--text2)',
  marginBottom: '0.4rem',
  display: 'block',
}

export default function CTASectionForm() {
  const pathname = usePathname()
  const source = detectPage(pathname)

  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [focused, setFocused] = useState<string | null>(null)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const gs = (field: string): React.CSSProperties =>
    focused === field ? focusedStyle : inputStyle

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
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

  if (status === 'success') {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
        <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.5rem' }}>Enquiry Sent!</h3>
        <p style={{ color: 'var(--text2)', fontWeight: 300 }}>We'll get back to you within 24 hours.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: '1rem' }}>
        <label style={labelStyle}>Name *</label>
        <input
          type="text" placeholder="Your name" required
          value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
          onFocus={() => setFocused('name')} onBlur={() => setFocused(null)}
          style={gs('name')}
        />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label style={labelStyle}>Business Email *</label>
        <input
          type="email" placeholder="you@company.com" required
          value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
          onFocus={() => setFocused('email')} onBlur={() => setFocused(null)}
          style={gs('email')}
        />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label style={labelStyle}>Phone Number *</label>
        <input
          type="tel" placeholder="+91 XXXXX XXXXX" required
          value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
          onFocus={() => setFocused('phone')} onBlur={() => setFocused(null)}
          style={gs('phone')}
        />
      </div>
      <div style={{ marginBottom: '1.5rem' }}>
        <label style={labelStyle}>Message *</label>
        <textarea
          placeholder="Tell us about your requirements..." required rows={4}
          value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
          onFocus={() => setFocused('msg')} onBlur={() => setFocused(null)}
          style={{ ...gs('msg'), resize: 'vertical', minHeight: 100 } as React.CSSProperties}
        />
      </div>
      {status === 'error' && (
        <p style={{ fontSize: '0.8rem', color: '#f87171', marginBottom: '0.75rem' }}>
          Something went wrong. Please try again.
        </p>
      )}
      <button
        type="submit"
        disabled={status === 'sending'}
        className="glass-btn glass-btn-primary"
        style={{ width: '100%', justifyContent: 'center', opacity: status === 'sending' ? 0.7 : 1 }}
      >
        {status === 'sending' ? 'Sending…' : 'Enquiry Now →'}
      </button>
    </form>
  )
}
