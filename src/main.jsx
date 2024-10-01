import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Globalstyles } from './styles/globalstyles.js'
import router from './Router.jsx'
import {RouterProvider} from "react-router-dom"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Globalstyles/>
    <RouterProvider router={router} />
  </StrictMode>,
)
