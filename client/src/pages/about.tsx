import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "Sobre - Jesus Alves Amazonas";
  }, []);

  return (
    <section id="sobre" className="py-16 bg-background-light">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Bio Image */}
            <div className="md:w-1/3">
              <div className="sticky top-24">
                <div className="rounded-lg overflow-hidden shadow-lg mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" 
                    alt="Jesus Alves Amazonas - Foto oficial" 
                    className="w-full object-cover"
                  />
                </div>
                <div className="bg-white p-5 rounded-lg shadow-md">
                  <h3 className="font-bold text-lg mb-4">Redes Sociais</h3>
                  <div className="flex flex-col space-y-3">
                    <a 
                      href="https://www.instagram.com/jesusalvesamazonas" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                    >
                      <i className="fab fa-instagram text-xl w-8"></i>
                      <span>@jesusalvesamazonas</span>
                    </a>
                    <a 
                      href="https://www.facebook.com/jesus.alves.754" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                    >
                      <i className="fab fa-facebook text-xl w-8"></i>
                      <span>jesus.alves.754</span>
                    </a>
                    <a 
                      href="#" 
                      className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                    >
                      <i className="fab fa-twitter text-xl w-8"></i>
                      <span>@JesusAlvesAM</span>
                    </a>
                    <a 
                      href="mailto:contato@jesusalves.com.br" 
                      className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                    >
                      <i className="far fa-envelope text-xl w-8"></i>
                      <span>contato@jesusalves.com.br</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio Content */}
            <div className="md:w-2/3">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Sobre Jesus Alves Amazonas</h2>
                <div className="prose max-w-none">
                  <p className="mb-4 text-muted-foreground">
                    Jesus Alves Amazonas tem dedicado sua vida ao desenvolvimento sustentável e à preservação da região amazônica. Natural de Manaus, formou-se em Ciências Ambientais e possui mestrado em Gestão de Políticas Públicas, com foco em desenvolvimento regional sustentável.
                  </p>
                  
                  <p className="mb-4 text-muted-foreground">
                    Ao longo de sua trajetória, tem atuado em diversas frentes para conciliar o progresso econômico com a proteção do patrimônio natural da Amazônia. Sua abordagem integra conhecimentos científicos, tradições das comunidades locais e estratégias inovadoras de desenvolvimento.
                  </p>
                  
                  <p className="mb-4 text-muted-foreground">
                    Como defensor do diálogo entre diferentes setores da sociedade, Jesus Alves Amazonas promove encontros e debates que reúnem representantes de comunidades tradicionais, empresários, pesquisadores e gestores públicos, buscando soluções consensuais para os desafios da região.
                  </p>
                  
                  <p className="mb-4 text-muted-foreground">
                    Sua atuação tem sido reconhecida nacionalmente por criar pontes entre interesses econômicos, sociais e ambientais, sempre com o objetivo de construir um futuro próspero e sustentável para a Amazônia e seus povos.
                  </p>
                  
                  <blockquote className="bg-white p-4 border-l-4 border-primary rounded my-6">
                    <p className="italic text-text-dark">"Nosso maior desafio é transformar a riqueza natural da Amazônia em qualidade de vida para seus habitantes, sem comprometer o equilíbrio ambiental que é vital para todo o planeta."</p>
                    <footer className="mt-2 font-medium">— Jesus Alves Amazonas</footer>
                  </blockquote>
                  
                  <h3 className="text-xl font-bold mt-8 mb-4">Áreas de Atuação</h3>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
                    <li>Desenvolvimento de políticas públicas sustentáveis</li>
                    <li>Conservação da biodiversidade e recursos naturais</li>
                    <li>Educação ambiental e conscientização</li>
                    <li>Fortalecimento de comunidades tradicionais</li>
                    <li>Promoção de tecnologias verdes e economia sustentável</li>
                    <li>Diálogo entre diferentes setores da sociedade</li>
                  </ul>
                  
                  <h3 className="text-xl font-bold mt-8 mb-4">Formação Acadêmica</h3>
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold">Mestrado em Gestão de Políticas Públicas</h4>
                      <p className="text-sm text-muted-foreground">Universidade Federal do Amazonas • 2015-2017</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Especialização em Desenvolvimento Regional Sustentável</h4>
                      <p className="text-sm text-muted-foreground">Universidade de São Paulo • 2013-2014</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Graduação em Ciências Ambientais</h4>
                      <p className="text-sm text-muted-foreground">Universidade do Estado do Amazonas • 2009-2012</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Entre em Contato</h3>
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-text-dark mb-1">Nome</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text-dark mb-1">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-sm font-medium text-text-dark mb-1">Assunto</label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-text-dark mb-1">Mensagem</label>
                    <textarea 
                      id="message" 
                      rows={4} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="bg-primary hover:bg-primary-light text-white font-semibold px-6 py-3 rounded-md transition-colors duration-300"
                  >
                    Enviar Mensagem
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
