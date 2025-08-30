
import { useState } from 'react';

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyFilter: (category: string, tags: string[]) => void;
}

const categories = [
  { id: 'cafe', name: '카페', icon: 'ri-cup-line' },
  { id: 'restaurant', name: '음식점', icon: 'ri-restaurant-line' },
  { id: 'theatre', name: '극장', icon: 'ri-movie-line' },
  { id: 'hospital', name: '병원', icon: 'ri-hospital-line' },
  { id: 'culture', name: '문화시설', icon: 'ri-building-line' },
  { id: 'shopping', name: '쇼핑', icon: 'ri-shopping-bag-line' },
];

const tagsByCategory = {
  cafe: ['혼자 가기 좋은', '비오는 날', '공부하기 좋은', '데이트', '분위기 좋은'],
  restaurant: ['혼밥하기 좋은', '가족 모임', '데이트', '야식', '건강식'],
  theatre: ['최신 영화', '클래식', '아트하우스', '가족 영화', 'IMAX'],
  hospital: ['24시간', '응급실', '전문의', '예약 가능', '주차 편리'],
  culture: ['전시회', '박물관', '도서관', '공연장', '역사'],
  shopping: ['쇼핑몰', '전통시장', '아울렛', '브랜드', '세일'],
};

export default function FilterModal({ isOpen, onClose, onApplyFilter }: FilterModalProps) {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setSelectedTags([]);
  };

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const handleApply = () => {
    onApplyFilter(selectedCategory, selectedTags);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
      <div className="bg-white w-full rounded-t-3xl max-h-[80vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800">필터</h3>
          <button onClick={onClose} className="p-2 text-gray-500">
            <i className="ri-close-line w-6 h-6 flex items-center justify-center"></i>
          </button>
        </div>

        <div className="p-6">
          <h4 className="text-sm font-medium text-gray-600 mb-3">카테고리</h4>
          <div className="grid grid-cols-2 gap-3 mb-6">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategorySelect(category.id)}
                className={`p-4 rounded-xl border-2 transition-all ${
                  selectedCategory === category.id
                    ? 'border-amber-400 bg-amber-50'
                    : 'border-gray-200 bg-white'
                }`}
              >
                <i className={`${category.icon} w-6 h-6 flex items-center justify-center mx-auto mb-2 ${
                  selectedCategory === category.id ? 'text-amber-600' : 'text-gray-500'
                }`}></i>
                <span className={`text-sm ${
                  selectedCategory === category.id ? 'text-amber-700' : 'text-gray-600'
                }`}>{category.name}</span>
              </button>
            ))}
          </div>

          {selectedCategory && (
            <>
              <h4 className="text-sm font-medium text-gray-600 mb-3">세부 태그</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {tagsByCategory[selectedCategory as keyof typeof tagsByCategory]?.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => handleTagToggle(tag)}
                    className={`px-4 py-2 rounded-full text-sm transition-all ${
                      selectedTags.includes(tag)
                        ? 'bg-amber-100 text-amber-700 border border-amber-300'
                        : 'bg-gray-100 text-gray-600 border border-gray-200'
                    }`}
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </>
          )}

          <button
            onClick={handleApply}
            className="w-full py-3 bg-amber-500 text-white rounded-xl font-medium hover:bg-amber-600 transition-colors"
          >
            적용하기
          </button>
        </div>
      </div>
    </div>
  );
}
