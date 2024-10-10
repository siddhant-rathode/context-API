import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TodoContext from './contexts/TodoContext.jsx'

createRoot(document.getElementById('root')).render(
  <TodoContext>
    <App />
  </TodoContext>,
)
