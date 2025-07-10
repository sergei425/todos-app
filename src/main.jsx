import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TodoProvider from "./TodoProvider";
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <TodoProvider>
      <App />
    </TodoProvider>
  </StrictMode>,
)
