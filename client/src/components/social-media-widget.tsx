import { Link } from "wouter";

const SocialMediaWidget = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
      <div className="bg-primary p-4">
        <h2 className="text-xl font-bold text-white">Redes Sociais</h2>
      </div>
      <div className="p-4">
        {/* Instagram Preview */}
        <div className="mb-4">
          <div className="flex items-center mb-3">
            <i className="fab fa-instagram text-xl text-pink-600 mr-2"></i>
            <span className="font-semibold">Instagram</span>
          </div>
          <div className="grid grid-cols-3 gap-1">
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" 
              alt="Instagram post 1" 
              className="w-full h-20 object-cover rounded"
            />
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop" 
              alt="Instagram post 2" 
              className="w-full h-20 object-cover rounded"
            />
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" 
              alt="Instagram post 3" 
              className="w-full h-20 object-cover rounded"
            />
          </div>
          <a 
            href="https://www.instagram.com/jesusalvesamazonas" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline mt-2 inline-block"
          >
            @jesusalvesamazonas
          </a>
        </div>

        {/* Twitter/X Preview */}
        <div className="border-t pt-4 mb-4">
          <div className="flex items-center mb-3">
            <i className="fab fa-twitter text-xl text-blue-400 mr-2"></i>
            <span className="font-semibold">Twitter/X</span>
          </div>
          <div className="bg-gray-50 p-3 rounded border border-gray-200 mb-2">
            <p className="text-sm">"Participei hoje de uma importante reunião sobre investimentos em infraestrutura. O futuro da nossa região depende de decisões sustentáveis hoje."</p>
            <span className="text-xs text-gray-500 mt-2 block">12:45 · 14 maio 2023</span>
          </div>
          <Link href="/redes-sociais" className="text-sm text-primary hover:underline">
            Ver mais tweets
          </Link>
        </div>

        {/* Facebook Preview */}
        <div className="border-t pt-4">
          <div className="flex items-center mb-3">
            <i className="fab fa-facebook text-xl text-blue-600 mr-2"></i>
            <span className="font-semibold">Facebook</span>
          </div>
          <div className="bg-gray-50 p-3 rounded border border-gray-200">
            <p className="text-sm">Acompanhe a cobertura completa do nosso evento de ontem na galeria de fotos. Foi um prazer receber tantos apoiadores!</p>
            <span className="text-xs text-gray-500 mt-2 block">15 maio 2023</span>
          </div>
          <a 
            href="https://www.facebook.com/jesus.alves.754" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline mt-2 inline-block"
          >
            facebook.com/jesus.alves.754
          </a>
        </div>
      </div>
      <div className="bg-gray-50 p-4 border-t">
        <Link 
          href="/redes-sociais"
          className="text-primary font-semibold hover:underline flex items-center"
        >
          Ver todas as redes
          <i className="fas fa-arrow-right ml-2"></i>
        </Link>
      </div>
    </div>
  );
};

export default SocialMediaWidget;
