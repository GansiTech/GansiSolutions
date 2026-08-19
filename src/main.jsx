import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import useScrollAnalytics from './hooks/useScrollAnalytics'

function Main() {
  // Trackear vistas de secciones para analítica
  useScrollAnalytics(['hero', 'beneficios', 'precios', 'confianza', 'contacto'])

  return <App />
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main />
  </StrictMode>,
)