import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Portfolio from './components/Portfolio'
import Homelab from './components/Homelab'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/WenrixDeck" element={<Homelab />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
