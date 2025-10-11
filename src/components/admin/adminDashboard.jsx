import React from 'react';
import { Star, People, BookOnline, AttachMoney } from '@mui/icons-material';

const AdminDashboard = () => {
  // Mock data
  const stats = [
    {
      id: 1,
      title: 'Total Users',
      value: '150',
      icon: People,
      color: 'bg-blue-500',
    },
    {
      id: 2,
      title: 'Total Bookings',
      value: '300',
      icon: BookOnline,
      color: 'bg-green-500',
    },
    {
      id: 3,
      title: 'Total Earnings',
      value: '₹45,000',
      icon: AttachMoney,
      color: 'bg-purple-500',
    },
    {
      id: 4,
      title: 'Avg Rating',
      value: '4.7',
      icon: Star,
      color: 'bg-yellow-500',
    },
  ];

  const recentRequests = [
    {
      id: 1,
      service: 'AC Maintenance',
      time: '10 AM',
      date: 'Friday',
      status: 'Pending',
      statusColor: 'bg-yellow-100 text-yellow-800',
    },
    {
      id: 2,
      service: 'Dishwasher Repair',
      time: '2 PM',
      date: 'Friday',
      status: 'Scheduled',
      statusColor: 'bg-green-100 text-green-800',
    },
    {
      id: 3,
      service: 'Home Deep Cleaning',
      time: '11 AM',
      date: 'Saturday',
      status: 'Completed',
      statusColor: 'bg-blue-100 text-blue-800',
    },
  ];

  const quickTasks = [
    { id: 1, task: 'Approve Booking #45', action: 'Approve' },
    { id: 2, task: 'Review Feedback #78', action: 'Review' },
    { id: 3, task: 'Update Service #12', action: 'Update' },
  ];

  return (
    <section className="w-full min-h-screen bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-bold text-3xl md:text-4xl text-gray-800 mb-2">
            Admin Dashboard
          </h1>
          <p className="text-gray-600 text-lg">
            Welcome back! Here's what's happening with your service platform.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium mb-1">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold text-gray-800">
                    {stat.value}
                  </p>
                </div>
                <div className={`p-3 rounded-full ${stat.color} text-white`}>
                  <stat.icon className="text-2xl" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Service Requests */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Recent Service Requests
              </h2>
              <div className="space-y-4">
                {recentRequests.map((request) => (
                  <div
                    key={request.id}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 mb-1">
                        {request.service}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {request.time} • {request.date}
                      </p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${request.statusColor}`}
                      >
                        {request.status}
                      </span>
                      <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition text-sm">
                        View
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 bg-gray-100 text-white-700 py-2 rounded-lg hover:bg-gray-200 transition text-sm">
                View All Requests
              </button>
            </div>
          </div>

          {/* Quick Tasks & Feedback */}
          <div className="space-y-6">
            {/* Quick Tasks */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Quick Tasks
              </h2>
              <div className="space-y-3">
                {quickTasks.map((task) => (
                  <div
                    key={task.id}
                    className="flex items-center justify-between p-3 border border-gray-200 rounded-lg"
                  >
                    <span className="text-sm text-gray-700">{task.task}</span>
                    <button className="bg-purple-500 text-white px-3 py-1 rounded hover:bg-purple-600 transition text-xs">
                      {task.action}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Customer Feedback */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Customer Feedback
              </h2>
              <div className="text-center">
                <div className="flex items-center justify-center mb-3">
                  <span className="text-3xl font-bold text-gray-800 mr-2">4.7</span>
                  <div className="flex">
                    {[...Array(5)].map((_, index) => (
                      <Star
                        key={index}
                        className={
                          index < 5 ? 'text-yellow-400' : 'text-gray-300'
                        }
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-2">
                  "Great service! Fixed my AC quickly and professionally."
                </p>
                <p className="text-gray-500 text-xs">(120 reviews total)</p>
                <button className="mt-3 bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition text-sm">
                  View All Feedback
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;