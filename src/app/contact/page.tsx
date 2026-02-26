'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useState } from 'react'

const industries = [
  'Healthcare', 'Education', 'Financial Services', 'eCommerce',
  'Real Estate', 'Retail', 'Legal', 'Automotive', 'Hospitality',
  'Food & Beverage', 'Other',
]

const inputStyle = {
  width: '100%',
  padding: '0.75rem 1rem',
  background: 'rgba(255,255,255,0.04)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: 10,
  fontSize: '0.9rem',
  color: 'var(--text)',
  outline: 'none',
  transition: 'all 0.2s ease',
  fontFamily: 'Inter, sans-serif',
  boxSizing: 'border-box' as const,
}

const labelStyle = {
  fontSize: '0.8rem',
  fontWeight: 500,
  color: 'var(--text2)',
  marginBottom: '0.4rem',
  display: 'block' as const,
  letterSpacing: '0.02em',
}

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', company: '', jobTitle: '',
    email: '', industry: '', phone: '', message: '', captcha: '',
  })
  const [focused, setFocused] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (field: string, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (form.captcha.trim() !== '4') {
      alert('Please solve the math problem correctly.')
      return
    }
    setSubmitted(true)
  }

  const getFocusStyle = (field: string) => focused === field ? {
    ...inputStyle,
    border: '1px solid rgba(99,102,241,0.5)',
    background: 'rgba(255,255,255,0.06)',
    boxShadow: '0 0 0 3px rgba(99,102,241,0.1)',
  } : inputStyle

  return (
    <>
      <Navbar />
      <main style={{
        background: 'var(--bg)',
        minHeight: '100vh',
        paddingTop: 64,
        color: 'var(--text)',
      }}>

        {/* Hero */}
        <section style={{
          padding: '5rem 2rem 3rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          borderBottom: '1px solid var(--border)',
        }}>
          <div style={{
            position: 'absolute',
            width: 600, height: 400,
            background: 'radial-gradient(ellipse, rgba(99,102,241,0.1) 0%, transparent 70%)',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
          }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.75rem',
              textTransform: 'uppercase' as const,
              letterSpacing: '0.12em',
              color: 'var(--accent)',
              marginBottom: '1rem',
            }}>
              <span style={{ width: 18, height: 1, background: 'var(--accent)', display: 'inline-block' }} />
              Contact Us
            </div>

            <h1 style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              color: 'var(--text)',
              marginBottom: '0.75rem',
            }}>
              Let's Talk
            </h1>

            <p style={{
              fontSize: '1rem',
              color: 'var(--text2)',
              fontWeight: 300,
            }}>
              Have a query? Our aim is to help you.
            </p>
          </div>
        </section>

        {/* Main content */}
        <section style={{
          padding: '4rem 2rem',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute',
            width: 400, height: 400,
            background: 'radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)',
            top: '20%', left: '5%',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute',
            width: 400, height: 400,
            background: 'radial-gradient(circle, rgba(167,139,250,0.07) 0%, transparent 70%)',
            bottom: '20%', right: '5%',
            pointerEvents: 'none',
          }} />

          <div style={{
            maxWidth: 1100,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1.6fr 1fr',
            gap: '3rem',
            alignItems: 'start',
            position: 'relative',
            zIndex: 1,
          }}>

            {/* Form */}
            <div style={{
              padding: '2.5rem',
              background: 'rgba(255,255,255,0.03)',
              backdropFilter: 'blur(32px)',
              WebkitBackdropFilter: 'blur(32px)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 24,
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.07), 0 24px 60px rgba(0,0,0,0.3)',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Top glow line */}
              <div style={{
                position: 'absolute',
                top: 0, left: '15%', right: '15%',
                height: 1,
                background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.5), transparent)',
              }} />

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.5rem' }}>
                    Message Sent!
                  </h3>
                  <p style={{ color: 'var(--text2)', fontWeight: 300 }}>
                    We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {/* Row 1 */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                    <div>
                      <label style={labelStyle}>First Name *</label>
                      <input
                        type="text"
                        placeholder="John"
                        required
                        value={form.firstName}
                        onChange={e => handleChange('firstName', e.target.value)}
                        onFocus={() => setFocused('firstName')}
                        onBlur={() => setFocused(null)}
                        style={getFocusStyle('firstName')}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Last Name *</label>
                      <input
                        type="text"
                        placeholder="Doe"
                        required
                        value={form.lastName}
                        onChange={e => handleChange('lastName', e.target.value)}
                        onFocus={() => setFocused('lastName')}
                        onBlur={() => setFocused(null)}
                        style={getFocusStyle('lastName')}
                      />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                    <div>
                      <label style={labelStyle}>Company Name</label>
                      <input
                        type="text"
                        placeholder="Acme Inc."
                        value={form.company}
                        onChange={e => handleChange('company', e.target.value)}
                        onFocus={() => setFocused('company')}
                        onBlur={() => setFocused(null)}
                        style={getFocusStyle('company')}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Job Title</label>
                      <input
                        type="text"
                        placeholder="Marketing Manager"
                        value={form.jobTitle}
                        onChange={e => handleChange('jobTitle', e.target.value)}
                        onFocus={() => setFocused('jobTitle')}
                        onBlur={() => setFocused(null)}
                        style={getFocusStyle('jobTitle')}
                      />
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                    <div>
                      <label style={labelStyle}>Corporate Email *</label>
                      <input
                        type="email"
                        placeholder="john@company.com"
                        required
                        value={form.email}
                        onChange={e => handleChange('email', e.target.value)}
                        onFocus={() => setFocused('email')}
                        onBlur={() => setFocused(null)}
                        style={getFocusStyle('email')}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={form.phone}
                        onChange={e => handleChange('phone', e.target.value)}
                        onFocus={() => setFocused('phone')}
                        onBlur={() => setFocused(null)}
                        style={getFocusStyle('phone')}
                      />
                    </div>
                  </div>

                  {/* Industry */}
                  <div style={{ marginBottom: '1rem' }}>
                    <label style={labelStyle}>Your Industry</label>
                    <select
                      value={form.industry}
                      onChange={e => handleChange('industry', e.target.value)}
                      onFocus={() => setFocused('industry')}
                      onBlur={() => setFocused(null)}
                      style={{
                        ...getFocusStyle('industry'),
                        cursor: 'pointer',
                      }}
                    >
                      <option value="" style={{ background: '#0d1220' }}>Select your industry</option>
                      {industries.map(ind => (
                        <option key={ind} value={ind} style={{ background: '#0d1220' }}>{ind}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div style={{ marginBottom: '1rem' }}>
                    <label style={labelStyle}>Message *</label>
                    <textarea
                      placeholder="Tell us about your project or query..."
                      required
                      rows={4}
                      value={form.message}
                      onChange={e => handleChange('message', e.target.value)}
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused(null)}
                      style={{
                        ...getFocusStyle('message'),
                        resize: 'vertical' as const,
                        minHeight: 100,
                      }}
                    />
                  </div>

                  {/* Captcha */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={labelStyle}>2 + 2 = ? *</label>
                    <input
                      type="text"
                      placeholder="Enter answer"
                      required
                      value={form.captcha}
                      onChange={e => handleChange('captcha', e.target.value)}
                      onFocus={() => setFocused('captcha')}
                      onBlur={() => setFocused(null)}
                      style={{ ...getFocusStyle('captcha'), maxWidth: 160 }}
                    />
                  </div>

                  {/* Consent */}
                  <p style={{
                    fontSize: '0.72rem',
                    color: 'var(--text3)',
                    lineHeight: 1.6,
                    fontWeight: 300,
                    marginBottom: '1.5rem',
                    padding: '0.75rem',
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 8,
                  }}>
                    While submitting this form, I agree to receive communication from Baynix via SMS, Email, RCS and WhatsApp for my service, offers and updates.
                  </p>

                  <button type="submit" className="glass-btn glass-btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    Send Message →
                  </button>
                </form>
              )}
            </div>

            {/* WhatsApp section */}
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '1.5rem' }}>

              {/* WhatsApp card */}
              <div style={{
                padding: '2rem',
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(32px)',
                WebkitBackdropFilter: 'blur(32px)',
                border: '1px solid rgba(37,211,102,0.2)',
                borderRadius: 24,
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.07), 0 8px 32px rgba(0,0,0,0.2)',
                position: 'relative',
                overflow: 'hidden',
                textAlign: 'center' as const,
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0, left: '15%', right: '15%',
                  height: 1,
                  background: 'linear-gradient(90deg, transparent, rgba(37,211,102,0.5), transparent)',
                }} />

                {/* WhatsApp icon */}
                <div style={{
                  width: 56, height: 56,
                  borderRadius: '50%',
                  background: 'rgba(37,211,102,0.15)',
                  border: '1px solid rgba(37,211,102,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.8rem',
                  margin: '0 auto 1rem',
                  boxShadow: '0 0 24px rgba(37,211,102,0.2)',
                }}>
                  💬
                </div>

                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: 'var(--text)',
                  marginBottom: '0.4rem',
                }}>
                  Talk To Us on WhatsApp
                </h3>
                <p style={{
                  fontSize: '0.82rem',
                  color: 'var(--text3)',
                  fontWeight: 300,
                  marginBottom: '1.5rem',
                  lineHeight: 1.6,
                }}>
                  Scan the Code and let's get the conversation going!
                </p>

                {/* QR Code placeholder */}
                <div style={{
                  width: 160, height: 160,
                  margin: '0 auto 1.5rem',
                  borderRadius: 16,
                  background: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                }}>
                  {/* QR Code placeholder */}
                <div style={{
                    width: 160, height: 160,
                    margin: '0 auto 1.5rem',
                    borderRadius: 16,
                    overflow: 'hidden',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                    }}>
                    <img
                        src="/images/whatsapp-qr.png"
                        alt="WhatsApp QR Code"
                        style={{
                        width: '100%',
                        height: '100%',
                        paddingTop: 15,
                        objectFit: 'contain',
                        }}
                    />
                    </div>
                </div>

                {/* Steps */}
                <div style={{
                  textAlign: 'left' as const,
                  padding: '1rem',
                  background: 'rgba(37,211,102,0.05)',
                  border: '1px solid rgba(37,211,102,0.1)',
                  borderRadius: 12,
                  marginBottom: '1.25rem',
                }}>
                  <p style={{
                    fontSize: '0.72rem',
                    textTransform: 'uppercase' as const,
                    letterSpacing: '0.08em',
                    color: '#25d366',
                    fontWeight: 600,
                    marginBottom: '0.75rem',
                  }}>
                    Steps to connect
                  </p>
                  {[
                    'Scan the QR code with your phone',
                    'WhatsApp will open',
                    'Send a message to start a conversation',
                  ].map((step, i) => (
                    <div key={i} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.6rem',
                      marginBottom: i < 2 ? '0.5rem' : 0,
                    }}>
                      <div style={{
                        width: 18, height: 18,
                        borderRadius: '50%',
                        background: 'rgba(37,211,102,0.15)',
                        border: '1px solid rgba(37,211,102,0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.6rem',
                        fontWeight: 700,
                        color: '#25d366',
                        flexShrink: 0,
                        marginTop: 1,
                      }}>
                        {i + 1}
                      </div>
                      <span style={{ fontSize: '0.78rem', color: 'var(--text2)', fontWeight: 300, lineHeight: 1.5 }}>
                        {step}
                      </span>
                    </div>
                  ))}
                </div>

                <p style={{ fontSize: '0.72rem', color: 'var(--text3)', fontWeight: 300, lineHeight: 1.6, marginBottom: '1rem' }}>
                  Experiencing difficulties scanning? Access directly through the link below.
                </p>

                <a
                  href="https://wa.me/919999999999"
                  className="glass-btn glass-btn-secondary"
                  style={{ width: '100%', justifyContent: 'center', fontSize: '0.82rem' }}
                >
                  Open WhatsApp →
                </a>
              </div>

              {/* Contact info card */}
              <div style={{
                padding: '1.75rem',
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(32px)',
                WebkitBackdropFilter: 'blur(32px)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 20,
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.07)',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0, left: '15%', right: '15%',
                  height: 1,
                  background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.4), transparent)',
                }} />

                <h3 style={{
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  color: 'var(--text)',
                  marginBottom: '1.25rem',
                }}>
                  Other ways to reach us
                </h3>

                {[
                  { icon: '✉️', label: 'Email', value: 'hello@baynix.ai', href: 'mailto:hello@baynix.ai' },
                  { icon: '📞', label: 'Phone', value: '+91 99999 99999', href: 'tel:+919999999999' },
                  { icon: '📍', label: 'Office', value: 'Noida, Uttar Pradesh, India', href: '#' },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '0.75rem',
                      borderRadius: 10,
                      textDecoration: 'none',
                      marginBottom: '0.5rem',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'transparent'
                    }}
                  >
                    <div style={{
                      width: 36, height: 36,
                      borderRadius: 10,
                      background: 'rgba(99,102,241,0.1)',
                      border: '1px solid rgba(99,102,241,0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.9rem',
                      flexShrink: 0,
                    }}>
                      {item.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--text3)', fontWeight: 400, marginBottom: '0.1rem' }}>
                        {item.label}
                      </div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text)', fontWeight: 500 }}>
                        {item.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}