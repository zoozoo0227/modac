
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const BottomNavigation = () => {
  const location = useLocation();

  const getIconClass = (path: string) => {
    return location.pathname === path ? 'text-amber-600' : 'text-gray-400';
  };

  const getTextClass = (path: string) => {
    return location.pathname === path ? 'text-amber-600' : 'text-gray-500';
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-0 py-2 grid grid-cols-4">
      <Link to="/" className="flex flex-col items-center justify-center py-2">
        <i className={`ri-home-line w-6 h-6 flex items-center justify-center ${getIconClass('/')}`}></i>
        <span className={`text-xs mt-1 ${getTextClass('/')}`}>Home</span>
      </Link>
      
      <Link to="/nearby" className="flex flex-col items-center justify-center py-2">
        <i className={`ri-map-pin-line w-6 h-6 flex items-center justify-center ${getIconClass('/nearby')}`}></i>
        <span className={`text-xs mt-1 ${getTextClass('/nearby')}`}>Nearby</span>
      </Link>
      
      <Link to="/community" className="flex flex-col items-center justify-center py-2">
        <i className={`ri-group-line w-6 h-6 flex items-center justify-center ${getIconClass('/community')}`}></i>
        <span className={`text-xs mt-1 ${getTextClass('/community')}`}>Community</span>
      </Link>
      
      <Link to="/profile" className="flex flex-col items-center justify-center py-2">
        <i className={`ri-user-line w-6 h-6 flex items-center justify-center ${getIconClass('/profile')}`}></i>
        <span className={`text-xs mt-1 ${getTextClass('/profile')}`}>Profile</span>
      </Link>
    </nav>
  );
};

export default BottomNavigation;
