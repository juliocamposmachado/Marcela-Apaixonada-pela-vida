import { MapPin, Briefcase, Heart, Sparkles, Quote } from 'lucide-react';

export default function About() {
  return (
    <section className="min-h-screen pt-24 pb-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-4">
            <Sparkles size={16} />
            <span className="text-sm font-medium">Sobre Mim</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Marcela França
          </h2>
          <div className="flex flex-wrap justify-center gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <MapPin size={20} className="text-blue-600" />
              <span>São Paulo, Brasil</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase size={20} className="text-blue-600" />
              <span>Jornalista e Criadora de Conteúdo Digital</span>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-gradient-to-br from-blue-50 to-pink-50 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <Quote className="absolute top-4 right-4 text-blue-200" size={60} />
            <div className="relative z-10">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                Marcela França é uma comunicadora apaixonada pela vida, guiada pela fé e movida pelo propósito de inspirar pessoas. Com mais de 6 mil seguidores nas redes sociais, ela compartilha conteúdos que unem espiritualidade, jornalismo e autenticidade.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Através de seu trabalho como jornalista e criadora de conteúdo digital, Marcela conecta histórias reais com mensagens de esperança, sempre guiada pelos valores cristãos e pela busca da verdade.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border-2 border-blue-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Paixão</h3>
              <p className="text-gray-600">
                Apaixonada pela vida e por compartilhar histórias que inspiram
              </p>
            </div>

            <div className="bg-white border-2 border-pink-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles size={32} className="text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Propósito</h3>
              <p className="text-gray-600">
                Escolhida por Deus para levar luz e verdade ao mundo
              </p>
            </div>

            <div className="bg-white border-2 border-purple-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase size={32} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Profissão</h3>
              <p className="text-gray-600">
                Jornalismo com autenticidade e compromisso com a verdade
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Valores que Me Guiam
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="w-2 bg-blue-600 rounded-full"></div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Espiritualidade</h4>
                  <p className="text-gray-600">
                    Fé cristã como alicerce de todas as minhas ações e decisões
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-2 bg-pink-600 rounded-full"></div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Autenticidade</h4>
                  <p className="text-gray-600">
                    Ser verdadeira e transparente em cada história compartilhada
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-2 bg-purple-600 rounded-full"></div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Inspiração</h4>
                  <p className="text-gray-600">
                    Motivar pessoas a viverem seus propósitos com paixão
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-2 bg-yellow-600 rounded-full"></div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Conexão</h4>
                  <p className="text-gray-600">
                    Criar laços genuínos através de conteúdo significativo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
