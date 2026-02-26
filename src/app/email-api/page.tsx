'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { useState } from 'react'

const features = [
  {
    icon: '🛡️',
    title: 'Trusted IP Addresses',
    desc: 'Baynix ensures that your brand\'s reputation and safety are safeguarded by providing you with a high-reputation IP address that maximizes inbox placement.',
    color: '#10b981',
    illustration: '/images/email-trusted-ip.svg',
  },
  {
    icon: '📊',
    title: 'Real-Time Insights',
    desc: 'When you team up with us, you\'ll have your own dashboard giving you detailed reports showing how many people read, opened, received, marked as spam, and clicked on your messages.',
    color: '#3b82f6',
    illustration: '/images/email-insights.svg',
  },
  {
    icon: '🛟',
    title: 'Customer Support 24×7',
    desc: 'By teaming up with us, you can connect with your customers and clients whenever and wherever you need, leading to increased satisfaction and loyalty.',
    color: '#6366f1',
    illustration: '/images/sms-support.svg',
  },
  {
    icon: '🎨',
    title: 'Personalize Your Content',
    desc: 'Using our online HTML editor, you have the ability to customize your content by adding images, videos, and GIFs to your emails for maximum engagement.',
    color: '#f59e0b',
    illustration: '/images/email-personalize.svg',
  },
  {
    icon: '📬',
    title: 'Inbox Delivery Guaranteed',
    desc: 'We use our expert teams and tools to ensure all your emails reach your target audience\'s inbox. We\'ll help you with IP warming and other safe practices.',
    color: '#22d3ee',
    illustration: '/images/email-inbox.svg',
  },
  {
    icon: '⚡',
    title: 'Deliver Every Critical Email Fast',
    desc: 'We offer high-speed systems for quick email delivery. Get priority servers for important traffic like OTPs, transactional alerts, and time-sensitive notifications.',
    color: '#ec4899',
    illustration: '/images/email-speed.svg',
  },
]

const stats = [
  { val: '20bn+', label: 'Emails per month', color: '#10b981' },
  { val: '2 sec', label: 'Average delivery time', color: '#3b82f6' },
  { val: '99.4%', label: 'Deliverability rate achieved', color: '#22d3ee' },
]

const codeTabs = ['cURL', 'NodeJS', 'Python', 'PHP']

const codeSnippets: Record<string, string> = {
  cURL: `curl -X POST https://api.baynix.ai/email/send \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "from": "hello@baynix.ai",
    "to": "user@example.com",
    "subject": "Welcome to Baynix!",
    "html": "<h1>Hello World!</h1>",
    "type": "TRANS"
  }'`,

  NodeJS: `const axios = require('axios');

const response = await axios.post(
  'https://api.baynix.ai/email/send',
  {
    from: 'hello@baynix.ai',
    to: 'user@example.com',
    subject: 'Welcome to Baynix!',
    html: '<h1>Hello World!</h1>',
    type: 'TRANS',
  },
  {
    headers: {
      Authorization: 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json',
    },
  }
);

console.log(response.data);`,

  Python: `import requests

url = "https://api.baynix.ai/email/send"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}
payload = {
    "from": "hello@baynix.ai",
    "to": "user@example.com",
    "subject": "Welcome to Baynix!",
    "html": "<h1>Hello World!</h1>",
    "type": "TRANS"
}

response = requests.post(url, json=payload, headers=headers)
print(response.json())`,

  PHP: `<?php
$curl = curl_init();

curl_setopt_array($curl, [
  CURLOPT_URL => "https://api.baynix.ai/email/send",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_POST => true,
  CURLOPT_HTTPHEADER => [
    "Authorization: Bearer YOUR_API_KEY",
    "Content-Type: application/json"
  ],
  CURLOPT_POSTFIELDS => json_encode([
    "from"    => "hello@baynix.ai",
    "to"      => "user@example.com",
    "subject" => "Welcome to Baynix!",
    "html"    => "<h1>Hello World!</h1>",
    "type"    => "TRANS"
  ])
]);

$response = curl_exec($curl);
echo $response;`,
}

const faqs = [
  {
    q: 'What is Baynix Email API?',
    a: 'Baynix Email API is a powerful, developer-friendly interface that enables you to send transactional and marketing emails programmatically at scale. Built on a carrier-grade infrastructure, it ensures industry-leading deliverability rates, real-time analytics, and seamless integration via SMTP or HTTP REST API — all without managing complex email servers.',
  },
  {
    q: 'How do I integrate Baynix Email API into my application?',
    a: 'Integration is straightforward. Sign up at app.baynix.ai, generate your API key, and use our REST API or SMTP credentials in your application. We provide SDKs and code samples in PHP, Node.js, Python, Java, and more. Most developers complete their first integration in under 30 minutes. Our detailed documentation and 24/7 support team are always available to assist you.',
  },
  {
    q: 'What is Email API for Developers?',
    a: 'Email API for developers is a programmatic interface that allows applications to send, receive, and manage emails without relying on traditional email clients. It exposes RESTful endpoints for sending single or bulk emails, managing templates, tracking delivery metrics, handling bounces and complaints, and configuring domain authentication (SPF, DKIM, DMARC). This gives developers full control over their email communication infrastructure.',
  },
]

const inputStyle = {
  width: '100%',
  padding: '0.75rem 1rem',
  background: 'rgba(255,255,255,0.04)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: 10,
  fontSize: '0.9rem',
  color: 'var(--text)',
  outline: 'none',
  transition: 'all 0.2s ease',
  fontFamily: 'Inter, sans-serif',
  boxSizing: 'border-box' as const,
}

export default function EmailApiPage() {
  const [activeTab, setActiveTab] = useState('cURL')
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [focused, setFocused] = useState<string | null>(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const getFocusStyle = (field: string) => focused === field ? {
    ...inputStyle,
    border: '1px solid rgba(16,185,129,0.5)',
    background: 'rgba(255,255,255,0.06)',
    boxShadow: '0 0 0 3px rgba(16,185,129,0.1)',
  } : inputStyle

  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--bg)', minHeight: '100vh', paddingTop: 64, color: 'var(--text)' }}>

        {/* Hero */}
        <section style={{
          padding: '6rem 2rem',
          position: 'relative', overflow: 'hidden',
          borderBottom: '1px solid var(--border)',
        }}>
          <div style={{
            position: 'absolute', width: 700, height: 500,
            background: 'radial-gradient(ellipse, rgba(16,185,129,0.1) 0%, transparent 70%)',
            top: '50%', left: '30%', transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', width: 400, height: 400,
            background: 'radial-gradient(ellipse, rgba(59,130,246,0.08) 0%, transparent 70%)',
            top: '20%', right: '10%', pointerEvents: 'none',
          }} />

          <div style={{
            maxWidth: 1100, margin: '0 auto',
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            gap: '4rem', alignItems: 'center',
            position: 'relative', zIndex: 1,
          }}>
            <div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                padding: '0.3rem 0.9rem',
                background: 'rgba(16,185,129,0.15)',
                border: '1px solid rgba(16,185,129,0.3)',
                borderRadius: 100, fontSize: '0.72rem', fontWeight: 700,
                color: '#10b981', letterSpacing: '0.1em',
                textTransform: 'uppercase' as const, marginBottom: '1.5rem',
              }}>
                No Experience Required
              </div>

              <h1 style={{
                fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
                fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1,
                color: 'var(--text)', marginBottom: '1.5rem',
              }}>
                Integrate{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #10b981, #3b82f6, #22d3ee)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                }}>
                  Email API
                </span>{' '}
                for reliable delivery at high volumes
              </h1>

              <p style={{
                fontSize: '1rem', color: 'var(--text2)', lineHeight: 1.8,
                fontWeight: 300, marginBottom: '2rem', maxWidth: 480,
              }}>
                Designed to assist you, no matter where you operate, in achieving the maximum delivery, speed, and throughput via SMTP or HTTP API at any volume.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' as const }}>
                <a href="https://app.baynix.ai" className="glass-btn glass-btn-primary">Try for Free →</a>
                <a href="#api-test" className="glass-btn glass-btn-secondary">Test the API</a>
              </div>
            </div>

            {/* Hero illustration */}
            <div style={{
              height: 380, borderRadius: 24,
              background: 'linear-gradient(135deg, rgba(16,185,129,0.12), rgba(59,130,246,0.08), rgba(34,211,238,0.06))',
              border: '1px solid rgba(255,255,255,0.08)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              position: 'relative', overflow: 'hidden',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)',
            }}>
              <Image src="/images/email-hero.svg" alt="Email API" fill style={{ objectFit: 'contain', padding: '2rem' }} />
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                background: 'radial-gradient(circle at 70% 30%, rgba(16,185,129,0.1), transparent 60%)',
                pointerEvents: 'none',
              }} />
            </div>
          </div>
        </section>

        {/* What is Email API */}
        <section style={{
          padding: '4rem 2rem',
          borderBottom: '1px solid var(--border)',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', width: 500, height: 200,
            background: 'radial-gradient(ellipse, rgba(16,185,129,0.07) 0%, transparent 70%)',
            top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
          }} />
          <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              fontSize: '0.75rem', textTransform: 'uppercase' as const,
              letterSpacing: '0.12em', color: 'var(--accent)', marginBottom: '1rem',
            }}>
              <span style={{ width: 18, height: 1, background: 'var(--accent)', display: 'inline-block' }} />
              What is an Email API?
            </div>
            <p style={{
              fontSize: '1.05rem', color: 'var(--text2)', lineHeight: 1.8,
              fontWeight: 300, maxWidth: 680, margin: '0 auto',
            }}>
              An Email API is a tool that enables developers to programmatically send and manage emails within their applications or systems — at any scale, with full delivery visibility.
            </p>
          </div>
        </section>

        {/* Features */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', width: 500, height: 300,
            background: 'radial-gradient(ellipse, rgba(16,185,129,0.06) 0%, transparent 70%)',
            top: '50%', right: '10%', pointerEvents: 'none',
          }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                fontSize: '0.75rem', textTransform: 'uppercase' as const,
                letterSpacing: '0.12em', color: 'var(--accent)', marginBottom: '1rem',
              }}>
                <span style={{ width: 18, height: 1, background: 'var(--accent)', display: 'inline-block' }} />
                What We Offer
              </div>
              <h2 style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800,
                letterSpacing: '-0.03em', color: 'var(--text)',
              }}>
                Everything you need in an Email API
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
              {features.map((f) => (
                <div
                  key={f.title}
                  style={{
                    padding: '2rem',
                    background: 'rgba(255,255,255,0.03)',
                    backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 20, position: 'relative', overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                    e.currentTarget.style.border = `1px solid ${f.color}33`
                    e.currentTarget.style.transform = 'translateY(-4px)'
                    e.currentTarget.style.boxShadow = `inset 0 1px 0 rgba(255,255,255,0.1), 0 16px 48px rgba(0,0,0,0.3), 0 0 30px ${f.color}11`
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                    e.currentTarget.style.border = '1px solid rgba(255,255,255,0.08)'
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.06)'
                  }}
                >
                  <div style={{
                    position: 'absolute', top: 0, left: '15%', right: '15%', height: 1,
                    background: `linear-gradient(90deg, transparent, ${f.color}66, transparent)`,
                  }} />

                  <div style={{
                    width: '100%', height: 140, borderRadius: 12,
                    background: `linear-gradient(135deg, ${f.color}12, ${f.color}06)`,
                    border: `1px solid ${f.color}18`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '1.25rem', position: 'relative', overflow: 'hidden',
                  }}>
                    <Image src={f.illustration} alt={f.title} fill style={{ objectFit: 'contain', padding: '1.5rem' }} />
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: `radial-gradient(circle at 50% 100%, ${f.color}15, transparent 70%)`,
                      pointerEvents: 'none',
                    }} />
                  </div>

                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.6rem', letterSpacing: '-0.01em' }}>
                    {f.title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text2)', lineHeight: 1.7, fontWeight: 300 }}>
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', width: 600, height: 400,
            background: 'radial-gradient(ellipse, rgba(16,185,129,0.08) 0%, transparent 70%)',
            top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
          }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                fontSize: '0.75rem', textTransform: 'uppercase' as const,
                letterSpacing: '0.12em', color: 'var(--accent)', marginBottom: '1rem',
              }}>
                <span style={{ width: 18, height: 1, background: 'var(--accent)', display: 'inline-block' }} />
                Enjoy Remarkable Outcomes With Email API
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
              {stats.map((s) => (
                <div key={s.label} style={{
                  padding: '2.5rem 2rem', textAlign: 'center',
                  background: 'rgba(255,255,255,0.03)',
                  backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
                  border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20,
                  position: 'relative', overflow: 'hidden',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
                }}>
                  <div style={{
                    position: 'absolute', top: 0, left: '15%', right: '15%', height: 2,
                    background: `linear-gradient(90deg, transparent, ${s.color}, transparent)`,
                  }} />
                  <div style={{
                    fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800,
                    letterSpacing: '-0.04em', color: s.color, lineHeight: 1,
                    marginBottom: '0.75rem',
                    filter: `drop-shadow(0 0 16px ${s.color}66)`,
                  }}>
                    {s.val}
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text2)', fontWeight: 300, lineHeight: 1.6 }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Code snippet */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', width: 500, height: 400,
            background: 'radial-gradient(ellipse, rgba(16,185,129,0.07) 0%, transparent 70%)',
            top: '50%', left: '20%', pointerEvents: 'none',
          }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                fontSize: '0.75rem', textTransform: 'uppercase' as const,
                letterSpacing: '0.12em', color: 'var(--accent)', marginBottom: '1rem',
              }}>
                <span style={{ width: 18, height: 1, background: 'var(--accent)', display: 'inline-block' }} />
                Developer Friendly
              </div>
              <h2 style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800,
                letterSpacing: '-0.03em', color: 'var(--text)', marginBottom: '0.75rem',
              }}>
                Test our Email API for Free
              </h2>
              <p style={{
                fontSize: '0.95rem', color: 'var(--text2)', fontWeight: 300,
                maxWidth: 580, margin: '0 auto', lineHeight: 1.7,
              }}>
                Send single or bulk emails by making requests to our API. Provide the recipients' email addresses, message content, and additional data — our system handles the rest.
              </p>
            </div>

            <div style={{
              maxWidth: 780, margin: '0 auto',
              background: 'rgba(255,255,255,0.03)',
              backdropFilter: 'blur(32px)', WebkitBackdropFilter: 'blur(32px)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 20, overflow: 'hidden',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.07), 0 24px 60px rgba(0,0,0,0.3)',
            }}>
              <div style={{
                display: 'flex', alignItems: 'center',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                padding: '0 1rem', background: 'rgba(255,255,255,0.02)',
              }}>
                <div style={{ display: 'flex', gap: '0.4rem', marginRight: '1.5rem', padding: '0.75rem 0' }}>
                  {['#ff5f57', '#ffbd2e', '#28c840'].map((c) => (
                    <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c, opacity: 0.7 }} />
                  ))}
                </div>
                {codeTabs.map((tab) => (
                  <button key={tab} onClick={() => setActiveTab(tab)} style={{
                    padding: '0.75rem 1.25rem',
                    fontSize: '0.82rem', fontWeight: 500,
                    color: activeTab === tab ? '#fff' : 'var(--text3)',
                    background: 'transparent', border: 'none',
                    borderBottom: activeTab === tab ? '2px solid #10b981' : '2px solid transparent',
                    cursor: 'pointer', transition: 'all 0.2s',
                    fontFamily: 'Inter, sans-serif',
                  }}>
                    {tab}
                  </button>
                ))}
              </div>

              <pre style={{
                padding: '2rem', margin: 0,
                fontSize: '0.82rem', lineHeight: 1.7, color: '#e2e8f0',
                fontFamily: "'Fira Code', 'Cascadia Code', monospace",
                overflowX: 'auto' as const, background: 'transparent',
              }}>
                <code>{codeSnippets[activeTab]}</code>
              </pre>

              <div style={{ padding: '0.75rem 2rem', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'flex-end' }}>
                <a href="/docs" style={{ fontSize: '0.8rem', color: 'var(--accent)', textDecoration: 'none', fontWeight: 500 }}>
                  Learn more →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Embrace */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', width: 600, height: 400,
            background: 'radial-gradient(ellipse, rgba(16,185,129,0.08) 0%, transparent 70%)',
            top: '50%', right: '10%', pointerEvents: 'none',
          }} />

          <div style={{
            maxWidth: 1100, margin: '0 auto',
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            gap: '4rem', alignItems: 'center',
            position: 'relative', zIndex: 1,
          }}>
            <div style={{
              height: 340, borderRadius: 24,
              background: 'linear-gradient(135deg, rgba(16,185,129,0.12), rgba(59,130,246,0.08))',
              border: '1px solid rgba(255,255,255,0.08)',
              position: 'relative', overflow: 'hidden',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)',
            }}>
              <Image src="/images/sms-engage.svg" alt="Engage" fill style={{ objectFit: 'contain', padding: '1rem', filter: "invert(0.3)" }} />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'radial-gradient(circle at 30% 70%, rgba(16,185,129,0.15), transparent 60%)',
                pointerEvents: 'none',
              }} />
            </div>

            <div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                fontSize: '0.75rem', textTransform: 'uppercase' as const,
                letterSpacing: '0.12em', color: 'var(--accent)', marginBottom: '1rem',
              }}>
                <span style={{ width: 18, height: 1, background: 'var(--accent)', display: 'inline-block' }} />
                Digital Engagements
              </div>
              <h2 style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.4rem)', fontWeight: 800,
                letterSpacing: '-0.03em', lineHeight: 1.2,
                color: 'var(--text)', marginBottom: '1rem',
              }}>
                Embrace Powerful Digital Engagements
              </h2>
              <p style={{
                fontSize: '0.95rem', color: 'var(--text2)',
                lineHeight: 1.8, fontWeight: 300, marginBottom: '2rem',
              }}>
                Engage with us to enhance your marketing strategies by refining your customer journeys.
              </p>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' as const }}>
                <a href="https://app.baynix.ai" className="glass-btn glass-btn-primary">Start Now →</a>
                <a href="tel:+919004674356" style={{ fontSize: '0.85rem', color: 'var(--text2)', textDecoration: 'none', fontWeight: 400 }}>
                  📞 +91 90046 74356
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Enquiry form */}
        <section id="api-test" style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', width: 500, height: 400,
            background: 'radial-gradient(ellipse, rgba(16,185,129,0.07) 0%, transparent 70%)',
            top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
          }} />

          <div style={{ maxWidth: 600, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                fontSize: '0.75rem', textTransform: 'uppercase' as const,
                letterSpacing: '0.12em', color: 'var(--accent)', marginBottom: '1rem',
              }}>
                <span style={{ width: 18, height: 1, background: 'var(--accent)', display: 'inline-block' }} />
                Get Started
              </div>
              <h2 style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800,
                letterSpacing: '-0.03em', color: 'var(--text)', marginBottom: '0.5rem',
              }}>
                Quickly boost delivery rates!
              </h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--text2)', fontWeight: 300 }}>
                Get Started With Baynix
              </p>
            </div>

            <div style={{
              padding: '2.5rem',
              background: 'rgba(255,255,255,0.03)',
              backdropFilter: 'blur(32px)', WebkitBackdropFilter: 'blur(32px)',
              border: '1px solid rgba(255,255,255,0.08)', borderRadius: 24,
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.07), 0 24px 60px rgba(0,0,0,0.3)',
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', top: 0, left: '15%', right: '15%', height: 1,
                background: 'linear-gradient(90deg, transparent, rgba(16,185,129,0.5), transparent)',
              }} />

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '2rem' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.5rem' }}>Enquiry Sent!</h3>
                  <p style={{ color: 'var(--text2)', fontWeight: 300 }}>We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}>
                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ fontSize: '0.8rem', fontWeight: 500, color: 'var(--text2)', marginBottom: '0.4rem', display: 'block' }}>Name *</label>
                    <input type="text" placeholder="Your name" required
                      value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                      onFocus={() => setFocused('name')} onBlur={() => setFocused(null)}
                      style={getFocusStyle('name')} />
                  </div>
                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ fontSize: '0.8rem', fontWeight: 500, color: 'var(--text2)', marginBottom: '0.4rem', display: 'block' }}>Email *</label>
                    <input type="email" placeholder="your@email.com" required
                      value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                      onFocus={() => setFocused('email')} onBlur={() => setFocused(null)}
                      style={getFocusStyle('email')} />
                  </div>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ fontSize: '0.8rem', fontWeight: 500, color: 'var(--text2)', marginBottom: '0.4rem', display: 'block' }}>Message *</label>
                    <textarea placeholder="Tell us about your requirements..." required rows={4}
                      value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                      onFocus={() => setFocused('msg')} onBlur={() => setFocused(null)}
                      style={{ ...getFocusStyle('msg'), resize: 'vertical' as const, minHeight: 100 }} />
                  </div>
                  <button type="submit" className="glass-btn glass-btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    Enquiry Now →
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* Pricing CTA */}
        <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', width: 500, height: 300,
            background: 'radial-gradient(ellipse, rgba(16,185,129,0.08) 0%, transparent 70%)',
            top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
          }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              fontSize: '0.75rem', textTransform: 'uppercase' as const,
              letterSpacing: '0.12em', color: 'var(--accent)', marginBottom: '1rem',
            }}>
              <span style={{ width: 18, height: 1, background: 'var(--accent)', display: 'inline-block' }} />
              Email API Pricing
            </div>
            <h2 style={{
              fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800,
              letterSpacing: '-0.03em', color: 'var(--text)', marginBottom: '0.75rem',
            }}>
              Make connecting with customers as simple as possible
            </h2>
            <p style={{
              fontSize: '0.95rem', color: 'var(--text2)', fontWeight: 300,
              maxWidth: 560, margin: '0 auto 2rem', lineHeight: 1.7,
            }}>
              Our pay-as-you-go approach charges you per email sent. Free of setup, monthly, or any other fees.
            </p>
            <a href="#pricing" className="glass-btn glass-btn-primary">View Pricing →</a>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: '5rem 2rem', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', width: 500, height: 400,
            background: 'radial-gradient(ellipse, rgba(16,185,129,0.06) 0%, transparent 70%)',
            top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
          }} />

          <div style={{ maxWidth: 780, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                fontSize: '0.75rem', textTransform: 'uppercase' as const,
                letterSpacing: '0.12em', color: 'var(--accent)', marginBottom: '1rem',
              }}>
                <span style={{ width: 18, height: 1, background: 'var(--accent)', display: 'inline-block' }} />
                FAQ
              </div>
              <h2 style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800,
                letterSpacing: '-0.03em', color: 'var(--text)',
              }}>
                Email API for developers — FAQ's
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '0.75rem' }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.03)',
                  backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
                  border: openFaq === i ? '1px solid rgba(16,185,129,0.3)' : '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 16, overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  boxShadow: openFaq === i ? '0 8px 32px rgba(16,185,129,0.1)' : 'none',
                }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{
                      width: '100%', padding: '1.25rem 1.5rem',
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      background: 'transparent', border: 'none', cursor: 'pointer',
                      textAlign: 'left' as const, gap: '1rem',
                    }}
                  >
                    <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text)', fontFamily: 'Inter, sans-serif' }}>
                      {faq.q}
                    </span>
                    <div style={{
                      width: 24, height: 24, borderRadius: '50%',
                      background: openFaq === i ? 'rgba(16,185,129,0.2)' : 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0, transition: 'all 0.2s',
                      fontSize: '0.8rem', color: openFaq === i ? '#10b981' : 'var(--text3)',
                    }}>
                      {openFaq === i ? '−' : '+'}
                    </div>
                  </button>

                  {openFaq === i && (
                    <div style={{ padding: '0 1.5rem 1.25rem' }}>
                      <p style={{ fontSize: '0.875rem', color: 'var(--text2)', lineHeight: 1.8, fontWeight: 300 }}>
                        {faq.a}
                      </p>
                    </div>
                  )}
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