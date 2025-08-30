
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface Message {
  id: number;
  sender: 'user' | 'ai';
  content: string;
  time: string;
  places?: PlaceRecommendation[];
}

interface PlaceRecommendation {
  name: string;
  location: string;
  category: string;
  rating: number;
  description: string;
  image: string;
  priceRange: string;
}

export default function Chat() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: 'ai',
      content: '안녕하세요! 저는 여러분의 AI 여행 도우미입니다 🤖 취향에 맞는 멋진 장소들을 찾아드릴 수 있어요. 오늘은 어떤 종류의 장소를 찾고 계신가요?',
      time: new Date().toLocaleTimeString('ko-KR', { 
        hour: 'numeric', 
        minute: '2-digit',
        hour12: true 
      })
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getAIResponse = async (userMessage: string): Promise<{ content: string; places?: PlaceRecommendation[] }> => {
    // Simulate AI processing delay
    await new Promise(resolve => setTimeout(resolve, 1500 + Math.random() * 1000));

    // Mock OpenAI-style responses with place recommendations
    const responses = [
      {
        content: "좋은 선택이에요! 서울에서 취향에 맞는 멋진 카페들을 찾았습니다. 제가 추천하는 최고의 장소들이에요:",
        places: [
          {
            name: "블루보틀 커피",
            location: "홍대, 서울",
            category: "스페셜티 커피",
            rating: 4.8,
            description: "뛰어난 싱글 오리진 커피와 깔끔한 미학으로 유명한 미니멀리스트 카페",
            image: "https://readdy.ai/api/search-image?query=Modern%20minimalist%20coffee%20shop%20interior%20with%20wooden%20tables%2C%20large%20windows%2C%20natural%20lighting%2C%20blue%20bottle%20coffee%20style%2C%20clean%20aesthetic%2C%20professional%20photography&width=300&height=200&seq=ai1&orientation=landscape",
            priceRange: "₩₩"
          },
          {
            name: "앤트러사이트 커피",
            location: "강남, 서울",
            category: "로스터리 카페",
            rating: 4.7,
            description: "전문적으로 제조된 커피와 아늑한 분위기의 산업적 세련미가 있는 로스터리",
            image: "https://readdy.ai/api/search-image?query=Industrial%20style%20coffee%20roastery%20interior%20with%20exposed%20pipes%2C%20concrete%20walls%2C%20coffee%20roasting%20equipment%2C%20modern%20urban%20cafe%20design&width=300&height=200&seq=ai2&orientation=landscape",
            priceRange: "₩₩"
          }
        ]
      },
      {
        content: "음식 애호가들에게 완벽해요! 취향에 맞는 뛰어난 레스토랑들을 엄선했습니다. 추천 장소들이에요:",
        places: [
          {
            name: "밍글스 레스토랑",
            location: "강남, 서울",
            category: "파인 다이닝",
            rating: 4.9,
            description: "혁신적인 현대적 해석을 가진 미슐랭 스타 한국 요리",
            image: "https://readdy.ai/api/search-image?query=Elegant%20fine%20dining%20restaurant%20interior%20with%20sophisticated%20korean%20decor%2C%20warm%20ambient%20lighting%2C%20michelin%20star%20quality%2C%20upscale%20atmosphere&width=300&height=200&seq=ai3&orientation=landscape",
            priceRange: "₩₩₩₩"
          },
          {
            name: "광장시장",
            location: "종로, 서울",
            category: "길거리 음식",
            rating: 4.6,
            description: "정통 한국 길거리 음식과 지역 별미를 제공하는 역사적인 시장",
            image: "https://readdy.ai/api/search-image?query=Bustling%20korean%20street%20food%20market%20with%20colorful%20food%20stalls%2C%20traditional%20market%20atmosphere%2C%20authentic%20local%20cuisine%2C%20vibrant%20lighting&width=300&height=200&seq=ai4&orientation=landscape",
            priceRange: "₩"
          }
        ]
      },
      {
        content: "문화 체험으로는 훌륭한 선택이에요! 제가 추천하는 뛰어난 문화 공간들입니다:",
        places: [
          {
            name: "리움미술관",
            location: "이태원, 서울",
            category: "미술관",
            rating: 4.8,
            description: "한국과 국제 작가들의 작품을 전시하는 현대미술관",
            image: "https://readdy.ai/api/search-image?query=Modern%20art%20museum%20interior%20with%20contemporary%20exhibitions%2C%20white%20gallery%20walls%2C%20artistic%20lighting%2C%20cultural%20space%20atmosphere&width=300&height=200&seq=ai5&orientation=landscape",
            priceRange: "₩₩"
          },
          {
            name: "북촌한옥마을",
            location: "종로, 서울",
            category: "문화유적지",
            rating: 4.5,
            description: "보존된 한옥 건축과 문화 워크숍이 있는 전통 한국 마을",
            image: "https://readdy.ai/api/search-image?query=Traditional%20korean%20hanok%20village%20with%20historic%20architecture%2C%20stone%20pathways%2C%20cultural%20heritage%20site%2C%20authentic%20korean%20atmosphere&width=300&height=200&seq=ai6&orientation=landscape",
            priceRange: "무료"
          }
        ]
      },
      {
        content: "특별한 곳을 찾고 계시는군요! 취향에 맞는 독특한 장소들을 추천해드려요:",
        places: [
          {
            name: "반포 레인보우 브릿지",
            location: "서초, 서울",
            category: "관광명소",
            rating: 4.4,
            description: "한강 위에서 펼쳐지는 음악과 화려한 조명의 장관한 분수 쇼",
            image: "https://readdy.ai/api/search-image?query=Rainbow%20fountain%20bridge%20at%20night%20with%20colorful%20water%20show%2C%20han%20river%20seoul%2C%20spectacular%20light%20display%2C%20evening%20atmosphere&width=300&height=200&seq=ai7&orientation=landscape",
            priceRange: "무료"
          },
          {
            name: "서울숲공원",
            location: "성동, 서울",
            category: "자연공원",
            rating: 4.6,
            description: "사슴, 나비정원, 레크리에이션 시설이 있는 대형 도시공원",
            image: "https://readdy.ai/api/search-image?query=Large%20urban%20park%20with%20green%20trees%2C%20walking%20paths%2C%20natural%20landscape%2C%20seoul%20forest%20atmosphere%2C%20peaceful%20outdoor%20space&width=300&height=200&seq=ai8&orientation=landscape",
            priceRange: "무료"
          }
        ]
      }
    ];

    // Simple keyword matching for demo purposes
    const lowerMessage = userMessage.toLowerCase();
    if (lowerMessage.includes('커피') || lowerMessage.includes('카페')) {
      return responses[0];
    } else if (lowerMessage.includes('음식') || lowerMessage.includes('레스토랑') || lowerMessage.includes('먹')) {
      return responses[1];
    } else if (lowerMessage.includes('문화') || lowerMessage.includes('박물관') || lowerMessage.includes('미술')) {
      return responses[2];
    } else {
      return responses[3];
    }
  };

  const sendMessage = async () => {
    if (!newMessage.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now(),
      sender: 'user',
      content: newMessage.trim(),
      time: new Date().toLocaleTimeString('ko-KR', { 
        hour: 'numeric', 
        minute: '2-digit',
        hour12: true 
      })
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    setIsLoading(true);

    try {
      const aiResponse = await getAIResponse(userMessage.content);
      
      const aiMessage: Message = {
        id: Date.now() + 1,
        sender: 'ai',
        content: aiResponse.content,
        places: aiResponse.places,
        time: new Date().toLocaleTimeString('ko-KR', { 
          hour: 'numeric', 
          minute: '2-digit',
          hour12: true 
        })
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: Date.now() + 1,
        sender: 'ai',
        content: '죄송해요, 오류가 발생했습니다. 다시 시도해주세요!',
        time: new Date().toLocaleTimeString('ko-KR', { 
          hour: 'numeric', 
          minute: '2-digit',
          hour12: true 
        })
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const quickPrompts = [
    "아늑한 카페 찾아줘",
    "한국 레스토랑 추천해줘", 
    "미술관 보여줘",
    "나이트라이프 어디가 좋을까?",
    "야외 활동 추천"
  ];

  return (
    <div className="fixed inset-0 bg-gray-50 flex flex-col">
      {/* Top Navigation */}
      <div className="flex-shrink-0 bg-white shadow-sm z-30">
        <div className="flex items-center justify-between px-4 py-3">
          <button
            onClick={() => navigate(-1)}
            className="p-2 text-gray-600 hover:text-gray-800"
          >
            <i className="ri-arrow-left-line w-6 h-6 flex items-center justify-center"></i>
          </button>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
              <i className="ri-robot-line w-6 h-6 flex items-center justify-center text-white"></i>
            </div>
            <div>
              <h1 className="text-xl font-bold text-amber-600" style={{ fontFamily: '"Pacifico", serif' }}>
                AI 장소 찾기
              </h1>
              <p className="text-xs text-gray-500">OpenAI 기반</p>
            </div>
          </div>
          
          <button className="p-2 text-gray-600 hover:text-gray-800">
            <i className="ri-more-line w-6 h-6 flex items-center justify-center"></i>
          </button>
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto px-4 py-4 relative">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[320px] ${
                  message.sender === 'user'
                    ? 'bg-amber-500 text-white'
                    : 'bg-white text-gray-800'
                } rounded-2xl p-4 shadow-sm`}
              >
                <p className="text-sm leading-relaxed">{message.content}</p>
                
                {message.places && (
                  <div className="mt-3 space-y-3">
                    {message.places.map((place, index) => (
                      <div key={index} className="bg-gray-50 rounded-xl overflow-hidden">
                        <img
                          src={place.image}
                          alt={place.name}
                          className="w-full h-32 object-cover object-top"
                        />
                        <div className="p-3">
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-800 text-sm">
                                {place.name}
                              </h4>
                              <p className="text-xs text-gray-600 mt-1">
                                {place.description}
                              </p>
                            </div>
                            <div className="flex items-center gap-1 ml-2">
                              <i className="ri-star-fill w-3 h-3 flex items-center justify-center text-yellow-400"></i>
                              <span className="text-xs text-gray-600">
                                {place.rating}
                              </span>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1">
                              <i className="ri-map-pin-line w-3 h-3 flex items-center justify-center text-amber-600"></i>
                              <span className="text-xs text-gray-500">
                                {place.location}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs px-2 py-1 rounded-full bg-amber-100 text-amber-700">
                                {place.category}
                              </span>
                              <span className="text-xs text-gray-600 font-medium">
                                {place.priceRange}
                              </span>
                            </div>
                          </div>
                          
                          <div className="flex gap-2 mt-3">
                            <button className="flex-1 py-2 bg-amber-500 text-white text-xs font-medium rounded-lg hover:bg-amber-600 transition-colors">
                              자세히 보기
                            </button>
                            <button className="px-3 py-2 bg-gray-200 text-gray-600 text-xs rounded-lg hover:bg-gray-300 transition-colors">
                              <i className="ri-heart-line w-4 h-4 flex items-center justify-center"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                <p className={`text-xs mt-2 ${
                  message.sender === 'user' ? 'text-white/70' : 'text-gray-500'
                }`}>
                  {message.time}
                </p>
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white rounded-2xl p-4 shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                  <span className="text-xs text-gray-500">AI가 생각하고 있어요...</span>
                </div>
              </div>
            </div>
          )}
        </div>
        <div ref={messagesEndRef} />

        {/* Quick Prompts - Positioned within messages container */}
        {messages.length <= 1 && (
          <div className="mt-8">
            <div className="bg-white rounded-2xl p-4 shadow-lg">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">빠른 질문:</h3>
              <div className="flex flex-wrap gap-2">
                {quickPrompts.map((prompt, index) => (
                  <button
                    key={index}
                    onClick={() => setNewMessage(prompt)}
                    className="px-3 py-2 bg-amber-50 text-amber-700 text-xs rounded-full hover:bg-amber-100 transition-colors"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Message Input */}
      <div className="flex-shrink-0 p-4 bg-white border-t border-gray-100">
        <div className="flex items-center gap-3">
          <div className="flex-1 flex items-center gap-2 bg-gray-100 rounded-full px-4 py-3">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="서울의 장소에 대해 물어보세요..."
              className="flex-1 bg-transparent text-sm focus:outline-none border-none"
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              disabled={isLoading}
            />
            <button className="p-1 text-gray-400">
              <i className="ri-mic-line w-5 h-5 flex items-center justify-center"></i>
            </button>
          </div>
          <button
            onClick={sendMessage}
            disabled={!newMessage.trim() || isLoading}
            className={`p-3 rounded-full transition-colors ${
              newMessage.trim() && !isLoading
                ? 'bg-amber-500 text-white hover:bg-amber-600'
                : 'bg-gray-200 text-gray-400'
            }`}
          >
            <i className="ri-send-plane-fill w-5 h-5 flex items-center justify-center"></i>
          </button>
        </div>
      </div>
    </div>
  );
}