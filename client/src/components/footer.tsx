import { Link } from "wouter";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Jesus Alves Amazonas</h3>
            <p className="mb-4 text-sm text-gray-300">
              Portal oficial com notícias, informações e conteúdo multimídia sobre Jesus Alves Amazonas e suas iniciativas para o desenvolvimento sustentável da região amazônica.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/jesusalvesamazonas" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a 
                href="https://www.facebook.com/jesus.alves.754" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a 
                href="#" 
                className="text-white hover:text-accent transition-colors"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a 
                href="#" 
                className="text-white hover:text-accent transition-colors"
                aria-label="YouTube"
              >
                <i className="fab fa-youtube text-xl"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Seções</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Início</Link></li>
              <li><Link href="/noticias" className="text-gray-300 hover:text-white transition-colors">Notícias</Link></li>
              <li><Link href="/redes-sociais" className="text-gray-300 hover:text-white transition-colors">Redes Sociais</Link></li>
              <li><Link href="/entrevistas" className="text-gray-300 hover:text-white transition-colors">Entrevistas</Link></li>
              <li><Link href="/galeria" className="text-gray-300 hover:text-white transition-colors">Galeria</Link></li>
              <li><Link href="/sobre" className="text-gray-300 hover:text-white transition-colors">Sobre</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Categorias</h3>
            <ul className="space-y-2">
              <li><Link href="/noticias?categoria=politica" className="text-gray-300 hover:text-white transition-colors">Política</Link></li>
              <li><Link href="/noticias?categoria=meio-ambiente" className="text-gray-300 hover:text-white transition-colors">Meio Ambiente</Link></li>
              <li><Link href="/noticias?categoria=comunidade" className="text-gray-300 hover:text-white transition-colors">Comunidade</Link></li>
              <li><Link href="/noticias?categoria=educacao" className="text-gray-300 hover:text-white transition-colors">Educação</Link></li>
              <li><Link href="/noticias?categoria=desenvolvimento" className="text-gray-300 hover:text-white transition-colors">Desenvolvimento</Link></li>
              <li><Link href="/noticias?categoria=cultura" className="text-gray-300 hover:text-white transition-colors">Cultura</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <i className="far fa-envelope mt-1 mr-2"></i>
                <span>contato@jesusalves.com.br</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone-alt mt-1 mr-2"></i>
                <span>(92) 99XXX-XXXX</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-2"></i>
                <span>Manaus, Amazonas - Brasil</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Portal Jesus Alves Amazonas. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
