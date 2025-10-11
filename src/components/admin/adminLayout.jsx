import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Dashboard, 
  People, 
  BookOnline, 
  Business, 
  Assessment, 
  Menu, 
  Close,
  Logout
} from '@mui/icons-material';

const AdminLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { 
      path: '/admin/dashboard', 
      label: 'Dashboard', 
      icon: Dashboard 
    },
    { 
      path: '/admin/users', 
      label: 'Users', 
      icon: People 
    },
    { 
      path: '/admin/bookings', 
      label: 'Bookings', 
      icon: BookOnline 
    },
    { 
      path: '/admin/employees', 
      label: 'Employees', 
      icon: Business 
    },
    /*{ 
      path: '/admin/reports', 
      label: 'Reports', 
      icon: Assessment 
    },*/
  ];

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar Overlay for Mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-30
        w-64 bg-gradient-to-b from-white to-gray-50 
        border-r border-gray-200 shadow-sm
        transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0
      `}>
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">H</span>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-800">HOMAX</h2>
              <p className="text-xs text-gray-500">Admin Panel</p>
            </div>
          </div>
          <button 
            onClick={() => setIsSidebarOpen(false)}
            className="lg:hidden p-1 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Close className="text-gray-500" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`
                      flex items-center px-4 py-3 rounded-xl transition-all duration-200
                      ${isActive 
                        ? 'bg-purple-50 text-purple-600 border border-purple-100 shadow-sm' 
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
                      }
                    `}
                    onClick={() => window.innerWidth < 1024 && setIsSidebarOpen(false)}
                  >
                    <item.icon className={`
                      mr-3 transition-colors
                      ${isActive ? 'text-purple-500' : 'text-gray-400'}
                    `} />
                    <span className="font-medium">{item.label}</span>
                    {isActive && (
                      <div className="ml-auto w-2 h-2 bg-purple-500 rounded-full" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Logout Button */}
          <div className="mt-8 p-4 border-t border-gray-200">
            <button
              onClick={handleLogout}
              className="flex items-center w-full px-4 py-3 text-white-600 hover:bg-red-50 hover:text-red-600 rounded-xl transition-all duration-200"
            >
              <Logout className="mr-3 text-white-400" />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-h-screen overflow-x-hidden">
        {/* Top Header */}
        <header className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors lg:hidden"
              >
                <Menu className="text-gray-600" />
              </button>
              <div>
                <h1 className="text-xl font-semibold text-gray-800">
                  {navItems.find(item => item.path === location.pathname)?.label || 'Dashboard'}
                </h1>
                <p className="text-sm text-gray-500">Welcome back, Admin</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm">A</span>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content with proper top margin */}
        <div className="p-6 pt-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;