import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { PracticeArea } from '../data/practiceAreas';

interface Props {
  area: PracticeArea;
}

export function PracticeAreaFAQ({ area }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="pt-20 pb-28 lg:py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-slate-600">
            Principais dúvidas sobre {area.headline.replace('Advogado para ', '')}
          </p>
        </div>

        <div className="space-y-4">
          {area.faqs.map((faq, idx) => (
            <div 
              key={idx}
              className={`bg-white rounded-2xl border transition-colors duration-300 overflow-hidden ${
                openIndex === idx ? 'border-[#C5A880]/30 shadow-md' : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className={`font-semibold pr-4 ${openIndex === idx ? 'text-[#C5A880]' : 'text-slate-800'}`}>
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                    openIndex === idx ? 'rotate-180 text-[#C5A880]' : 'text-slate-400'
                  }`} 
                />
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-6 text-slate-600 leading-relaxed font-light">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
