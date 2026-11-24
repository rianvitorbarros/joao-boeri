import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { practiceAreas } from '../data/practiceAreas';

interface Props {
  currentSlug?: string;
  title?: string;
  isHome?: boolean;
}

export function RelatedPracticeAreas({ currentSlug, title = "Veja também outros assuntos previdenciários", isHome = false }: Props) {
  const filteredAreas = currentSlug 
    ? practiceAreas.filter(area => area.slug !== currentSlug)
    : practiceAreas;

  return (
    <section className={`pt-20 pb-28 lg:py-24 ${isHome ? 'bg-slate-50' : 'bg-slate-100'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
            {title}
          </h2>
          <div className="w-20 h-1 bg-[#C5A880] mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAreas.map((area) => (
            <Link 
              key={area.slug} 
              to={`/${area.slug}/`}
              className="group bg-white rounded-2xl p-8 border border-slate-200 hover:border-[#C5A880]/30 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#C5A880] transition-colors">
                {area.cardTitle || area.headline.replace('Advogado para ', '')}
              </h3>
              <p className="text-slate-600 font-light mb-8 flex-1 line-clamp-3">
                {area.cardDescription || area.subtitle}
              </p>
              
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-800 group-hover:text-[#C5A880] transition-colors mt-auto">
                Saiba mais
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
