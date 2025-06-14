import { createRoot } from 'react-dom/client'
import '/src/styles/reset.css/'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext'


createRoot(document.getElementById('root')).render(
    <ThemeProvider>
        <App />
    </ThemeProvider>
    
)
