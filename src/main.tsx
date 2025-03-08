import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'hahocss/dist/styles.min.css'
import './styles/globals.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
