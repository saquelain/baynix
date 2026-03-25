'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, ArrowRight, MessageSquare } from 'lucide-react'


/* ─── Data ─────────────────────────────────────────────── */

const featured = [
  {
    slug: '/what-is-rcs-messaging-and-how-does-it-work-2026-guide/',
    tag: 'RCS Messaging',
    tagColor: '#22d3ee',
    title: 'What Is RCS Messaging and How Does It Work? (2026 Guide)',
    excerpt:
      'Unlock the Future of Business Messaging with Rich Communication Services. In today\'s digital world, customers expect more than plain text — they want rich, interactive experiences.',
    gradient: 'linear-gradient(135deg, rgba(34,211,238,0.15) 0%, rgba(59,130,246,0.15) 100%)',
    image: '/images/blog/carousel-rcs-guide.png',
    imageAlt: 'RCS Messaging Guide',
  },
  {
    slug: '/why-rcs-messaging-is-the-future-of-customer-engagement-and-what-brands-must-do-next/',
    tag: 'Customer Engagement',
    tagColor: '#3b82f6',
    title: 'Why RCS Messaging Is the Future of Customer Engagement (And What Brands Must Do Next)',
    excerpt:
      'In the age of mobile-first communication, messaging is evolving faster than ever. Traditional SMS has served businesses well for decades — but now RCS is rewriting the rules.',
    gradient: 'linear-gradient(135deg, rgba(59,130,246,0.15) 0%, rgba(99,102,241,0.15) 100%)',
    image: '/images/blog/carousel-rcs-future.png',
    imageAlt: 'Future of Customer Engagement',
  },
  {
    slug: '/a-cut-above-the-competition-why-azmarq-is-1-chat-commerce-alternative/',
    tag: 'Chat Commerce',
    tagColor: '#10b981',
    title: 'A Cut Above the Competition: Why Baynix is #1 Chat Commerce Alternative',
    excerpt:
      "In today's digital-first economy, businesses don't just compete on product or price — they compete on experience. Discover why Baynix leads the pack.",
    gradient: 'linear-gradient(135deg, rgba(16,185,129,0.15) 0%, rgba(34,211,238,0.15) 100%)',
    image: '/images/blog/carousel-chat-commerce.png',
    imageAlt: 'Chat Commerce Alternative',
  },
]

const posts = [
  {
    slug: '/why-rcs-messaging-is-the-future-of-customer-engagement-and-what-brands-must-do-next/',
    tag: 'Customer Engagement',
    tagColor: '#3b82f6',
    title: 'Why RCS Messaging Is the Future of Customer Engagement (And What Brands Must Do Next)',
    excerpt:
      'In the age of mobile-first communication, messaging is evolving faster than ever. Traditional SMS has served businesses well for decades — with reliability and simplicity that made text messaging indispensable. But now, Rich Communication Services (RCS messaging) is rewriting the rules.',
    image: '/images/blog/post-rcs-future.png',
    imageAlt: 'RCS Future of Customer Engagement',
    readTime: '6 min read',
  },
  {
    slug: '#',
    tag: 'Real Estate',
    tagColor: '#f59e0b',
    title: 'Lead Generation for Real Estate Agents: How Property Developers Use WhatsApp to Convert Leads',
    excerpt:
      "In today's competitive property market, speed and personalization decide who wins the deal. Real estate developers are turning to WhatsApp to nurture leads, share listings, and close faster.",
    image: '/images/blog/post-real-estate-whatsapp.png',
    imageAlt: 'Real Estate WhatsApp Lead Generation',
    readTime: '5 min read',
  },
  {
    slug: '/what-is-rcs-messaging-and-how-does-it-work-2026-guide/',
    tag: 'RCS Messaging',
    tagColor: '#22d3ee',
    title: 'What Is RCS Messaging and How Does It Work? (2026 Guide)',
    excerpt:
      "Unlock the Future of Business Messaging with Rich Communication Services. In today's digital world, customers expect more than plain text — they want rich, interactive experiences delivered seamlessly.",
    image: '/images/blog/post-rcs-guide.png',
    imageAlt: 'What Is RCS Messaging 2026 Guide',
    readTime: '7 min read',
  },
  {
    slug: '#',
    tag: 'Customer Support',
    tagColor: '#a78bfa',
    title: 'AI-Powered Chatbots vs Human Agents: The Future of Customer Support with Baynix',
    excerpt:
      "Customer expectations are evolving faster than ever. Today's users demand instant responses, 24/7 availability, and personalized service. Baynix helps you deliver all three seamlessly.",
    image: '/images/blog/post-ai-chatbots.png',
    imageAlt: 'AI Chatbots vs Human Agents',
    readTime: '8 min read',
  },
  {
    slug: '/a-cut-above-the-competition-why-azmarq-is-1-chat-commerce-alternative/',
    tag: 'Chat Commerce',
    tagColor: '#10b981',
    title: 'A Cut Above the Competition: Why Baynix is #1 Chat Commerce Alternative',
    excerpt:
      "In today's digital-first economy, businesses don't just compete on product or price — they compete on experience. Discover what sets Baynix apart as the top chat commerce platform.",
    image: '/images/blog/post-chat-commerce.png',
    imageAlt: 'Baynix Chat Commerce Alternative',
    readTime: '5 min read',
  },
  {
    slug: '#',
    tag: 'Omnichannel',
    tagColor: '#ec4899',
    title: 'Omnichannel Communication: The Complete Guide for Modern Businesses',
    excerpt:
      "In today's digital-first world, customers expect to connect with businesses on their own terms — whether that's WhatsApp, SMS, RCS, or email. Learn how to unify every channel.",
    image: '/images/blog/post-omnichannel.png',
    imageAlt: 'Omnichannel Communication Guide',
    readTime: '9 min read',
  },
]

/* ─── Component ─────────────────────────────────────────── */

export default function BlogPage() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState<'left' | 'right'>('right')
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const startAuto = () => {
    autoRef.current = setInterval(() => goTo('right'), 5000)
  }

  const stopAuto = () => {
    if (autoRef.current) clearInterval(autoRef.current)
  }

  useEffect(() => {
    startAuto()
    return () => stopAuto()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const goTo = (dir: 'left' | 'right') => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection(dir)
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
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .blog-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255,255,255,0.16) !important;
        }
        .read-more-link:hover .arrow-icon {
          transform: translateX(4px);
        }
        .dot-btn { transition: all 0.2s; }
        .dot-btn.active { background: white !important; width: 24px !important; border-radius: 4px !important; }
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
              {/* Gradient bg for slide */}
              <div style={{ position: 'absolute', inset: 0, background: slide.gradient, transition: 'background 0.5s ease', pointerEvents: 'none' }} />

              <div
                key={activeSlide}
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
                {/* Left: text */}
                <div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.3rem 0.9rem', background: `rgba(${slide.tagColor === '#22d3ee' ? '34,211,238' : slide.tagColor === '#3b82f6' ? '59,130,246' : '16,185,129'},0.15)`, border: `1px solid ${slide.tagColor}40`, borderRadius: 100, fontSize: '0.72rem', fontWeight: 700, color: slide.tagColor, letterSpacing: '0.1em', textTransform: 'uppercase' as const, marginBottom: '1.2rem' }}>
                    {slide.tag}
                  </div>
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.8vw, 2.1rem)', fontWeight: 800, letterSpacing: '-0.025em', lineHeight: 1.2, marginBottom: '1rem', color: 'var(--text)', maxWidth: 600 }}>
                    {slide.title}
                  </h2>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text2)', lineHeight: 1.7, marginBottom: '1.8rem', maxWidth: 560 }}>
                    {slide.excerpt}
                  </p>
                  <Link
                    href={slide.slug}
                    className="read-more-link"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.65rem 1.4rem', background: `${slide.tagColor}22`, border: `1px solid ${slide.tagColor}55`, borderRadius: 10, fontSize: '0.88rem', fontWeight: 600, color: slide.tagColor, textDecoration: 'none', transition: 'all 0.2s' }}
                  >
                    Read Article
                    <ArrowRight size={15} className="arrow-icon" style={{ transition: 'transform 0.2s' }} />
                  </Link>
                </div>

                {/* Right: image */}
                <div style={{ width: 'clamp(140px, 18vw, 260px)', height: 'clamp(140px, 18vw, 260px)', borderRadius: 20, overflow: 'hidden', border: `1px solid ${slide.tagColor}30`, flexShrink: 0, position: 'relative' }}>
                  <Image
                    src={slide.image}
                    alt={slide.imageAlt}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 140px, 260px"
                  />
                </div>
              </div>

              {/* Controls row */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 clamp(1.5rem, 4vw, 3.5rem) 1.5rem', position: 'relative', zIndex: 1 }}>
                {/* Dots */}
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  {featured.map((_, i) => (
                    <button
                      key={i}
                      className={`dot-btn ${i === activeSlide ? 'active' : ''}`}
                      onClick={() => { stopAuto(); setActiveSlide(i); startAuto() }}
                      style={{ width: 8, height: 8, borderRadius: '50%', border: 'none', cursor: 'pointer', background: i === activeSlide ? 'white' : 'rgba(255,255,255,0.25)', padding: 0, transition: 'all 0.2s' }}
                    />
                  ))}
                </div>

                {/* Arrows */}
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
            </div>
          </div>
        </section>

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

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
              {posts.map((post, i) => (
                <article
                  key={i}
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
                  {/* Card image area */}
                  <div style={{ height: 200, borderBottom: '1px solid rgba(255,255,255,0.06)', position: 'relative', overflow: 'hidden' }}>
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, 380px"
                    />
                  </div>

                  {/* Card body */}
                  <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
                      <span style={{ fontSize: '0.7rem', fontWeight: 700, color: post.tagColor, textTransform: 'uppercase', letterSpacing: '0.08em', background: `${post.tagColor}18`, padding: '0.2rem 0.6rem', borderRadius: 6, border: `1px solid ${post.tagColor}30` }}>
                        {post.tag}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text3)' }}>{post.readTime}</span>
                    </div>

                    <h3 style={{ fontSize: '1rem', fontWeight: 700, lineHeight: 1.4, marginBottom: '0.75rem', color: 'var(--text)' }}>
                      {post.title}
                    </h3>

                    <p style={{ fontSize: '0.85rem', color: 'var(--text2)', lineHeight: 1.65, marginBottom: '1.2rem', flex: 1 }}>
                      {post.excerpt.length > 140 ? post.excerpt.slice(0, 140) + '…' : post.excerpt}
                    </p>

                    <Link
                      href={post.slug}
                      className="read-more-link"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.82rem', fontWeight: 600, color: post.tagColor, textDecoration: 'none', marginTop: 'auto' }}
                    >
                      Read more
                      <ArrowRight size={14} className="arrow-icon" style={{ transition: 'transform 0.2s' }} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
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
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>
                Stay in the Loop
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text2)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                Get the latest insights on RCS, WhatsApp, and omnichannel communication — delivered straight to your inbox.
              </p>
              <div style={{ display: 'flex', gap: '0.6rem', maxWidth: 400, margin: '0 auto', flexWrap: 'wrap' }}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  style={{ flex: 1, minWidth: 0, padding: '0.7rem 1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 10, color: 'var(--text)', fontSize: '0.88rem', outline: 'none', fontFamily: 'inherit' }}
                />
                <button
                  className="glass-btn glass-btn-primary glass-btn-sm"
                  style={{ whiteSpace: 'nowrap', padding: '0.7rem 1.2rem', fontSize: '0.88rem', borderRadius: 10, cursor: 'pointer' }}
                >
                  Subscribe
                </button>
              </div>
              <p style={{ fontSize: '0.75rem', color: 'var(--text3)', marginTop: '0.9rem' }}>
                No spam. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
