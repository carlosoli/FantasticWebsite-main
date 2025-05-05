import { useState, useEffect } from "react";
import SocialMediaHub from "@/components/social-media-hub";

const SocialMedia = () => {
  useEffect(() => {
    document.title = "Redes Sociais - Jesus Alves Amazonas";
  }, []);

  return (
    <>
      <div className="bg-primary py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-white text-4xl font-bold text-center">Redes Sociais</h1>
          <p className="text-white/80 text-center mt-4 max-w-2xl mx-auto">
            Acompanhe Jesus Alves Amazonas nas plataformas sociais e fique por dentro das atualizações do dia a dia.
          </p>
        </div>
      </div>
      
      <SocialMediaHub />
      
      <section className="py-16 bg-background-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <i className="fab fa-instagram text-2xl text-pink-600 mr-3"></i>
                <h3 className="text-xl font-bold">Instagram</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Acompanhe fotos e vídeos do dia a dia, eventos e atividades em nosso Instagram oficial.
              </p>
              <a 
                href="https://www.instagram.com/jesusalvesamazonas" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-primary hover:underline"
              >
                <span>@jesusalvesamazonas</span>
                <i className="fas fa-external-link-alt ml-2 text-sm"></i>
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <i className="fab fa-facebook text-2xl text-blue-600 mr-3"></i>
                <h3 className="text-xl font-bold">Facebook</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Confira notícias, atualizações e interaja com conteúdos exclusivos no Facebook.
              </p>
              <a 
                href="https://www.facebook.com/jesus.alves.754" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-primary hover:underline"
              >
                <span>facebook.com/jesus.alves.754</span>
                <i className="fas fa-external-link-alt ml-2 text-sm"></i>
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <i className="fab fa-twitter text-2xl text-blue-400 mr-3"></i>
                <h3 className="text-xl font-bold">Twitter</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Siga para atualizações em tempo real, notícias e comunicados oficiais.
              </p>
              <a 
                href="#" 
                className="flex items-center text-primary hover:underline"
              >
                <span>@JesusAlvesAM</span>
                <i className="fas fa-external-link-alt ml-2 text-sm"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SocialMedia;
