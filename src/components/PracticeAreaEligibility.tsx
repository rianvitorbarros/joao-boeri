import { motion } from 'motion/react';
import { CheckCircle2, Users } from 'lucide-react';
import { PracticeArea } from '../data/practiceAreas';

interface Props {
  area: PracticeArea;
}

export function PracticeAreaEligibility({ area }: Props) {
  return (
    <section className="py-16 lg:py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white rounded-full blur-3xl pointer-events-none transform -translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-[1px] bg-[#C5A880]"></span>
              <span className="text-[#C5A880] text-[10px] font-bold tracking-[0.2em] uppercase">Análise de Perfil</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Quem pode ter direito?
            </h2>
            <p className="text-slate-600 text-lg font-light leading-relaxed mb-8">
              Verifique abaixo se a sua situação se encaixa nos critérios avaliados pelo INSS. Nossa equipe está pronta para orientar sobre cada detalhe e buscar o melhor caminho.
            </p>
            
            <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center border border-slate-100">
              <Users className="w-8 h-8 text-slate-700" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-[2rem] p-8 lg:p-12 shadow-xl shadow-slate-200/50 border border-slate-100"
          >
            <ul className="grid sm:grid-cols-2 gap-6 lg:gap-8">
              {area.whoHasRight.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="bg-green-50 rounded-full p-1 mt-0.5 shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-slate-700 font-medium leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
