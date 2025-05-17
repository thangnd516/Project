
// Staff.tsx - Component cho trang Nhân viên
import React from 'react';

export const Staff: React.FC = () => {
  const staffMembers = [
    { id: 1, name: 'Nguyễn Văn A', position: 'Quản lý', department: 'Kinh doanh', status: 'Đang làm việc' },
    { id: 2, name: 'Trần Thị B', position: 'Nhân viên', department: 'Marketing', status: 'Đang làm việc' },
    { id: 3, name: 'Lê Văn C', position: 'Kỹ thuật viên', department: 'IT', status: 'Nghỉ phép' },
    { id: 4, name: 'Phạm Thị D', position: 'Kế toán', department: 'Tài chính', status: 'Đang làm việc' },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Quản lý nhân viên</h1>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
          Thêm nhân viên
        </button>
      </div>

      <div className="bg-white rounded shadow overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">ID</th>
              <th className="py-3 px-6 text-left">Họ tên</th>
              <th className="py-3 px-6 text-left">Chức vụ</th>
              <th className="py-3 px-6 text-left">Phòng ban</th>
              <th className="py-3 px-6 text-left">Trạng thái</th>
              <th className="py-3 px-6 text-center">Thao tác</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm">
            {staffMembers.map((staff) => (
              <tr key={staff.id} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-3 px-6">{staff.id}</td>
                <td className="py-3 px-6">{staff.name}</td>
                <td className="py-3 px-6">{staff.position}</td>
                <td className="py-3 px-6">{staff.department}</td>
                <td className="py-3 px-6">
                  <span className={`py-1 px-3 rounded-full text-xs ${
                    staff.status === 'Đang làm việc' ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'
                  }`}>
                    {staff.status}
                  </span>
                </td>
                <td className="py-3 px-6 text-center">
                  <div className="flex item-center justify-center">
                    <button className="transform hover:text-blue-500 hover:scale-110 mr-2">
                      <span className="fas fa-edit"></span>
                    </button>
                    <button className="transform hover:text-red-500 hover:scale-110">
                      <span className="fas fa-trash"></span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};