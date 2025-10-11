import React, { useState } from 'react';
import { 
  Search, 
  Add,
  Edit,
  Delete,
  Visibility,
  ChevronLeft,
  ChevronRight,
  Person
} from '@mui/icons-material';

const AdminUsers = () => {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [selectedUsers, setSelectedUsers] = useState([]);

  const mockUsers = [
    { 
      id: 1, 
      name: "John Doe", 
      email: "john@example.com", 
      phone: "+91 98765 43210",
      bookings: 5, 
      status: "Active",
      joinDate: "2024-01-15",
      avatar: "JD"
    },
    { 
      id: 2, 
      name: "Jane Smith", 
      email: "jane@example.com", 
      phone: "+91 98765 43211",
      bookings: 3, 
      status: "Active",
      joinDate: "2024-02-20",
      avatar: "JS"
    },
    { 
      id: 3, 
      name: "Alice Johnson", 
      email: "alice@example.com", 
      phone: "+91 98765 43212",
      bookings: 7, 
      status: "Active",
      joinDate: "2024-01-08",
      avatar: "AJ"
    },
    { 
      id: 4, 
      name: "Bob Wilson", 
      email: "bob@example.com", 
      phone: "+91 98765 43213",
      bookings: 2, 
      status: "Inactive",
      joinDate: "2024-03-10",
      avatar: "BW"
    },
    { 
      id: 5, 
      name: "Emma Brown", 
      email: "emma@example.com", 
      phone: "+91 98765 43214",
      bookings: 6, 
      status: "Active",
      joinDate: "2024-02-05",
      avatar: "EB"
    },
    { 
      id: 6, 
      name: "Michael Lee", 
      email: "michael@example.com", 
      phone: "+91 98765 43215",
      bookings: 4, 
      status: "Active",
      joinDate: "2024-03-15",
      avatar: "ML"
    },
    { 
      id: 7, 
      name: "Sarah Davis", 
      email: "sarah@example.com", 
      phone: "+91 98765 43216",
      bookings: 8, 
      status: "Active",
      joinDate: "2024-01-25",
      avatar: "SD"
    },
    { 
      id: 8, 
      name: "David Clark", 
      email: "david@example.com", 
      phone: "+91 98765 43217",
      bookings: 1, 
      status: "Inactive",
      joinDate: "2024-03-20",
      avatar: "DC"
    },
    { 
      id: 9, 
      name: "Laura Adams", 
      email: "laura@example.com", 
      phone: "+91 98765 43218",
      bookings: 3, 
      status: "Active",
      joinDate: "2024-02-28",
      avatar: "LA"
    },
    { 
      id: 10, 
      name: "James Taylor", 
      email: "james@example.com", 
      phone: "+91 98765 43219",
      bookings: 5, 
      status: "Active",
      joinDate: "2024-01-30",
      avatar: "JT"
    },
  ];

  const filteredUsers = mockUsers.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()) ||
      user.phone.includes(search)
  );

  // Calculate pagination
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstEntry, indexOfLastEntry);
  const totalPages = Math.ceil(filteredUsers.length / entriesPerPage);

  const handleEntriesChange = (e) => {
    setEntriesPerPage(parseInt(e.target.value));
    setCurrentPage(1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSelectUser = (userId) => {
    setSelectedUsers(prev =>
      prev.includes(userId)
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    );
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedUsers(currentUsers.map(user => user.id));
    } else {
      setSelectedUsers([]);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800 border-green-200';
      case 'Inactive': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section className="w-full min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="font-bold text-3xl md:text-4xl text-gray-800 mb-2">
            User Management
          </h1>
          <p className="text-gray-600 text-lg">
            Manage and monitor all registered users on the platform
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium mb-1">Total Users</p>
                <p className="text-2xl font-bold text-gray-800">1,247</p>
              </div>
              <div className="p-3 rounded-full bg-blue-50 text-blue-500">
                <Person className="text-2xl" />
              </div>
            </div>
            <p className="text-green-600 text-sm font-medium mt-2">+12% from last month</p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium mb-1">Active Users</p>
                <p className="text-2xl font-bold text-gray-800">1,089</p>
              </div>
              <div className="p-3 rounded-full bg-green-50 text-green-500">
                <Person className="text-2xl" />
              </div>
            </div>
            <p className="text-green-600 text-sm font-medium mt-2">87% active rate</p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium mb-1">New This Month</p>
                <p className="text-2xl font-bold text-gray-800">142</p>
              </div>
              <div className="p-3 rounded-full bg-purple-50 text-purple-500">
                <Add className="text-2xl" />
              </div>
            </div>
            <p className="text-green-600 text-sm font-medium mt-2">+8% growth</p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium mb-1">Avg Bookings</p>
                <p className="text-2xl font-bold text-gray-800">4.7</p>
              </div>
              <div className="p-3 rounded-full bg-orange-50 text-orange-500">
                <Visibility className="text-2xl" />
              </div>
            </div>
            <p className="text-gray-600 text-sm font-medium mt-2">per user</p>
          </div>
        </div>

        {/* Controls Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Left Side - Show Entries */}
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-700">Show</span>
              <select
                value={entriesPerPage}
                onChange={handleEntriesChange}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-purple-200 focus:border-purple-500 text-gray-800 bg-white"
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
              </select>
              <span className="text-sm text-gray-700">entries</span>
            </div>

            {/* Right Side - Search and Add Button */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search users by name, email, or phone..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-200 focus:border-purple-500 transition-colors text-gray-800 placeholder-gray-500 bg-white"
                />
              </div>

              {/* Add User Button */}
              <button className="flex items-center px-4 py-3 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition-colors whitespace-nowrap">
                <Add className="mr-2" />
                <span className="font-medium">Add User</span>
              </button>
            </div>
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="p-4 text-left">
                    <input
                      type="checkbox"
                      onChange={handleSelectAll}
                      checked={selectedUsers.length === currentUsers.length && currentUsers.length > 0}
                      className="rounded border-gray-300 text-purple-500 focus:ring-purple-500"
                    />
                  </th>
                  <th className="p-4 text-left text-sm font-semibold text-gray-700">User</th>
                  <th className="p-4 text-left text-sm font-semibold text-gray-700">Contact</th>
                  <th className="p-4 text-left text-sm font-semibold text-gray-700">Bookings</th>
                  <th className="p-4 text-left text-sm font-semibold text-gray-700">Status</th>
                  <th className="p-4 text-left text-sm font-semibold text-gray-700">Join Date</th>
                  <th className="p-4 text-left text-sm font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {currentUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4">
                      <input
                        type="checkbox"
                        checked={selectedUsers.includes(user.id)}
                        onChange={() => handleSelectUser(user.id)}
                        className="rounded border-gray-300 text-purple-500 focus:ring-purple-500"
                      />
                    </td>
                    <td className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                          {user.avatar}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-800">{user.name}</div>
                          <div className="text-sm text-gray-500">ID: {user.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="text-gray-800 font-medium">{user.email}</div>
                      <div className="text-sm text-gray-500">{user.phone}</div>
                    </td>
                    <td className="p-4">
                      <div className="text-gray-800 font-semibold">{user.bookings}</div>
                      <div className="text-sm text-gray-500">bookings</div>
                    </td>
                    <td className="p-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(user.status)}`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="p-4 text-gray-600">
                      {new Date(user.joinDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </td>
                    <td className="p-4">
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="View">
                          <Visibility className="text-lg" />
                        </button>
                        <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors" title="Edit">
                          <Edit className="text-lg" />
                        </button>
                        <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Delete">
                          <Delete className="text-lg" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-6 border-t border-gray-200 bg-gray-50">
            <div className="text-sm text-gray-700 mb-4 sm:mb-0">
              Showing {indexOfFirstEntry + 1} to {Math.min(indexOfLastEntry, filteredUsers.length)} of {filteredUsers.length} entries
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-gray-700"
              >
                <ChevronLeft className="text-lg" />
                <span className="ml-1">Previous</span>
              </button>

              <div className="flex items-center space-x-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1)
                  .filter(page => 
                    page === 1 || 
                    page === totalPages || 
                    (page >= currentPage - 1 && page <= currentPage + 1)
                  )
                  .map((page, index, array) => {
                    if (index > 0 && page - array[index - 1] > 1) {
                      return (
                        <span key={`ellipsis-${page}`} className="px-3 py-2 text-gray-500">
                          ...
                        </span>
                      );
                    }
                    return (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`px-3 py-2 rounded-lg transition-colors text-gray-700 ${
                          currentPage === page
                            ? 'bg-purple-500 text-white'
                            : 'hover:bg-gray-100'
                        }`}
                      >
                        {page}
                      </button>
                    );
                  })}
              </div>

              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-gray-700"
              >
                <span className="mr-1">Next</span>
                <ChevronRight className="text-lg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminUsers;