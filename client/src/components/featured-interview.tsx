import { Link } from "wouter";

const FeaturedInterview = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-primary p-4">
        <h2 className="text-xl font-bold text-white">Entrevista em Destaque</h2>
      </div>
      <div className="p-4">
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop" 
            alt="Entrevista recente" 
            className="w-full h-48 object-cover rounded mb-3"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <i className="fas fa-play-circle text-white text-5xl opacity-80 hover:opacity-100 cursor-pointer transition-opacity"></i>
          </div>
        </div>
        <h3 className="font-bold text-lg mb-2">Entrevista Exclusiva: Os Desafios da Amazônia</h3>
        <p className="text-muted-foreground text-sm mb-3">Jesus Alves Amazonas fala sobre os principais desafios e oportunidades para a região nos próximos anos.</p>
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-500">TV Amazonas • 10 maio 2023</span>
          <Link href="/entrevistas/1" className="text-primary font-semibold text-sm hover:underline">
            Assistir
          </Link>
        </div>
      </div>
      <div className="bg-gray-50 p-4 border-t">
        <Link 
          href="/entrevistas"
          className="text-primary font-semibold hover:underline flex items-center"
        >
          Ver todas as entrevistas
          <i className="fas fa-arrow-right ml-2"></i>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedInterview;
