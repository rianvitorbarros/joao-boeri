import { motion } from 'motion/react';
import { Search, FileText, Map } from 'lucide-react';
import { Button } from './ui/Button';
import { buildWhatsAppLink } from '../utils/whatsapp';

const steps = [
  {
    icon: Search,
    title: '1. Análise inicial',
    description: 'Entendemos o seu problema com o INSS através de um atendimento focado e transparente.',
  },
  {
    icon: FileText,
    title: '2. Organização dos documentos',
    description: 'Solicitamos e avaliamos seus documentos para verificar a viabilidade do seu direito.',
  },
  {
    icon: Map,
    title: '3. Caminho administrativo ou judicial',
    description: 'Apresentamos as opções possíveis para o seu caso com clareza e sem falsas promessas.',
  }
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="relative bg-slate-900 text-white overflow-hidden xl:h-screen lg:pt-[104px] lg:pb-8 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full relative z-10 flex flex-col justify-center items-center">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Como funciona o atendimento</h2>
          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Um processo simples para entender sua situação, organizar documentos e orientar os próximos passos.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-12 lg:gap-8 relative w-full mb-12 lg:mb-16">
          <div className="hidden lg:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-800"></div>
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div 
                key={index}
                data-cursor="hover"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative text-center"
              >
                <div className="w-24 h-24 mx-auto bg-slate-800/80 rounded-2xl flex items-center justify-center mb-8 relative z-10 shadow-xl border border-[#C5A880]/30 text-[#C5A880]">
                  <Icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{step.title}</h3>
                <p className="text-slate-300 font-light leading-relaxed px-2">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button 
            href={buildWhatsAppLink("Olá, Dr. João. Vim pelo site e gostaria de conversar sobre meu caso previdenciário.")} 
            variant="whatsapp"
            className="px-8 py-3.5"
            data-cursor="cta"
          >
            Falar sobre meu caso
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
