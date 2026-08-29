import { useEffect, useRef, useState } from 'react'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const backdropRef = useRef<HTMLDivElement>(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', handler)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('josephnlampert@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }

  return (
    <div
      ref={backdropRef}
      className="modal-backdrop animate-fade-in"
      onClick={e => { if (e.target === backdropRef.current) onClose() }}
      role="dialog"
      aria-modal="true"
    >
      <div className="contact-modal-panel">
        <div className="contact-modal-header">
          <div>
            <span className="contact-eyebrow">Professional Contact & Inquiries</span>
            <h2 className="contact-modal-title">Let’s Connect</h2>
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <p className="contact-modal-desc">
          Interested in discussing Senior Data Infrastructure, Technical Program Management (TPM), or Distributed Systems roles? Reach out through any of these channels:
        </p>

        <div className="contact-channels-grid">
          {/* LinkedIn Profile */}
          <a
            href="https://www.linkedin.com/in/JosephLampert/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-channel-card linkedin-card"
          >
            <div className="channel-icon-wrap linkedin">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </div>
            <div className="channel-info">
              <span className="channel-title">LinkedIn Profile</span>
              <span className="channel-subtitle">linkedin.com/in/JosephLampert ↗</span>
            </div>
            <div className="channel-action-arrow">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </div>
          </a>

          {/* Direct Email */}
          <div className="contact-channel-card email-card">
            <div className="channel-icon-wrap email">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div className="channel-info">
              <span className="channel-title">Direct Email</span>
              <a href="mailto:josephnlampert@gmail.com" className="channel-subtitle email-link">
                josephnlampert@gmail.com
              </a>
            </div>
            <button
              className="copy-btn-pill"
              onClick={handleCopyEmail}
              aria-label="Copy email address"
            >
              {copied ? '✓ Copied' : 'Copy'}
            </button>
          </div>

          {/* GitHub Profile */}
          <a
            href="https://github.com/yosefxk"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-channel-card github-card"
          >
            <div className="channel-icon-wrap github">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </div>
            <div className="channel-info">
              <span className="channel-title">GitHub Profile</span>
              <span className="channel-subtitle">github.com/yosefxk ↗</span>
            </div>
            <div className="channel-action-arrow">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </div>
          </a>
        </div>

        <div className="contact-modal-footer">
          <span className="location-badge">📍 Dual Citizen (US & Israel) · Open to Relocation & Remote</span>
        </div>
      </div>
    </div>
  )
}
