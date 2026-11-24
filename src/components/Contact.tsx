import { MapPin, Clock, MessageCircle, ExternalLink } from 'lucide-react';
import { Button } from './ui/Button';
import { Footer } from './Footer';
import { motion } from 'motion/react';
import { buildWhatsAppLink } from '../utils/whatsapp';

const triageOptions = [
  { label: 'Aposentadoria', msg: 'Olá, Dr. João. Vim pelo site e gostaria de orientação sobre aposentadoria.' },
  { label: 'BPC/LOAS', msg: 'Olá, Dr. João. Vim pelo site e gostaria de orientação sobre BPC/LOAS.' },
  { label: 'Benefício negado', msg: 'Olá, Dr. João. Vim pelo site. O INSS negou meu benefício e gostaria de entender o que pode ser feito.' },
  { label: 'Auxílio-doença', msg: 'Olá, Dr. João. Vim pelo site e gostaria de orientação sobre auxílio-doença ou benefício por incapacidade.' },
  { label: 'Pensão por morte', msg: 'Olá, Dr. João. Vim pelo site e gostaria de orientação sobre pensão por morte.' },
  { label: 'Aposentadoria rural', msg: 'Olá, Dr. João. Vim pelo site e gostaria de orientação sobre aposentadoria rural.' },
  { label: 'Não sei ainda', msg: 'Olá, Dr. João. Vim pelo site e ainda não sei exatamente qual benefício se aplica ao meu caso.' },
];

export function Contact() {
  return (
    <section id="contato" className="bg-[#F9F9F8] text-slate-900 flex flex-col xl:h-screen lg:pt-[104px] border-t border-slate-200 relative overflow-hidden">
      <div className="flex-1 flex flex-col justify-center min-h-0 py-12 lg:py-8 overflow-y-auto xl:overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Coluna Esquerda: Texto e CTA */}
            <div className="flex flex-col justify-center">
              <motion.h2 
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl sm:text-4xl font-bold mb-4"
              >
                Precisa entender seu caso com o INSS?
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-slate-600 mb-6 text-sm sm:text-base font-light leading-relaxed"
              >
                Envie uma mensagem pelo WhatsApp, explique sua situação e receba orientação sobre quais informações e documentos podem ser analisados.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm mb-6"
              >
                <h3 className="font-bold text-slate-900 mb-3 text-sm flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-[#C5A880]" />
                  Sobre o que você deseja falar?
                </h3>
                <div className="flex flex-wrap gap-2 mb-5">
                  {triageOptions.map((opt, i) => (
                    <motion.a 
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.3 + (i * 0.05) }}
                      data-cursor="hover"
                      href={buildWhatsAppLink(opt.msg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-3 py-1.5 bg-slate-50 border border-slate-200 hover:border-[#C5A880] hover:bg-slate-100 rounded-lg text-xs transition-colors text-slate-600 hover:text-slate-900"
                      onClick={() => {
                        if (typeof window !== 'undefined' && (window as any).dataLayer) {
                          (window as any).dataLayer.push({ event: 'select_lead_interest_contact', section: 'contact', interest: opt.label });
                        }
                      }}
                    >
                      {opt.label}
                    </motion.a>
                  ))}
                </div>
                <Button 
                  href={buildWhatsAppLink("Olá, Dr. João. Vim pelo site e gostaria de conversar sobre meu caso previdenciário.")} 
                  variant="whatsapp" 
                  className="w-full sm:w-auto text-sm py-3"
                  data-cursor="cta"
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as any).dataLayer) {
                      (window as any).dataLayer.push({ event: 'click_whatsapp_contact', section: 'contact' });
                    }
                  }}
                >
                  Falar com João Boeri no WhatsApp
                </Button>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="grid sm:grid-cols-2 gap-4"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center shrink-0 border border-slate-200">
                    <MapPin className="w-4 h-4 text-[#C5A880]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs mb-0.5">Atendimento Presencial</h4>
                    <p className="text-slate-500 font-light text-[11px]">Parauapebas/PA</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center shrink-0 border border-slate-200">
                    <Clock className="w-4 h-4 text-[#C5A880]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs mb-0.5">Horário</h4>
                    <p className="text-slate-500 font-light text-[11px]">Seg a Sex: 08h às 18h<br />Online com hora marcada</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Coluna Direita: Mapa e Localização */}
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col"
            >
              <div className="flex justify-between items-end mb-3">
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Localização</h3>
                  <p className="text-slate-500 text-xs">Rua Oito, 173-B, Cidade Nova - Parauapebas/PA</p>
                </div>
                <a 
                  href="https://maps.app.goo.gl/DMtwVE8c9TK1uTnM7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:flex items-center gap-1.5 text-xs text-[#C5A880] hover:text-slate-900 transition-colors"
                  data-cursor="hover"
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as any).dataLayer) {
                      (window as any).dataLayer.push({ event: 'click_open_google_maps', section: 'contact' });
                    }
                  }}
                >
                  Abrir no Google Maps <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              
              <div data-cursor="image" className="w-full bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 shadow-lg relative h-[260px] sm:h-[340px] lg:h-[42vh] min-h-[260px] flex items-center justify-center group">
                <iframe 
                  src="https://www.google.com/maps?q=Augustus%20Advocacia%20Rua%20Oito%20173-B%20Cidade%20Nova%20Parauapebas%20PA&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização João Boeri Advocacia em Parauapebas"
                  className="absolute inset-0 w-full h-full object-cover z-10"
                ></iframe>
                
                {/* Fallback behind iframe */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500 p-6 text-center bg-slate-100 z-0">
                  <MapPin className="w-8 h-8 mb-3 opacity-50 text-[#C5A880]" />
                  <p className="font-medium text-sm text-slate-600">João Boeri Advocacia</p>
                  <p className="text-xs mt-1 opacity-75 font-light">Rua Oito, 173-B, Cidade Nova - Parauapebas/PA</p>
                </div>
              </div>
              
              <a 
                href="https://maps.app.goo.gl/DMtwVE8c9TK1uTnM7"
                target="_blank"
                rel="noopener noreferrer"
                className="sm:hidden mt-4 flex items-center justify-center gap-2 text-sm text-[#C5A880] hover:text-slate-900 transition-colors bg-white shadow-sm py-2.5 rounded-lg border border-slate-200"
                data-cursor="hover"
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).dataLayer) {
                    (window as any).dataLayer.push({ event: 'click_open_google_maps', section: 'contact' });
                  }
                }}
              >
                Abrir no Google Maps <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>

          </div>
        </div>
      </div>
      
      {/* Footer integrado à última seção */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="shrink-0 w-full"
      >
        <Footer />
      </motion.div>
    </section>
  );
}
