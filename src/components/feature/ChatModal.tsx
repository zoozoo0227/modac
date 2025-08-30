
import { useState } from 'react';

interface Message {
  id: number;
  sender: 'me' | 'friend';
  type: 'text' | 'place';
  content: string;
  time: string;
  place?: {
    name: string;
    location: string;
    image: string;
    rating: number;
    category: string;
  };
}

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  friend: {
    name: string;
    avatar: string;
    isOnline: boolean;
  };
}

export default function ChatModal({ isOpen, onClose, friend }: ChatModalProps) {
  const [newMessage, setNewMessage] = useState('');
  
  // 친구별로 다른 채팅 내용 - 정중한 대화 vs 친한 친구 반말 대화
  const getMessagesForFriend = (friendName: string): Message[] => {
    if (friendName === '커피러버') {
      // 정중한 존댓말 대화
      return [
        {
          id: 1,
          sender: 'friend',
          type: 'text',
          content: '안녕하세요! 좋은 장소들을 찾아서 공유드려요 😊',
          time: '오전 10:30'
        },
        {
          id: 2,
          sender: 'friend',
          type: 'place',
          content: '이 카페 어떠신가요? 주말에 함께 가보시면 좋을 것 같아요',
          time: '오전 10:31',
          place: {
            name: '블루보틀 커피',
            location: '홍대, 서울',
            image: 'https://readdy.ai/api/search-image?query=Modern%20minimalist%20coffee%20shop%20interior%20with%20wooden%20tables%2C%20large%20windows%2C%20natural%20lighting%2C%20cozy%20atmosphere%2C%20instagram-worthy%20cafe%20design%2C%20professional%20photography&width=300&height=200&seq=chat1&orientation=landscape',
            rating: 4.8,
            category: '카페'
          }
        },
        {
          id: 3,
          sender: 'me',
          type: 'text',
          content: '와! 정말 멋진 곳이네요! 커피도 맛있다고 들었어요 ☕️',
          time: '오전 10:35'
        },
        {
          id: 4,
          sender: 'me',
          type: 'text',
          content: '언제 가시면 좋을까요? 이번 주말은 어떠세요?',
          time: '오전 10:35'
        },
        {
          id: 5,
          sender: 'friend',
          type: 'place',
          content: '그 후에는 이 미술관도 들러보시면 어떨까요?',
          time: '오전 10:40',
          place: {
            name: '대림미술관',
            location: '종로구, 서울',
            image: 'https://readdy.ai/api/search-image?query=Contemporary%20art%20gallery%20interior%20with%20white%20walls%2C%20modern%20exhibitions%2C%20artistic%20lighting%2C%20cultural%20space%2C%20museum%20atmosphere%2C%20professional%20photography&width=300&height=200&seq=chat2&orientation=landscape',
            rating: 4.6,
            category: '미술관'
          }
        },
        {
          id: 6,
          sender: 'friend',
          type: 'text',
          content: '이번 달에 새로운 전시가 열린다고 하더라고요! 🎨',
          time: '오전 10:41'
        },
        {
          id: 7,
          sender: 'me',
          type: 'text',
          content: '완벽해요! 토요일 오후가 괜찮을 것 같아요',
          time: '오전 10:45'
        },
        {
          id: 8,
          sender: 'friend',
          type: 'place',
          content: '저녁은 이 레스토랑 어떠세요? 후기가 정말 좋더라고요!',
          time: '오전 10:50',
          place: {
            name: '밍글스 레스토랑',
            location: '강남구, 서울',
            image: 'https://readdy.ai/api/search-image?query=Elegant%20fine%20dining%20restaurant%20interior%20with%20sophisticated%20decor%2C%20warm%20ambient%20lighting%2C%20modern%20korean%20cuisine%2C%20upscale%20atmosphere%2C%20professional%20food%20photography&width=300&height=200&seq=chat3&orientation=landscape',
            rating: 4.9,
            category: '파인다이닝'
          }
        },
        {
          id: 9,
          sender: 'me',
          type: 'text',
          content: '오! 거기 정말 가보고 싶었어요! 🍽️',
          time: '오전 10:55'
        },
        {
          id: 10,
          sender: 'me',
          type: 'text',
          content: '제가 예약해드릴까요?',
          time: '오전 10:55'
        }
      ];
    } else {
      // 친한 친구 반말 대화 (맛집탐험가)
      return [
        {
          id: 1,
          sender: 'friend',
          type: 'text',
          content: '야!! 진짜 미친 곳들 찾았다 ㅋㅋㅋ',
          time: '오전 10:20'
        },
        {
          id: 2,
          sender: 'friend',
          type: 'place',
          content: '여기봐봐!! 완전 힙한 브런치 카페야',
          time: '오전 10:21',
          place: {
            name: '어니스트 브런치',
            location: '성수동, 서울',
            image: 'https://readdy.ai/api/search-image?query=Trendy%20brunch%20cafe%20interior%20with%20industrial%20design%2C%20exposed%20brick%20walls%2C%20pendant%20lights%2C%20instagram-worthy%20aesthetic%2C%20modern%20hipster%20style%2C%20warm%20cozy%20atmosphere&width=300&height=200&seq=chat4&orientation=landscape',
            rating: 4.7,
            category: '브런치카페'
          }
        },
        {
          id: 3,
          sender: 'me',
          type: 'text',
          content: '헐 대박!! 여기 완전 내 스타일이야 💕',
          time: '오전 10:25'
        },
        {
          id: 4,
          sender: 'me',
          type: 'text',
          content: '언제 갈래?? 당장 가고싶어ㅠㅠ',
          time: '오전 10:25'
        },
        {
          id: 5,
          sender: 'friend',
          type: 'text',
          content: 'ㅋㅋㅋ 급하네~ 일요일 브런치 어때?',
          time: '오전 10:27'
        },
        {
          id: 6,
          sender: 'friend',
          type: 'place',
          content: '아 그리고 이것도 봐!! 완전 핫플이래',
          time: '오전 10:30',
          place: {
            name: '텐더 바베큐',
            location: '이태원, 서울',
            image: 'https://readdy.ai/api/search-image?query=Modern%20barbecue%20restaurant%20interior%20with%20smoky%20atmosphere%2C%20dark%20mood%20lighting%2C%20industrial%20design%2C%20meat%20display%2C%20urban%20dining%20aesthetic%2C%20contemporary%20korean%20bbq%20style&width=300&height=200&seq=chat5&orientation=landscape',
            rating: 4.8,
            category: '바베큐'
          }
        },
        {
          id: 7,
          sender: 'me',
          type: 'text',
          content: '미쳤다 진짜!! 고기 완전 좋아해 🥩',
          time: '오전 10:33'
        },
        {
          id: 8,
          sender: 'friend',
          type: 'text',
          content: '그치?? 인스타에서 완전 난리났더라ㅋㅋ',
          time: '오전 10:34'
        },
        {
          id: 9,
          sender: 'me',
          type: 'text',
          content: '브런치 먹고 저녁에 여기도 가자!!',
          time: '오전 10:36'
        },
        {
          id: 10,
          sender: 'friend',
          type: 'place',
          content: '마지막으로 디저트는 여기!! 완전 예술이야',
          time: '오전 10:38',
          place: {
            name: '라뜰리에 디저트',
            location: '청담동, 서울',
            image: 'https://readdy.ai/api/search-image?query=Elegant%20patisserie%20interior%20with%20beautiful%20dessert%20display%2C%20French%20pastry%20shop%20aesthetic%2C%20marble%20counters%2C%20golden%20lighting%2C%20luxury%20dessert%20boutique%20atmosphere&width=300&height=200&seq=chat6&orientation=landscape',
            rating: 4.9,
            category: '디저트카페'
          }
        },
        {
          id: 11,
          sender: 'me',
          type: 'text',
          content: '와씨... 완전 먹방투어네 ㅋㅋㅋㅋ',
          time: '오전 10:40'
        },
        {
          id: 12,
          sender: 'me',
          type: 'text',
          content: '일요일 완전 기대된다!! 🤤',
          time: '오전 10:40'
        }
      ];
    }
  };

  const [messages, setMessages] = useState<Message[]>(getMessagesForFriend(friend.name));

  const sendMessage = () => {
    if (!newMessage.trim()) return;

    const message: Message = {
      id: Date.now(),
      sender: 'me',
      type: 'text',
      content: newMessage.trim(),
      time: new Date().toLocaleTimeString('ko-KR', { 
        hour: 'numeric', 
        minute: '2-digit',
        hour12: true 
      })
    };

    setMessages(prev => [...prev, message]);
    setNewMessage('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50">
      <div className="bg-white w-full h-full flex flex-col">
        {/* Chat Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-white">
          <div className="flex items-center gap-3">
            <button onClick={onClose} className="p-1 text-gray-600">
              <i className="ri-arrow-left-line w-6 h-6 flex items-center justify-center"></i>
            </button>
            <div className="relative">
              <img
                src={friend.avatar}
                alt={friend.name}
                className="w-10 h-10 rounded-full object-cover object-top"
              />
              {friend.isOnline && (
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
              )}
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">{friend.name}</h3>
              <p className="text-xs text-gray-500">
                {friend.isOnline ? '온라인' : '1시간 전 접속'}
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="p-2 text-gray-600">
              <i className="ri-phone-line w-5 h-5 flex items-center justify-center"></i>
            </button>
            <button className="p-2 text-gray-600">
              <i className="ri-more-line w-5 h-5 flex items-center justify-center"></i>
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[280px] ${
                  message.sender === 'me'
                    ? 'bg-amber-500 text-white'
                    : 'bg-white text-gray-800'
                } rounded-2xl p-3 shadow-sm`}
              >
                {message.type === 'text' ? (
                  <p className="text-sm">{message.content}</p>
                ) : message.place ? (
                  <div className="space-y-2">
                    <p className="text-sm">{message.content}</p>
                    <div className="bg-white/10 rounded-xl overflow-hidden">
                      <img
                        src={message.place.image}
                        alt={message.place.name}
                        className="w-full h-32 object-cover object-top"
                      />
                      <div className="p-3">
                        <div className="flex items-start justify-between mb-1">
                          <h4 className={`font-semibold text-sm ${
                            message.sender === 'me' ? 'text-white' : 'text-gray-800'
                          }`}>
                            {message.place.name}
                          </h4>
                          <div className="flex items-center gap-1">
                            <i className="ri-star-fill w-3 h-3 flex items-center justify-center text-yellow-400"></i>
                            <span className={`text-xs ${
                              message.sender === 'me' ? 'text-white/90' : 'text-gray-600'
                            }`}>
                              {message.place.rating}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <i className="ri-map-pin-line w-3 h-3 flex items-center justify-center text-amber-600"></i>
                            <span className={`text-xs ${
                              message.sender === 'me' ? 'text-white/80' : 'text-gray-500'
                            }`}>
                              {message.place.location}
                            </span>
                          </div>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            message.sender === 'me' 
                              ? 'bg-white/20 text-white' 
                              : 'bg-amber-100 text-amber-700'
                          }`}>
                            {message.place.category}
                          </span>
                        </div>
                        <button className={`w-full mt-2 py-2 rounded-lg text-xs font-medium transition-colors ${
                          message.sender === 'me'
                            ? 'bg-white/20 text-white hover:bg-white/30'
                            : 'bg-amber-500 text-white hover:bg-amber-600'
                        }`}>
                          자세히 보기
                        </button>
                      </div>
                    </div>
                  </div>
                ) : null}
                <p className={`text-xs mt-2 ${
                  message.sender === 'me' ? 'text-white/70' : 'text-gray-500'
                }`}>
                  {message.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="p-4 bg-white border-t border-gray-100">
          <div className="flex items-center gap-3">
            <button className="p-2 text-gray-400">
              <i className="ri-attachment-line w-5 h-5 flex items-center justify-center"></i>
            </button>
            <div className="flex-1 flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="메시지를 입력하세요..."
                className="flex-1 bg-transparent text-sm focus:outline-none border-none"
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              />
              <button className="p-1 text-gray-400">
                <i className="ri-emotion-line w-5 h-5 flex items-center justify-center"></i>
              </button>
            </div>
            <button
              onClick={sendMessage}
              disabled={!newMessage.trim()}
              className={`p-2 rounded-full transition-colors ${
                newMessage.trim()
                  ? 'bg-amber-500 text-white hover:bg-amber-600'
                  : 'bg-gray-200 text-gray-400'
              }`}
            >
              <i className="ri-send-plane-fill w-5 h-5 flex items-center justify-center"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
