import { useState } from 'react';

interface Notification {
  id: string;
  type: 'community' | 'review' | 'follow' | 'like';
  title: string;
  message: string;
  time: string;
  isRead: boolean;
  avatar?: string;
  userName?: string;
}

interface NotificationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const mockNotifications: Notification[] = [
  {
    id: '1',
    type: 'community',
    title: 'New post from @jiho_travels',
    message: 'Amazing sunset view at Han River Park! Perfect for evening walks.',
    time: '5분 전',
    isRead: false,
    avatar: 'https://readdy.ai/api/search-image?query=young%20korean%20woman%20smiling%20profile%20photo%20realistic%20portrait%20warm%20lighting%20isolated%20on%20white%20background&width=40&height=40&seq=1&orientation=squarish',
    userName: 'jiho_travels'
  },
  {
    id: '2',
    type: 'review',
    title: 'Reply to your review',
    message: 'Thanks for the detailed review about Cafe Onion! Very helpful.',
    time: '1시간 전',
    isRead: false,
    avatar: 'https://readdy.ai/api/search-image?query=young%20korean%20man%20casual%20portrait%20realistic%20friendly%20smile%20isolated%20on%20white%20background&width=40&height=40&seq=2&orientation=squarish',
    userName: 'coffee_lover'
  },
  {
    id: '3',
    type: 'like',
    title: 'Your post was liked',
    message: 'Someone liked your post about "Best brunch spots in Gangnam".',
    time: '2시간 전',
    isRead: true,
    avatar: 'https://readdy.ai/api/search-image?query=young%20korean%20woman%20casual%20portrait%20realistic%20warm%20smile%20isolated%20on%20white%20background&width=40&height=40&seq=3&orientation=squarish',
    userName: 'foodie_seoul'
  },
  {
    id: '4',
    type: 'follow',
    title: 'New follower',
    message: '@seoul_explorer started following you.',
    time: '3시간 전',
    isRead: true,
    avatar: 'https://readdy.ai/api/search-image?query=young%20korean%20man%20trendy%20style%20portrait%20realistic%20confident%20smile%20isolated%20on%20white%20background&width=40&height=40&seq=4&orientation=squarish',
    userName: 'seoul_explorer'
  },
  {
    id: '5',
    type: 'community',
    title: 'New post from @cafe_hopper',
    message: 'Found this hidden gem cafe in Hongdae! Must visit for coffee lovers.',
    time: '1일 전',
    isRead: true,
    avatar: 'https://readdy.ai/api/search-image?query=young%20korean%20woman%20hipster%20style%20portrait%20realistic%20cheerful%20smile%20isolated%20on%20white%20background&width=40&height=40&seq=5&orientation=squarish',
    userName: 'cafe_hopper'
  }
];

const getNotificationIcon = (type: string) => {
  switch (type) {
    case 'community': return 'ri-image-line';
    case 'review': return 'ri-chat-3-line';
    case 'follow': return 'ri-user-add-line';
    case 'like': return 'ri-heart-line';
    default: return 'ri-notification-line';
  }
};

const getNotificationColor = (type: string) => {
  switch (type) {
    case 'community': return 'text-blue-600';
    case 'review': return 'text-green-600';
    case 'follow': return 'text-purple-600';
    case 'like': return 'text-red-600';
    default: return 'text-gray-600';
  }
};

export default function NotificationModal({ isOpen, onClose }: NotificationModalProps) {
  const [notifications, setNotifications] = useState(mockNotifications);

  const markAsRead = (id: string) => {
    setNotifications(prev =>
      prev.map(notification =>
        notification.id === id
          ? { ...notification, isRead: true }
          : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev =>
      prev.map(notification => ({ ...notification, isRead: true }))
    );
  };

  const unreadCount = notifications.filter(n => !n.isRead).length;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 z-50 flex items-start justify-center pt-20">
      <div className="bg-white w-full max-w-sm rounded-2xl shadow-xl mx-4 max-h-[70vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold text-gray-800">알림</h3>
            {unreadCount > 0 && (
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                {unreadCount}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            {unreadCount > 0 && (
              <button
                onClick={markAllAsRead}
                className="text-xs text-amber-600 hover:text-amber-700"
              >
                모두 읽음
              </button>
            )}
            <button onClick={onClose} className="p-1 text-gray-500 hover:text-gray-700">
              <i className="ri-close-line w-5 h-5 flex items-center justify-center"></i>
            </button>
          </div>
        </div>

        {/* Notifications List */}
        <div className="overflow-y-auto max-h-96">
          {notifications.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-gray-500">
              <i className="ri-notification-off-line w-12 h-12 flex items-center justify-center mb-2 text-gray-300"></i>
              <p className="text-sm">새로운 알림이 없습니다</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  onClick={() => markAsRead(notification.id)}
                  className={`p-4 hover:bg-gray-50 cursor-pointer transition-colors ${
                    !notification.isRead ? 'bg-amber-50/30' : ''
                  }`}
                >
                  <div className="flex gap-3">
                    <div className="relative flex-shrink-0">
                      <img
                        src={notification.avatar}
                        alt={notification.userName}
                        className="w-10 h-10 rounded-full object-cover object-top"
                      />
                      <div className={`absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-sm ${getNotificationColor(notification.type)}`}>
                        <i className={`${getNotificationIcon(notification.type)} w-3 h-3 flex items-center justify-center`}></i>
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <h4 className={`text-sm font-medium ${!notification.isRead ? 'text-gray-900' : 'text-gray-700'}`}>
                          {notification.title}
                        </h4>
                        {!notification.isRead && (
                          <div className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0 mt-1"></div>
                        )}
                      </div>
                      
                      <p className={`text-sm mt-1 ${!notification.isRead ? 'text-gray-700' : 'text-gray-600'}`}>
                        {notification.message}
                      </p>
                      
                      <span className="text-xs text-gray-500 mt-1 block">
                        {notification.time}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-100 bg-gray-50">
          <button className="w-full text-center text-sm text-amber-600 hover:text-amber-700 py-2">
            모든 알림 보기
          </button>
        </div>
      </div>
    </div>
  );
}