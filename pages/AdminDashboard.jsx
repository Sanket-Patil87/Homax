import React, { useContext } from 'react';
import AuthContext from '../src/context/AuthContext';

const AdminDashboard = () => {
  const { logout } = useContext(AuthContext);
  return (
    <section className="w-full min-h-screen bg-gray-100 flex flex-col items-center pt-20 p-8">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <p>Manage users, employees, and services (e.g., add/remove users, view logs).</p>
      <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded mt-4">Logout</button>
      {/* Add admin features, e.g., user list via API */}
    </section>
  );
};

export default AdminDashboard;