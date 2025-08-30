import { useState } from 'react';
import BottomNavigation from '../../components/feature/BottomNavigation';

interface Review {
  id: number;
  user: {
    name: string;
    avatar: string;
    level: number;
  };
  place: {
    name: string;
    category: string;
    address: string;
    city: string;
    district: string;
    neighborhood: string;
  };
  rating: number;
  content: string;
  images: string[];
  tags: string[];
  time: string;
  likes: number;
  replies: Reply[];
  isLiked: boolean;
}

interface Reply {
  id: number;
  user: {
    name: string;
    avatar: string;
  };
  content: string;
  time: string;
  likes: number;
  isLiked: boolean;
}

interface FilterState {
  city: string;
  district: string;
  neighborhood: string;
  category: string;
}

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: 1,
      user: {
        name: '카페탐험가',
        avatar: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20photo%20of%20young%20Asian%20woman%20coffee%20enthusiast%2C%20warm%20smile%2C%20casual%20trendy%20style%2C%20natural%20lighting%2C%20friendly%20expression&width=100&height=100&seq=reviewer1&orientation=squarish',
        level: 3
      },
      place: {
        name: '블루보틀 커피 성수점',
        category: '카페',
        address: '서울시 성동구 성수동1가 13-5',
        city: '서울시',
        district: '성동구',
        neighborhood: '성수동1가'
      },
      rating: 4.5,
      content: '성수동의 핫플레이스 중 하나예요! 원두 퀄리티가 정말 좋고, 특히 핸드드립 커피가 일품입니다. 인테리어도 모던하고 깔끔해서 사진 찍기도 좋아요. 다만 주말에는 사람이 많아서 자리 잡기가 어려울 수 있어요.',
      images: [
        'https://readdy.ai/api/search-image?query=Modern%20industrial%20coffee%20shop%20interior%20with%20exposed%20brick%20walls%2C%20wooden%20tables%2C%20professional%20coffee%20equipment%2C%20warm%20ambient%20lighting%2C%20trendy%20cafe%20atmosphere&width=400&height=300&seq=review1img1&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Professional%20latte%20art%20coffee%20in%20ceramic%20cup%2C%20beautiful%20foam%20design%2C%20wooden%20table%20background%2C%20natural%20lighting%2C%20instagram%20worthy%20coffee%20photo&width=300&height=300&seq=review1img2&orientation=squarish'
      ],
      tags: ['핸드드립', '인스타감성', '모던인테리어'],
      time: '2시간 전',
      likes: 12,
      replies: [
        {
          id: 1,
          user: {
            name: '커피마니아',
            avatar: 'https://readdy.ai/api/search-image?query=Young%20Asian%20man%20coffee%20lover%20portrait%2C%20glasses%2C%20friendly%20smile%2C%20casual%20style&width=50&height=50&seq=replier1&orientation=squarish'
          },
          content: '저도 여기 자주 가는데 정말 좋죠! 바리스타분들도 친절하시고',
          time: '1시간 전',
          likes: 3,
          isLiked: false
        }
      ],
      isLiked: false
    },
    {
      id: 2,
      user: {
        name: '맛집헌터',
        avatar: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20photo%20of%20young%20Asian%20man%20food%20blogger%2C%20confident%20smile%2C%20modern%20casual%20outfit%2C%20warm%20lighting&width=100&height=100&seq=reviewer2&orientation=squarish',
        level: 5
      },
      place: {
        name: '미쉐린 가이드 한식당',
        category: '음식점',
        address: '서울시 강남구 청담동 123-45',
        city: '서울시',
        district: '강남구',
        neighborhood: '청담동'
      },
      rating: 5.0,
      content: '드디어 미쉐린 가이드에 소개된 한식당에 다녀왔습니다! 전통 한식의 정수를 느낄 수 있는 곳이에요. 특히 갈비찜이 정말 부드럽고 맛있었어요. 가격대는 있지만 특별한 날에 방문하기 좋습니다.',
      images: [
        'https://readdy.ai/api/search-image?query=Elegant%20Korean%20traditional%20restaurant%20interior%20with%20wooden%20furniture%2C%20warm%20lighting%2C%20premium%20dining%20atmosphere%2C%20sophisticated%20design&width=400&height=300&seq=review2img1&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Premium%20Korean%20braised%20short%20ribs%20galbi-jjim%20beautifully%20plated%2C%20garnished%20vegetables%2C%20traditional%20ceramic%20dishes%2C%20fine%20dining%20presentation&width=300&height=300&seq=review2img2&orientation=squarish'
      ],
      tags: ['미쉐린가이드', '전통한식', '특별한날'],
      time: '5시간 전',
      likes: 28,
      replies: [
        {
          id: 2,
          user: {
            name: '한식러버',
            avatar: 'https://readdy.ai/api/search-image?query=Young%20Asian%20woman%20traditional%20food%20enthusiast%2C%20warm%20smile%2C%20elegant%20style&width=50&height=50&seq=replier2&orientation=squarish'
          },
          content: '와 여기 정말 가보고 싶었는데! 예약하기 어렵다던데 어떻게 하셨나요?',
          time: '3시간 전',
          likes: 5,
          isLiked: true
        },
        {
          id: 3,
          user: {
            name: '미식가',
            avatar: 'https://readdy.ai/api/search-image?query=Young%20Asian%20man%20food%20connoisseur%2C%20sophisticated%20style%2C%20confident%20expression&width=50&height=50&seq=replier3&orientation=squarish'
          },
          content: '한 달 전에 미리 예약해야 해요. 그래도 정말 갈 만한 가치가 있습니다!',
          time: '2시간 전',
          likes: 2,
          isLiked: false
        }
      ],
      isLiked: true
    },
    {
      id: 3,
      user: {
        name: '영화광',
        avatar: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20photo%20of%20young%20Asian%20woman%20movie%20enthusiast%2C%20stylish%20glasses%2C%20trendy%20outfit%2C%20warm%20lighting&width=100&height=100&seq=reviewer3&orientation=squarish',
        level: 4
      },
      place: {
        name: 'CGV 용산 아이파크몰',
        category: '영화관',
        address: '서울시 용산구 한강로동 40-999',
        city: '서울시',
        district: '용산구',
        neighborhood: '한강로동'
      },
      rating: 4.0,
      content: 'IMAX관에서 액션 영화를 봤는데 정말 대박이었어요! 사운드 시스템이 완전 좋고 스크린도 엄청 커서 몰입도가 장난 아니에요. 팝콘도 갓 만든 걸로 주시고, 좌석도 편안했어요. 주차도 편리해서 자주 올 것 같아요.',
      images: [
        'https://readdy.ai/api/search-image?query=Modern%20IMAX%20movie%20theater%20interior%20with%20huge%20screen%2C%20premium%20leather%20seats%2C%20dramatic%20ambient%20lighting%2C%20cinematic%20atmosphere&width=400&height=300&seq=review3img1&orientation=landscape'
      ],
      tags: ['IMAX', '주차편리', '사운드최고'],
      time: '1일 전',
      likes: 15,
      replies: [],
      isLiked: false
    }
  ]);

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);
  const [isRepliesOpen, setIsRepliesOpen] = useState(false);
  const [newReply, setNewReply] = useState('');
  const [filters, setFilters] = useState<FilterState>({
    city: '',
    district: '',
    neighborhood: '',
    category: ''
  });

  const cities = ['서울시', '경기도', '인천시', '부산시', '대구시', '광주시', '대전시', '울산시'];
  const districts = {
    '서울시': ['강남구', '강동구', '강북구', '강서구', '관악구', '광진구', '구로구', '금천구', '노원구', '도봉구', '동대문구', '동작구', '마포구', '서대문구', '서초구', '성동구', '성북구', '송파구', '양천구', '영등포구', '용산구', '은평구', '종로구', '중구', '중랑구'],
    '경기도': ['수원시', '성남시', '고양시', '용인시', '부천시', '안산시', '안양시', '남양주시', '화성시', '평택시']
  };
  const categories = ['전체', '카페', '음식점', '영화관', '병원', '문화시설', '쇼핑'];

  const toggleLike = (reviewId: number) => {
    setReviews(prevReviews =>
      prevReviews.map(review =>
        review.id === reviewId
          ? {
              ...review,
              isLiked: !review.isLiked,
              likes: review.isLiked ? review.likes - 1 : review.likes + 1
            }
          : review
      )
    );
  };

  const toggleReplyLike = (reviewId: number, replyId: number) => {
    setReviews(prevReviews =>
      prevReviews.map(review =>
        review.id === reviewId
          ? {
              ...review,
              replies: review.replies.map(reply =>
                reply.id === replyId
                  ? {
                      ...reply,
                      isLiked: !reply.isLiked,
                      likes: reply.isLiked ? reply.likes - 1 : reply.likes + 1
                    }
                  : reply
              )
            }
          : review
      )
    );
  };

  const openReplies = (review: Review) => {
    setSelectedReview(review);
    setIsRepliesOpen(true);
  };

  const closeReplies = () => {
    setIsRepliesOpen(false);
    setSelectedReview(null);
    setNewReply('');
  };

  const addReply = () => {
    if (!newReply.trim() || !selectedReview) return;

    const newReplyObj: Reply = {
      id: Date.now(),
      user: {
        name: '김모닥',
        avatar: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20photo%20of%20young%20Asian%20person%20smiling%2C%20modern%20casual%20style%2C%20warm%20lighting%2C%20friendly%20expression&width=50&height=50&seq=currentuser&orientation=squarish'
      },
      content: newReply.trim(),
      time: '방금 전',
      likes: 0,
      isLiked: false
    };

    setReviews(prevReviews =>
      prevReviews.map(review =>
        review.id === selectedReview.id
          ? { ...review, replies: [...review.replies, newReplyObj] }
          : review
      )
    );

    const updatedReview = { ...selectedReview, replies: [...selectedReview.replies, newReplyObj] };
    setSelectedReview(updatedReview);
    setNewReply('');
  };

  const applyFilters = () => {
    // Filter logic would be implemented here
    setIsFilterOpen(false);
  };

  const clearFilters = () => {
    setFilters({
      city: '',
      district: '',
      neighborhood: '',
      category: ''
    });
  };

  const filteredReviews = reviews.filter(review => {
    if (filters.city && review.place.city !== filters.city) return false;
    if (filters.district && review.place.district !== filters.district) return false;
    if (filters.neighborhood && review.place.neighborhood !== filters.neighborhood) return false;
    if (filters.category && filters.category !== '전체' && review.place.category !== filters.category) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 bg-white shadow-sm z-30">
        <div className="flex items-center justify-between px-4 py-3">
          <h1 className="text-lg font-semibold text-gray-800">Reviews</h1>
          <button
            onClick={() => setIsFilterOpen(true)}
            className="p-2 text-gray-600 hover:text-amber-600"
          >
            <i className="ri-filter-line w-6 h-6 flex items-center justify-center"></i>
          </button>
        </div>

        {/* Active Filters */}
        {(filters.city || filters.district || filters.neighborhood || filters.category) && (
          <div className="px-4 pb-3">
            <div className="flex items-center gap-2 flex-wrap">
              {filters.city && (
                <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full">
                  {filters.city}
                </span>
              )}
              {filters.district && (
                <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full">
                  {filters.district}
                </span>
              )}
              {filters.neighborhood && (
                <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full">
                  {filters.neighborhood}
                </span>
              )}
              {filters.category && filters.category !== '전체' && (
                <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full">
                  {filters.category}
                </span>
              )}
              <button
                onClick={clearFilters}
                className="text-xs text-gray-500 hover:text-gray-700 ml-2"
              >
                Clear all
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Reviews List */}
      <div className="pt-20 pb-20">
        <div className="space-y-0">
          {filteredReviews.map((review) => (
            <div key={review.id} className="bg-white border-b border-gray-100">
              {/* Review Header */}
              <div className="flex items-start px-4 py-4">
                <img
                  src={review.user.avatar}
                  alt={review.user.name}
                  className="w-12 h-12 rounded-full object-cover object-top flex-shrink-0"
                />
                <div className="ml-3 flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-gray-800 text-sm">{review.user.name}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      review.user.level >= 5 ? 'bg-yellow-100 text-yellow-700' :
                      review.user.level >= 3 ? 'bg-blue-100 text-blue-700' :
                      'bg-gray-100 text-gray-600'
                    }`}>
                      Level {review.user.level}
                    </span>
                    <span className="text-xs text-gray-500">{review.time}</span>
                  </div>
                  
                  <div className="mb-2">
                    <h3 className="font-medium text-gray-800 text-sm">{review.place.name}</h3>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="text-xs text-amber-600">{review.place.category}</span>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-xs text-gray-500">{review.place.district} {review.place.neighborhood}</span>
                    </div>
                  </div>

                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <i
                        key={i}
                        className={`w-4 h-4 flex items-center justify-center ${
                          i < Math.floor(review.rating)
                            ? 'ri-star-fill text-amber-400'
                            : i < review.rating
                            ? 'ri-star-half-fill text-amber-400'
                            : 'ri-star-line text-gray-300'
                        }`}
                      ></i>
                    ))}
                    <span className="text-sm font-medium text-gray-700 ml-2">{review.rating}</span>
                  </div>
                </div>
              </div>

              {/* Review Content */}
              <div className="px-4 pb-3">
                <p className="text-gray-800 text-sm leading-relaxed mb-3">{review.content}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {review.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Review Images */}
              {review.images.length > 0 && (
                <div className="px-4 pb-3">
                  <div className={`grid gap-2 ${
                    review.images.length === 1 ? 'grid-cols-1' : 'grid-cols-2'
                  }`}>
                    {review.images.map((image, index) => (
                      <div
                        key={index}
                        className={`${
                          review.images.length === 1 ? 'aspect-video' : 'aspect-square'
                        } rounded-lg overflow-hidden`}
                      >
                        <img
                          src={image}
                          alt={`Review image ${index + 1}`}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Review Actions */}
              <div className="px-4 py-3 border-t border-gray-50">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => toggleLike(review.id)}
                    className="flex items-center transition-colors"
                  >
                    <i className={`w-5 h-5 flex items-center justify-center mr-2 transition-colors ${
                      review.isLiked ? 'ri-heart-fill text-red-500' : 'ri-heart-line text-gray-600 hover:text-red-500'
                    }`}></i>
                    <span className="text-sm text-gray-800">{review.likes}</span>
                  </button>
                  
                  <button
                    onClick={() => openReplies(review)}
                    className="flex items-center transition-colors hover:text-amber-600"
                  >
                    <i className="ri-chat-3-line w-5 h-5 flex items-center justify-center text-gray-600 mr-2"></i>
                    <span className="text-sm text-gray-800">{review.replies.length}</span>
                  </button>
                  
                  <button className="ml-auto transition-colors hover:text-amber-600">
                    <i className="ri-share-line w-5 h-5 flex items-center justify-center text-gray-600"></i>
                  </button>
                </div>

                {/* Replies Preview */}
                {review.replies.length > 0 && (
                  <div className="mt-3 pl-4 border-l-2 border-gray-100">
                    <button
                      onClick={() => openReplies(review)}
                      className="text-xs text-gray-500 hover:text-gray-700 mb-2 block"
                    >
                      View all {review.replies.length} replies
                    </button>
                    <div className="flex items-start gap-2">
                      <img
                        src={review.replies[0].user.avatar}
                        alt={review.replies[0].user.name}
                        className="w-6 h-6 rounded-full object-cover object-top flex-shrink-0"
                      />
                      <div>
                        <span className="text-xs font-medium text-gray-800">{review.replies[0].user.name}</span>
                        <p className="text-xs text-gray-700 mt-1">{review.replies[0].content}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredReviews.length === 0 && (
          <div className="flex flex-col items-center justify-center py-12 text-gray-500">
            <i className="ri-search-line w-12 h-12 flex items-center justify-center mb-2 text-gray-300"></i>
            <p className="text-sm">No reviews match your filters</p>
            <button
              onClick={clearFilters}
              className="text-sm text-amber-600 hover:text-amber-700 mt-2"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      {/* Filter Modal */}
      {isFilterOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
          <div className="bg-white w-full rounded-t-3xl max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800">Filters</h3>
              <button onClick={() => setIsFilterOpen(false)} className="p-2 text-gray-500">
                <i className="ri-close-line w-6 h-6 flex items-center justify-center"></i>
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Category Filter */}
              <div>
                <h4 className="text-sm font-medium text-gray-600 mb-3">Category</h4>
                <div className="grid grid-cols-2 gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setFilters({...filters, category})}
                      className={`p-3 rounded-xl border text-sm transition-all ${
                        filters.category === category
                          ? 'border-amber-400 bg-amber-50 text-amber-700'
                          : 'border-gray-200 bg-white text-gray-600'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* City Filter */}
              <div>
                <h4 className="text-sm font-medium text-gray-600 mb-3">City</h4>
                <div className="grid grid-cols-2 gap-2">
                  {cities.map((city) => (
                    <button
                      key={city}
                      onClick={() => setFilters({...filters, city, district: '', neighborhood: ''})}
                      className={`p-3 rounded-xl border text-sm transition-all ${
                        filters.city === city
                          ? 'border-amber-400 bg-amber-50 text-amber-700'
                          : 'border-gray-200 bg-white text-gray-600'
                      }`}
                    >
                      {city}
                    </button>
                  ))}
                </div>
              </div>

              {/* District Filter */}
              {filters.city && districts[filters.city as keyof typeof districts] && (
                <div>
                  <h4 className="text-sm font-medium text-gray-600 mb-3">District</h4>
                  <div className="grid grid-cols-2 gap-2 max-h-40 overflow-y-auto">
                    {districts[filters.city as keyof typeof districts].map((district) => (
                      <button
                        key={district}
                        onClick={() => setFilters({...filters, district, neighborhood: ''})}
                        className={`p-3 rounded-xl border text-sm transition-all ${
                          filters.district === district
                            ? 'border-amber-400 bg-amber-50 text-amber-700'
                            : 'border-gray-200 bg-white text-gray-600'
                        }`}
                      >
                        {district}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex gap-3">
                <button
                  onClick={clearFilters}
                  className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors"
                >
                  Clear All
                </button>
                <button
                  onClick={applyFilters}
                  className="flex-1 py-3 bg-amber-500 text-white rounded-xl font-medium hover:bg-amber-600 transition-colors"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Replies Modal */}
      {isRepliesOpen && selectedReview && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end justify-center">
          <div className="bg-white w-full max-h-[80vh] rounded-t-2xl shadow-xl overflow-hidden">
            {/* Replies Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800">Replies</h3>
              <button onClick={closeReplies} className="p-1 text-gray-500">
                <i className="ri-close-line w-6 h-6 flex items-center justify-center"></i>
              </button>
            </div>

            {/* Replies List */}
            <div className="flex-1 overflow-y-auto max-h-96 px-4">
              {selectedReview.replies.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-gray-500">
                  <i className="ri-chat-3-line w-12 h-12 flex items-center justify-center mb-2 text-gray-300"></i>
                  <p className="text-sm">No replies yet</p>
                  <p className="text-xs mt-1">Be the first to reply!</p>
                </div>
              ) : (
                <div className="space-y-4 py-4">
                  {selectedReview.replies.map((reply) => (
                    <div key={reply.id} className="flex gap-3">
                      <img
                        src={reply.user.avatar}
                        alt={reply.user.name}
                        className="w-8 h-8 rounded-full object-cover object-top flex-shrink-0"
                      />
                      <div className="flex-1">
                        <div className="bg-gray-100 rounded-2xl px-3 py-2">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium text-gray-800 text-sm">{reply.user.name}</span>
                            <span className="text-xs text-gray-500">{reply.time}</span>
                          </div>
                          <p className="text-sm text-gray-700">{reply.content}</p>
                        </div>
                        <div className="flex items-center gap-4 mt-2 ml-3">
                          <button
                            onClick={() => toggleReplyLike(selectedReview.id, reply.id)}
                            className="flex items-center gap-1 text-xs text-gray-500 hover:text-red-500"
                          >
                            <i className={`w-4 h-4 flex items-center justify-center ${
                              reply.isLiked ? 'ri-heart-fill text-red-500' : 'ri-heart-line'
                            }`}></i>
                            {reply.likes > 0 && <span>{reply.likes}</span>}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Reply Input */}
            <div className="border-t border-gray-100 p-4">
              <div className="flex items-center gap-3">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20portrait%20photo%20of%20young%20Asian%20person%20smiling%2C%20modern%20casual%20style%2C%20warm%20lighting%2C%20friendly%20expression&width=50&height=50&seq=currentuser&orientation=squarish"
                  alt="Current User"
                  className="w-8 h-8 rounded-full object-cover object-top flex-shrink-0"
                />
                <div className="flex-1 flex items-center gap-2">
                  <input
                    type="text"
                    value={newReply}
                    onChange={(e) => setNewReply(e.target.value)}
                    placeholder="Write a reply..."
                    className="flex-1 px-3 py-2 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 border-none"
                    onKeyPress={(e) => e.key === 'Enter' && addReply()}
                  />
                  <button
                    onClick={addReply}
                    disabled={!newReply.trim()}
                    className={`p-2 rounded-full transition-colors ${
                      newReply.trim()
                        ? 'bg-amber-500 text-white hover:bg-amber-600'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    <i className="ri-send-plane-line w-4 h-4 flex items-center justify-center"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <BottomNavigation />
    </div>
  );
}