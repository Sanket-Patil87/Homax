import React, { useState } from 'react';
import { 
  Search, 
  Add,
  Edit,
  Delete,
  Visibility,
  Work,
  Phone,
  Email,
  AccountCircle,
  TrendingUp
} from '@mui/icons-material';

const AdminEmployees = () => {
  const [employees, setEmployees] = useState([
    { 
      id: 1, 
      name: "Raj Kumar", 
      role: "Plumber", 
      email: "raj.kumar@homax.com",
      phone: "+91 98765 43210", 
      earnings: 5000,
      status: "Active",
      joinDate: "2024-01-15",
      completedJobs: 45,
      rating: 4.8,
      avatar: "RK"
    },
    { 
      id: 2, 
      name: "Priya Sharma", 
      role: "Cleaner", 
      email: "priya.sharma@homax.com",
      phone: "+91 98765 43211", 
      earnings: 3000,
      status: "Active",
      joinDate: "2024-02-20",
      completedJobs: 32,
      rating: 4.6,
      avatar: "PS"
    },
    { 
      id: 3, 
      name: "Amit Patel", 
      role: "Electrician", 
      email: "amit.patel@homax.com",
      phone: "+91 98765 43212", 
      earnings: 6000,
      status: "Active",
      joinDate: "2024-01-08",
      completedJobs: 52,
      rating: 4.9,
      avatar: "AP"
    },
    { 
      id: 4, 
      name: "Sneha Singh", 
      role: "AC Technician", 
      email: "sneha.singh@homax.com",
      phone: "+91 98765 43213", 
      earnings: 5500,
      status: "On Leave",
      joinDate: "2024-03-10",
      completedJobs: 28,
      rating: 4.7,
      avatar: "SS"
    },
  ]);

  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [newEmployee, setNewEmployee] = useState({
    name: '',
    role: '',
    email: '',
    phone: '',
    earnings: '',
    status: 'Active'
  });

  const roles = ['Plumber', 'Cleaner', 'Electrician', 'AC Technician', 'Carpenter', 'Painter'];
  const statusOptions = ['Active', 'On Leave', 'Inactive'];

  const filteredEmployees = employees.filter(
    (emp) =>
      emp.name.toLowerCase().includes(search.toLowerCase()) ||
      emp.role.toLowerCase().includes(search.toLowerCase()) ||
      emp.email.toLowerCase().includes(search.toLowerCase())
  );

  // Calculate pagination
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEmployees = filteredEmployees.slice(indexOfFirstEntry, indexOfLastEntry);
  const totalPages = Math.ceil(filteredEmployees.length / entriesPerPage);

  const handleAddEmployee = (e) => {
    e.preventDefault();
    if (editingEmployee) {
      setEmployees(prev => prev.map(emp => 
        emp.id === editingEmployee.id 
          ? { ...emp, ...newEmployee, earnings: parseInt(newEmployee.earnings) }
          : emp
      ));
      setEditingEmployee(null);
    } else {
      const newEmp = {
        id: employees.length + 1,
        ...newEmployee,
        earnings: parseInt(newEmployee.earnings),
        completedJobs: 0,
        rating: 0,
        joinDate: new Date().toISOString().split('T')[0],
        avatar: newEmployee.name.split(' ').map(n => n[0]).join('')
      };
      setEmployees(prev => [...prev, newEmp]);
    }
    setNewEmployee({ name: '', role: '', email: '', phone: '', earnings: '', status: 'Active' });
    setShowAddForm(false);
  };

  const handleEdit = (emp) => {
    setNewEmployee({
      name: emp.name,
      role: emp.role,
      email: emp.email,
      phone: emp.phone,
      earnings: emp.earnings.toString(),
      status: emp.status
    });
    setEditingEmployee(emp);
    setShowAddForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      setEmployees(prev => prev.filter(emp => emp.id !== id));
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800 border-green-200';
      case 'On Leave': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Inactive': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getRoleColor = (role) => {
    const colors = {
      'Plumber': 'bg-blue-50 text-blue-700',
      'Cleaner': 'bg-green-50 text-green-700',
      'Electrician': 'bg-orange-50 text-orange-700',
      'AC Technician': 'bg-purple-50 text-purple-700',
      'Carpenter': 'bg-amber-50 text-amber-700',
      'Painter': 'bg-pink-50 text-pink-700'
    };
    return colors[role] || 'bg-gray-50 text-gray-700';
  };

  return (
    <section className="w-full min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="font-bold text-3xl md:text-4xl text-gray-800 mb-2">
            Employee Management
          </h1>
          <p className="text-gray-600 text-lg">
            Manage your service team and track their performance
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium mb-1">Total Employees</p>
                <p className="text-2xl font-bold text-gray-800">{employees.length}</p>
              </div>
              <div className="p-3 rounded-full bg-blue-50 text-blue-500">
                <AccountCircle className="text-2xl" />
              </div>
            </div>
            <p className="text-green-600 text-sm font-medium mt-2">+2 this month</p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium mb-1">Active Now</p>
                <p className="text-2xl font-bold text-gray-800">
                  {employees.filter(emp => emp.status === 'Active').length}
                </p>
              </div>
              <div className="p-3 rounded-full bg-green-50 text-green-500">
                <Work className="text-2xl" />
              </div>
            </div>
            <p className="text-green-600 text-sm font-medium mt-2">On duty</p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium mb-1">Total Earnings</p>
                <p className="text-2xl font-bold text-gray-800">
                  ₹{employees.reduce((sum, emp) => sum + emp.earnings, 0).toLocaleString()}
                </p>
              </div>
              <div className="p-3 rounded-full bg-purple-50 text-purple-500">
                <TrendingUp className="text-2xl" />
              </div>
            </div>
            <p className="text-green-600 text-sm font-medium mt-2">This month</p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium mb-1">Avg Rating</p>
                <p className="text-2xl font-bold text-gray-800">4.8/5</p>
              </div>
              <div className="p-3 rounded-full bg-orange-50 text-orange-500">
                <span className="text-lg font-bold">★</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm font-medium mt-2">Service quality</p>
          </div>
        </div>

        {/* Controls Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search employees by name, role, or email..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-200 focus:border-purple-500 transition-colors text-gray-800 placeholder-gray-500"
              />
            </div>

            {/* Action Buttons - Filter button removed */}
            <div className="flex items-center space-x-3">
              <button 
                onClick={() => {
                  setShowAddForm(true);
                  setEditingEmployee(null);
                  setNewEmployee({ name: '', role: '', email: '', phone: '', earnings: '', status: 'Active' });
                }}
                className="flex items-center px-4 py-3 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition-colors"
              >
                <Add className="mr-2" />
                <span className="font-medium">Add Employee</span>
              </button>
            </div>
          </div>

          {/* Show Entries Selector */}
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-700">Show</span>
              <select
                value={entriesPerPage}
                onChange={(e) => {
                  setEntriesPerPage(parseInt(e.target.value));
                  setCurrentPage(1);
                }}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-purple-200 focus:border-purple-500 text-gray-800 bg-white"
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
              </select>
              <span className="text-sm text-gray-700">entries</span>
            </div>
            
            <div className="text-sm text-gray-600">
              Showing {indexOfFirstEntry + 1} to {Math.min(indexOfLastEntry, filteredEmployees.length)} of {filteredEmployees.length} entries
            </div>
          </div>
        </div>

        {/* Add/Edit Employee Form */}
        {showAddForm && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              {editingEmployee ? 'Edit Employee' : 'Add New Employee'}
            </h3>
            <form onSubmit={handleAddEmployee} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter full name"
                  value={newEmployee.name}
                  onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-200 focus:border-purple-500 transition-colors text-gray-800 placeholder-gray-500 bg-white"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                <select
                  value={newEmployee.role}
                  onChange={(e) => setNewEmployee({ ...newEmployee, role: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-200 focus:border-purple-500 transition-colors text-gray-800 bg-white"
                  required
                >
                  <option value="" className="text-gray-500">Select Role</option>
                  {roles.map(role => (
                    <option key={role} value={role} className="text-gray-800">{role}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="employee@homax.com"
                  value={newEmployee.email}
                  onChange={(e) => setNewEmployee({ ...newEmployee, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-200 focus:border-purple-500 transition-colors text-gray-800 placeholder-gray-500 bg-white"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={newEmployee.phone}
                  onChange={(e) => setNewEmployee({ ...newEmployee, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-200 focus:border-purple-500 transition-colors text-gray-800 placeholder-gray-500 bg-white"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Earnings (₹)</label>
                <input
                  type="number"
                  placeholder="5000"
                  value={newEmployee.earnings}
                  onChange={(e) => setNewEmployee({ ...newEmployee, earnings: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-200 focus:border-purple-500 transition-colors text-gray-800 placeholder-gray-500 bg-white"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <select
                  value={newEmployee.status}
                  onChange={(e) => setNewEmployee({ ...newEmployee, status: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-200 focus:border-purple-500 transition-colors text-gray-800 bg-white"
                >
                  {statusOptions.map(status => (
                    <option key={status} value={status} className="text-gray-800">{status}</option>
                  ))}
                </select>
              </div>
              
              <div className="md:col-span-2 lg:col-span-3 flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition-colors font-medium"
                >
                  {editingEmployee ? 'Update Employee' : 'Add Employee'}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Employees Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="p-4 text-left text-sm font-semibold text-gray-700">Employee</th>
                  <th className="p-4 text-left text-sm font-semibold text-gray-700">Role</th>
                  <th className="p-4 text-left text-sm font-semibold text-gray-700">Contact</th>
                  <th className="p-4 text-left text-sm font-semibold text-gray-700">Earnings</th>
                  <th className="p-4 text-left text-sm font-semibold text-gray-700">Status</th>
                  <th className="p-4 text-left text-sm font-semibold text-gray-700">Performance</th>
                  <th className="p-4 text-left text-sm font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {currentEmployees.map((employee) => (
                  <tr key={employee.id} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                          {employee.avatar}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-800">{employee.name}</div>
                          <div className="text-sm text-gray-500">ID: {employee.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getRoleColor(employee.role)}`}>
                        {employee.role}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="text-gray-800 font-medium">{employee.email}</div>
                      <div className="text-sm text-gray-500 flex items-center">
                        <Phone className="w-3 h-3 mr-1" />
                        {employee.phone}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="text-gray-800 font-semibold">₹{employee.earnings.toLocaleString()}</div>
                      <div className="text-sm text-gray-500">monthly</div>
                    </td>
                    <td className="p-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(employee.status)}`}>
                        {employee.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center space-x-2">
                        <div className="text-sm">
                          <div className="text-gray-800 font-medium">{employee.completedJobs} jobs</div>
                          <div className="text-gray-500">★ {employee.rating}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center space-x-2">
                        <button 
                          onClick={() => handleEdit(employee)}
                          className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors" 
                          title="Edit"
                        >
                          <Edit className="text-lg" />
                        </button>
                        <button 
                          onClick={() => handleDelete(employee.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors" 
                          title="Delete"
                        >
                          <Delete className="text-lg" />
                        </button>
                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="View">
                          <Visibility className="text-lg" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center p-6 border-t border-gray-200 bg-gray-50">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-gray-700"
                >
                  Previous
                </button>
                
                <span className="px-4 py-2 text-gray-700">
                  Page {currentPage} of {totalPages}
                </span>
                
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-gray-700"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AdminEmployees;