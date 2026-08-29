import { useEffect, useRef, useState } from 'react'
import type { Project } from '../data/projects'

const STATUS_LABELS: Record<Project['status'], string> = {
  live: 'Live on BaileyTV',
  public: 'Public Open Source',
  private: 'Private Deploy',
  wip: 'In Development',
}

interface ProjectCardProps {
  project: Project
  index: number
  onPreview: (p: Project) => void
}

export function ProjectCard({ project, index, onPreview }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = cardRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), (index % 6) * 80)
          observer.unobserve(el)
        }
      },
      { threshold: 0.08 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [index])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientY - rect.top) / rect.height - 0.5
    const y = (e.clientX - rect.left) / rect.width - 0.5
    setTilt({ x: x * -8, y: y * 8 })
  }

  return (
    <div
      ref={cardRef}
      className={`project-card ${visible ? 'visible' : ''}`}
      style={{
        '--card-color': project.color,
        transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        opacity: visible ? 1 : 0,
        translate: visible ? '0 0' : '0 24px',
      } as React.CSSProperties}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setIsHovered(false) }}
      onClick={() => onPreview(project)}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onPreview(project)}
      aria-label={`View ${project.name} case study`}
    >
      {/* Top glow line */}
      <div className="card-topline" style={{ background: project.gradient }} />

      {/* Real Screenshot Thumbnail */}
      <div className="card-thumbnail-wrap">
        <div className="card-mini-bar">
          <span className="dot red" /><span className="dot yellow" /><span className="dot green" />
          <span className="mini-url">{project.categoryLabel}</span>
        </div>
        <img
          src={project.thumbnail}
          alt={`${project.name} preview`}
          className="card-thumbnail"
          loading="lazy"
        />
        <div className="card-thumbnail-overlay">
          <span className="view-case-study-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M15 3h6v6M10 14L21 3M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
            </svg>
            Case Study
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="card-body">
        <div className="card-header-row">
          <div className="card-name-group">
            <span className="card-icon">{project.icon}</span>
            <h3 className="card-name">{project.name}</h3>
          </div>
          <div className={`card-status card-status-${project.status}`}>
            <span className="status-dot" />
            {STATUS_LABELS[project.status]}
          </div>
        </div>

        <p className="card-tagline">{project.tagline}</p>
        <p className="card-brief">{project.description}</p>

        {/* Highlight metric pills */}
        <div className="card-metrics-row">
          {project.metrics.slice(0, 2).map(m => (
            <span key={m.label} className="card-metric-badge">
              <strong>{m.value}</strong> {m.label}
            </span>
          ))}
        </div>

        <div className="card-stack">
          {project.stack.slice(0, 4).map(t => (
            <span key={t} className="stack-chip">{t}</span>
          ))}
          {project.stack.length > 4 && (
            <span className="stack-chip stack-chip-more">+{project.stack.length - 4}</span>
          )}
        </div>

        <div className="card-footer-row">
          <span className="card-year">{project.year}</span>
          <div className="card-actions-quick" onClick={e => e.stopPropagation()}>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="quick-link-icon"
                title="Open Live App"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                </svg>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="quick-link-icon"
                title="View GitHub Repository"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
            )}
            <div className="card-arrow" aria-hidden="true">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Hover shimmer */}
      {isHovered && <div className="card-shimmer" />}
    </div>
  )
}

interface ProjectGridProps {
  projects: Project[]
  activeFilter: string
  onFilterChange: (category: string) => void
  onPreview: (p: Project) => void
}

const CATEGORIES = [
  { id: 'all', label: 'All Systems' },
  { id: 'data', label: 'Data & Systems' },
  { id: 'ai', label: 'AI & Automation' },
  { id: 'fullstack', label: 'Real-Time & Full-Stack' },
  { id: 'mobile', label: 'Mobile & Algorithms' },
  { id: 'infra', label: 'DevOps & Media' },
]

export default function ProjectGrid({ projects, activeFilter, onFilterChange, onPreview }: ProjectGridProps) {
  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <div className="project-grid-section">
      <div className="grid-header">
        <div>
          <h3 className="grid-subheading">Production Systems & Applications</h3>
          <p className="grid-desc">Every system is deployed, containerized, and solving real-world challenges.</p>
        </div>

        {/* Category pills */}
        <div className="filter-bar" role="toolbar" aria-label="Filter by system category">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              className={`filter-pill ${activeFilter === cat.id ? 'active' : ''}`}
              onClick={() => onFilterChange(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="projects-grid">
        {filtered.length === 0 ? (
          <div className="grid-empty">No projects match this category.</div>
        ) : (
          filtered.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onPreview={onPreview}
            />
          ))
        )}
      </div>
    </div>
  )
}
