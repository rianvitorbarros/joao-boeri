import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';
import { buildWhatsAppLink } from '../utils/whatsapp';

export function About() {
  return (
    <section id="sobre" className="relative bg-[#F9F9F8] overflow-hidden xl:h-screen lg:pt-[104px] lg:pb-8 pt-24 pb-16">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#C5A880]/10 to-transparent rounded-full blur-3xl pointer-events-none transform translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[url('/noise.png')] opacity-[0.015] mix-blend-overlay pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full relative z-10 flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 items-center gap-10 lg:gap-16 lg:h-full">
          
          {/* Mobile Text (Before Image) */}
          <div className="w-full flex flex-col justify-center lg:hidden mb-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-6 h-[1px] bg-[#C5A880]"></span>
                <span className="text-[#C5A880] text-[10px] font-bold tracking-[0.2em] uppercase">Estrutura presencial</span>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 leading-tight">
                Atendimento presencial em Parauapebas
              </h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sm text-slate-600 font-light leading-relaxed"
            >
              <p>
                O Dr João Boeri atua como parceiro no escritório Augustus Advocacia desde 2021. Atende como advogado especializado em Previdência Social, atuando contra o INSS na via administrativa e judicial, sendo pós-graduado em Direito Previdenciário e Advocacia Cível.
              </p>
            </motion.div>
          </div>

          {/* Left Column - Content (Desktop) / Below Image on Mobile */}
          <div className="w-full flex flex-col justify-center order-3 lg:order-1 mt-8 lg:mt-0">
            {/* Desktop Text */}
            <div className="hidden lg:block">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-6 h-[1px] bg-[#C5A880]"></span>
                  <span className="text-[#C5A880] text-[10px] font-bold tracking-[0.2em] uppercase">Estrutura presencial</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                  Atendimento presencial em Parauapebas
                </h2>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-sm lg:text-base text-slate-600 font-light leading-relaxed mb-8 max-w-lg"
              >
                <p>
                  O Dr João Boeri atua como parceiro no escritório Augustus Advocacia desde 2021. Atende como advogado especializado em Previdência Social, atuando contra o INSS na via administrativa e judicial, sendo pós-graduado em Direito Previdenciário e Advocacia Cível.
                </p>
              </motion.div>
            </div>

            {/* Location Block */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white border border-slate-200/60 shadow-sm rounded-2xl p-6 lg:p-8"
            >
              <div className="space-y-5 mb-8">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Endereço</h4>
                  <p className="text-slate-600 text-sm font-light">Rua Oito, 173-B, Cidade Nova - Parauapebas / PA</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Horário de Atendimento</h4>
                  <p className="text-slate-600 text-sm font-light">Segunda a sexta, das 08h às 18h</p>
                </div>
                <p className="text-[#C5A880] text-sm font-medium italic">
                  Atendimento por agendamento no WhatsApp.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  href={buildWhatsAppLink("Olá, Dr. João. Vim pelo site e gostaria de conversar sobre meu caso previdenciário.")} 
                  variant="whatsapp" 
                  data-cursor="cta"
                  className="w-full sm:w-auto text-sm justify-center"
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as any).dataLayer) {
                      (window as any).dataLayer.push({ 
                        event: 'click_whatsapp_about',
                        section: 'sobre'
                      });
                    }
                  }}
                >
                  Conversar com o advogado
                </Button>
                <Button 
                  href="https://maps.app.goo.gl/DMtwVE8c9TK1uTnM7" 
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline" 
                  data-cursor="hover"
                  className="w-full sm:w-auto text-sm border-slate-300 text-slate-700 hover:bg-slate-100 justify-center"
                >
                  Abrir localização
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Image (Order 2 on mobile) */}
          <div className="relative w-full flex justify-center h-full items-center order-2 lg:order-2">
            <motion.div 
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative w-full max-w-2xl"
            >
              <div 
                data-cursor="image" 
                className="w-full aspect-[4/3] lg:aspect-[4/3] xl:aspect-[5/4] rounded-[2rem] overflow-hidden bg-slate-100 relative shadow-xl border border-slate-200/60 group transition-all duration-500 hover:shadow-2xl hover:border-[#C5A880]/30"
              >
                <img 
                  src="/escritorio.jpg" 
                  alt="Fachada do escritório Augustus Advocacia" 
                  className="w-full h-full object-cover object-[center_45%] scale-[1.06] lg:scale-[1.14] transition-transform duration-700 group-hover:scale-[1.10] lg:group-hover:scale-[1.18]"
                  loading="lazy"
                />
                
                {/* Overlay Inferior */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent pointer-events-none transition-opacity duration-500 rounded-b-[2rem]"></div>
                
                <div className="absolute bottom-6 left-6 right-6 lg:bottom-8 lg:left-8 lg:right-8 z-10">
                  <p className="text-white font-bold text-xl lg:text-2xl mb-0.5 drop-shadow-md">Augustus Advocacia</p>
                  <p className="text-[#C5A880] font-medium text-[10px] lg:text-xs tracking-widest uppercase drop-shadow-md">Estrutura Presencial</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
