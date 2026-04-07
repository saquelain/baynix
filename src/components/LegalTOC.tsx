'use client'

export default function LegalTOC({ sections }: { sections: { id: string; label: string }[] }) {
  return (
    <>
      <style>{`
        .legal-toc-link {
          display: block;
          font-size: 0.75rem;
          color: var(--text3);
          text-decoration: none;
          padding: 0.35rem 0.5rem;
          border-radius: 6px;
          margin-bottom: 0.1rem;
          transition: all 0.15s;
          border-left: 2px solid transparent;
          line-height: 1.4;
        }
        .legal-toc-link:hover {
          color: var(--text);
          border-left-color: #818cf8;
          padding-left: 0.75rem;
          background: rgba(255,255,255,0.04);
        }
      `}</style>
      <div style={{ padding: '1.25rem', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)', borderRadius: 14 }}>
        <p style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text3)', marginBottom: '0.75rem', fontWeight: 600 }}>
          On this page
        </p>
        {sections.map(s => (
          <a key={s.id} href={`#${s.id}`} className="legal-toc-link">
            {s.label}
          </a>
        ))}
      </div>
    </>
  )
}
