import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { HowItWorks } from '../components/HowItWorks';
import { Documents } from '../components/Documents';
import { About } from '../components/About';
import { GoogleReviews } from '../components/GoogleReviews';
import { FAQ } from '../components/FAQ';
import { Footer } from '../components/Footer';
import { RelatedPracticeAreas } from '../components/RelatedPracticeAreas';
import { googleReviews } from '../data/googleReviews';

const showReviews = googleReviews.length > 0 || import.meta.env.DEV;

const baseSections = [
  { id: 'inicio', component: Hero },
  { id: 'sobre', component: About },
  { id: 'servicos', component: Services },
  { id: 'documentos', component: Documents },
  ...(showReviews ? [{ id: 'avaliacoes', component: GoogleReviews }] : []),
  { id: 'como-funciona', component: HowItWorks },
  { id: 'faq', component: FAQ },
  { id: 'outros-assuntos', component: () => <div className="h-full overflow-y-auto"><RelatedPracticeAreas isHome={true} /></div> },
  { id: 'rodape', component: () => <div className="h-full flex flex-col justify-end bg-[#0a1120]" id="rodape"><Footer /></div> },
];

export function HomePage() {
  const sections = baseSections;
  const [activeSection, setActiveSection] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const isTransitioning = useRef(false);
  const location = useLocation();

  useEffect(() => {
    // Check hash on mount/location change
    if (location.hash) {
      const id = location.hash.substring(1);
      const index = sections.findIndex(s => s.id === id);
      if (index !== -1) {
        if (isDesktop) {
          setActiveSection(index); // Set immediately or use navigate if desired
        } else {
          setTimeout(() => {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    } else {
      setActiveSection(0);
    }
  }, [location.hash, isDesktop]);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.matchMedia("(min-width: 1280px) and (hover: hover) and (pointer: fine)").matches);
    };
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  useEffect(() => {
    if (!isDesktop) {
      document.body.style.overflow = 'auto';
      return;
    }

    document.body.style.overflow = 'hidden';

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isTransitioning.current) return;
      if (Math.abs(e.deltaY) < 20) return;

      if (e.deltaY > 0 && activeSection < sections.length - 1) {
        navigate(activeSection + 1);
      } else if (e.deltaY < 0 && activeSection > 0) {
        navigate(activeSection - 1);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isTransitioning.current) return;
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        if (activeSection < sections.length - 1) navigate(activeSection + 1);
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        if (activeSection > 0) navigate(activeSection - 1);
      } else if (e.key === 'Home') {
        navigate(0);
      } else if (e.key === 'End') {
        navigate(sections.length - 1);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [activeSection, isDesktop]);

  // Intercept anchor clicks on desktop
  useEffect(() => {
    if (!isDesktop) return;
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (target && target.hash && target.hash.startsWith('#')) {
        const id = target.hash.substring(1);
        const index = sections.findIndex(s => s.id === id);
        if (index !== -1) {
          e.preventDefault();
          navigate(index);
        }
      }
    };
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, [isDesktop]);

  const navigate = (index: number) => {
    isTransitioning.current = true;
    setActiveSection(index);
    setTimeout(() => {
      isTransitioning.current = false;
    }, 900); // 900ms transition + buffer
  };

  return (
    <>
      <Header activeId={isDesktop ? sections[activeSection].id : undefined} />
      
      {isDesktop ? (
        <div className="h-screen w-full overflow-hidden relative" role="presentation">
          <div 
            className="w-full h-full transition-transform duration-[900ms] ease-[cubic-bezier(0.645,0.045,0.355,1)]"
            style={{ transform: `translateY(-${activeSection * 100}vh)` }}
          >
            {sections.map((Section, idx) => (
              <div key={idx} className="h-screen w-full overflow-hidden relative">
                <Section.component />
              </div>
            ))}
          </div>

          {/* Side Indicator */}
          <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50 hidden lg:flex">
            {sections.map((s, idx) => {
              const isDarkTheme = ['inicio', 'sobre', 'avaliacoes', 'como-funciona', 'rodape'].includes(sections[activeSection].id);
              
              return (
                <button
                  key={idx}
                  data-cursor="dot"
                  aria-label={`Ir para a seção ${s.id}`}
                  onClick={() => navigate(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-500 outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880] focus-visible:ring-offset-2 ${
                    activeSection === idx 
                      ? 'bg-[#C5A880] scale-150' 
                      : isDarkTheme 
                        ? 'bg-slate-600 hover:bg-slate-400 hover:scale-125'
                        : 'bg-slate-300 hover:bg-slate-400 hover:scale-125'
                  }`}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <main>
          {sections.map((Section, idx) => (
            <Section.component key={idx} />
          ))}
        </main>
      )}
    </>
  );
}
