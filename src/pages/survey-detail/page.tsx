import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { surveys } from '../../mocks/surveys';

interface Question {
  id: number;
  question: string;
  options: string[];
  type: 'single' | 'multiple';
}

interface SurveyData {
  [key: number]: Question[];
}

const surveyQuestions: SurveyData = {
  1: [ // 완벽한 데이트 장소
    {
      id: 1,
      question: "주말 저녁, 연인과 시간을 보낸다면?",
      options: ["조용한 카페에서 대화", "활기찬 펜트하우스 바", "집에서 영화 감상", "야경이 예쁜 한강공원"],
      type: 'single'
    },
    {
      id: 2,
      question: "데이트 음식으로 가장 끌리는 것은?",
      options: ["고급 레스토랑 코스요리", "길거리 음식 투어", "홈메이드 요리", "이색적인 퓨전음식"],
      type: 'single'
    },
    {
      id: 3,
      question: "연인과의 대화 주제로 선호하는 것은?",
      options: ["미래 계획과 꿈", "일상적인 소소한 이야기", "취미와 관심사", "철학적인 깊은 대화"],
      type: 'single'
    }
  ],
  2: [ // 혼자 시간 보내기
    {
      id: 1,
      question: "혼자만의 시간에 가장 하고 싶은 것은?",
      options: ["독서나 공부", "영화/드라마 몰아보기", "취미 활동", "명상이나 휴식"],
      type: 'single'
    },
    {
      id: 2,
      question: "혼자 있을 때 선호하는 장소는?",
      options: ["집 안 아늑한 공간", "조용한 도서관", "자연이 있는 공원", "북적한 카페"],
      type: 'single'
    },
    {
      id: 3,
      question: "혼자 시간의 이상적인 길이는?",
      options: ["1-2시간 정도", "반나절", "하루 종일", "며칠간 지속"],
      type: 'single'
    }
  ],
  3: [ // 맛집 선택 기준
    {
      id: 1,
      question: "맛집을 선택할 때 가장 중요한 요소는?",
      options: ["음식의 맛", "가격 대비 만족도", "분위기와 인테리어", "접근성과 편의성"],
      type: 'single'
    },
    {
      id: 2,
      question: "새로운 맛집 정보는 주로 어디서?",
      options: ["SNS와 리뷰 사이트", "지인 추천", "직접 발품 팔기", "TV나 유튜브"],
      type: 'single'
    },
    {
      id: 3,
      question: "맛집에서 중요하게 생각하는 서비스는?",
      options: ["친절한 직원", "빠른 서비스", "세심한 배려", "자유로운 분위기"],
      type: 'single'
    }
  ],
  4: [ // 카페 취향
    {
      id: 1,
      question: "카페에서 가장 중요하게 생각하는 것은?",
      options: ["커피 맛과 품질", "디저트 종류", "인테리어와 분위기", "작업하기 좋은 환경"],
      type: 'single'
    },
    {
      id: 2,
      question: "선호하는 카페 분위기는?",
      options: ["미니멀하고 모던한", "빈티지하고 아늑한", "자연친화적인", "독특하고 개성있는"],
      type: 'single'
    },
    {
      id: 3,
      question: "카페에서 주로 하는 활동은?",
      options: ["업무나 공부", "친구와 수다", "독서나 사색", "SNS나 휴식"],
      type: 'single'
    }
  ],
  5: [ // 주말 나들이
    {
      id: 1,
      question: "이상적인 주말 오전은?",
      options: ["늦잠 자고 브런치", "일찍 일어나 운동", "산책이나 조깅", "집에서 여유롭게"],
      type: 'single'
    },
    {
      id: 2,
      question: "주말에 가고 싶은 곳은?",
      options: ["자연이 있는 교외", "문화시설이 많은 시내", "새로운 핫플레이스", "익숙하고 편안한 동네"],
      type: 'single'
    },
    {
      id: 3,
      question: "주말 활동의 목표는?",
      options: ["스트레스 해소", "새로운 경험", "인간관계 발전", "자기계발"],
      type: 'single'
    }
  ],
  6: [ // 서울 맛집 취향
    {
      id: 1,
      question: "한식 중에서 가장 좋아하는 음식은?",
      options: ["불고기, 갈비 등 고기 요리", "김치찌개, 된장찌개 등 국물 요리", "비빔밥, 잡채 등 채소 요리", "냉면, 국수 등 면 요리"],
      type: 'single'
    },
    {
      id: 2,
      question: "새로운 맛집을 시도할 때 기준은?",
      options: ["TV나 유명인 추천", "인스타그램 맛집 후기", "현지인들이 자주 가는 곳", "미슐랭 가이드나 전문 리뷰"],
      type: 'single'
    },
    {
      id: 3,
      question: "맛집에서 가장 중요한 것은?",
      options: ["정통 맛과 전통", "인스타 감성과 플레이팅", "푸짐한 양과 가성비", "독특하고 특별한 맛"],
      type: 'single'
    }
  ],
  7: [ // 문화생활 취향
    {
      id: 1,
      question: "문화생활로 가장 선호하는 것은?",
      options: ["영화관에서 최신 영화", "미술관, 박물관 관람", "콘서트, 뮤지컬 공연", "독서모임, 북토크"],
      type: 'single'
    },
    {
      id: 2,
      question: "문화 콘텐츠를 선택할 때 기준은?",
      options: ["장르와 스타일", "평점과 리뷰", "감독이나 작가", "친구들 추천"],
      type: 'single'
    },
    {
      id: 3,
      question: "문화생활을 통해 얻고 싶은 것은?",
      options: ["일상에서 벗어난 힐링", "새로운 지식과 영감", "감정적 몰입과 카타르시스", "사람들과의 대화 소재"],
      type: 'single'
    }
  ],
  8: [ // 쇼핑 스타일
    {
      id: 1,
      question: "쇼핑할 때 가장 중요한 요소는?",
      options: ["가격과 할인율", "브랜드와 품질", "디자인과 스타일", "실용성과 기능"],
      type: 'single'
    },
    {
      id: 2,
      question: "주로 쇼핑하는 방식은?",
      options: ["온라인에서 꼼꼼히 비교", "매장에서 직접 보고 구매", "세일 기간에 몰아서", "필요할 때마다 즉석에서"],
      type: 'single'
    },
    {
      id: 3,
      question: "쇼핑 후 가장 만족스러운 순간은?",
      options: ["좋은 가격에 득템했을 때", "마음에 쏙 드는 걸 찾았을 때", "다른 사람들에게 칭찬받을 때", "오래 쓸 수 있는 걸 샀을 때"],
      type: 'single'
    }
  ]
};

const surveyResults = {
  1: {
    "조용한 카페에서 대화고급 레스토랑 코스요리미래 계획과 꿈": {
      result: "로맨틱 정통파",
      description: "클래식하고 진중한 데이트를 선호하는 당신! 깊이 있는 대화와 품격 있는 분위기를 중시해요.",
      places: ["한강뷰 레스토랑", "북촌 한옥 카페", "예술의전당 근처 갤러리 카페"]
    },
    "활기찬 펜트하우스 바이색적인 퓨전음식취미와 관심사": {
      result: "트렌디 모던파",
      description: "새로운 트렌드와 독특한 경험을 추구하는 당신! 핫한 장소에서 특별한 시간을 보내고 싶어해요.",
      places: ["루프탑 바", "이태원 퓨전 레스토랑", "홍대 감성 펍"]
    }
  },
  2: {
    "독서나 공부집 안 아늑한 공간1-2시간 정도": {
      result: "집순이/집돌이형",
      description: "편안한 나만의 공간에서 보내는 시간을 가장 소중히 여기는 당신! 집이 최고의 힐링 공간이에요.",
      places: ["홈카페 꾸미기", "온라인 북클럽", "집 근처 조용한 도서관"]
    },
    "명상이나 휴식자연이 있는 공원하루 종일": {
      result: "자연 힐링형",
      description: "자연 속에서 마음의 평화를 찾는 당신! 도시의 소음에서 벗어나 진정한 휴식을 추구해요.",
      places: ["남산공원", "올림픽공원", "한강공원 피크닉존"]
    }
  },
  3: {
    "음식의 맛SNS와 리뷰 사이트친절한 직원": {
      result: "맛 추구형",
      description: "무엇보다 음식의 맛을 중시하는 당신! 진짜 맛집을 찾아내는 뛰어난 감각을 가지고 있어요.",
      places: ["현지인 맛집", "전통 한식당", "숨은 맛집"]
    },
    "분위기와 인테리어지인 추천세심한 배려": {
      result: "분위기 중시형",
      description: "음식뿐만 아니라 전체적인 식사 경험을 중요하게 생각하는 당신! 감성적인 식사를 좋아해요.",
      places: ["감성 카페", "루프탑 레스토랑", "인스타 핫플"]
    }
  },
  4: {
    "커피 맛과 품질미니멀하고 모던한업무나 공부": {
      result: "커피 전문가형",
      description: "진짜 좋은 커피를 아는 당신! 집중력을 높여주는 완벽한 카페 환경을 추구해요.",
      places: ["스페셜티 커피", "조용한 스터디 카페", "로스터리 카페"]
    },
    "인테리어와 분위기빈티지하고 아늑한친구와 수다": {
      result: "감성 카페러",
      description: "카페의 분위기와 감성을 중시하는 당신! 사진 찍기 좋고 대화하기 좋은 공간을 선호해요.",
      places: ["빈티지 카페", "감성 인테리어 카페", "루프탑 카페"]
    }
  },
  5: {
    "일찍 일어나 운동자연이 있는 교외새로운 경험": {
      result: "액티브 탐험가",
      description: "활동적이고 모험을 좋아하는 당신! 새로운 곳을 탐험하며 에너지를 충전해요.",
      places: ["등산로", "자전거 도로", "체험 관광지"]
    },
    "늦잠 자고 브런치익숙하고 편안한 동네스트레스 해소": {
      result: "여유로운 힐러",
      description: "느긋하고 편안한 휴식을 선호하는 당신! 재충전을 통해 평화로운 시간을 만끽해요.",
      places: ["브런치 카페", "동네 공원", "온천, 스파"]
    }
  },
  6: {
    "불고기, 갈비 등 고기 요리TV나 유명인 추천정통 맛과 전통": {
      result: "정통 한식 러버",
      description: "진짜 한국 음식의 맛을 아는 당신! 전통적이고 정통한 한식을 선호해요.",
      places: ["전통 한정식", "고기집", "현지인 맛집"]
    },
    "비빔밥, 잡채 등 채소 요리인스타그램 맛집 후기인스타 감성과 플레이팅": {
      result: "헬시 트렌디족",
      description: "건강하고 예쁜 음식을 좋아하는 당신! 트렌디하면서도 몸에 좋은 식사를 추구해요.",
      places: ["비건 레스토랑", "샐러드 전문점", "감성 한식당"]
    }
  },
  7: {
    "미술관, 박물관 관람감독이나 작가새로운 지식과 영감": {
      result: "문화 지식인",
      description: "깊이 있는 문화 체험을 즐기는 당신! 예술과 지식을 통해 내면을 풍요롭게 해요.",
      places: ["국립현대미술관", "예술의전당", "독립 서점"]
    },
    "콘서트, 뮤지컬 공연평점과 리뷰감정적 몰입과 카타르시스": {
      result: "감성 공연 매니아",
      description: "라이브 공연의 생생함을 사랑하는 당신! 감동과 여운이 긴 문화 경험을 선호해요.",
      places: ["세종문화회관", "홍대 라이브클럽", "소극장"]
    }
  },
  8: {
    "가격과 할인율온라인에서 꼼꼼히 비교좋은 가격에 득템했을 때": {
      result: "스마트 쇼퍼",
      description: "합리적이고 똑똑한 소비를 하는 당신! 가성비 최고의 쇼핑 전략을 가지고 있어요.",
      places: ["아울렛", "온라인 쇼핑몰", "할인매장"]
    },
    "브랜드와 품질매장에서 직접 보고 구매마음에 쏙 드는 걸 찾았을 때": {
      result: "품질 중시족",
      description: "좋은 물건을 오래 쓰는 것을 선호하는 당신! 품질과 만족도를 최우선으로 생각해요.",
      places: ["백화점", "브랜드 매장", "편집샵"]
    }
  }
} as const;

export default function SurveyDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const surveyId = parseInt(id || '1');
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [result, setResult] = useState<any>(null);
  
  const survey = surveys.find(s => s.id === surveyId);
  const questions = surveyQuestions[surveyId] || [];
  
  if (!survey) {
    return <div>설문을 찾을 수 없습니다.</div>;
  }

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // 설문 완료
      setIsCompleted(true);
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (finalAnswers: string[]) => {
    // 간단한 결과 계산 로직
    const answerKey = finalAnswers.join('');
    const surveyResultData = surveyResults[surveyId as keyof typeof surveyResults];
    
    if (surveyResultData) {
      const matchingResult = Object.entries(surveyResultData).find(([key]) => 
        answerKey.includes(key.slice(0, 10)) // 첫 번째 답변으로 매칭
      );
      
      if (matchingResult) {
        setResult(matchingResult[1]);
      } else {
        // 기본 결과
        setResult({
          result: "균형잡힌 타입",
          description: "다양한 상황에 잘 적응하는 균형잡힌 성향을 가지고 있어요!",
          places: ["다양한 장소 탐방", "새로운 경험 추구", "상황에 맞는 선택"]
        });
      }
    }
  };

  const resetSurvey = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setIsCompleted(false);
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-100">
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
          
          <button 
            onClick={() => navigate('/surveys')}
            className="p-2 text-gray-600 hover:text-gray-800"
          >
            <i className="ri-close-line w-6 h-6 flex items-center justify-center"></i>
          </button>
        </div>
      </div>

      <div className="pt-20 pb-8 px-4">
        {!isCompleted ? (
          <div className="max-w-md mx-auto">
            {/* Survey Header */}
            <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm">
              <div className="text-center mb-4">
                <img 
                  src={survey.image}
                  alt={survey.title}
                  className="w-20 h-20 rounded-full mx-auto mb-3 object-cover object-top"
                />
                <h2 className="text-xl font-bold text-gray-800 mb-2">{survey.title}</h2>
                <p className="text-sm text-gray-600">{survey.description}</p>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                <div 
                  className="bg-amber-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
              <p className="text-center text-sm text-gray-500">
                {currentQuestion + 1} / {questions.length}
              </p>
            </div>

            {/* Question */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-6 leading-relaxed">
                {questions[currentQuestion]?.question}
              </h3>
              
              <div className="space-y-3">
                {questions[currentQuestion]?.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option)}
                    className="w-full p-4 text-left rounded-xl border-2 border-gray-200 hover:border-amber-400 hover:bg-amber-50 transition-all group"
                  >
                    <div className="flex items-center">
                      <div className="w-6 h-6 rounded-full border-2 border-gray-300 group-hover:border-amber-500 mr-3 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-transparent group-hover:bg-amber-500"></div>
                      </div>
                      <span className="text-gray-700 group-hover:text-amber-700">{option}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-md mx-auto">
            {/* Result */}
            <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
              <div className="mb-6">
                <div className="w-20 h-20 bg-amber-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <i className="ri-trophy-line w-10 h-10 flex items-center justify-center text-amber-600"></i>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">테스트 완료!</h2>
                <div className="bg-amber-100 rounded-xl p-4 mb-4">
                  <h3 className="text-xl font-bold text-amber-800 mb-2">{result?.result}</h3>
                  <p className="text-sm text-amber-700">{result?.description}</p>
                </div>
              </div>

              {/* Recommended Places */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">추천 장소</h4>
                <div className="space-y-2">
                  {result?.places?.map((place: string, index: number) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-3">
                      <span className="text-sm text-gray-700">📍 {place}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={resetSurvey}
                  className="w-full py-3 bg-amber-500 text-white rounded-xl font-medium hover:bg-amber-600 transition-colors"
                >
                  다시 테스트하기
                </button>
                <button
                  onClick={() => navigate('/surveys')}
                  className="w-full py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors"
                >
                  다른 테스트 보기
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
