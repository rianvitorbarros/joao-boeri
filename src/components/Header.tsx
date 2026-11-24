import React, { useState, useEffect } from 'react';
import { Menu, X, Scale } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from './ui/Button';
import { buildWhatsAppLink, trackWhatsAppClick } from '../utils/whatsapp';

export function Header({ activeId }: { activeId?: string }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: 'inicio' },
    { name: 'Áreas de Atuação', href: 'servicos' },
    { name: 'Escritório', href: 'sobre' },
    { name: 'Documentos', href: 'documentos' },
    { name: 'Avaliações', href: 'avaliacoes' },
    { name: 'Dúvidas', href: 'faq' },
  ];

  const isActive = (href: string) => activeId === href;
  const isDarkTheme = activeId ? ['inicio', 'sobre', 'avaliacoes', 'como-funciona', 'rodape'].includes(activeId) : !isScrolled;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!isHome) {
      e.preventDefault();
      navigate(`/#${href}`);
      setMobileMenuOpen(false);
    } else {
      // If on home, let the native anchor click logic in HomePage intercept it or scroll naturally
      setMobileMenuOpen(false);
    }
  };

  const onWhatsAppClick = () => {
    trackWhatsAppClick({
      source: 'site',
      pageType: isHome ? 'home' : 'practice_area',
    });
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${isDarkTheme ? 'bg-slate-900/20 backdrop-blur-sm py-4 border-b border-white/5' : 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-slate-100'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group" aria-label="Início - João Boeri Advocacia" data-cursor="hover">
          <img 
            src="/logo-dourado-icone-joão.png" 
            alt="" 
            className={`w-7 h-7 sm:w-8 sm:h-8 object-contain transition-transform group-hover:scale-105 ${isDarkTheme ? 'brightness-0 invert' : 'brightness-[0.15]'}`} 
          />
          <img 
            src="/logo-dourado-nome-joão.png" 
            alt="João Boeri Advocacia" 
            className={`h-5 sm:h-6 object-contain transition-all duration-500 ${isDarkTheme ? 'brightness-0 invert' : 'brightness-[0.15]'}`} 
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Navegação principal">
          <ul className="flex gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={`/#${link.href}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                  data-cursor="hover"
                  className={`text-sm font-medium transition-colors duration-300 ${
                    isActive(link.href) ? 'text-[#C5A880]' : 
                    isDarkTheme ? 'text-slate-200 hover:text-white' : 'text-slate-600 hover:text-[#C5A880]'
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <Button 
            href={buildWhatsAppLink("Olá, Dr. João. Vim pelo site e gostaria de conversar sobre meu caso previdenciário.")} 
            variant={isDarkTheme ? 'secondary' : 'primary'} 
            className="py-2.5 px-5 text-sm transition-all duration-500"
            data-cursor="cta"
            onClick={onWhatsAppClick}
          >
            Fale no WhatsApp
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className={`lg:hidden p-2 transition-colors duration-500 ${isDarkTheme ? 'text-white' : 'text-slate-600'}`} 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Abrir menu"
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <nav className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100" aria-label="Navegação mobile">
          <ul className="px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={`/#${link.href}`}
                  className="block text-base font-medium text-slate-700 hover:text-[#C5A880]"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button 
                href={buildWhatsAppLink("Olá, Dr. João. Vim pelo site e gostaria de conversar sobre meu caso previdenciário.")} 
                variant="whatsapp" 
                className="w-full justify-center"
                onClick={onWhatsAppClick}
              >
                Fale no WhatsApp
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
