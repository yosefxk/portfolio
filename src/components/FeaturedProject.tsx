import { useEffect, useRef, useState } from 'react'
import type { Project } from '../data/projects'

interface FeaturedProjectsProps {
  projects: Project[]
  onPreview: (p: Project) => void
}

export default function FeaturedProject({ projects, onPreview }: FeaturedProjectsProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.unobserve(el) } },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`featured-wrapper ${visible ? 'visible' : ''}`}>
      <div className="featured-grid-dual">
        {projects.map((project, idx) => (
          <div
            key={project.id}
            className="featured-card"
            style={{
              '--card-color': project.color,
              animationDelay: `${idx * 0.15}s`
            } as React.CSSProperties}
          >
            {/* Glow blob */}
            <div className="featured-blob" style={{ background: project.gradient }} />

            <div className="featured-content">
              <div className="featured-meta">
                <span className="featured-badge">⭐ Flagship System</span>
                <span className="featured-category">{project.categoryLabel}</span>
                <span className="featured-year">{project.year}</span>
              </div>

              <h3 className="featured-name">{project.name}</h3>
              <p className="featured-tagline">{project.tagline}</p>
              <p className="featured-desc">{project.description}</p>

              {/* Metrics pills */}
              <div className="featured-metrics-row">
                {project.metrics.map(m => (
                  <div key={m.label} className="metric-pill">
                    <span className="metric-val">{m.value}</span>
                    <span className="metric-lbl">{m.label}</span>
                  </div>
                ))}
              </div>

              <div className="featured-stack">
                {project.stack.slice(0, 5).map(t => (
                  <span key={t} className="stack-chip">{t}</span>
                ))}
                {project.stack.length > 5 && (
                  <span className="stack-chip stack-chip-more">+{project.stack.length - 5}</span>
                )}
              </div>

              <div className="featured-actions">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    Open Live App
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </a>
                )}
                <button className="btn-secondary" onClick={() => onPreview(project)}>
                  Case Study & Architecture
                </button>
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                )}
              </div>
            </div>

            <div className="featured-preview" onClick={() => onPreview(project)}>
              <div className="featured-preview-frame">
                <div className="preview-bar">
                  <span className="dot red" /><span className="dot yellow" /><span className="dot green" />
                  <span className="preview-url-text">{project.liveUrl || `github.com/yosefxk/${project.id}`}</span>
                </div>
                <div className="featured-thumbnail-wrap">
                  <img
                    src={project.thumbnail}
                    alt={`${project.name} authentic interface screenshot`}
                    className="featured-thumbnail"
                    loading="lazy"
                  />
                  <div className="thumbnail-overlay">
                    <div className="thumbnail-open-hint">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M15 3h6v6M10 14L21 3M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                      </svg>
                      View Case Study
                    </div>
                  </div>
                </div>
              </div>

              <div className="featured-status-row">
                <span className="live-dot" />
                <span className="featured-status-text">
                  {project.status === 'live' ? `Live on BaileyTV · ${project.liveUrl?.replace('https://', '')}` : 'Production Ready · Open Source'}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
