import { motion } from 'motion/react';
import { ShieldCheck, MapPin, Scale, MonitorSmartphone, ChevronDown } from 'lucide-react';
import { Button } from './ui/Button';
import { buildWhatsAppLink } from '../utils/whatsapp';

export function Hero() {
  const handleWhatsAppClick = () => {
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({ event: 'click_whatsapp_hero' });
    }
  };

  const whatsappUrl = buildWhatsAppLink("Olá, Dr. João. Vim pelo site e gostaria de conversar sobre meu caso previdenciário.");

  return (
    <section id="inicio" className="relative min-h-[100vh] xl:min-h-0 xl:h-full flex flex-col lg:flex-row lg:items-center pt-[64px] lg:pt-0 pb-12 lg:pb-0 overflow-hidden bg-slate-900">
      {/* Background Image (Desktop only) */}
      <div 
        className="hidden lg:block absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
          backgroundPosition: "center right",
        }}
      >
        {/* Overlay for text readability: fading to transparent on the right on desktop */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-transparent w-3/4"></div>
      </div>

      {/* Mobile Image */}
      <div className="lg:hidden relative w-full h-[50vh] min-h-[380px] shrink-0">
        <picture>
          <source media="(max-width: 1023px)" srcSet="/hero-mobile-joao-boeri.jpg" />
          <img 
            src="/hero-mobile-joao-boeri.jpg" 
            alt="João Boeri - Advogado Previdenciário" 
            className="w-full h-full object-cover object-top"
            fetchPriority="high"
          />
        </picture>
        {/* Gradient transition to content */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full -mt-16 lg:mt-0 flex-1 flex flex-col justify-center">
        {/* Mobile Content Block */}
        <div className="lg:hidden max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[clamp(2rem,9vw,2.5rem)] font-bold text-white leading-[1.12] mb-3"
          >
            Advogado Previdenciário Especialista em <span className="text-[#C5A880]">INSS</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[15px] sm:text-lg text-slate-300 mb-6 leading-relaxed font-light"
          >
            Precisa de um advogado especialista em Aposentadorias e em Benefícios do INSS? Entre em contato clicando no botão abaixo e eu vou ajudar você!
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-3 mb-6"
          >
            <Button href={whatsappUrl} variant="whatsapp" onClick={handleWhatsAppClick} data-cursor="cta" className="text-sm py-3.5">
              Conversar com o advogado
            </Button>
            <Button href="#servicos" variant="outline" data-cursor="hover" className="text-sm py-3.5 border-[#C5A880]/50 text-slate-200 hover:border-[#C5A880] hover:bg-[#C5A880]/10">
              Ver áreas de atuação
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-2"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-[11px] sm:text-sm font-medium text-slate-200 backdrop-blur-md">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C5A880]" />
              OAB/PA 33660
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-[11px] sm:text-sm font-medium text-slate-200 backdrop-blur-md">
              <MonitorSmartphone className="w-3.5 h-3.5 text-[#C5A880]" />
              Atendimento presencial e online
            </span>
          </motion.div>
        </div>

        {/* Desktop Content Block */}
        <div className="hidden lg:block max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.15] mb-6"
          >
            Advogado Previdenciário Especialista em <span className="text-[#C5A880]">INSS</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg lg:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed font-light"
          >
            Precisa de um advogado especialista em Aposentadorias e em Benefícios do INSS? Entre em contato clicando no botão abaixo e eu vou ajudar você!
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-row gap-4 mb-10"
          >
            <Button href={whatsappUrl} variant="whatsapp" onClick={handleWhatsAppClick} data-cursor="cta" className="text-base py-4 px-8">
              Conversar com o advogado
            </Button>
            <Button href="#servicos" variant="outline" data-cursor="hover" className="text-base py-4 border-[#C5A880]/50 text-slate-200 hover:border-[#C5A880] hover:bg-[#C5A880]/10">
              Ver áreas de atuação
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-2"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-[#C5A880]/30 text-sm font-medium text-slate-100 backdrop-blur-md">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C5A880]" />
              OAB/PA 33660
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-[#C5A880]/30 text-sm font-medium text-slate-100 backdrop-blur-md">
              <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
              Atendimento em Parauapebas/PA
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-[#C5A880]/30 text-sm font-medium text-slate-100 backdrop-blur-md">
              <MonitorSmartphone className="w-3.5 h-3.5 text-[#C5A880]" />
              Atendimento online
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-[#C5A880]/30 text-sm font-medium text-slate-100 backdrop-blur-md">
              <Scale className="w-3.5 h-3.5 text-[#C5A880]" />
              Atuação administrativa e judicial contra o INSS
            </span>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center animate-bounce text-slate-400 z-20">
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase mb-1 opacity-70">Role para continuar</span>
        <ChevronDown className="w-5 h-5 text-[#C5A880]" />
      </div>
    </section>
  );
}
