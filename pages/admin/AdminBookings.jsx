import React from 'react';
import AdminLayout from '../../src/components/admin/adminLayout';
import AdminBookings from '../../src/components/admin/adminBookings';

const AdminBookingsPage = () => {
  return (
    <AdminLayout>
      <AdminBookings />
    </AdminLayout>
  );
};

export default AdminBookingsPage;