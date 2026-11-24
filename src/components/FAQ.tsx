import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { Button } from './ui/Button';
import { buildWhatsAppLink } from '../utils/whatsapp';

const faqs = [
  {
    question: 'O que fazer quando o INSS nega meu benefício?',
    answer: 'Avaliar o motivo da negativa para decidir entre recurso administrativo ou ação judicial.'
  },
  {
    question: 'Posso ser atendido online?',
    answer: 'Sim, o atendimento online ocorre via WhatsApp, com envio seguro de informações e documentos.'
  },
  {
    question: 'Quais documentos preciso enviar?',
    answer: 'Em geral, RG, CPF, comprovante de residência e extrato do CNIS. Em casos específicos, atestados ou carteira de trabalho.'
  },
  {
    question: 'O advogado garante que vou conseguir o benefício?',
    answer: 'Não. A advocacia é uma atividade de meio e não de fim. Analisamos seu caso e buscamos o melhor caminho.'
  },
  {
    question: 'Como funciona o atendimento pelo WhatsApp?',
    answer: 'Você explica o caso e nós orientamos se é possível atuar e quais os próximos passos.'
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section id="faq" className="relative bg-[#F9F9F8] overflow-hidden lg:pt-[104px] lg:pb-8 pt-24 pb-16 flex items-center min-h-[100vh] xl:min-h-0 xl:h-full">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full relative z-10 flex flex-col justify-center py-10">
        
        <div className="text-center mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight"
          >
            Dúvidas Frequentes
          </motion.h2>
        </div>

        <div className="flex flex-col gap-0 mb-10 border-t border-slate-200/60">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                key={index} 
                className={`bg-transparent border-b overflow-hidden transition-all duration-300 ${isOpen ? 'border-[#C5A880]/40' : 'border-slate-200/60'}`}
              >
                <button
                  onClick={() => {
                    setOpenIndex(isOpen ? null : index);
                    if (!isOpen && typeof window !== 'undefined' && (window as any).dataLayer) {
                      (window as any).dataLayer.push({
                        event: 'open_faq_item',
                        question: faq.question
                      });
                    }
                  }}
                  data-cursor="hover"
                  className={`w-full py-4 flex items-center justify-between text-left transition-colors focus:outline-none bg-transparent hover:bg-slate-50/50`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <h3 className={`font-semibold pr-4 text-sm m-0 transition-colors ${isOpen ? 'text-[#C5A880]' : 'text-slate-800'}`}>{faq.question}</h3>
                  <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-300 ${isOpen ? 'text-[#C5A880] rotate-180' : 'text-slate-400'}`} />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                    >
                      <div className="pb-5 pt-1 text-sm text-slate-600 font-light leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center flex flex-col items-center mt-4"
        >
          <p className="text-[11px] text-slate-400 italic mb-6">
            *Nenhum resultado é garantido. Cada caso requer análise individual baseada na lei vigente.*
          </p>
          <Button 
            href={buildWhatsAppLink("Olá, Dr. João. Vim pelo site e fiquei com uma dúvida sobre meu caso no INSS.")} 
            variant="whatsapp" 
            className="w-full sm:w-auto text-sm px-8 justify-center"
            data-cursor="cta"
            onClick={() => {
              if (typeof window !== 'undefined' && (window as any).dataLayer) {
                (window as any).dataLayer.push({ 
                  event: 'click_whatsapp_faq',
                  section: 'faq'
                });
              }
            }}
          >
            Falar no WhatsApp
          </Button>
        </motion.div>

      </div>
    </section>
  );
}
