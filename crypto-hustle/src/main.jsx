import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './routes/Layout';
import './index.css'
import App from './App.jsx'
import DetailView from './routes/DetailView';
import NotFound from './routes/NotFound';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index={true} element={<App />} />
        <Route index={false} path="/coinDetails/:symbol" element={<DetailView />} />
      </Route>
      <Route
      path="*"
      element={ <NotFound /> }
      />

    </Routes>
  </BrowserRouter>

)
