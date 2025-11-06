import { Image, Camera, Heart, Briefcase } from 'lucide-react';

export default function Gallery() {
  const galleryItems = [
    {
      title: 'Momentos de Fé',
      description: 'Eventos e celebrações religiosas',
      icon: Heart,
      color: 'from-pink-400 to-pink-600',
    },
    {
      title: 'No Trabalho',
      description: 'Bastidores do jornalismo',
      icon: Briefcase,
      color: 'from-blue-400 to-blue-600',
    },
    {
      title: 'Eventos',
      description: 'Coberturas e participações',
      icon: Camera,
      color: 'from-purple-400 to-purple-600',
    },
    {
      title: 'Inspiração',
      description: 'Momentos que inspiram',
      icon: Image,
      color: 'from-yellow-400 to-yellow-600',
    },
    {
      title: 'Testemunhos',
      description: 'Histórias de transformação',
      icon: Heart,
      color: 'from-green-400 to-green-600',
    },
    {
      title: 'Cotidiano',
      description: 'Vida real e autêntica',
      icon: Camera,
      color: 'from-red-400 to-red-600',
    },
  ];

  const photoGrid = [
    { span: 'md:col-span-2 md:row-span-2', color: 'from-blue-300 to-blue-500' },
    { span: 'md:col-span-1', color: 'from-pink-300 to-pink-500' },
    { span: 'md:col-span-1', color: 'from-purple-300 to-purple-500' },
    { span: 'md:col-span-1', color: 'from-yellow-300 to-yellow-500' },
    { span: 'md:col-span-1', color: 'from-green-300 to-green-500' },
    { span: 'md:col-span-2', color: 'from-red-300 to-red-500' },
    { span: 'md:col-span-1', color: 'from-blue-300 to-blue-500' },
    { span: 'md:col-span-1', color: 'from-pink-300 to-pink-500' },
  ];

  return (
    <section className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-gray-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 text-pink-700 rounded-full mb-4">
            <Camera size={16} />
            <span className="text-sm font-medium">Galeria</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Momentos Capturados
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Imagens que contam histórias de fé, trabalho e inspiração
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {galleryItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {photoGrid.map((photo, index) => (
            <div
              key={index}
              className={`${photo.span} aspect-square md:aspect-auto rounded-2xl bg-gradient-to-br ${photo.color} overflow-hidden relative group cursor-pointer hover:scale-105 transition-transform`}
            >
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 bg-white bg-opacity-30 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Image size={24} className="text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 text-center shadow-lg">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart size={32} className="text-white" fill="currentColor" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Compartilhe Seus Momentos
            </h3>
            <p className="text-gray-600 mb-6">
              Marque-me nas suas fotos e histórias inspiradoras nas redes sociais
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                #escolhidapordeus
              </span>
              <span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">
                #marcelafranca
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                #apaixonadapelavida
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
