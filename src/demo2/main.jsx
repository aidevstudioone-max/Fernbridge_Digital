import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GalaxyApp from './GalaxyApp.jsx'

createRoot(document.getElementById('demo2-root')).render(
  <StrictMode><GalaxyApp /></StrictMode>,
)
