'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const perks = [
  {
    icon: '📈',
    title: 'Career Growth',
    desc: 'Unlock your potential with our structured career development programs, mentoring, and opportunities for advancement. We are committed to helping you reach new heights in your professional journey.',
    color: '#3b82f6',
  },
  {
    icon: '🌍',
    title: 'Work From Anywhere',
    desc: "Enjoy the freedom to work from any location, whether it's your home, a cafe, or a beach. Our flexible remote work policy supports your productivity and work-life balance.",
    color: '#10b981',
  },
  {
    icon: '💰',
    title: 'Smart Salary',
    desc: "Benefit from a competitive salary package designed to reward your skills and experience. We offer performance bonuses and regular salary reviews to ensure you're always compensated fairly.",
    color: '#f59e0b',
  },
  {
    icon: '🏥',
    title: 'Medical Insurance',
    desc: 'Stay healthy and secure with our comprehensive medical insurance plans. We cover a range of medical needs to ensure you and your family are protected and well taken care of.',
    color: '#ec4899',
  },
  {
    icon: '⏰',
    title: 'Flexible Hours',
    desc: 'Achieve a better work-life balance with our flexible working hours. Tailor your schedule to fit your personal and professional needs, ensuring you perform at your best.',
    color: '#22d3ee',
  },
  {
    icon: '🎉',
    title: 'Amazing Work Culture',
    desc: 'Thrive in a positive and inclusive work environment. We foster collaboration, celebrate achievements, and support your growth with team-building activities and a culture of mutual respect.',
    color: '#a78bfa',
  },
]

const testimonials = [
  {
    text: "At Baynix, the emphasis on personal and professional development is unparalleled. It's a company where your growth is genuinely prioritized and celebrated every step of the way.",
    name: 'John Doe',
    role: 'Senior Software Engineer',
    color: '#3b82f6',
    initial: 'J',
  },
  {
    text: 'Baynix is a company that truly values its employees. The leadership is transparent and always encourages us to bring fresh ideas to the table.',
    name: 'Priya Sharma',
    role: 'Software Engineer',
    color: '#10b981',
    initial: 'P',
  },
  {
    text: 'The best part about working at Baynix is the people. Everyone is passionate about their work and willing to help each other succeed.',
    name: 'Sanjay Patel',
    role: 'Project Manager',
    color: '#f59e0b',
    initial: 'S',
  },
  {
    text: "Being a part of Baynix has been a rewarding experience. The company's client-centric approach and dedication to delivering top-notch services is truly inspiring.",
    name: 'Arjun Rao',
    role: 'Sales Executive',
    color: '#ec4899',
    initial: 'A',
  },
  {
    text: 'Baynix provides a dynamic and inclusive work environment. The cutting-edge projects and the opportunity to work with the latest technologies have been a major highlight of my career here.',
    name: 'Meera Nair',
    role: 'Data Analyst',
    color: '#22d3ee',
    initial: 'M',
  },
  {
    text: "Baynix's commitment to integrity and excellence is reflected in its financial practices. I appreciate the transparency and opportunities for professional development.",
    name: 'Vikram Joshi',
    role: 'Financial Analyst',
    color: '#a78bfa',
    initial: 'V',
  },
]

const eventTabs = ['All', 'Company', 'Conference', 'Function']

const events = [
  // Company
  { tab: 'Company',    src: '/images/events/company-1.png',    label: 'Team Offsite 2024' },
  { tab: 'Company',    src: '/images/events/company-2.png',    label: 'Town Hall Q3' },
  { tab: 'Company',    src: '/images/events/company-3.png',    label: 'Hackathon 2024' },
  { tab: 'Company',    src: '/images/events/company-4.png',    label: 'Onboarding Day' },
  { tab: 'Company',    src: '/images/events/company-5.png',    label: 'Welcome Session' },
  // Conference
  { tab: 'Conference', src: '/images/events/conference-1.png', label: 'Tech Summit 2024' },
  { tab: 'Conference', src: '/images/events/conference-2.png', label: 'Product Launch' },
  { tab: 'Conference', src: '/images/events/conference-3.png', label: 'AI Summit' },
  // Function
  { tab: 'Function',   src: '/images/events/function-1.png',   label: 'Annual Day 2024' },
]

export default function LifePage() {
  const [activeTab, setActiveTab] = useState('All')
  const [hoveredEvent, setHoveredEvent] = useState<string | null>(null)

  const filteredEvents = activeTab === 'All'
    ? events
    : events.filter(e => e.tab === activeTab)

  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--bg)', minHeight: '100vh', paddingTop: 64, color: 'var(--text)' }}>

        {/* ── Hero ── */}
        <section style={{
          padding: '6rem 2rem 0',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          borderBottom: '1px solid var(--border)',
        }}>
          <div style={{
            position: 'absolute',
            width: 700, height: 400,
            background: 'radial-gradient(ellipse, rgba(99,102,241,0.12) 0%, transparent 70%)',
            top: '40%', left: '50%',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
          }} />

          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
            fontSize: '0.75rem', textTransform: 'uppercase' as const,
            letterSpacing: '0.12em', color: 'var(--accent)',
            marginBottom: '1.25rem', position: 'relative', zIndex: 1,
          }}>
            <span style={{ width: 18, height: 1, background: 'var(--accent)', display: 'inline-block' }} />
            Life at Baynix
          </div>

          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800,
            letterSpacing: '-0.03em', lineHeight: 1.15,
            color: 'var(--text)', position: 'relative', zIndex: 1,
            maxWidth: 700, margin: '0 auto 1rem',
          }}>
            Join Our Team
          </h1>

          <p style={{
            fontSize: '1.1rem', color: 'var(--text2)', lineHeight: 1.7,
            fontWeight: 300, maxWidth: 560,
            margin: '0 auto 3rem', position: 'relative', zIndex: 1,
          }}>
            We bring solutions to make life easier for our customers.
          </p>

          {/* Hero image */}
          <div style={{
            position: 'relative', zIndex: 1,
            maxWidth: 1000, margin: '0 auto',
            height: 460,
            borderRadius: '20px 20px 0 0',
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.08)',
            borderBottom: 'none',
            boxShadow: '0 -20px 60px rgba(99,102,241,0.12)',
          }}>
            <Image
              src="/images/life-hero.png"
              alt="Life at Baynix"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
            {/* Bottom fade */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to bottom, transparent 55%, rgba(4,5,10,0.7) 100%)',
              pointerEvents: 'none',
            }} />
          </div>
        </section>

        {/* ── Perks ── */}
        <section style={{
          padding: '5rem 2rem',
          borderBottom: '1px solid var(--border)',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', width: 500, height: 400,
            background: 'radial-gradient(ellipse, rgba(59,130,246,0.06) 0%, transparent 70%)',
            top: '50%', left: '20%', pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', width: 400, height: 400,
            background: 'radial-gradient(ellipse, rgba(167,139,250,0.06) 0%, transparent 70%)',
            top: '30%', right: '10%', pointerEvents: 'none',
          }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                fontSize: '0.75rem', textTransform: 'uppercase' as const,
                letterSpacing: '0.12em', color: 'var(--accent)', marginBottom: '1rem',
              }}>
                <span style={{ width: 18, height: 1, background: 'var(--accent)', display: 'inline-block' }} />
                Why Baynix
              </div>
              <h2 style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800,
                letterSpacing: '-0.03em', color: 'var(--text)',
              }}>
                Benefits that make a difference
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
              {perks.map((perk) => (
                <div
                  key={perk.title}
                  style={{
                    padding: '2rem',
                    background: 'rgba(255,255,255,0.03)',
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 20,
                    position: 'relative', overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                    e.currentTarget.style.border = `1px solid ${perk.color}33`
                    e.currentTarget.style.transform = 'translateY(-4px)'
                    e.currentTarget.style.boxShadow = `inset 0 1px 0 rgba(255,255,255,0.1), 0 16px 48px rgba(0,0,0,0.3), 0 0 30px ${perk.color}11`
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                    e.currentTarget.style.border = '1px solid rgba(255,255,255,0.08)'
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.06)'
                  }}
                >
                  <div style={{
                    position: 'absolute', top: 0, left: '15%', right: '15%',
                    height: 1,
                    background: `linear-gradient(90deg, transparent, ${perk.color}66, transparent)`,
                  }} />
                  <div style={{
                    width: 48, height: 48, borderRadius: 14,
                    background: `${perk.color}15`, border: `1px solid ${perk.color}33`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.4rem', marginBottom: '1.25rem',
                  }}>
                    {perk.icon}
                  </div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.6rem', letterSpacing: '-0.02em' }}>
                    {perk.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text2)', lineHeight: 1.75, fontWeight: 300 }}>
                    {perk.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section style={{
          padding: '5rem 2rem',
          borderBottom: '1px solid var(--border)',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', width: 600, height: 400,
            background: 'radial-gradient(ellipse, rgba(99,102,241,0.07) 0%, transparent 70%)',
            top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
          }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                fontSize: '0.75rem', textTransform: 'uppercase' as const,
                letterSpacing: '0.12em', color: 'var(--accent)', marginBottom: '1rem',
              }}>
                <span style={{ width: 18, height: 1, background: 'var(--accent)', display: 'inline-block' }} />
                Happy Team
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)', marginBottom: '0.5rem' }}>
                Don't take our word for it.
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--text2)', fontWeight: 300 }}>
                See what our team members say about us.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  style={{
                    padding: '1.75rem',
                    background: 'rgba(255,255,255,0.03)',
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 20,
                    position: 'relative', overflow: 'hidden',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
                    display: 'flex', flexDirection: 'column' as const, gap: '1.25rem',
                  }}
                >
                  <div style={{
                    position: 'absolute', top: 0, left: '15%', right: '15%', height: 1,
                    background: `linear-gradient(90deg, transparent, ${t.color}66, transparent)`,
                  }} />
                  <div style={{ fontSize: '2.5rem', lineHeight: 1, color: `${t.color}44`, fontFamily: 'Georgia, serif', marginBottom: '-0.5rem' }}>
                    "
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text2)', lineHeight: 1.75, fontWeight: 300, flex: 1 }}>
                    {t.text}
                  </p>
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: '0.75rem',
                    paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.06)',
                  }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: '50%',
                      background: `linear-gradient(135deg, ${t.color}33, ${t.color}11)`,
                      border: `1px solid ${t.color}44`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '0.9rem', fontWeight: 700, color: t.color, flexShrink: 0,
                    }}>
                      {t.initial}
                    </div>
                    <div>
                      <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text)' }}>{t.name}</div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text3)', fontWeight: 300 }}>{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Events & Activities ── */}
        <section style={{
          padding: '5rem 2rem',
          borderBottom: '1px solid var(--border)',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', width: 600, height: 500,
            background: 'radial-gradient(ellipse, rgba(34,211,238,0.06) 0%, transparent 70%)',
            top: '40%', left: '50%', transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
          }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            {/* Section header */}
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                fontSize: '0.75rem', textTransform: 'uppercase' as const,
                letterSpacing: '0.12em', color: 'var(--accent)', marginBottom: '1rem',
              }}>
                <span style={{ width: 18, height: 1, background: 'var(--accent)', display: 'inline-block' }} />
                Recent Events and Activities
              </div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)', marginBottom: '0.6rem' }}>
                Where work meets celebration
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text2)', fontWeight: 300, maxWidth: 520, margin: '0 auto' }}>
                At Baynix, we host events like team-building, social gatherings to foster a vibrant workplace culture.
              </p>
            </div>

            {/* Tabs */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
              {eventTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    padding: '0.45rem 1.25rem',
                    borderRadius: 999,
                    border: activeTab === tab ? '1px solid rgba(59,130,246,0.5)' : '1px solid rgba(255,255,255,0.1)',
                    background: activeTab === tab ? 'rgba(59,130,246,0.15)' : 'rgba(255,255,255,0.03)',
                    color: activeTab === tab ? '#93c5fd' : 'var(--text3)',
                    fontSize: '0.82rem',
                    fontWeight: activeTab === tab ? 600 : 400,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    fontFamily: 'inherit',
                    letterSpacing: '0.02em',
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Image grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1rem',
            }}>
              {filteredEvents.map((event) => (
                <div
                  key={event.src}
                  style={{
                    position: 'relative',
                    aspectRatio: '4/3',
                    borderRadius: 16,
                    overflow: 'hidden',
                    cursor: 'pointer',
                    border: '1px solid rgba(255,255,255,0.07)',
                    boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  }}
                  onMouseEnter={e => {
                    setHoveredEvent(event.src)
                    e.currentTarget.style.transform = 'scale(1.03)'
                    e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.5)'
                  }}
                  onMouseLeave={e => {
                    setHoveredEvent(null)
                    e.currentTarget.style.transform = 'scale(1)'
                    e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.3)'
                  }}
                >
                  <Image
                    src={event.src}
                    alt={event.label}
                    fill
                    style={{ objectFit: 'cover', transition: 'transform 0.4s ease', transform: hoveredEvent === event.src ? 'scale(1.06)' : 'scale(1)' }}
                  />
                  {/* Overlay */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: hoveredEvent === event.src
                      ? 'linear-gradient(to top, rgba(4,5,10,0.85) 0%, rgba(4,5,10,0.2) 60%, transparent 100%)'
                      : 'linear-gradient(to top, rgba(4,5,10,0.6) 0%, transparent 60%)',
                    transition: 'background 0.3s ease',
                  }} />
                  {/* Label */}
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    padding: '1rem',
                    transform: hoveredEvent === event.src ? 'translateY(0)' : 'translateY(4px)',
                    opacity: hoveredEvent === event.src ? 1 : 0.8,
                    transition: 'all 0.3s ease',
                  }}>
                    <span style={{
                      display: 'inline-block',
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase' as const,
                      color: 'rgba(255,255,255,0.5)',
                      marginBottom: '0.2rem',
                    }}>
                      {event.tab}
                    </span>
                    <p style={{ fontSize: '0.875rem', fontWeight: 600, color: '#fff', margin: 0 }}>
                      {event.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Careers CTA ── */}
        <section style={{
          padding: '6rem 2rem',
          position: 'relative', overflow: 'hidden',
          textAlign: 'center',
        }}>
          <div style={{
            position: 'absolute', width: 700, height: 500,
            background: 'radial-gradient(ellipse, rgba(99,102,241,0.1) 0%, transparent 70%)',
            top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
          }} />

          <div style={{ maxWidth: 680, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              fontSize: '0.75rem', textTransform: 'uppercase' as const,
              letterSpacing: '0.12em', color: 'var(--accent)', marginBottom: '1.5rem',
            }}>
              <span style={{ width: 18, height: 1, background: 'var(--accent)', display: 'inline-block' }} />
              Careers
            </div>

            <h2 style={{
              fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800,
              letterSpacing: '-0.03em', lineHeight: 1.15,
              color: 'var(--text)', marginBottom: '1.25rem',
            }}>
              Doors of opportunity stand open,{' '}
              <span style={{
                background: 'linear-gradient(90deg, #3b82f6, #a78bfa)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                inviting you to step through.
              </span>
            </h2>

            <p style={{
              fontSize: '1rem', color: 'var(--text2)', lineHeight: 1.75,
              fontWeight: 300, marginBottom: '2.5rem',
            }}>
              Joining the Baynix team means collaborating with industry leaders. We prioritize maintaining a solid core team composed of the most suitable individuals. Regardless of your location, if you're a perfect match for Baynix, there's an opportunity waiting for you!
            </p>

            <Link
              href="/career"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                padding: '0.85rem 2rem',
                background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
                color: '#fff',
                fontSize: '0.9rem', fontWeight: 600,
                borderRadius: 999,
                textDecoration: 'none',
                boxShadow: '0 0 32px rgba(59,130,246,0.3)',
                transition: 'all 0.2s ease',
                letterSpacing: '0.01em',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = '0 0 48px rgba(59,130,246,0.45)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = '0 0 32px rgba(59,130,246,0.3)'
              }}
            >
              Want to Join →
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
