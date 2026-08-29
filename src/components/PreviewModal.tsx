import { useEffect, useRef } from 'react'
import type { Project } from '../data/projects'

export default function PreviewModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const backdropRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      ref={backdropRef}
      className="modal-backdrop animate-fade-in"
      onClick={e => { if (e.target === backdropRef.current) onClose() }}
      role="dialog"
      aria-modal="true"
    >
      <div className="modal-panel" style={{ '--card-color': project.color } as React.CSSProperties}>
        {/* Colored top bar */}
        <div className="modal-topbar" style={{ background: project.gradient }} />

        <div className="modal-header">
          <div className="modal-title-group">
            <span className="modal-icon">{project.icon}</span>
            <div>
              <div className="modal-meta-top">
                <span className="modal-category-badge">{project.categoryLabel}</span>
                <span className="modal-year-badge">{project.year}</span>
              </div>
              <h2 className="modal-title">{project.name}</h2>
              <p className="modal-tagline">{project.tagline}</p>
            </div>
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Close">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="modal-body">
          {/* Authentic High-Res Screenshot Frame */}
          <div className="modal-thumb-wrap">
            <div className="modal-window-bar">
              <span className="dot red" /><span className="dot yellow" /><span className="dot green" />
              <span className="window-title">{project.name} — Production UI</span>
            </div>
            <img
              src={project.thumbnail}
              alt={`${project.name} live interface`}
              className="modal-thumb"
            />
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="modal-thumb-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                </svg>
                Launch Production App
              </a>
            )}
          </div>

          {/* Details & Architecture Section */}
          <div className="modal-details">
            {/* Key Metrics Grid */}
            <div className="modal-metrics-grid">
              {project.metrics.map(m => (
                <div key={m.label} className="modal-metric-card">
                  <span className="modal-metric-num">{m.value}</span>
                  <span className="modal-metric-label">{m.label}</span>
                </div>
              ))}
            </div>

            <div className="modal-case-study">
              <h4 className="modal-section-label">Overview</h4>
              <p className="modal-long-desc">{project.longDescription}</p>

              {/* Problem vs Solution */}
              <div className="problem-solution-grid">
                <div className="ps-card problem-card">
                  <span className="ps-icon">⚠️</span>
                  <div>
                    <h5 className="ps-title">The Challenge</h5>
                    <p className="ps-desc">{project.problem}</p>
                  </div>
                </div>

                <div className="ps-card solution-card">
                  <span className="ps-icon">⚡</span>
                  <div>
                    <h5 className="ps-title">Engineering Solution</h5>
                    <p className="ps-desc">{project.solution}</p>
                  </div>
                </div>
              </div>

              {/* Architecture Data Flow */}
              <div className="modal-architecture-box">
                <h5 className="arch-title">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" />
                  </svg>
                  Architecture & Data Flow
                </h5>
                <p className="arch-flow-text">{project.architecture}</p>
              </div>

              {/* Highlights List */}
              <div className="modal-highlights">
                <h4 className="modal-section-label">Key Engineering Features</h4>
                <ul className="highlights-list">
                  {project.highlights.map(h => (
                    <li key={h}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={project.color} strokeWidth="2.5">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Stack Tags */}
            <div className="modal-stack-section">
              <span className="meta-label">Technologies & Frameworks</span>
              <div className="modal-stack">
                {project.stack.map(t => <span key={t} className="stack-chip">{t}</span>)}
              </div>
            </div>

            {/* Actions */}
            <div className="modal-actions">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Open Production App
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  Inspect Source Code
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
