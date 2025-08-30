import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Settings() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [notifications, setNotifications] = useState({
    push: true,
    email: false,
    marketing: true
  });
  
  const [privacy, setPrivacy] = useState({
    profileVisible: true,
    locationSharing: false,
    reviewPrivacy: true
  });
  
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [showAppInfoModal, setShowAppInfoModal] = useState(false);

  const languages = [
    { code: 'ko', name: '한국어', flag: '🇰🇷' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const handleLanguageSelect = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setShowLanguageModal(false);
  };

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
          
          <h1 className="text-xl font-semibold text-gray-800">설정</h1>
          
          <div className="w-10"></div>
        </div>
      </div>

      {/* Content */}
      <div className="pt-16 pb-8 px-4">
        {/* Notification Settings */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">알림 설정</h2>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="p-4 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-800">푸시 알림</h3>
                  <p className="text-sm text-gray-500">새로운 장소 추천 및 업데이트</p>
                </div>
                <button
                  onClick={() => setNotifications(prev => ({ ...prev, push: !prev.push }))}
                  className={`relative w-12 h-6 rounded-full transition-colors duration-200 ${
                    notifications.push ? 'bg-amber-500' : 'bg-gray-300'
                  }`}
                >
                  <div
                    className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-200 ${
                      notifications.push ? 'translate-x-6' : 'translate-x-0.5'
                    }`}
                  />
                </button>
              </div>
              
              <div className="border-t border-gray-100 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-gray-800">이메일 알림</h3>
                    <p className="text-sm text-gray-500">주간 추천 및 특별 소식</p>
                  </div>
                  <button
                    onClick={() => setNotifications(prev => ({ ...prev, email: !prev.email }))}
                    className={`relative w-12 h-6 rounded-full transition-colors duration-200 ${
                      notifications.email ? 'bg-amber-500' : 'bg-gray-300'
                    }`}
                  >
                    <div
                      className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-200 ${
                        notifications.email ? 'translate-x-6' : 'translate-x-0.5'
                      }`}
                    />
                  </button>
                </div>
              </div>
              
              <div className="border-t border-gray-100 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-gray-800">마케팅 알림</h3>
                    <p className="text-sm text-gray-500">프로모션 및 이벤트 정보</p>
                  </div>
                  <button
                    onClick={() => setNotifications(prev => ({ ...prev, marketing: !prev.marketing }))}
                    className={`relative w-12 h-6 rounded-full transition-colors duration-200 ${
                      notifications.marketing ? 'bg-amber-500' : 'bg-gray-300'
                    }`}
                  >
                    <div
                      className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-200 ${
                        notifications.marketing ? 'translate-x-6' : 'translate-x-0.5'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Settings */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">개인정보 설정</h2>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="p-4 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-800">프로필 공개</h3>
                  <p className="text-sm text-gray-500">다른 사용자에게 프로필 표시</p>
                </div>
                <button
                  onClick={() => setPrivacy(prev => ({ ...prev, profileVisible: !prev.profileVisible }))}
                  className={`relative w-12 h-6 rounded-full transition-colors duration-200 ${
                    privacy.profileVisible ? 'bg-amber-500' : 'bg-gray-300'
                  }`}
                >
                  <div
                    className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-200 ${
                      privacy.profileVisible ? 'translate-x-6' : 'translate-x-0.5'
                    }`}
                  />
                </button>
              </div>
              
              <div className="border-t border-gray-100 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-gray-800">위치 공유</h3>
                    <p className="text-sm text-gray-500">현재 위치 기반 추천 허용</p>
                  </div>
                  <button
                    onClick={() => setPrivacy(prev => ({ ...prev, locationSharing: !prev.locationSharing }))}
                    className={`relative w-12 h-6 rounded-full transition-colors duration-200 ${
                      privacy.locationSharing ? 'bg-amber-500' : 'bg-gray-300'
                    }`}
                  >
                    <div
                      className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-200 ${
                        privacy.locationSharing ? 'translate-x-6' : 'translate-x-0.5'
                      }`}
                    />
                  </button>
                </div>
              </div>
              
              <div className="border-t border-gray-100 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-gray-800">리뷰 공개</h3>
                    <p className="text-sm text-gray-500">작성한 리뷰를 다른 사용자에게 표시</p>
                  </div>
                  <button
                    onClick={() => setPrivacy(prev => ({ ...prev, reviewPrivacy: !prev.reviewPrivacy }))}
                    className={`relative w-12 h-6 rounded-full transition-colors duration-200 ${
                      privacy.reviewPrivacy ? 'bg-amber-500' : 'bg-gray-300'
                    }`}
                  >
                    <div
                      className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-200 ${
                        privacy.reviewPrivacy ? 'translate-x-6' : 'translate-x-0.5'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* App Preferences */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">앱 설정</h2>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="p-4">
              {/* Language Selector */}
              <div>
                <h3 className="font-medium text-gray-800 mb-2">언어</h3>
                <button
                  onClick={() => setShowLanguageModal(true)}
                  className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lg">{currentLanguage.flag}</span>
                    <span className="text-sm font-medium text-gray-800">{currentLanguage.name}</span>
                  </div>
                  <i className="ri-arrow-right-s-line w-5 h-5 flex items-center justify-center text-gray-400"></i>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">고객지원</h2>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <button 
              onClick={() => navigate('/faq')}
              className="w-full flex items-center justify-between p-3 hover:bg-gray-50 transition-colors border-b border-gray-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <i className="ri-question-line w-4 h-4 flex items-center justify-center text-blue-600"></i>
                </div>
                <span className="text-sm font-medium text-gray-800">자주 묻는 질문</span>
              </div>
              <i className="ri-arrow-right-s-line w-5 h-5 flex items-center justify-center text-gray-400"></i>
            </button>
            
            <button 
              onClick={() => navigate('/privacy')}
              className="flex items-center justify-between w-full p-4 bg-white hover:bg-gray-50 border-b border-gray-100"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-lg">
                  <i className="ri-shield-user-line text-gray-600"></i>
                </div>
                <span className="text-sm font-medium text-gray-800">개인정보 처리방침</span>
              </div>
              <i className="ri-arrow-right-s-line text-gray-400"></i>
            </button>
            
            <button 
              onClick={() => navigate('/terms')}
              className="w-full flex items-center justify-between p-3 hover:bg-gray-50 transition-colors border-b border-gray-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <i className="ri-file-text-line w-4 h-4 flex items-center justify-center text-purple-600"></i>
                </div>
                <span className="text-sm font-medium text-gray-800">이용약관</span>
              </div>
              <i className="ri-arrow-right-s-line w-5 h-5 flex items-center justify-center text-gray-400"></i>
            </button>
            
            <button 
              onClick={() => setShowAppInfoModal(true)}
              className="w-full flex items-center justify-between p-3 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <i className="ri-information-line w-4 h-4 flex items-center justify-center text-orange-600"></i>
                </div>
                <span className="text-sm font-medium text-gray-800">앱 정보</span>
              </div>
              <i className="ri-arrow-right-s-line w-5 h-5 flex items-center justify-center text-gray-400"></i>
            </button>
          </div>
        </section>

        {/* App Info */}
        <section className="mb-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-amber-600 mb-1" style={{ fontFamily: '"Pacifico", serif' }}>
                Modac
              </h3>
              <p className="text-sm text-gray-500 mb-2">버전 1.2.3</p>
              <p className="text-xs text-gray-400">© 2024 Modac. All rights reserved.</p>
            </div>
          </div>
        </section>

        {/* Logout */}
        <section>
          <button className="w-full bg-red-50 hover:bg-red-100 text-red-600 font-medium py-4 rounded-2xl transition-colors">
            로그아웃
          </button>
        </section>
      </div>

      {/* Language Selection Modal */}
      {showLanguageModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
          <div className="bg-white w-full rounded-t-3xl p-6 animate-slide-up">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-800">언어 선택</h3>
              <button
                onClick={() => setShowLanguageModal(false)}
                className="p-2 text-gray-400 hover:text-gray-600"
              >
                <i className="ri-close-line w-6 h-6 flex items-center justify-center"></i>
              </button>
            </div>
            
            <div className="space-y-2 max-h-80 overflow-y-auto">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageSelect(lang.code)}
                  className={`w-full flex items-center justify-between p-4 rounded-2xl transition-colors ${
                    i18n.language === lang.code
                      ? 'bg-amber-50 border-2 border-amber-200'
                      : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">{lang.flag}</span>
                    <span className="text-sm font-medium text-gray-800">{lang.name}</span>
                  </div>
                  {i18n.language === lang.code && (
                    <i className="ri-check-line w-5 h-5 flex items-center justify-center text-amber-600"></i>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* App Info Modal */}
      {showAppInfoModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-md rounded-3xl p-6 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-800">앱 정보</h3>
              <button
                onClick={() => setShowAppInfoModal(false)}
                className="p-2 text-gray-400 hover:text-gray-600"
              >
                <i className="ri-close-line w-6 h-6 flex items-center justify-center"></i>
              </button>
            </div>
            
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-white" style={{ fontFamily: '"Pacifico", serif' }}>M</span>
              </div>
              <h4 className="text-2xl font-bold text-amber-600 mb-1" style={{ fontFamily: '"Pacifico", serif' }}>
                Modac
              </h4>
              <p className="text-sm text-gray-500">장소 추천 & 리뷰 앱</p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="bg-gray-50 rounded-2xl p-4">
                <h5 className="font-semibold text-gray-800 mb-3">버전 정보</h5>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">현재 버전</span>
                    <span className="font-medium text-gray-800">1.2.3</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">릴리즈 날짜</span>
                    <span className="font-medium text-gray-800">2024.03.15</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">앱 크기</span>
                    <span className="font-medium text-gray-800">45.2 MB</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">개발자</span>
                    <span className="font-medium text-gray-800">Modac Team</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-4">
                <h5 className="font-semibold text-gray-800 mb-3">앱 설명</h5>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Modac은 개인화된 장소 추천과 리뷰 공유를 통해 더 나은 여행과 일상을 만들어주는 앱입니다. 
                  AI 기반 추천 시스템으로 취향에 맞는 장소를 찾아보세요.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-4">
                <h5 className="font-semibold text-gray-800 mb-3">주요 기능</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 개인화된 장소 추천</li>
                  <li>• 사용자 리뷰 및 평점</li>
                  <li>• 위치 기반 서비스</li>
                  <li>• 소셜 기능 및 친구 추천</li>
                  <li>• 즐겨찾기 및 위시리스트</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-4">
                <h5 className="font-semibold text-gray-800 mb-3">연락처</h5>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-3">
                    <i className="ri-mail-line w-4 h-4 text-gray-500"></i>
                    <span className="text-gray-600">support@modac.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <i className="ri-phone-line w-4 h-4 text-gray-500"></i>
                    <span className="text-gray-600">1588-1234</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <i className="ri-global-line w-4 h-4 text-gray-500"></i>
                    <span className="text-gray-600">www.modac.com</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center text-xs text-gray-400">
              © 2024 Modac Team. All rights reserved.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}