import { useState, useEffect } from 'react';
import { Menu, X, Scale, Phone } from 'lucide-react';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#inicio');
            }}
            className="flex items-center gap-2 group"
          >
            <div className={`p-2 rounded-lg transition-colors ${
              isScrolled ? 'bg-amber-600' : 'bg-white/20'
            }`}>
              <Scale className={`w-6 h-6 ${isScrolled ? 'text-white' : 'text-white'}`} />
            </div>
            <div className="flex flex-col">
              <span className={`font-serif font-bold text-lg leading-tight transition-colors ${
                isScrolled ? 'text-slate-900' : 'text-white'
              }`}>
                Dra. Fernanda Misumi
              </span>
              <span className={`text-xs transition-colors ${
                isScrolled ? 'text-slate-600' : 'text-white/80'
              }`}>
                Advocacia & Consultoria
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={`text-sm font-medium transition-colors hover:text-amber-600 ${
                  isScrolled ? 'text-slate-700' : 'text-white/90'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://wa.me/5511912045757"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all ${
                isScrolled
                  ? 'bg-amber-600 text-white hover:bg-amber-700'
                  : 'bg-white text-amber-700 hover:bg-white/90'
              }`}
            >
              <Phone className="w-4 h-4" />
              Fale Comigo
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-slate-900' : 'text-white'
            }`}
            aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col gap-2 bg-white rounded-2xl p-4 shadow-xl">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="px-4 py-3 text-slate-700 font-medium rounded-lg hover:bg-amber-50 hover:text-amber-700 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-3 mt-2 bg-amber-600 text-white font-medium rounded-lg hover:bg-amber-700 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Fale Comigo
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
