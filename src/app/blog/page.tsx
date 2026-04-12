'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ChevronLeft, ChevronRight, ArrowRight, MessageSquare } from 'lucide-react'

interface BlogPost {
  _id: string
  title: string
  slug: string
  excerpt?: string
  coverImage?: string
  category?: string
  tags?: string[]
  publishedAt?: string
}

const ACCENT_COLORS = ['#22d3ee', '#3b82f6', '#10b981', '#a78bfa', '#f59e0b', '#ec4899']
const GRADIENTS = [
  'linear-gradient(135deg, rgba(34,211,238,0.15) 0%, rgba(59,130,246,0.15) 100%)',
  'linear-gradient(135deg, rgba(59,130,246,0.15) 0%, rgba(99,102,241,0.15) 100%)',
  'linear-gradient(135deg, rgba(16,185,129,0.15) 0%, rgba(34,211,238,0.15) 100%)',
  'linear-gradient(135deg, rgba(167,139,250,0.15) 0%, rgba(99,102,241,0.15) 100%)',
  'linear-gradient(135deg, rgba(245,158,11,0.15) 0%, rgba(16,185,129,0.15) 100%)',
  'linear-gradient(135deg, rgba(236,72,153,0.15) 0%, rgba(167,139,250,0.15) 100%)',
]

function getColor(index: number) { return ACCENT_COLORS[index % ACCENT_COLORS.length] }
function getGradient(index: number) { return GRADIENTS[index % GRADIENTS.length] }

function readTime(excerpt?: string) {
  const words = (excerpt ?? '').split(' ').length
  return `${Math.max(3, Math.round(words / 200))} min read`
}

const GRID_LIMIT = 6

export default function BlogPage() {
  const [featured, setFeatured] = useState<BlogPost[]>([])
  const [grid, setGrid] = useState<BlogPost[]>([])
  const [totalPages, setTotalPages] = useState(0)
  const [gridPage, setGridPage] = useState(1)
  const [loadingFeatured, setLoadingFeatured] = useState(true)
  const [loadingGrid, setLoadingGrid] = useState(true)
  const [activeSlide, setActiveSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Fetch featured carousel posts once
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blog?limit=3`)
      .then(r => r.json())
      .then(json => { if (json.success) setFeatured(json.data) })
      .catch(() => {})
      .finally(() => setLoadingFeatured(false))
  }, [])

  // Fetch grid posts on page change
  useEffect(() => {
    setLoadingGrid(true)
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blog?page=${gridPage}&limit=${GRID_LIMIT}`)
      .then(r => r.json())
      .then(json => {
        if (json.success) {
          setGrid(json.data)
          setTotalPages(json.pagination?.pages ?? 0)
        }
      })
      .catch(() => {})
      .finally(() => setLoadingGrid(false))
  }, [gridPage])

  const loading = loadingFeatured

  const startAuto = () => { autoRef.current = setInterval(() => goTo('right'), 5000) }
  const stopAuto = () => { if (autoRef.current) clearInterval(autoRef.current) }

  useEffect(() => {
    if (featured.length > 1) { startAuto(); return () => stopAuto() }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [featured.length])

  const goTo = (dir: 'left' | 'right') => {
    if (isAnimating || featured.length === 0) return
    setIsAnimating(true)
    setTimeout(() => {
      setActiveSlide(prev =>
        dir === 'right'
          ? (prev + 1) % featured.length
          : (prev - 1 + featured.length) % featured.length
      )
      setIsAnimating(false)
    }, 300)
  }

  const slide = featured[activeSlide]

  return (
    <>
      <Navbar />

      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 0.4; } 50% { opacity: 0.7; } }
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .blog-card:hover { transform: translateY(-4px); border-color: rgba(255,255,255,0.16) !important; }
        .read-more-link:hover .arrow-icon { transform: translateX(4px); }
        .dot-btn { transition: all 0.2s; }
        .dot-btn.active { background: white !important; width: 24px !important; border-radius: 4px !important; }
        @media (max-width: 640px) { .blog-slide-grid { grid-template-columns: 1fr !important; } .blog-slide-img { display: none !important; } }
      `}</style>

      <main style={{ background: 'var(--bg)', minHeight: '100vh', paddingTop: 64, color: 'var(--text)' }}>

        {/* ── Page Header ── */}
        <section style={{ padding: '4rem 2rem 2rem', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 600, height: 400, background: 'radial-gradient(ellipse, rgba(59,130,246,0.08) 0%, transparent 70%)', top: '0%', left: '20%', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', width: 400, height: 300, background: 'radial-gradient(ellipse, rgba(99,102,241,0.07) 0%, transparent 70%)', top: '10%', right: '10%', pointerEvents: 'none' }} />
          <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1, textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.3rem 0.9rem', background: 'rgba(59,130,246,0.12)', border: '1px solid rgba(59,130,246,0.3)', borderRadius: 100, fontSize: '0.72rem', fontWeight: 700, color: '#60a5fa', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.2rem' }}>
              Insights & Updates
            </div>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: '1rem' }}>
              The{' '}
              <span style={{ background: 'linear-gradient(135deg, #60a5fa, #818cf8, #22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Baynix Blog
              </span>
            </h1>
            <p style={{ fontSize: '1rem', color: 'var(--text2)', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
              Expert guides, industry trends, and practical strategies for modern business communication.
            </p>
          </div>
        </section>

        {/* ── Featured Carousel ── */}
        {!loading && featured.length > 0 && (
          <section style={{ padding: '2rem 2rem 4rem', borderBottom: '1px solid var(--border)' }}>
            <div style={{ maxWidth: 1100, margin: '0 auto' }}>
              <div
                onMouseEnter={stopAuto}
                onMouseLeave={startAuto}
                style={{
                  position: 'relative',
                  background: 'var(--glass-bg)',
                  backdropFilter: 'var(--glass-blur)',
                  WebkitBackdropFilter: 'var(--glass-blur)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 20,
                  overflow: 'hidden',
                  boxShadow: '0 8px 40px rgba(0,0,0,0.4)',
                }}
              >
                <div style={{ position: 'absolute', inset: 0, background: getGradient(activeSlide), transition: 'background 0.5s ease', pointerEvents: 'none' }} />

                <div
                  key={activeSlide}
                  className="blog-slide-grid"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr auto',
                    gap: '2rem',
                    padding: 'clamp(2rem, 4vw, 3.5rem)',
                    alignItems: 'center',
                    position: 'relative',
                    zIndex: 1,
                    animation: 'fadeSlide 0.35s ease both',
                    opacity: isAnimating ? 0 : 1,
                    transition: 'opacity 0.3s',
                  }}
                >
                  <div>
                    {slide.category && (
                      <div style={{ display: 'inline-flex', alignItems: 'center', padding: '0.3rem 0.9rem', background: `${getColor(activeSlide)}22`, border: `1px solid ${getColor(activeSlide)}40`, borderRadius: 100, fontSize: '0.72rem', fontWeight: 700, color: getColor(activeSlide), letterSpacing: '0.1em', textTransform: 'uppercase' as const, marginBottom: '1.2rem' }}>
                        {slide.category}
                      </div>
                    )}
                    <h2 style={{ fontSize: 'clamp(1.4rem, 2.8vw, 2.1rem)', fontWeight: 800, letterSpacing: '-0.025em', lineHeight: 1.2, marginBottom: '1rem', color: 'var(--text)', maxWidth: 600 }}>
                      {slide.title}
                    </h2>
                    {slide.excerpt && (
                      <p style={{ fontSize: '0.95rem', color: 'var(--text2)', lineHeight: 1.7, marginBottom: '1.8rem', maxWidth: 560 }}>
                        {slide.excerpt.length > 160 ? slide.excerpt.slice(0, 160) + '…' : slide.excerpt}
                      </p>
                    )}
                    <Link
                      href={`/blog/${slide.slug}`}
                      className="read-more-link"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.65rem 1.4rem', background: `${getColor(activeSlide)}22`, border: `1px solid ${getColor(activeSlide)}55`, borderRadius: 10, fontSize: '0.88rem', fontWeight: 600, color: getColor(activeSlide), textDecoration: 'none', transition: 'all 0.2s' }}
                    >
                      Read Article
                      <ArrowRight size={15} className="arrow-icon" style={{ transition: 'transform 0.2s' }} />
                    </Link>
                  </div>

                  {slide.coverImage && (
                    <div
                      className="blog-slide-img"
                      style={{ width: 'clamp(140px, 18vw, 260px)', height: 'clamp(140px, 18vw, 260px)', borderRadius: 20, overflow: 'hidden', border: `1px solid ${getColor(activeSlide)}30`, flexShrink: 0 }}
                    >
                      <img src={slide.coverImage} alt={slide.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                  )}
                </div>

                {featured.length > 1 && (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 clamp(1.5rem, 4vw, 3.5rem) 1.5rem', position: 'relative', zIndex: 1 }}>
                    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                      {featured.map((_, i) => (
                        <button
                          key={i}
                          className={`dot-btn ${i === activeSlide ? 'active' : ''}`}
                          onClick={() => { stopAuto(); setActiveSlide(i); startAuto() }}
                          style={{ width: 8, height: 8, borderRadius: '50%', border: 'none', cursor: 'pointer', background: i === activeSlide ? 'white' : 'rgba(255,255,255,0.25)', padding: 0 }}
                        />
                      ))}
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      {[{ dir: 'left' as const, Icon: ChevronLeft }, { dir: 'right' as const, Icon: ChevronRight }].map(({ dir, Icon }) => (
                        <button
                          key={dir}
                          onClick={() => { stopAuto(); goTo(dir); startAuto() }}
                          style={{ width: 38, height: 38, borderRadius: 10, border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.06)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text2)', transition: 'all 0.2s' }}
                          onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.12)'; (e.currentTarget as HTMLButtonElement).style.color = 'white' }}
                          onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.06)'; (e.currentTarget as HTMLButtonElement).style.color = 'var(--text2)' }}
                        >
                          <Icon size={18} />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* ── Blog Grid ── */}
        <section style={{ padding: '5rem 2rem', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 500, height: 400, background: 'radial-gradient(ellipse, rgba(99,102,241,0.06) 0%, transparent 70%)', bottom: '10%', right: '5%', pointerEvents: 'none' }} />
          <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.3rem 0.9rem', background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.3)', borderRadius: 100, fontSize: '0.72rem', fontWeight: 700, color: '#a5b4fc', letterSpacing: '0.1em', textTransform: 'uppercase' as const, marginBottom: '1rem' }}>
                All Articles
              </div>
              <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 800, letterSpacing: '-0.025em', lineHeight: 1.2 }}>
                Explore Our Latest Posts
              </h2>
            </div>

            {loadingGrid ? (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
                {Array.from({ length: GRID_LIMIT }).map((_, i) => (
                  <div key={i} style={{ height: 340, borderRadius: 16, background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', animation: 'pulse 1.5s ease-in-out infinite' }} />
                ))}
              </div>
            ) : grid.length === 0 ? (
              <p style={{ textAlign: 'center', color: 'var(--text3)', padding: '4rem 0' }}>No posts published yet.</p>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
                {grid.map((post, i) => {
                  const color = getColor(i)
                  return (
                    <article
                      key={post._id}
                      className="blog-card"
                      style={{
                        background: 'var(--glass-bg)',
                        backdropFilter: 'var(--glass-blur)',
                        WebkitBackdropFilter: 'var(--glass-blur)',
                        border: '1px solid var(--glass-border)',
                        borderRadius: 16,
                        overflow: 'hidden',
                        transition: 'all 0.25s ease',
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      <div style={{ height: 200, borderBottom: '1px solid rgba(255,255,255,0.06)', position: 'relative', overflow: 'hidden', background: 'rgba(255,255,255,0.04)' }}>
                        {post.coverImage && (
                          <img src={post.coverImage} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        )}
                      </div>

                      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
                          {post.category && (
                            <span style={{ fontSize: '0.7rem', fontWeight: 700, color, textTransform: 'uppercase', letterSpacing: '0.08em', background: `${color}18`, padding: '0.2rem 0.6rem', borderRadius: 6, border: `1px solid ${color}30` }}>
                              {post.category}
                            </span>
                          )}
                          <span style={{ fontSize: '0.75rem', color: 'var(--text3)', marginLeft: 'auto' }}>{readTime(post.excerpt)}</span>
                        </div>

                        <h3 style={{ fontSize: '1rem', fontWeight: 700, lineHeight: 1.4, marginBottom: '0.75rem', color: 'var(--text)' }}>
                          {post.title}
                        </h3>

                        {post.excerpt && (
                          <p style={{ fontSize: '0.85rem', color: 'var(--text2)', lineHeight: 1.65, marginBottom: '1.2rem', flex: 1 }}>
                            {post.excerpt.length > 140 ? post.excerpt.slice(0, 140) + '…' : post.excerpt}
                          </p>
                        )}

                        <Link
                          href={`/blog/${post.slug}`}
                          className="read-more-link"
                          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.82rem', fontWeight: 600, color, textDecoration: 'none', marginTop: 'auto' }}
                        >
                          Read more
                          <ArrowRight size={14} className="arrow-icon" style={{ transition: 'transform 0.2s' }} />
                        </Link>
                      </div>
                    </article>
                  )
                })}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginTop: '3rem', flexWrap: 'wrap' }}>
                <button
                  onClick={() => setGridPage(p => Math.max(1, p - 1))}
                  disabled={gridPage === 1}
                  style={{ padding: '0.5rem 1rem', borderRadius: 10, border: '1px solid var(--border)', background: 'rgba(255,255,255,0.03)', color: gridPage === 1 ? 'var(--text3)' : 'var(--text)', fontSize: '0.85rem', fontWeight: 600, cursor: gridPage === 1 ? 'not-allowed' : 'pointer', fontFamily: 'inherit', opacity: gridPage === 1 ? 0.4 : 1, transition: 'all 0.2s ease' }}
                >
                  ← Prev
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
                  <button
                    key={n}
                    onClick={() => setGridPage(n)}
                    style={{ width: 38, height: 38, borderRadius: 10, border: `1px solid ${n === gridPage ? 'rgba(99,102,241,0.4)' : 'var(--border)'}`, background: n === gridPage ? 'rgba(99,102,241,0.15)' : 'rgba(255,255,255,0.03)', color: n === gridPage ? '#a78bfa' : 'var(--text3)', fontSize: '0.85rem', fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit', boxShadow: n === gridPage ? '0 0 14px rgba(99,102,241,0.25)' : 'none', transition: 'all 0.2s ease' }}
                  >
                    {n}
                  </button>
                ))}

                <button
                  onClick={() => setGridPage(p => Math.min(totalPages, p + 1))}
                  disabled={gridPage === totalPages}
                  style={{ padding: '0.5rem 1rem', borderRadius: 10, border: '1px solid var(--border)', background: 'rgba(255,255,255,0.03)', color: gridPage === totalPages ? 'var(--text3)' : 'var(--text)', fontSize: '0.85rem', fontWeight: 600, cursor: gridPage === totalPages ? 'not-allowed' : 'pointer', fontFamily: 'inherit', opacity: gridPage === totalPages ? 0.4 : 1, transition: 'all 0.2s ease' }}
                >
                  Next →
                </button>
              </div>
            )}
          </div>
        </section>

        {/* ── Newsletter ── */}
        <section style={{ padding: '4rem 2rem 6rem', borderTop: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 600, height: 400, background: 'radial-gradient(ellipse, rgba(59,130,246,0.07) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: 560, margin: '0 auto', position: 'relative', zIndex: 1, textAlign: 'center' }}>
            <div style={{ background: 'var(--glass-bg)', backdropFilter: 'var(--glass-blur)', WebkitBackdropFilter: 'var(--glass-blur)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 20, padding: '3rem 2.5rem', boxShadow: '0 8px 40px rgba(0,0,0,0.3)' }}>
              <div style={{ width: 52, height: 52, borderRadius: 14, background: 'rgba(59,130,246,0.15)', border: '1px solid rgba(59,130,246,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.2rem' }}>
                <MessageSquare size={24} color="#60a5fa" />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>Stay in the Loop</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text2)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                Get the latest insights on RCS, WhatsApp, and omnichannel communication — delivered straight to your inbox.
              </p>
              <div style={{ display: 'flex', gap: '0.6rem', maxWidth: 400, margin: '0 auto', flexWrap: 'wrap' }}>
                <input type="email" placeholder="Enter your email" style={{ flex: 1, minWidth: 0, padding: '0.7rem 1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 10, color: 'var(--text)', fontSize: '0.88rem', outline: 'none', fontFamily: 'inherit' }} />
                <button className="glass-btn glass-btn-primary glass-btn-sm" style={{ whiteSpace: 'nowrap', padding: '0.7rem 1.2rem', fontSize: '0.88rem', borderRadius: 10, cursor: 'pointer' }}>
                  Subscribe
                </button>
              </div>
              <p style={{ fontSize: '0.75rem', color: 'var(--text3)', marginTop: '0.9rem' }}>No spam. Unsubscribe at any time.</p>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
