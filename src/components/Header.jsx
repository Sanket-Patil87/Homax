// import React from 'react';
// import Logo from '/fav.svg'; // Adjusted path (assuming fav.svg is in src/assets)
// import { Login,LocationCity } from '@mui/icons-material';
// import { Link } from 'react-router-dom';
// const Header = () => {
//   return (
//     <header className="flex mx-auto fixed top-0 w-screen max-lg:w-full h-16 p-4 items-center shadow-md z-50 bg-white  gap-8 cursor-pointer justify-between">
//       <div className="flex flex-row items-center text-2xl gap-1.5 ">
//         <img src={Logo} alt="Homax Logo" className="w-12 h-12 rounded-b-full" />
//         <span className="text-black text-4xl font-bold">Homax</span>
//       </div>
//       <div className="w-48 border rounded-full h-8 flex items-center">
//         <label htmlFor="location" className="sr-only">Select Location</label>
//         <LocationCity className='bg-gray-400 rounded-full'/>
//         <select id="location" className="w-full px-2 text-black outline-none bg-transparent" aria-label="Select your location">
//           <option value="">Select Location</option>
//           <option value="Nagpur">Nagpur</option>
//           <option value="Mumbai">Mumbai</option>
//           <option value="Pune">Pune</option>
//           <option value="Nashik">Nashik</option>
//         </select>
//       </div>
//       <div className="w-64 border rounded-full h-8 flex items-center">
//         <label htmlFor="search" className="sr-only">Search for Services</label>
//         <input
//           id="search"
//           type="text"
//           placeholder="Look for Services"
//           className="w-full px-2 text-black bg-transparent outline-none"
//           aria-label="Search for services"
//         />
//       </div>
//       <div className="flex gap-4 items-center">
//         <Link to="/login" className="flex gap-2 !bg-purple-white hover:bg-purple-500 text-white transition px-4 py-2 rounded"><Login/>Login</Link>
//         <Link to="/signup" className="flex gap-2 !bg-purple-400 hover:!bg-purple-600 text-white transition px-4 py-2 rounded">Sign Up</Link>
//       </div>
//     </header>
//   );
// };

// export default Header;





import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '/fav2.svg'; 
import { Login, LocationCity } from '@mui/icons-material';
import { Home } from '@mui/icons-material';
const Header = () => {
  return (
    <header className="flex mx-auto fixed top-0 w-screen max-lg:w-full h-16 p-4 items-center shadow-md z-50 bg-white gap-8 cursor-pointer justify-between">
      <div className="flex flex-row items-center text-2xl gap-1.5">
        <img src={Logo} alt="Homax Logo" className="w-12 h-12 rounded-b-full" />
        <span className="text-black text-4xl font-bold">Homely</span>
      </div>
      <div className="w-48 border rounded-full h-8 flex items-center">
        <label htmlFor="location" className="sr-only">Select Location</label>
        <LocationCity className="bg-gray-400 rounded-full" />
        <select id="location" className="w-full px-2 text-black outline-none bg-transparent" aria-label="Select your location">
          <option value="">Select Location</option>
          <option value="Nagpur">Nagpur</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Pune">Pune</option>
          <option value="Nashik">Nashik</option>
        </select>
      </div>
      <div className="w-64 border rounded-full h-8 flex items-center">
        <label htmlFor="search" className="sr-only">Search for Services</label>
        <input
          id="search"
          type="text"
          placeholder="Look for Services"
          className="w-full px-2 text-black bg-transparent outline-none"
          aria-label="Search for services"
        />
      </div>
      <div className="flex gap-4 items-center">
        <Link to="/" className='items-centers text-center !text-white'><Home/>Home</Link>
        <Link
          to="/login"
          className="flex gap-2 !bg-teal-600 hover:bg-teal-700 !text-white transition px-4 py-2 rounded-full"
          aria-label="Go to login page"
        >
          <Login /> Login
        </Link>
        <Link
          to="/signup"
          className="flex gap-2 !bg-teal-600 hover:bg-teal-700 !text-white transition px-4 py-2 rounded-full"
         
          aria-label="Go to signup page"
        >
          Sign Up
        </Link>
        
      </div>
    </header>
  );
};

export default Header;