'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'

export default function WhatsAppWidget() {
    const pathname = usePathname()
  if (pathname === '/contact') return null
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href="https://wa.me/919773981832"
      target="_blank"
      rel="noopener noreferrer"
      title="Chat with us on WhatsApp"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        gap: '0.6rem',
        padding: hovered ? '0.65rem 1.1rem 0.65rem 0.9rem' : '0.75rem',
        borderRadius: 50,
        background: '#25d366',
        boxShadow: hovered
          ? '0 8px 32px rgba(37,211,102,0.5), 0 0 0 6px rgba(37,211,102,0.15)'
          : '0 4px 20px rgba(37,211,102,0.35), 0 0 0 4px rgba(37,211,102,0.1)',
        textDecoration: 'none',
        transition: 'all 0.3s cubic-bezier(0.34,1.56,0.64,1)',
        transform: hovered ? 'translateY(-3px) scale(1.04)' : 'translateY(0) scale(1)',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* WhatsApp SVG icon */}
      <svg
        width="26"
        height="26"
        viewBox="0 0 32 32"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
      >
        <path d="M16 2C8.268 2 2 8.268 2 16c0 2.49.648 4.829 1.783 6.858L2 30l7.338-1.762A13.932 13.932 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.44 11.44 0 01-5.834-1.597l-.418-.248-4.352 1.046 1.074-4.24-.272-.435A11.463 11.463 0 014.5 16C4.5 9.649 9.649 4.5 16 4.5S27.5 9.649 27.5 16 22.351 27.5 16 27.5zm6.29-8.617c-.344-.172-2.036-1.004-2.352-1.118-.316-.115-.546-.172-.776.172-.23.344-.89 1.118-1.09 1.348-.2.23-.4.258-.744.086-.344-.172-1.452-.535-2.767-1.708-1.022-.912-1.712-2.038-1.912-2.382-.2-.344-.021-.53.15-.701.155-.154.344-.4.516-.602.172-.2.23-.344.344-.573.115-.23.058-.43-.029-.602-.086-.172-.776-1.87-1.063-2.561-.28-.673-.564-.582-.776-.593l-.66-.011c-.23 0-.602.086-.917.43s-1.205 1.177-1.205 2.87 1.234 3.328 1.406 3.558c.172.23 2.428 3.708 5.882 5.198.822.355 1.464.567 1.964.726.825.263 1.576.226 2.169.137.661-.099 2.036-.832 2.323-1.635.287-.803.287-1.491.2-1.635-.085-.143-.315-.23-.659-.4z"/>
      </svg>

      {/* Label — only visible on hover */}
      <span style={{
        fontSize: '0.85rem',
        fontWeight: 600,
        color: '#fff',
        maxWidth: hovered ? 120 : 0,
        opacity: hovered ? 1 : 0,
        transition: 'max-width 0.3s ease, opacity 0.2s ease',
        overflow: 'hidden',
      }}>
        Chat with us
      </span>
    </a>
  )
}