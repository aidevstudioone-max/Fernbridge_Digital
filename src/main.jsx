import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// Opt into reveal-on-scroll only when scripting is alive; the CSS keeps
// everything visible otherwise.
document.documentElement.classList.add('js-rv')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
