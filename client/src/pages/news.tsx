import { useState, useEffect } from "react";
import NewsCard from "@/components/news-card";
import { newsItems } from "@/data/mock-data";

const News = () => {
  const [activeCategory, setActiveCategory] = useState("todas");
  const [filteredNews, setFilteredNews] = useState(newsItems);

  useEffect(() => {
    document.title = "Notícias - Jesus Alves Amazonas";
    
    if (activeCategory === "todas") {
      setFilteredNews(newsItems);
    } else {
      setFilteredNews(newsItems.filter(news => news.category.toLowerCase() === activeCategory.toLowerCase()));
    }
  }, [activeCategory]);

  const categories = [
    { id: "todas", label: "Todas" },
    { id: "politica", label: "Política" },
    { id: "comunidade", label: "Comunidade" },
    { id: "meio-ambiente", label: "Meio Ambiente" },
    { id: "educacao", label: "Educação" },
    { id: "saude", label: "Saúde" },
    { id: "cultura", label: "Cultura" },
  ];

  return (
    <section id="noticias" className="py-16 bg-background-light">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="section-title">Notícias e Atividades</h2>
          <p className="section-description">
            Acompanhe as últimas notícias, eventos e atividades relacionadas a Jesus Alves Amazonas.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full font-medium ${
                activeCategory === category.id
                  ? "bg-primary text-white"
                  : "bg-white hover:bg-gray-100 text-text-dark"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <div className="flex space-x-1">
            <button className="px-4 py-2 bg-white rounded border hover:bg-gray-50">
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="px-4 py-2 bg-primary text-white rounded border border-primary">
              1
            </button>
            <button className="px-4 py-2 bg-white rounded border hover:bg-gray-50">
              2
            </button>
            <button className="px-4 py-2 bg-white rounded border hover:bg-gray-50">
              3
            </button>
            <span className="px-4 py-2 bg-white rounded border">...</span>
            <button className="px-4 py-2 bg-white rounded border hover:bg-gray-50">
              8
            </button>
            <button className="px-4 py-2 bg-white rounded border hover:bg-gray-50">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
