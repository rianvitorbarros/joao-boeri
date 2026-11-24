import { motion } from 'motion/react';
import { ShieldCheck, MonitorSmartphone, ChevronDown, CheckCircle2, FileText, Scale } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { buildWhatsAppLink, trackWhatsAppClick } from '../utils/whatsapp';
import { PracticeArea } from '../data/practiceAreas';

interface Props {
  area: PracticeArea;
}

export function PracticeAreaHero({ area }: Props) {
  const handleWhatsAppClick = () => {
    trackWhatsAppClick({
      source: 'site',
      pageType: 'practice_area',
      practiceAreaSlug: area.slug,
      practiceAreaTitle: area.seoTitle,
    });
  };

  const whatsappUrl = buildWhatsAppLink(area.whatsappMessage);

  return (
    <section className="relative min-h-[100vh] flex flex-col lg:flex-row lg:items-center pt-[64px] lg:pt-[104px] pb-12 lg:pb-24 overflow-hidden bg-slate-900">
      {/* Background Image (Desktop only) */}
      <div 
        className="hidden lg:block absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
          backgroundPosition: "center right",
        }}
      >
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
        <div className="lg:hidden max-w-3xl flex flex-col items-center text-center mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 mb-3"
          >
            <div className="w-6 h-px bg-[#C5A880]"></div>
            <span className="text-[#C5A880] text-[10px] font-bold tracking-[0.2em] uppercase">
              Direito Previdenciário
            </span>
            <div className="w-6 h-px bg-[#C5A880]"></div>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(1.75rem,8vw,2.25rem)] font-bold text-white leading-[1.15] mb-3 whitespace-pre-line"
          >
            {area.mobileHeadline}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[15px] sm:text-lg text-slate-300 mb-6 leading-relaxed font-light"
          >
            {area.subtitle}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-3 mb-6 w-full sm:w-auto"
          >
            <Button href={whatsappUrl} variant="whatsapp" onClick={handleWhatsAppClick} data-cursor="cta" className="text-sm py-3.5 shadow-lg shadow-green-500/20 w-full">
              {area.ctaText}
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-2"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-[11px] sm:text-sm font-medium text-slate-200 backdrop-blur-md">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C5A880]" />
              Análise Individual
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-[11px] sm:text-sm font-medium text-slate-200 backdrop-blur-md">
              <Scale className="w-3.5 h-3.5 text-[#C5A880]" />
              Orientação Jurídica
            </span>
          </motion.div>
        </div>

        {/* Desktop Content Block */}
        <div className="hidden lg:block max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-4"
          >
            <div className="w-8 h-px bg-[#C5A880]"></div>
            <span className="text-[#C5A880] text-xs font-bold tracking-[0.2em] uppercase">
              Direito Previdenciário
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.15] mb-6"
          >
            {area.headline}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg lg:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed font-light"
          >
            {area.subtitle}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-row gap-4 mb-10"
          >
            <Button href={whatsappUrl} variant="whatsapp" onClick={handleWhatsAppClick} data-cursor="cta" className="text-base py-4 px-8 shadow-lg shadow-green-500/20">
              {area.ctaText}
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
              Análise Individual
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-[#C5A880]/30 text-sm font-medium text-slate-100 backdrop-blur-md">
              <MonitorSmartphone className="w-3.5 h-3.5 text-[#C5A880]" />
              Atendimento Online
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-[#C5A880]/30 text-sm font-medium text-slate-100 backdrop-blur-md">
              <Scale className="w-3.5 h-3.5 text-[#C5A880]" />
              Orientação Jurídica
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
