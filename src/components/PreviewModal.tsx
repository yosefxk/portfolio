import { useEffect, useRef } from 'react'
import type { Project } from '../data/projects'

interface PreviewModalProps {
  project: Project
  onClose: () => void
}

export default function PreviewModal({ project, onClose }: PreviewModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  // Close on escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === modalRef.current) onClose()
  }

  const hasLivePreview = !!project.liveUrl

  return (
    <div
      className="modal-backdrop"
      ref={modalRef}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.name} details`}
    >
      <div className="modal-panel" style={{ '--card-color': project.color } as React.CSSProperties}>
        {/* Modal header */}
        <div className="modal-header">
          <div className="modal-title-row">
            <span className="modal-icon">{project.icon}</span>
            <div>
              <h2 className="modal-title">{project.name}</h2>
              <div className="modal-stack">
                {project.stack.map(t => (
                  <span key={t} className="stack-chip">{t}</span>
                ))}
              </div>
            </div>
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Live preview iframe or description panel */}
        <div className="modal-body">
          {hasLivePreview ? (
            <div className="modal-preview-container">
              <div className="modal-preview-bar">
                <div className="preview-dots">
                  <span /><span /><span />
                </div>
                <span className="preview-url">{project.liveUrl}</span>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="preview-open-btn"
                  aria-label="Open in new tab"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                  </svg>
                </a>
              </div>
              <iframe
                src={project.liveUrl}
                title={`Live preview of ${project.name}`}
                className="modal-iframe"
                loading="lazy"
                sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
              />
            </div>
          ) : (
            <div className="modal-description-panel" style={{ borderColor: project.color }}>
              <div className="modal-desc-accent" style={{ background: project.accentColor }} />
              <h3 className="modal-desc-heading">About this project</h3>
              <p className="modal-desc-text">{project.longDescription}</p>

              <div className="modal-meta">
                <div className="meta-item">
                  <span className="meta-label">Status</span>
                  <span className={`status-badge status-${project.status}`}>
                    {project.status === 'live' ? '🟢 Live' : project.status === 'private' ? '🔒 Private' : '🚧 WIP'}
                  </span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Stack</span>
                  <span className="meta-value">{project.stack.join(' · ')}</span>
                </div>
              </div>

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-live modal-github-btn"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  View on GitHub
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
