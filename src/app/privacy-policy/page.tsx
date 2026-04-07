import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppWidget from '@/components/WhatsAppWidget'
import LegalTOC from '@/components/LegalTOC'

export const metadata: Metadata = {
  title: 'Privacy Policy — Baynix',
  description: 'Read the Privacy Policy for Baynix. Learn how we collect, use, and protect your personal data.',
  alternates: { canonical: 'https://baynix.ai/privacy-policy' },
}

const sections = [
  { id: 'mobile-user',    label: 'Baynix – Mobile User Information' },
  { id: 'collect',        label: 'What Information Do We Collect?' },
  { id: 'cookies',        label: 'What Are Cookies?' },
  { id: 'clear-gifs',     label: 'What Are Clear GIFs?' },
  { id: 'how-we-use',     label: 'How Do We Use the Information?' },
  { id: 'security',       label: 'Security' },
  { id: 'changes',        label: 'Changes and Updates' },
  { id: 'opt-out',        label: 'Opt-Out Policy' },
  { id: 'opt-in',         label: 'Opt-In Policy' },
  { id: 'data-retention', label: 'Data Retention & Deletion' },
  { id: 'contact',        label: 'Contact Us' },
]

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            <p style={{ fontSize: '0.95rem', color: 'var(--text3)', lineHeight: 1.7, marginBottom: '1rem' }}>
              Your privacy is important to us.
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

            <Section id="mobile-user" title="Baynix – Mobile User Information">
              <p>As part of Baynix's services, we may receive information from wireless carriers, operators, or our clients, such as an end user's mobile phone number. In some limited instances, additional information such as a user's geographic location, a personal identification number (PIN), or a mailing address is also provided. Additionally, we process message content from our clients which may contain personal information on behalf of a mobile end-user.</p>
              <p>Baynix does not create this content nor is it responsible for the content sent or received by our clients or any end user; we are simply the passive conduit through which the content is sent. Regardless, our agreements with our clients ensure that the client has the ultimate responsibility to obtain any and all required "opt-ins" or other consent(s) from end users prior to such information being sent.</p>
              <p>Any mobile user information collected pursuant to the above is governed by the Baynix Privacy Policy as well as Baynix's internal policies regarding confidential and personally identifiable information. We also include specific provisions in the contracts with our clients to ensure that responsibility for compliance-related obligations and message content is within their control. If you have questions or would like more information, please contact your account manager.</p>
            </Section>

            <Section id="collect" title="What Information Do We Collect?">
              <p>When you visit the site, we may collect information relating to your usage which enables us to improve the usefulness of our Site, the quality of our service, and Site performance by measuring and analyzing non-identifying usage and volume statistical information.</p>
              <p>Information gathered may include, but is not limited to, the following: the activity of the Site visitor's browser when the visitor is viewing the Site; the site path of visitors; the time visitors come to the Site; and technical data about your browser, your internet IP address, and operating system. Baynix reserves the right to publish anonymous, aggregate summary information regarding its Site visitors for promotional purposes. Please note that this is not personal information, only general summaries of our visitors' usage of the Site.</p>
              <p><strong style={{ color: 'var(--text2)', fontWeight: 600 }}>Recommendations and personalization</strong> — We use your personal data to recommend features, products, and services that might be of interest to you, identify your preferences, and personalize your experience with Baynix.</p>
              <p><strong style={{ color: 'var(--text2)', fontWeight: 600 }}>Communicate with you</strong> — We use your personal information to communicate with you in relation to Baynix Services via different channels (phone, email, chat).</p>
              <p>As a result, you may be requested to provide information such as, but not limited to, name, company phone number, e-mail address, and postal address. Baynix may use cookies to help us collect and store this information, as described in more detail below.</p>
            </Section>

            <Section id="cookies" title="What Are Cookies?">
              <p>Cookies are files that web servers place on an Internet user's computer that are designed to store basic information (such as visitor preferences). These allow visitors to the Site to enjoy more seamless visits (for example, by remembering your preferences) and more accurately measure visitor behavior on the Site.</p>
              <p>There are two types of cookies: <strong style={{ color: 'var(--text2)', fontWeight: 600 }}>session</strong> and <strong style={{ color: 'var(--text2)', fontWeight: 600 }}>persistent</strong>. Session cookies exist only during an Internet user's online session and disappear from the user's computer when the browser is closed. Persistent cookies remain on the user's computer after the browser has been closed.</p>
              <p>The cookies used on the Site do not identify you personally. They merely recognize your browser unless you choose to identify yourself voluntarily. Users who disable their Web browsers' ability to accept cookies will still be able to browse the Site; however, they may lose some of the functionality provided by the use of cookies.</p>
              <p>If you choose to decline cookies, you may not be able to sign in or use other interactive features of the Site and services that depend on cookies. For further information about disabling cookies, you can visit <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" style={{ color: '#a5b4fc', textDecoration: 'none' }}>www.allaboutcookies.org</a>.</p>
            </Section>

            <Section id="clear-gifs" title="What Are Clear GIFs?">
              <p>Clear GIFs (also known as web beacons) are used in combination with cookies to help Site operators understand how visitors interact with their websites. A clear GIF is typically a transparent graphic image (usually 1-pixel × 1-pixel) that is placed on a site. The use of a clear GIF allows the Site to measure the actions of the visitor opening the page that contains the clear GIF.</p>
              <p>We utilize clear GIFs to measure visitor behavior, to help us improve the visitor experience, and to manage site content. We may use clear GIFs on this Site, in our emails, in our advertisements on other websites, or in our advertisements in others' emails.</p>
            </Section>

            <Section id="how-we-use" title="How Do We Use the Information We Collect?">
              <p>Baynix will share your personal information only in the manner described in this Privacy Policy. Baynix may use the information collected on the Site to contact you in order to further discuss your interest in our company, our services, and to share information with you regarding our company, such as marketing promotions and events. This information may also be used to improve the services we provide you.</p>
              <p>The information is collected and stored in a manner that is appropriate for the nature of the data that we collect and will not be shared with third parties unless specifically authorized by you. However, we may need to disclose your personal information to our legal advisers, in order to protect our rights and to preserve the safety of our users, when required to do so by law, or in order to comply with a current judicial proceeding, a court order, or legal process served on the Site.</p>
              <p>When sharing your personal information, we will take all reasonable and appropriate measures to protect your information in accordance with this Privacy Policy, Baynix's internal policies and procedures, and applicable legal requirements.</p>
            </Section>

            <Section id="security" title="Security">
              <p>We employ appropriate technical and organizational security measures at all times to protect the information we collect from you. We use multiple electronic, procedural, and physical security measures to protect against unauthorized or unlawful use or alteration of information, and against any accidental loss, destruction, or damage to information.</p>
              <p>However, no method of transmission over the Internet, or method of electronic storage, is 100% secure. Therefore, we cannot guarantee its absolute security.</p>
            </Section>

            <Section id="changes" title="Changes and Updates">
              <p>This Privacy Policy may be revised from time to time as Baynix adds or changes features, services, or products, or as applicable laws change, and/or as industry-standard privacy and security practices evolve. The effective date is displayed at the bottom of each page of this Privacy Policy so that you can determine if there has been a change since you last used the Site.</p>
              <p>If Baynix makes a material change to this Privacy Policy regarding the use or disclosure of certain information, Baynix will provide a notice on the Site.</p>
            </Section>

            <Section id="opt-out" title="Opt-Out Policy">
              <p>If you no longer wish to receive communication from Baynix for notification and promotional purposes, you may opt out at any time. By opting out, you will no longer receive any future communication from Baynix through SMS and other channels.</p>
              <p>To opt out, please contact us at <a href="mailto:hello@baynix.ai" style={{ color: '#a5b4fc', textDecoration: 'none' }}>hello@baynix.ai</a> or use the unsubscribe link provided in any communication you receive from us.</p>
            </Section>

            <Section id="opt-in" title="Opt-In Policy">
              <p>By providing your consent, you voluntarily agree to receive communication from Baynix for notification and promotional purposes. You understand that these communications may be sent to you through SMS and other channels. You acknowledge that providing your consent is optional and that you can withdraw it at any time.</p>
              <p>The user needs to provide consent explicitly to receive messages from the brand via one of the below channels:</p>
              <ul>
                <li>Messages</li>
                <li>SMS Messages</li>
                <li>Promotional or Informational Messages via mobile phones</li>
              </ul>
              <p>One of the above keywords/phrases needs to be part of the opt-in form that the user can select/unselect. In case none of the above phrases are included in the opt-in form, the same must be mentioned in the Terms of Service and a link to the Terms of Service may be provided in the opt-in form.</p>
            </Section>

            <Section id="data-retention" title="Data Retention & Deletion">
              <p><strong style={{ color: 'var(--text2)', fontWeight: 600 }}>Data Retention Period</strong></p>
              <p>We store personal information (e.g., account data, messaging history) only for as long as needed to fulfill the purposes for which it was collected, consistent with our business needs and legal obligations.</p>

              <p><strong style={{ color: 'var(--text2)', fontWeight: 600 }}>Retention Duration Examples</strong></p>
              <ul>
                <li>Messages and metadata are retained for 6 months by default.</li>
                <li>If your account becomes inactive or is deleted, we permanently delete all associated data within 30 days.</li>
              </ul>

              <p><strong style={{ color: 'var(--text2)', fontWeight: 600 }}>End of Retention Actions</strong></p>
              <p>When a data retention period expires, we will either permanently delete or irreversibly anonymize the data.</p>

              <p><strong style={{ color: 'var(--text2)', fontWeight: 600 }}>User Requests & Control</strong></p>
              <p>You may request deletion of your personal data at any time by contacting us at <a href="mailto:hello@baynix.ai" style={{ color: '#a5b4fc', textDecoration: 'none' }}>hello@baynix.ai</a>. Upon request, we will delete your data within 30 days, except where required otherwise by law.</p>
            </Section>

            <Section id="contact" title="Contact Us">
              <p>If you have questions, concerns, or suggestions regarding our Privacy Policy, we can be reached using the contact information on our <a href="/contact" style={{ color: '#a5b4fc', textDecoration: 'none' }}>Contact Us</a> page or at <a href="mailto:hello@baynix.ai" style={{ color: '#a5b4fc', textDecoration: 'none' }}>hello@baynix.ai</a>.</p>
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
