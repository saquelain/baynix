'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const stats = [
  { val: '70M+', label: 'Client Revenue' },
  { val: '72%', label: 'YoY Growth' },
  { val: '12', label: 'Years of Experience' },
  { val: '500+', label: 'Trusted Companies' },
]

const values = [
  {
    icon: '🎯',
    title: 'Our Mission',
    desc: 'Our goal is to give businesses of all kinds the tools they need to confidently and successfully reach their marketing goals. We use cutting-edge technology, creative strategies, and data-driven insights to create complete and personalized marketing solutions.',
  },
  {
    icon: '🔭',
    title: 'Our Vision',
    desc: 'To be the most trusted AI-powered communication platform globally — enabling every business, regardless of size, to deliver meaningful, intelligent conversations at scale.',
  },
  {
    icon: '💎',
    title: 'Our Values',
    desc: 'Excellence, integrity, and customer happiness are at our core. We believe in being committed to our clients, transparent in our work, and relentless in our pursuit of innovation.',
  },
]

const joinPoints = [
  'Explain the enquiry for efficient handling.',
  'Provide accurate info for communication.',
  'Choose preferred contact method.',
  'Ensuring smooth operations and quick issue resolution.',
]

export default function AboutPage() {
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
          padding: '6rem 2rem 4rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          borderBottom: '1px solid var(--border)',
        }}>
          {/* Aurora */}
          <div style={{
            position: 'absolute',
            width: 600, height: 400,
            background: 'radial-gradient(ellipse, rgba(99,102,241,0.1) 0%, transparent 70%)',
            top: '50%', left: '50%',
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
            Our Story
          </div>

          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.15,
            color: 'var(--text)',
            marginBottom: '1.5rem',
            position: 'relative',
            zIndex: 1,
            maxWidth: 700,
            margin: '0 auto 1.5rem',
          }}>
            How we advanced to become<br />
            <span style={{
              background: 'linear-gradient(135deg, #60a5fa, #a78bfa, #22d3ee)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              specialists in our field.
            </span>
          </h1>

          <p style={{
            fontSize: '1rem',
            color: 'var(--text2)',
            lineHeight: 1.8,
            fontWeight: 300,
            maxWidth: 680,
            margin: '0 auto 3rem',
            position: 'relative',
            zIndex: 1,
          }}>
            It's been a journey marked by hard work, new ideas, and a never-ending dedication to client success.
            From our small beginnings, we had a clear goal: to raise the benchmark for consulting excellence and
            give our customers real value. We saw every problem as a chance to get better, and to stay ahead of
            the curve, we were always changing our strategies and solutions.
          </p>

          {/* Stats */}
          <div style={{
            display: 'inline-grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '0',
            background: 'rgba(255,255,255,0.04)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 20,
            overflow: 'hidden',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08), 0 8px 32px rgba(0,0,0,0.3)',
            position: 'relative',
            zIndex: 1,
          }}>
            {stats.map((s, i) => (
              <div key={s.label} style={{
                padding: '2rem 2.5rem',
                textAlign: 'center',
                borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              }}>
                <div style={{
                  fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.03em',
                  background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '0.3rem',
                }}>
                  {s.val}
                </div>
                <div style={{
                  fontSize: '0.75rem',
                  color: 'var(--text3)',
                  textTransform: 'uppercase' as const,
                  letterSpacing: '0.08em',
                  fontWeight: 400,
                }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Mission / Vision / Values */}
        <section style={{
          padding: '5rem 2rem',
          borderBottom: '1px solid var(--border)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute',
            width: 400, height: 400,
            background: 'radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 70%)',
            top: '30%', right: '10%',
            pointerEvents: 'none',
          }} />

          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1.5rem',
            }}>
              {values.map((v) => (
                <div key={v.title} style={{
                  padding: '2rem',
                  background: 'rgba(255,255,255,0.03)',
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 20,
                  position: 'relative',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0, left: '15%', right: '15%',
                    height: 1,
                    background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.4), transparent)',
                  }} />
                  <div style={{
                    fontSize: '2rem',
                    marginBottom: '1rem',
                    filter: 'drop-shadow(0 0 8px rgba(99,102,241,0.4))',
                  }}>
                    {v.icon}
                  </div>
                  <h3 style={{
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: 'var(--text)',
                    marginBottom: '0.75rem',
                    letterSpacing: '-0.02em',
                  }}>
                    {v.title}
                  </h3>
                  <p style={{
                    fontSize: '0.875rem',
                    color: 'var(--text2)',
                    lineHeight: 1.75,
                    fontWeight: 300,
                  }}>
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Careers */}
        <section style={{
          padding: '5rem 2rem',
          borderBottom: '1px solid var(--border)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute',
            width: 500, height: 300,
            background: 'radial-gradient(ellipse, rgba(167,139,250,0.07) 0%, transparent 70%)',
            top: '50%', left: '30%',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
          }} />

          <div style={{
            maxWidth: 900,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center',
          }}>
            <div>
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
                Careers
              </div>
              <h2 style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.2,
                color: 'var(--text)',
                marginBottom: '1rem',
              }}>
                Doors of opportunity stand open, inviting you to step through.
              </h2>
              <p style={{
                fontSize: '0.9rem',
                color: 'var(--text2)',
                lineHeight: 1.8,
                fontWeight: 300,
                marginBottom: '2rem',
              }}>
                Joining the Baynix team means collaborating with industry leaders. We prioritize maintaining
                a solid core team composed of the most suitable individuals. Regardless of your location,
                if you're a perfect match for Baynix, there's an opportunity waiting for you!
              </p>
              <a href="/career" className="glass-btn glass-btn-primary">
                Want to Join →
              </a>
            </div>

            {/* Glass card with join points */}
            <div style={{
              padding: '2rem',
              background: 'rgba(255,255,255,0.03)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 20,
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute',
                top: 0, left: '15%', right: '15%',
                height: 1,
                background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.4), transparent)',
              }} />
              <p style={{
                fontSize: '0.75rem',
                textTransform: 'uppercase' as const,
                letterSpacing: '0.08em',
                color: 'var(--text3)',
                marginBottom: '1.25rem',
                fontWeight: 600,
              }}>
                How to apply
              </p>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '1rem' }}>
                {joinPoints.map((point, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                  }}>
                    <div style={{
                      width: 22, height: 22,
                      borderRadius: '50%',
                      background: 'rgba(99,102,241,0.15)',
                      border: '1px solid rgba(99,102,241,0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      color: '#a78bfa',
                      flexShrink: 0,
                      marginTop: 2,
                    }}>
                      {i + 1}
                    </div>
                    <span style={{
                      fontSize: '0.875rem',
                      color: 'var(--text2)',
                      lineHeight: 1.6,
                      fontWeight: 300,
                    }}>
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Trusting Partners */}
        <section style={{
        padding: '5rem 2rem',
        borderBottom: '1px solid var(--border)',
        position: 'relative',
        overflow: 'hidden',
        }}>
        <div style={{
            position: 'absolute',
            width: 500, height: 300,
            background: 'radial-gradient(ellipse, rgba(59,130,246,0.06) 0%, transparent 70%)',
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
                Our Trusting Partners
            </div>
            <h2 style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                color: 'var(--text)',
                marginBottom: '0.75rem',
            }}>
                Brands that trust Baynix
            </h2>
            <p style={{
                fontSize: '0.9rem',
                color: 'var(--text2)',
                fontWeight: 300,
                maxWidth: 480,
                margin: '0 auto',
                lineHeight: 1.7,
            }}>
                We're proud to work with some of India's most recognised companies across industries.
            </p>
            </div>

            {/* Marquee */}
        <div style={{
        position: 'relative',
        overflow: 'hidden',
        }}>
        {/* Left fade */}
        <div style={{
            position: 'absolute',
            top: 0, left: 0, bottom: 0,
            width: 120,
            background: 'linear-gradient(to right, var(--bg), transparent)',
            zIndex: 2,
            pointerEvents: 'none',
        }} />
        {/* Right fade */}
        <div style={{
            position: 'absolute',
            top: 0, right: 0, bottom: 0,
            width: 120,
            background: 'linear-gradient(to left, var(--bg), transparent)',
            zIndex: 2,
            pointerEvents: 'none',
        }} />

        {/* Track */}
        <div style={{
            display: 'flex',
            gap: '1.5rem',
            animation: 'ticker 30s linear infinite',
            width: 'max-content',
        }}>
            {[...Array(2)].map((_, repeat) => (
            <div key={repeat} style={{ display: 'flex', gap: '1.5rem' }}>
                {[
                { name: 'Hindware', file: 'hindware.png', color: '#3b82f6' },
                { name: 'Dream11', file: 'dream11.png', color: '#10b981' },
                { name: 'Mahindra', file: 'mahindra.png', color: '#6366f1' },
                { name: 'Junglee Pictures', file: 'junglee.png', color: '#f59e0b' },
                { name: 'Droom', file: 'droom.png', color: '#22d3ee' },
                { name: 'Godrej', file: 'godrej.png', color: '#a78bfa' },
                ].map((partner) => (
                <div
                    key={`${repeat}-${partner.name}`}
                    style={{
                        flexShrink: 0,
                        width: 160,
                        height: 70,
                        borderRadius: 12,
                        overflow: 'hidden',
                    }}
                    >
                    <img
                        src={`/images/${partner.file}`}
                        alt={partner.name}
                        style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'fill',
                        borderRadius: 12,
                        }}
                    />
                </div>
                ))}
            </div>
            ))}
        </div>
        </div>
        </div>
        </section>

        {/* CTA */}
        <section style={{
          padding: '5rem 2rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute',
            width: 600, height: 300,
            background: 'radial-gradient(ellipse, rgba(59,130,246,0.08) 0%, transparent 70%)',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
          }} />

          <div style={{
            maxWidth: 600,
            margin: '0 auto',
            padding: '3rem',
            background: 'rgba(255,255,255,0.03)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 24,
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06), 0 24px 60px rgba(0,0,0,0.3)',
            position: 'relative',
            zIndex: 1,
          }}>
            <div style={{
              position: 'absolute',
              top: 0, left: '20%', right: '20%',
              height: 1,
              background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.5), transparent)',
            }} />

            <h2 style={{
              fontSize: 'clamp(1.4rem, 3vw, 2rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: 'var(--text)',
              marginBottom: '0.75rem',
            }}>
              Quickly boost delivery rates!
            </h2>
            <p style={{
              fontSize: '0.9rem',
              color: 'var(--text2)',
              fontWeight: 300,
              marginBottom: '2rem',
              lineHeight: 1.7,
            }}>
              Are you excited to try? Join the waiting list and get started with Baynix today.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' as const }}>
              <a href="https://app.baynix.ai" className="glass-btn glass-btn-primary">
                Get Started With Baynix →
              </a>
              <a href="/contact" className="glass-btn glass-btn-secondary">
                Contact Us
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}