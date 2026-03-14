'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Param { name: string; type: string; description: string }
export interface Endpoint {
  id: string
  method: 'POST' | 'GET'
  url: string
  title: string
  description: string
  requiredParams?: Param[]
  optionalParams?: Param[]
  payload: string
  curl: string
  response: string
}

// ─── Top-level navigation ─────────────────────────────────────────────────────

const TOP_NAV = [
  { href: '/api-docs/sms',                            label: 'SMS' },
  { href: '/api-docs/otp',                            label: 'OTP' },
  { href: '/api-docs/whatsapp/create-templates',      label: 'WhatsApp — Create Templates' },
  { href: '/api-docs/whatsapp/send-templates',        label: 'WhatsApp — Send Templates' },
  { href: '/api-docs/whatsapp/conversation-api',      label: 'WhatsApp — Conversation API' },
  { href: '/api-docs/rcs',                            label: 'RCS' },
]

// ─── Shared UI components ─────────────────────────────────────────────────────

export function MethodBadge({ method }: { method: string }) {
  return (
    <span style={{
      display: 'inline-block', padding: '0.2rem 0.6rem', borderRadius: 5,
      fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.06em',
      background: 'rgba(59,130,246,0.15)', color: '#60a5fa',
      border: '1px solid rgba(59,130,246,0.3)', fontFamily: 'monospace',
    }}>
      {method}
    </span>
  )
}

export function ParamTable({ params, label }: { params: Param[]; label: string }) {
  if (!params.length) return null
  return (
    <div style={{ marginBottom: '1.5rem' }}>
      {label && (
        <p style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text2)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          {label}
        </p>
      )}
      <div style={{ border: '1px solid var(--border)', borderRadius: 10, overflow: 'hidden' }}>
        {params.map((p, i) => (
          <div key={p.name} style={{
            display: 'grid', gridTemplateColumns: '140px 80px 1fr', gap: '0.75rem',
            padding: '0.75rem 1rem', borderTop: i === 0 ? 'none' : '1px solid var(--border)',
            background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.015)', alignItems: 'start',
          }}>
            <code style={{ color: '#93c5fd', fontSize: '0.8rem', fontFamily: 'monospace' }}>{p.name}</code>
            <span style={{ color: '#a78bfa', fontSize: '0.75rem', fontFamily: 'monospace' }}>{p.type}</span>
            <span style={{ color: 'var(--text3)', fontSize: '0.8rem', lineHeight: 1.6 }}>{p.description}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function CodeBlock({ code, copied, onCopy }: { code: string; copied: boolean; onCopy: () => void }) {
  return (
    <div style={{ position: 'relative' }}>
      <pre style={{
        background: '#070b14', border: '1px solid var(--border)', borderRadius: 10,
        padding: '1.25rem', fontSize: '0.78rem', lineHeight: 1.8, color: '#e2e8f0',
        overflowX: 'auto', fontFamily: '"Fira Code", "Cascadia Code", monospace',
      }}>
        <code>{code}</code>
      </pre>
      <button onClick={onCopy} style={{
        position: 'absolute', top: '0.75rem', right: '0.75rem',
        padding: '0.3rem 0.75rem',
        background: copied ? 'rgba(16,185,129,0.15)' : 'rgba(255,255,255,0.07)',
        border: `1px solid ${copied ? 'rgba(16,185,129,0.4)' : 'var(--border2)'}`,
        borderRadius: 6, color: copied ? '#34d399' : 'var(--text3)',
        fontSize: '0.7rem', cursor: 'pointer', transition: 'all 0.2s', fontFamily: 'inherit',
      }}>
        {copied ? 'Copied!' : 'Copy'}
      </button>
    </div>
  )
}

export function EndpointCard({ ep }: { ep: Endpoint }) {
  const [tab, setTab] = useState<'payload' | 'curl'>('payload')
  const [copiedCode, setCopiedCode] = useState(false)
  const [copiedResp, setCopiedResp] = useState(false)

  const copy = (text: string, setter: (v: boolean) => void) => {
    navigator.clipboard.writeText(text)
    setter(true)
    setTimeout(() => setter(false), 2000)
  }

  const activeCode = tab === 'payload' ? ep.payload : ep.curl

  return (
    <div id={ep.id} style={{
      background: 'var(--surface)', border: '1px solid var(--border)',
      borderRadius: 14, overflow: 'hidden', marginBottom: '1.5rem',
    }}>
      <div style={{
        padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--border)',
        display: 'flex', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap',
      }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem', flexWrap: 'wrap' }}>
            <MethodBadge method={ep.method} />
            <code style={{ fontSize: '0.8rem', color: 'var(--text3)', fontFamily: 'monospace' }}>{ep.url}</code>
          </div>
          <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text)', marginBottom: '0.4rem' }}>{ep.title}</h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--text3)', lineHeight: 1.7 }}>{ep.description}</p>
        </div>
      </div>

      <div style={{ padding: '1.5rem' }}>
        {ep.requiredParams && <ParamTable params={ep.requiredParams} label="Required Attributes" />}
        {ep.optionalParams && <ParamTable params={ep.optionalParams} label="Optional Attributes" />}

        <p style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text2)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          Request
        </p>
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem' }}>
          {(['payload', 'curl'] as const).map((t) => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding: '0.3rem 0.85rem', borderRadius: 6,
              border: `1px solid ${tab === t ? 'rgba(59,130,246,0.5)' : 'var(--border)'}`,
              background: tab === t ? 'rgba(59,130,246,0.12)' : 'transparent',
              color: tab === t ? '#93c5fd' : 'var(--text3)',
              fontSize: '0.75rem', cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.15s',
            }}>
              {t === 'payload' ? 'Payload' : 'cURL'}
            </button>
          ))}
        </div>
        <CodeBlock code={activeCode} copied={copiedCode} onCopy={() => copy(activeCode, setCopiedCode)} />

        <p style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text2)', margin: '1.5rem 0 0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          Response
        </p>
        <CodeBlock code={ep.response} copied={copiedResp} onCopy={() => copy(ep.response, setCopiedResp)} />
      </div>
    </div>
  )
}

// ─── Layout ───────────────────────────────────────────────────────────────────

interface SideItem { id: string; label: string }

interface ApiDocsLayoutProps {
  sideItems: SideItem[]
  children: React.ReactNode
}

export default function ApiDocsLayout({ sideItems, children }: ApiDocsLayoutProps) {
  const pathname = usePathname()
  const [activeId, setActiveId] = useState(sideItems[0]?.id ?? '')

  const scrollTo = (id: string) => {
    setActiveId(id)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <div className="aurora-1" />
      <div className="aurora-2" />
      <div className="aurora-3" />
      <Navbar />

      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '7rem 1.5rem 4rem',
        display: 'grid', gridTemplateColumns: '240px 1fr', gap: '2.5rem',
        alignItems: 'start', position: 'relative', zIndex: 1,
      }} className="api-docs-grid">

        {/* ── Sidebar ── */}
        <aside style={{
          position: 'sticky', top: '5rem',
          maxHeight: 'calc(100vh - 6rem)', overflowY: 'auto',
          scrollbarWidth: 'none',
          background: 'var(--surface)', border: '1px solid var(--border)',
          borderRadius: 14, padding: '1.25rem',
        }}>
          {/* Top-level nav */}
          <p style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', padding: '0 0.5rem' }}>
            API Reference
          </p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.15rem', marginBottom: '1.25rem' }}>
            {TOP_NAV.map((nav) => {
              const isActive = pathname === nav.href
              return (
                <li key={nav.href}>
                  <Link href={nav.href} style={{
                    display: 'block', padding: '0.4rem 0.6rem', borderRadius: 7,
                    fontSize: '0.8rem', textDecoration: 'none', transition: 'all 0.15s',
                    background: isActive ? 'rgba(59,130,246,0.12)' : 'transparent',
                    color: isActive ? '#93c5fd' : 'var(--text3)',
                    borderLeft: isActive ? '2px solid #3b82f6' : '2px solid transparent',
                    fontWeight: isActive ? 600 : 400,
                  }}>
                    {nav.label}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* In-page sub-items */}
          {sideItems.length > 0 && (
            <>
              <div style={{ height: 1, background: 'var(--border)', marginBottom: '0.75rem' }} />
              <p style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', padding: '0 0.5rem' }}>
                On this page
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
                {sideItems.map((item) => (
                  <li key={item.id}>
                    <button onClick={() => scrollTo(item.id)} style={{
                      width: '100%', textAlign: 'left', padding: '0.38rem 0.6rem',
                      borderRadius: 7, border: 'none',
                      background: activeId === item.id ? 'rgba(59,130,246,0.08)' : 'transparent',
                      color: activeId === item.id ? '#93c5fd' : 'var(--text3)',
                      fontSize: '0.78rem', cursor: 'pointer', transition: 'all 0.15s',
                      fontFamily: 'inherit',
                      borderLeft: activeId === item.id ? '2px solid rgba(59,130,246,0.5)' : '2px solid transparent',
                    }}
                    onMouseEnter={e => { if (activeId !== item.id) e.currentTarget.style.color = 'var(--text2)' }}
                    onMouseLeave={e => { if (activeId !== item.id) e.currentTarget.style.color = 'var(--text3)' }}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </>
          )}
        </aside>

        {/* ── Main content ── */}
        <main>{children}</main>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .api-docs-grid { grid-template-columns: 1fr !important; }
        }
        .api-docs-grid aside::-webkit-scrollbar { display: none; }
      `}</style>

      <Footer />
    </>
  )
}
