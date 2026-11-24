import { motion } from 'motion/react';
import { Button } from './ui/Button';
import { buildWhatsAppLink, trackWhatsAppClick } from '../utils/whatsapp';
import { PracticeArea } from '../data/practiceAreas';

interface Props {
  area: PracticeArea;
}

export function PracticeAreaFinalCTA({ area }: Props) {
  const handleWhatsAppClick = () => {
    trackWhatsAppClick({
      source: 'site',
      pageType: 'practice_area',
      practiceAreaSlug: area.slug,
      practiceAreaTitle: area.seoTitle,
    });
  };

  const whatsappUrl = buildWhatsAppLink(area.whatsappMessage);

  return (
    <section className="pt-20 pb-28 lg:py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#C5A880]/5"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Quer entender se você pode ter direito?
          </h2>
          <p className="text-lg lg:text-xl text-slate-600 font-light mb-10 max-w-2xl mx-auto">
            Fale conosco pelo WhatsApp. Faremos uma análise do seu caso com clareza e responsabilidade, para você saber o melhor caminho a seguir.
          </p>
          
          <Button 
            href={whatsappUrl} 
            variant="whatsapp" 
            className="text-base py-4 px-8 shadow-lg shadow-green-500/20"
            onClick={handleWhatsAppClick}
          >
            {area.ctaText}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
