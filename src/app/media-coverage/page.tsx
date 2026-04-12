'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Newspaper, Rocket, Laptop, TrendingUp, Mail } from 'lucide-react'

type Category = 'All' | 'Product Launch' | 'Technology' | 'Business' | 'Partnership' | 'Other'

interface NewsArticle {
  _id: string
  title: string
  summary: string
  source: string
  sourceUrl: string
  logoUrl: string
  coverImage: string
  category: Category
  publishedAt: string
}

interface Pagination {
  total: number
  page: number
  limit: number
  pages: number
}

const ITEMS_PER_PAGE = 6

const categories: Category[] = ['All', 'Product Launch', 'Technology', 'Business', 'Partnership', 'Other']

const categoryAccent: Record<Category, { color: string; bg: string; border: string; glow: string }> = {
  All:              { color: '#a78bfa', bg: 'rgba(167,139,250,0.12)', border: 'rgba(167,139,250,0.25)', glow: 'rgba(167,139,250,0.4)' },
  'Product Launch': { color: '#3b82f6', bg: 'rgba(59,130,246,0.12)',  border: 'rgba(59,130,246,0.25)',  glow: 'rgba(59,130,246,0.4)'  },
  Technology:       { color: '#22d3ee', bg: 'rgba(34,211,238,0.12)',  border: 'rgba(34,211,238,0.25)',  glow: 'rgba(34,211,238,0.4)'  },
  Business:         { color: '#10b981', bg: 'rgba(16,185,129,0.12)',  border: 'rgba(16,185,129,0.25)',  glow: 'rgba(16,185,129,0.4)'  },
  Partnership:      { color: '#f59e0b', bg: 'rgba(245,158,11,0.12)',  border: 'rgba(245,158,11,0.25)',  glow: 'rgba(245,158,11,0.4)'  },
  Other:            { color: '#94a3b8', bg: 'rgba(148,163,184,0.12)', border: 'rgba(148,163,184,0.25)', glow: 'rgba(148,163,184,0.4)' },
}

const inputStyle = {
  padding: '0.5rem 1.25rem',
  borderRadius: 100,
  fontSize: '0.85rem',
  fontWeight: 600,
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  fontFamily: 'inherit',
} as const

export default function MediaCoveragePage() {
  const [active, setActive] = useState<Category>('All')
  const [page, setPage] = useState(1)
  const [articles, setArticles] = useState<NewsArticle[]>([])
  const [pagination, setPagination] = useState<Pagination | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true)
      setError(false)
      try {
        const params = new URLSearchParams({
          page: String(page),
          limit: String(ITEMS_PER_PAGE),
        })
        if (active !== 'All') params.set('category', active)

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/news?${params}`)
        if (!res.ok) throw new Error()
        const json = await res.json()
        setArticles(json.data)
        setPagination(json.pagination)
      } catch {
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchNews()
  }, [active, page])

  const handleCategory = (cat: Category) => {
    setActive(cat)
    setPage(1)
  }

  const totalPages = pagination?.pages ?? 0

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
              <Newspaper size={14} style={{ display: 'inline', verticalAlign: 'middle' }} /> Press &amp; Media
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

            <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
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
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              {categories.map(cat => {
                const isActive = active === cat
                const accent = categoryAccent[cat]
                return (
                  <button
                    key={cat}
                    onClick={() => handleCategory(cat)}
                    style={{
                      ...inputStyle,
                      background: isActive ? accent.bg : 'rgba(255,255,255,0.03)',
                      border: `1px solid ${isActive ? accent.border : 'var(--border)'}`,
                      color: isActive ? accent.color : 'var(--text3)',
                      boxShadow: isActive ? `0 0 16px ${accent.glow}` : 'none',
                    }}
                  >
                    {cat === 'All' && '✦ '}
                    {cat === 'Product Launch' && <Rocket size={13} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '0.3rem' }} />}
                    {cat === 'Technology' && <Laptop size={13} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '0.3rem' }} />}
                    {cat === 'Business' && <TrendingUp size={13} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '0.3rem' }} />}
                    {cat}
                  </button>
                )
              })}
            </div>

            {/* Loading skeleton */}
            {loading && (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(480px, 1fr))',
                gap: '1.25rem',
              }}
              className="media-grid"
              >
                {Array.from({ length: ITEMS_PER_PAGE }).map((_, i) => (
                  <div key={i} style={{
                    height: 380,
                    borderRadius: 20,
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    animation: 'pulse 1.5s ease-in-out infinite',
                  }} />
                ))}
              </div>
            )}

            {/* Error state */}
            {!loading && error && (
              <div style={{ textAlign: 'center', padding: '4rem 2rem', color: 'var(--text3)' }}>
                Failed to load articles. Please try again later.
              </div>
            )}

            {/* Article cards grid */}
            {!loading && !error && (
              <>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(480px, 1fr))',
                  gap: '1.25rem',
                }}
                className="media-grid"
                >
                  {articles.map((article) => {
                    const accent = categoryAccent[article.category] ?? categoryAccent.Other
                    return (
                      <a
                        key={article._id}
                        href={article.sourceUrl}
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
                        {article.coverImage && (
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
                              src={article.coverImage}
                              alt={article.source}
                              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                            />
                          </div>
                        )}

                        {/* Header row: logo + category tag */}
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          marginBottom: '1rem',
                          flexWrap: 'wrap',
                          gap: '0.5rem',
                        }}>
                          {article.logoUrl && (
                            <span style={{ height: 32, display: 'flex', alignItems: 'center' }}>
                              <img
                                src={article.logoUrl}
                                alt={article.source}
                                style={{ height: '100%', width: 'auto', objectFit: 'contain' }}
                              />
                            </span>
                          )}

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
                          {article.summary}
                        </p>

                        {/* Read more */}
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

                {/* Pagination */}
                {totalPages > 1 && (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    marginTop: '2.5rem',
                    flexWrap: 'wrap',
                  }}>
                    <button
                      onClick={() => setPage(p => Math.max(1, p - 1))}
                      disabled={page === 1}
                      style={{
                        padding: '0.5rem 1rem',
                        borderRadius: 10,
                        border: '1px solid var(--border)',
                        background: 'rgba(255,255,255,0.03)',
                        color: page === 1 ? 'var(--text3)' : 'var(--text)',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        cursor: page === 1 ? 'not-allowed' : 'pointer',
                        fontFamily: 'inherit',
                        opacity: page === 1 ? 0.4 : 1,
                        transition: 'all 0.2s ease',
                      }}
                    >
                      ← Prev
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
                      <button
                        key={n}
                        onClick={() => setPage(n)}
                        style={{
                          width: 38,
                          height: 38,
                          borderRadius: 10,
                          border: `1px solid ${n === page ? 'rgba(99,102,241,0.4)' : 'var(--border)'}`,
                          background: n === page ? 'rgba(99,102,241,0.15)' : 'rgba(255,255,255,0.03)',
                          color: n === page ? '#a78bfa' : 'var(--text3)',
                          fontSize: '0.85rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                          fontFamily: 'inherit',
                          boxShadow: n === page ? '0 0 14px rgba(99,102,241,0.25)' : 'none',
                          transition: 'all 0.2s ease',
                        }}
                      >
                        {n}
                      </button>
                    ))}

                    <button
                      onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                      disabled={page === totalPages}
                      style={{
                        padding: '0.5rem 1rem',
                        borderRadius: 10,
                        border: '1px solid var(--border)',
                        background: 'rgba(255,255,255,0.03)',
                        color: page === totalPages ? 'var(--text3)' : 'var(--text)',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        cursor: page === totalPages ? 'not-allowed' : 'pointer',
                        fontFamily: 'inherit',
                        opacity: page === totalPages ? 0.4 : 1,
                        transition: 'all 0.2s ease',
                      }}
                    >
                      Next →
                    </button>
                  </div>
                )}

                {/* Empty state */}
                {articles.length === 0 && (
                  <div style={{ textAlign: 'center', padding: '4rem 2rem', color: 'var(--text3)' }}>
                    No articles in this category yet.
                  </div>
                )}
              </>
            )}
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ padding: '4rem 2rem 5rem', borderTop: '1px solid var(--border)' }}>
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

            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.75rem' }}>
              <Mail size={32} color="var(--accent)" />
            </div>
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
            <a href="mailto:hello@baynix.ai" className="glass-btn glass-btn-primary">
              Contact Our PR Team
            </a>
          </div>
        </section>

      </main>

      <Footer />

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.7; }
        }
        @media (max-width: 600px) {
          .media-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  )
}
