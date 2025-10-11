import React, { useState } from 'react';
import { 
  Search, 
  FilterList,
  Assignment,
  Person,
  Build,
  LocationOn,
  Payment,
  Schedule,
  CheckCircle,
  Pending,
  PlayArrow
} from '@mui/icons-material';

const AdminBookings = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [showModal, setShowModal] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const [employeePayment, setEmployeePayment] = useState(0);

  const [bookings, setBookings] = useState([
    {
      id: 1,
      user: "John Doe",
      service: "Plumbing Repair",
      status: "Pending",
      employee: null,
      city: "Mumbai",
      area: "Andheri West",
      address: "123 Main Street, Apartment 4B",
      price: 1200,
      employeePayment: 0,
      date: "2024-01-15",
      time: "10:00 AM",
      userPhone: "+91 98765 43210",
      serviceType: "Emergency"
    },
    {
      id: 2,
      user: "Jane Smith",
      service: "Home Deep Cleaning",
      status: "In Progress",
      employee: "Raj Kumar",
      city: "Mumbai",
      area: "Bandra",
      address: "456 Palm Road, 2nd Floor",
      price: 2000,
      employeePayment: 1000,
      date: "2024-01-15",
      time: "2:30 PM",
      userPhone: "+91 98765 43211",
      serviceType: "Standard"
    },
    {
      id: 3,
      user: "Alice Johnson",
      service: "AC Maintenance",
      status: "Completed",
      employee: "Amit Patel",
      city: "Delhi",
      area: "Connaught Place",
      address: "789 Central Avenue",
      price: 1500,
      employeePayment: 800,
      date: "2024-01-14",
      time: "11:00 AM",
      userPhone: "+91 98765 43212",
      serviceType: "Maintenance"
    },
    {
      id: 4,
      user: "Bob Wilson",
      service: "Electrical Wiring",
      status: "Pending",
      employee: null,
      city: "Bangalore",
      area: "Koramangala",
      address: "321 Tech Park Road",
      price: 2500,
      employeePayment: 0,
      date: "2024-01-16",
      time: "3:00 PM",
      userPhone: "+91 98765 43213",
      serviceType: "Installation"
    },
  ]);

  const [employees] = useState([
    { id: 1, name: "Raj Kumar", city: "Mumbai", area: "Andheri West", available: true, role: "Plumber" },
    { id: 2, name: "Priya Sharma", city: "Mumbai", area: "Bandra", available: true, role: "Cleaner" },
    { id: 3, name: "Amit Patel", city: "Delhi", area: "Connaught Place", available: false, role: "AC Technician" },
    { id: 4, name: "Sneha Singh", city: "Mumbai", area: "Andheri West", available: true, role: "Electrician" },
    { id: 5, name: "Rohan Mehta", city: "Bangalore", area: "Koramangala", available: true, role: "Electrician" },
  ]);

  const filteredBookings = bookings.filter(
    (booking) =>
      booking.user.toLowerCase().includes(search.toLowerCase()) ||
      booking.service.toLowerCase().includes(search.toLowerCase()) ||
      booking.city.toLowerCase().includes(search.toLowerCase())
  );

  // Calculate pagination
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentBookings = filteredBookings.slice(indexOfFirstEntry, indexOfLastEntry);
  const totalPages = Math.ceil(filteredBookings.length / entriesPerPage);

  const handleAssignOrReallocate = (booking) => {
    setSelectedBooking(booking);
    setSelectedEmployee(booking.employee || "");
    setEmployeePayment(booking.employeePayment || 0);
    setShowModal(true);
  };

  const getNearbyEmployees = (city, area) => {
    return employees.filter(
      (emp) => emp.city === city && emp.available
    );
  };

  const handleAllocate = () => {
    if (!selectedEmployee || employeePayment <= 0) {
      alert("Please select an employee and set payment.");
      return;
    }

    setBookings((prev) =>
      prev.map((b) =>
        b.id === selectedBooking.id
          ? { ...b, employee: selectedEmployee, status: "In Progress", employeePayment }
          : b
      )
    );
    setShowModal(false);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800 border-green-200';
      case 'In Progress': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Cancelled': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Completed': return <CheckCircle className="w-4 h-4" />;
      case 'In Progress': return <PlayArrow className="w-4 h-4" />;
      case 'Pending': return <Pending className="w-4 h-4" />;
      default: return <Schedule className="w-4 h-4" />;
    }
  };

  return (
    <section className="w-full min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="font-bold text-3xl md:text-4xl text-gray-800 mb-2">
            Booking Management
          </h1>
          <p className="text-gray-600 text-lg">
            Manage and assign service bookings to your team
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium mb-1">Total Bookings</p>
                <p className="text-2xl font-bold text-gray-800">{bookings.length}</p>
              </div>
              <div className="p-3 rounded-full bg-blue-50 text-blue-500">
                <Assignment className="text-2xl" />
              </div>
            </div>
            <p className="text-green-600 text-sm font-medium mt-2">+5 this week</p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium mb-1">Pending</p>
                <p className="text-2xl font-bold text-gray-800">
                  {bookings.filter(b => b.status === 'Pending').length}
                </p>
              </div>
              <div className="p-3 rounded-full bg-yellow-50 text-yellow-500">
                <Pending className="text-2xl" />
              </div>
            </div>
            <p className="text-yellow-600 text-sm font-medium mt-2">Need assignment</p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium mb-1">In Progress</p>
                <p className="text-2xl font-bold text-gray-800">
                  {bookings.filter(b => b.status === 'In Progress').length}
                </p>
              </div>
              <div className="p-3 rounded-full bg-blue-50 text-blue-500">
                <PlayArrow className="text-2xl" />
              </div>
            </div>
            <p className="text-blue-600 text-sm font-medium mt-2">Active jobs</p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium mb-1">Revenue</p>
                <p className="text-2xl font-bold text-gray-800">
                  ₹{bookings.reduce((sum, b) => sum + b.price, 0).toLocaleString()}
                </p>
              </div>
              <div className="p-3 rounded-full bg-green-50 text-green-500">
                <Payment className="text-2xl" />
              </div>
            </div>
            <p className="text-green-600 text-sm font-medium mt-2">This month</p>
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
                placeholder="Search bookings by user, service, or city..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-200 focus:border-purple-500 transition-colors text-gray-800"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3">
              <button className="flex items-center px-4 py-3 border border-white-300 rounded-xl hover:bg-gray-50 transition-colors text-white-700">
                <FilterList className="mr-2 text-white-600" />
                <span className="font-medium">Filter</span>
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
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-purple-200 focus:border-purple-500 text-gray-800"
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
              </select>
              <span className="text-sm text-gray-700">entries</span>
            </div>
            
            <div className="text-sm text-gray-600">
              Showing {indexOfFirstEntry + 1} to {Math.min(indexOfLastEntry, filteredBookings.length)} of {filteredBookings.length} entries
            </div>
          </div>
        </div>

        {/* Bookings Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="p-4 text-left text-sm font-semibold text-gray-700">Booking Details</th>
                  <th className="p-4 text-left text-sm font-semibold text-gray-700">Service</th>
                  <th className="p-4 text-left text-sm font-semibold text-gray-700">Location</th>
                  <th className="p-4 text-left text-sm font-semibold text-gray-700">Status</th>
                  <th className="p-4 text-left text-sm font-semibold text-gray-700">Employee</th>
                  <th className="p-4 text-left text-sm font-semibold text-gray-700">Payments</th>
                  <th className="p-4 text-left text-sm font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {currentBookings.map((booking) => (
                  <tr key={booking.id} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4">
                      <div>
                        <div className="font-semibold text-gray-800">{booking.user}</div>
                        <div className="text-sm text-gray-500 flex items-center mt-1">
                          <Person className="w-3 h-3 mr-1" />
                          {booking.userPhone}
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                          {booking.date} at {booking.time}
                        </div>
                        <div className="text-xs text-purple-600 font-medium mt-1">
                          {booking.serviceType}
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center space-x-2">
                        <Build className="text-gray-400 text-lg" />
                        <div>
                          <div className="font-medium text-gray-800">{booking.service}</div>
                          <div className="text-sm text-gray-600">ID: #{booking.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center space-x-2">
                        <LocationOn className="text-gray-400 text-lg" />
                        <div>
                          <div className="font-medium text-gray-800">{booking.area}</div>
                          <div className="text-sm text-gray-600">{booking.city}</div>
                          <div className="text-xs text-gray-500 truncate max-w-xs">
                            {booking.address}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(booking.status)}`}>
                        {getStatusIcon(booking.status)}
                        <span className="ml-1">{booking.status}</span>
                      </span>
                    </td>
                    <td className="p-4">
                      {booking.employee ? (
                        <div className="text-gray-800 font-medium">{booking.employee}</div>
                      ) : (
                        <span className="text-red-600 text-sm font-medium">Not Assigned</span>
                      )}
                    </td>
                    <td className="p-4">
                      <div className="text-right">
                        <div className="font-semibold text-gray-800">₹{booking.price}</div>
                        {booking.employeePayment > 0 && (
                          <div className="text-sm text-gray-600">
                            Employee: ₹{booking.employeePayment}
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="p-4">
                      <button
                        onClick={() => handleAssignOrReallocate(booking)}
                        className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                          booking.employee 
                            ? "bg-yellow-500 text-white hover:bg-yellow-600"
                            : "bg-purple-500 text-white hover:bg-purple-600"
                        }`}
                      >
                        {booking.employee ? "Reallocate" : "Assign"}
                      </button>
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

        {/* Assignment Modal */}
        {showModal && selectedBooking && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-xl font-semibold text-gray-800">
                  {selectedBooking.employee ? "Reallocate Employee" : "Assign Employee to Booking"}
                </h3>
                <p className="text-gray-600 mt-1">Booking #{selectedBooking.id}</p>
              </div>

              <div className="p-6 space-y-6">
                {/* Booking Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Customer</label>
                    <div className="p-3 bg-gray-50 rounded-lg text-gray-800 border border-gray-200">
                      {selectedBooking.user} ({selectedBooking.userPhone})
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service</label>
                    <div className="p-3 bg-gray-50 rounded-lg text-gray-800 border border-gray-200">
                      {selectedBooking.service}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                    <div className="p-3 bg-gray-50 rounded-lg text-gray-800 border border-gray-200">
                      {selectedBooking.area}, {selectedBooking.city}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                    <div className="p-3 bg-gray-50 rounded-lg text-gray-800 border border-gray-200">
                      {selectedBooking.address}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Price</label>
                    <div className="p-3 bg-gray-50 rounded-lg text-gray-800 border border-gray-200">
                      ₹{selectedBooking.price}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Schedule</label>
                    <div className="p-3 bg-gray-50 rounded-lg text-gray-800 border border-gray-200">
                      {selectedBooking.date} at {selectedBooking.time}
                    </div>
                  </div>
                </div>

                {/* Assignment Fields */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Employee Payment (₹)
                    </label>
                    <input
                      type="number"
                      value={employeePayment}
                      onChange={(e) => setEmployeePayment(parseFloat(e.target.value) || 0)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-200 focus:border-purple-500 transition-colors text-gray-800"
                      placeholder="Enter payment amount for employee"
                      min="0"
                      max={selectedBooking.price}
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      Maximum: ₹{selectedBooking.price}
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select Employee
                    </label>
                    <select
                      value={selectedEmployee}
                      onChange={(e) => setSelectedEmployee(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-200 focus:border-purple-500 transition-colors text-gray-800"
                    >
                      <option value="">Choose available employee</option>
                      {getNearbyEmployees(selectedBooking.city, selectedBooking.area).map((emp) => (
                        <option key={emp.id} value={emp.name}>
                          {emp.name} - {emp.role} ({emp.area})
                        </option>
                      ))}
                    </select>
                    <p className="text-sm text-gray-500 mt-1">
                      {getNearbyEmployees(selectedBooking.city, selectedBooking.area).length} employees available in {selectedBooking.city}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-gray-200 flex justify-end space-x-3">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAllocate}
                  className="px-6 py-3 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition-colors font-medium"
                  disabled={!selectedEmployee || employeePayment <= 0}
                >
                  {selectedBooking.employee ? "Reallocate" : "Assign Employee"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AdminBookings;