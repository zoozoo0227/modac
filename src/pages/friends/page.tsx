
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNavigation from '../../components/feature/BottomNavigation';
import ChatModal from '../../components/feature/ChatModal';

interface Friend {
  id: number;
  name: string;
  username: string;
  avatar: string;
  mutualFriends: number;
  isOnline: boolean;
  lastSeen?: string;
  location?: string;
}

interface FriendRequest {
  id: number;
  name: string;
  username: string;
  avatar: string;
  mutualFriends: number;
  time: string;
}

export default function Friends() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('friends');
  const [searchQuery, setSearchQuery] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState<Friend | null>(null);

  const [friends, setFriends] = useState<Friend[]>([
    {
      id: 1,
      name: '커피러버',
      username: '@coffee_lover',
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20photo%20of%20young%20Asian%20woman%20smiling%2C%20modern%20casual%2C%20warm%20lighting%2C%20friendly%20expression%2C%20profile%20picture%20style&width=100&height=100&seq=friend1&orientation=squarish',
      mutualFriends: 12,
      isOnline: true,
      location: '홍대'
    },
    {
      id: 2,
      name: '맛집탐험가',
      username: '@foodie_explorer',
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20photo%20of%20young%20Asian%20man%20smiling%2C%20casual%20modern%20outfit%2C%20natural%20lighting%2C%20friendly%20appearance%2C%20social%20media%20profile%20style&width=100&height=100&seq=friend2&orientation=squarish',
      mutualFriends: 8,
      isOnline: false,
      lastSeen: '30분 전',
      location: '강남'
    },
    {
      id: 3,
      name: '영화마니아',
      username: '@movie_fan',
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20photo%20of%20young%20Asian%20woman%20with%20glasses%2C%20trendy%20style%2C%20bright%20smile%2C%20modern%20casual%20wear%2C%20profile%20picture%20aesthetic&width=100&height=100&seq=friend3&orientation=squarish',
      mutualFriends: 15,
      isOnline: true,
      location: '신촌'
    },
    {
      id: 4,
      name: '카페여행자',
      username: '@cafe_traveler',
      avatar: 'https://readdy.ai/api/search-image?query=Young%20Asian%20woman%20trendy%20style%2C%20bright%20smile%2C%20casual%20outfit%2C%20warm%20lighting%2C%20social%20media%20portrait&width=100&height=100&seq=friend4&orientation=squarish',
      mutualFriends: 6,
      isOnline: false,
      lastSeen: '2시간 전',
      location: '이태원'
    },
    {
      id: 5,
      name: '서울여행자',
      username: '@seoul_traveler',
      avatar: 'https://readdy.ai/api/search-image?query=Young%20Asian%20woman%20trendy%20style%2C%20bright%20smile%2C%20urban%20background%2C%20modern%20fashion%2C%20friendly%20expression&width=100&height=100&seq=friend5&orientation=squarish',
      mutualFriends: 20,
      isOnline: true,
      location: '명동'
    }
  ]);

  const [friendRequests, setFriendRequests] = useState<FriendRequest[]>([
    {
      id: 1,
      name: '디저트킹',
      username: '@dessert_king',
      avatar: 'https://readdy.ai/api/search-image?query=Young%20Asian%20man%20friendly%20smile%2C%20casual%20portrait%2C%20modern%20style%2C%20warm%20lighting%2C%20social%20media%20profile&width=100&height=100&seq=request1&orientation=squarish',
      mutualFriends: 3,
      time: '2시간 전'
    },
    {
      id: 2,
      name: '아트러버',
      username: '@art_lover',
      avatar: 'https://readdy.ai/api/search-image?query=Young%20Asian%20woman%20artistic%20style%2C%20creative%20look%2C%20modern%20fashion%2C%20bright%20smile%2C%20cultural%20aesthetic&width=100&height=100&seq=request2&orientation=squarish',
      mutualFriends: 7,
      time: '1일 전'
    }
  ]);

  const [recommendations] = useState<Friend[]>([
    {
      id: 101,
      name: '북카페지기',
      username: '@book_cafe',
      avatar: 'https://readdy.ai/api/search-image?query=Young%20Asian%20woman%20intellectual%20style%2C%20warm%20smile%2C%20cozy%20atmosphere%2C%20bookish%20aesthetic%2C%20friendly%20expression&width=100&height=100&seq=rec1&orientation=squarish',
      mutualFriends: 5,
      isOnline: false,
      location: '홍대'
    },
    {
      id: 102,
      name: '로컬푸디',
      username: '@local_foodie',
      avatar: 'https://readdy.ai/api/search-image?query=Young%20Asian%20man%20food%20enthusiast%2C%20cheerful%20expression%2C%20casual%20modern%20style%2C%20warm%20lighting%2C%20social%20profile&width=100&height=100&seq=rec2&orientation=squarish',
      mutualFriends: 9,
      isOnline: true,
      location: '성수동'
    },
    {
      id: 103,
      name: '뮤직라이프',
      username: '@music_life',
      avatar: 'https://readdy.ai/api/search-image?query=Young%20Asian%20woman%20music%20lover%2C%20trendy%20style%2C%20headphones%20aesthetic%2C%20modern%20casual%20wear%2C%20bright%20smile&width=100&height=100&seq=rec3&orientation=squarish',
      mutualFriends: 4,
      isOnline: false,
      location: '홍대'
    }
  ]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    if (tab === 'community') {
      navigate('/community');
    }
  };

  const acceptFriendRequest = (requestId: number) => {
    const request = friendRequests.find(req => req.id === requestId);
    if (request) {
      const newFriend: Friend = {
        id: request.id + 1000,
        name: request.name,
        username: request.username,
        avatar: request.avatar,
        mutualFriends: request.mutualFriends,
        isOnline: Math.random() > 0.5,
        location: '서울'
      };
      setFriends(prev => [newFriend, ...prev]);
      setFriendRequests(prev => prev.filter(req => req.id !== requestId));
    }
  };

  const declineFriendRequest = (requestId: number) => {
    setFriendRequests(prev => prev.filter(req => req.id !== requestId));
  };

  const sendFriendRequest = (userId: number) => {
    // 친구 요청 전송 로직
    console.log('Friend request sent to:', userId);
  };

  const filteredFriends = friends.filter(friend =>
    friend.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    friend.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const openChat = (friend: Friend) => {
    setSelectedFriend(friend);
    setIsChatOpen(true);
  };

  const closeChat = () => {
    setIsChatOpen(false);
    setSelectedFriend(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 bg-white shadow-sm z-30">
        <div className="flex items-center justify-between px-4 py-3">
          <h1 className="text-lg font-semibold text-gray-800">친구</h1>
          <button className="p-2 text-gray-600">
            <i className="ri-user-add-line w-6 h-6 flex items-center justify-center"></i>
          </button>
        </div>
        
        {/* Tab Navigation */}
        <div className="flex border-b border-gray-100">
          <button
            onClick={() => handleTabChange('community')}
            className={`flex-1 py-3 text-center text-sm font-medium transition-colors ${
              activeTab === 'community'
                ? 'text-amber-600 border-b-2 border-amber-600'
                : 'text-gray-500'
            }`}
          >
            커뮤니티
          </button>
          <button
            onClick={() => handleTabChange('friends')}
            className={`flex-1 py-3 text-center text-sm font-medium transition-colors ${
              activeTab === 'friends'
                ? 'text-amber-600 border-b-2 border-amber-600'
                : 'text-gray-500'
            }`}
          >
            친구
          </button>
        </div>
      </div>

      <div className="pt-28 pb-20">
        {/* Search Bar */}
        <div className="bg-white px-4 py-3 border-b border-gray-100">
          <div className="relative">
            <i className="ri-search-line w-5 h-5 flex items-center justify-center absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="친구 검색..."
              className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 border-none"
            />
          </div>
        </div>

        {/* Friend Requests */}
        {friendRequests.length > 0 && (
          <div className="bg-white mb-2">
            <div className="px-4 py-3 border-b border-gray-100">
              <h3 className="font-semibold text-gray-800">친구 요청</h3>
            </div>
            {friendRequests.map((request) => (
              <div key={request.id} className="px-4 py-3 border-b border-gray-50 last:border-b-0">
                <div className="flex items-center">
                  <img
                    src={request.avatar}
                    alt={request.name}
                    className="w-12 h-12 rounded-full object-cover object-top mr-3"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-800 text-sm">{request.name}</h4>
                    <p className="text-xs text-gray-500">{request.username}</p>
                    <p className="text-xs text-gray-500">공통 친구 {request.mutualFriends}명 • {request.time}</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => acceptFriendRequest(request.id)}
                      className="px-4 py-1.5 bg-amber-500 text-white rounded-lg text-sm font-medium"
                    >
                      수락
                    </button>
                    <button
                      onClick={() => declineFriendRequest(request.id)}
                      className="px-4 py-1.5 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium"
                    >
                      거절
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Friends List */}
        <div className="bg-white mb-2">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="font-semibold text-gray-800">내 친구 ({filteredFriends.length})</h3>
          </div>
          {filteredFriends.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-gray-500">
              <i className="ri-user-line w-12 h-12 flex items-center justify-center mb-2 text-gray-300"></i>
              <p className="text-sm">검색 결과가 없습니다</p>
            </div>
          ) : (
            filteredFriends.map((friend) => (
              <div key={friend.id} className="px-4 py-3 border-b border-gray-50 last:border-b-0">
                <div className="flex items-center">
                  <div className="relative">
                    <img
                      src={friend.avatar}
                      alt={friend.name}
                      className="w-12 h-12 rounded-full object-cover object-top mr-3"
                    />
                    {friend.isOnline && (
                      <div className="absolute bottom-0 right-2 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium text-gray-800 text-sm">{friend.name}</h4>
                      {friend.isOnline && (
                        <span className="text-xs text-green-600 bg-green-100 px-2 py-0.5 rounded-full">온라인</span>
                      )}
                    </div>
                    <p className="text-xs text-gray-500">{friend.username}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-gray-500">공통 친구 {friend.mutualFriends}명</span>
                      {friend.location && (
                        <>
                          <span className="text-xs text-gray-300">•</span>
                          <div className="flex items-center">
                            <i className="ri-map-pin-line w-3 h-3 flex items-center justify-center text-amber-600 mr-1"></i>
                            <span className="text-xs text-amber-600">{friend.location}</span>
                          </div>
                        </>
                      )}
                      {!friend.isOnline && friend.lastSeen && (
                        <>
                          <span className="text-xs text-gray-300">•</span>
                          <span className="text-xs text-gray-500">{friend.lastSeen}</span>
                        </>
                      )}
                    </div>
                  </div>
                  <button 
                    onClick={() => openChat(friend)}
                    className="p-2 text-gray-400 hover:text-amber-600 transition-colors"
                  >
                    <i className="ri-message-3-line w-5 h-5 flex items-center justify-center"></i>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Recommendations */}
        <div className="bg-white">
          <div className="px-4 py-3 border-b border-gray-100">
            <h3 className="font-semibold text-gray-800">추천 친구</h3>
          </div>
          {recommendations.map((rec) => (
            <div key={rec.id} className="px-4 py-3 border-b border-gray-50 last:border-b-0">
              <div className="flex items-center">
                <div className="relative">
                  <img
                    src={rec.avatar}
                    alt={rec.name}
                    className="w-12 h-12 rounded-full object-cover object-top mr-3"
                  />
                  {rec.isOnline && (
                    <div className="absolute bottom-0 right-2 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                  )}
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-800 text-sm">{rec.name}</h4>
                  <p className="text-xs text-gray-500">{rec.username}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-gray-500">공통 친구 {rec.mutualFriends}명</span>
                    {rec.location && (
                      <>
                        <span className="text-xs text-gray-300">•</span>
                        <div className="flex items-center">
                          <i className="ri-map-pin-line w-3 h-3 flex items-center justify-center text-amber-600 mr-1"></i>
                          <span className="text-xs text-amber-600">{rec.location}</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => sendFriendRequest(rec.id)}
                    className="px-4 py-1.5 bg-amber-500 text-white rounded-lg text-sm font-medium"
                  >
                    친구 추가
                  </button>
                  <button className="p-1.5 text-gray-400">
                    <i className="ri-close-line w-4 h-4 flex items-center justify-center"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Modal */}
      {isChatOpen && selectedFriend && (
        <ChatModal
          isOpen={isChatOpen}
          onClose={closeChat}
          friend={{
            name: selectedFriend.name,
            avatar: selectedFriend.avatar,
            isOnline: selectedFriend.isOnline
          }}
        />
      )}

      <BottomNavigation />
    </div>
  );
}
