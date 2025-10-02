
// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
// import Main from "./components/Main";
// import Main1 from "./components/Main1";
// import Hero from "./components/Hero";
// import MostBooked from "./components/Book";
// import Footer from "./components/Footer";
// import Login from "../pages/Login";
// import Signup from "../pages/Signup";

// function App() {
//   return (
//     <div>
//       <Header />
//       <Routes>
//         <Route
//           path="/"element={<><Main1 /><Main /><Hero /><MostBooked /><Footer /></> }/>
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//       </Routes>
//     </div>
//   );
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
import AdminDashboard from "../pages/AdminDashboard";
import UserDashboard from "../pages/UserDashboard";
import EmployeeDashboard from "../pages/EmployeeDashboard"
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Main1 />
                <Main />
                <Hero />
                <MostBooked />
                <Footer />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/employee" element={<EmployeeDashboard />} />
          <Route path="/user" element={<UserDashboard />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;