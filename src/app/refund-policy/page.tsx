import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppWidget from '@/components/WhatsAppWidget'
import LegalTOC from '@/components/LegalTOC'

export const metadata: Metadata = {
  title: 'Refund Policy — Baynix',
  description: 'Read the Refund Policy for Baynix. Understand our return and refund terms for products and services.',
  alternates: { canonical: 'https://baynix.ai/refund-policy' },
}

const sections = [
  { id: 'introduction',  label: '1. Introduction' },
  { id: 'eligibility',   label: '2. Eligibility for Refunds' },
  { id: 'criteria',      label: '3. Acceptable Criteria' },
  { id: 'non-refund',    label: '4. Non-Refundable Items' },
  { id: 'process',       label: '5. Requesting a Refund' },
  { id: 'partial',       label: '6. Partial Refunds' },
  { id: 'late',          label: '7. Late or Missing Refunds' },
  { id: 'changes',       label: '8. Changes to This Policy' },
  { id: 'contact',       label: '9. Contact Us' },
]

export default function RefundPolicyPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--bg)', minHeight: '100vh', paddingTop: 64, color: 'var(--text)' }}>

        {/* Hero */}
        <section style={{ padding: '4rem 2rem 3rem', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(ellipse 800px 400px at 50% 100%, rgba(99,102,241,0.08) 0%, transparent 70%)' }} />
          <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', padding: '0.3rem 0.9rem', background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.25)', borderRadius: 100, fontSize: '0.72rem', fontWeight: 700, color: '#a5b4fc', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
              Legal
            </div>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '0.75rem' }}>
              Refund Policy
            </h1>
            <p style={{ fontSize: '0.95rem', color: 'var(--text3)', lineHeight: 1.7, marginBottom: '1rem' }}>
              Our commitment to your satisfaction.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.8rem', color: 'var(--text3)' }}>
              <span>Last updated: April 2025</span>
              <span>·</span>
              <a href="mailto:hello@baynix.ai" style={{ color: '#a5b4fc', textDecoration: 'none' }}>hello@baynix.ai</a>
            </div>
          </div>
        </section>

        {/* Body */}
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '4rem 2rem', display: 'grid', gridTemplateColumns: '220px 1fr', gap: '3.5rem', alignItems: 'start' }} className="battlecard-grid">

          {/* Sticky TOC */}
          <aside style={{ position: 'sticky', top: 90 }} className="battlecard-sidebar">
            <LegalTOC sections={sections} />
          </aside>

          {/* Content */}
          <article style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>

            <Section id="introduction" title="1. Introduction">
              <p>At Baynix, we strive to provide the highest quality of services to our customers. If you are not entirely satisfied with your purchase, we're here to help. This refund policy outlines the conditions under which refunds will be granted.</p>
            </Section>

            <Section id="eligibility" title="2. Eligibility for Refunds">
              <p>To be eligible for a refund, the following conditions must be met:</p>
              <ul>
                <li>You must request a refund within <strong style={{ color: 'var(--text2)', fontWeight: 600 }}>3 days</strong> of your purchase.</li>
                <li>The reason for the refund request must be valid and fall under our acceptable criteria for refunds.</li>
              </ul>
            </Section>

            <Section id="criteria" title="3. Acceptable Criteria for Refunds">
              <p>Refunds may be granted for the following reasons:</p>
              <ul>
                <li>Service not delivered as described.</li>
                <li>Technical issues that cannot be resolved by our support team.</li>
                <li>Unauthorized transactions (e.g., if your payment method was used fraudulently).</li>
              </ul>
            </Section>

            <Section id="non-refund" title="4. Non-Refundable Items">
              <p>Certain items are non-refundable, including but not limited to:</p>
              <ul>
                <li>Services that have already been rendered.</li>
                <li>One-time setup fees.</li>
                <li>Custom development work.</li>
              </ul>
            </Section>

            <Section id="process" title="5. Process for Requesting a Refund">
              <p>To request a refund, please follow these steps:</p>
              <ul>
                <li>Contact our customer support team at <a href="mailto:hello@baynix.ai" style={{ color: '#a5b4fc', textDecoration: 'none' }}>hello@baynix.ai</a> with your order details and the reason for the refund request.</li>
                <li>Our team will review your request and respond within <strong style={{ color: 'var(--text2)', fontWeight: 600 }}>3 business days</strong>.</li>
                <li>If your request is approved, the refund will be processed and a credit will be applied to your original method of payment within <strong style={{ color: 'var(--text2)', fontWeight: 600 }}>3 days</strong>.</li>
              </ul>
            </Section>

            <Section id="partial" title="6. Partial Refunds">
              <p>In some cases, partial refunds may be granted at the discretion of Baynix. This will be evaluated on a case-by-case basis.</p>
            </Section>

            <Section id="late" title="7. Late or Missing Refunds">
              <p>If you haven't received a refund within the specified time frame, please:</p>
              <ul>
                <li>Check your bank account again.</li>
                <li>Contact your credit card company — it may take some time before your refund is officially posted.</li>
                <li>Contact your bank, as there is often some processing time before a refund is posted.</li>
              </ul>
              <p>If you've done all of this and still have not received your refund, please contact us at <a href="mailto:hello@baynix.ai" style={{ color: '#a5b4fc', textDecoration: 'none' }}>hello@baynix.ai</a>.</p>
            </Section>

            <Section id="changes" title="8. Changes to This Refund Policy">
              <p>Baynix reserves the right to modify this refund policy at any time. Any changes will be posted on this page, and you should review this policy periodically.</p>
            </Section>

            <Section id="contact" title="9. Contact Us">
              <p>If you have any questions about our refund policy, please contact us at:</p>
              <div style={{
                marginTop: '0.5rem',
                padding: '1.25rem 1.5rem',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid var(--border)',
                borderRadius: 12,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
              }}>
                <p style={{ margin: 0 }}>
                  <strong style={{ color: 'var(--text2)', fontWeight: 600 }}>Email: </strong>
                  <a href="mailto:hello@baynix.ai" style={{ color: '#a5b4fc', textDecoration: 'none' }}>hello@baynix.ai</a>
                </p>
                <p style={{ margin: 0 }}>
                  <strong style={{ color: 'var(--text2)', fontWeight: 600 }}>Phone: </strong>
                  <a href="tel:9004674356" style={{ color: '#a5b4fc', textDecoration: 'none' }}>9004674356</a>
                </p>
                <p style={{ margin: 0 }}>
                  <strong style={{ color: 'var(--text2)', fontWeight: 600 }}>Address: </strong>
                  B012, Tower B, ATS Bouquet, Sector 132, Noida 201304
                </p>
              </div>
            </Section>

          </article>
        </div>
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  )
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} style={{ scrollMarginTop: 100 }}>
      <h2 style={{
        fontSize: '1.05rem',
        fontWeight: 700,
        color: 'var(--text)',
        marginBottom: '1rem',
        paddingBottom: '0.6rem',
        borderBottom: '1px solid var(--border)',
        letterSpacing: '-0.01em',
      }}>
        {title}
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', color: 'var(--text3)', fontSize: '0.875rem', lineHeight: 1.8, fontWeight: 300 }}>
        {children}
      </div>
    </section>
  )
}
