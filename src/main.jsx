import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { router } from "./router.jsx"
import { RouterProvider } from 'react-router-dom'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router ={router}/>
  </StrictMode>,
)
