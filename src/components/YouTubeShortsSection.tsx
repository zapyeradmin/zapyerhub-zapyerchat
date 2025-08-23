const YouTubeShortsSection = () => {
  const shorts = [
    {
      id: "your_short_id_1",
      title: "Como configurar seu primeiro chatbot"
    },
    {
      id: "your_short_id_2", 
      title: "Automatizando respostas no WhatsApp"
    },
    {
      id: "your_short_id_3",
      title: "Aumentando vendas com IA"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Dicas Rápidas e Novidades
          </h2>
          <p className="text-muted-foreground font-medium max-w-2xl mx-auto">
            Confira nossos Shorts para ver o Zapyer Chat em ação e aprender a extrair o máximo da plataforma.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {shorts.map((short, index) => (
            <div key={index} className="w-full max-w-[315px] mx-auto aspect-[9/16]">
              <iframe
                className="w-full h-full rounded-2xl shadow-2xl border-2 border-primary/50"
                src={`https://www.youtube.com/embed/${short.id}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={short.title}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YouTubeShortsSection;