import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppWidget from '@/components/WhatsAppWidget'
import LegalTOC from '@/components/LegalTOC'

export const metadata: Metadata = {
  title: 'Terms of Service — Baynix',
  description: 'Read the Terms of Service for Baynix. These terms govern your use of our platform, products, and services.',
  alternates: { canonical: 'https://baynix.ai/terms-of-service' },
}

const sections = [
  { id: 'overview',     label: 'Overview' },
  { id: 'section-0',   label: 'Section 0 – Usage Terms' },
  { id: 'section-1',   label: 'Section 1 – Online Store Terms' },
  { id: 'section-2',   label: 'Section 2 – Accuracy of Information' },
  { id: 'section-3',   label: 'Section 3 – Modifications & Prices' },
  { id: 'section-4',   label: 'Section 4 – Products or Services' },
  { id: 'section-5',   label: 'Section 5 – Billing & Account' },
  { id: 'section-6',   label: 'Section 6 – Optional Tools' },
  { id: 'section-7',   label: 'Section 7 – Third-Party Links' },
  { id: 'section-8',   label: 'Section 8 – User Submissions' },
  { id: 'section-9',   label: 'Section 9 – Personal Information' },
  { id: 'section-10',  label: 'Section 10 – Errors & Omissions' },
  { id: 'section-11',  label: 'Section 11 – Prohibited Uses' },
  { id: 'section-12',  label: 'Section 12 – Liability' },
  { id: 'section-13',  label: 'Section 13 – Indemnification' },
  { id: 'section-14',  label: 'Section 14 – Severability' },
  { id: 'section-15',  label: 'Section 15 – Termination' },
  { id: 'section-16',  label: 'Section 16 – Entire Agreement' },
  { id: 'section-17',  label: 'Section 17 – Governing Law' },
  { id: 'section-18',  label: 'Section 18 – Changes to Terms' },
  { id: 'section-19',  label: 'Section 19 – Contact Information' },
]

export default function TermsOfServicePage() {
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
              Terms of Service
            </h1>
            <p style={{ fontSize: '0.95rem', color: 'var(--text3)', lineHeight: 1.7, marginBottom: '1rem' }}>
              Please read our terms carefully before accessing or using our platform.
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
          <article style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', fontSize: '0.9rem', lineHeight: 1.8, color: 'var(--text2)' }}>

            <Section id="overview" title="Overview">
              <p>This website is operated by Baynix. Throughout the site, the terms "we", "us" and "our" refer to Baynix. Baynix offers this website, including all information, tools, and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies, and notices stated here.</p>
              <p>By visiting our site and/or purchasing something from us, you engage in our "Service" and agree to be bound by the following terms and conditions ("Terms of Service," "Terms"), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/or contributors of content.</p>
              <p>Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services.</p>
              <p>Any new features or tools that are added to the current store shall also be subject to the Terms of Service. We reserve the right to update, change or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes.</p>
            </Section>

            <Section id="section-0" title="Section 0 – Usage Terms">
              <ul>
                <li>The <strong>"Seller"</strong> refers to Baynix and its associates.</li>
                <li>The <strong>"Buyer"</strong> refers to the buying entity or individual using this online portal.</li>
                <li>Buyer shall indemnify the Seller and keep Seller indemnified and save harmless, at all times against any and all claims, losses, damages, costs, liabilities, and expenses incurred, suffered, or paid by the Seller in connection with or arising out of sending messages using Seller's Platform.</li>
                <li>The Buyer shall at all times ensure that all the rules, regulations, and guidelines of the TRAI and all amendments thereto, and all other applicable rules and regulations relating to message sending, are duly complied with.</li>
                <li>Buyer agrees not to use transactional accounts/connects for sending promotional/unsolicited communications.</li>
                <li>This indemnity is without prejudice to the Seller's other rights, privileges, powers, and remedies in law, and the Seller may delay enforcing its rights without at any time losing them.</li>
                <li>Seller may stop/terminate this facility by giving seven days prior written notice to Buyer/Customers. Such termination shall not affect anything done or any rights or liabilities accrued prior to termination, and all indemnities given by Buyer shall survive termination.</li>
                <li>Buyer unconditionally agrees to forthwith pay and make good any losses, claims, damages, demands, costs, penalties, and expenses incurred by Seller upon demand, without any demur. The decision of Seller shall be final and binding in this context.</li>
              </ul>
            </Section>

            <Section id="section-1" title="Section 1 – Online Store Terms">
              <p>By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence.</p>
              <p>You may not use our products for any illegal or unauthorized purpose, nor may you violate any laws in your jurisdiction (including but not limited to copyright laws).</p>
              <p>You must not transmit any worms, viruses, or any code of a destructive nature. A breach or violation of any of the Terms will result in an immediate termination of your Services.</p>
              <p>We reserve the right to refuse service to anyone for any reason at any time. TRAI (Telecom Regulatory Authority of India) policies are applicable for all SMS and Telephony products. Users must not transmit any unwarranted text and/or media that is not tenable under Indian law.</p>
              <p>You agree not to reproduce, duplicate, copy, sell, resell, or exploit any portion of the Service without express written permission by us.</p>
            </Section>

            <Section id="section-2" title="Section 2 – Accuracy, Completeness, and Timeliness of Information">
              <p>We are not responsible if the information made available on this site is not accurate, complete, or current. The material on this site is provided for general information only and should not be relied upon as the sole basis for making decisions without consulting primary, more accurate, or more timely sources of information. Any reliance on the material on this site is at your own risk.</p>
              <p>We reserve the right to modify the contents of this site at any time, but we have no obligation to update any information on our site.</p>
            </Section>

            <Section id="section-3" title="Section 3 – Modifications to the Service and Prices">
              <p>Prices for our products are subject to change without notice.</p>
              <p>We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice. We shall not be liable to you or to any third party for any modification, price change, suspension, or discontinuance of the Service.</p>
            </Section>

            <Section id="section-4" title="Section 4 – Products or Services">
              <p>Certain products or services may be available exclusively online through the website and may have limited quantities, subject to return or exchange only according to our Return Policy.</p>
              <p>We reserve the right to limit the sales of our products or Services to any person, geographic region, or jurisdiction. All descriptions of products or product pricing are subject to change at any time without notice, at our sole discretion. We reserve the right to discontinue any product at any time.</p>
              <p>We do not warrant that the quality of any products, services, information, or other material purchased or obtained by you will meet your expectations, or that any errors in the Service will be corrected.</p>
            </Section>

            <Section id="section-5" title="Section 5 – Accuracy of Billing and Account Information">
              <p>We reserve the right to refuse any order you place with us. We may, at our sole discretion, limit or cancel quantities purchased per person, per household, or per order.</p>
              <p>You agree to provide current, complete, and accurate purchase and account information for all purchases made at our store. You agree to promptly update your account and other information, including your email address and credit card numbers and expiration dates, so that we can complete your transactions and contact you as needed.</p>
            </Section>

            <Section id="section-6" title="Section 6 – Optional Tools">
              <p>We may provide you with access to third-party tools over which we neither monitor nor have any control nor input. You acknowledge and agree that we provide access to such tools "as is" and "as available" without any warranties, representations, or conditions of any kind and without any endorsement.</p>
              <p>Any use by you of optional tools offered through the site is entirely at your own risk and discretion and you should ensure that you are familiar with and approve of the terms on which tools are provided by the relevant third-party provider(s).</p>
            </Section>

            <Section id="section-7" title="Section 7 – Third-Party Links">
              <p>Certain content, products, and services available via our Service may include materials from third parties. Third-party links on this site may direct you to third-party websites that are not affiliated with us.</p>
              <p>We are not responsible for examining or evaluating the content or accuracy of third-party websites, and we do not warrant and will not have any liability or responsibility for any third-party materials or websites.</p>
              <p>We are not liable for any harm or damages related to the purchase or use of goods, services, resources, or content from any third-party websites. Complaints, claims, concerns, or questions regarding third-party products should be directed to the third party.</p>
            </Section>

            <Section id="section-8" title="Section 8 – User Comments, Feedback, and Other Submissions">
              <p>If you send creative ideas, suggestions, proposals, plans, or other materials (collectively, 'comments'), you agree that we may, at any time, without restriction, edit, copy, publish, distribute, translate, and otherwise use in any medium any comments that you forward to us.</p>
              <p>We may, but have no obligation to, monitor, edit, or remove content that we determine in our sole discretion are unlawful, offensive, threatening, libelous, defamatory, pornographic, obscene, or otherwise objectionable or violates any party's intellectual property or these Terms of Service.</p>
              <p>You are solely responsible for any comments you make and their accuracy. We take no responsibility and assume no liability for any comments posted by you or any third party.</p>
            </Section>

            <Section id="section-9" title="Section 9 – Personal Information">
              <p>Your submission of personal information through the store is governed by our <a href="/privacy-policy" style={{ color: '#a5b4fc', textDecoration: 'none' }}>Privacy Policy</a>.</p>
            </Section>

            <Section id="section-10" title="Section 10 – Errors, Inaccuracies, and Omissions">
              <p>Occasionally there may be information on our site or in the Service that contains typographical errors, inaccuracies, or omissions that may relate to product descriptions, pricing, promotions, offers, transit times, and availability. We reserve the right to correct any errors, inaccuracies, or omissions, and to change or update information or cancel orders if any information in the Service is inaccurate at any time without prior notice.</p>
            </Section>

            <Section id="section-11" title="Section 11 – Prohibited Uses">
              <p>In addition to other prohibitions as set forth in the Terms of Service, you are prohibited from using the site or its content:</p>
              <ul>
                <li>(a) for any unlawful purpose;</li>
                <li>(b) to solicit others to perform or participate in any unlawful acts;</li>
                <li>(c) to violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances;</li>
                <li>(d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others;</li>
                <li>(e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability;</li>
                <li>(f) to submit false or misleading information;</li>
                <li>(g) to upload or transmit viruses or any other type of malicious code;</li>
                <li>(h) to collect or track the personal information of others;</li>
                <li>(i) to spam, phish, pharm, pretext, spider, crawl, or scrape;</li>
                <li>(j) for any obscene or immoral purpose; or</li>
                <li>(k) to interfere with or circumvent the security features of the Service or any related website.</li>
              </ul>
              <p>We reserve the right to terminate your use of the Service or any related website for violating any of the prohibited uses.</p>
            </Section>

            <Section id="section-12" title="Section 12 – Disclaimer of Warranties; Limitation of Liability">
              <p>We do not guarantee, represent, or warrant that your use of our service will be uninterrupted, timely, secure, or error-free. We do not warrant that the results that may be obtained from the use of the service will be accurate or reliable.</p>
              <p>You expressly agree that your use of, or inability to use, the service is at your sole risk. The service and all products and services delivered to you through the service are provided 'as is' and 'as available' without any representation, warranties, or conditions of any kind, either express or implied.</p>
              <p>In no case shall Baynix, our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers, or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind, including, without limitation, lost profits, lost revenue, lost savings, loss of data, or replacement costs, arising from your use of any of the service or any products procured using the service.</p>
            </Section>

            <Section id="section-13" title="Section 13 – Indemnification">
              <p>You agree to indemnify, defend, and hold harmless Baynix and our parent, subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers, interns, and employees, harmless from any claim or demand, including reasonable attorneys' fees, made by any third party due to or arising out of your breach of these Terms of Service or your violation of any law or the rights of a third party.</p>
            </Section>

            <Section id="section-14" title="Section 14 – Severability">
              <p>In the event that any provision of these Terms of Service is determined to be unlawful, void, or unenforceable, such provision shall nonetheless be enforceable to the fullest extent permitted by applicable law, and the unenforceable portion shall be deemed to be severed from these Terms of Service. Such determination shall not affect the validity and enforceability of any other remaining provisions.</p>
            </Section>

            <Section id="section-15" title="Section 15 – Termination">
              <p>The obligations and liabilities of the parties incurred before the termination date shall survive the termination of this agreement for all purposes.</p>
              <p>These Terms of Service are effective unless and until terminated by either you or us. You may terminate these Terms of Service at any time by notifying us that you no longer wish to use our Services or when you cease using our site.</p>
              <p>If in our sole judgment you fail, or we suspect that you have failed, to comply with any term or provision of these Terms of Service, we may also terminate this agreement at any time without notice and you will remain liable for all amounts due up to and including the date of termination.</p>
            </Section>

            <Section id="section-16" title="Section 16 – Entire Agreement">
              <p>The failure of us to exercise or enforce any right or provision of these Terms of Service shall not constitute a waiver of such right or provision.</p>
              <p>These Terms of Service and any policies or operating rules posted by us on this site constitute the entire agreement and understanding between you and us and govern your use of the Service, superseding any prior or contemporaneous agreements, communications, and proposals, whether oral or written, between you and us.</p>
            </Section>

            <Section id="section-17" title="Section 17 – Governing Law">
              <p>These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of India and jurisdiction of New Delhi.</p>
            </Section>

            <Section id="section-18" title="Section 18 – Changes to Terms of Service">
              <p>We reserve the right, at our sole discretion, to update, change, or replace any part of these Terms of Service by posting updates and changes to our website. It is your responsibility to check our website periodically for changes. Your continued use of or access to our website or the Service following the posting of any changes to these Terms of Service constitutes acceptance of those changes.</p>
            </Section>

            <Section id="section-19" title="Section 19 – Contact Information">
              <p>Questions about the Terms of Service should be sent to us at{' '}
                <a href="mailto:hello@baynix.ai" style={{ color: '#a5b4fc', textDecoration: 'none' }}>hello@baynix.ai</a>.
              </p>
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
