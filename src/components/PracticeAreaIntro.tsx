import { motion } from 'motion/react';
import { ShieldCheck, Info } from 'lucide-react';
import { PracticeArea } from '../data/practiceAreas';

interface Props {
  area: PracticeArea;
}

export function PracticeAreaIntro({ area }: Props) {
  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-slate-50 rounded-full blur-3xl pointer-events-none transform translate-x-1/3 -translate-y-1/3" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <div className="w-16 h-16 rounded-2xl bg-[#C5A880]/10 flex items-center justify-center shrink-0">
            <Info className="w-8 h-8 text-[#C5A880]" />
          </div>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8 leading-tight"
        >
          {area.explanation.title}
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid gap-4 sm:gap-6 text-left"
        >
          {area.explanation.points.map((point, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-100 rounded-2xl p-6 lg:p-8 flex gap-4 items-start shadow-sm hover:shadow-md transition-shadow">
              <ShieldCheck className="w-6 h-6 text-[#C5A880] shrink-0 mt-0.5" />
              <p className="text-slate-600 text-base lg:text-lg leading-relaxed">
                {point}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
