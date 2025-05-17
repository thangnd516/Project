// Dashboard.tsx - Component cho trang Dashboard
import React from 'react';

export const Dashboard: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Bảng điều khiển</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <StatCard title="Người dùng" value="1,234" icon="users" color="blue" />
        <StatCard title="Đơn hàng" value="56" icon="shopping-cart" color="green" />
        <StatCard title="Doanh thu" value="120,450,000đ" icon="money-bill" color="yellow" />
      </div>
      
      <div className="mt-6 bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Hoạt động gần đây</h2>
        <ul className="space-y-2">
          <ActivityItem user="Nguyễn Văn A" action="đã thêm sản phẩm mới" time="5 phút trước" />
          <ActivityItem user="Trần Thị B" action="đã cập nhật đơn hàng #1234" time="30 phút trước" />
          <ActivityItem user="Lê Văn C" action="đã xóa người dùng" time="1 giờ trước" />
        </ul>
      </div>
    </div>
  );
};

interface StatCardProps {
  title: string;
  value: string;
  icon: string;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, color }) => {
  const getColorClass = () => {
    switch (color) {
      case 'blue': return 'bg-blue-500';
      case 'green': return 'bg-green-500';
      case 'yellow': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <div className="flex items-center">
        <div className={`${getColorClass()} p-3 rounded-full mr-4`}>
          <span className={`fas fa-${icon} text-white`}></span>
        </div>
        <div>
          <h3 className="text-gray-500">{title}</h3>
          <p className="text-2xl font-semibold">{value}</p>
        </div>
      </div>
    </div>
  );
};

interface ActivityItemProps {
  user: string;
  action: string;
  time: string;
}

const ActivityItem: React.FC<ActivityItemProps> = ({ user, action, time }) => {
  return (
    <li className="pb-2 border-b border-gray-200">
      <div className="flex justify-between">
        <div>
          <span className="font-medium">{user}</span> {action}
        </div>
        <span className="text-gray-500 text-sm">{time}</span>
      </div>
    </li>
  );
};
