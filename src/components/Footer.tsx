import { Heart, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Marcela França</h3>
            <p className="text-gray-400 mb-4">
              Jornalista e criadora de conteúdo digital. Apaixonada pela vida, escolhida por Deus e movida pela verdade.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-900 text-blue-300 rounded-full text-xs">
                #escolhidapordeus
              </span>
              <span className="px-3 py-1 bg-pink-900 text-pink-300 rounded-full text-xs">
                #jornalista
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-gray-400 hover:text-white transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#reels" className="text-gray-400 hover:text-white transition-colors">
                  Reels
                </a>
              </li>
              <li>
                <a
                  href="https://bymarcelafranca.blogspot.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  Blog
                  <ExternalLink size={14} />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-400">
              <li>São Paulo, Brasil</li>
              <li>
                <a href="mailto:contato@marcelafranca.com.br" className="hover:text-white transition-colors">
                  contato@marcelafranca.com.br
                </a>
              </li>
            </ul>
            <div className="mt-4 flex gap-3">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                ig
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                yt
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            © {currentYear} Marcela França. Feito com
            <Heart size={16} className="text-pink-500" fill="currentColor" />
            e fé
          </p>
        </div>
      </div>
    </footer>
  );
}
