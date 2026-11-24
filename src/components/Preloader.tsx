import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Scale } from 'lucide-react';

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Disable scrolling while preloader is active
    document.body.style.overflow = 'hidden';

    let timeout: NodeJS.Timeout;
    const minLoadingTime = 700;
    const maxLoadingTime = 3000;
    const startTime = Date.now();
    let isMounted = true;

    const finishLoading = () => {
      if (!isMounted) return;
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minLoadingTime - elapsedTime);
      
      timeout = setTimeout(() => {
        setIsLoading(false);
        document.body.style.overflow = '';
      }, remainingTime);
    };

    const isMobile = window.innerWidth < 1024;
    const heroImage = new Image();
    
    // Fallback timeout in case image takes too long or fails
    const fallbackTimeout = setTimeout(() => {
      finishLoading();
    }, maxLoadingTime);

    heroImage.onload = () => {
      clearTimeout(fallbackTimeout);
      finishLoading();
    };

    heroImage.onerror = () => {
      clearTimeout(fallbackTimeout);
      finishLoading();
    };

    // Load appropriate image based on viewport
    heroImage.src = isMobile ? '/hero-mobile-joao-boeri.jpg' : '/hero-bg.jpg';

    return () => {
      isMounted = false;
      clearTimeout(timeout);
      clearTimeout(fallbackTimeout);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a1120] text-white"
        >
          {/* Subtle radial background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#C5A880]/10 via-transparent to-transparent opacity-50" />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative z-10 flex flex-col items-center"
          >
            <div className="w-16 h-16 rounded-full bg-slate-900/50 border border-slate-800 flex items-center justify-center mb-6 shadow-2xl relative overflow-hidden">
              <Scale className="w-8 h-8 text-[#C5A880] relative z-10" />
              {/* Shine effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent skew-x-12"
                animate={{ x: ['-150%', '150%'] }}
                transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }}
              />
            </div>
            
            <h2 className="font-bold text-xl uppercase tracking-[0.15em] mb-2 text-white">
              João Boeri
            </h2>
            <p className="text-[#C5A880] text-xs font-medium tracking-[0.2em] uppercase mb-8">
              Advocacia
            </p>
            
            {/* Minimalist progress indicator */}
            <div className="w-48 h-[2px] bg-slate-800 rounded-full overflow-hidden relative">
              <motion.div 
                className="absolute top-0 left-0 bottom-0 bg-[#C5A880] rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.5, ease: "circOut" }}
              />
            </div>
            <p className="text-slate-500 text-[10px] uppercase tracking-widest mt-4">
              Preparando sua experiência
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
