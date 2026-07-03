import { useEffect, useRef, useState } from 'react'
import type { Project } from '../data/projects'

const STATUS_LABELS: Record<Project['status'], string> = {
  live: 'Live',
  public: 'Public',
  private: 'Private',
  wip: 'WIP',
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
          setTimeout(() => setVisible(true), index * 100)
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [index])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientY - rect.top) / rect.height - 0.5
    const y = (e.clientX - rect.left) / rect.width - 0.5
    setTilt({ x: x * -10, y: y * 10 })
  }

  return (
    <div
      ref={cardRef}
      className={`project-card ${visible ? 'visible' : ''}`}
      style={{
        '--card-color': project.color,
        transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        opacity: visible ? 1 : 0,
        translate: visible ? '0 0' : '0 32px',
        transitionDelay: `${index * 0.09}s`,
      } as React.CSSProperties}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setIsHovered(false) }}
      onClick={() => onPreview(project)}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onPreview(project)}
      aria-label={`View ${project.name} details`}
    >
      {/* Top glow line */}
      <div className="card-topline" style={{ background: project.gradient }} />

      {/* Thumbnail */}
      <div className="card-thumbnail-wrap">
        <img
          src={project.thumbnail}
          alt={project.name}
          className="card-thumbnail"
          loading="lazy"
        />
        <div className="card-thumbnail-overlay" />
      </div>

      {/* Body */}
      <div className="card-body">
        <div className="card-header-row">
          <span className="card-icon">{project.icon}</span>
          <div className={`card-status card-status-${project.status}`}>
            <span className="status-dot" />
            {STATUS_LABELS[project.status]}
          </div>
        </div>

        <h3 className="card-name">{project.name}</h3>
        <p className="card-tagline">{project.tagline}</p>

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
          <div className="card-arrow" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
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
  allTags: string[]
  activeFilter: string | null
  onFilterChange: (tag: string | null) => void
  onPreview: (p: Project) => void
}

export default function ProjectGrid({ projects, allTags, activeFilter, onFilterChange, onPreview }: ProjectGridProps) {
  return (
    <div className="project-grid-section">
      <div className="grid-header">
        <h3 className="grid-subheading">More projects</h3>

        {/* Filter pills */}
        <div className="filter-bar" role="toolbar" aria-label="Filter by technology">
          <button
            className={`filter-pill ${activeFilter === null ? 'active' : ''}`}
            onClick={() => onFilterChange(null)}
          >
            All
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              className={`filter-pill ${activeFilter === tag ? 'active' : ''}`}
              onClick={() => onFilterChange(activeFilter === tag ? null : tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="projects-grid">
        {projects.length === 0 ? (
          <div className="grid-empty">No projects match this filter.</div>
        ) : (
          projects.map((project, i) => (
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
