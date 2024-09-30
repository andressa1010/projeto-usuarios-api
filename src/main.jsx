import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Globalstyles } from './styles/globalstyles.js'
import Home from './pages/Home'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Globalstyles/>
    <Home />
  </StrictMode>,
)
