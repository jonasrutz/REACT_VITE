import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Store from './store.jsx'
import './index.css'
import About from './about.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>

)
createRoot(document.getElementById('about')).render(
<StrictMode>
  <About />
</StrictMode>
)
createRoot(document.getElementById('store')).render(
  <StrictMode>
  <Store />
</StrictMode>,
)
