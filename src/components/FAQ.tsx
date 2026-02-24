'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'Why choose Baynix?',
    a: 'Baynix stands out for its commitment to innovation, excellence, and customer satisfaction. We deliver tailored AI-powered communication solutions to help businesses thrive with industry-leading delivery rates and 24/7 expert support.',
  },
  {
    q: 'What services does Baynix provide?',
    a: 'Baynix offers a comprehensive range of services including Bulk SMS, RCS Messaging, WhatsApp Business API, Voice Solutions (IVR, OBD, IBD), OTP Authentication, Email API, and omnichannel communication solutions — all accessible through one unified AI platform.',
  },
  {
    q: 'Which platforms does Baynix integrate with?',
    a: 'Baynix integrates with Salesforce, WooCommerce, Shopify, Magento, Zoho, WebEngage, MoEngage, Zapier, CleverTap, and Leadsquared for seamless messaging capabilities within your existing workflow.',
  },
  {
    q: 'How does Baynix help businesses grow?',
    a: 'Baynix empowers businesses of all sizes to expand their outreach significantly through innovative SaaS-based solutions and a cutting-edge CPaaS platform. Our 900+ global connections and 450B+ yearly interactions ensure you reach customers wherever they are.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section style={{ padding: '6rem 2rem' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'start',
        }}
        className="reveal split-grid"
        >
          {/* Left */}
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.75rem',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: 'var(--accent)',
              marginBottom: '1rem',
            }}>
              <span style={{ width: 18, height: 1, background: 'var(--accent)', display: 'inline-block' }} />
              FAQ
            </div>
            <h2 style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              fontWeight: 700,
              letterSpacing: '-0.025em',
              lineHeight: 1.15,
              color: 'var(--text)',
              marginBottom: '1rem',
            }}>
              Frequently Asked Questions
            </h2>
            <p style={{
              fontSize: '1rem',
              color: 'var(--text2)',
              lineHeight: 1.7,
              fontWeight: 300,
            }}>
              Everything you need to know about Baynix and our platform.
            </p>
          </div>

          {/* Right — accordion */}
          <div>
            {faqs.map((faq, i) => (
              <div key={i} style={{
                borderBottom: '1px solid var(--border)',
                overflow: 'hidden',
              }}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  style={{
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    padding: '1.5rem 0',
                    fontFamily: 'inherit',
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    color: open === i ? 'var(--accent)' : 'var(--text)',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '1rem',
                    transition: 'color 0.2s',
                  }}
                >
                  {faq.q}
                  <svg
                    width="20" height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    style={{
                      flexShrink: 0,
                      color: open === i ? 'var(--accent)' : 'var(--text3)',
                      transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s, color 0.2s',
                    }}
                  >
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </button>

                <div style={{
                  maxHeight: open === i ? 300 : 0,
                  overflow: 'hidden',
                  transition: 'max-height 0.4s ease',
                }}>
                  <p style={{
                    fontSize: '0.9rem',
                    color: 'var(--text2)',
                    lineHeight: 1.7,
                    fontWeight: 300,
                    paddingBottom: '1.5rem',
                  }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}