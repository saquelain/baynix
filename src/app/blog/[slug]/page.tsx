'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

interface BlogPost {
  _id: string
  title: string
  slug: string
  excerpt?: string
  content: string
  coverImage?: string
  category?: string
  tags?: string[]
  publishedAt?: string
  author?: { firstName: string; lastName: string }
  seo?: { metaTitle?: string; metaDescription?: string }
}

function formatDate(iso?: string) {
  if (!iso) return ''
  return new Date(iso).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    if (!slug) return
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blog/${slug}`)
      .then(r => r.json())
      .then(json => {
        if (json.success) setPost(json.data)
        else setNotFound(true)
      })
      .catch(() => setNotFound(true))
      .finally(() => setLoading(false))
  }, [slug])

  return (
    <>
      <Navbar />

      <main style={{ background: 'var(--bg)', minHeight: '100vh', paddingTop: 64, color: 'var(--text)' }}>

        {/* Loading skeleton */}
        {loading && (
          <section style={{ padding: '4rem 2rem', maxWidth: 780, margin: '0 auto' }}>
            <div style={{ height: 16, width: 80, background: 'rgba(255,255,255,0.06)', borderRadius: 8, marginBottom: '2rem', animation: 'pulse 1.5s ease-in-out infinite' }} />
            <div style={{ height: 12, width: 120, background: 'rgba(255,255,255,0.05)', borderRadius: 6, marginBottom: '1rem', animation: 'pulse 1.5s ease-in-out infinite' }} />
            <div style={{ height: 40, width: '80%', background: 'rgba(255,255,255,0.06)', borderRadius: 8, marginBottom: '1rem', animation: 'pulse 1.5s ease-in-out infinite' }} />
            <div style={{ height: 20, width: '60%', background: 'rgba(255,255,255,0.04)', borderRadius: 6, marginBottom: '2rem', animation: 'pulse 1.5s ease-in-out infinite' }} />
            <div style={{ height: 320, background: 'rgba(255,255,255,0.04)', borderRadius: 16, marginBottom: '2rem', animation: 'pulse 1.5s ease-in-out infinite' }} />
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} style={{ height: 14, background: 'rgba(255,255,255,0.04)', borderRadius: 6, marginBottom: '0.75rem', width: i % 3 === 2 ? '70%' : '100%', animation: 'pulse 1.5s ease-in-out infinite' }} />
            ))}
          </section>
        )}

        {/* Not found */}
        {!loading && notFound && (
          <section style={{ padding: '8rem 2rem', textAlign: 'center' }}>
            <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem' }}>Post Not Found</h1>
            <p style={{ color: 'var(--text3)', marginBottom: '2rem' }}>This article doesn't exist or has been unpublished.</p>
            <Link href="/blog" style={{ color: '#a78bfa', textDecoration: 'underline', fontSize: '0.9rem' }}>
              ← Back to Blog
            </Link>
          </section>
        )}

        {/* Post content */}
        {!loading && post && (
          <>
            {/* Hero */}
            <section style={{ padding: '4rem 2rem 3rem', position: 'relative', overflow: 'hidden', borderBottom: '1px solid var(--border)' }}>
              <div style={{ position: 'absolute', width: 700, height: 400, background: 'radial-gradient(ellipse, rgba(99,102,241,0.1) 0%, transparent 70%)', top: 0, left: '50%', transform: 'translateX(-50%)', pointerEvents: 'none' }} />

              <div style={{ maxWidth: 780, margin: '0 auto', position: 'relative', zIndex: 1 }}>
                <Link
                  href="/blog"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.82rem', color: 'var(--text3)', textDecoration: 'none', marginBottom: '1.75rem' }}
                >
                  <ArrowLeft size={14} />
                  Back to Blog
                </Link>

                {post.category && (
                  <div style={{ display: 'inline-flex', marginBottom: '1rem', padding: '0.3rem 0.9rem', background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.3)', borderRadius: 100, fontSize: '0.72rem', fontWeight: 700, color: '#a78bfa', letterSpacing: '0.1em', textTransform: 'uppercase' as const }}>
                    {post.category}
                  </div>
                )}

                <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: '1rem' }}>
                  {post.title}
                </h1>

                {post.excerpt && (
                  <p style={{ fontSize: '1.05rem', color: 'var(--text2)', lineHeight: 1.7, marginBottom: '1.5rem', maxWidth: 660 }}>
                    {post.excerpt}
                  </p>
                )}

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.82rem', color: 'var(--text3)', flexWrap: 'wrap' }}>
                  {post.author && (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <span style={{ width: 24, height: 24, borderRadius: '50%', background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem', fontWeight: 700, color: 'white' }}>
                        {post.author.firstName[0]}{post.author.lastName[0]}
                      </span>
                      {post.author.firstName} {post.author.lastName}
                    </span>
                  )}
                  {post.publishedAt && (
                    <>
                      <span style={{ color: 'var(--border)' }}>·</span>
                      <span>{formatDate(post.publishedAt)}</span>
                    </>
                  )}
                  {post.tags && post.tags.length > 0 && (
                    <>
                      <span style={{ color: 'var(--border)' }}>·</span>
                      <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                        {post.tags.map(tag => (
                          <span key={tag} style={{ padding: '0.15rem 0.55rem', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 100, fontSize: '0.72rem', fontWeight: 500 }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </section>

            {/* Cover image */}
            {post.coverImage && (
              <div style={{ maxWidth: 780, margin: '2.5rem auto 0', padding: '0 2rem' }}>
                <img
                  src={post.coverImage}
                  alt={post.title}
                  style={{ width: '100%', borderRadius: 16, objectFit: 'cover', maxHeight: 420, border: '1px solid rgba(255,255,255,0.08)' }}
                />
              </div>
            )}

            {/* Content */}
            <article style={{ maxWidth: 780, margin: '0 auto', padding: '3rem 2rem 6rem' }}>
              <div
                className="blog-prose"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>
          </>
        )}

      </main>

      <Footer />

      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 0.4; } 50% { opacity: 0.7; } }
        .blog-prose { color: var(--text2); line-height: 1.8; font-size: 1rem; }
        .blog-prose h1 { font-size: 2rem; font-weight: 800; color: var(--text); margin: 2rem 0 0.75rem; letter-spacing: -0.025em; line-height: 1.2; }
        .blog-prose h2 { font-size: 1.5rem; font-weight: 700; color: var(--text); margin: 1.75rem 0 0.65rem; letter-spacing: -0.02em; }
        .blog-prose h3 { font-size: 1.2rem; font-weight: 700; color: var(--text); margin: 1.5rem 0 0.5rem; }
        .blog-prose p { margin: 0.9rem 0; }
        .blog-prose strong { font-weight: 700; color: var(--text); }
        .blog-prose em { font-style: italic; }
        .blog-prose u { text-decoration: underline; }
        .blog-prose s { text-decoration: line-through; }
        .blog-prose mark { background: rgba(254,240,138,0.3); padding: 0 3px; border-radius: 2px; color: var(--text); }
        .blog-prose sub { font-size: 0.75em; vertical-align: sub; }
        .blog-prose code { background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.1); border-radius: 4px; padding: 2px 6px; font-family: monospace; font-size: 0.85em; color: #a78bfa; }
        .blog-prose pre { background: rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 1.25rem 1.5rem; margin: 1.25rem 0; overflow-x: auto; }
        .blog-prose pre code { background: none; border: none; padding: 0; color: #cdd6f4; font-size: 0.9rem; }
        .blog-prose blockquote { border-left: 3px solid #6366f1; padding: 0.5rem 0 0.5rem 1.25rem; margin: 1.25rem 0; color: var(--text3); font-style: italic; }
        .blog-prose ul { list-style: disc; padding-left: 1.75rem; margin: 0.75rem 0; }
        .blog-prose ol { list-style: decimal; padding-left: 1.75rem; margin: 0.75rem 0; }
        .blog-prose li { margin: 0.3rem 0; }
        .blog-prose hr { border: none; border-top: 1px solid var(--border); margin: 2rem 0; }
        .blog-prose a { color: #818cf8; text-decoration: underline; }
        .blog-prose a:hover { color: #a5b4fc; }
        .blog-prose img { max-width: 100%; border-radius: 12px; margin: 1.25rem 0; border: 1px solid rgba(255,255,255,0.08); }
        .blog-prose table { border-collapse: collapse; width: 100%; margin: 1.25rem 0; font-size: 0.9rem; }
        .blog-prose th { background: rgba(255,255,255,0.05); font-weight: 600; text-align: left; padding: 0.6rem 1rem; border: 1px solid rgba(255,255,255,0.1); color: var(--text); }
        .blog-prose td { padding: 0.6rem 1rem; border: 1px solid rgba(255,255,255,0.08); }
        .blog-prose [style*="text-align: center"] { text-align: center; }
        .blog-prose [style*="text-align: right"] { text-align: right; }
      `}</style>
    </>
  )
}
