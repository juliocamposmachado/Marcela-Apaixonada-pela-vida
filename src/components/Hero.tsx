import { ArrowRight, Heart, Sparkles } from 'lucide-react';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

export default function Hero({ setActiveSection }: HeroProps) {
  return (
    <section className="min-h-screen pt-20 bg-gradient-to-br from-blue-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-blue-600">
                <Sparkles size={20} />
                <span className="text-sm font-medium uppercase tracking-wider">
                  Jornalista & Criadora de Conteúdo
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Marcela França
              </h1>

              <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed flex items-center gap-2">
                Apaixonada pela vida <Heart className="text-pink-500 inline" size={28} fill="currentColor" />
              </p>

              <p className="text-xl text-gray-600">
                Escolhida por Deus e movida pela verdade
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                #escolhidapordeus
              </span>
              <span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">
                #jornalista
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                #apaixonadapelavida
              </span>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setActiveSection('sobre')}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                Conheça Minha História
                <ArrowRight size={20} />
              </button>
              <button
                onClick={() => setActiveSection('reels')}
                className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              >
                Ver Reels
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-200 via-pink-200 to-purple-200 flex items-center justify-center overflow-hidden shadow-2xl">
              <div className="text-center p-8">
                <div className="w-48 h-48 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg">
                  <Heart size={80} className="text-pink-500" fill="currentColor" />
                </div>
                <p className="mt-6 text-gray-700 text-lg font-medium">
                  Marcela França
                </p>
                <p className="text-gray-600">São Paulo, Brasil</p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-300 rounded-full opacity-50 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-300 rounded-full opacity-50 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
