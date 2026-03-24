import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' //Brings in Global Styling
import App from './App.jsx' //This says bring in the main screen component

createRoot(document.getElementById('root')).render( //Find the empty part in webpage and put react app here.
  <StrictMode>
    <App />
  </StrictMode>,
)
