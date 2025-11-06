import { Video, Music, BookOpen, Sparkles } from 'lucide-react';

export default function Reels() {
  const reelCategories = [
    {
      icon: BookOpen,
      title: 'Salmos e Reflexões',
      description: 'Trechos inspiradores da Bíblia e reflexões sobre fé',
      color: 'blue',
    },
    {
      icon: Video,
      title: 'Bastidores',
      description: 'Rotina como jornalista e criadora de conteúdo',
      color: 'pink',
    },
    {
      icon: Music,
      title: 'Músicas Cristãs',
      description: 'Momentos de louvor e adoração',
      color: 'purple',
    },
    {
      icon: Sparkles,
      title: 'Fé e Propósito',
      description: 'Mensagens sobre vida, propósito e espiritualidade',
      color: 'yellow',
    },
  ];

  const reelPreviews = [
    {
      title: 'Reflexão do Dia',
      description: 'Salmo 23 - O Senhor é meu pastor',
      color: 'from-blue-400 to-blue-600',
    },
    {
      title: 'Bastidores na Redação',
      description: 'Um dia na vida de uma jornalista',
      color: 'from-pink-400 to-pink-600',
    },
    {
      title: 'Momento de Louvor',
      description: 'Adoração que transforma',
      color: 'from-purple-400 to-purple-600',
    },
    {
      title: 'Escolhida por Deus',
      description: 'Vivendo o propósito divino',
      color: 'from-yellow-400 to-yellow-600',
    },
    {
      title: 'Fé em Ação',
      description: 'Testemunho de transformação',
      color: 'from-green-400 to-green-600',
    },
    {
      title: 'Palavra de Hoje',
      description: 'Versículo que inspira',
      color: 'from-red-400 to-red-600',
    },
  ];

  return (
    <section className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-4">
            <Video size={16} />
            <span className="text-sm font-medium">Reels & Vídeos</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Conteúdo Inspirador
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Vídeos curtos que unem espiritualidade, jornalismo e autenticidade
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {reelCategories.map((category, index) => {
            const Icon = category.icon;
            const colorClasses = {
              blue: 'bg-blue-100 text-blue-600 border-blue-200',
              pink: 'bg-pink-100 text-pink-600 border-pink-200',
              purple: 'bg-purple-100 text-purple-600 border-purple-200',
              yellow: 'bg-yellow-100 text-yellow-600 border-yellow-200',
            };

            return (
              <div
                key={index}
                className={`bg-white border-2 ${colorClasses[category.color as keyof typeof colorClasses].split(' ')[2]} rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1`}
              >
                <div className={`w-14 h-14 ${colorClasses[category.color as keyof typeof colorClasses].split(' ').slice(0, 2).join(' ')} rounded-full flex items-center justify-center mb-4`}>
                  <Icon size={28} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {category.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reelPreviews.map((reel, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              <div className={`aspect-[9/16] bg-gradient-to-br ${reel.color} rounded-2xl overflow-hidden relative shadow-lg hover:shadow-2xl transition-all hover:scale-105`}>
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white bg-opacity-30 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Video size={32} className="text-white" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                  <h4 className="text-white font-bold text-lg mb-1">
                    {reel.title}
                  </h4>
                  <p className="text-white text-sm opacity-90">
                    {reel.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Siga minhas redes sociais para mais conteúdo inspirador
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all"
            >
              Instagram
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:shadow-lg transition-all"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
