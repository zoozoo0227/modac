
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export default function FAQ() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [expandedItem, setExpandedItem] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "앱을 어떻게 사용하나요?",
      answer: "홈 화면에서 원하는 장소를 검색하거나 추천 장소를 확인할 수 있습니다. 필터 기능을 통해 카테고리별로 장소를 찾을 수 있고, 취향 테스트를 통해 개인화된 추천을 받을 수 있습니다.",
      category: "사용법"
    },
    {
      id: 2,
      question: "취향 테스트는 어떻게 진행되나요?",
      answer: "홈 화면의 '취향 테스트' 섹션에서 다양한 테스트를 선택할 수 있습니다. 질문에 답변하면 개인 취향에 맞는 장소를 추천해드립니다.",
      category: "기능"
    },
    {
      id: 3,
      question: "리뷰는 어떻게 작성하나요?",
      answer: "방문한 장소의 상세 페이지에서 리뷰를 작성할 수 있습니다. 별점과 함께 상세한 후기를 남겨주세요.",
      category: "기능"
    },
    {
      id: 4,
      question: "즐겨찾기한 장소는 어디서 확인하나요?",
      answer: "하단 네비게이션의 '저장됨' 탭에서 즐겨찾기한 모든 장소를 확인할 수 있습니다.",
      category: "기능"
    },
    {
      id: 5,
      question: "계정 정보는 어떻게 수정하나요?",
      answer: "프로필 페이지에서 개인정보를 수정할 수 있습니다. 사진, 이름, 소개글 등을 변경할 수 있습니다.",
      category: "계정"
    },
    {
      id: 6,
      question: "알림 설정은 어떻게 변경하나요?",
      answer: "설정 페이지의 '알림' 섹션에서 원하는 알림 유형을 선택하거나 해제할 수 있습니다.",
      category: "설정"
    },
    {
      id: 7,
      question: "언어 설정은 어떻게 변경하나요?",
      answer: "설정 페이지의 '언어' 옵션에서 원하는 언어를 선택할 수 있습니다. 한국어, 영어를 지원합니다.",
      category: "설정"
    },
    {
      id: 8,
      question: "앱이 느려요. 어떻게 해야 하나요?",
      answer: "앱을 완전히 종료한 후 다시 실행해보세요. 문제가 지속되면 기기를 재시작하거나 앱을 재설치해보세요.",
      category: "문제해결"
    },
    {
      id: 9,
      question: "위치 정보가 정확하지 않아요.",
      answer: "기기의 위치 서비스가 켜져 있는지 확인하고, 앱에 위치 권한이 허용되어 있는지 확인해주세요.",
      category: "문제해결"
    },
    {
      id: 10,
      question: "개인정보는 어떻게 보호되나요?",
      answer: "사용자의 개인정보는 암호화되어 안전하게 보관됩니다. 개인정보처리방침에서 자세한 내용을 확인할 수 있습니다.",
      category: "개인정보"
    }
  ];

  const categories = ['all', '사용법', '기능', '계정', '설정', '문제해결', '개인정보'];

  const filteredFAQ = selectedCategory === 'all' 
    ? faqData 
    : faqData.filter(item => item.category === selectedCategory);

  const toggleExpanded = (id: number) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 bg-white shadow-sm z-30">
        <div className="flex items-center justify-between px-4 py-3">
          <button
            onClick={() => navigate(-1)}
            className="p-2 text-gray-600 hover:text-gray-800"
          >
            <i className="ri-arrow-left-line w-6 h-6 flex items-center justify-center"></i>
          </button>
          
          <h1 className="text-lg font-semibold text-gray-800">자주 묻는 질문</h1>
          
          <div className="w-10"></div>
        </div>
      </div>

      {/* Content */}
      <div className="pt-16 pb-6 px-4">
        {/* Category Filter */}
        <div className="mb-6">
          <div className="flex overflow-x-auto scrollbar-hide gap-2 pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-amber-600 text-white'
                    : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                {category === 'all' ? '전체' : category}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ List */}
        <div className="space-y-3">
          {filteredFAQ.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <button
                onClick={() => toggleExpanded(item.id)}
                className="w-full p-4 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="font-medium text-gray-800 text-sm">{item.question}</h3>
                  </div>
                  <i className={`ri-arrow-${expandedItem === item.id ? 'up' : 'down'}-s-line w-5 h-5 flex items-center justify-center text-gray-400 ml-3`}></i>
                </div>
              </button>
              
              {expandedItem === item.id && (
                <div className="px-4 pb-4">
                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-sm text-gray-600 leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="text-center">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <i className="ri-customer-service-2-line w-6 h-6 flex items-center justify-center text-amber-600"></i>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">더 궁금한 점이 있으신가요?</h3>
            <p className="text-sm text-gray-600 mb-4">
              FAQ에서 답을 찾지 못하셨다면 고객지원팀에 문의해주세요.
            </p>
            <button className="w-full bg-amber-600 text-white py-3 rounded-xl font-medium hover:bg-amber-700 transition-colors">
              고객지원 문의하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
