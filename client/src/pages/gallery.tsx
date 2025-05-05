import { useState, useEffect } from "react";
import GalleryItem from "@/components/gallery-item";
import { galleryItems } from "@/data/mock-data";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("todos");
  const [filteredGallery, setFilteredGallery] = useState(galleryItems);
  
  useEffect(() => {
    document.title = "Galeria - Jesus Alves Amazonas";
    
    if (activeFilter === "todos") {
      setFilteredGallery(galleryItems);
    } else if (activeFilter === "videos") {
      setFilteredGallery(galleryItems.filter(item => item.isVideo));
    } else {
      setFilteredGallery(galleryItems.filter(item => item.category === activeFilter));
    }
  }, [activeFilter]);

  const filters = [
    { id: "todos", label: "Todos" },
    { id: "eventos", label: "Eventos" },
    { id: "visitas", label: "Visitas" },
    { id: "reunioes", label: "Reuniões" },
    { id: "videos", label: "Vídeos" },
  ];

  return (
    <section id="galeria" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="section-title">Galeria</h2>
          <p className="section-description">
            Confira as imagens e vídeos dos principais eventos e atividades.
          </p>
        </div>

        {/* Gallery Filter */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full font-medium ${
                activeFilter === filter.id
                  ? "bg-primary text-white"
                  : "bg-background-light hover:bg-gray-200 text-text-dark"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredGallery.map((item) => (
            <GalleryItem key={item.id} item={item} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-block bg-white border border-primary text-primary font-semibold px-6 py-3 rounded-md hover:bg-primary hover:text-white transition-colors duration-300">
            Ver Galeria Completa
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
