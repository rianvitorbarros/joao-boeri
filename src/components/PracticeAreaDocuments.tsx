import { motion } from 'motion/react';
import { ShieldCheck, FileText } from 'lucide-react';
import { Button } from './ui/Button';
import { buildWhatsAppLink, trackWhatsAppClick } from '../utils/whatsapp';
import { PracticeArea } from '../data/practiceAreas';

interface Props {
  area: PracticeArea;
}

export function PracticeAreaDocuments({ area }: Props) {
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
    <section className="relative bg-[#F9F9F8] overflow-hidden pt-16 pb-24 lg:py-24">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.png')] opacity-[0.015] mix-blend-overlay pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#C5A880]/10 to-transparent rounded-full blur-3xl pointer-events-none transform translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-6 h-[1px] bg-[#C5A880]"></span>
                <span className="text-[#C5A880] text-[10px] font-bold tracking-[0.2em] uppercase">Organização</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 leading-tight">
                Documentos para análise
              </h2>
              <p className="text-sm lg:text-base text-slate-600 font-light leading-relaxed mb-8 max-w-lg">
                Estes são alguns documentos que ajudam na avaliação do seu caso. Não se preocupe se não tiver todos em mãos agora; analisaremos o que for possível.
              </p>
            </motion.div>
            
            <div className="flex flex-col gap-3 mb-8">
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="bg-white p-5 lg:p-6 rounded-2xl border border-slate-200/60 shadow-sm flex flex-col gap-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#C5A880]/10 flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5 text-[#C5A880]" />
                  </div>
                  <h4 className="font-bold text-slate-900">Lista sugerida</h4>
                </div>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {area.documents.map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-600 font-light">
                      <span className="text-[#C5A880] mt-1 shrink-0">■</span>
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-slate-900 text-white rounded-xl p-5 lg:p-6 border border-slate-800 shadow-lg relative overflow-hidden flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#C5A880]/10 rounded-full blur-xl -mr-8 -mt-8 transition-transform duration-700 group-hover:scale-150" />
              <div className="relative z-10">
                <h4 className="text-base font-bold mb-1">Dúvidas sobre a documentação?</h4>
                <p className="text-slate-400 text-sm font-light">
                  Envie uma mensagem e explicaremos o que precisa.
                </p>
              </div>
              <Button 
                href={whatsappUrl} 
                variant="whatsapp" 
                className="w-full sm:w-auto text-sm py-3 px-6 relative z-10 shrink-0 shadow-lg shadow-green-500/20"
                onClick={handleWhatsAppClick}
              >
                Falar pelo WhatsApp
              </Button>
            </motion.div>
          </div>

          {/* Right Content - Visual */}
          <div className="hidden lg:flex relative justify-center items-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative w-full max-w-[500px]"
            >
              <div 
                className="w-full aspect-[4/3] rounded-[2rem] overflow-hidden bg-slate-200 relative shadow-xl group transition-transform duration-500 hover:scale-[1.015]"
              >
                <div className="absolute inset-0 bg-slate-900/10 z-10 transition-opacity duration-500 group-hover:opacity-0" />
                <img 
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop" 
                  alt="Análise jurídica documental" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>

              {/* Floating Card */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md p-5 rounded-xl shadow-lg border border-slate-100 max-w-[240px] group hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center shrink-0 shadow-inner group-hover:bg-[#C5A880] transition-colors duration-500">
                    <ShieldCheck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900 leading-tight">Análise<br/>Segura</h4>
                  </div>
                </div>
                <p className="text-xs text-slate-500 font-light leading-relaxed">
                  Avaliação cuidadosa para encontrar as melhores oportunidades de aprovação no INSS.
                </p>
              </motion.div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
