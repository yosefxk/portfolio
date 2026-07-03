import { useEffect, useRef, useState } from 'react'
import type { Project } from '../data/projects'

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

  // Scroll reveal
  useEffect(() => {
    const el = cardRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), index * 120)
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [index])

  // 3D tilt on mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientY - rect.top) / rect.height - 0.5
    const y = (e.clientX - rect.left) / rect.width - 0.5
    setTilt({ x: x * -12, y: y * 12 })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
    setIsHovered(false)
  }

  return (
    <div
      ref={cardRef}
      className={`project-card ${visible ? 'visible' : ''} ${isHovered ? 'hovered' : ''}`}
      style={{
        '--card-color': project.color,
        '--card-accent': project.accentColor,
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${visible ? 'translateY(0)' : 'translateY(40px)'}`,
        transitionDelay: `${index * 0.08}s`,
      } as React.CSSProperties}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glowing top border */}
      <div className="card-border-glow" />

      {/* Card header */}
      <div className="card-header">
        <div className="card-icon">{project.icon}</div>
        <div className="card-status">
          <span className={`status-dot status-${project.status}`} />
          <span className="status-label">
            {project.status === 'live' ? 'Live' : project.status === 'private' ? 'Private' : 'WIP'}
          </span>
        </div>
      </div>

      {/* Card body */}
      <h3 className="card-name">{project.name}</h3>
      <p className="card-desc">{project.description}</p>

      {/* Tech stack chips */}
      <div className="card-stack">
        {project.stack.map(tech => (
          <span key={tech} className="stack-chip">{tech}</span>
        ))}
      </div>

      {/* Actions */}
      <div className="card-actions">
        <button
          className="btn-preview"
          onClick={() => onPreview(project)}
          aria-label={`Preview ${project.name}`}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
          </svg>
          Details
        </button>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-live"
            aria-label={`Open ${project.name}`}
          >
            Open App
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        )}

        {project.githubUrl && !project.liveUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-github-card"
            aria-label={`GitHub for ${project.name}`}
          >
            GitHub
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        )}
      </div>

      {/* Shimmer overlay on hover */}
      <div className="card-shimmer" />
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
    <section id="projects" className="projects-section">
      <div className="section-header">
        <h2 className="section-title">
          <span className="section-title-accent">Featured</span> Work
        </h2>
        <p className="section-subtitle">Click a card to explore, or filter by technology.</p>
      </div>

      {/* Tech filter pills */}
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

      {/* Cards grid */}
      <div className="projects-grid">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={i}
            onPreview={onPreview}
          />
        ))}
      </div>
    </section>
  )
}
