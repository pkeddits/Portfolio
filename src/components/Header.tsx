import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('home')}
            className="text-xl font-bold text-white hover:text-blue-400 transition-colors"
          >
            Portfólio
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <ul className="hidden md:flex gap-8">
            <li>
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Início
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Sobre
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Projetos
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Contato
              </button>
            </li>
          </ul>
        </div>

        {isMenuOpen && (
          <ul className="md:hidden mt-4 flex flex-col gap-4">
            <li>
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-300 hover:text-white transition-colors w-full text-left"
              >
                Início
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-300 hover:text-white transition-colors w-full text-left"
              >
                Sobre
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-gray-300 hover:text-white transition-colors w-full text-left"
              >
                Projetos
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-300 hover:text-white transition-colors w-full text-left"
              >
                Contato
              </button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
