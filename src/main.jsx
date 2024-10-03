import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Video from './components/Video_gen'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Video />

  </StrictMode>,
)
