
// import React from 'react';
// import { Link } from 'react-router-dom';
// import spa from '../assets/spa.png';
// import repair from '../assets/repair.png';
// import salon from '../assets/salon.png';
// import plumber from '../assets/plumber.png';
// import clean from '../assets/clean.png';
// import purifier from '../assets/purifier.png';
// import chem from '../assets/chem.png';
// import plumb from '../assets/plumb.png';
// import pest from '../assets/pest.png';
// import cleaning from '../assets/cleaning.png';

// const Main = () => {
//   return (
//     <section className="flex w-screen h-[500px] mt-16 items-start">
//       {/* Left side - 40% */}
//       <div className="w-2/5 p-6">
//         <h2 className="text-4xl text-black font-bold">
//           <i>Home Service at Your</i>
//         </h2>
//         <span className="mt-1 block text-4xl text-black font-bold">
//           <i>Doorstep</i>
//         </span>

//         {/* Services Section */}
//         <div className="flex flex-col text-lg mt-6 text-gray-700 border rounded-lg p-6">
//           <h3 className="mb-6 font-semibold">What are you Looking For?</h3>

//           {/* First row */}
//           <div className="flex justify-between mb-8">
//             <Link to="/spa" className="flex flex-col items-center hover:scale-105 transition">
//               <img src={spa} alt="Spa" className="rounded-full w-20 h-20 mb-2" />
//               <h3 className="text-sm font-medium">Spa for Women</h3>
//             </Link>

//             <Link to="/repair" className="flex flex-col items-center hover:scale-105 transition">
//               <img src={repair} alt="Repair" className="rounded-full w-20 h-20 mb-2" />
//               <h3 className="text-sm font-medium text-center">Appliance Repair</h3>
//             </Link>

//             <Link to="/salon" className="flex flex-col items-center hover:scale-105 transition">
//               <img src={salon} alt="Salon" className="rounded-full w-20 h-20 mb-2" />
//               <h3 className="text-sm font-medium">Salon for Men</h3>
//             </Link>
//           </div>

//           {/* Second row */}
//           <div className="flex justify-between">
//             <Link to="/service4" className="flex flex-col items-center hover:scale-105 transition">
//               <img src={clean} alt="Cleaning" className="rounded-full w-20 h-20 mb-2" />
//               <h3 className="text-sm font-medium">Cleaning</h3>
//             </Link>

//             <Link to="/service5" className="flex flex-col items-center hover:scale-105 transition">
//               <img src={plumber} alt="Plumbing" className="rounded-full w-20 h-20 mb-2" />
//               <h3 className="text-sm font-medium text-center">Plumbing & Electric</h3>
//             </Link>

//             <Link to="/service6" className="flex flex-col items-center hover:scale-105 transition">
//               <img src={purifier} alt="Purifier" className="rounded-full w-20 h-20 mb-2" />
//               <h3 className="text-sm font-medium">Purifiers</h3>
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Right side - 60% */}
//       <div className="w-3/5 p-6 flex flex-col gap-6 items-center justify-center">
//         <h1 className="text-gray-700 text-xl font-semibold">
//           Make Yourself Familiar
//         </h1>

//         <div className="flex flex-col gap-6 w-full">
//           {/* First row */}
//           <div className="flex gap-6 justify-center">
//             <img
//               src={chem}
//               alt="Chemical Service"
//               className="w-1/2 h-40 object-cover rounded-lg shadow-md"
//             />
//             <img
//               src={pest}
//               alt="Pest Control"
//               className="w-1/2 h-40 object-cover rounded-lg shadow-md"
//             />
//           </div>

//           {/* Second row */}
//           <div className="flex gap-6 justify-center">
//             <img
//               src={cleaning}
//               alt="Cleaning Service"
//               className="w-1/2 h-40 object-cover rounded-lg shadow-md"
//             />
//             <img
//               src={plumb}
//               alt="Plumbing Work"
//               className="w-1/2 h-40 object-cover rounded-lg shadow-md"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Main;



import React from 'react';
import { Link } from 'react-router-dom';
import spa from '../assets/spa.png';
import repair from '../assets/repair.png';
import salon from '../assets/salon.png';
import plumber from '../assets/plumber.png';
import clean from '../assets/clean.png';
import purifier from '../assets/purifier.png';
import chem from '../assets/chem.png';
import plumb from '../assets/plumb.png';
import pest from '../assets/pest.png';
import cleaning from '../assets/cleaning.png';

const Main = () => {
  return (
    <section className="flex w-screen h-[500px] mt-16 items-start">
      {/* Left side - 40% */}
      <div className="w-2/5 p-6">
        <h2 className="text-4xl text-black font-bold">
          <i>Home Service at Your</i>
        </h2>
        <span className="mt-1 block text-4xl text-black font-bold">
          <i>Doorstep</i>
        </span>

        {/* Services Section */}
        <div className="flex flex-col text-lg mt-6 text-gray-700 border rounded-lg p-6">
          <h3 className="mb-6 font-semibold">What we Offer?</h3>

          {/* First row */}
          <div className="flex justify-between mb-8">
            <Link to="/spa" className="flex flex-col items-center hover:scale-105 transition">
              <img src={spa} alt="Spa" className="rounded-full w-20 h-20 mb-2" />
              <h3 className="text-sm font-medium">Spa for Women</h3>
            </Link>

            <Link to="/repair" className="flex flex-col items-center hover:scale-105 transition">
              <img src={repair} alt="Repair" className="rounded-full w-20 h-20 mb-2" />
              <h3 className="text-sm font-medium text-center">Appliance Repair</h3>
            </Link>

            <Link to="/salon" className="flex flex-col items-center hover:scale-105 transition">
              <img src={salon} alt="Salon" className="rounded-full w-20 h-20 mb-2" />
              <h3 className="text-sm font-medium">Salon for Men</h3>
            </Link>
          </div>

          {/* Second row */}
          <div className="flex justify-between">
            <Link to="/service4" className="flex flex-col items-center hover:scale-105 transition">
              <img src={clean} alt="Cleaning" className="rounded-full w-20 h-20 mb-2" />
              <h3 className="text-sm font-medium">Cleaning</h3>
            </Link>

            <Link to="/service5" className="flex flex-col items-center hover:scale-105 transition">
              <img src={plumber} alt="Plumbing" className="rounded-full w-20 h-20 mb-2" />
              <h3 className="text-sm font-medium text-center">Plumbing & Electric</h3>
            </Link>

            <Link to="/service6" className="flex flex-col items-center hover:scale-105 transition">
              <img src={purifier} alt="Purifier" className="rounded-full w-20 h-20 mb-2" />
              <h3 className="text-sm font-medium">Purifiers</h3>
            </Link>
          </div>
        </div>
      </div>

      {/* Right side - 60% */}
      <div className="w-3/5 p-6 flex flex-col gap-6 items-center justify-center">
        <h1 className="text-gray-700 text-xl font-semibold">
          Make Yourself Familiar
        </h1>

        <div className="flex flex-col gap-6 w-full">
          {/* First row */}
          <div className="flex gap-6 justify-center">
            <img
              src={chem}
              alt="Chemical Service"
              className="w-1/2 h-40 object-cover rounded-lg shadow-md"
            />
            <img
              src={pest}
              alt="Pest Control"
              className="w-1/2 h-40 object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Second row */}
          <div className="flex gap-6 justify-center">
            <img
              src={cleaning}
              alt="Cleaning Service"
              className="w-1/2 h-40 object-cover rounded-lg shadow-md"
            />
            <img
              src={plumb}
              alt="Plumbing Work"
              className="w-1/2 h-40 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
