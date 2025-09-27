import React from 'react';
import { Link } from 'react-router-dom';
import { Email, Lock } from '@mui/icons-material';

const Login = () => {
  return (
    <section className="w-screen min-h-screen bg-gradient-to-r from-gray-200 to-rose-200 flex items-center justify-center pt-20 pb-12">
      <div className="container max-w-md mx-auto px-4">
        <div className="bg-gradient-to-r from-emerald-200 to-emerald-600 rounded-lg shadow-lg border border-gray-200 p-8">
          <h1 className="text-xl font-bold text-gray-800 mb-6 text-center">
            Login
          </h1>
          <form autoComplete="off" className="space-y-4">
            <div className="flex items-center border rounded-lg p-2">
              <Email className="text-gray-200 mr-2" />
              <input
                type="email"
                placeholder="abc@gmail.com"
                className="w-full outline-none text-gray-200 focus:ring-0 focus:outline-none focus:shadow-none"
                aria-label="Email address"
                autoComplete="new-email"
              />
            </div>
            <div className="flex items-center border rounded-lg p-2">
              <Lock className="text-gray-200 mr-2" />
              <input
                type="password"
                placeholder="Password"
                className="w-full outline-none text-gray-200 focus:ring-0 focus:outline-none focus:shadow-none"
                aria-label="Password"
                autoComplete="new-password"
              />
            </div>
            <button
              type="button"
              className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition text-lg"
            >
              Login
            </button>
          </form>
          <p className="text-gray-600 text-sm text-center mt-4">
            Don't have an account?{' '}
            <Link to="/signup" className="text-purple-500 hover:text-purple-600 transition">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;