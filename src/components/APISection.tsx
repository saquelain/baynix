'use client'

import { useState } from 'react'

const tabs = ['cURL', 'Node.js', 'Python']

const codeSnippets: Record<string, React.ReactNode> = {
  'cURL': (
    <>
      <span style={{ color: '#475569' }}># Send SMS via Baynix API{'\n'}</span>
      <span style={{ color: '#60a5fa' }}>curl</span>{' -X POST \\' + '\n'}
      {'  https://api.baynix.ai/v1/sms/send \\' + '\n'}
      {'  -H '}
      <span style={{ color: '#34d399' }}>"Authorization: Bearer {'{API_KEY}'}"</span>
      {' \\' + '\n'}
      {'  -H '}
      <span style={{ color: '#34d399' }}>"Content-Type: application/json"</span>
      {' \\' + '\n'}
      {'  -d \'{' + '\n'}
      {'    '}
      <span style={{ color: '#34d399' }}>"sender"</span>: <span style={{ color: '#34d399' }}>"BAYNIX"</span>,{'\n'}
      {'    '}
      <span style={{ color: '#34d399' }}>"to"</span>: <span style={{ color: '#34d399' }}>"+919000000000"</span>,{'\n'}
      {'    '}
      <span style={{ color: '#34d399' }}>"text"</span>: <span style={{ color: '#34d399' }}>"Hello from Baynix! 🚀"</span>,{'\n'}
      {'    '}
      <span style={{ color: '#34d399' }}>"type"</span>: <span style={{ color: '#34d399' }}>"TRANS"</span>{'\n'}
      {"  }'" + '\n'}
      {'\n'}
      <span style={{ color: '#475569' }}># Response{'\n'}</span>
      {'{\n'}
      {'  '}
      <span style={{ color: '#34d399' }}>"status"</span>: <span style={{ color: '#34d399' }}>"success"</span>,{'\n'}
      {'  '}
      <span style={{ color: '#34d399' }}>"messageId"</span>: <span style={{ color: '#34d399' }}>"BYX-2024-XXXXX"</span>,{'\n'}
      {'  '}
      <span style={{ color: '#34d399' }}>"credits"</span>: <span style={{ color: '#fb923c' }}>1</span>{'\n'}
      {'}'}
    </>
  ),
  'Node.js': (
    <>
      <span style={{ color: '#c084fc' }}>const</span> <span style={{ color: '#60a5fa' }}>baynix</span> = <span style={{ color: '#c084fc' }}>require</span>(<span style={{ color: '#34d399' }}>'@baynix/sdk'</span>){'\n'}
      {'\n'}
      <span style={{ color: '#c084fc' }}>const</span> client = <span style={{ color: '#c084fc' }}>new</span> <span style={{ color: '#60a5fa' }}>baynix</span>({'{'}{'\n'}
      {'  '}apiKey: <span style={{ color: '#34d399' }}>process.env.BAYNIX_API_KEY</span>{'\n'}
      {'}'}){'\n'}
      {'\n'}
      <span style={{ color: '#c084fc' }}>await</span> client.<span style={{ color: '#60a5fa' }}>sms.send</span>({'{'}{'\n'}
      {'  '}sender: <span style={{ color: '#34d399' }}>"BAYNIX"</span>,{'\n'}
      {'  '}to: <span style={{ color: '#34d399' }}>"+919000000000"</span>,{'\n'}
      {'  '}text: <span style={{ color: '#34d399' }}>"Hello from Baynix! 🚀"</span>{'\n'}
      {'}'}){'\n'}
    </>
  ),
  'Python': (
    <>
      <span style={{ color: '#c084fc' }}>import</span> baynix{'\n'}
      {'\n'}
      client = baynix.<span style={{ color: '#60a5fa' }}>Client</span>({'\n'}
      {'  '}api_key=<span style={{ color: '#34d399' }}>"your_api_key"</span>{'\n'}
      {')'}{'\n'}
      {'\n'}
      response = client.sms.<span style={{ color: '#60a5fa' }}>send</span>({'\n'}
      {'  '}sender=<span style={{ color: '#34d399' }}>"BAYNIX"</span>,{'\n'}
      {'  '}to=<span style={{ color: '#34d399' }}>"+919000000000"</span>,{'\n'}
      {'  '}text=<span style={{ color: '#34d399' }}>"Hello from Baynix! 🚀"</span>{'\n'}
      {')'}{'\n'}
    </>
  ),
}

export default function APISection() {
  const [activeTab, setActiveTab] = useState('cURL')

  return (
    <section id="developers" style={{ padding: '6rem 2rem' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '5rem',
          alignItems: 'center',
        }}
        className="reveal split-grid"
        >
          {/* Code block */}
          <div style={{
            background: 'rgba(8,12,24,0.9)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid var(--border)',
            borderRadius: 16,
            overflow: 'hidden',
            boxShadow: '0 24px 64px rgba(0,0,0,0.4)',
          }}>
            {/* Tab header */}
            <div style={{
              padding: '0.75rem 1.25rem',
              background: 'rgba(255,255,255,0.03)',
              borderBottom: '1px solid var(--border)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}>
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    fontSize: '0.75rem',
                    padding: '0.2rem 0.6rem',
                    borderRadius: 4,
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    transition: 'all 0.2s',
                    background: activeTab === tab ? 'rgba(59,130,246,0.1)' : 'transparent',
                    color: activeTab === tab ? 'var(--accent)' : 'var(--text3)',
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Code body */}
            <pre style={{
              padding: '1.5rem',
              fontFamily: '"Courier New", monospace',
              fontSize: '0.8rem',
              lineHeight: 1.7,
              color: '#8b95b0',
              overflowX: 'auto',
              margin: 0,
              whiteSpace: 'pre-wrap',
            }}>
              {codeSnippets[activeTab]}
            </pre>
          </div>

          {/* Text side */}
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.75rem',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: 'var(--accent)',
              marginBottom: '1rem',
            }}>
              <span style={{
                width: 18, height: 1,
                background: 'var(--accent)',
                display: 'inline-block',
              }} />
              Developers
            </div>

            <h2 style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
              fontWeight: 700,
              letterSpacing: '-0.025em',
              lineHeight: 1.2,
              color: 'var(--text)',
              marginBottom: '1rem',
            }}>
              API-first.<br />Built for developers.
            </h2>

            <p style={{
              fontSize: '1rem',
              color: 'var(--text2)',
              lineHeight: 1.7,
              fontWeight: 300,
              maxWidth: 420,
              marginBottom: '2rem',
            }}>
              Integrate Baynix into your product in minutes. RESTful APIs with comprehensive documentation, SDKs for Node.js, Python, PHP, and more.
            </p>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <a href="https://developers.baynix.ai" style={{
                padding: '0.8rem 2rem',
                fontSize: '0.9rem',
                fontWeight: 500,
                color: '#fff',
                background: 'var(--accent)',
                borderRadius: 10,
                textDecoration: 'none',
                boxShadow: '0 0 24px rgba(59,130,246,0.3)',
                transition: 'all 0.25s',
              }}>
                See Documentation →
              </a>
              <a href="/api-reference" style={{
                padding: '0.8rem 2rem',
                fontSize: '0.9rem',
                fontWeight: 500,
                color: 'var(--text)',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid var(--border2)',
                borderRadius: 10,
                textDecoration: 'none',
                transition: 'all 0.25s',
              }}>
                API Reference
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}