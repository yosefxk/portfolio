import { useState, useEffect, useRef } from 'react'
import '../index.css'
import { projects, type Project } from '../data/projects'
import HeroSection from './HeroSection'
import FeaturedProject from './FeaturedProject'
import ProjectGrid from './ProjectGrid'
import ExperienceSection from './ExperienceSection'
import HomelabSection from './HomelabSection'
import SkillsSection from './SkillsSection'
import Footer from './Footer'
import PreviewModal from './PreviewModal'
import ContactModal from './ContactModal'

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [previewProject, setPreviewProject] = useState<Project | null>(null)
  const [isContactOpen, setIsContactOpen] = useState(false)
  const cursorGlowRef = useRef<HTMLDivElement>(null)

  // Smooth cursor glow with lerp
  useEffect(() => {
    let x = 0, y = 0
    let tx = 0, ty = 0
    let raf: number

    const handleMouseMove = (e: MouseEvent) => {
      tx = e.clientX
      ty = e.clientY
    }

    const animate = () => {
      x += (tx - x) * 0.08
      y += (ty - y) * 0.08
      if (cursorGlowRef.current) {
        cursorGlowRef.current.style.left = `${x}px`
        cursorGlowRef.current.style.top = `${y}px`
      }
      raf = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove)
    raf = requestAnimationFrame(animate)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  const featuredProjects = projects.filter(p => p.featured)

  return (
    <div className="app">
      <div className="cursor-glow" ref={cursorGlowRef} />

      {/* Navigation */}
      <nav className="nav">
        <div className="container nav-container">
          <a href="#" className="nav-logo">
            <span className="logo-badge">JL</span>
            <span className="logo-name">Joseph Lampert</span>
          </a>

          <div className="nav-links">
            <a href="#projects" className="nav-link">Systems</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#homelab" className="nav-link">Homelab</a>
            <a href="#stack" className="nav-link">Skills</a>
            <button onClick={() => setIsContactOpen(true)} className="nav-btn-contact">
              Connect
            </button>
            <a
              href="https://github.com/yosefxk"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-github"
              title="GitHub Profile"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection onOpenContact={() => setIsContactOpen(true)} />

      {/* Featured Systems Section */}
      <section id="projects" className="work-section">
        <div className="container">
          <div className="work-header">
            <div className="section-eyebrow">Production Portfolio</div>
            <h2 className="section-title">
              <span className="gradient-text">Featured</span> Systems
            </h2>
            <p className="section-subtitle">
              High-impact platforms solving real-world challenges in AI automation and live telemetry.
            </p>
          </div>

          {/* Dual featured flagships */}
          <FeaturedProject projects={featuredProjects} onPreview={setPreviewProject} />

          {/* All systems with interactive filter */}
          <ProjectGrid
            projects={projects}
            activeFilter={activeCategory}
            onFilterChange={setActiveCategory}
            onPreview={setPreviewProject}
          />
        </div>
      </section>

      {/* Career Experience & Milestones */}
      <ExperienceSection />

      {/* Homelab & Infrastructure Showcase */}
      <HomelabSection />

      {/* Skills Matrix */}
      <SkillsSection />

      {/* Footer */}
      <Footer onOpenContact={() => setIsContactOpen(true)} />

      {/* Case Study Preview Modal */}
      {previewProject && (
        <PreviewModal
          project={previewProject}
          onClose={() => setPreviewProject(null)}
        />
      )}

      {/* Contact & Connect Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  )
}

export default Portfolio
