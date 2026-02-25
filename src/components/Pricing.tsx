'use client'

import { useState } from 'react'

const plans = [
  {
    name: 'Starter',
    desc: 'For individuals, freelancers',
    monthlyPrice: 49,
    yearlyPrice: 39,
    color: '#3b82f6',
    glowColor: 'rgba(59,130,246,0.15)',
    borderColor: 'rgba(59,130,246,0.25)',
    featured: false,
    cta: 'Try for Free',
    ctaHref: 'https://app.baynix.ai',
    features: [
      { text: 'Fast and Reliable', included: true },
      { text: 'Discover Data Everywhere', included: true },
      { text: 'Enrich Data with Context', included: true },
      { text: 'Risk Management', included: false },
      { text: 'Privacy Compliance', included: false },
      { text: 'Third-Party Management', included: false },
    ],
  },
  {
    name: 'Pro',
    desc: 'For startups, agencies',
    monthlyPrice: 89,
    yearlyPrice: 69,
    color: '#6366f1',
    glowColor: 'rgba(99,102,241,0.2)',
    borderColor: 'rgba(99,102,241,0.5)',
    featured: true,
    cta: 'Try for Free',
    ctaHref: 'https://app.baynix.ai',
    features: [
      { text: 'Fast and Reliable', included: true },
      { text: 'Discover Data Everywhere', included: true },
      { text: 'Enrich Data with Context', included: true },
      { text: 'Risk Management', included: true },
      { text: 'Privacy Compliance', included: false },
      { text: 'Third-Party Management', included: false },
    ],
  },
  {
    name: 'Business',
    desc: 'For large business, companies',
    monthlyPrice: 249,
    yearlyPrice: 199,
    color: '#a78bfa',
    glowColor: 'rgba(167,139,250,0.15)',
    borderColor: 'rgba(167,139,250,0.25)',
    featured: false,
    cta: 'Get in Touch',
    ctaHref: '/contact',
    features: [
      { text: 'Fast and Reliable', included: true },
      { text: 'Discover Data Everywhere', included: true },
      { text: 'Enrich Data with Context', included: true },
      { text: 'Risk Management', included: true },
      { text: 'Privacy Compliance', included: true },
      { text: 'Third-Party Management', included: true },
    ],
  },
]

export default function Pricing() {
  const [yearly, setYearly] = useState(false)

  return (
    <section id="pricing" style={{
      padding: '6rem 2rem',
      position: 'relative',
      overflow: 'hidden',
      borderTop: '1px solid var(--border)',
    }}>

      {/* Aurora blobs */}
      <div style={{
        position: 'absolute',
        width: 600, height: 600,
        background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)',
        top: '30%', left: '50%',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        width: 400, height: 400,
        background: 'radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)',
        top: '60%', left: '20%',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        width: 400, height: 400,
        background: 'radial-gradient(circle, rgba(167,139,250,0.07) 0%, transparent 70%)',
        top: '60%', right: '10%',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
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
            Pricing
          </div>

          <h2 style={{
            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.15,
            color: 'var(--text)',
            marginBottom: '1rem',
          }}>
            Affordable prices and scalable<br />plans to fit any business size
          </h2>

          <p style={{
            fontSize: '1rem',
            color: 'var(--text2)',
            fontWeight: 300,
            marginBottom: '2rem',
          }}>
            No hidden fees. No surprises. Cancel anytime.
          </p>

          {/* Toggle */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '0.3rem',
            background: 'rgba(255,255,255,0.04)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 100,
            gap: '0.2rem',
            position: 'relative',
          }}>
            {['Pay monthly', 'Pay yearly'].map((label, i) => (
              <button
                key={label}
                onClick={() => setYearly(i === 1)}
                style={{
                  padding: '0.5rem 1.5rem',
                  borderRadius: 100,
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  background: (i === 1) === yearly
                    ? 'linear-gradient(135deg, rgba(99,102,241,0.8), rgba(59,130,246,0.8))'
                    : 'transparent',
                  color: (i === 1) === yearly ? '#fff' : 'var(--text3)',
                  boxShadow: (i === 1) === yearly
                    ? '0 4px 16px rgba(99,102,241,0.3), inset 0 1px 0 rgba(255,255,255,0.2)'
                    : 'none',
                }}
              >
                {label}
                {i === 1 && (
                  <span style={{
                    marginLeft: '0.4rem',
                    fontSize: '0.65rem',
                    padding: '0.1rem 0.4rem',
                    background: 'rgba(16,185,129,0.2)',
                    color: '#10b981',
                    borderRadius: 100,
                    border: '1px solid rgba(16,185,129,0.3)',
                  }}>
                    Save 20%
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="reveal" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem',
          alignItems: 'start',
        }}>
          {plans.map((plan) => (
            <div
              key={plan.name}
              style={{
                position: 'relative',
                borderRadius: 24,
                padding: plan.featured ? '2.5rem 2rem' : '2rem',
                background: plan.featured
                  ? 'rgba(255,255,255,0.07)'
                  : 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(32px)',
                WebkitBackdropFilter: 'blur(32px)',
                border: `1px solid ${plan.borderColor}`,
                boxShadow: plan.featured
                  ? `0 32px 80px rgba(0,0,0,0.4), 0 0 60px ${plan.glowColor}, inset 0 1px 0 rgba(255,255,255,0.12)`
                  : `0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.06)`,
                transform: plan.featured ? 'scale(1.03)' : 'scale(1)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => {
                if (!plan.featured) {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = `0 20px 60px rgba(0,0,0,0.3), 0 0 40px ${plan.glowColor}, inset 0 1px 0 rgba(255,255,255,0.1)`
                }
              }}
              onMouseLeave={e => {
                if (!plan.featured) {
                  e.currentTarget.style.transform = 'scale(1)'
                  e.currentTarget.style.boxShadow = `0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.06)`
                }
              }}
            >
              {/* Top glow line */}
              <div style={{
                position: 'absolute',
                top: 0, left: '15%', right: '15%',
                height: plan.featured ? 2 : 1,
                background: `linear-gradient(90deg, transparent, ${plan.color}, transparent)`,
                borderRadius: 2,
              }} />

              {/* Featured badge */}
              {plan.featured && (
                <div style={{
                  position: 'absolute',
                  top: -14,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  padding: '0.3rem 1rem',
                  background: `linear-gradient(135deg, ${plan.color}, ${plan.color}99)`,
                  borderRadius: 100,
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  color: '#fff',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  boxShadow: `0 4px 20px ${plan.glowColor}`,
                  whiteSpace: 'nowrap',
                }}>
                  Most Popular
                </div>
              )}

              {/* Plan name */}
              <div style={{
                display: 'inline-flex',
                padding: '0.3rem 0.9rem',
                background: `${plan.color}18`,
                border: `1px solid ${plan.color}33`,
                borderRadius: 100,
                fontSize: '0.78rem',
                fontWeight: 600,
                color: plan.color,
                marginBottom: '0.75rem',
                backdropFilter: 'blur(10px)',
              }}>
                {plan.name}
              </div>

              <p style={{
                fontSize: '0.82rem',
                color: 'var(--text3)',
                marginBottom: '1.5rem',
                fontWeight: 300,
              }}>
                {plan.desc}
              </p>

              {/* Price */}
              <div style={{ marginBottom: '0.4rem', display: 'flex', alignItems: 'flex-end', gap: '0.3rem' }}>
                <span style={{
                  fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.04em',
                  color: 'var(--text)',
                  lineHeight: 1,
                }}>
                  ${yearly ? plan.yearlyPrice : plan.monthlyPrice}
                </span>
                <span style={{
                  fontSize: '0.85rem',
                  color: 'var(--text3)',
                  marginBottom: '0.4rem',
                  fontWeight: 300,
                }}>
                  / month
                </span>
              </div>

              <p style={{
                fontSize: '0.75rem',
                color: 'var(--text3)',
                marginBottom: '1.5rem',
                fontWeight: 300,
              }}>
                {yearly ? 'Billed once yearly' : 'Billed monthly'}
              </p>

              {/* Divider */}
              <div style={{
                height: 1,
                background: 'rgba(255,255,255,0.06)',
                marginBottom: '1.5rem',
              }} />

              {/* Features */}
              <p style={{
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--text3)',
                marginBottom: '1rem',
                fontWeight: 600,
              }}>
                Standout features
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                {plan.features.map((feature) => (
                  <div key={feature.text} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    opacity: feature.included ? 1 : 0.35,
                  }}>
                    <div style={{
                      width: 18, height: 18,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      background: feature.included ? `${plan.color}22` : 'rgba(255,255,255,0.05)',
                      border: `1px solid ${feature.included ? plan.color + '44' : 'rgba(255,255,255,0.08)'}`,
                    }}>
                      {feature.included ? (
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M2 5l2.5 2.5L8 3" stroke={plan.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      ) : (
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                          <path d="M2 2l4 4M6 2L2 6" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" strokeLinecap="round"/>
                        </svg>
                      )}
                    </div>
                    <span style={{
                      fontSize: '0.85rem',
                      color: feature.included ? 'var(--text)' : 'var(--text3)',
                      fontWeight: feature.included ? 400 : 300,
                    }}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href={plan.ctaHref}
                className={`glass-btn ${plan.featured ? 'glass-btn-primary' : 'glass-btn-secondary'}`}
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  fontSize: '0.9rem',
                }}
              >
                {plan.cta}
              </a>

              <p style={{
                fontSize: '0.72rem',
                color: 'var(--text3)',
                textAlign: 'center',
                marginTop: '0.75rem',
                fontWeight: 300,
              }}>
                No credit card required
              </p>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="reveal" style={{
          textAlign: 'center',
          fontSize: '0.78rem',
          color: 'var(--text3)',
          marginTop: '2rem',
          fontWeight: 300,
        }}>
          * Yearly discount available on select plans. Need a custom plan?{' '}
          <a href="/contact" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 500 }}>
            Contact us →
          </a>
        </p>
      </div>
    </section>
  )
}