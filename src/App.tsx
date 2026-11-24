/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { CustomCursor } from './components/CustomCursor';
import { Preloader } from './components/Preloader';
import { HomePage } from './pages/HomePage';
import { PracticeAreaPage } from './pages/PracticeAreaPage';

function RouteTracker() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      // Dispara um evento de visualização virtual ('virtual_page_view') a cada mudança de rota.
      // O GTM pode utilizar esse evento se não estiver utilizando o gatilho nativo de "Mudança de Histórico".
      // Utilizamos um nome diferente para evitar o disparo de page_view duplicados caso o "Enhanced Measurement" do GA4 esteja ativo.
      (window as any).dataLayer.push({
        event: 'virtual_page_view',
        page_path: location.pathname + location.search,
        page_url: window.location.href,
      });
    }
  }, [location]);

  return null;
}

export default function App() {
  return (
    <>
      <Preloader />
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-[#C5A880] selection:text-white">
        <CustomCursor />
        <RouteTracker />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:slug" element={<PracticeAreaPage />} />
        </Routes>
        <FloatingWhatsApp />
      </div>
    </>
  );
}
