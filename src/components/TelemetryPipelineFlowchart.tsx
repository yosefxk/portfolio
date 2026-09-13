import React, { useState } from 'react'

interface Stage {
  id: string
  step: string
  title: string
  subtitle: string
  icon: string
  color: string
  accentColor: string
  chips: string[]
  details: string
  metrics: string
}

const PIPELINE_STAGES: Stage[] = [
  {
    id: 'sensors',
    step: '01',
    title: 'Multi-Sensor Vehicle Fleet',
    subtitle: 'Edge Capture & High-Freq Ingestion',
    icon: '🚗',
    color: '#00c2ff',
    accentColor: 'rgba(0, 194, 255, 0.15)',
    chips: ['8x High-Res Video', 'Radar & LiDAR', 'High-Freq CAN Bus', '18+ OEM Fleets'],
    details: 'Vehicle test fleets continuously log synchronized multi-modal sensor streams during autonomous driving validation runs.',
    metrics: 'Petabyte-scale raw feeds'
  },
  {
    id: 'intake',
    step: '02',
    title: '10-Gate Ingestion Gateway',
    subtitle: 'Operational Readiness Protocol',
    icon: '🛡️',
    color: '#38bdf8',
    accentColor: 'rgba(56, 189, 248, 0.15)',
    chips: ['14-Day SLA', 'Schema Drift Guard', 'Readiness Verification', 'Pre-Flight Checks'],
    details: 'Structured onboarding protocol and self-service PM intake wizard ensuring complete operational and data integrity before cloud ingestion.',
    metrics: 'Onboarding cut from months to 14 days'
  },
  {
    id: 'compute',
    step: '03',
    title: 'Distributed Cloud Processing',
    subtitle: 'Kubernetes Batch & Storage Lake',
    icon: '☸️',
    color: '#818cf8',
    accentColor: 'rgba(129, 140, 248, 0.15)',
    chips: ['Kubernetes (Argo)', 'AWS S3 & Glacier', 'Parquet Format', '12k+ Datasets'],
    details: 'Distributed batch compute orchestrates 5,000-session rerun campaigns, transforms sensor logs into columnar Parquet, and manages multi-tier cloud lifecycles.',
    metrics: '5,000 session batch runs'
  },
  {
    id: 'copilot',
    step: '04',
    title: 'GenAI PM Copilot & Triage',
    subtitle: 'Self-Service Natural Language Assistant',
    icon: '🤖',
    color: '#34d399',
    accentColor: 'rgba(52, 211, 153, 0.15)',
    chips: ['Sub-2s Query Latency', 'Natural Language Blocker Q&A', 'Session Diagnostics', '50+ Agentic Skills'],
    details: 'Conversational AI chatbot embedded in the bringup dashboard allowing PMs to query blockers, session telemetry, and program ETAs without manual engineer triage.',
    metrics: '98% triage latency cut (90s ➔ <2s)'
  },
  {
    id: 'validation',
    step: '05',
    title: 'Algorithm & OEM Validation',
    subtitle: 'Model Training & Production Delivery',
    icon: '🎯',
    color: '#f59e0b',
    accentColor: 'rgba(245, 158, 11, 0.15)',
    chips: ['Computer Vision R&D', 'Safety Benchmark', 'Regression Testing', 'OEM Sign-Off'],
    details: 'High-integrity validated datasets feed directly into perception models, safety classifiers, and customer-facing delivery milestones.',
    metrics: '30+ concurrent ADAS/AV programs'
  }
]

export default function TelemetryPipelineFlowchart() {
  const [activeStage, setActiveStage] = useState<string>('copilot')

  const selected = PIPELINE_STAGES.find(s => s.id === activeStage) || PIPELINE_STAGES[3]

  return (
    <div className="flowchart-container">
      <div className="flowchart-header">
        <div className="flowchart-title-group">
          <span className="flowchart-badge">
            <span className="flowchart-pulse" />
            Interactive Enterprise Telemetry Flow
          </span>
          <h4 className="flowchart-title">Mobileye Telemetry & AI Copilot Architecture</h4>
          <p className="flowchart-subtitle">
            Sanitized end-to-end data lifecycle from automotive vehicle sensors through 10-gate operational intake, distributed Kubernetes/AWS storage, and GenAI-augmented triage.
          </p>
        </div>
      </div>

      {/* Nodes visual track */}
      <div className="flowchart-track">
        {PIPELINE_STAGES.map((stage, idx) => {
          const isActive = stage.id === activeStage

          return (
            <React.Fragment key={stage.id}>
              <div
                className={`flowchart-node ${isActive ? 'flowchart-node-active' : ''}`}
                onClick={() => setActiveStage(stage.id)}
                style={{
                  '--node-color': stage.color,
                  '--node-bg': stage.accentColor
                } as React.CSSProperties}
              >
                <div className="flowchart-node-icon-wrap">
                  <span className="flowchart-node-icon">{stage.icon}</span>
                  <span className="flowchart-node-step">{stage.step}</span>
                </div>
                <div className="flowchart-node-info">
                  <span className="flowchart-node-name">{stage.title}</span>
                  <span className="flowchart-node-sub">{stage.subtitle}</span>
                </div>
                {isActive && <div className="flowchart-node-active-bar" />}
              </div>

              {idx < PIPELINE_STAGES.length - 1 && (
                <div className="flowchart-connector">
                  <div className="flowchart-connector-line" />
                  <div className="flowchart-connector-arrow">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              )}
            </React.Fragment>
          )
        })}
      </div>

      {/* Deep-dive Inspector Card for Selected Stage */}
      <div
        className="flowchart-stage-inspector animate-fade-in"
        key={selected.id}
        style={{
          '--stage-color': selected.color,
          '--stage-bg': selected.accentColor
        } as React.CSSProperties}
      >
        <div className="inspector-header">
          <div className="inspector-left">
            <span className="inspector-icon">{selected.icon}</span>
            <div>
              <div className="inspector-step-badge">Stage {selected.step} of 05</div>
              <h5 className="inspector-title">{selected.title}</h5>
              <p className="inspector-subtitle">{selected.subtitle}</p>
            </div>
          </div>
          <div className="inspector-metric-pill">
            <span className="inspector-metric-label">Key Metric</span>
            <span className="inspector-metric-val">{selected.metrics}</span>
          </div>
        </div>

        <p className="inspector-desc">{selected.details}</p>

        <div className="inspector-chips-row">
          <span className="inspector-chips-label">Architecture Capabilities:</span>
          <div className="inspector-chips">
            {selected.chips.map(c => (
              <span key={c} className="inspector-chip">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
