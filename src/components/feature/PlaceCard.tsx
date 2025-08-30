
interface PlaceCardProps {
  name: string;
  category: string;
  rating: number;
  reviews: number;
  image: string;
  tags: string[];
  distance?: string;
  isOpen?: boolean;
}

export default function PlaceCard({ name, category, rating, reviews, image, tags, distance, isOpen }: PlaceCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden min-w-[280px] mr-4">
      <div className="relative h-40">
        <img 
          src={image}
          alt={name}
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
          <span className="text-xs font-medium text-gray-700">{distance}</span>
        </div>
        {isOpen !== undefined && (
          <div className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium ${
            isOpen ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}>
            {isOpen ? '운영중' : '운영종료'}
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-amber-600 font-medium">{category}</span>
          <div className="flex items-center">
            <i className="ri-star-fill w-4 h-4 flex items-center justify-center text-amber-400 mr-1"></i>
            <span className="text-sm font-medium text-gray-700">{rating}</span>
            <span className="text-xs text-gray-500 ml-1">({reviews})</span>
          </div>
        </div>
        
        <h3 className="font-semibold text-gray-800 mb-2 line-clamp-1">{name}</h3>
        
        <div className="flex flex-wrap gap-1">
          {tags.slice(0, 2).map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
          {tags.length > 2 && (
            <span className="text-xs text-gray-500">+{tags.length - 2}</span>
          )}
        </div>
      </div>
    </div>
  );
}
