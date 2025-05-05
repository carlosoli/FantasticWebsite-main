import { Link } from "wouter";
import NewsCard from "./news-card";
import SocialMediaWidget from "./social-media-widget";
import FeaturedInterview from "./featured-interview";
import { NewsItem } from "@/data/mock-data";

interface FeaturedNewsProps {
  newsItems: NewsItem[];
}

const FeaturedNews = ({ newsItems }: FeaturedNewsProps) => {
  return (
    <section className="bg-white py-12 shadow-inner">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {/* Main Featured */}
          <div className="w-full lg:w-8/12 px-4 mb-8 lg:mb-0">
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-primary inline-block">
              Últimas Notícias
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {newsItems.slice(0, 4).map((news) => (
                <NewsCard 
                  key={news.id} 
                  news={news} 
                  compact={true}
                />
              ))}

              <Link 
                href="/noticias" 
                className="col-span-full mt-4 text-center bg-white border border-primary text-primary hover:bg-primary hover:text-white font-semibold px-6 py-3 rounded-md transition-colors duration-300 w-full md:w-auto md:mx-auto"
              >
                Ver Todas as Notícias
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-4/12 px-4">
            <SocialMediaWidget />
            <FeaturedInterview />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedNews;
