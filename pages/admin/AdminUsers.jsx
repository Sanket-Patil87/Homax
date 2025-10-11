import React from 'react';
import AdminLayout from '../../src/components/admin/adminLayout';
import AdminUsers from '../../src/components/admin/adminUsers';

const AdminUsersPage = () => {
  return (
    <AdminLayout>
      <AdminUsers />
    </AdminLayout>
  );
};

export default AdminUsersPage;