import HeroSection from "@/components/hero-section";
import FeaturedNews from "@/components/featured-news";
import SocialMediaHub from "@/components/social-media-hub";
import { featuredNews } from "@/data/mock-data";
import { useState, useEffect } from "react";
import { Link } from "wouter";
import InterviewCard from "@/components/interview-card";
import GalleryItem from "@/components/gallery-item";

const Home = () => {
  const [heroImage, setHeroImage] = useState("https://images.unsplash.com/photo-1665686377065-08ba896d16fd?q=80&w=2070&auto=format&fit=crop");
  
  useEffect(() => {
    // Update the document title
    document.title = "Jesus Alves Amazonas - Portal Oficial";
  }, []);

  const featuredInterview = {
    id: 1,
    title: "A Amazônia e o Futuro: Diálogos para um Desenvolvimento Sustentável",
    description: "Nesta entrevista especial, Jesus Alves Amazonas discute os principais desafios e oportunidades para o desenvolvimento sustentável da região amazônica, apresentando propostas concretas e parcerias estratégicas para conciliar progresso econômico e preservação ambiental.",
    imageUrl: "https://images.unsplash.com/photo-1551836022-aadb801c60ae?q=80&w=2070&auto=format&fit=crop",
    date: "22 de abril, 2023",
    duration: "48:32",
    source: "TV Amazonas",
    program: "Programa Amazônia em Foco",
    type: "video",
    sourceLogoUrl: "https://images.unsplash.com/photo-1558222218-507dcd2d555e?q=80&w=1974&auto=format&fit=crop",
    url: "/entrevistas/1"
  };

  const galleryItems = [
    {
      id: 1,
      imageUrl: "https://images.unsplash.com/photo-1561489413-985b06da5bee?q=80&w=2070&auto=format&fit=crop",
      title: "Encontro com lideranças comunitárias",
      date: "Maio 2023",
      isVideo: false
    },
    {
      id: 2,
      imageUrl: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2070&auto=format&fit=crop",
      title: "Entrevista sobre desenvolvimento regional",
      date: "Abril 2023",
      isVideo: true
    },
    {
      id: 3,
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
      title: "Planejamento estratégico com equipe",
      date: "Abril 2023",
      isVideo: false
    },
    {
      id: 4,
      imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
      title: "Conferência sobre sustentabilidade",
      date: "Março 2023",
      isVideo: false
    }
  ];

  return (
    <>
      <HeroSection 
        title='"Nosso compromisso é com a transparência e o desenvolvimento sustentável da região"'
        description="Confira a entrevista exclusiva onde Jesus Alves Amazonas fala sobre os novos projetos para 2023"
        imageUrl={heroImage}
        ctaText="Ler Entrevista Completa"
        ctaLink="/entrevistas/1"
      />
      
      <FeaturedNews newsItems={featuredNews} />
      
      {/* News Section Preview */}
      <section id="noticias-preview" className="py-16 bg-background-light">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="section-title">Notícias e Atividades</h2>
            <p className="section-description">Acompanhe as últimas notícias, eventos e atividades relacionadas a Jesus Alves Amazonas.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredNews.slice(0, 3).map((news) => (
              <Link href={`/noticias/${news.id}`} key={news.id}>
                <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer">
                  <img 
                    src={news.imageUrl} 
                    alt={news.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-5">
                    <h3 className="font-bold text-lg mb-2">{news.title}</h3>
                    <p className="text-muted-foreground text-sm">{news.summary.substring(0, 80)}...</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <Link href="/noticias" className="inline-block bg-primary text-white font-semibold px-6 py-3 rounded-md hover:bg-primary-light transition-colors duration-300">
              Ver Todas as Notícias
            </Link>
          </div>
        </div>
      </section>
      
      {/* Interviews Preview */}
      <section id="entrevistas-preview" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="section-title">Entrevistas</h2>
            <p className="section-description">Acompanhe as principais entrevistas e participações na mídia de Jesus Alves Amazonas.</p>
          </div>
          
          <InterviewCard interview={featuredInterview} featured={true} />
          
          <div className="text-center">
            <Link href="/entrevistas" className="inline-block bg-white border border-primary text-primary font-semibold px-6 py-3 rounded-md hover:bg-primary hover:text-white transition-colors duration-300">
              Ver Todas as Entrevistas
            </Link>
          </div>
        </div>
      </section>
      
      {/* Gallery Preview */}
      <section id="galeria-preview" className="py-16 bg-background-light">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="section-title">Galeria</h2>
            <p className="section-description">Confira as imagens e vídeos dos principais eventos e atividades.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryItems.map((item) => (
              <GalleryItem key={item.id} item={item} />
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <Link href="/galeria" className="inline-block bg-white border border-primary text-primary font-semibold px-6 py-3 rounded-md hover:bg-primary hover:text-white transition-colors duration-300">
              Ver Galeria Completa
            </Link>
          </div>
        </div>
      </section>
      
      <SocialMediaHub />
    </>
  );
};

export default Home;
