export interface Project {
  id: string
  name: string
  description: string
  longDescription: string
  stack: string[]
  color: string
  accentColor: string
  liveUrl?: string
  githubUrl?: string
  icon: string
  featured?: boolean
  status: 'live' | 'private' | 'wip'
}

export const projects: Project[] = [
  {
    id: 'tzeva-adom',
    name: 'Tzeva Adom Dashboard',
    description: 'Real-time Israeli rocket alert dashboard with live maps, historical data, and multi-language support.',
    longDescription: 'A comprehensive real-time monitoring dashboard for Israeli civil defense alerts (Pikud HaOref). Features live SSE streaming, interactive heatmaps, 174k+ historical alerts, multi-language support (Hebrew/English/Arabic), and detailed city-level analytics.',
    stack: ['React', 'TypeScript', 'Express', 'SQLite', 'Recharts', 'Docker'],
    color: '#ff334b',
    accentColor: 'rgba(255, 51, 75, 0.15)',
    liveUrl: 'https://oref.baileytv.tech',
    githubUrl: 'https://github.com/yosefxk/tzeva-adom-dashboard',
    icon: '🚨',
    featured: true,
    status: 'live',
  },
  {
    id: 'flights-dashboard',
    name: 'Ben Gurion Flights',
    description: 'Live arrivals & departures board for TLV airport. Bilingual, auto-refreshing, with smart filtering.',
    longDescription: 'Real-time flight board for Ben Gurion Airport (TLV) powered by the Israeli Airport Authority open API. Features arrival/departure tabs, airline/destination filtering, bilingual Hebrew/English UI, and automatic 5-minute refresh cycles.',
    stack: ['Next.js', 'FastAPI', 'Python', 'Docker', 'TypeScript'],
    color: '#00c2ff',
    accentColor: 'rgba(0, 194, 255, 0.12)',
    liveUrl: undefined,
    githubUrl: 'https://github.com/yosefxk/flights_dashboard',
    icon: '✈️',
    featured: true,
    status: 'private',
  },
  {
    id: 'lpp',
    name: 'License Plate Finder',
    description: 'Full vehicle intelligence dashboard querying 17+ Israeli government endpoints in parallel.',
    longDescription: 'A high-performance vehicle lookup tool that concurrently queries 17+ Israeli Ministry of Transport datasets. Surfaces ownership history, active recalls, structural modifications, and a dynamic "Red Flag" warning system for dangerous vehicle states. Built with a modern Next.js frontend and FastAPI backend.',
    stack: ['Next.js', 'FastAPI', 'Python', 'TypeScript', 'Docker'],
    color: '#f59e0b',
    accentColor: 'rgba(245, 158, 11, 0.12)',
    liveUrl: undefined,
    githubUrl: 'https://github.com/yosefxk/lpp_njs',
    icon: '🚗',
    featured: true,
    status: 'private',
  },
  {
    id: 'dog-walk-planner',
    name: 'Dog Walk Planner',
    description: 'Private authenticated scheduling app for dog walks with persistent storage and Google OAuth.',
    longDescription: 'A private Streamlit-powered scheduling app for managing dog walks. Features Google OAuth authentication, persistent walk schedule storage, color-coded interactive UI, and Docker-based deployment. Designed for personal family use with whitelist-based access control.',
    stack: ['Python', 'Streamlit', 'Docker', 'OAuth'],
    color: '#22c55e',
    accentColor: 'rgba(34, 197, 94, 0.12)',
    liveUrl: undefined,
    githubUrl: 'https://github.com/yosefxk/dog-walk-planner',
    icon: '🐕',
    featured: false,
    status: 'private',
  },
]
