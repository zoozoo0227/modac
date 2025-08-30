import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { surveys } from '../../mocks/surveys';

export default function Surveys() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('전체');
  
  const categories = ['전체', '음식', '여행', '라이프스타일', '문화', '쇼핑', 'MBTI', '푸드'];
  
  const filteredSurveys = selectedCategory === '전체' 
    ? surveys 
    : surveys.filter(survey => survey.category === selectedCategory);

  const handleStartSurvey = (surveyId: number) => {
    navigate(`/survey/${surveyId}`);
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
          
          <h1 className="text-lg font-semibold text-gray-800">취향 테스트</h1>
          
          <button className="p-2 text-gray-600 hover:text-gray-800">
            <i className="ri-bookmark-line w-6 h-6 flex items-center justify-center"></i>
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
      <div className="pt-40 pb-20 px-4">
        <div className="space-y-4">
          {filteredSurveys.map((survey) => (
            <div key={survey.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="flex">
                <div className="w-28 h-28 flex-shrink-0">
                  <img 
                    src={survey.image}
                    alt={survey.title}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="flex-1 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full">
                      {survey.category}
                    </span>
                    <span className="text-xs text-gray-500">{survey.duration}</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2 text-sm leading-tight">{survey.title}</h3>
                  <p className="text-xs text-gray-600 mb-3 line-clamp-2">{survey.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs text-gray-500">
                      <i className="ri-user-line w-3 h-3 flex items-center justify-center mr-1"></i>
                      <span>{survey.participants.toLocaleString()}명 참여</span>
                    </div>
                    <button
                      onClick={() => handleStartSurvey(survey.id)}
                      className="bg-amber-500 text-white px-3 py-1.5 rounded-full text-xs font-medium hover:bg-amber-600 transition-colors"
                    >
                      시작하기
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredSurveys.length === 0 && (
          <div className="text-center py-12">
            <i className="ri-survey-line w-12 h-12 flex items-center justify-center text-gray-400 mx-auto mb-4"></i>
            <p className="text-gray-500">해당 카테고리의 테스트가 없습니다.</p>
          </div>
        )}
      </div>
    </div>
  );
}