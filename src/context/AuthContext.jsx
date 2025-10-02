import React, { createContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  // Signup function
  const signup = async (name, email, password, role = "user") => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/signup", {
        name,
        email,
        password,
        role,
      });

      if (res.status === 200) {
        console.log("Signup successful:", res.data);
        navigate("/login"); // redirect to login page
        return true;
      }
    } catch (err) {
      console.error(err.response?.data?.msg || err);
      alert(err.response?.data?.msg || "Signup failed");
      return false;
    }
  };

 // Login function
const login = async (email, password) => {
  try {
    const res = await axios.post("http://localhost:5000/api/auth/login", {
      email,
      password,
    });

    if (res.status === 200) {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);

      console.log("Login successful:", res.data);

      // Role-based redirection
      if (res.data.role === "admin") navigate("/admin");
      else if (res.data.role === "employee") navigate("/employee");
      else navigate("/user");

      return true;
    }
  } catch (err) {
    console.error(err.response?.data?.msg || err);
    alert(err.response?.data?.msg || "Login failed");
    return false;
  }
};

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
