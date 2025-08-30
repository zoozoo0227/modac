
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNavigation from '../../components/feature/BottomNavigation';
import PlaceCard from '../../components/feature/PlaceCard';

export default function Saved() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('places');

  // Mock saved places data
  const savedPlaces = [
    {
      id: 1,
      name: '브루클린 더 버거 조인트',
      category: '레스토랑',
      rating: 4.5,
      reviews: 1234,
      image: 'https://readdy.ai/api/search-image?query=Modern%20cozy%20burger%20restaurant%20interior%20with%20warm%20lighting%2C%20wooden%20tables%2C%20industrial%20decor%2C%20comfortable%20seating%20area%2C%20photorealistic%20style%2C%20inviting%20atmosphere%2C%20burger%20joint%20design&width=400&height=250&seq=saved1&orientation=landscape',
      tags: ['혼자 방문 가능', '분위기 좋음', '데이트 코스'],
      distance: '0.3km',
      isOpen: true,
      savedDate: '2024-01-15'
    },
    {
      id: 2,
      name: '커피 베이 홍대점',
      category: '카페',
      rating: 4.7,
      reviews: 856,
      image: 'https://readdy.ai/api/search-image?query=Cozy%20modern%20coffee%20shop%20interior%20with%20large%20windows%2C%20comfortable%20seating%2C%20warm%20wood%20tones%2C%20coffee%20brewing%20equipment%2C%20natural%20lighting%2C%20minimalist%20design%2C%20welcoming%20atmosphere&width=400&height=250&seq=saved2&orientation=landscape',
      tags: ['혼자 방문 가능', '스터디 가능', '비 오는 날'],
      distance: '0.5km',
      isOpen: true,
      savedDate: '2024-01-12'
    },
    {
      id: 3,
      name: '성심당 본점',
      category: '베이커리',
      rating: 4.6,
      reviews: 3245,
      image: 'https://readdy.ai/api/search-image?query=Traditional%20Korean%20bakery%20interior%20with%20display%20cases%20full%20of%20pastries%2C%20bread%2C%20cakes%2C%20warm%20lighting%2C%20clean%20modern%20design%2C%20welcoming%20bakery%20atmosphere&width=400&height=250&seq=saved3&orientation=landscape',
      tags: ['전통', '유명한', '가족'],
      distance: '0.8km',
      isOpen: true,
      savedDate: '2024-01-10'
    }
  ];

  // Mock saved reviews data
  const savedReviews = [
    {
      id: 1,
      placeName: '브루클린 더 버거 조인트',
      rating: 5,
      content: '정말 맛있는 버거와 훌륭한 분위기! 캐주얼한 데이트하기 완벽한 곳이에요.',
      date: '2024-01-15',
      image: 'https://readdy.ai/api/search-image?query=Delicious%20gourmet%20burger%20with%20fresh%20ingredients%2C%20sesame%20bun%2C%20lettuce%2C%20tomato%2C%20cheese%2C%20meat%20patty%2C%20restaurant%20food%20photography%2C%20appetizing%20presentation&width=300&height=200&seq=review1&orientation=landscape'
    },
    {
      id: 2,
      placeName: '커피 베이 홍대점',
      rating: 4,
      content: '커피도 맛있고 공부하기 좋은 조용한 분위기입니다. 와이파이도 빨라요.',
      date: '2024-01-12',
      image: 'https://readdy.ai/api/search-image?query=Beautiful%20latte%20art%20coffee%20cup%20on%20wooden%20table%2C%20cozy%20cafe%20setting%2C%20warm%20lighting%2C%20coffee%20shop%20ambiance%2C%20professional%20food%20photography&width=300&height=200&seq=review2&orientation=landscape'
    }
  ];

  const tabs = [
    { id: 'places', label: '장소', icon: 'ri-map-pin-line' },
    { id: 'reviews', label: '리뷰', icon: 'ri-star-line' }
  ];

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
          
          <h1 className="text-xl font-semibold text-gray-800">저장됨</h1>
          
          <div className="w-10"></div> {/* Spacer for balance */}
        </div>

        {/* Tab Navigation */}
        <div className="flex bg-gray-50 mx-4 rounded-full p-1 mb-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center px-4 py-2 rounded-full transition-all ${
                activeTab === tab.id
                  ? 'bg-white text-amber-600 shadow-sm'
                  : 'text-gray-600'
              }`}
            >
              <i className={`${tab.icon} w-4 h-4 flex items-center justify-center mr-2`}></i>
              <span className="text-sm font-medium">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-32 pb-20 px-4">
        {activeTab === 'places' && (
          <div className="space-y-4">
            {savedPlaces.length > 0 ? (
              <>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-600">저장된 장소 {savedPlaces.length}개</span>
                  <button className="text-sm text-amber-600 hover:text-amber-700">
                    날짜순 정렬
                  </button>
                </div>
                {savedPlaces.map((place) => (
                  <div key={place.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="flex">
                      <div className="w-24 h-24 flex-shrink-0">
                        <img 
                          src={place.image}
                          alt={place.name}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div className="flex-1 p-4">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs text-amber-600 font-medium">{place.category}</span>
                          <button className="p-1 text-red-500 hover:text-red-600">
                            <i className="ri-bookmark-fill w-4 h-4 flex items-center justify-center"></i>
                          </button>
                        </div>
                        <h3 className="font-semibold text-gray-800 mb-1 text-sm">{place.name}</h3>
                        <div className="flex items-center mb-2">
                          <i className="ri-star-fill w-3 h-3 flex items-center justify-center text-amber-400 mr-1"></i>
                          <span className="text-sm font-medium text-gray-700 mr-2">{place.rating}</span>
                          <span className="text-xs text-gray-500">({place.reviews} 리뷰)</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex gap-1">
                            {place.tags.slice(0, 2).map((tag, index) => (
                              <span key={index} className="text-xs bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full">
                                #{tag}
                              </span>
                            ))}
                          </div>
                          <span className="text-xs text-gray-500">저장: {new Date(place.savedDate).toLocaleDateString('ko-KR')}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <div className="text-center py-16">
                <i className="ri-bookmark-line w-16 h-16 flex items-center justify-center text-gray-300 mx-auto mb-4"></i>
                <h3 className="text-lg font-medium text-gray-500 mb-2">아직 저장된 장소가 없어요</h3>
                <p className="text-gray-400 mb-6">탐색하고 마음에 드는 장소를 저장해보세요!</p>
                <button
                  onClick={() => navigate('/')}
                  className="bg-amber-500 text-white px-6 py-3 rounded-full font-medium hover:bg-amber-600 transition-colors"
                >
                  장소 탐색하기
                </button>
              </div>
            )}
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className="space-y-4">
            {savedReviews.length > 0 ? (
              <>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-600">저장된 리뷰 {savedReviews.length}개</span>
                  <button className="text-sm text-amber-600 hover:text-amber-700">
                    날짜순 정렬
                  </button>
                </div>
                {savedReviews.map((review) => (
                  <div key={review.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-gray-800 text-sm">{review.placeName}</h3>
                        <div className="flex items-center mt-1">
                          {[...Array(5)].map((_, i) => (
                            <i
                              key={i}
                              className={`ri-star-${i < review.rating ? 'fill' : 'line'} w-3 h-3 flex items-center justify-center ${
                                i < review.rating ? 'text-amber-400' : 'text-gray-300'
                              }`}
                            ></i>
                          ))}
                          <span className="text-xs text-gray-500 ml-2">{new Date(review.date).toLocaleDateString('ko-KR')}</span>
                        </div>
                      </div>
                      <button className="p-1 text-red-500 hover:text-red-600">
                        <i className="ri-bookmark-fill w-4 h-4 flex items-center justify-center"></i>
                      </button>
                    </div>
                    {review.image && (
                      <div className="w-full h-32 mb-3 rounded-lg overflow-hidden">
                        <img
                          src={review.image}
                          alt="Review"
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    )}
                    <p className="text-sm text-gray-600 leading-relaxed">{review.content}</p>
                  </div>
                ))}
              </>
            ) : (
              <div className="text-center py-16">
                <i className="ri-star-line w-16 h-16 flex items-center justify-center text-gray-300 mx-auto mb-4"></i>
                <h3 className="text-lg font-medium text-gray-500 mb-2">아직 저장된 리뷰가 없어요</h3>
                <p className="text-gray-400 mb-6">도움이 되거나 흥미로운 리뷰를 저장해보세요!</p>
                <button
                  onClick={() => navigate('/reviews')}
                  className="bg-amber-500 text-white px-6 py-3 rounded-full font-medium hover:bg-amber-600 transition-colors"
                >
                  리뷰 둘러보기
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      <BottomNavigation />
    </div>
  );
}