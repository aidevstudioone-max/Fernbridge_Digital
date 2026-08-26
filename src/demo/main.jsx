import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import BrutalApp from './BrutalApp.jsx'

createRoot(document.getElementById('demo-root')).render(
  <StrictMode><BrutalApp /></StrictMode>,
)
