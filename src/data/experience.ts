export interface ExperienceItem {
  id: string
  company: string
  role: string
  period: string
  location: string
  badge?: string
  color: string
  summary: string
  highlights: string[]
  tags: string[]
}

export const experiences: ExperienceItem[] = [
  {
    id: 'mobileye',
    company: 'Mobileye',
    role: 'Data Infrastructure Project Manager',
    period: '2025 – Present',
    location: 'Jerusalem, Israel',
    badge: 'Current',
    color: '#00c2ff',
    summary: 'Directing cross-functional data delivery for petabyte-scale autonomous vehicle sensor telemetry across global automotive OEM programs.',
    highlights: [
      'Directed technical program delivery across 18 concurrent automotive OEM programs, aligning Algorithm, Software, and System Integration teams.',
      'Accelerated program onboarding from several months to 14 days by architecting a 10-gate readiness protocol and automated intake workflows.',
      'Diagnosed and resolved critical distributed cloud bottlenecks, cutting workflow latency by 98% (90+ seconds down to under 2 seconds).',
      'Authored 50+ internal automation modules and 40+ Python tools, eliminating manual triage overhead across 12,000+ production datasets.',
      'Orchestrated large-scale vehicle sensor telemetry rerun campaigns across distributed batch workers for up to 5,000 recording sessions per campaign.',
      'Established automated metadata cataloging and data integrity validations for petabyte-scale video and CAN bus recording lakes.'
    ],
    tags: ['Distributed Telemetry', 'Kubernetes / Argo', 'AWS S3 / Glacier', 'Python', 'OEM Delivery', 'TPM']
  },
  {
    id: 'amdocs',
    company: 'Amdocs',
    role: 'Data Engineer & Data Analyst',
    period: '2022 – 2025',
    location: 'Israel',
    color: '#6366f1',
    summary: 'Architected scalable ETL/ELT pipelines, transformation workflows, and analytical models for enterprise clients and AI initiatives.',
    highlights: [
      'Designed low-latency data infrastructure and transformation pipelines using Python and SQL (Snowflake/dbt) to power enterprise AI initiatives.',
      'Developed automated data cleansing and transformation workflows, establishing engineering best practices across analytics pipelines.',
      'Engineered scalable batch ingestion handling millions of structured transactional records with a 99.9% data delivery SLA.',
      'Authored advanced analytical SQL models and telemetry dashboards, delivering real-time operational visibility for enterprise client accounts.'
    ],
    tags: ['Snowflake', 'dbt', 'Python', 'SQL', 'ETL/ELT', 'AI Pipelines', '99.9% SLA']
  },
  {
    id: 'intel',
    company: 'Intel Corporation',
    role: 'Data Analyst',
    period: '2021 – 2022',
    location: 'Israel',
    color: '#0ea5e9',
    summary: 'Delivered measurable operational cost reductions through deep data analytics and custom Python/VBA automation.',
    highlights: [
      'Championed cost-optimization initiatives through data analytics and Python/VBA automation, delivering over $1,000,000 in annual operational savings.',
      'Constructed executive KPI reporting pipelines to streamline manufacturing and supply chain resource allocation.'
    ],
    tags: ['Cost Optimization', '$1M+ ROI', 'Python Automation', 'Analytics', 'KPI Pipelines']
  },
  {
    id: 'navy',
    company: 'Israeli Navy',
    role: 'Captain (Res.)',
    period: '2014 – 2018',
    location: 'Israel',
    badge: 'Military Leadership',
    color: '#3b82f6',
    summary: 'Led high-stakes naval operations and cross-functional teams under intense, dynamic operational conditions.',
    highlights: [
      'Commanded naval teams in high-tempo operational environments, demonstrating decisive leadership, risk management, and mission-critical execution.'
    ],
    tags: ['Executive Leadership', 'High-Stakes Decision Making', 'Crisis Management', 'Team Command']
  },
  {
    id: 'shenkar',
    company: 'Shenkar College of Engineering',
    role: 'B.Sc. in Industrial Engineering & Management',
    period: 'Class of 2022',
    location: 'Israel',
    badge: 'Valedictorian (Summa Cum Laude)',
    color: '#ec4899',
    summary: 'Graduated as Class Valedictorian with Summa Cum Laude honors (GPA 95.5), specializing in data systems, operations research, and software architecture.',
    highlights: [
      'Class Valedictorian — Summa Cum Laude (GPA: 95.5 / 100).',
      'Advanced coursework in algorithms, relational and distributed databases, statistical modeling, and systems engineering.'
    ],
    tags: ['Valedictorian', 'Summa Cum Laude', 'GPA 95.5', 'Industrial Engineering', 'Operations Research']
  }
]
