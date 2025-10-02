import React, { useState, useContext } from "react";
import AuthContext from "../src/context/AuthContext";
import { Email, Lock } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await login(email, password); // login now redirects to "/"
    setLoading(false);
  };

  return (
    <section className="w-full min-h-screen bg-gradient-to-r from-gray-200 to-rose-200 flex items-center justify-center pt-20 pb-12">
      <div className="container max-w-md mx-auto px-4">
        <div className="bg-gradient-to-r from-emerald-200 to-emerald-600 rounded-lg shadow-lg border border-gray-200 p-8">
          <h1 className="text-xl font-bold text-gray-800 mb-6 text-center">
            Login to Homely
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center border rounded-lg p-2">
              <Email className="text-gray-200 mr-2" />
              <input
                type="email"
                placeholder="abc@gmail.com"
                className="w-full outline-none text-gray-200"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex items-center border rounded-lg p-2">
              <Lock className="text-gray-200 mr-2" />
              <input
                type="password"
                placeholder="Password"
                className="w-full outline-none text-gray-200"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition text-lg"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
          <p className="text-gray-600 text-sm text-center mt-4">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-purple-500 hover:text-purple-600 transition"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
