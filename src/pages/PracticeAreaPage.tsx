import { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { practiceAreas } from '../data/practiceAreas';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { PracticeAreaHero } from '../components/PracticeAreaHero';
import { PracticeAreaIntro } from '../components/PracticeAreaIntro';
import { PracticeAreaEligibility } from '../components/PracticeAreaEligibility';
import { PracticeAreaAnalysisSteps } from '../components/PracticeAreaAnalysisSteps';
import { PracticeAreaDocuments } from '../components/PracticeAreaDocuments';
import { About } from '../components/About';
import { GoogleReviews } from '../components/GoogleReviews';
import { PracticeAreaFAQ } from '../components/PracticeAreaFAQ';
import { PracticeAreaFinalCTA } from '../components/PracticeAreaFinalCTA';
import { RelatedPracticeAreas } from '../components/RelatedPracticeAreas';

export function PracticeAreaPage() {
  const { slug } = useParams();
  
  const area = practiceAreas.find(a => a.slug === slug);
  
  useEffect(() => {
    // Scroll to top when slug changes
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (area) {
      document.title = area.seoTitle;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute("content", area.metaDescription);
      } else {
        const meta = document.createElement('meta');
        meta.name = "description";
        meta.content = area.metaDescription;
        document.head.appendChild(meta);
      }
      
      const updateMeta = (name: string, content: string, isProperty = false) => {
        const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
        let el = document.querySelector(selector);
        if (!el) {
          el = document.createElement('meta');
          if (isProperty) el.setAttribute('property', name);
          else el.setAttribute('name', name);
          document.head.appendChild(el);
        }
        el.setAttribute('content', content);
      };

      updateMeta('og:title', area.seoTitle, true);
      updateMeta('og:description', area.metaDescription, true);
      updateMeta('twitter:title', area.seoTitle);
      updateMeta('twitter:description', area.metaDescription);
      updateMeta('og:url', window.location.href, true);
      updateMeta('twitter:url', window.location.href);
      updateMeta('og:image', 'https://joaoboeriadv.com.br/og-joao-boeri.jpg?v=6', true);
      updateMeta('twitter:image', 'https://joaoboeriadv.com.br/og-joao-boeri.jpg?v=6');
      
      // Tracking
      if (typeof window !== 'undefined' && (window as any).dataLayer) {
        (window as any).dataLayer.push({ 
          event: 'practice_area_view',
          practiceAreaSlug: area.slug,
          path: window.location.pathname
        });
      }
    }
  }, [area]);

  if (!area) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Header />
      <main>
        <PracticeAreaHero area={area} />
        {area.slug === 'advogado-aposentadoria' && <About />}
        <PracticeAreaIntro area={area} />
        <PracticeAreaEligibility area={area} />
        <PracticeAreaAnalysisSteps />
        <PracticeAreaDocuments area={area} />
        {area.slug !== 'advogado-aposentadoria' && <About />}
        <GoogleReviews />
        <PracticeAreaFAQ area={area} />
        <PracticeAreaFinalCTA area={area} />
        <RelatedPracticeAreas currentSlug={area.slug} />
      </main>
      <div className="bg-[#0a1120]">
        <Footer />
      </div>
    </>
  );
}
