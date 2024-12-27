import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Details from './routes/Details.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route index={true} path="/" element={<App />} />
      <Route index={false} path="/bookDetails/:book" element={<Details />} />
    </Routes>
  </BrowserRouter>
)
