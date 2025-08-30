
import { useState } from 'react';
import BottomNavigation from '../../components/feature/BottomNavigation';
import ProfileEditModal from '../../components/feature/ProfileEditModal';

interface ProfileData {
  name: string;
  bio: string;
  avatar: string;
  website: string;
  location: string;
}

export default function Profile() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isFollowersModalOpen, setIsFollowersModalOpen] = useState(false);
  const [isFollowingModalOpen, setIsFollowingModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('posts');
  const [profile, setProfile] = useState({
    name: '김모닥',
    bio: '서울의 맛집과 카페를 탐험하는 중 ☕️🍴',
    avatar: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20photo%20of%20young%20Asian%20person%20smiling%2C%20modern%20casual%20style%2C%20warm%20lighting%2C%20friendly%20expression%2C%20high-quality%20profile%20picture&width=150&height=150&seq=profilemain&orientation=squarish',
    website: '',
    location: '서울, 대한민국'
  });

  const userStats = [
    { label: '게시물', count: 24 },
    { label: '팔로워', count: 156, action: () => setIsFollowersModalOpen(true) },
    { label: '팔로잉', count: 89, action: () => setIsFollowingModalOpen(true) },
  ];

  const userPosts = [
    'https://readdy.ai/api/search-image?query=Beautiful%20cafe%20latte%20with%20latte%20art%2C%20cozy%20coffee%20shop%20ambiance%2C%20warm%20lighting%2C%20instagram-worthy%20coffee%20photo%2C%20aesthetic%20food%20photography&width=200&height=200&seq=profile1&orientation=squarish',
    'https://readdy.ai/api/search-image?query=Delicious%20Korean%20BBQ%20meal%2C%20grilled%20meat%2C%20banchan%20side%20dishes%2C%20restaurant%20dining%20experience%2C%20food%20photography%2C%20appetizing%20presentation&width=200&height=200&seq=profile2&orientation=squarish',
    'https://readdy.ai/api/search-image?query=Modern%20art%20gallery%20interior%2C%20contemporary%20artwork%20displays%2C%20cultural%20venue%2C%20museum%20exhibition%20space%2C%20artistic%20atmosphere&width=200&height=200&seq=profile3&orientation=squarish',
    'https://readdy.ai/api/search-image?query=Trendy%20dessert%20cafe%2C%20colorful%20macarons%20and%20pastries%2C%20sweet%20treats%20display%2C%20bakery%20interior%2C%20dessert%20photography&width=200&height=200&seq=profile4&orientation=squarish',
    'https://readdy.ai/api/search-image?query=Night%20cityscape%20view%20from%20rooftop%20bar%2C%20urban%20lights%2C%20skyline%20panorama%2C%20evening%20atmosphere%2C%20city%20dining%20experience&width=200&height=200&seq=profile5&orientation=squarish',
    'https://readdy.ai/api/search-image?query=Traditional%20Korean%20temple%20architecture%2C%20peaceful%20garden%20setting%2C%20cultural%20heritage%20site%2C%20serene%20atmosphere%2C%20travel%20photography&width=200&height=200&seq=profile6&orientation=squarish',
    'https://readdy.ai/api/search-image?query=Trendy%20brunch%20plate%20with%20avocado%20toast%2C%20fresh%20fruits%2C%20elegant%20presentation%2C%20natural%20lighting%2C%20food%20styling%20photography&width=200&height=200&seq=profile7&orientation=squarish',
    'https://readdy.ai/api/search-image?query=Beautiful%20flower%20market%20stalls%2C%20colorful%20blooms%2C%20spring%20atmosphere%2C%20botanical%20photography%2C%20vibrant%20natural%20colors&width=200&height=200&seq=profile8&orientation=squarish',
    'https://readdy.ai/api/search-image?query=Cozy%20bookstore%20interior%2C%20vintage%20books%2C%20reading%20corner%2C%20warm%20ambient%20lighting%2C%20literary%20atmosphere%2C%20cultural%20space&width=200&height=200&seq=profile9&orientation=squarish',
  ];

  const savedPosts = [
    'https://readdy.ai/api/search-image?query=Minimalist%20interior%20design%2C%20modern%20furniture%2C%20clean%20aesthetic%2C%20architectural%20photography%2C%20contemporary%20living%20space&width=200&height=200&seq=saved1&orientation=squarish',
    'https://readdy.ai/api/search-image?query=Street%20food%20market%20scene%2C%20Korean%20traditional%20snacks%2C%20bustling%20atmosphere%2C%20cultural%20food%20photography&width=200&height=200&seq=saved2&orientation=squarish',
    'https://readdy.ai/api/search-image?query=Sunset%20over%20Han%20River%2C%20Seoul%20skyline%2C%20golden%20hour%20photography%2C%20peaceful%20water%20reflection%2C%20urban%20landscape&width=200&height=200&seq=saved3&orientation=squarish',
  ];

  const followers = [
    { name: '카페러버', username: '@coffee_lover', avatar: 'https://readdy.ai/api/search-image?query=Young%20Asian%20woman%20smiling%2C%20casual%20portrait%2C%20warm%20lighting%2C%20friendly%20expression&width=80&height=80&seq=follower1&orientation=squarish', isFollowing: true },
    { name: '맛집탐험가', username: '@foodie_explorer', avatar: 'https://readdy.ai/api/search-image?query=Young%20Asian%20man%20casual%20portrait%2C%20friendly%20smile%2C%20modern%20style&width=80&height=80&seq=follower2&orientation=squarish', isFollowing: false },
    { name: '서울여행자', username: '@seoul_traveler', avatar: 'https://readdy.ai/api/search-image?query=Young%20Asian%20woman%20trendy%20style%2C%20bright%20smile%2C%20urban%20background&width=80&height=80&seq=follower3&orientation=squarish', isFollowing: true },
  ];

  const handleProfileSave = (profileData: ProfileData) => {
    setProfile(profileData);
  };

  const toggleFollow = (username: string) => {
    // 팔로우/언팔로우 로직 구현
    console.log('Toggle follow for:', username);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 bg-white shadow-sm z-30">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold text-gray-800">{profile.name}</h1>
            <i className="ri-arrow-down-s-line w-5 h-5 flex items-center justify-center text-gray-600 ml-1"></i>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 text-gray-600">
              <i className="ri-add-box-line w-6 h-6 flex items-center justify-center"></i>
            </button>
            <button className="p-2 text-gray-600">
              <i className="ri-menu-line w-6 h-6 flex items-center justify-center"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="pt-16 pb-20">
        {/* Profile Info */}
        <div className="bg-white px-4 py-6">
          <div className="flex items-center mb-4">
            <div className="w-20 h-20 rounded-full overflow-hidden mr-4 relative">
              <img 
                src={profile.avatar}
                alt="Profile"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 border-2 border-gray-200 rounded-full"></div>
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-gray-800 mb-1">{profile.name}</h2>
              <p className="text-gray-600 text-sm mb-3">{profile.bio}</p>
              {profile.website && (
                <a href={profile.website} className="text-blue-600 text-sm mb-2 block">
                  {profile.website}
                </a>
              )}
              {profile.location && (
                <div className="flex items-center mb-3">
                  <i className="ri-map-pin-line w-4 h-4 flex items-center justify-center text-gray-500 mr-1"></i>
                  <span className="text-sm text-gray-600">{profile.location}</span>
                </div>
              )}
              <button 
                onClick={() => setIsEditModalOpen(true)}
                className="bg-amber-500 text-white px-6 py-2 rounded-xl text-sm font-medium"
              >
                프로필 편집
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="flex justify-around border-t border-gray-100 pt-4">
            {userStats.map((stat) => (
              <button 
                key={stat.label} 
                onClick={stat.action}
                className="text-center hover:bg-gray-50 px-4 py-2 rounded-lg transition-colors"
              >
                <div className="text-xl font-semibold text-gray-800">{stat.count}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </button>
            ))}
          </div>

          {/* Story Highlights */}
          <div className="flex gap-4 mt-6 overflow-x-auto scrollbar-hide">
            <div className="flex flex-col items-center min-w-0">
              <div className="w-16 h-16 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center mb-2">
                <i className="ri-add-line w-6 h-6 flex items-center justify-center text-gray-400"></i>
              </div>
              <span className="text-xs text-gray-600">신규</span>
            </div>
            {['카페투어', '맛집탐방', '여행'].map((highlight, index) => (
              <div key={highlight} className="flex flex-col items-center min-w-0">
                <div className="w-16 h-16 rounded-full border-2 border-amber-500 p-0.5 mb-2">
                  <img 
                    src={`https://readdy.ai/api/search-image?query=Instagram%20story%20highlight%20cover%20$%7Bhighlight%7D%20aesthetic%20minimalist%20design%20circular%20format&width=100&height=100&seq=highlight${index}&orientation=squarish`}
                    alt={highlight}
                    className="w-full h-full rounded-full object-cover object-top"
                  />
                </div>
                <span className="text-xs text-gray-600">{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white border-t border-gray-100">
          <div className="flex">
            <button
              onClick={() => setActiveTab('posts')}
              className={`flex-1 py-3 text-center ${
                activeTab === 'posts'
                  ? 'border-b-2 border-gray-800'
                  : ''
              }`}
            >
              <i className={`ri-grid-line w-6 h-6 flex items-center justify-center mx-auto ${
                activeTab === 'posts' ? 'text-gray-800' : 'text-gray-400'
              }`}></i>
            </button>
            <button
              onClick={() => setActiveTab('reels')}
              className={`flex-1 py-3 text-center ${
                activeTab === 'reels'
                  ? 'border-b-2 border-gray-800'
                  : ''
              }`}
            >
              <i className={`ri-play-circle-line w-6 h-6 flex items-center justify-center mx-auto ${
                activeTab === 'reels' ? 'text-gray-800' : 'text-gray-400'
              }`}></i>
            </button>
            <button
              onClick={() => setActiveTab('tagged')}
              className={`flex-1 py-3 text-center ${
                activeTab === 'tagged'
                  ? 'border-b-2 border-gray-800'
                  : ''
              }`}
            >
              <i className={`ri-bookmark-line w-6 h-6 flex items-center justify-center mx-auto ${
                activeTab === 'tagged' ? 'text-gray-800' : 'text-gray-400'
              }`}></i>
            </button>
          </div>
        </div>
        
        {/* Posts Grid */}
        <div className="bg-white">
          {activeTab === 'posts' && (
            <div className="grid grid-cols-3 gap-0.5">
              {userPosts.map((image, index) => (
                <div key={index} className="aspect-square relative group">
                  <img 
                    src={image}
                    alt={`Post ${index + 1}`}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="flex items-center gap-4 text-white">
                      <div className="flex items-center">
                        <i className="ri-heart-fill w-5 h-5 flex items-center justify-center mr-1"></i>
                        <span className="text-sm font-medium">24</span>
                      </div>
                      <div className="flex items-center">
                        <i className="ri-chat-3-fill w-5 h-5 flex items-center justify-center mr-1"></i>
                        <span className="text-sm font-medium">8</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'reels' && (
            <div className="flex flex-col items-center justify-center py-16 text-gray-500">
              <i className="ri-play-circle-line w-16 h-16 flex items-center justify-center mb-4 text-gray-300"></i>
              <p className="text-lg font-medium">아직 릴스가 없습니다</p>
              <p className="text-sm mt-1">첫 번째 릴스를 만들어보세요</p>
            </div>
          )}

          {activeTab === 'tagged' && (
            <div className="grid grid-cols-3 gap-0.5">
              {savedPosts.map((image, index) => (
                <div key={index} className="aspect-square relative">
                  <img 
                    src={image}
                    alt={`Saved ${index + 1}`}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute top-2 right-2">
                    <i className="ri-bookmark-fill w-5 h-5 flex items-center justify-center text-white drop-shadow-lg"></i>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Profile Edit Modal */}
      <ProfileEditModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSave={handleProfileSave}
        currentProfile={profile}
      />

      {/* Followers Modal */}
      {isFollowersModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white w-full max-w-sm mx-4 rounded-2xl shadow-xl max-h-[70vh] overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800">팔로워</h3>
              <button onClick={() => setIsFollowersModalOpen(false)} className="p-1 text-gray-500">
                <i className="ri-close-line w-5 h-5 flex items-center justify-center"></i>
              </button>
            </div>
            <div className="overflow-y-auto max-h-96">
              {followers.map((follower) => (
                <div key={follower.username} className="flex items-center justify-between p-4 hover:bg-gray-50">
                  <div className="flex items-center">
                    <img 
                      src={follower.avatar}
                      alt={follower.name}
                      className="w-10 h-10 rounded-full object-cover object-top mr-3"
                    />
                    <div>
                      <p className="font-medium text-gray-800 text-sm">{follower.name}</p>
                      <p className="text-gray-500 text-xs">{follower.username}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleFollow(follower.username)}
                    className={`px-4 py-1.5 rounded-lg text-sm font-medium ${
                      follower.isFollowing
                        ? 'bg-gray-200 text-gray-800'
                        : 'bg-amber-500 text-white'
                    }`}
                  >
                    {follower.isFollowing ? '팔로잉' : '팔로우'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Following Modal */}
      {isFollowingModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white w-full max-w-sm mx-4 rounded-2xl shadow-xl max-h-[70vh] overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800">팔로잉</h3>
              <button onClick={() => setIsFollowingModalOpen(false)} className="p-1 text-gray-500">
                <i className="ri-close-line w-5 h-5 flex items-center justify-center"></i>
              </button>
            </div>
            <div className="overflow-y-auto max-h-96">
              {followers.map((following) => (
                <div key={following.username} className="flex items-center justify-between p-4 hover:bg-gray-50">
                  <div className="flex items-center">
                    <img 
                      src={following.avatar}
                      alt={following.name}
                      className="w-10 h-10 rounded-full object-cover object-top mr-3"
                    />
                    <div>
                      <p className="font-medium text-gray-800 text-sm">{following.name}</p>
                      <p className="text-gray-500 text-xs">{following.username}</p>
                    </div>
                  </div>
                  <button className="bg-gray-200 text-gray-800 px-4 py-1.5 rounded-lg text-sm font-medium">
                    팔로잉
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <BottomNavigation />
    </div>
  );
}
