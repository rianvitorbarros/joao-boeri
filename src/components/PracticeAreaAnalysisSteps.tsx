import { motion } from 'motion/react';
import { Search, FolderOpen, Scale } from 'lucide-react';

export function PracticeAreaAnalysisSteps() {
  const steps = [
    {
      icon: Search,
      title: "Análise da Situação",
      desc: "Avaliamos seu histórico no INSS, os motivos de eventuais negativas e os requisitos da lei."
    },
    {
      icon: FolderOpen,
      title: "Revisão de Documentos",
      desc: "Organizamos laudos, exames e comprovantes para montar um processo consistente e seguro."
    },
    {
      icon: Scale,
      title: "Definição do Caminho",
      desc: "Orientamos sobre a melhor estratégia, seja um novo pedido administrativo ou via judicial."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            O que é avaliado no seu caso
          </h2>
          <p className="text-slate-600 font-light text-lg">
            Acreditamos que cada história é única. Por isso, seguimos etapas claras para entender o seu direito e buscar a solução mais eficiente.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-slate-50 border border-slate-100 rounded-2xl p-8 hover:shadow-lg hover:border-[#C5A880]/30 transition-all duration-300 text-center flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 text-[#C5A880]">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed font-light">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
