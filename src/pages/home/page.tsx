
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../../components/base/SearchBar';
import Sidebar from '../../components/feature/Sidebar';
import FilterModal from '../../components/feature/FilterModal';
import NotificationModal from '../../components/feature/NotificationModal';
import PlaceCard from '../../components/feature/PlaceCard';
import BottomNavigation from '../../components/feature/BottomNavigation';
import { topPlaces, nearbyPlaces } from '../../mocks/places';
import { surveys } from '../../mocks/surveys';

export default function Home() {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
    // TODO: Implement search functionality
  };

  const handleFilter = (category: string, tags: string[]) => {
    console.log('Filter applied:', category, tags);
    // TODO: Implement filter functionality
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <div className="fixed top-0 left-0 right-0 bg-white shadow-sm z-30">
        <div className="flex items-center justify-between px-4 py-3">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 text-gray-600 hover:text-gray-800"
          >
            <i className="ri-menu-line w-6 h-6 flex items-center justify-center"></i>
          </button>
          
          <h1 className="text-xl font-bold text-amber-600" style={{ fontFamily: '"Pacifico", serif' }}>
            Modac
          </h1>
          
          <button 
            onClick={() => setIsNotificationOpen(true)}
            className="p-2 text-gray-600 hover:text-gray-800 relative"
          >
            <i className="ri-notification-line w-6 h-6 flex items-center justify-center"></i>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
          </button>
        </div>
        
        <div className="pb-4">
          <SearchBar onSearch={handleSearch} onFilterClick={() => setIsFilterOpen(true)} />
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-32 pb-20 px-4">
        {/* Top Searched Places */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">인기 장소</h2>
            <button 
              onClick={() => navigate('/popular-places')}
              className="text-sm text-amber-600 hover:text-amber-700"
            >
              더보기
            </button>
          </div>
          <div className="flex overflow-x-auto scrollbar-hide">
            {topPlaces.map((place) => (
              <PlaceCard
                key={place.id}
                name={place.name}
                category={place.category}
                rating={place.rating}
                reviews={place.reviews}
                image={place.image}
                tags={place.tags}
                distance={place.distance}
                isOpen={place.isOpen}
              />
            ))}
          </div>
        </section>

        {/* Surveys Section */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">취향 테스트</h2>
            <button 
              onClick={() => navigate('/surveys')}
              className="text-sm text-amber-600 hover:text-amber-700"
            >
              더보기
            </button>
          </div>
          <div className="space-y-3">
            {surveys.map((survey) => (
              <div key={survey.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="flex">
                  <div className="w-24 h-24 flex-shrink-0">
                    <img 
                      src={survey.image}
                      alt={survey.title}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="flex-1 p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full">
                        {survey.category}
                      </span>
                      <span className="text-xs text-gray-500">{survey.duration}</span>
                    </div>
                    <h3 className="font-medium text-gray-800 mb-1 text-sm">{survey.title}</h3>
                    <p className="text-xs text-gray-600 mb-2">{survey.description}</p>
                    <div className="flex items-center text-xs text-gray-500">
                      <i className="ri-user-line w-3 h-3 flex items-center justify-center mr-1"></i>
                      <span>{survey.participants.toLocaleString()}명 참여</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Nearby Places */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">내 주변</h2>
            <span className="text-sm text-amber-600">지도보기</span>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {nearbyPlaces.map((place) => (
              <div key={place.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="flex">
                  <div className="w-20 h-20 flex-shrink-0">
                    <img 
                      src={place.image}
                      alt={place.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="flex-1 p-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-amber-600 font-medium">{place.category}</span>
                      <div className="flex items-center">
                        <i className="ri-star-fill w-3 h-3 flex items-center justify-center text-amber-400 mr-1"></i>
                        <span className="text-sm font-medium text-gray-700">{place.rating}</span>
                      </div>
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-1 text-sm">{place.name}</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-1">
                        {place.tags.slice(0, 2).map((tag, index) => (
                          <span key={index} className="text-xs bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">{place.distance}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Components */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <FilterModal 
        isOpen={isFilterOpen} 
        onClose={() => setIsFilterOpen(false)}
        onApplyFilter={handleFilter}
      />
      <NotificationModal 
        isOpen={isNotificationOpen} 
        onClose={() => setIsNotificationOpen(false)}
      />
      <BottomNavigation />
    </div>
  );
}
