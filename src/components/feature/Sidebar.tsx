import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const navigate = useNavigate();

  const menuItems = [
    { icon: 'ri-chat-3-line', label: '모닥', path: '/chat' },
    { icon: 'ri-star-line', label: '리뷰', path: '/reviews' },
    { icon: 'ri-bookmark-line', label: '저장됨', path: '/saved' },
    { icon: 'ri-settings-3-line', label: '설정', path: '/settings' },
  ];

  const handleItemClick = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/20 z-40 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full w-72 bg-white shadow-xl z-50 transform transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800" style={{ fontFamily: '"Pacifico", serif' }}>Modac</h2>
          <button onClick={onClose} className="p-2 text-gray-500 hover:text-gray-700">
            <i className="ri-close-line w-6 h-6 flex items-center justify-center"></i>
          </button>
        </div>
        
        <nav className="mt-8">
          {menuItems.map((item) => (
            <button
              key={item.path}
              onClick={() => handleItemClick(item.path)}
              className="w-full flex items-center px-6 py-4 text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-colors"
            >
              <i className={`${item.icon} w-6 h-6 flex items-center justify-center mr-4`}></i>
              <span className="text-lg">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </>
  );
}
