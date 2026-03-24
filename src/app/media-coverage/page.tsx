'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

type Category = 'All' | 'Product Launch' | 'Technology' | 'Business'

const articles = [
  {
    publication: 'IT Brief India',
    emoji: '🚀',
    logo: '/images/media/logos/it-brief-india.png',
    image: '/images/media/it-brief-india.png',
    invert: false,
    title: 'Azmarq Technovation Launches Baynix AI in Dubai to Boost AI Messaging',
    excerpt: 'Azmarq Technovation officially launches Baynix AI in Dubai, positioning the platform as a next-generation AI-powered messaging solution for businesses across the Middle East.',
    category: 'Product Launch' as Category,
    href: 'https://itbrief.in/story/azmarq-technovation-launches-baynix-ai-in-dubai-to-boost-ai-messaging',
  },
  {
    publication: 'Campaign Middle East',
    emoji: '🌍',
    logo: '/images/media/logos/campaign-middle-east.png',
    image: '/images/media/campaign-middle-east.png',
    invert: true,
    title: 'Azmarq Launches Baynix AI in Dubai to Help Clients Improve Customer Engagement',
    excerpt: 'Campaign Middle East covers Baynix AI\'s entry into the Dubai market, highlighting how the platform empowers brands with smarter, AI-driven customer communication tools.',
    category: 'Product Launch' as Category,
    href: 'https://campaignme.com/azmarq-launches-baynix-ai-in-dubai-to-help-clients-improve-customer-engagement/',
  },
  {
    publication: 'Express Computer',
    emoji: '💻',
    logo: '/images/media/logos/express-computer.png',
    image: '/images/media/express-computer.png',
    invert: false,
    title: 'How End-to-End Encryption, OTP Verification and AI-Driven Spam Detection Prevent Fraud',
    excerpt: 'A deep dive into how modern security layers — including E2E encryption, OTP verification, and AI-powered spam filters — are redefining fraud prevention in digital messaging.',
    category: 'Technology' as Category,
    href: 'https://www.expresscomputer.in/news/how-end-to-end-encryption-otp-verification-and-ai-driven-spam-detection-prevent-fraud/125217/',
  },
  {
    publication: 'MediaNews4U',
    emoji: '📡',
    logo: '/images/media/logos/medianews4u.png',
    image: '/images/media/medianews4u.png',
    invert: false,
    title: 'Businesses Increasingly Adopt RCS for Rich Media Messaging with Interactive Features',
    excerpt: 'Imteyaz Ansari of Azmarq Technovation discusses the rapid rise of RCS messaging adoption among enterprises, enabling richer customer interactions with buttons, photos, and payments.',
    category: 'Technology' as Category,
    href: 'https://www.medianews4u.com/businesses-increasingly-adopt-rcs-for-rich-media-messaging-with-interactive-features-like-buttons-photos-and-payments-imteyaz-ansari-azmarq-technovation/',
  },
  {
    publication: 'Indian Express',
    emoji: '🗞️',
    logo: '/images/media/logos/indian-express.png',
    image: '/images/media/indian-express.png',
    invert: true,
    title: 'The Unsubscribe Button Trap: Why Your Inbox Declutter Could Be a Cyberattack',
    excerpt: 'Indian Express explores the growing cybersecurity risk lurking inside email unsubscribe links — and what businesses and users should know to stay protected.',
    category: 'Technology' as Category,
    href: 'https://indianexpress.com/article/technology/the-unsubscribe-button-trap-why-your-inbox-declutter-could-be-a-cyberattack-10106102/',
  },
  {
    publication: 'YourStory',
    emoji: '📰',
    logo: '/images/media/logos/yourstory.png',
    image: '/images/media/yourstory.png',
    invert: true,
    title: 'Azmarq Helps Businesses with Omnichannel Communication',
    excerpt: 'YourStory features how Azmarq is enabling businesses of all sizes to unify their customer communication across SMS, WhatsApp, RCS, Voice, and Email from a single platform.',
    category: 'Business' as Category,
    href: 'https://yourstory.com/2025/07/azmarq-helps-businesses-with-omnichannel-communication',
  },
  {
    publication: 'Times Now News',
    emoji: '📊',
    logo: '/images/media/logos/times-now-news.svg',
    image: '/images/media/times-now-news.png',
    invert: false,
    title: 'How AI Chatbots Are Ushering a New Era of Financial Inclusion & Literacy Through Messaging',
    excerpt: 'Times Now explores how conversational AI chatbots are breaking barriers in financial access — helping millions understand banking, credit, and investment through simple messaging.',
    category: 'Business' as Category,
    href: 'https://www.timesnownews.com/business-economy/industry/how-ai-chatbots-are-ushering-a-new-era-of-financial-inclusion-literacy-through-messaging-article-152237433',
  },
  {
    publication: 'TechGraph',
    emoji: '⚡',
    logo: '/images/media/logos/techgraph.png',
    image: '/images/media/techgraph.png',
    invert: true,
    title: 'Scaling Indian CPaaS: Azmarq\'s Imteyaz Ansari on Business Communication',
    excerpt: 'TechGraph sits down with Imteyaz Ansari to discuss Azmarq\'s journey in building a world-class CPaaS platform, the growth of India\'s communication tech sector, and what\'s next.',
    category: 'Business' as Category,
    href: 'https://techgraph.co/tech/scaling-indian-cpaas-azmarq-imteyaz-ansari-on-business-communication/',
  },
]

const categories: Category[] = ['All', 'Product Launch', 'Technology', 'Business']

const categoryAccent: Record<Category, { color: string; bg: string; border: string; glow: string }> = {
  All:             { color: '#a78bfa', bg: 'rgba(167,139,250,0.12)', border: 'rgba(167,139,250,0.25)', glow: 'rgba(167,139,250,0.4)' },
  'Product Launch':{ color: '#3b82f6', bg: 'rgba(59,130,246,0.12)',  border: 'rgba(59,130,246,0.25)',  glow: 'rgba(59,130,246,0.4)'  },
  Technology:      { color: '#22d3ee', bg: 'rgba(34,211,238,0.12)',  border: 'rgba(34,211,238,0.25)',  glow: 'rgba(34,211,238,0.4)'  },
  Business:        { color: '#10b981', bg: 'rgba(16,185,129,0.12)',  border: 'rgba(16,185,129,0.25)',  glow: 'rgba(16,185,129,0.4)'  },
}

export default function MediaCoveragePage() {
  const [active, setActive] = useState<Category>('All')

  const filtered = active === 'All' ? articles : articles.filter(a => a.category === active)

  return (
    <>
      <Navbar />

      <main style={{ background: 'var(--bg)', minHeight: '100vh' }}>

        {/* ── Hero ── */}
        <section style={{
          padding: '6rem 2rem 4rem',
          paddingTop: 'calc(64px + 5rem)',
          position: 'relative',
          overflow: 'hidden',
          borderBottom: '1px solid var(--border)',
        }}>
          {/* Aurora blobs */}
          <div style={{
            position: 'absolute', top: '-80px', left: '50%',
            transform: 'translateX(-50%)',
            width: 700, height: 400,
            background: 'radial-gradient(ellipse, rgba(99,102,241,0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', top: '40px', right: '10%',
            width: 300, height: 300,
            background: 'radial-gradient(ellipse, rgba(34,211,238,0.07) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
            {/* Eyebrow */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.35rem 1rem',
              background: 'rgba(99,102,241,0.1)',
              border: '1px solid rgba(99,102,241,0.2)',
              borderRadius: 100,
              fontSize: '0.75rem',
              fontWeight: 600,
              color: '#a78bfa',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
            }}>
              <span>📰</span> Press &amp; Media
            </div>

            <h1 style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
              fontWeight: 800,
              color: 'var(--text)',
              lineHeight: 1.15,
              marginBottom: '1.25rem',
              letterSpacing: '-0.02em',
            }}>
              Baynix in the{' '}
              <span style={{
                background: 'linear-gradient(135deg, #6366f1, #22d3ee)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                News
              </span>
            </h1>

            <p style={{
              fontSize: '1.1rem',
              color: 'var(--text2)',
              maxWidth: 560,
              margin: '0 auto 2.5rem',
              lineHeight: 1.7,
              fontWeight: 400,
            }}>
              Our journey — from scaling Indian CPaaS to launching in Dubai — as covered by leading publications across technology, business, and media.
            </p>

            {/* Stats row */}
            <div style={{
              display: 'flex',
              gap: '2rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}>
              {[
                { value: '8+', label: 'Publications' },
                { value: '3', label: 'Countries' },
                { value: '2025', label: 'Latest Coverage' },
              ].map(({ value, label }) => (
                <div key={label} style={{
                  padding: '0.75rem 1.5rem',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid var(--border)',
                  borderRadius: 12,
                  textAlign: 'center',
                }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text)', lineHeight: 1 }}>{value}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text3)', marginTop: '0.25rem', fontWeight: 500 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Filter + Cards ── */}
        <section style={{ padding: '4rem 2rem 5rem' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>

            {/* Filter tabs */}
            <div style={{
              display: 'flex',
              gap: '0.5rem',
              flexWrap: 'wrap',
              marginBottom: '2.5rem',
            }}>
              {categories.map(cat => {
                const isActive = active === cat
                const accent = categoryAccent[cat]
                return (
                  <button
                    key={cat}
                    onClick={() => setActive(cat)}
                    style={{
                      padding: '0.5rem 1.25rem',
                      borderRadius: 100,
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      fontFamily: 'inherit',
                      background: isActive ? accent.bg : 'rgba(255,255,255,0.03)',
                      border: `1px solid ${isActive ? accent.border : 'var(--border)'}`,
                      color: isActive ? accent.color : 'var(--text3)',
                      boxShadow: isActive ? `0 0 16px ${accent.glow}` : 'none',
                    }}
                  >
                    {cat === 'All' && '✦ '}
                    {cat === 'Product Launch' && '🚀 '}
                    {cat === 'Technology' && '💻 '}
                    {cat === 'Business' && '📈 '}
                    {cat}
                  </button>
                )
              })}
            </div>

            {/* Article cards grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(480px, 1fr))',
              gap: '1.25rem',
            }}
            className="media-grid"
            >
              {filtered.map((article, i) => {
                const accent = categoryAccent[article.category]
                return (
                  <a
                    key={i}
                    href={article.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      padding: '1.75rem',
                      background: 'rgba(255,255,255,0.03)',
                      backdropFilter: 'blur(24px)',
                      WebkitBackdropFilter: 'blur(24px)',
                      border: '1px solid rgba(255,255,255,0.07)',
                      borderRadius: 20,
                      boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05), 0 8px 32px rgba(0,0,0,0.2)',
                      textDecoration: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.25s ease',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget
                      el.style.transform = 'translateY(-4px)'
                      el.style.border = `1px solid ${accent.border}`
                      el.style.boxShadow = `inset 0 1px 0 rgba(255,255,255,0.07), 0 20px 50px rgba(0,0,0,0.3), 0 0 30px ${accent.glow.replace('0.4', '0.12')}`
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget
                      el.style.transform = 'translateY(0)'
                      el.style.border = '1px solid rgba(255,255,255,0.07)'
                      el.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.05), 0 8px 32px rgba(0,0,0,0.2)'
                    }}
                  >
                    {/* Top glow line */}
                    <div style={{
                      position: 'absolute',
                      top: 0, left: '15%', right: '15%',
                      height: 1,
                      background: `linear-gradient(90deg, transparent, ${accent.glow}, transparent)`,
                    }} />

                    {/* Left accent bar */}
                    <div style={{
                      position: 'absolute',
                      left: 0, top: '20%', bottom: '20%',
                      width: 3,
                      borderRadius: '0 3px 3px 0',
                      background: `linear-gradient(180deg, transparent, ${accent.color}, transparent)`,
                    }} />

                    {/* Article image */}
                    <div style={{
                      width: '100%',
                      height: 180,
                      borderRadius: 12,
                      overflow: 'hidden',
                      marginBottom: '1.25rem',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.07)',
                      flexShrink: 0,
                    }}>
                      <img
                        src={article.image}
                        alt={article.publication}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block',
                        }}
                      />
                    </div>

                    {/* Header row: publication badge + category tag */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1rem',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                      }}>
                        <span style={{
                            height: 32,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                          <img
                            src={article.logo}
                            alt={article.publication}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'contain',
                              filter: article.invert ? 'invert(1)' : 'none',
                            }}
                          />
                        </span>
                      </div>

                      <span style={{
                        padding: '0.2rem 0.65rem',
                        borderRadius: 100,
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        background: accent.bg,
                        border: `1px solid ${accent.border}`,
                        color: accent.color,
                        letterSpacing: '0.04em',
                      }}>
                        {article.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 style={{
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: 'var(--text)',
                      lineHeight: 1.45,
                      marginBottom: '0.75rem',
                      flex: 1,
                    }}>
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p style={{
                      fontSize: '0.85rem',
                      color: 'var(--text3)',
                      lineHeight: 1.65,
                      marginBottom: '1.25rem',
                      flex: 1,
                    }}>
                      {article.excerpt}
                    </p>

                    {/* Read more row */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      color: accent.color,
                      marginTop: 'auto',
                    }}>
                      Read Article
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </a>
                )
              })}
            </div>

            {/* Empty state */}
            {filtered.length === 0 && (
              <div style={{ textAlign: 'center', padding: '4rem 2rem', color: 'var(--text3)' }}>
                No articles in this category yet.
              </div>
            )}
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{
          padding: '4rem 2rem 5rem',
          borderTop: '1px solid var(--border)',
        }}>
          <div style={{
            maxWidth: 700,
            margin: '0 auto',
            textAlign: 'center',
            padding: '3rem 2.5rem',
            background: 'rgba(255,255,255,0.03)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 24,
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06), 0 24px 60px rgba(0,0,0,0.3)',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute',
              top: 0, left: '20%', right: '20%',
              height: 1,
              background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.5), transparent)',
            }} />
            <div style={{
              position: 'absolute',
              top: '-60px', left: '50%', transform: 'translateX(-50%)',
              width: 400, height: 200,
              background: 'radial-gradient(ellipse, rgba(99,102,241,0.1) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />

            <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>✉️</div>
            <h2 style={{
              fontSize: '1.6rem',
              fontWeight: 800,
              color: 'var(--text)',
              marginBottom: '0.75rem',
              letterSpacing: '-0.02em',
            }}>
              Want to Feature Baynix?
            </h2>
            <p style={{
              fontSize: '0.95rem',
              color: 'var(--text2)',
              lineHeight: 1.7,
              marginBottom: '1.75rem',
              maxWidth: 440,
              margin: '0 auto 1.75rem',
            }}>
              We welcome press inquiries, interviews, and collaboration opportunities. Reach out to our team for media kits, quotes, and more.
            </p>
            <a
              href="mailto:hello@baynix.ai"
              className="glass-btn glass-btn-primary"
            >
              Contact Our PR Team
            </a>
          </div>
        </section>

      </main>

      <Footer />

      <style>{`
        @media (max-width: 600px) {
          .media-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  )
}
