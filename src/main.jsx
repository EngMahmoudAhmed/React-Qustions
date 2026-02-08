import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import ProviderContext from './context/ProviderContext.jsx'
// import Profile from './context/Profile.jsx'
import QuizProvider from './context/QuizProvider.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QuizProvider>
      <App />
    </QuizProvider>
  </StrictMode>,
)
