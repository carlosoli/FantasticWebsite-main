import { Link } from "wouter";
import { formatDate, truncateText } from "@/lib/utils";
import { NewsItem } from "@/data/mock-data";

interface NewsCardProps {
  news: NewsItem;
  compact?: boolean;
}

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    "politica": "bg-primary-light",
    "comunidade": "bg-green-600",
    "meio-ambiente": "bg-teal-600",
    "cultura": "bg-purple-600",
    "educacao": "bg-blue-600",
    "saude": "bg-red-600",
    "tecnologia": "bg-purple-600",
    "desenvolvimento": "bg-orange-600",
  };
  
  return colors[category.toLowerCase()] || "bg-gray-600";
};

const getCategoryLabel = (category: string) => {
  const labels: Record<string, string> = {
    "politica": "Política",
    "comunidade": "Comunidade",
    "meio-ambiente": "Meio Ambiente",
    "cultura": "Cultura",
    "educacao": "Educação",
    "saude": "Saúde",
    "tecnologia": "Tecnologia",
    "desenvolvimento": "Desenvolvimento",
  };
  
  return labels[category.toLowerCase()] || category;
};

const NewsCard = ({ news, compact = false }: NewsCardProps) => {
  const categoryColor = getCategoryColor(news.category);
  const categoryLabel = getCategoryLabel(news.category);
  
  if (compact) {
    return (
      <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
        <img 
          src={news.imageUrl} 
          alt={news.title} 
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <span className={`inline-block ${categoryColor} text-white text-xs px-2 py-1 rounded-full mb-2`}>
            {categoryLabel}
          </span>
          <h3 className="font-bold text-lg mb-2">{news.title}</h3>
          <p className="text-muted-foreground mb-3 text-sm">
            {truncateText(news.summary, 100)}
          </p>
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-500">{formatDate(news.date)}</span>
            <Link href={`/noticias/${news.id}`} className="text-primary font-semibold text-sm hover:underline">
              Ler mais
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
      <img 
        src={news.imageUrl} 
        alt={news.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <span className={`inline-block ${categoryColor} text-white text-xs px-2 py-1 rounded-full`}>
            {categoryLabel}
          </span>
          <span className="text-xs text-gray-500">{formatDate(news.date)}</span>
        </div>
        <h3 className="font-bold text-xl mb-3">{news.title}</h3>
        <p className="text-muted-foreground mb-4">{news.summary}</p>
        <Link href={`/noticias/${news.id}`} className="text-primary font-semibold hover:underline">
          Continuar lendo
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
