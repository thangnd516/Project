// components/UserDetail.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { User } from '../../type/UserType';

const UserDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios.get<User>(`/api/users/${id}`)
      .then((res) => setUser(res.data))
      .catch((err) => console.error('Lỗi khi lấy user:', err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div>Đang tải dữ liệu người dùng...</div>;
  if (!user) return <div>Không tìm thấy người dùng.</div>;

  return (
    <div className="user-detail">
      <h2>Chi tiết người dùng</h2>
      <p><strong>Tên đăng nhập:</strong> {user.username}</p>
      <p><strong>Vai trò:</strong> {user.role}</p>
      <p><strong>Ngày tạo:</strong> {new Date(user.createdAt).toLocaleString()}</p>
      <p><strong>Ngày cập nhật:</strong> {new Date(user.updatedAt).toLocaleString()}</p>
    </div>
  );
};

export default UserDetail;
