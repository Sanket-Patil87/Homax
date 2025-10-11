import React from 'react';
import AdminLayout from '../../src/components/admin/adminLayout';
import AdminEmployees from '../../src/components/admin/adminEmployees';

const AdminEmployeesPage = () => {
  return (
    <AdminLayout>
      <AdminEmployees />
    </AdminLayout>
  );
};

export default AdminEmployeesPage;