import { Link } from "wouter";
import { InterviewItem } from "@/data/mock-data";

interface InterviewCardProps {
  interview: InterviewItem;
  featured?: boolean;
}

const InterviewCard = ({ interview, featured = false }: InterviewCardProps) => {
  if (featured) {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 relative">
            <img 
              src={interview.imageUrl} 
              alt={interview.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-primary bg-opacity-80 flex items-center justify-center cursor-pointer hover:bg-opacity-100 transition-all transform hover:scale-105">
                <i className="fas fa-play text-white text-2xl"></i>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 p-8">
            <span className="inline-block bg-accent text-text-dark text-sm px-3 py-1 rounded-full mb-4 font-medium">
              Entrevista Destaque
            </span>
            <h3 className="text-2xl font-bold mb-4">{interview.title}</h3>
            <div className="flex items-center mb-4">
              <img 
                src={interview.sourceLogoUrl} 
                alt={`Logo ${interview.source}`} 
                className="w-10 h-10 object-contain rounded-full border"
              />
              <div className="ml-3">
                <span className="font-medium">{interview.source}</span>
                <span className="text-muted-foreground text-sm block">{interview.program}</span>
              </div>
            </div>
            <p className="text-muted-foreground mb-6">{interview.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground text-sm">{interview.date} • {interview.duration}</span>
              <Link href={`/entrevistas/${interview.id}`} className="text-primary font-semibold hover:underline">
                Assistir Completo
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative">
        <img 
          src={interview.imageUrl} 
          alt={interview.title} 
          className="w-full h-48 object-cover"
        />
        {interview.type === "video" && (
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-primary bg-opacity-80 flex items-center justify-center cursor-pointer hover:bg-opacity-100 transition-all">
              <i className="fas fa-play text-white"></i>
            </div>
          </div>
        )}
        <span className="absolute top-3 right-3 bg-white text-text-dark px-2 py-1 rounded text-xs">
          {interview.type === "video" ? interview.duration : interview.type.toUpperCase()}
        </span>
      </div>
      <div className="p-5">
        <div className="flex items-center mb-3">
          <img 
            src={interview.sourceLogoUrl} 
            alt={`Logo ${interview.source}`} 
            className="w-8 h-8 object-contain rounded-full border"
          />
          <span className="ml-2 text-sm text-muted-foreground">{interview.source}</span>
        </div>
        <h3 className="font-bold text-lg mb-2">{interview.title}</h3>
        <p className="text-muted-foreground text-sm mb-3">{interview.description}</p>
        <span className="text-xs text-gray-500">{interview.date}</span>
      </div>
    </div>
  );
};

export default InterviewCard;
