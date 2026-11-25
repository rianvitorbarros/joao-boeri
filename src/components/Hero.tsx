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
    <section id="inicio" className="relative min-h-[100vh] xl:min-h-0 xl:h-full flex flex-col lg:flex-row lg:items-center pt-[64px] lg:pt-0 pb-12 lg:pb-0 overflow-hidden bg-[#ECECEC]">
      {/* Photo (Desktop only): anchored right, fading into the light studio background */}
      <div className="hidden lg:block absolute inset-y-0 right-0 w-1/2 xl:w-[55%]">
        <img
          src="/hero-joao-boeri-desktop.jpg"
          alt="João Boeri - Advogado Previdenciário"
          className="w-full h-full object-cover object-[50%_30%]"
          fetchPriority="high"
        />
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#ECECEC] to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#ECECEC]/80 to-transparent"></div>
      </div>

      {/* Mobile Image */}
      <div className="lg:hidden relative w-full h-[50vh] min-h-[380px] shrink-0">
        <picture>
          <source media="(max-width: 1023px)" srcSet="/hero-joao-boeri-mobile.jpg" />
          <img 
            src="/hero-joao-boeri-mobile.jpg" 
            alt="João Boeri - Advogado Previdenciário" 
            className="w-full h-full object-cover object-top"
            fetchPriority="high"
          />
        </picture>
        {/* Gradient transition to content */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#ECECEC] from-5% via-[#ECECEC]/0 via-45% to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full -mt-16 lg:mt-0 flex-1 flex flex-col justify-center">
        {/* Mobile Content Block */}
        <div className="lg:hidden max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[clamp(2rem,9vw,2.5rem)] font-bold text-slate-900 leading-[1.12] mb-3"
          >
            Advogado Previdenciário Especialista em <span className="text-[#9C7A4A]">INSS</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[15px] sm:text-lg text-slate-600 mb-6 leading-relaxed font-light"
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
            <Button href="#servicos" variant="outlineDark" data-cursor="hover" className="text-sm py-3.5">
              Ver áreas de atuação
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-2"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/70 border border-slate-300/80 text-[11px] sm:text-sm font-medium text-slate-700 backdrop-blur-md">
              <ShieldCheck className="w-3.5 h-3.5 text-[#9C7A4A]" />
              OAB/PA 33660
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/70 border border-slate-300/80 text-[11px] sm:text-sm font-medium text-slate-700 backdrop-blur-md">
              <MonitorSmartphone className="w-3.5 h-3.5 text-[#9C7A4A]" />
              Atendimento presencial e online
            </span>
          </motion.div>
        </div>

        {/* Desktop Content Block */}
        <div className="hidden lg:block max-w-[48%] xl:max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl xl:text-6xl font-bold text-slate-900 leading-[1.15] mb-6"
          >
            Advogado Previdenciário Especialista em <span className="text-[#9C7A4A]">INSS</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg xl:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed font-light"
          >
            Precisa de um advogado especialista em Aposentadorias e em Benefícios do INSS? Entre em contato clicando no botão abaixo e eu vou ajudar você!
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-row gap-3 xl:gap-4 mb-10"
          >
            <Button href={whatsappUrl} variant="whatsapp" onClick={handleWhatsAppClick} data-cursor="cta" className="text-sm xl:text-base py-4 px-5 xl:px-8 whitespace-nowrap">
              Conversar com o advogado
            </Button>
            <Button href="#servicos" variant="outlineDark" data-cursor="hover" className="text-sm xl:text-base py-4 px-5 xl:px-6 whitespace-nowrap">
              Ver áreas de atuação
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-2"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/70 border border-[#C5A880]/50 text-sm font-medium text-slate-700 backdrop-blur-md">
              <ShieldCheck className="w-3.5 h-3.5 text-[#9C7A4A]" />
              OAB/PA 33660
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/70 border border-[#C5A880]/50 text-sm font-medium text-slate-700 backdrop-blur-md">
              <MapPin className="w-3.5 h-3.5 text-[#9C7A4A]" />
              Atendimento em Parauapebas/PA
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/70 border border-[#C5A880]/50 text-sm font-medium text-slate-700 backdrop-blur-md">
              <MonitorSmartphone className="w-3.5 h-3.5 text-[#9C7A4A]" />
              Atendimento online
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/70 border border-[#C5A880]/50 text-sm font-medium text-slate-700 backdrop-blur-md">
              <Scale className="w-3.5 h-3.5 text-[#9C7A4A]" />
              Atuação administrativa e judicial contra o INSS
            </span>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center animate-bounce text-slate-500 z-20">
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase mb-1 opacity-70">Role para continuar</span>
        <ChevronDown className="w-5 h-5 text-[#9C7A4A]" />
      </div>
    </section>
  );
}
