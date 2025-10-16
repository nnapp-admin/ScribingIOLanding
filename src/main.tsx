import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import App from './App.tsx';
import BlogPage from './pages/BlogPage.tsx';
import BlogDetail from './pages/BlogDetail.tsx';
import Legal from './pages/Legal.tsx';
import AboutCareer from './pages/AboutCareer.tsx'; // ✅ New About & Careers page
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* ✅ HelmetProvider enables SEO meta management */}
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/about" element={<AboutCareer />} /> {/* ✅ Added About & Careers route */}
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
