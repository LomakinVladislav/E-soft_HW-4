import { createRoot } from 'react-dom/client'
import '/src/styles/reset.css/'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <App />
)
