import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { buildWhatsAppLink } from '../utils/whatsapp';

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      // Show after 300px on mobile, 100px on desktop
      const threshold = window.innerWidth < 1024 ? 300 : 100;
      setIsVisible(window.scrollY > threshold);
    };

    // Initial check
    checkScroll();

    window.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const handleClick = () => {
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({ event: 'click_whatsapp_floating' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href={buildWhatsAppLink("Olá, Dr. João. Vim pelo site e gostaria de conversar sobre meu caso previdenciário.")}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="cta"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="fixed bottom-6 right-4 sm:right-6 z-50 bg-[#25D366] text-white p-3.5 sm:p-4 rounded-full shadow-2xl hover:bg-[#20BD5A] transition-colors duration-300 hover:scale-110 active:scale-95 group"
          aria-label="Falar com João Boeri no WhatsApp"
          onClick={handleClick}
        >
          <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8" />
          <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-sm font-semibold px-4 py-2 rounded-xl shadow-lg opacity-0 lg:group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden sm:block">
            Fale com um Especialista
            <div className="absolute top-1/2 -translate-y-1/2 -right-1.5 w-3 h-3 bg-slate-900 rotate-45"></div>
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
