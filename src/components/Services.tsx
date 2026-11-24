import { motion } from 'motion/react';
import { FileX, Briefcase, Tractor, HeartHandshake, Stethoscope, Users, Baby, LineChart, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';
import { buildWhatsAppLink } from '../utils/whatsapp';

const services = [
  {
    title: 'Benefício Negado pelo INSS',
    description: 'Entenda o motivo da negativa e avalie os caminhos administrativos ou judiciais.',
    icon: FileX,
    whatsappText: 'Olá, Dr. João. Vim pelo site. O INSS negou meu benefício e gostaria de entender o que pode ser feito.',
    cta: 'Analisar caso',
    colSpan: 'col-span-2 sm:col-span-2 lg:col-span-2',
    style: 'main'
  },
  {
    title: 'Aposentadoria',
    description: 'Análise de idade, contribuição, regras de transição e documentação.',
    icon: Briefcase,
    whatsappText: 'Olá, Dr. João. Vim pelo site e gostaria de orientação sobre aposentadoria.',
    cta: 'Entender caminho',
    colSpan: 'col-span-2 sm:col-span-1 lg:col-span-2',
    style: 'medium'
  },
  {
    title: 'Aposentadoria rural',
    description: 'Orientação para comprovação de atividade rural e segurado especial.',
    icon: Tractor,
    whatsappText: 'Olá, Dr. João. Vim pelo site e gostaria de orientação sobre aposentadoria rural.',
    cta: 'Analisar caso',
    colSpan: 'col-span-2 sm:col-span-1 lg:col-span-2',
    style: 'medium'
  },
  {
    title: 'BPC/LOAS',
    description: 'Análise de critérios sociais, médicos e documentais para o benefício assistencial.',
    icon: HeartHandshake,
    whatsappText: 'Olá, Dr. João. Vim pelo site e gostaria de orientação sobre BPC/LOAS.',
    cta: 'Analisar caso',
    colSpan: 'col-span-2 sm:col-span-2 lg:col-span-2',
    style: 'medium'
  },
  {
    title: 'Auxílio-doença',
    description: 'Atendimento em incapacidade e perícia.',
    icon: Stethoscope,
    whatsappText: 'Olá, Dr. João. Vim pelo site e gostaria de orientação sobre auxílio-doença.',
    cta: 'Falar no WhatsApp',
    colSpan: 'col-span-1',
    style: 'compact'
  },
  {
    title: 'Pensão por morte',
    description: 'Orientação para dependentes.',
    icon: Users,
    whatsappText: 'Olá, Dr. João. Vim pelo site e gostaria de orientação sobre pensão por morte.',
    cta: 'Falar no WhatsApp',
    colSpan: 'col-span-1',
    style: 'compact'
  },
  {
    title: 'Salário-maternidade',
    description: 'Requisitos para seguradas.',
    icon: Baby,
    whatsappText: 'Olá, Dr. João. Vim pelo site e gostaria de orientação sobre salário-maternidade.',
    cta: 'Falar no WhatsApp',
    colSpan: 'col-span-1',
    style: 'compact'
  },
  {
    title: 'Planejamento',
    description: 'Organização do histórico contributivo.',
    icon: LineChart,
    whatsappText: 'Olá, Dr. João. Vim pelo site e gostaria de falar sobre planejamento previdenciário.',
    cta: 'Falar no WhatsApp',
    colSpan: 'col-span-1',
    style: 'compact'
  },
];

export function Services() {
  return (
    <section id="servicos" className="relative bg-slate-900 overflow-hidden xl:h-screen lg:pt-[104px] lg:pb-8 pt-24 pb-16">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#C5A880]/10 to-transparent rounded-full blur-3xl pointer-events-none transform translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#C5A880]/5 to-transparent rounded-full blur-3xl pointer-events-none transform -translate-x-1/3 translate-y-1/3" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.015] mix-blend-overlay pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full h-full relative z-10 flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 lg:items-center">
          
          {/* Left Content */}
          <div className="lg:w-1/3 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[1px] bg-[#C5A880]"></span>
                <span className="text-[#C5A880] text-xs font-bold tracking-[0.2em] uppercase">Áreas de atuação</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-[1.1]">
                Atuação previdenciária para cada etapa do seu caso
              </h2>
              <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-8">
                Do benefício negado ao planejamento da aposentadoria, o atendimento começa pela identificação do problema e análise dos documentos.
              </p>
              
              <div className="hidden lg:block">
                <Button 
                  href={buildWhatsAppLink("Olá, Dr. João. Vim pelo site e gostaria de analisar um caso do INSS.")} 
                  variant="primary" 
                  className="mb-8"
                  data-cursor="cta"
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as any).dataLayer) {
                      (window as any).dataLayer.push({ event: 'click_whatsapp_services_section' });
                    }
                  }}
                >
                  Falar sobre meu caso
                </Button>
                <div className="flex items-center gap-3 text-[11px] text-slate-400 font-medium uppercase tracking-wider">
                  <span className="w-4 h-[1px] bg-slate-300"></span>
                  OAB/PA 33660 • Atendimento presencial e online
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Bento Grid */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
              {services.map((service, index) => {
                const Icon = service.icon;
                const isMain = service.style === 'main';
                const isCompact = service.style === 'compact';
                
                return (
                  <motion.a
                    key={index}
                    href={buildWhatsAppLink(service.whatsappText)}
                    data-cursor="hover"
                    onClick={() => {
                      if (typeof window !== 'undefined' && (window as any).dataLayer) {
                        (window as any).dataLayer.push({ event: 'click_whatsapp_service_card', service_name: service.title });
                      }
                    }}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                    className={`group relative overflow-hidden rounded-2xl flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[#C5A880]/30 ${service.colSpan} ${
                      isMain 
                        ? 'bg-slate-800 text-white p-6 lg:p-8 border border-slate-700 shadow-lg' 
                        : isCompact
                        ? 'bg-slate-800/50 p-4 lg:p-5 border border-slate-700/50 shadow-sm'
                        : 'bg-slate-800/50 p-5 lg:p-6 border border-slate-700/50 shadow-sm'
                    }`}
                  >
                    {isMain && (
                      <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A880]/10 rounded-full blur-2xl -mr-10 -mt-10 transition-transform group-hover:scale-150" />
                    )}
                    
                    <div className="flex items-start justify-between mb-auto relative z-10">
                      <div className={`rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isMain 
                          ? 'w-12 h-12 bg-slate-800 border border-slate-700 text-[#C5A880] group-hover:border-[#C5A880]/50' 
                          : isCompact
                          ? 'w-10 h-10 bg-slate-800 border border-slate-700 text-[#C5A880] group-hover:bg-[#C5A880]/10'
                          : 'w-12 h-12 bg-slate-800 border border-slate-700 text-[#C5A880] group-hover:bg-[#C5A880]/10'
                      }`}>
                        <Icon className={isCompact ? 'w-5 h-5' : 'w-6 h-6'} />
                      </div>
                      <ArrowRight className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 ${
                        isMain ? 'text-slate-500 group-hover:text-[#C5A880]' : 'text-slate-500 group-hover:text-[#C5A880]'
                      }`} />
                    </div>
                    
                    <div className="mt-4 relative z-10">
                      <h3 className={`font-bold mb-1.5 ${
                        isMain ? 'text-xl lg:text-2xl text-white' : isCompact ? 'text-sm lg:text-base text-white' : 'text-base lg:text-lg text-white'
                      }`}>
                        {service.title}
                      </h3>
                      <p className={`font-light leading-relaxed ${
                        isMain ? 'text-sm lg:text-base text-slate-300' : isCompact ? 'text-xs text-slate-400 line-clamp-2' : 'text-xs lg:text-sm text-slate-400 line-clamp-2'
                      }`}>
                        {service.description}
                      </p>
                    </div>

                    {!isCompact && (
                      <div className="mt-5 relative z-10 flex items-center gap-2">
                        <span className={`text-xs font-semibold tracking-wider uppercase transition-colors ${
                          isMain ? 'text-[#C5A880] group-hover:text-white' : 'text-[#C5A880] group-hover:text-white'
                        }`}>
                          {service.cta}
                        </span>
                      </div>
                    )}
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Mobile CTA */}
          <div className="lg:hidden w-full text-center mt-4">
            <Button 
              href={buildWhatsAppLink("Olá, Dr. João. Vim pelo site e gostaria de analisar um caso do INSS.")} 
              variant="whatsapp" 
              className="w-full"
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).dataLayer) {
                  (window as any).dataLayer.push({ event: 'click_whatsapp_services_section_mobile' });
                }
              }}
            >
              Falar sobre meu caso
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
