import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, MessageSquare, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { googleReviews } from '../data/googleReviews';

const getInitials = (name: string) => {
  const parts = name.trim().split(' ');
  if (parts.length === 0) return '';
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
};

export function GoogleReviews() {
  const [currentPage, setCurrentPage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(1);
  const [modalReview, setModalReview] = useState<any>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setCardsPerPage(3);
      } else if (window.innerWidth >= 768) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(1);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (googleReviews.length === 0 && import.meta.env.PROD) {
    return null;
  }

  const sortedReviews = [...googleReviews].sort((a, b) => {
    const aRelevance = a.text.toLowerCase().includes('previdenciári');
    const bRelevance = b.text.toLowerCase().includes('previdenciári');
    if (aRelevance && !bRelevance) return -1;
    if (!aRelevance && bRelevance) return 1;
    if (a.authorPhoto && !b.authorPhoto) return -1;
    if (!a.authorPhoto && b.authorPhoto) return 1;
    if (a.rating > b.rating) return -1;
    if (a.rating < b.rating) return 1;
    return 0;
  });

  const totalPages = Math.ceil(sortedReviews.length / cardsPerPage);
  
  // Prevent out of bounds if resize changes totalPages
  useEffect(() => {
    if (currentPage >= totalPages && totalPages > 0) {
      setCurrentPage(totalPages - 1);
    }
  }, [totalPages, currentPage]);

  const nextReview = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevReview = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const visibleReviews = sortedReviews.slice(
    currentPage * cardsPerPage,
    (currentPage + 1) * cardsPerPage
  );

  return (
    <section id="avaliacoes" className="relative bg-[#0B0F19] overflow-hidden pt-24 pb-24">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-[#C5A880]/5 to-transparent rounded-full blur-3xl pointer-events-none transform -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gradient-to-tl from-slate-800/20 to-transparent rounded-full blur-3xl pointer-events-none transform translate-x-1/3 translate-y-1/3" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {googleReviews.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center h-[50vh] border border-dashed border-slate-700 rounded-2xl p-8 bg-slate-900/50">
            <MessageSquare className="w-12 h-12 text-slate-500 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Conecte ou cadastre avaliações reais do Google para exibir esta seção.</h3>
            <p className="text-slate-400 max-w-md">Edite o arquivo <code className="bg-slate-800 px-2 py-1 rounded text-[#C5A880]">src/data/googleReviews.ts</code> para adicionar avaliações do perfil do João Boeri.</p>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-12">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="w-6 h-[1px] bg-[#C5A880]"></span>
                  <span className="text-[#C5A880] text-[10px] font-bold tracking-[0.2em] uppercase">Prova Social</span>
                  <span className="w-6 h-[1px] bg-[#C5A880]"></span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                  Quem já foi atendido recomenda
                </h2>
                <div className="flex flex-col items-center justify-center gap-3">
                  <div className="flex items-center gap-3 bg-slate-800/40 px-4 py-2 rounded-full border border-slate-700/50">
                    <span className="text-white font-bold text-lg">5,0</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <span className="text-slate-400 text-sm font-medium tracking-wide">
                    {/* The user requested this exact wording: */}
                    Nota 5,0 com 30 avaliações no Google Maps
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Grid for Cards */}
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 relative min-h-[400px]">
                <AnimatePresence mode="popLayout">
                  {visibleReviews.map((review, index) => {
                    const shouldTruncate = review.text.length > 180;
                    return (
                      <motion.div
                        key={review.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white rounded-2xl p-6 lg:p-8 flex flex-col h-full border border-slate-100 shadow-xl shadow-black/5"
                      >
                        <div className="flex items-center justify-between mb-4 shrink-0">
                          <div className="flex items-center gap-3">
                            {review.authorPhoto ? (
                              <img src={review.authorPhoto} alt={review.authorName} className="w-10 h-10 rounded-full object-cover border border-slate-100" />
                            ) : (
                              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-100 flex items-center justify-center shrink-0">
                                <span className="text-slate-500 font-bold text-xs tracking-wider">{getInitials(review.authorName)}</span>
                              </div>
                            )}
                            <div>
                              <p className="font-bold text-slate-900 text-sm leading-tight">{review.authorName}</p>
                              <span className="text-xs text-slate-500">{review.relativeTime || review.date}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1.5 opacity-80 shrink-0 bg-slate-50 px-2.5 py-1 rounded-full border border-slate-100">
                            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path fill="#4285F4" d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z" />
                              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                            </svg>
                            <span className="text-[10px] font-medium text-slate-600">Google Maps</span>
                          </div>
                        </div>
                        <div className="flex gap-1 mb-3 shrink-0">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-3.5 h-3.5 ${i < review.rating ? 'fill-[#C5A880] text-[#C5A880]' : 'fill-slate-200 text-slate-200'}`} />
                          ))}
                        </div>
                        <div className="text-slate-600 text-[13.5px] leading-relaxed flex-grow">
                          <p className={shouldTruncate ? "line-clamp-4" : ""}>
                            "{review.text}"
                          </p>
                          {shouldTruncate && (
                            <button
                              onClick={() => setModalReview(review)}
                              className="text-[#C5A880] font-medium mt-1 hover:underline focus:outline-none"
                              data-cursor="hover"
                            >
                              Ler mais
                            </button>
                          )}
                          {review.ownerResponse && !shouldTruncate && (
                            <div className="mt-4 bg-slate-50 p-3 rounded-lg border border-slate-100">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-semibold text-slate-800 text-xs">Resposta do escritório</span>
                              </div>
                              <p className="text-xs text-slate-500 italic leading-relaxed">
                                "{review.ownerResponse}"
                              </p>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>

              {/* Navigation Controls */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center mt-10 gap-6">
                  <button 
                    onClick={prevReview}
                    data-cursor="hover"
                    className="w-12 h-12 rounded-full border border-slate-700 bg-slate-800/50 flex items-center justify-center text-slate-400 hover:text-white hover:border-[#C5A880] hover:bg-[#C5A880]/10 transition-colors"
                    aria-label="Anteriores"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  
                  <div className="flex items-center gap-2">
                    {[...Array(totalPages)].map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentPage(idx)}
                        data-cursor="hover"
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                          currentPage === idx 
                            ? 'bg-[#C5A880] w-6' 
                            : 'bg-slate-700 hover:bg-slate-500'
                        }`}
                        aria-label={`Ir para a página ${idx + 1}`}
                      />
                    ))}
                  </div>

                  <button 
                    onClick={nextReview}
                    data-cursor="hover"
                    className="w-12 h-12 rounded-full border border-slate-700 bg-slate-800/50 flex items-center justify-center text-slate-400 hover:text-white hover:border-[#C5A880] hover:bg-[#C5A880]/10 transition-colors"
                    aria-label="Próximas"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          </>
        )}
      </div>

      {/* Modal for full review */}
      <AnimatePresence>
        {modalReview && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setModalReview(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-lg bg-white rounded-2xl shadow-2xl z-50 p-6 md:p-8 overflow-hidden max-h-[85vh] flex flex-col"
            >
              <button
                onClick={() => setModalReview(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
                data-cursor="hover"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="flex items-center gap-3 mb-6 shrink-0 pr-10">
                {modalReview.authorPhoto ? (
                  <img src={modalReview.authorPhoto} alt={modalReview.authorName} className="w-12 h-12 rounded-full object-cover border border-slate-200" />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-100 flex items-center justify-center shrink-0">
                    <span className="text-slate-600 font-bold text-sm tracking-wider">{getInitials(modalReview.authorName)}</span>
                  </div>
                )}
                <div>
                  <p className="font-bold text-slate-900 leading-tight">{modalReview.authorName}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-3 h-3 ${i < modalReview.rating ? 'fill-[#C5A880] text-[#C5A880]' : 'fill-slate-200 text-slate-200'}`} />
                      ))}
                    </div>
                    <span className="text-xs text-slate-500">• {modalReview.relativeTime || modalReview.date}</span>
                  </div>
                </div>
              </div>
              <div className="overflow-y-auto custom-scrollbar flex-grow pr-2">
                <p className="text-slate-600 text-[15px] leading-relaxed">
                  "{modalReview.text}"
                </p>
                
                {modalReview.ownerResponse && (
                  <div className="mt-5 bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-semibold text-slate-800 text-sm">Resposta do escritório</span>
                    </div>
                    <p className="text-sm text-slate-600 italic leading-relaxed">
                      "{modalReview.ownerResponse}"
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #E2E8F0; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #CBD5E1; }
      `}} />
    </section>
  );
}
