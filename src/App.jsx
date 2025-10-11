// import React from "react";
// import { useState } from "react";
// import Header from "./components/Header";
// import Main from "./components/Main";
// import Main1 from "./components/Main1";
// import Hero from "./components/Hero";
// import MostBooked from "./components/Book";
// import Footer from "./components/Footer";
// import Login from "../pages/Login";
// import Signup from "../pages/Signup";
// import { Link,Routes,Route } from "react-router-dom";
// function App(){
//   return(
//     <div>
//       <Header/>
//       <Main1/>
//       <Main/>
//       <Hero/>
//       <MostBooked/>
//       <Footer/>
//       <Routes >
//          <Route path="/login" element={<Login/>} className="hidden"/>
//          <Route path="/signup" element={<Signup/>}/>
//       </Routes>
//     </div>
//   )
// }
// export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Main1 from "./components/Main1";
import Hero from "./components/Hero";
import MostBooked from "./components/Book";
import Footer from "./components/Footer";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import AdminLogin from './components/admin/adminLogin';
import AdminLayout from './components/admin/adminLayout';
import AdminDashboard from './components/admin/adminDashboard';
import AdminLoginPage from "../pages/admin/AdminLoginPage";
import AdminDashboardPage from "../pages/admin/AdminDashboardPage";
import AdminUsersPage from "../pages/admin/AdminUsers";
import AdminEmployeesPage from "../pages/admin/AdminEmployees";
import AdminBookingsPage from "../pages/admin/AdminBookings";



function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"element={<><Main1 /><Main /><Hero /><MostBooked /><Footer /></> }/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={
           <AdminLayout>
               <AdminDashboard />
           </AdminLayout>
      } />
      <Route path="/admin/users" element={<AdminUsersPage />} />
      <Route path="/admin/employees" element={<AdminEmployeesPage />} />
      <Route path="/admin/bookings" element={<AdminBookingsPage />} />



        
      </Routes>
    </div>
  );
}

export default App;