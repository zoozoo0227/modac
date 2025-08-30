import { useState, useRef } from 'react';

interface ProfileEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (profileData: ProfileData) => void;
  currentProfile: {
    name: string;
    bio: string;
    avatar: string;
    website?: string;
    location?: string;
  };
}

interface ProfileData {
  name: string;
  bio: string;
  avatar: string;
  website: string;
  location: string;
}

export default function ProfileEditModal({ isOpen, onClose, onSave, currentProfile }: ProfileEditModalProps) {
  const [formData, setFormData] = useState<ProfileData>({
    name: currentProfile.name,
    bio: currentProfile.bio,
    avatar: currentProfile.avatar,
    website: currentProfile.website || '',
    location: currentProfile.location || '',
  });

  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (field: keyof ProfileData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Check if file is an image
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file.');
        return;
      }

      // Check file size (limit to 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size must be less than 5MB.');
        return;
      }

      setIsUploading(true);
      
      // Create object URL for preview
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setFormData(prev => ({ ...prev, avatar: e.target!.result as string }));
          setIsUploading(false);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-white w-full max-w-sm mx-4 rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <button onClick={onClose} className="text-gray-600">
            <i className="ri-close-line w-6 h-6 flex items-center justify-center"></i>
          </button>
          <h3 className="text-lg font-semibold text-gray-800">프로필 편집</h3>
          <button 
            onClick={handleSave}
            className="text-amber-600 font-medium"
          >
            완료
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Avatar */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="w-24 h-24 rounded-full overflow-hidden">
                <img 
                  src={formData.avatar}
                  alt="Profile"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {isUploading && (
                <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
              <button
                onClick={handleAvatarClick}
                className="absolute -bottom-1 -right-1 w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center shadow-lg"
              >
                <i className="ri-camera-line w-4 h-4 flex items-center justify-center"></i>
              </button>
              
              {/* Hidden file input */}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
            <p className="text-sm text-amber-600 mt-2">프로필 사진 변경</p>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">이름</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder="이름을 입력하세요"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">소개</label>
              <textarea
                value={formData.bio}
                onChange={(e) => handleInputChange('bio', e.target.value)}
                rows={3}
                maxLength={150}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
                placeholder="자신을 소개해보세요"
              />
              <p className="text-xs text-gray-500 mt-1">{formData.bio.length}/150</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">웹사이트</label>
              <input
                type="url"
                value={formData.website}
                onChange={(e) => handleInputChange('website', e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder="https://example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">위치</label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder="서울, 대한민국"
              />
            </div>
          </div>

          {/* Privacy Settings */}
          <div className="border-t border-gray-100 pt-4">
            <h4 className="font-medium text-gray-800 mb-3">개인정보 설정</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">비공개 계정</span>
                <div className="relative">
                  <input type="checkbox" className="sr-only" />
                  <div className="w-10 h-6 bg-gray-200 rounded-full cursor-pointer">
                    <div className="w-4 h-4 bg-white rounded-full shadow transform translate-x-1 translate-y-1 transition-transform"></div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">활동 상태 표시</span>
                <div className="relative">
                  <input type="checkbox" className="sr-only" />
                  <div className="w-10 h-6 bg-amber-500 rounded-full cursor-pointer">
                    <div className="w-4 h-4 bg-white rounded-full shadow transform translate-x-5 translate-y-1 transition-transform"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}