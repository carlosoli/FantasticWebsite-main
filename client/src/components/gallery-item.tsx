interface GalleryItemProps {
  item: {
    id: number;
    imageUrl: string;
    title: string;
    date: string;
    isVideo?: boolean;
  };
}

const GalleryItem = ({ item }: GalleryItemProps) => {
  return (
    <div className="relative aspect-square overflow-hidden rounded-lg group">
      {item.isVideo && (
        <div className="absolute top-2 right-2 z-10">
          <i className="fas fa-play-circle text-white text-2xl drop-shadow-lg"></i>
        </div>
      )}
      <img 
        src={item.imageUrl} 
        alt={item.title} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity flex items-center justify-center opacity-0 group-hover:opacity-100">
        <div className="text-white text-center p-4">
          <h3 className="font-bold">{item.title}</h3>
          <p className="text-sm mt-1 mb-2">{item.date}</p>
          <i className={`fas fa-${item.isVideo ? 'play' : 'search-plus'} text-xl`}></i>
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;
