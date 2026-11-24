import { Instagram, MapPin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-[#0a1120] pt-16 pb-8 border-t border-slate-800 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Brand */}
          <div className="flex flex-col">
            <div className="flex flex-col gap-4 mb-6">
              <img src="/logo-dourado-icone-joão.png" alt="" className="w-12 h-12 object-contain" />
              <img src="/logo-dourado-nome-joão.png" alt="João Boeri Advocacia" className="h-8 object-contain" />
            </div>
            <p className="text-slate-400 text-sm font-light leading-relaxed mb-6">
              Especialista em Direito Previdenciário. Atendimento ágil e focado na defesa dos seus direitos frente ao INSS.
            </p>
            <a 
              href="https://www.instagram.com/joaoboeri.adv?igsh=M3hscGVneXVtaWc4" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#C5A880] hover:text-white transition-colors"
              data-cursor="hover"
            >
              <Instagram className="w-5 h-5" />
              <span className="text-sm font-medium">Instagram João Boeri</span>
            </a>
          </div>

          {/* Links de Assuntos */}
          <div className="flex flex-col">
            <h4 className="text-white font-bold text-lg mb-6">Áreas de Atuação</h4>
            <ul className="space-y-3">
              {[
                { label: 'Advogado para Aposentadorias', href: '/advogado-aposentadoria/' },
                { label: 'Auxílio Acidente', href: '/auxilio-acidente/' },
                { label: 'Salário Maternidade', href: '/salario-maternidade/' },
                { label: 'BPC LOAS Pessoa com Deficiência', href: '/beneficio-pessoa-com-deficiencia/' },
                { label: 'Benefícios Rurais', href: '/beneficios-rurais/' },
                { label: 'BPC LOAS Negado ou Cortado', href: '/bpc-loas-negado-ou-cortado/' },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link to={link.href} className="text-slate-400 hover:text-[#C5A880] text-sm transition-colors" data-cursor="hover">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col">
            <h4 className="text-white font-bold text-lg mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm">Rua Oito, 173-B, Cidade Nova<br/>Parauapebas / PA</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#C5A880] shrink-0" />
                <span className="text-slate-400 text-sm">(94) 99187-7509</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                <div className="flex flex-col text-slate-400 text-sm">
                  <a href="mailto:joaoboeri@outlook.com" className="hover:text-white transition-colors" data-cursor="hover">joaoboeri@outlook.com</a>
                  <a href="mailto:contato@joaoboeriadv.com.br" className="hover:text-white transition-colors" data-cursor="hover">contato@joaoboeriadv.com.br</a>
                </div>
              </li>
            </ul>
          </div>

          {/* Legal Info */}
          <div className="flex flex-col">
            <h4 className="text-white font-bold text-lg mb-6">Dados do Escritório</h4>
            <div className="text-slate-400 text-sm space-y-2 mb-6">
              <p className="font-semibold text-slate-300">JOAO BOERI SOCIEDADE INDIVIDUAL DE ADVOCACIA</p>
              <p>CNPJ: 54.966.228/0001-60</p>
              <p>OAB/PA: 33660</p>
            </div>
            
            <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
              <p className="text-slate-400 text-[11px] leading-relaxed italic">
                Ao clicar no botão de WhatsApp, você será direcionado à plataforma, onde o atendimento seguirá.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between gap-6">
          <div className="flex flex-col gap-2">
            <p className="text-slate-500 text-xs">
              &copy; {new Date().getFullYear()} João Boeri. Todos os direitos reservados.
            </p>
            <p className="text-slate-500/70 text-[10px] font-light max-w-2xl">
              As informações deste site têm caráter meramente informativo e não representam promessa de resultado. Cada caso precisa ser analisado individualmente.
            </p>
          </div>
          
          <div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
            <span className="text-slate-500 text-[10px] font-medium">Site construído por</span>
            <a 
              href="https://eyecode.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              className="flex items-center"
            >
              <img src="/logo-eyecode.png" alt="Eyecode" className="h-4 sm:h-5 w-auto object-contain" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
