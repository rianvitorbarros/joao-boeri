import { motion } from 'motion/react';
import { Fingerprint, History, FileText, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/Button';
import { buildWhatsAppLink } from '../utils/whatsapp';

const documentGroups = [
  {
    icon: Fingerprint,
    title: 'Identificação',
    items: ['RG e CPF', 'Comprovante de residência']
  },
  {
    icon: History,
    title: 'Histórico previdenciário',
    items: ['Carteira de trabalho (CTPS)', 'Extrato do CNIS', 'Protocolo ou número do benefício']
  },
  {
    icon: FileText,
    title: 'Documentos do caso',
    items: ['Carta de indeferimento', 'Laudos e exames', 'Documentos rurais ou certidão (quando aplicável)']
  }
];

export function Documents() {
  return (
    <section id="documentos" className="relative bg-[#F9F9F8] overflow-hidden xl:h-screen lg:pt-[104px] lg:pb-8 pt-24 pb-28">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.png')] opacity-[0.015] mix-blend-overlay pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#C5A880]/10 to-transparent rounded-full blur-3xl pointer-events-none transform translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full relative z-10">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 lg:gap-12 items-center lg:h-full">
          
          {/* Left Content */}
          <div className="flex flex-col justify-center h-full">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-6 h-[1px] bg-[#C5A880]"></span>
                <span className="text-[#C5A880] text-[10px] font-bold tracking-[0.2em] uppercase">Documentos para análise</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-3 leading-tight">
                Quais documentos podem ser necessários?
              </h2>
              <p className="text-sm lg:text-base text-slate-600 font-light leading-relaxed mb-6 max-w-lg">
                A documentação varia conforme o benefício. Na análise inicial, identificamos quais informações precisam ser conferidas.
              </p>
            </motion.div>
              
            <div className="flex flex-col gap-3 mb-6">
              {documentGroups.map((group, index) => {
                const Icon = group.icon;
                return (
                  <motion.div 
                    key={index}
                    data-cursor="hover"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 + 0.15 }}
                    className="group bg-white p-3 lg:p-4 rounded-xl border border-slate-200/60 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-[#C5A880]/30 transition-all duration-300 flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 group-hover:bg-[#C5A880]/10 transition-colors">
                      <Icon className="w-5 h-5 text-[#C5A880] transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-900 mb-1">{group.title}</h4>
                      <ul className="flex flex-wrap gap-x-4 gap-y-1">
                        {group.items.map((item, i) => (
                          <li key={i} className="text-xs text-slate-500 font-light flex items-center gap-1.5">
                            <span className="text-[#C5A880] text-[8px]">■</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-slate-900 text-white rounded-xl p-4 lg:p-5 border border-slate-800 shadow-lg relative overflow-hidden flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#C5A880]/10 rounded-full blur-xl -mr-8 -mt-8 transition-transform duration-700 group-hover:scale-150" />
              <div className="relative z-10">
                <h4 className="text-base font-bold mb-1">Não sabe quais separar?</h4>
                <p className="text-slate-400 text-xs font-light">
                  Envie uma mensagem e explique sua situação.
                </p>
              </div>
              <Button 
                href={buildWhatsAppLink("Olá, Dr. João. Vim pelo site e não sei quais documentos separar para meu caso do INSS.")} 
                variant="whatsapp" 
                className="w-full sm:w-auto text-xs py-2 px-4 relative z-10 shrink-0"
                data-cursor="cta"
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).dataLayer) {
                    (window as any).dataLayer.push({ 
                      event: 'click_whatsapp_documents',
                      section: 'documentos',
                      lead_interest: 'documentos_inss'
                    });
                  }
                }}
              >
                Falar pelo WhatsApp
              </Button>
            </motion.div>
          </div>

          {/* Right Content - Visual */}
          <div className="lg:col-span-1 hidden lg:flex relative justify-center items-center h-full">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative w-full max-w-[500px]"
            >
              <div 
                data-cursor="image"
                className="w-full aspect-[4/3] lg:h-[45vh] lg:max-h-[460px] rounded-[2rem] overflow-hidden bg-slate-200 relative shadow-xl group transition-transform duration-500 hover:scale-[1.015]"
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
                className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md p-4 lg:p-5 rounded-xl shadow-lg border border-slate-100 max-w-[220px] group hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center shrink-0 shadow-inner group-hover:bg-[#C5A880] transition-colors duration-500">
                    <ShieldCheck className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900 leading-tight">Análise<br/>documental</h4>
                  </div>
                </div>
                <p className="text-[11px] text-slate-500 font-light leading-relaxed">
                  Organizar os documentos certos ajuda a entender o caso com segurança.
                </p>
              </motion.div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
