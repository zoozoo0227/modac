
import { useNavigate } from 'react-router-dom';

const Privacy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="flex items-center justify-between px-4 py-3">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-gray-800"
          >
            <i className="ri-arrow-left-line text-xl"></i>
          </button>
          <h1 className="text-lg font-semibold text-gray-900">개인정보 처리방침</h1>
          <div className="w-10"></div>
        </div>
      </div>

      {/* Content */}
      <div className="pt-16 pb-6 px-4">
        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          
          {/* 개인정보 처리방침 개요 */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">개인정보 처리방침</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              PlaceApp은 개인정보보호법에 따라 이용자의 개인정보 보호 및 권익을 보호하고 개인정보와 관련한 이용자의 고충을 원활하게 처리할 수 있도록 다음과 같은 처리방침을 두고 있습니다.
            </p>
            <p className="text-xs text-gray-500">
              최근 업데이트: 2024년 1월 15일
            </p>
          </div>

          {/* 수집하는 개인정보 항목 */}
          <div className="border-t pt-6">
            <h3 className="text-base font-semibold text-gray-900 mb-3">1. 수집하는 개인정보의 항목</h3>
            <div className="space-y-3">
              <div>
                <h4 className="text-sm font-medium text-gray-800 mb-2">필수 정보</h4>
                <ul className="text-sm text-gray-600 space-y-1 ml-4">
                  <li>• 이메일 주소</li>
                  <li>• 닉네임</li>
                  <li>• 프로필 사진 (선택)</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-800 mb-2">자동 수집 정보</h4>
                <ul className="text-sm text-gray-600 space-y-1 ml-4">
                  <li>• 위치 정보 (사용자 동의 시)</li>
                  <li>• 앱 사용 로그</li>
                  <li>• 기기 정보 (OS, 버전 등)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 개인정보의 처리 목적 */}
          <div className="border-t pt-6">
            <h3 className="text-base font-semibold text-gray-900 mb-3">2. 개인정보의 처리 목적</h3>
            <ul className="text-sm text-gray-600 space-y-2 ml-4">
              <li>• 회원 가입 및 관리</li>
              <li>• 서비스 제공 및 운영</li>
              <li>• 맞춤형 장소 추천</li>
              <li>• 고객 지원 및 문의 응답</li>
              <li>• 서비스 개선 및 통계 분석</li>
            </ul>
          </div>

          {/* 개인정보의 보유 및 이용기간 */}
          <div className="border-t pt-6">
            <h3 className="text-base font-semibold text-gray-900 mb-3">3. 개인정보의 보유 및 이용기간</h3>
            <div className="text-sm text-gray-600 space-y-2">
              <p>• 회원 탈퇴 시까지 보유</p>
              <p>• 탈퇴 후 30일 이내 완전 삭제</p>
              <p>• 법령에 따른 보존 의무가 있는 경우 해당 기간까지 보관</p>
            </div>
          </div>

          {/* 개인정보의 제3자 제공 */}
          <div className="border-t pt-6">
            <h3 className="text-base font-semibold text-gray-900 mb-3">4. 개인정보의 제3자 제공</h3>
            <p className="text-sm text-gray-600">
              PlaceApp은 원칙적으로 이용자의 개인정보를 외부에 제공하지 않습니다. 다만, 다음의 경우에는 예외로 합니다:
            </p>
            <ul className="text-sm text-gray-600 space-y-1 mt-2 ml-4">
              <li>• 이용자가 사전에 동의한 경우</li>
              <li>• 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
            </ul>
          </div>

          {/* 개인정보처리 위탁 */}
          <div className="border-t pt-6">
            <h3 className="text-base font-semibold text-gray-900 mb-3">5. 개인정보처리 위탁</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-800">위탁업체</span>
                  <span className="font-medium text-gray-800">위탁업무</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">AWS</span>
                  <span className="text-gray-600">서버 운영 및 관리</span>
                </div>
              </div>
            </div>
          </div>

          {/* 정보주체의 권리 */}
          <div className="border-t pt-6">
            <h3 className="text-base font-semibold text-gray-900 mb-3">6. 정보주체의 권리·의무 및 행사방법</h3>
            <p className="text-sm text-gray-600 mb-3">
              이용자는 개인정보주체로서 다음과 같은 권리를 행사할 수 있습니다:
            </p>
            <ul className="text-sm text-gray-600 space-y-1 ml-4">
              <li>• 개인정보 처리정지 요구권</li>
              <li>• 개인정보 열람요구권</li>
              <li>• 개인정보 정정·삭제요구권</li>
              <li>• 개인정보 처리정지 요구권</li>
            </ul>
          </div>

          {/* 개인정보 보호책임자 */}
          <div className="border-t pt-6">
            <h3 className="text-base font-semibold text-gray-900 mb-3">7. 개인정보 보호책임자</h3>
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="text-sm space-y-2">
                <div>
                  <span className="font-medium text-gray-800">개인정보 보호책임자: </span>
                  <span className="text-gray-600">김개인</span>
                </div>
                <div>
                  <span className="font-medium text-gray-800">연락처: </span>
                  <span className="text-gray-600">privacy@placeapp.com</span>
                </div>
                <div>
                  <span className="font-medium text-gray-800">전화: </span>
                  <span className="text-gray-600">02-1234-5678</span>
                </div>
              </div>
            </div>
          </div>

          {/* 개인정보 처리방침 변경 */}
          <div className="border-t pt-6">
            <h3 className="text-base font-semibold text-gray-900 mb-3">8. 개인정보 처리방침의 변경</h3>
            <p className="text-sm text-gray-600">
              이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
            </p>
          </div>

        </div>

        {/* 법적 정보 섹션 */}
        <section className="mt-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
            <h2 className="text-base font-semibold text-gray-800 mb-4">법적 정보</h2>
            <div className="space-y-3">
              
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

              <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 transition-colors border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <i className="ri-copyright-line w-4 h-4 flex items-center justify-center text-green-600"></i>
                  </div>
                  <span className="text-sm font-medium text-gray-800">오픈소스 라이센스</span>
                </div>
                <i className="ri-arrow-right-s-line w-5 h-5 flex items-center justify-center text-gray-400"></i>
              </button>

              <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                    <i className="ri-shield-check-line w-4 h-4 flex items-center justify-center text-orange-600"></i>
                  </div>
                  <span className="text-sm font-medium text-gray-800">데이터 보안 정책</span>
                </div>
                <i className="ri-arrow-right-s-line w-5 h-5 flex items-center justify-center text-gray-400"></i>
              </button>

            </div>
          </div>
        </section>

        {/* 문의하기 버튼 */}
        <div className="mt-6">
          <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700">
            개인정보 관련 문의하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
