import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../src/context/AuthContext";
import { Person, Email, Lock } from "@mui/icons-material";

const Signup = () => {
  const { signup } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user"); // default role
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await signup(name, email, password, role); // pass role
    setLoading(false);
  };

  return (
    <section className="w-full min-h-screen bg-gradient-to-r from-gray-200 to-rose-200 flex items-center justify-center pt-20 pb-12">
      <div className="container max-w-md mx-auto px-4">
        <div className="bg-gradient-to-r from-emerald-200 to-emerald-600 rounded-lg shadow-lg border border-gray-200 p-8">
          <h1 className="text-xl font-bold text-gray-800 mb-6 text-center">
            Sign Up for Homely
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4" autoComplete="off">
            <div className="flex items-center border rounded-lg p-2">
              <Person className="text-gray-200 mr-2" />
              <input
                type="text"
                placeholder="Full Name"
                className="w-full outline-none text-gray-200"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="flex items-center border rounded-lg p-2">
              <Email className="text-gray-200 mr-2" />
              <input
                type="email"
                placeholder="abc@gmail.com"
                className="w-full outline-none text-gray-200"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
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
                required
              />
            </div>

            {/* Role Selection */}
            <div className="flex items-center border rounded-lg p-2">
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full outline-none text-gray-200 bg-transparent"
                required
              >
                <option value="user">User</option>
                <option value="employee">Employee</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition text-lg"
              disabled={loading}
            >
              {loading ? "Signing up..." : "Sign Up"}
            </button>
          </form>

          <p className="text-gray-600 text-sm text-center mt-4">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-purple-500 hover:text-purple-600 transition"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Signup;
