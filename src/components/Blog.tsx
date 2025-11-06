import { BookOpen, ExternalLink, Calendar, Tag } from 'lucide-react';

export default function Blog() {
  const blogPosts = [
    {
      title: 'A Jornada da Fé no Jornalismo',
      excerpt: 'Como a fé guia meu trabalho como jornalista e me ajuda a buscar sempre a verdade',
      date: '2024-11-01',
      category: 'Espiritualidade',
      color: 'blue',
    },
    {
      title: 'Escolhida Por Deus: Vivendo o Propósito',
      excerpt: 'Reflexões sobre como descobrir e viver o propósito divino em nossas vidas',
      date: '2024-10-28',
      category: 'Reflexão',
      color: 'purple',
    },
    {
      title: 'Autenticidade nas Redes Sociais',
      excerpt: 'A importância de ser verdadeiro e transparente ao criar conteúdo digital',
      date: '2024-10-25',
      category: 'Comunicação',
      color: 'pink',
    },
    {
      title: 'Salmos que Transformam',
      excerpt: 'Como a leitura dos Salmos pode trazer paz e direção em momentos difíceis',
      date: '2024-10-20',
      category: 'Bíblia',
      color: 'green',
    },
  ];

  const colorClasses = {
    blue: 'bg-blue-100 text-blue-700 border-blue-200',
    purple: 'bg-purple-100 text-purple-700 border-purple-200',
    pink: 'bg-pink-100 text-pink-700 border-pink-200',
    green: 'bg-green-100 text-green-700 border-green-200',
  };

  return (
    <section className="min-h-screen pt-24 pb-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-4">
            <BookOpen size={16} />
            <span className="text-sm font-medium">Blog</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Artigos e Reflexões
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Espiritualidade, jornalismo e cotidiano em palavras que inspiram
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-pink-50 rounded-2xl p-8 md:p-12 mb-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Visite meu blog completo
          </h3>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Acesse bymarcelafranca.blogspot.com.br para ler todos os artigos, reflexões e histórias que compartilho
          </p>
          <a
            href="https://bymarcelafranca.blogspot.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Visitar Blog
            <ExternalLink size={20} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white border-2 border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer"
            >
              <div className={`h-48 bg-gradient-to-br ${post.color === 'blue' ? 'from-blue-400 to-blue-600' : post.color === 'purple' ? 'from-purple-400 to-purple-600' : post.color === 'pink' ? 'from-pink-400 to-pink-600' : 'from-green-400 to-green-600'} flex items-center justify-center`}>
                <BookOpen size={60} className="text-white opacity-80" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {new Date(post.date).toLocaleDateString('pt-BR')}
                  </span>
                  <span className={`flex items-center gap-1 px-3 py-1 ${colorClasses[post.color as keyof typeof colorClasses]} rounded-full text-xs font-medium`}>
                    <Tag size={12} />
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <a
                  href="https://bymarcelafranca.blogspot.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors"
                >
                  Ler mais
                  <ExternalLink size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Receba conteúdo inspirador
            </h3>
            <p className="text-gray-600 mb-6">
              Siga minhas redes sociais para não perder nenhuma reflexão, artigo ou vídeo
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
