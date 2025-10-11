import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Email, Lock, Security } from '@mui/icons-material';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      if (email === 'admin@example.com' && password === 'admin123') {
        localStorage.setItem('adminToken', 'mock-token');
        localStorage.setItem('adminUser', JSON.stringify({
          name: 'Admin User',
          email: email,
          role: 'admin'
        }));
        navigate('/admin/dashboard');
      } else {
        alert('Invalid credentials. Use admin@example.com / admin123');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className="w-screen min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 flex items-center justify-center py-12 px-4">
      <div className="container max-w-md mx-auto">
        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                <Security className="text-white text-2xl" />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Admin Login
            </h1>
            <p className="text-gray-600">
              Access the HOMAX administration panel
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="flex items-center border border-gray-300 rounded-xl px-4 py-3 hover:border-purple-400 focus-within:border-purple-500 focus-within:ring-2 focus-within:ring-purple-200 transition-all duration-200">
                <Email className="text-gray-400 mr-3" />
                <input
                  type="email"
                  placeholder="admin@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full outline-none text-gray-800 placeholder-gray-400 bg-transparent"
                  aria-label="Email address"
                  autoComplete="email"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="flex items-center border border-gray-300 rounded-xl px-4 py-3 hover:border-purple-400 focus-within:border-purple-500 focus-within:ring-2 focus-within:ring-purple-200 transition-all duration-200">
                <Lock className="text-gray-400 mr-3" />
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full outline-none text-gray-800 placeholder-gray-400 bg-transparent"
                  aria-label="Password"
                  autoComplete="current-password"
                  required
                />
              </div>
            </div>

          

            {/* Login Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-xl font-semibold hover:from-purple-600 hover:to-blue-600 focus:ring-2 focus:ring-purple-200 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Signing In...
                </div>
              ) : (
                'Sign In to Dashboard'
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-gray-500 text-sm">
              Secure admin access only
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm">
            Having trouble accessing your account?{' '}
            <button className="text-purple-600 hover:text-purple-700 font-medium">
              Contact Support
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AdminLogin;