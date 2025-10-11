import React from 'react';
import AdminLayout from '../../src/components/admin/adminLayout';
import AdminDashboard from '../../src/components/admin/adminDashboard';

const AdminDashboardPage = () => {
  return (
    <AdminLayout>
      <AdminDashboard />
    </AdminLayout>
  );
};

export default AdminDashboardPage;