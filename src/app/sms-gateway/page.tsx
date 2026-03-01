'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useState } from 'react'
import Image from 'next/image'

const features = [
  {
    title: 'Engage across the world',
    desc: 'By teaming up with us, you can talk to target people not just in your own country, but in other countries too.',
    color: '#3b82f6',
    illustration: '/images/sms-global.svg',
  },
  {
    title: 'Media Support',
    desc: 'With our online tools, you can send videos, pictures, and fun animations in your text messages, making them more interesting and enjoyable.',
    color: '#6366f1',
    illustration: '/images/sms-media.svg',
  },
  {
    title: 'Real Time Insights',
    desc: "Our reporting dashboard lets you see detailed reports and track your messages and links to see how well they're working.",
    color: '#22d3ee',
    illustration: '/images/sms-insights.svg',
  },
  {
    title: 'More Convenience',
    desc: "We offer our customers simple options to join and leave our services, so they don't receive unwanted spam messages.",
    color: '#10b981',
    illustration: '/images/sms-convenience.svg',
  },
  {
    title: 'Multilingual Support',
    desc: 'Speak to your customers in a variety of languages so that you may interact with them in their preferred language.',
    color: '#f59e0b',
    illustration: '/images/sms-multilingual.svg',
  },
  {
    title: 'Support 24 x 7',
    desc: 'Working with us gives you access to our help 24/7. Our quick response teams are here to help you with any problems.',
    color: '#a78bfa',
    illustration: '/images/sms-support.svg',
  },
]

const whyChoose = [
  { label: 'Seamless Integration', icon: '🔗', color: '#3b82f6' },
  { label: 'Reliable Delivery', icon: '✅', color: '#10b981' },
  { label: 'Scalable Solutions', icon: '📈', color: '#6366f1' },
  { label: 'Comprehensive Support', icon: '🛟', color: '#22d3ee' },
]

const codeTabs = ['cURL', 'NodeJS', 'Python', 'PHP']

const codeSnippets: Record<string, string> = {
  cURL: `curl -X POST https://api.baynix.ai/sms/send \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "sender": "BAYNIX",
    "to": "+919876543210",
    "text": "Hello from Baynix SMS Gateway!",
    "type": "TRANS"
  }'`,

  NodeJS: `const axios = require('axios');

const response = await axios.post(
  'https://api.baynix.ai/sms/send',
  {
    sender: 'BAYNIX',
    to: '+919876543210',
    text: 'Hello from Baynix SMS Gateway!',
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

url = "https://api.baynix.ai/sms/send"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}
payload = {
    "sender": "BAYNIX",
    "to": "+919876543210",
    "text": "Hello from Baynix SMS Gateway!",
    "type": "TRANS"
}

response = requests.post(url, json=payload, headers=headers)
print(response.json())`,

  PHP: `<?php
$curl = curl_init();

curl_setopt_array($curl, [
  CURLOPT_URL => "https://api.baynix.ai/sms/send",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_POST => true,
  CURLOPT_HTTPHEADER => [
    "Authorization: Bearer YOUR_API_KEY",
    "Content-Type: application/json"
  ],
  CURLOPT_POSTFIELDS => json_encode([
    "sender" => "BAYNIX",
    "to"     => "+919876543210",
    "text"   => "Hello from Baynix SMS Gateway!",
    "type"   => "TRANS"
  ])
]);

$response = curl_exec($curl);
echo $response;`,
}

const faqs = [
  {
    q: 'Are there any limitations or restrictions when using an SMS Gateway API?',
    a: "SMS Gateway APIs typically have rate limits, character limits per message (160 chars for standard SMS), and country-specific regulations. Baynix provides clear documentation on all limits, and our enterprise plans offer higher throughput with dedicated support to help you stay compliant in every region.",
  },
  {
    q: 'What is an API key, and why do I need it?',
    a: 'An API key is a unique identifier used to authenticate your requests to the Baynix SMS Gateway. It ensures that only authorized applications can send messages through your account, tracks usage for billing purposes, and allows you to manage permissions per integration.',
  },
  {
    q: 'Can SMS Gateway APIs Work Even Without Internet?',
    a: "SMS Gateway APIs require an internet connection to communicate with our cloud platform, which then routes messages through telecom networks. However, once a message is submitted to our gateway, delivery to the end recipient happens over the telecom network, independent of the sender's connectivity.",
  },
  {
    q: 'How can I keep my SMS messages secure?',
    a: 'Baynix uses TLS encryption for all API communications, stores messages securely, and provides API key rotation, IP whitelisting, and two-factor authentication. We recommend always using HTTPS, rotating your API keys regularly, and never exposing keys in client-side code.',
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

export default function SmsGatewayPage() {
  const [activeTab, setActiveTab] = useState('cURL')
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [focused, setFocused] = useState<string | null>(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const getFocusStyle = (field: string) =>
    focused === field
      ? {
          ...inputStyle,
          border: '1px solid rgba(99,102,241,0.5)',
          background: 'rgba(255,255,255,0.06)',
          boxShadow: '0 0 0 3px rgba(99,102,241,0.1)',
        }
      : inputStyle

  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--bg)', minHeight: '100vh', paddingTop: 64, color: 'var(--text)' }}>

        {/* ── HERO ── */}
        <section style={{ padding: '6rem 2rem', position: 'relative', overflow: 'hidden', borderBottom: '1px solid var(--border)' }}>
          <div style={{
            position: 'absolute', width: 700, height: 500,
            background: 'radial-gradient(ellipse, rgba(99,102,241,0.1) 0%, transparent 70%)',
            top: '50%', left: '30%', transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', width: 400, height: 400,
            background: 'radial-gradient(ellipse, rgba(34,211,238,0.07) 0%, transparent 70%)',
            top: '20%', right: '5%', pointerEvents: 'none',
          }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>
            <div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                padding: '0.3rem 0.9rem',
                background: 'rgba(99,102,241,0.15)',
                border: '1px solid rgba(99,102,241,0.3)',
                borderRadius: 100, fontSize: '0.72rem', fontWeight: 700,
                color: '#a78bfa', letterSpacing: '0.1em',
                textTransform: 'uppercase' as const, marginBottom: '1.5rem',
              }}>
                No Experience Required
              </div>

              <h1 style={{
                fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)',
                fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1,
                color: 'var(--text)', marginBottom: '1.5rem',
              }}>
                Future-proof of{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #60a5fa, #a78bfa, #22d3ee)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                }}>
                  SMS GATEWAY
                </span>
              </h1>

              <p style={{
                fontSize: '1rem', color: 'var(--text2)', lineHeight: 1.8,
                fontWeight: 300, marginBottom: '2rem', maxWidth: 480,
              }}>
                Automate your texts effortlessly with the Baynix SMS Gateway API. Our popular REST gateway offers an intelligent solution for sending bulk text messages across various mobile networks.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' as const }}>
                <a href="https://app.baynix.ai" className="glass-btn glass-btn-primary">Try for Free →</a>
                <a href="#enquiry" className="glass-btn glass-btn-secondary">Get Started</a>
              </div>
            </div>

            {/* Hero illustration */}
            <div style={{
              height: 380, borderRadius: 24,
              background: 'linear-gradient(135deg, rgba(99,102,241,0.12), rgba(59,130,246,0.08), rgba(34,211,238,0.06))',
              border: '1px solid rgba(255,255,255,0.08)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              position: 'relative', overflow: 'hidden',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)',
            }}>
              <Image src="/images/sms-hero.svg" alt="SMS Gateway" fill style={{ objectFit: 'contain', padding: '2rem' }} />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'radial-gradient(circle at 70% 30%, rgba(99,102,241,0.1), transparent 60%)',
                pointerEvents: 'none',
              }} />
            </div>
          </div>
        </section>

        {/* ── WHAT IS SMS GATEWAY ── */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', width: 500, height: 300,
            background: 'radial-gradient(ellipse, rgba(59,130,246,0.07) 0%, transparent 70%)',
            top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
          }} />

          <div style={{ maxWidth: 780, margin: '0 auto', position: 'relative', zIndex: 1 }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                fontSize: '0.75rem', textTransform: 'uppercase' as const,
                letterSpacing: '0.12em', color: 'var(--accent)', marginBottom: '1rem',
              }}>
                <span style={{ width: 18, height: 1, background: 'var(--accent)', display: 'inline-block' }} />
                What is a SMS Gateway?
              </div>
              <h2 style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.4rem)', fontWeight: 800,
                letterSpacing: '-0.03em', lineHeight: 1.2,
                color: 'var(--text)', marginBottom: '1.25rem',
              }}>
                The bridge between your app and every mobile
              </h2>
              <p style={{
                fontSize: '0.95rem', color: 'var(--text2)', lineHeight: 1.8,
                fontWeight: 300, marginBottom: '1rem',
              }}>
                An SMS API is a set of instructions that enables applications to send SMS via an SMS Gateway, adding native bulk SMS capabilities to existing software and applications.
              </p>
              <p style={{
                fontSize: '0.95rem', color: 'var(--text2)', lineHeight: 1.8,
                fontWeight: 300,
              }}>
                In other words, the Baynix SMS Gateway API allows you to integrate SMS functionality seamlessly into your existing software platforms — no telecoms expertise needed.
              </p>
          </div>
        </section>

        {/* ── FEATURES GRID ── */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', width: 500, height: 300,
            background: 'radial-gradient(ellipse, rgba(34,211,238,0.06) 0%, transparent 70%)',
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
                Key Features
              </div>
              <h2 style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800,
                letterSpacing: '-0.03em', color: 'var(--text)', marginBottom: '0.75rem',
              }}>
                Everything you need in an SMS Gateway
              </h2>
              <p style={{
                fontSize: '0.95rem', color: 'var(--text2)', fontWeight: 300,
                maxWidth: 560, margin: '0 auto', lineHeight: 1.7,
              }}>
                Built for developers and businesses alike — powerful features that make global SMS simple.
              </p>
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
                    position: 'absolute', top: 0, left: '15%', right: '15%',
                    height: 1,
                    background: `linear-gradient(90deg, transparent, ${f.color}66, transparent)`,
                  }} />

                  <div style={{
                    width: '100%', height: 140, borderRadius: 12,
                    background: `linear-gradient(135deg, ${f.color}12, ${f.color}06)`,
                    border: `1px solid ${f.color}18`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '1.25rem', position: 'relative', overflow: 'hidden',
                  }}>
                    <Image src={f.illustration} alt={f.title} fill style={{ objectFit: 'contain', padding: '1rem' }} />
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

        {/* ── WHY CHOOSE ── */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', width: 600, height: 400,
            background: 'radial-gradient(ellipse, rgba(99,102,241,0.07) 0%, transparent 70%)',
            top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
          }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>
            <div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                fontSize: '0.75rem', textTransform: 'uppercase' as const,
                letterSpacing: '0.12em', color: 'var(--accent)', marginBottom: '1rem',
              }}>
                <span style={{ width: 18, height: 1, background: 'var(--accent)', display: 'inline-block' }} />
                Why Choose Baynix
              </div>
              <h2 style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.4rem)', fontWeight: 800,
                letterSpacing: '-0.03em', lineHeight: 1.2,
                color: 'var(--text)', marginBottom: '1.25rem',
              }}>
                Why Choose Baynix's SMS Gateway API?
              </h2>
              <p style={{
                fontSize: '0.95rem', color: 'var(--text2)', lineHeight: 1.8,
                fontWeight: 300, marginBottom: '2rem',
              }}>
                Our popular REST gateway API offers an intelligent solution for sending bulk text messages across various mobile networks. We also provide HTTP, FTP, and SMPP APIs, along with APIs for our voice, email, post, and fax services.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}>
                {whyChoose.map((item) => (
                  <div key={item.label} style={{
                    display: 'flex', alignItems: 'center', gap: '0.75rem',
                    padding: '0.85rem 1rem',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 12,
                    backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
                  }}>
                    <span style={{
                      width: 32, height: 32, borderRadius: 8, flexShrink: 0,
                      background: `${item.color}15`,
                      border: `1px solid ${item.color}25`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '0.9rem',
                    }}>
                      {item.icon}
                    </span>
                    <span style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--text)' }}>
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Illustration */}
            <div style={{
              height: 360, borderRadius: 24,
              background: 'linear-gradient(135deg, rgba(99,102,241,0.1), rgba(59,130,246,0.07))',
              border: '1px solid rgba(255,255,255,0.08)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              position: 'relative', overflow: 'hidden',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)',
            }}>
              <Image src="/images/sms-engage.svg" alt="Why choose Baynix" fill style={{ objectFit: 'contain', padding: '2rem', filter: 'invert(0.3)' }} />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'radial-gradient(circle at 60% 40%, rgba(99,102,241,0.12), transparent 60%)',
                pointerEvents: 'none',
              }} />
            </div>
          </div>
        </section>

        {/* ── CODE SNIPPET ── */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', width: 500, height: 400,
            background: 'radial-gradient(ellipse, rgba(59,130,246,0.07) 0%, transparent 70%)',
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
                Integrate in minutes
              </h2>
              <p style={{
                fontSize: '0.95rem', color: 'var(--text2)', fontWeight: 300,
                maxWidth: 560, margin: '0 auto', lineHeight: 1.7,
              }}>
                Send single or bulk messages with a simple REST call. Fill in the recipient details and we'll handle the rest across HTTP, FTP, and SMPP.
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
              {/* Tab bar */}
              <div style={{
                display: 'flex', alignItems: 'center',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                padding: '0 1rem',
                background: 'rgba(255,255,255,0.02)',
              }}>
                <div style={{ display: 'flex', gap: '0.4rem', marginRight: '1.5rem', padding: '0.75rem 0' }}>
                  {['#ff5f57', '#ffbd2e', '#28c840'].map((c) => (
                    <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c, opacity: 0.7 }} />
                  ))}
                </div>
                {codeTabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    style={{
                      padding: '0.75rem 1.25rem',
                      fontSize: '0.82rem', fontWeight: 500,
                      color: activeTab === tab ? '#fff' : 'var(--text3)',
                      background: 'transparent', border: 'none',
                      borderBottom: activeTab === tab ? '2px solid #6366f1' : '2px solid transparent',
                      cursor: 'pointer', transition: 'all 0.2s',
                      fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <pre style={{
                padding: '2rem', margin: 0,
                fontSize: '0.82rem', lineHeight: 1.7,
                color: '#e2e8f0',
                fontFamily: "'Fira Code', 'Cascadia Code', monospace",
                overflowX: 'auto' as const,
                background: 'transparent',
              }}>
                <code>{codeSnippets[activeTab]}</code>
              </pre>

              <div style={{
                padding: '0.75rem 2rem',
                borderTop: '1px solid rgba(255,255,255,0.06)',
                display: 'flex', justifyContent: 'flex-end',
              }}>
                <a href="/docs" style={{ fontSize: '0.8rem', color: 'var(--accent)', textDecoration: 'none', fontWeight: 500 }}>
                  View full docs →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── EMBRACE / CTA SPLIT ── */}
        <section style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', width: 600, height: 400,
            background: 'radial-gradient(ellipse, rgba(167,139,250,0.08) 0%, transparent 70%)',
            top: '50%', right: '10%', pointerEvents: 'none',
          }} />

          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>
            <div style={{
              height: 340, borderRadius: 24,
              background: 'linear-gradient(135deg, rgba(167,139,250,0.12), rgba(99,102,241,0.08))',
              border: '1px solid rgba(255,255,255,0.08)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              position: 'relative', overflow: 'hidden',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)',
            }}>
              <Image src="/images/sms-engage.svg" alt="Digital Engagements" fill style={{ objectFit: 'contain', padding: '1rem', filter: 'invert(0.3)' }} />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'radial-gradient(circle at 30% 70%, rgba(167,139,250,0.15), transparent 60%)',
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

        {/* ── ENQUIRY FORM ── */}
        <section id="enquiry" style={{ padding: '5rem 2rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', width: 500, height: 400,
            background: 'radial-gradient(ellipse, rgba(59,130,246,0.07) 0%, transparent 70%)',
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
                position: 'absolute', top: 0, left: '15%', right: '15%',
                height: 1,
                background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.5), transparent)',
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
                    <input
                      type="text" placeholder="Your name" required
                      value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                      onFocus={() => setFocused('name')} onBlur={() => setFocused(null)}
                      style={getFocusStyle('name')}
                    />
                  </div>
                  <div style={{ marginBottom: '1rem' }}>
                    <label style={{ fontSize: '0.8rem', fontWeight: 500, color: 'var(--text2)', marginBottom: '0.4rem', display: 'block' }}>Email *</label>
                    <input
                      type="email" placeholder="your@email.com" required
                      value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                      onFocus={() => setFocused('email')} onBlur={() => setFocused(null)}
                      style={getFocusStyle('email')}
                    />
                  </div>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ fontSize: '0.8rem', fontWeight: 500, color: 'var(--text2)', marginBottom: '0.4rem', display: 'block' }}>Message *</label>
                    <textarea
                      placeholder="Tell us about your requirements..." required rows={4}
                      value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                      onFocus={() => setFocused('msg')} onBlur={() => setFocused(null)}
                      style={{ ...getFocusStyle('msg'), resize: 'vertical' as const, minHeight: 100 }}
                    />
                  </div>
                  <button type="submit" className="glass-btn glass-btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    Enquiry Now →
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* ── PRICING CTA ── */}
        <section style={{ padding: '4rem 2rem', borderBottom: '1px solid var(--border)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', width: 500, height: 300,
            background: 'radial-gradient(ellipse, rgba(99,102,241,0.08) 0%, transparent 70%)',
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
              SMS Gateway Pricing
            </div>
            <h2 style={{
              fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800,
              letterSpacing: '-0.03em', color: 'var(--text)', marginBottom: '0.75rem',
            }}>
              Pay only for what you use
            </h2>
            <p style={{
              fontSize: '0.95rem', color: 'var(--text2)', fontWeight: 300,
              maxWidth: 560, margin: '0 auto 2rem', lineHeight: 1.7,
            }}>
              Our pay-as-you-go approach charges you per sent message — free of setup, monthly, or any other hidden fees.
            </p>
            <a href="#pricing" className="glass-btn glass-btn-primary">View Pricing →</a>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section style={{ padding: '5rem 2rem', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', width: 500, height: 400,
            background: 'radial-gradient(ellipse, rgba(99,102,241,0.06) 0%, transparent 70%)',
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
                SMS Gateway for developers — FAQ's
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '0.75rem' }}>
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
                    border: openFaq === i ? '1px solid rgba(99,102,241,0.3)' : '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 16, overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    boxShadow: openFaq === i ? '0 8px 32px rgba(99,102,241,0.1)' : 'none',
                  }}
                >
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
                      background: openFaq === i ? 'rgba(99,102,241,0.2)' : 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0, transition: 'all 0.2s',
                      fontSize: '0.8rem', color: openFaq === i ? '#a78bfa' : 'var(--text3)',
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