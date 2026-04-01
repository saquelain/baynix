"use client";

import { useState } from "react";
import Image from "next/image";
import GetInTouchModal from "@/components/GetInTouchModal";

const links = {
  Products: [
    { label: "Bulk SMS", href: "/bulk-sms" },
    { label: "WhatsApp API", href: "/whatsapp-api" },
    { label: "RCS Messaging", href: "/rcs-messaging" },
    { label: "Voice Solutions", href: "/voice" },
    { label: "Email API", href: "/email-api" },
    { label: "OTP Auth", href: "/otp-authenticator" },
  ],
  Solutions: [
    { label: "E-Commerce", href: "/e-commerce-d2c" },
    { label: "BFSI & Fintech", href: "/bsfi-fintech" },
    { label: "EdTech", href: "/edtech" },
    { label: "Logistics", href: "/logistics" },
    { label: "Healthcare", href: "/health-care" },
    { label: "Startups", href: "/start-ups" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/career" },
    { label: "Media Coverage", href: "/media-coverage" },
    { label: "Blog", href: "/blog" },
    { label: "Developer Docs", href: "https://developers.baynix.ai" },
    { label: "Contact Us", href: "/contact" },
    { label: "Pricing", href: "/pricing" },
  ],
  'Why Baynix?': [
    { label: 'vs WATI',       href: '/blog/wati-alternative' },
    { label: 'vs Respond.io', href: '/blog/respond-io-alternative' },
    { label: 'vs SleekFlow',  href: '/blog/sleekflow-alternative' },
  ],
};

export default function Footer() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <footer
        style={{
          padding: "4rem 2rem 2rem",
          borderTop: "1px solid var(--border)",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          {/* Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
              gap: "3rem",
              marginBottom: "3rem",
            }}
            className="footer-grid"
          >
            {/* Brand */}
            <div>
              <Image
                src="/images/baynix-logo.png"
                alt="Baynix"
                width={120}
                height={70}
                style={{ objectFit: "contain", marginBottom: "0.75rem" }}
              />
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "var(--text3)",
                  maxWidth: 260,
                  lineHeight: 1.7,
                  fontWeight: 300,
                  marginTop: "0.75rem",
                }}
              >
                Your all-in-one AI Communication Platform. Unified messaging
                across SMS, WhatsApp, RCS, Voice, and Email.
              </p>
              <p
                style={{
                  marginTop: "0.75rem",
                  fontSize: "0.78rem",
                  color: "var(--text3)",
                }}
              >
                📧 hello@baynix.ai &nbsp;|&nbsp; 🌐 baynix.ai
              </p>
              {/* Meta Business Partner — prestigious placement */}
              <div
                style={{
                  marginTop: "1.25rem",
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "0.4rem 0.9rem",
                  borderRadius: 10,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  boxShadow: "0 0 20px rgba(24,119,242,0.2)",
                  transition: "box-shadow 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 0 32px rgba(24,119,242,0.4)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 0 20px rgba(24,119,242,0.2)")
                }
              >
                <a
                  href="https://www.facebook.com/business/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center" }}
                >
                  <Image
                    src="/images/certs/meta.png"
                    alt="Meta Business Partner"
                    width={180}
                    height={60}
                    style={{ objectFit: "contain" }}
                  />
                </a>
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(links).map(([title, items]) => (
              <div key={title}>
                <div
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    color: "var(--text2)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: "1rem",
                  }}
                >
                  {title}
                </div>
                <ul
                  style={{
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.6rem",
                  }}
                >
                  {items.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        style={{
                          fontSize: "0.85rem",
                          color: "var(--text3)",
                          textDecoration: "none",
                          transition: "color 0.2s",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = "var(--text2)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color = "var(--text3)")
                        }
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Get in Touch — above the divider */}
          <div
            className="footer-get-in-touch"
            style={{
              display: "flex",
              justifyContent: "flex-start",
              paddingLeft: "2rem",
              marginBottom: "1.5rem",
            }}
          >
            <button
              onClick={() => setModalOpen(true)}
              className="glass-btn glass-btn-primary glass-btn-sm"
              style={{ cursor: "pointer", fontFamily: "inherit" }}
            >
              Get in Touch
            </button>
          </div>

          {/* Bottom */}
          {/* Bottom */}
          <div
            className="footer-bottom"
            style={{
              paddingTop: "2rem",
              borderTop: "1px solid var(--border)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <p style={{ fontSize: "0.8rem", color: "var(--text3)", margin: 0 }}>
              © 2025–2026 Baynix. All Rights Reserved.
            </p>

            {/* Trust Bar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                flexWrap: "wrap",
                rowGap: "1rem",
              }}
            >
              <span
                style={{
                  fontSize: "0.6rem",
                  color: "var(--text3)",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  whiteSpace: "nowrap",
                  marginRight: "0.25rem",
                }}
              >
                Certified &amp; Audited
              </span>

              <div
                style={{ width: 1, height: 36, background: "var(--border2)" }}
              />

              {[
                {
                  src: "/images/certs/iso27001.png",
                  alt: "ISO 27001 Certified",
                  width: 68,
                  height: 68,
                  circle: false,
                  glow: "rgba(59,130,246,0.3)",
                },
                {
                  src: "/images/certs/vapt.png",
                  alt: "VAPT Certified",
                  width: 68,
                  height: 68,
                  circle: true,
                  glow: "rgba(59,130,246,0.3)",
                },
                {
                  src: "/images/certs/soc2.png",
                  alt: "SOC 2 Type II",
                  width: 76,
                  height: 76,
                  circle: true,
                  glow: "rgba(56,189,248,0.3)",
                },
                {
                  src: "/images/certs/code-review.png",
                  alt: "Code Review",
                  width: 68,
                  height: 68,
                  circle: true,
                  glow: "rgba(99,102,241,0.35)",
                  filter:
                    "invert(1) hue-rotate(200deg) saturate(3) brightness(1.2)",
                },
                {
                  src: "/images/certs/sar.png",
                  alt: "SAR Audited",
                  width: 68,
                  height: 68,
                  circle: true,
                  glow: "rgba(16,185,129,0.35)",
                  filter:
                    "invert(1) hue-rotate(100deg) saturate(3) brightness(1.2)",
                },
              ].map(({ src, alt, width, height, circle, glow, filter }) => (
                <div
                  key={alt}
                  title={alt}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    boxShadow: `0 0 14px ${glow}`,
                    transition: "transform 0.2s, box-shadow 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(-3px) scale(1.08)";
                    e.currentTarget.style.boxShadow = `0 0 26px ${glow}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.boxShadow = `0 0 14px ${glow}`;
                  }}
                >
                  <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    style={{
                      objectFit: "contain",
                      borderRadius: circle ? "50%" : 4,
                      filter: filter ?? undefined,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <GetInTouchModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
