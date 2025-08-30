
import { useState } from 'react';
import BottomNavigation from '../../components/feature/BottomNavigation';
import { nearbyPlaces } from '../../mocks/places';

export default function Nearby() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPlaces, setFilteredPlaces] = useState(nearbyPlaces);
  const [savedPlaces, setSavedPlaces] = useState<number[]>([]);
  const [saveNotification, setSaveNotification] = useState<{ show: boolean; message: string; type: 'save' | 'remove' }>({
    show: false,
    message: '',
    type: 'save'
  });

  const categories = [
    { id: 'all', name: '전체', icon: 'ri-apps-line' },
    { id: 'restaurant', name: '음식점', icon: 'ri-restaurant-line' },
    { id: 'cafe', name: '카페', icon: 'ri-cup-line' },
    { id: 'culture', name: '문화', icon: 'ri-building-line' },
    { id: 'shopping', name: '쇼핑', icon: 'ri-shopping-bag-line' },
  ];

  // Sample related places for search results
  const searchResults = [
    {
      id: 101,
      name: '스타벅스 강남역점',
      category: '카페',
      rating: 4.2,
      reviews: 892,
      image: 'https://readdy.ai/api/search-image?query=Modern%20Starbucks%20coffee%20shop%20interior%20with%20comfortable%20seating%2C%20warm%20lighting%2C%20coffee%20bar%2C%20contemporary%20design%2C%20busy%20urban%20location%20atmosphere&width=400&height=250&seq=starbucks1&orientation=landscape',
      tags: ['체인점', '와이파이', '테이크아웃'],
      distance: '0.2km',
      isOpen: true
    },
    {
      id: 102,
      name: '투썸플레이스 홍대점',
      category: '카페',
      rating: 4.4,
      reviews: 567,
      image: 'https://readdy.ai/api/search-image?query=Cozy%20dessert%20cafe%20interior%20with%20comfortable%20seating%2C%20cake%20display%2C%20warm%20ambiance%2C%20modern%20Korean%20cafe%20design%2C%20inviting%20atmosphere&width=400&height=250&seq=twosome1&orientation=landscape',
      tags: ['디저트', '케이크', '분위기'],
      distance: '0.4km',
      isOpen: true
    },
    {
      id: 103,
      name: '맥도날드 신촌점',
      category: '음식점',
      rating: 4.0,
      reviews: 1234,
      image: 'https://readdy.ai/api/search-image?query=Modern%20fast%20food%20restaurant%20interior%20with%20red%20and%20yellow%20branding%2C%20comfortable%20seating%2C%20clean%20design%2C%20quick%20service%20atmosphere&width=400&height=250&seq=mcdonalds1&orientation=landscape',
      tags: ['패스트푸드', '24시간', '배달'],
      distance: '0.6km',
      isOpen: true
    },
    {
      id: 104,
      name: '롯데마트 서울역점',
      category: '쇼핑',
      rating: 4.3,
      reviews: 2156,
      image: 'https://readdy.ai/api/search-image?query=Large%20modern%20supermarket%20interior%20with%20wide%20aisles%2C%20product%20shelves%2C%20bright%20lighting%2C%20shopping%20carts%2C%20retail%20environment&width=400&height=250&seq=lotte1&orientation=landscape',
      tags: ['대형마트', '식료품', '주차가능'],
      distance: '1.1km',
      isOpen: true
    },
  ];

  const handleSearch = (query: string) => {
    if (!query.trim()) {
      setFilteredPlaces(nearbyPlaces);
      return;
    }

    // Search in existing places
    const existingResults = nearbyPlaces.filter(place => 
      place.name.toLowerCase().includes(query.toLowerCase()) ||
      place.category.toLowerCase().includes(query.toLowerCase()) ||
      place.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    );

    // Add related search results based on query
    let relatedResults = [];
    if (query.toLowerCase().includes('카페') || query.toLowerCase().includes('coffee')) {
      relatedResults = searchResults.filter(place => place.category === '카페');
    } else if (query.toLowerCase().includes('음식') || query.toLowerCase().includes('식당')) {
      relatedResults = searchResults.filter(place => place.category === '음식점');
    } else if (query.toLowerCase().includes('쇼핑') || query.toLowerCase().includes('마트')) {
      relatedResults = searchResults.filter(place => place.category === '쇼핑');
    } else {
      // General search - show some related results
      relatedResults = searchResults.slice(0, 2);
    }

    setFilteredPlaces([...existingResults, ...relatedResults]);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch(searchQuery);
  };

  const handleDirections = (placeName: string) => {
    const encodedPlaceName = encodeURIComponent(placeName + ' 서울');
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedPlaceName}`;
    window.open(googleMapsUrl, '_blank');
  };

  const handleSave = (placeId: number, placeName: string) => {
    const isAlreadySaved = savedPlaces.includes(placeId);
    
    if (isAlreadySaved) {
      // Remove from saved
      setSavedPlaces(prev => prev.filter(id => id !== placeId));
      setSaveNotification({
        show: true,
        message: `${placeName}이(가) 저장 목록에서 제거되었습니다`,
        type: 'remove'
      });
    } else {
      // Add to saved
      setSavedPlaces(prev => [...prev, placeId]);
      setSaveNotification({
        show: true,
        message: `${placeName}이(가) 저장되었습니다`,
        type: 'save'
      });
    }

    // Hide notification after 3 seconds
    setTimeout(() => {
      setSaveNotification({ show: false, message: '', type: 'save' });
    }, 3000);
  };

  const handleShare = (placeName: string) => {
    if (navigator.share) {
      navigator.share({
        title: placeName,
        text: `${placeName}을(를) 확인해보세요!`,
        url: window.location.href
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(`${placeName} - ${window.location.href}`);
      alert('링크가 클립보드에 복사되었습니다!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 bg-white shadow-sm z-30">
        <div className="flex items-center justify-between px-4 py-3">
          <h1 className="text-lg font-semibold text-gray-800">내 주변</h1>
          <button 
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="p-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <i className={`${isSearchOpen ? 'ri-close-line' : 'ri-search-line'} w-6 h-6 flex items-center justify-center`}></i>
          </button>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="px-4 pb-4 border-t border-gray-100">
            <form onSubmit={handleSearchSubmit} className="relative flex items-center bg-gray-50 rounded-xl mt-3">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="카페, 음식점, 쇼핑몰 등을 검색하세요"
                className="flex-1 py-3 px-4 pr-12 text-sm rounded-xl border-none outline-none bg-transparent"
                autoFocus
              />
              <button
                type="submit"
                className="absolute right-2 p-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
              >
                <i className="ri-search-line w-4 h-4 flex items-center justify-center"></i>
              </button>
            </form>

            {/* Quick Search Suggestions */}
            <div className="flex gap-2 mt-3 overflow-x-auto scrollbar-hide">
              {['카페', '음식점', '편의점', '병원', '은행', '약국'].map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => {
                    setSearchQuery(suggestion);
                    handleSearch(suggestion);
                  }}
                  className="flex-shrink-0 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs text-gray-600 hover:bg-amber-50 hover:border-amber-200 transition-colors"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className={`${isSearchOpen ? 'pt-32' : 'pt-16'} pb-20 transition-all duration-300`}>
        {/* Interactive Map */}
        <div className="h-64 bg-white m-4 rounded-2xl overflow-hidden shadow-sm border border-gray-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.7309173750935!2d126.9783882!3d37.5666102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2f4e7574b93%3A0x1d6a8e34e4b85b6a!2sSeoul%2C%20South%20Korea!5e0!3m2!1sen!2sus!4v1234567890123"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Category Filter */}
        <div className="px-4 mb-6">
          <div className="flex overflow-x-auto scrollbar-hide gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex-shrink-0 flex items-center px-4 py-2 rounded-full transition-all ${
                  selectedCategory === category.id
                    ? 'bg-amber-500 text-white'
                    : 'bg-white text-gray-600 border border-gray-200'
                }`}
              >
                <i className={`${category.icon} w-4 h-4 flex items-center justify-center mr-2`}></i>
                <span className="text-sm">{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Places List */}
        <div className="px-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">
              {searchQuery ? `'${searchQuery}' 검색 결과` : '반경 2km 내 장소'}
            </h2>
            <span className="text-sm text-gray-500">{filteredPlaces.length}개 장소</span>
          </div>

          {filteredPlaces.length === 0 ? (
            <div className="text-center py-12">
              <i className="ri-search-line w-12 h-12 flex items-center justify-center text-gray-300 mx-auto mb-3"></i>
              <p className="text-gray-500">검색 결과가 없습니다</p>
              <p className="text-sm text-gray-400 mt-1">다른 키워드로 검색해보세요</p>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredPlaces.map((place) => {
                const isSaved = savedPlaces.includes(place.id);
                return (
                  <div key={place.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
                    <div className="flex gap-4">
                      <div className="w-16 h-16 flex-shrink-0 rounded-xl overflow-hidden">
                        <img 
                          src={place.image}
                          alt={place.name}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs text-amber-600 font-medium">{place.category}</span>
                          <div className="flex items-center">
                            <i className="ri-star-fill w-4 h-4 flex items-center justify-center text-amber-400 mr-1"></i>
                            <span className="text-sm font-medium text-gray-700">{place.rating}</span>
                            <span className="text-xs text-gray-500 ml-1">({place.reviews})</span>
                          </div>
                        </div>
                        
                        <h3 className="font-semibold text-gray-800 mb-2">{place.name}</h3>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex gap-1">
                            {place.tags.slice(0, 2).map((tag, index) => (
                              <span key={index} className="text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded-full">
                                #{tag}
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center text-xs text-gray-500">
                            <i className="ri-map-pin-line w-3 h-3 flex items-center justify-center mr-1"></i>
                            <span>{place.distance}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-2 mt-4">
                      <button 
                        onClick={() => handleDirections(place.name)}
                        className="flex-1 py-2 bg-amber-500 text-white rounded-xl text-sm font-medium hover:bg-amber-600 transition-colors"
                      >
                        길찾기
                      </button>
                      <button 
                        onClick={() => handleSave(place.id, place.name)}
                        className={`px-4 py-2 border rounded-xl text-sm font-medium transition-colors ${
                          isSaved 
                            ? 'border-amber-300 bg-amber-50 text-amber-700 hover:bg-amber-100' 
                            : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        {isSaved ? (
                          <>
                            <i className="ri-bookmark-fill w-4 h-4 inline-flex items-center justify-center mr-1"></i>
                            저장됨
                          </>
                        ) : (
                          <>
                            <i className="ri-bookmark-line w-4 h-4 inline-flex items-center justify-center mr-1"></i>
                            저장
                          </>
                        )}
                      </button>
                      <button 
                        onClick={() => handleShare(place.name)}
                        className="px-4 py-2 border border-gray-200 rounded-xl text-sm text-gray-600 hover:bg-gray-50 transition-colors"
                      >
                        공유
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Save Notification */}
      {saveNotification.show && (
        <div className="fixed bottom-24 left-4 right-4 z-40">
          <div className={`p-4 rounded-xl shadow-lg border ${
            saveNotification.type === 'save' 
              ? 'bg-green-50 border-green-200 text-green-800' 
              : 'bg-orange-50 border-orange-200 text-orange-800'
          }`}>
            <div className="flex items-center">
              <i className={`${
                saveNotification.type === 'save' ? 'ri-bookmark-fill' : 'ri-bookmark-line'
              } w-5 h-5 flex items-center justify-center mr-3`}></i>
              <span className="text-sm font-medium">{saveNotification.message}</span>
            </div>
          </div>
        </div>
      )}

      <BottomNavigation />
    </div>
  );
}
