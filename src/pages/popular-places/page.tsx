
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PlaceCard from '../../components/feature/PlaceCard';
import { topPlaces } from '../../mocks/places';

// Extended popular places data
const allPopularPlaces = [
  ...topPlaces,
  {
    id: 6,
    name: '더현대 서울',
    category: '쇼핑몰',
    rating: 4.4,
    reviews: 2187,
    image: 'https://readdy.ai/api/search-image?query=Modern%20luxury%20shopping%20mall%20interior%20with%20high%20ceilings%2C%20marble%20floors%2C%20designer%20stores%2C%20elegant%20lighting%2C%20contemporary%20architecture%2C%20upscale%20retail%20environment&width=400&height=250&seq=mall1&orientation=landscape',
    tags: ['쇼핑', '명품', '데이트'],
    distance: '1.5km',
    isOpen: true
  },
  {
    id: 7,
    name: '이태원 클라쓰',
    category: '펜션/숙박',
    rating: 4.2,
    reviews: 891,
    image: 'https://readdy.ai/api/search-image?query=Cozy%20guesthouse%20lobby%20with%20modern%20Korean%20design%2C%20comfortable%20seating%20area%2C%20warm%20wood%20furnishing%2C%20ambient%20lighting%2C%20boutique%20hotel%20atmosphere&width=400&height=250&seq=guesthouse1&orientation=landscape',
    tags: ['깔끔한', '편리한', '관광'],
    distance: '2.3km',
    isOpen: true
  },
  {
    id: 8,
    name: '롯데월드타워',
    category: '관광명소',
    rating: 4.6,
    reviews: 4523,
    image: 'https://readdy.ai/api/search-image?query=Modern%20skyscraper%20observation%20deck%20interior%20with%20panoramic%20city%20views%2C%20glass%20windows%2C%20contemporary%20design%2C%20tourist%20attraction%2C%20Seoul%20skyline&width=400&height=250&seq=tower1&orientation=landscape',
    tags: ['전망', '관광', '사진'],
    distance: '3.1km',
    isOpen: true
  },
  {
    id: 9,
    name: '스타벅스 리저브',
    category: '카페',
    rating: 4.5,
    reviews: 1456,
    image: 'https://readdy.ai/api/search-image?query=Premium%20coffee%20roastery%20interior%20with%20copper%20equipment%2C%20dark%20wood%20furnishing%2C%20industrial%20design%20elements%2C%20specialty%20coffee%20atmosphere%2C%20upscale%20cafe&width=400&height=250&seq=reserve1&orientation=landscape',
    tags: ['프리미엄', '조용한', '업무'],
    distance: '0.9km',
    isOpen: true
  },
  {
    id: 10,
    name: '명동교자',
    category: '음식점',
    rating: 4.3,
    reviews: 3782,
    image: 'https://readdy.ai/api/search-image?query=Traditional%20Korean%20dumpling%20restaurant%20interior%20with%20wooden%20tables%2C%20warm%20lighting%2C%20authentic%20Korean%20dining%20atmosphere%2C%20traditional%20food%20establishment&width=400&height=250&seq=dumpling1&orientation=landscape',
    tags: ['전통음식', '유명맛집', '가족'],
    distance: '1.8km',
    isOpen: true
  },
  {
    id: 11,
    name: '홍대 놀이터',
    category: '엔터테인먼트',
    rating: 4.1,
    reviews: 2341,
    image: 'https://readdy.ai/api/search-image?query=Vibrant%20entertainment%20district%20street%20with%20colorful%20neon%20signs%2C%20young%20people%2C%20nightlife%20atmosphere%2C%20urban%20Korean%20street%20culture%2C%20lively%20neighborhood&width=400&height=250&seq=hongdae1&orientation=landscape',
    tags: ['놀이', '젊은', '밤문화'],
    distance: '0.7km',
    isOpen: true
  }
];

export default function PopularPlaces() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('전체');
  
  const categories = ['전체', '음식점', '카페', '쇼핑몰', '문화시설', '엔터테인먼트'];
  
  const filteredPlaces = selectedCategory === '전체' 
    ? allPopularPlaces 
    : allPopularPlaces.filter(place => place.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <div className="fixed top-0 left-0 right-0 bg-white shadow-sm z-30">
        <div className="flex items-center justify-between px-4 py-3">
          <button
            onClick={() => navigate(-1)}
            className="p-2 text-gray-600 hover:text-gray-800"
          >
            <i className="ri-arrow-left-line w-6 h-6 flex items-center justify-center"></i>
          </button>
          
          <h1 className="text-lg font-semibold text-gray-800">인기 장소</h1>
          
          <button className="p-2 text-gray-600 hover:text-gray-800">
            <i className="ri-search-line w-6 h-6 flex items-center justify-center"></i>
          </button>
        </div>
        
        {/* Category Filter */}
        <div className="px-4 pb-4">
          <div className="flex overflow-x-auto scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`flex-shrink-0 px-4 py-2 mr-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-amber-500 text-white'
                    : 'bg-white text-gray-600 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-32 pb-20 px-4">
        <div className="grid grid-cols-1 gap-4">
          {filteredPlaces.map((place) => (
            <div key={place.id} className="w-full">
              <PlaceCard
                name={place.name}
                category={place.category}
                rating={place.rating}
                reviews={place.reviews}
                image={place.image}
                tags={place.tags}
                distance={place.distance}
                isOpen={place.isOpen}
              />
            </div>
          ))}
        </div>
        
        {filteredPlaces.length === 0 && (
          <div className="text-center py-12">
            <i className="ri-map-pin-line w-12 h-12 flex items-center justify-center text-gray-400 mx-auto mb-4"></i>
            <p className="text-gray-500">해당 카테고리의 장소가 없습니다.</p>
          </div>
        )}
      </div>
    </div>
  );
}
