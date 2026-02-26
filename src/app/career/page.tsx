'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'

const stats = [
  {
    val: '3,589+',
    label: 'Problems Solved',
    desc: 'Our dedicated team of over 1400 software experts ensures each project is handled with precision and expertise.',
    illustration: '/images/problems-solved.svg',
    color: '#3b82f6',
  },
  {
    val: '9,200',
    label: 'Projects Complete',
    desc: 'With a vast array of successful projects, our team has tackled diverse challenges across industries.',
    illustration: '/images/projects-complete.svg',
    color: '#6366f1',
  },
  {
    val: '7,896',
    label: 'Deadlines Met',
    desc: 'All projects are delivered within agreed-upon deadlines, with most completed ahead of schedule.',
    illustration: '/images/deadlines-met.svg',
    color: '#22d3ee',
  },
]

const jobs = [
  {
    title: 'Senior Graphic Designer',
    location: 'Noida',
    posted: '1 day ago',
    salary: '₹52,000 – ₹68,000',
    exp: '3+ years',
    color: '#3b82f6',
    tag: 'Design',
  },
  {
    title: 'Customer Support Representative',
    location: 'Noida',
    posted: '30 min ago',
    salary: '₹15,000 – ₹20,000',
    exp: '1+ years',
    color: '#10b981',
    tag: 'Support',
  },
  {
    title: 'Content Writer',
    location: 'Noida',
    posted: '30 min ago',
    salary: '₹22,000 – ₹28,000',
    exp: '2+ years',
    color: '#f59e0b',
    tag: 'Content',
  },
  {
    title: 'Sales Executive',
    location: 'Noida',
    posted: '30 min ago',
    salary: '₹52,000 – ₹68,000',
    exp: '3+ years',
    color: '#ec4899',
    tag: 'Sales',
  },
  {
    title: 'Data Analyst',
    location: 'Noida',
    posted: '30 min ago',
    salary: '₹52,000 – ₹68,000',
    exp: '3+ years',
    color: '#22d3ee',
    tag: 'Analytics',
  },
  {
    title: 'Project Manager',
    location: 'Noida',
    posted: '30 min ago',
    salary: '₹52,000 – ₹68,000',
    exp: '3+ years',
    color: '#a78bfa',
    tag: 'Management',
  },
]

export default function CareerPage() {
  return (
    <>
      <Navbar />
      <main style={{
        background: 'var(--bg)',
        minHeight: '100vh',
        paddingTop: 64,
        color: 'var(--text)',
      }}>

        {/* Hero with image */}
        <section style={{
          position: 'relative',
          overflow: 'hidden',
          borderBottom: '1px solid var(--border)',
          minHeight: 500,
          display: 'flex',
          alignItems: 'center',
        }}>
          {/* Background image */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(59,130,246,0.1), rgba(34,211,238,0.08))',
            zIndex: 0,
          }}>
            {/* Uncomment when you have the image: */}
            <Image src="/images/career-hero.jpg" alt="Career at Baynix" fill style={{ objectFit: 'cover', opacity: 2 }} />
           
          </div>

          {/* Dark overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(4,5,10,0.95) 40%, rgba(4,5,10,0.6) 100%)',
            zIndex: 1,
          }} />

          {/* Aurora */}
          <div style={{
            position: 'absolute',
            width: 600, height: 600,
            background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)',
            top: '50%', left: '30%',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
            zIndex: 1,
          }} />

          <div style={{
            maxWidth: 1100,
            margin: '0 auto',
            padding: '6rem 2rem',
            position: 'relative',
            zIndex: 2,
            width: '100%',
          }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.75rem',
              textTransform: 'uppercase' as const,
              letterSpacing: '0.12em',
              color: 'var(--accent)',
              marginBottom: '1.25rem',
            }}>
              <span style={{ width: 18, height: 1, background: 'var(--accent)', display: 'inline-block' }} />
              Careers at Baynix
            </div>

            <h1 style={{
              fontSize: 'clamp(2.2rem, 5vw, 4rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              color: 'var(--text)',
              marginBottom: '1rem',
              maxWidth: 600,
            }}>
              Work with us.
            </h1>

            <p style={{
              fontSize: '1.1rem',
              color: 'var(--text2)',
              fontWeight: 300,
              maxWidth: 500,
              lineHeight: 1.7,
              marginBottom: '2rem',
            }}>
              Every employee gets a competitive package and relocation allowance.
            </p>

            <a href="#positions" className="glass-btn glass-btn-primary">
              View Open Positions →
            </a>
          </div>
        </section>

        {/* About section */}
        <section style={{
        padding: '5rem 2rem',
        borderBottom: '1px solid var(--border)',
        position: 'relative',
        overflow: 'hidden',
        }}>
        <div style={{
            position: 'absolute',
            width: 500, height: 300,
            background: 'radial-gradient(ellipse, rgba(59,130,246,0.07) 0%, transparent 70%)',
            top: '50%', right: '10%',
            pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>

            {/* Header — centered */}
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
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
                Why Join Us
            </div>
            <h2 style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.15,
                color: 'var(--text)',
                marginBottom: '0.75rem',
            }}>
                Unlock Your Future with Us
            </h2>
            <p style={{
                fontSize: '1rem',
                fontWeight: 400,
                color: 'var(--accent)',
                marginBottom: '1rem',
                fontStyle: 'italic',
            }}>
                Discover Opportunities, Grow Your Skills, and Achieve Your Dreams
            </p>
            <p style={{
                fontSize: '0.95rem',
                color: 'var(--text2)',
                lineHeight: 1.8,
                fontWeight: 300,
                maxWidth: 700,
                margin: '0 auto',
            }}>
                At Baynix, we believe in nurturing talent and fostering growth. Our dynamic and
                inclusive work environment offers endless opportunities for personal and professional
                development. Whether you're just starting your career or looking to advance to the
                next level, we provide the resources and support you need to succeed.
            </p>
            </div>

            {/* Stats — 3 large cards */}
            <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
            }}>
            {stats.map((stat) => (
                <div
                key={stat.label}
                style={{
                    padding: '2.5rem 2rem',
                    background: 'rgba(255,255,255,0.03)',
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 24,
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
                    display: 'flex',
                    flexDirection: 'column' as const,
                    alignItems: 'center',
                    textAlign: 'center' as const,
                    gap: '1.5rem',
                    transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                    e.currentTarget.style.border = `1px solid ${stat.color}33`
                    e.currentTarget.style.transform = 'translateY(-4px)'
                    e.currentTarget.style.boxShadow = `inset 0 1px 0 rgba(255,255,255,0.1), 0 20px 60px rgba(0,0,0,0.3), 0 0 40px ${stat.color}11`
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
                    height: 2,
                    background: `linear-gradient(90deg, transparent, ${stat.color}, transparent)`,
                    borderRadius: 2,
                }} />

                {/* Corner glow */}
                <div style={{
                    position: 'absolute',
                    top: -40, right: -40,
                    width: 160, height: 160,
                    background: `radial-gradient(circle, ${stat.color}15 0%, transparent 70%)`,
                    pointerEvents: 'none',
                }} />

                {/* Illustration — large */}
                <div style={{
                    width: 160,
                    height: 160,
                    borderRadius: 20,
                    background: `linear-gradient(135deg, ${stat.color}15, ${stat.color}08)`,
                    border: `1px solid ${stat.color}22`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '5rem',
                    position: 'relative',
                    zIndex: 1,
                    boxShadow: `0 0 40px ${stat.color}15`,
                }}>
                    {/* {stat.label === 'Problems Solved' ? '🧩' : stat.label === 'Projects Complete' ? '✅' : '⏱️'} */}
                    {/* Replace emoji with illustration: */}
                    <Image src={stat.illustration} alt={stat.label} width={120} height={120} style={{ objectFit: 'contain' }} />
                   
                </div>

                {/* Stat number */}
                <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{
                    fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                    fontWeight: 800,
                    letterSpacing: '-0.04em',
                    color: stat.color,
                    lineHeight: 1,
                    marginBottom: '0.4rem',
                    filter: `drop-shadow(0 0 16px ${stat.color}66)`,
                    }}>
                    {stat.val}
                    </div>
                    <div style={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: 'var(--text)',
                    marginBottom: '0.5rem',
                    }}>
                    {stat.label}
                    </div>
                    <div style={{
                    fontSize: '0.82rem',
                    color: 'var(--text3)',
                    fontWeight: 300,
                    lineHeight: 1.6,
                    }}>
                    {stat.desc}
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>

        {/* Job Positions */}
        <section id="positions" style={{
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

          <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ marginBottom: '2.5rem' }}>
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
                Job Positions
              </div>
              <h2 style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                color: 'var(--text)',
                marginBottom: '0.5rem',
              }}>
                We're always searching for amazing people.
              </h2>
              <p style={{
                fontSize: '0.9rem',
                color: 'var(--text2)',
                fontWeight: 300,
              }}>
                Take a look at our current openings.
              </p>
            </div>

            {/* Job cards */}
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '1rem' }}>
              {jobs.map((job) => (
                <div
                  key={job.title}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1.5rem 2rem',
                    background: 'rgba(255,255,255,0.03)',
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 16,
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
                    gap: '1rem',
                    flexWrap: 'wrap' as const,
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                    e.currentTarget.style.border = `1px solid ${job.color}33`
                    e.currentTarget.style.transform = 'translateX(4px)'
                    e.currentTarget.style.boxShadow = `inset 0 1px 0 rgba(255,255,255,0.1), 0 8px 32px rgba(0,0,0,0.3)`
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                    e.currentTarget.style.border = '1px solid rgba(255,255,255,0.08)'
                    e.currentTarget.style.transform = 'translateX(0)'
                    e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.06)'
                  }}
                >
                  {/* Left accent bar */}
                  <div style={{
                    position: 'absolute',
                    left: 0, top: '20%', bottom: '20%',
                    width: 3,
                    background: job.color,
                    borderRadius: 2,
                    opacity: 0.7,
                  }} />

                  {/* Job info */}
                  <div style={{ flex: 1, minWidth: 200 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem', flexWrap: 'wrap' as const }}>
                      <h3 style={{
                        fontSize: '1rem',
                        fontWeight: 700,
                        color: 'var(--text)',
                        letterSpacing: '-0.01em',
                      }}>
                        {job.title}
                      </h3>
                      <span style={{
                        padding: '0.15rem 0.6rem',
                        background: `${job.color}18`,
                        border: `1px solid ${job.color}33`,
                        borderRadius: 100,
                        fontSize: '0.65rem',
                        fontWeight: 600,
                        color: job.color,
                        textTransform: 'uppercase' as const,
                        letterSpacing: '0.06em',
                      }}>
                        {job.tag}
                      </span>
                    </div>

                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      flexWrap: 'wrap' as const,
                    }}>
                      {[
                        { icon: '📍', text: job.location },
                        { icon: '🕒', text: job.posted },
                        { icon: '💰', text: job.salary },
                        { icon: '⭐', text: job.exp },
                      ].map((item) => (
                        <span key={item.text} style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.3rem',
                          fontSize: '0.78rem',
                          color: 'var(--text3)',
                          fontWeight: 300,
                        }}>
                          <span style={{ fontSize: '0.7rem' }}>{item.icon}</span>
                          {item.text}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Apply button */}
                  <a
                    href={`/career/${job.title.toLowerCase().replace(/ /g, '-')}`}
                    className="glass-btn glass-btn-primary"
                    style={{ fontSize: '0.82rem', padding: '0.5rem 1.25rem', flexShrink: 0 }}
                  >
                    Apply Now →
                  </a>
                </div>
              ))}
            </div>

            {/* Can't find section */}
            <div style={{
              marginTop: '2rem',
              padding: '2rem',
              background: 'rgba(255,255,255,0.03)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 16,
              textAlign: 'center',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute',
                top: 0, left: '20%', right: '20%',
                height: 1,
                background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.4), transparent)',
              }} />
              <p style={{
                fontSize: '0.9rem',
                color: 'var(--text2)',
                fontWeight: 300,
                lineHeight: 1.7,
              }}>
                Can't find the job you want?{' '}
                <a
                  href="mailto:hr@baynix.ai"
                  style={{
                    color: 'var(--accent)',
                    textDecoration: 'none',
                    fontWeight: 500,
                  }}
                >
                  Send your resume to hr@baynix.ai
                </a>
                {' '}and we'll contact you when a new position opens.
              </p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}