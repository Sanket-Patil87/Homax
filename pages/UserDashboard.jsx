import React, { useContext } from 'react';
import AuthContext from '../src/context/AuthContext';

const UserDashboard = () => {
  const { logout } = useContext(AuthContext);
  return (
    <section className="w-full min-h-screen bg-gray-100 flex flex-col items-center pt-20 p-8">
      <h1 className="text-3xl font-bold mb-4">User Dashboard</h1>
      <p>Book services and manage profile (e.g., view bookings, edit details).</p>
      <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded mt-4">Logout</button>
      {/* User features */}
    </section>
  );
};

export default UserDashboard;