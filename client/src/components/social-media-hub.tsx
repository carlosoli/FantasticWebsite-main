import { useState } from "react";

interface SocialMediaTabsProps {
  activeTab: "instagram" | "facebook" | "twitter";
  onChange: (tab: "instagram" | "facebook" | "twitter") => void;
}

const SocialMediaTabs = ({ activeTab, onChange }: SocialMediaTabsProps) => {
  return (
    <div className="mb-8">
      <div className="border-b border-gray-200">
        <ul className="flex flex-wrap -mb-px text-center">
          <li className="mr-2">
            <button
              onClick={() => onChange("instagram")}
              className={`inline-block p-4 border-b-2 rounded-t-lg ${
                activeTab === "instagram"
                  ? "border-primary text-primary"
                  : "border-transparent hover:text-primary hover:border-gray-300"
              }`}
            >
              <i className="fab fa-instagram mr-2"></i>Instagram
            </button>
          </li>
          <li className="mr-2">
            <button
              onClick={() => onChange("facebook")}
              className={`inline-block p-4 border-b-2 rounded-t-lg ${
                activeTab === "facebook"
                  ? "border-primary text-primary"
                  : "border-transparent hover:text-primary hover:border-gray-300"
              }`}
            >
              <i className="fab fa-facebook mr-2"></i>Facebook
            </button>
          </li>
          <li className="mr-2">
            <button
              onClick={() => onChange("twitter")}
              className={`inline-block p-4 border-b-2 rounded-t-lg ${
                activeTab === "twitter"
                  ? "border-primary text-primary"
                  : "border-transparent hover:text-primary hover:border-gray-300"
              }`}
            >
              <i className="fab fa-twitter mr-2"></i>Twitter
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

const InstagramFeed = () => {
  const instagramPosts = [
    {
      id: 1,
      imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop",
      likes: 245,
      comments: 18,
      isVideo: false,
      caption: "Visita a escola local",
    },
    {
      id: 2,
      imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
      likes: 189,
      comments: 12,
      isVideo: false,
      caption: "Reunião com equipe",
    },
    {
      id: 3,
      imageUrl: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?q=80&w=2070&auto=format&fit=crop",
      likes: 312,
      comments: 27,
      isVideo: true,
      caption: "Entrevista breve sobre projeto",
    },
    {
      id: 4,
      imageUrl: "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?q=80&w=1974&auto=format&fit=crop",
      likes: 156,
      comments: 8,
      isVideo: false,
      caption: "Conferência sobre meio ambiente",
    },
    {
      id: 5,
      imageUrl: "https://images.unsplash.com/photo-1494172892981-ce47ca454da3?q=80&w=2070&auto=format&fit=crop",
      likes: 223,
      comments: 15,
      isVideo: false,
      caption: "Visita a comunidade",
    },
    {
      id: 6,
      imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop",
      likes: 287,
      comments: 23,
      isVideo: true,
      caption: "Discurso em evento",
    },
    {
      id: 7,
      imageUrl: "https://images.unsplash.com/photo-1591115765373-5207764f72e4?q=80&w=2070&auto=format&fit=crop",
      likes: 178,
      comments: 11,
      isVideo: false,
      caption: "Visita a obra social",
    },
    {
      id: 8,
      imageUrl: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop",
      likes: 201,
      comments: 14,
      isVideo: false,
      caption: "Reunião com lideranças",
    }
  ];
  
  return (
    <div id="instagram-tab" className="social-tab">
      {/* Instagram Header with Profile */}
      <div className="flex items-center mb-8">
        <img 
          src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" 
          alt="Jesus Alves Amazonas" 
          className="w-16 h-16 rounded-full object-cover border-2 border-primary p-0.5"
        />
        <div className="ml-4">
          <h3 className="font-bold text-lg">@jesusalvesamazonas</h3>
          <p className="text-muted-foreground text-sm">Perfil oficial no Instagram</p>
        </div>
        <a 
          href="https://www.instagram.com/jesusalvesamazonas" 
          target="_blank" 
          rel="noopener noreferrer"
          className="ml-auto bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-light transition-colors"
        >
          Seguir
        </a>
      </div>

      {/* Instagram Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {instagramPosts.map((post) => (
          <div key={post.id} className="relative aspect-square overflow-hidden rounded-lg group">
            {post.isVideo && (
              <div className="absolute top-2 right-2 z-10">
                <i className="fas fa-play-circle text-white text-2xl drop-shadow-lg"></i>
              </div>
            )}
            <img 
              src={post.imageUrl} 
              alt={post.caption} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity flex items-center justify-center opacity-0 group-hover:opacity-100">
              <div className="text-white text-center">
                <div className="flex space-x-4">
                  <span><i className="fas fa-heart"></i> {post.likes}</span>
                  <span><i className="fas fa-comment"></i> {post.comments}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <a 
          href="https://www.instagram.com/jesusalvesamazonas" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-white border border-primary text-primary font-semibold px-6 py-3 rounded-md hover:bg-primary hover:text-white transition-colors duration-300"
        >
          Ver Perfil Completo no Instagram
        </a>
      </div>
    </div>
  );
};

const SocialMediaHub = () => {
  const [activeTab, setActiveTab] = useState<"instagram" | "facebook" | "twitter">("instagram");

  return (
    <section id="redes-sociais" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="section-title">Redes Sociais</h2>
          <p className="section-description">Acompanhe Jesus Alves Amazonas nas plataformas sociais e fique por dentro das atualizações do dia a dia.</p>
        </div>

        <SocialMediaTabs activeTab={activeTab} onChange={setActiveTab} />

        {activeTab === "instagram" && <InstagramFeed />}
        {activeTab === "facebook" && (
          <div className="text-center py-12">
            <h3 className="text-xl mb-4">Conteúdo do Facebook</h3>
            <p>Conecte-se com Jesus Alves Amazonas no Facebook.</p>
            <a 
              href="https://www.facebook.com/jesus.alves.754" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-700 transition-colors duration-300"
            >
              Visitar Página do Facebook
            </a>
          </div>
        )}
        {activeTab === "twitter" && (
          <div className="text-center py-12">
            <h3 className="text-xl mb-4">Tweets e Atualizações</h3>
            <p>Acompanhe as atualizações de Jesus Alves Amazonas no Twitter.</p>
            <a 
              href="#" 
              className="mt-4 inline-block bg-blue-400 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-500 transition-colors duration-300"
            >
              Seguir no Twitter
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default SocialMediaHub;
