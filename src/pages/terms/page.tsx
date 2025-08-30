import { useNavigate } from 'react-router-dom';

const Terms = () => {
  const navigate = useNavigate();
  const [showAppInfo, setShowAppInfo] = useState(false);

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
          <h1 className="text-lg font-semibold text-gray-900">이용약관</h1>
          <div className="w-10"></div>
        </div>
      </div>

      {/* Content */}
      <div className="pt-16 pb-6 px-4">
        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          
          {/* 이용약관 개요 */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">PlaceApp 이용약관</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              본 약관은 PlaceApp(이하 "회사")에서 제공하는 모든 서비스의 이용조건 및 절차, 회사와 이용자의 권리, 의무, 책임사항과 기타 필요한 사항을 규정합니다.
            </p>
            <p className="text-xs text-gray-500">
              시행일자: 2024년 1월 15일
            </p>
          </div>

          {/* 제1조 목적 */}
          <div className="border-t pt-6">
            <h3 className="text-base font-semibold text-gray-900 mb-3">제1조 (목적)</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              본 약관은 PlaceApp이 제공하는 장소 검색, 추천, 리뷰 서비스 등을 이용함에 있어 회사와 이용자의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.
            </p>
          </div>

          {/* 제2조 정의 */}
          <div className="border-t pt-6">
            <h3 className="text-base font-semibold text-gray-900 mb-3">제2조 (정의)</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-600">
                  ① "서비스"라 함은 회사가 제공하는 PlaceApp 모바일 애플리케이션 및 관련 서비스 일체를 의미합니다.
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">
                  ② "이용자"라 함은 본 약관에 따라 회사가 제공하는 서비스를 받는 회원 및 비회원을 말합니다.
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">
                  ③ "회원"이라 함은 회사에 개인정보를 제공하여 회원등록을 한 자로서, 회사의 정보를 지속적으로 제공받으며, 회사가 제공하는 서비스를 계속적으로 이용할 수 있는 자를 말합니다.
                </p>
              </div>
            </div>
          </div>

          {/* 제3조 약관의 효력 및 변경 */}
          <div className="border-t pt-6">
            <h3 className="text-base font-semibold text-gray-900 mb-3">제3조 (약관의 효력 및 변경)</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-600">
                  ① 본 약관은 서비스 화면에 게시하거나 기타의 방법으로 회원에게 공지함으로써 효력을 발생합니다.
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">
                  ② 회사는 약관의 규제에 관한 법률, 정보통신망 이용촉진 및 정보보호 등에 관한 법률 등 관련법을 위배하지 않는 범위에서 본 약관을 개정할 수 있습니다.
                </p>
              </div>
            </div>
          </div>

          {/* 제4조 서비스의 제공 */}
          <div className="border-t pt-6">
            <h3 className="text-base font-semibold text-gray-900 mb-3">제4조 (서비스의 제공)</h3>
            <p className="text-sm text-gray-600 mb-3">회사는 다음과 같은 서비스를 제공합니다:</p>
            <ul className="text-sm text-gray-600 space-y-1 ml-4">
              <li>• 장소 검색 및 정보 제공 서비스</li>
              <li>• 개인화된 장소 추천 서비스</li>
              <li>• 사용자 리뷰 및 평점 서비스</li>
              <li>• 위치 기반 서비스</li>
              <li>• 기타 회사가 정하는 서비스</li>
            </ul>
          </div>

          {/* 제5조 회원가입 */}
          <div className="border-t pt-6">
            <h3 className="text-base font-semibold text-gray-900 mb-3">제5조 (회원가입)</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-600">
                  ① 이용자는 회사가 정한 가입 양식에 따라 회원정보를 기입한 후 본 약관에 동의한다는 의사표시를 함으로써 회원가입을 신청합니다.
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">
                  ② 회사는 제1항과 같이 회원으로 가입할 것을 신청한 이용자 중 다음 각 호에 해당하지 않는 한 회원으로 등록합니다.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 ml-4 mt-2">
                  <li>• 등록 내용에 허위, 기재누락, 오기가 있는 경우</li>
                  <li>• 기타 회원으로 등록하는 것이 회사의 기술상 현저히 지장이 있다고 판단되는 경우</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 제6조 회원정보의 변경 */}
          <div className="border-t pt-6">
            <h3 className="text-base font-semibold text-gray-900 mb-3">제6조 (회원정보의 변경)</h3>
            <p className="text-sm text-gray-600">
              회원은 개인정보관리화면을 통하여 언제든지 본인의 개인정보를 열람하고 수정할 수 있습니다. 다만, 서비스 관리를 위해 필요한 실명, 아이디 등은 수정이 불가능합니다.
            </p>
          </div>

          {/* 제7조 회원탈퇴 및 자격상실 */}
          <div className="border-t pt-6">
            <h3 className="text-base font-semibold text-gray-900 mb-3">제7조 (회원탈퇴 및 자격상실)</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-600">
                  ① 회원은 회사에 언제든지 탈퇴를 요청할 수 있으며 회사는 즉시 회원탈퇴를 처리합니다.
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">
                  ② 회원이 다음 각 호의 사유에 해당하는 경우, 회사는 회원자격을 제한 및 정지시킬 수 있습니다.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 ml-4 mt-2">
                  <li>• 가입 신청 시에 허위 내용을 등록한 경우</li>
                  <li>• 다른 사람의 서비스 이용을 방해하거나 그 정보를 도용하는 경우</li>
                  <li>• 서비스를 이용하여 법령 또는 본 약관이 금지하는 행위를 하는 경우</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 제8조 이용자의 의무 */}
          <div className="border-t pt-6">
            <h3 className="text-base font-semibold text-gray-900 mb-3">제8조 (이용자의 의무)</h3>
            <p className="text-sm text-gray-600 mb-3">이용자는 다음 행위를 하여서는 안 됩니다:</p>
            <ul className="text-sm text-gray-600 space-y-1 ml-4">
              <li>• 신청 또는 변경 시 허위내용의 등록</li>
              <li>• 타인의 정보 도용</li>
              <li>• 회사가 게시한 정보의 변경</li>
              <li>• 회사가 정한 정보 이외의 정보(컴퓨터 프로그램 등) 등의 송신 또는 게시</li>
              <li>• 회사 기타 제3자의 저작권 등 지적재산권에 대한 침해</li>
              <li>• 회사 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위</li>
            </ul>
          </div>

          {/* 제9조 저작권의 귀속 */}
          <div className="border-t pt-6">
            <h3 className="text-base font-semibold text-gray-900 mb-3">제9조 (저작권의 귀속)</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-600">
                  ① 회사가 작성한 저작물에 대한 저작권 기타 지적재산권은 회사에 귀속합니다.
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">
                  ② 이용자는 회사를 이용함으로써 얻은 정보 중 회사에게 지적재산권이 귀속된 정보를 회사의 사전 승낙 없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안 됩니다.
                </p>
              </div>
            </div>
          </div>

          {/* 제10조 손해배상 */}
          <div className="border-t pt-6">
            <h3 className="text-base font-semibold text-gray-900 mb-3">제10조 (손해배상)</h3>
            <p className="text-sm text-gray-600">
              회사는 무료로 제공되는 서비스와 관련하여 회원에게 어떠한 손해가 발생하더라도 동 손해가 회사의 고의 또는 중대한 과실에 의한 경우를 제외하고 이에 대하여 책임을 부담하지 아니합니다.
            </p>
          </div>

          {/* 부칙 */}
          <div className="border-t pt-6">
            <h3 className="text-base font-semibold text-gray-900 mb-3">부칙</h3>
            <p className="text-sm text-gray-600">
              본 약관은 2024년 1월 15일부터 적용됩니다.
            </p>
          </div>

        </div>

        {/* 동의 및 문의 버튼 */}
        <div className="mt-6 space-y-3">
          <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700">
            약관에 동의합니다
          </button>
          <button className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-50">
            약관 관련 문의하기
          </button>
        </div>

        {/* Additional Info Section */}
        <div className="mt-6 bg-white rounded-lg shadow-sm p-4">
          <h3 className="text-base font-semibold text-gray-900 mb-4">추가 정보</h3>
          
          <div className="space-y-3">
            <button 
              onClick={() => setShowAppInfo(true)}
              className="w-full flex items-center justify-between p-3 hover:bg-gray-50 transition-colors border-b border-gray-100"
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
        </div>
      </div>

      {/* App Info Modal */}
      {showAppInfo && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-sm w-full max-h-[80vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">앱 정보</h2>
              <button
                onClick={() => setShowAppInfo(false)}
                className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600"
              >
                <i className="ri-close-line text-xl"></i>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-4 space-y-6">
              {/* App Icon and Name */}
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <i className="ri-map-pin-line text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900" style={{fontFamily: "Pacifico, serif"}}>PlaceApp</h3>
                <p className="text-sm text-gray-500 mt-1">장소 발견의 새로운 방법</p>
              </div>

              {/* App Version Info */}
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-600">버전</span>
                  <span className="text-sm font-medium text-gray-900">1.2.5</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-600">출시일</span>
                  <span className="text-sm font-medium text-gray-900">2024.01.15</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-600">크기</span>
                  <span className="text-sm font-medium text-gray-900">45.2 MB</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-600">개발자</span>
                  <span className="text-sm font-medium text-gray-900">PlaceApp Team</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm text-gray-600">연령 등급</span>
                  <span className="text-sm font-medium text-gray-900">4+</span>
                </div>
              </div>

              {/* App Description */}
              <div className="space-y-3">
                <h4 className="text-base font-semibold text-gray-900">앱 소개</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  PlaceApp은 사용자가 새로운 장소를 발견하고, 개인화된 추천을 받으며, 다른 사용자들과 경험을 공유할 수 있는 혁신적인 플랫폼입니다. 
                  위치 기반 서비스를 통해 주변의 숨겨진 명소를 찾고, 실시간 리뷰와 평점을 확인할 수 있습니다.
                </p>
              </div>

              {/* Features */}
              <div className="space-y-3">
                <h4 className="text-base font-semibold text-gray-900">주요 기능</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <i className="ri-check-line text-green-500 text-sm mt-0.5"></i>
                    <span className="text-sm text-gray-600">실시간 장소 검색 및 추천</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-check-line text-green-500 text-sm mt-0.5"></i>
                    <span className="text-sm text-gray-600">사용자 리뷰 및 평점 시스템</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-check-line text-green-500 text-sm mt-0.5"></i>
                    <span className="text-sm text-gray-600">위치 기반 개인화 추천</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-check-line text-green-500 text-sm mt-0.5"></i>
                    <span className="text-sm text-gray-600">친구와의 장소 공유</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="ri-check-line text-green-500 text-sm mt-0.5"></i>
                    <span className="text-sm text-gray-600">즐겨찾기 및 저장 기능</span>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <h4 className="text-base font-semibold text-gray-900">연락처</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <i className="ri-mail-line text-gray-400"></i>
                    <span className="text-sm text-gray-600">support@placeapp.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <i className="ri-phone-line text-gray-400"></i>
                    <span className="text-sm text-gray-600">+82-2-1234-5678</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <i className="ri-global-line text-gray-400"></i>
                    <span className="text-sm text-gray-600">www.placeapp.com</span>
                  </div>
                </div>
              </div>

              {/* Copyright */}
              <div className="text-center pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-400">
                  © 2024 PlaceApp Team. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Terms;
