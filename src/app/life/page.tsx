'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useState } from 'react'
import Image from 'next/image'

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
    desc: 'Enjoy the freedom to work from any location, whether it\'s your home, a cafe, or a beach. Our flexible remote work policy supports your productivity and work-life balance.',
    color: '#10b981',
  },
  {
    icon: '💰',
    title: 'Smart Salary',
    desc: 'Benefit from a competitive salary package designed to reward your skills and experience. We offer performance bonuses and regular salary reviews to ensure you\'re always compensated fairly.',
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
    text: 'At Baynix, the emphasis on personal and professional development is unparalleled. It\'s a company where your growth is genuinely prioritized and celebrated every step of the way.',
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
    text: 'Being a part of Baynix has been a rewarding experience. The company\'s client-centric approach and dedication to delivering top-notch services is truly inspiring.',
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
    text: 'Baynix\'s commitment to integrity and excellence is reflected in its financial practices. I appreciate the transparency and opportunities for professional development.',
    name: 'Vikram Joshi',
    role: 'Financial Analyst',
    color: '#a78bfa',
    initial: 'V',
  },
]

const eventTabs = ['All', 'Company', 'Conference', 'Function']

// Placeholder event images — replace with real ones later
const events = [
  { tab: 'Company', label: 'Team Offsite 2024', bg: 'linear-gradient(135deg, rgba(59,130,246,0.3), rgba(99,102,241,0.2))' },
  { tab: 'Conference', label: 'Tech Summit 2024', bg: 'linear-gradient(135deg, rgba(34,211,238,0.3), rgba(59,130,246,0.2))' },
  { tab: 'Function', label: 'Annual Day 2024', bg: 'linear-gradient(135deg, rgba(167,139,250,0.3), rgba(236,72,153,0.2))' },
  { tab: 'Company', label: 'Town Hall Q3', bg: 'linear-gradient(135deg, rgba(16,185,129,0.3), rgba(34,211,238,0.2))' },
  { tab: 'Conference', label: 'Product Launch', bg: 'linear-gradient(135deg, rgba(251,146,60,0.3), rgba(234,88,12,0.2))' },
  { tab: 'Function', label: 'Diwali Celebration', bg: 'linear-gradient(135deg, rgba(244,114,182,0.3), rgba(251,146,60,0.2))' },
  { tab: 'Company', label: 'Hackathon 2024', bg: 'linear-gradient(135deg, rgba(99,102,241,0.3), rgba(167,139,250,0.2))' },
  { tab: 'Conference', label: 'AI Summit', bg: 'linear-gradient(135deg, rgba(59,130,246,0.3), rgba(34,211,238,0.2))' },
]

export default function LifePage() {
  const [activeTab, setActiveTab] = useState('All')

  const filteredEvents = activeTab === 'All'
    ? events
    : events.filter(e => e.tab === activeTab)

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
          padding: '6rem 2rem 0',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          borderBottom: '1px solid var(--border)',
        }}>
          <div style={{
            position: 'absolute',
            width: 700, height: 400,
            background: 'radial-gradient(ellipse, rgba(99,102,241,0.1) 0%, transparent 70%)',
            top: '40%', left: '50%',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
          }} />

          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontSize: '0.75rem',
            textTransform: 'uppercase' as const,
            letterSpacing: '0.12em',
            color: 'var(--accent)',
            marginBottom: '1.25rem',
            position: 'relative',
            zIndex: 1,
          }}>
            <span style={{ width: 18, height: 1, background: 'var(--accent)', display: 'inline-block' }} />
            Life at Baynix
          </div>

          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.15,
            color: 'var(--text)',
            marginBottom: '1rem',
            position: 'relative',
            zIndex: 1,
            maxWidth: 700,
            margin: '0 auto 1rem',
          }}>
            Join Our Team
          </h1>

          <p style={{
            fontSize: '1.1rem',
            color: 'var(--text2)',
            lineHeight: 1.7,
            fontWeight: 300,
            maxWidth: 560,
            margin: '0 auto 3rem',
            position: 'relative',
            zIndex: 1,
          }}>
            We bring solutions to make life easier for our customers.
          </p>

          {/* Hero image placeholder */}
          <div style={{
            position: 'relative',
            zIndex: 1,
            maxWidth: 1000,
            margin: '0 auto',
            height: 420,
            borderRadius: '20px 20px 0 0',
            background: 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(59,130,246,0.1), rgba(34,211,238,0.08))',
            border: '1px solid rgba(255,255,255,0.08)',
            borderBottom: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            boxShadow: '0 -20px 60px rgba(99,102,241,0.1)',
          }}>
            {/* Replace this div with your actual team image */}
            <Image src="/images/team-photo.jpg" alt="Baynix Team" fill style={{ objectFit: 'cover' }} />
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>👥</div>
              <p style={{
                fontSize: '0.85rem',
                color: 'var(--text3)',
                fontWeight: 300,
              }}>
                Replace with team photo
              </p>
            </div>
            {/* Overlay gradient */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, transparent 50%, rgba(4,5,10,0.6) 100%)',
              pointerEvents: 'none',
            }} />
          </div>
        </section>

        {/* Perks */}
        <section style={{
          padding: '5rem 2rem',
          borderBottom: '1px solid var(--border)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute',
            width: 500, height: 400,
            background: 'radial-gradient(ellipse, rgba(59,130,246,0.06) 0%, transparent 70%)',
            top: '50%', left: '20%',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute',
            width: 400, height: 400,
            background: 'radial-gradient(ellipse, rgba(167,139,250,0.06) 0%, transparent 70%)',
            top: '30%', right: '10%',
            pointerEvents: 'none',
          }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
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
                Why Baynix
              </div>
              <h2 style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                color: 'var(--text)',
              }}>
                Benefits that make a difference
              </h2>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1.25rem',
            }}>
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
                    position: 'relative',
                    overflow: 'hidden',
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
                  {/* Top glow line */}
                  <div style={{
                    position: 'absolute',
                    top: 0, left: '15%', right: '15%',
                    height: 1,
                    background: `linear-gradient(90deg, transparent, ${perk.color}66, transparent)`,
                  }} />

                  <div style={{
                    width: 48, height: 48,
                    borderRadius: 14,
                    background: `${perk.color}15`,
                    border: `1px solid ${perk.color}33`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.4rem',
                    marginBottom: '1.25rem',
                  }}>
                    {perk.icon}
                  </div>

                  <h3 style={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: 'var(--text)',
                    marginBottom: '0.6rem',
                    letterSpacing: '-0.02em',
                  }}>
                    {perk.title}
                  </h3>
                  <p style={{
                    fontSize: '0.875rem',
                    color: 'var(--text2)',
                    lineHeight: 1.75,
                    fontWeight: 300,
                  }}>
                    {perk.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section style={{
          padding: '5rem 2rem',
          borderBottom: '1px solid var(--border)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute',
            width: 600, height: 400,
            background: 'radial-gradient(ellipse, rgba(99,102,241,0.07) 0%, transparent 70%)',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
          }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
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
                Happy Team
              </div>
              <h2 style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                color: 'var(--text)',
                marginBottom: '0.5rem',
              }}>
                Don't take our word for it.
              </h2>
              <p style={{
                fontSize: '1rem',
                color: 'var(--text2)',
                fontWeight: 300,
              }}>
                See what our team members say about us.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1.25rem',
            }}>
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
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
                    display: 'flex',
                    flexDirection: 'column' as const,
                    gap: '1.25rem',
                  }}
                >
                  {/* Top glow line */}
                  <div style={{
                    position: 'absolute',
                    top: 0, left: '15%', right: '15%',
                    height: 1,
                    background: `linear-gradient(90deg, transparent, ${t.color}66, transparent)`,
                  }} />

                  {/* Quote mark */}
                  <div style={{
                    fontSize: '2.5rem',
                    lineHeight: 1,
                    color: `${t.color}44`,
                    fontFamily: 'Georgia, serif',
                    marginBottom: '-0.5rem',
                  }}>
                    "
                  </div>

                  <p style={{
                    fontSize: '0.875rem',
                    color: 'var(--text2)',
                    lineHeight: 1.75,
                    fontWeight: 300,
                    flex: 1,
                  }}>
                    {t.text}
                  </p>

                  {/* Author */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    paddingTop: '1rem',
                    borderTop: '1px solid rgba(255,255,255,0.06)',
                  }}>
                    {/* Avatar — replace with real image later */}
                    <div style={{
                      width: 40, height: 40,
                      borderRadius: '50%',
                      background: `linear-gradient(135deg, ${t.color}33, ${t.color}11)`,
                      border: `1px solid ${t.color}44`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.9rem',
                      fontWeight: 700,
                      color: t.color,
                      flexShrink: 0,
                    }}>
                      {t.initial}
                    </div>
                    <div>
                      <div style={{
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        color: 'var(--text)',
                      }}>
                        {t.name}
                      </div>
                      <div style={{
                        fontSize: '0.72rem',
                        color: 'var(--text3)',
                        fontWeight: 300,
                      }}>
                        {t.role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}