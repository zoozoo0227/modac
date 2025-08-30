
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNavigation from '../../components/feature/BottomNavigation';

interface Comment {
  id: number;
  user: { name: string; avatar: string };
  content: string;
  time: string;
  likes: number;
  isLiked: boolean;
}

interface Post {
  id: number;
  user: { name: string; avatar: string };
  location: string;
  time: string;
  content: string;
  image: string;
  likes: number;
  comments: Comment[];
  isLiked: boolean;
  isBookmarked: boolean;
}

export default function Community() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('community');
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);
  const [newComment, setNewComment] = useState('');

  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      user: { 
        name: '커피러버', 
        avatar: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20photo%20of%20young%20Asian%20woman%20smiling%2C%20modern%20casual%20style%2C%20warm%20lighting%2C%20friendly%20expression%2C%20profile%20picture%20style&width=100&height=100&seq=user1&orientation=squarish' 
      },
      location: '홍대 블루보틀 커피',
      time: '2시간 전',
      content: '오늘 새로 발견한 카페! 분위기가 정말 좋고 원두도 맛있어요 ☕️ 특히 핸드드립 커피가 일품이에요. 친구들과 함께 오기 좋은 곳 같아요!',
      image: 'https://readdy.ai/api/search-image?query=Cozy%20modern%20cafe%20interior%20with%20professional%20barista%20making%20latte%20art%20coffee%2C%20warm%20ambient%20lighting%2C%20wooden%20tables%2C%20green%20plants%2C%20instagram-worthy%20coffee%20shop%20photo%2C%20aesthetic%20atmosphere%2C%20high%20quality&width=400&height=300&seq=post1&orientation=landscape',
      likes: 24,
      comments: [
        {
          id: 1,
          user: { name: '맛집탐험가', avatar: 'https://readdy.ai/api/search-image?query=Young%20Asian%20man%20casual%20portrait%2C%20friendly%20smile%2C%20modern%20style&width=50&height=50&seq=commenter1&orientation=squarish' },
          content: '저도 여기 가봤는데 정말 좋더라구요! 라떼 추천해요',
          time: '1시간 전',
          likes: 3,
          isLiked: false
        },
        {
          id: 2,
          user: { name: '카페여행자', avatar: 'https://readdy.ai/api/search-image?query=Young%20Asian%20woman%20trendy%20style%2C%20bright%20smile%2C%20casual%20outfit&width=50&height=50&seq=commenter2&orientation=squarish' },
          content: '와 분위기 너무 예뻐요! 다음에 꼭 가볼게요 😍',
          time: '30분 전',
          likes: 1,
          isLiked: true
        }
      ],
      isLiked: false,
      isBookmarked: false
    },
    {
      id: 2,
      user: { 
        name: '맛집탐험가', 
        avatar: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20photo%20of%20young%20Asian%20man%20smiling%2C%20casual%20modern%20outfit%2C%20natural%20lighting%2C%20friendly%20appearance%2C%20social%20media%20profile%20style&width=100&height=100&seq=user2&orientation=squarish' 
      },
      location: '강남 브루클린 더 버거',
      time: '5시간 전',
      content: '친구들과 함께 왔는데 버거가 정말 맛있어요! 특히 치즈가 진짜 👍 패티도 두툼하고 신선한 야채가 가득해서 너무 만족스러워요. 사이드로 나오는 감자튀김도 바삭바삭!',
      image: 'https://readdy.ai/api/search-image?query=Delicious%20gourmet%20burger%20with%20melted%20cheese%2C%20crispy%20golden%20fries%2C%20restaurant%20food%20photography%2C%20appetizing%20presentation%2C%20social%20media%20food%20post%20style%2C%20professional%20lighting&width=400&height=300&seq=post2&orientation=landscape',
      likes: 42,
      comments: [
        {
          id: 3,
          user: { name: '버거킹', avatar: 'https://readdy.ai/api/search-image?query=Young%20Asian%20man%20food%20blogger%20style%2C%20confident%20smile&width=50&height=50&seq=commenter3&orientation=squarish' },
          content: '여기 진짜 맛집이에요! 저도 단골인데 추천합니다',
          time: '3시간 전',
          likes: 5,
          isLiked: false
        }
      ],
      isLiked: true,
      isBookmarked: true
    },
    {
      id: 3,
      user: { 
        name: '영화마니아', 
        avatar: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20photo%20of%20young%20Asian%20woman%20with%20glasses%2C%20trendy%20style%2C%20bright%20smile%2C%20modern%20casual%20wear%2C%20profile%20picture%20aesthetic&width=100&height=100&seq=user3&orientation=squarish' 
      },
      location: 'CGV 강남 IMAX',
      time: '1일 전',
      content: 'IMAX로 본 영화 정말 대박이었어요! 몰입감이 장난 아니에요 🎬 특히 액션 씬에서는 정말 현장에 있는 것 같은 느낌이었어요. 사운드 시스템도 완전 최고!',
      image: 'https://readdy.ai/api/search-image?query=Modern%20IMAX%20movie%20theater%20interior%20with%20large%20screen%2C%20comfortable%20premium%20seats%2C%20cinematic%20atmosphere%2C%20entertainment%20venue%2C%20dramatic%20ambient%20lighting%2C%20luxury%20cinema%20experience&width=400&height=300&seq=post3&orientation=landscape',
      likes: 18,
      comments: [
        {
          id: 4,
          user: { name: '시네마러버', avatar: 'https://readdy.ai/api/search-image?query=Young%20Asian%20woman%20movie%20enthusiast%2C%20stylish%20glasses%2C%20warm%20smile&width=50&height=50&seq=commenter4&orientation=squarish' },
          content: '저도 IMAX 완전 좋아해요! 어떤 영화 보셨나요?',
          time: '20시간 전',
          likes: 2,
          isLiked: false
        },
        {
          id: 5,
          user: { name: '영화평론가', avatar: 'https://readdy.ai/api/search-image?query=Young%20Asian%20man%20intellectual%20style%2C%20thoughtful%20expression&width=50&height=50&seq=commenter5&orientation=squarish' },
          content: 'IMAX는 정말 다른 차원의 경험이죠. 후기 더 궁금해요!',
          time: '18시간 전',
          likes: 1,
          isLiked: true
        }
      ],
      isLiked: false,
      isBookmarked: false
    }
  ]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    if (tab === 'friends') {
      navigate('/friends');
    }
  };

  const toggleLike = (postId: number) => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId
          ? {
              ...post,
              isLiked: !post.isLiked,
              likes: post.isLiked ? post.likes - 1 : post.likes + 1
            }
          : post
      )
    );
  };

  const toggleBookmark = (postId: number) => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId
          ? { ...post, isBookmarked: !post.isBookmarked }
          : post
      )
    );
  };

  const openComments = (post: Post) => {
    setSelectedPost(post);
    setIsCommentsOpen(true);
  };

  const closeComments = () => {
    setIsCommentsOpen(false);
    setSelectedPost(null);
    setNewComment('');
  };

  const addComment = () => {
    if (!newComment.trim() || !selectedPost) return;

    const newCommentObj: Comment = {
      id: Date.now(),
      user: {
        name: '김모닥',
        avatar: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20photo%20of%20young%20Asian%20person%20smiling%2C%20modern%20casual%20style%2C%20warm%20lighting%2C%20friendly%20expression%2C%20high-quality%20profile%20picture&width=50&height=50&seq=currentuser&orientation=squarish'
      },
      content: newComment.trim(),
      time: '방금 전',
      likes: 0,
      isLiked: false
    };

    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === selectedPost.id
          ? { ...post, comments: [...post.comments, newCommentObj] }
          : post
      )
    );

    const updatedPost = { ...selectedPost, comments: [...selectedPost.comments, newCommentObj] };
    setSelectedPost(updatedPost);
    setNewComment('');
  };

  const toggleCommentLike = (commentId: number) => {
    if (!selectedPost) return;

    const updatedComments = selectedPost.comments.map(comment =>
      comment.id === commentId
        ? {
            ...comment,
            isLiked: !comment.isLiked,
            likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1
          }
        : comment
    );

    const updatedPost = { ...selectedPost, comments: updatedComments };
    setSelectedPost(updatedPost);

    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === selectedPost.id
          ? { ...post, comments: updatedComments }
          : post
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 bg-white shadow-sm z-30">
        <div className="flex items-center justify-between px-4 py-3">
          <h1 className="text-lg font-semibold text-gray-800">커뮤니티</h1>
          <button className="p-2 text-gray-600">
            <i className="ri-add-line w-6 h-6 flex items-center justify-center"></i>
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

      {/* Posts Feed */}
      <div className="pt-28 pb-20">
        <div className="space-y-0">
          {posts.map((post) => (
            <div key={post.id} className="bg-white border-b border-gray-100">
              {/* Post Header */}
              <div className="flex items-center px-4 py-3">
                <img 
                  src={post.user.avatar}
                  alt={post.user.name}
                  className="w-10 h-10 rounded-full object-cover object-top"
                />
                <div className="ml-3 flex-1">
                  <div className="flex items-center">
                    <span className="font-medium text-gray-800 text-sm">{post.user.name}</span>
                    <span className="text-xs text-gray-500 ml-2">{post.time}</span>
                  </div>
                  <div className="flex items-center mt-1">
                    <i className="ri-map-pin-line w-3 h-3 flex items-center justify-center text-amber-600 mr-1"></i>
                    <span className="text-xs text-amber-600">{post.location}</span>
                  </div>
                </div>
                <button className="p-2 text-gray-400">
                  <i className="ri-more-line w-5 h-5 flex items-center justify-center"></i>
                </button>
              </div>

              {/* Post Content */}
              <div className="px-4 pb-3">
                <p className="text-gray-800 text-sm leading-relaxed">{post.content}</p>
              </div>

              {/* Post Image */}
              <div className="aspect-square">
                <img 
                  src={post.image}
                  alt="Post"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Post Actions */}
              <div className="px-4 py-3">
                <div className="flex items-center gap-4 mb-2">
                  <button 
                    onClick={() => toggleLike(post.id)}
                    className="flex items-center transition-colors"
                  >
                    <i className={`w-6 h-6 flex items-center justify-center mr-2 transition-colors ${
                      post.isLiked ? 'ri-heart-fill text-red-500' : 'ri-heart-line text-gray-600 hover:text-red-500'
                    }`}></i>
                    <span className="text-sm text-gray-800">{post.likes}</span>
                  </button>
                  <button 
                    onClick={() => openComments(post)}
                    className="flex items-center transition-colors hover:text-amber-600"
                  >
                    <i className="ri-chat-3-line w-6 h-6 flex items-center justify-center text-gray-600 mr-2"></i>
                    <span className="text-sm text-gray-800">{post.comments.length}</span>
                  </button>
                  <button 
                    onClick={() => toggleBookmark(post.id)}
                    className="ml-auto transition-colors"
                  >
                    <i className={`w-6 h-6 flex items-center justify-center ${
                      post.isBookmarked ? 'ri-bookmark-fill text-amber-600' : 'ri-bookmark-line text-gray-600 hover:text-amber-600'
                    }`}></i>
                  </button>
                </div>
                
                {/* Comments Preview */}
                {post.comments.length > 0 && (
                  <div className="space-y-1">
                    <button 
                      onClick={() => openComments(post)}
                      className="text-xs text-gray-500 hover:text-gray-700"
                    >
                      댓글 {post.comments.length}개 모두 보기
                    </button>
                    <div className="flex items-start gap-2">
                      <span className="text-sm font-medium text-gray-800">{post.comments[0].user.name}</span>
                      <span className="text-sm text-gray-700 flex-1">{post.comments[0].content}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Comments Modal */}
      {isCommentsOpen && selectedPost && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end justify-center">
          <div className="bg-white w-full max-h-[80vh] rounded-t-2xl shadow-xl overflow-hidden">
            {/* Comments Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800">댓글</h3>
              <button onClick={closeComments} className="p-1 text-gray-500">
                <i className="ri-close-line w-6 h-6 flex items-center justify-center"></i>
              </button>
            </div>

            {/* Comments List */}
            <div className="flex-1 overflow-y-auto max-h-96 px-4">
              {selectedPost.comments.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-gray-500">
                  <i className="ri-chat-3-line w-12 h-12 flex items-center justify-center mb-2 text-gray-300"></i>
                  <p className="text-sm">아직 댓글이 없습니다</p>
                  <p className="text-xs mt-1">첫 번째 댓글을 작성해보세요!</p>
                </div>
              ) : (
                <div className="space-y-4 py-4">
                  {selectedPost.comments.map((comment) => (
                    <div key={comment.id} className="flex gap-3">
                      <img
                        src={comment.user.avatar}
                        alt={comment.user.name}
                        className="w-8 h-8 rounded-full object-cover object-top flex-shrink-0"
                      />
                      <div className="flex-1">
                        <div className="bg-gray-100 rounded-2xl px-3 py-2">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium text-gray-800 text-sm">{comment.user.name}</span>
                            <span className="text-xs text-gray-500">{comment.time}</span>
                          </div>
                          <p className="text-sm text-gray-700">{comment.content}</p>
                        </div>
                        <div className="flex items-center gap-4 mt-2 ml-3">
                          <button
                            onClick={() => toggleCommentLike(comment.id)}
                            className="flex items-center gap-1 text-xs text-gray-500 hover:text-red-500"
                          >
                            <i className={`w-4 h-4 flex items-center justify-center ${
                              comment.isLiked ? 'ri-heart-fill text-red-500' : 'ri-heart-line'
                            }`}></i>
                            {comment.likes > 0 && <span>{comment.likes}</span>}
                          </button>
                          <button className="text-xs text-gray-500 hover:text-gray-700">
                            답글
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Comment Input */}
            <div className="border-t border-gray-100 p-4">
              <div className="flex items-center gap-3">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20portrait%20photo%20of%20young%20Asian%20person%20smiling%2C%20modern%20casual%20style%2C%20warm%20lighting%2C%20friendly%20expression%2C%20high-quality%20profile%20picture&width=50&height=50&seq=currentuser&orientation=squarish"
                  alt="Current User"
                  className="w-8 h-8 rounded-full object-cover object-top flex-shrink-0"
                />
                <div className="flex-1 flex items-center gap-2">
                  <input
                    type="text"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="댓글을 입력하세요..."
                    className="flex-1 px-3 py-2 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 border-none"
                    onKeyPress={(e) => e.key === 'Enter' && addComment()}
                  />
                  <button
                    onClick={addComment}
                    disabled={!newComment.trim()}
                    className={`p-2 rounded-full transition-colors ${
                      newComment.trim()
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
