// AdminLayout.tsx - Định nghĩa layout chính cho admin page
import React, { useState } from 'react';
import { AdminHome } from './AdminHome';
import { Staff } from './Staff';
import { SidebarItem } from '.';
import { Dashboard } from './Dashboard ';

// Các trang có thể hiển thị trong admin
enum AdminPage {
  HOME = 'home',
  DASHBOARD = 'dashboard',
  STAFF = 'staff',
}

export const AdminLayout: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<AdminPage>(AdminPage.HOME);

  // Xử lý click vào mục trong sidebar
  const handleNavigation = (page: AdminPage) => {
    setCurrentPage(page);
  };

  // Hiển thị nội dung tương ứng với trang được chọn
  const renderContent = () => {
    switch (currentPage) {
      case AdminPage.HOME:
        return <AdminHome />;
      case AdminPage.DASHBOARD:
        return <Dashboard />;
      case AdminPage.STAFF:
        return <Staff />;
      default:
        return <AdminHome />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white">
        <div className="p-4 font-bold text-xl">Admin Panel</div>
        <nav className="mt-6">
          <SidebarItem 
            isActive={currentPage === AdminPage.HOME} 
            onClick={() => handleNavigation(AdminPage.HOME)}
            icon="home"
            label="Trang chính"
          />
          <SidebarItem 
            isActive={currentPage === AdminPage.DASHBOARD} 
            onClick={() => handleNavigation(AdminPage.DASHBOARD)}
            icon="chart-bar"
            label="Dashboard"
          />
          <SidebarItem 
            isActive={currentPage === AdminPage.STAFF} 
            onClick={() => handleNavigation(AdminPage.STAFF)}
            icon="users"
            label="Nhân viên"
          />
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};
