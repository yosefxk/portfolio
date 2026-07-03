import { useEffect, useRef, useState } from 'react'
import type { Project } from '../data/projects'

const TECH_ICONS: Record<string, string> = {
  'React': '⚛️',
  'TypeScript': '🔷',
  'Express': '🟩',
  'SQLite': '🗄️',
  'Recharts': '📊',
  'Docker': '🐳',
  'Next.js': '▲',
  'FastAPI': '⚡',
  'Python': '🐍',
  'OAuth': '🔐',
  'Streamlit': '🎈',
}

interface SkillsSectionProps {
  projects: Project[]
}

export default function SkillsSection({ projects }: SkillsSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Count how many projects use each tech
  const techCounts = projects
    .flatMap(p => p.stack)
    .reduce<Record<string, number>>((acc, tech) => {
      acc[tech] = (acc[tech] || 0) + 1
      return acc
    }, {})

  const techs = Object.entries(techCounts).sort((a, b) => b[1] - a[1])

  return (
    <section ref={sectionRef} className={`skills-section ${visible ? 'visible' : ''}`}>
      <div className="section-header">
        <h2 className="section-title">
          <span className="section-title-accent">Tech</span> Stack
        </h2>
        <p className="section-subtitle">Technologies powering these apps.</p>
      </div>

      <div className="skills-grid">
        {techs.map(([tech, count], i) => (
          <div
            key={tech}
            className="skill-card"
            style={{ animationDelay: `${i * 0.07}s` }}
          >
            <span className="skill-icon">{TECH_ICONS[tech] || '🔧'}</span>
            <span className="skill-name">{tech}</span>
            <span className="skill-count">{count} project{count > 1 ? 's' : ''}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
