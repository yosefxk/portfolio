export interface Project {
  id: string
  name: string
  tagline: string
  description: string
  longDescription: string
  stack: string[]
  color: string
  gradient: string
  liveUrl?: string
  githubUrl?: string
  icon: string
  thumbnail: string
  featured: boolean
  status: 'live' | 'public' | 'private' | 'wip'
  year: number
  highlights: string[]
}

export const projects: Project[] = [
  {
    id: 'tzeva-adom',
    name: 'Tzeva Adom',
    tagline: 'Real-time rocket alert dashboard',
    description: 'Full-stack monitoring dashboard for Israeli civil defense alerts with live streaming, interactive heatmaps, and 174k+ historical records.',
    longDescription: 'A comprehensive real-time monitoring system for Israeli civil defense alerts (Pikud HaOref). Built from scratch with live SSE streaming, interactive heatmaps, 174k+ historical alerts imported from open-source archives, and detailed city-level analytics with rollup support for multi-area cities. Fully trilingual: Hebrew, English, and Arabic.',
    stack: ['React', 'TypeScript', 'Express', 'SQLite', 'Recharts', 'Docker'],
    color: '#ff334b',
    gradient: 'linear-gradient(135deg, #ff334b 0%, #c41230 100%)',
    liveUrl: 'https://oref.baileytv.tech',
    githubUrl: 'https://github.com/yosefxk/tzeva-adom-dashboard',
    icon: '🚨',
    thumbnail: '/thumb-tzeva-adom.png',
    featured: true,
    status: 'live',
    year: 2025,
    highlights: ['Live SSE streaming', '174k+ historical records', 'Trilingual (HE/EN/AR)', 'Interactive heatmap'],
  },
  {
    id: 'flights-dashboard',
    name: 'TLV Flights',
    tagline: 'Live flight board for Ben Gurion Airport',
    description: 'Bilingual arrivals & departures board for TLV airport powered by the Israeli Airport Authority API, with smart filtering and auto-refresh.',
    longDescription: 'Real-time flight board for Ben Gurion Airport (TLV) powered by the Israeli Airport Authority open API, refreshed every 5 minutes. Features separate arrivals/departures tabs, airline and destination filtering, sort by any column, and a seamless Hebrew/English toggle with full RTL support.',
    stack: ['Next.js', 'FastAPI', 'Python', 'TypeScript', 'Docker'],
    color: '#00c2ff',
    gradient: 'linear-gradient(135deg, #00c2ff 0%, #0070f3 100%)',
    liveUrl: undefined,
    githubUrl: 'https://github.com/yosefxk/flights_dashboard',
    icon: '✈️',
    thumbnail: '/thumb-flights.png',
    featured: true,
    status: 'private',
    year: 2025,
    highlights: ['Auto-refresh every 5 min', 'Bilingual RTL/LTR', 'Sort & filter', 'Gov open API'],
  },
  {
    id: 'lpp',
    name: 'Plate Finder',
    tagline: 'Israeli vehicle intelligence in milliseconds',
    description: 'Queries 17+ Israeli government endpoints in parallel to surface full vehicle profiles: ownership history, recalls, structural mods, and red flags.',
    longDescription: 'A high-performance Israeli vehicle lookup tool built with Next.js and FastAPI. Concurrently hits 17+ Ministry of Transport datasets using ThreadPoolExecutor, returning complete vehicle profiles in milliseconds. Surfaces ownership history, active recalls, structural modifications, handicapped badge status, and a dynamic "Red Flag" warning system for dangerous vehicle states.',
    stack: ['Next.js', 'FastAPI', 'Python', 'TypeScript', 'Docker'],
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    liveUrl: undefined,
    githubUrl: 'https://github.com/yosefxk/lpp_njs',
    icon: '🚗',
    thumbnail: '/thumb-lpp.png',
    featured: true,
    status: 'private',
    year: 2024,
    highlights: ['17+ parallel API calls', 'Red Flag system', 'Ownership timeline', 'Shareable URLs'],
  },
  {
    id: 'dog-walk-planner',
    name: 'Dog Walk Planner',
    tagline: 'Family scheduling app with Google OAuth',
    description: 'A Streamlit scheduling app for managing dog walks — authenticated via Google OAuth, with persistent storage and a color-coded interactive calendar.',
    longDescription: 'A private family utility app built with Streamlit for managing daily dog walk schedules. Uses Google OAuth for whitelist-based access, persistent JSON storage, and a color-coded weekly calendar. Deployed in Docker on a home server for instant family access.',
    stack: ['Python', 'Streamlit', 'Docker', 'OAuth'],
    color: '#22c55e',
    gradient: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
    liveUrl: undefined,
    githubUrl: 'https://github.com/yosefxk/dog-walk-planner',
    icon: '🐕',
    thumbnail: '/thumb-dogwalk.png',
    featured: false,
    status: 'public',
    year: 2024,
    highlights: ['Google OAuth', 'Persistent schedule', 'Color-coded calendar', 'Docker deployed'],
  },
]
