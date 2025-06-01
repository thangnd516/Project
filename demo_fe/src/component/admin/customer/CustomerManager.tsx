import React, { useEffect, useState } from "react";
import { Box, Button, useToast } from "@chakra-ui/react";
import { Pencil, Trash2, Plus } from "lucide-react";

interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
}

const CustomerManager: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [form, setForm] = useState<Omit<Customer, "id">>({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [editing, setEditing] = useState<Customer | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const toast = useToast();

  const fetchCustomers = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/customers");
      const data = await res.json();
      setCustomers(data);
    } catch {
      toast({
        title: "Lỗi khi tải danh sách khách hàng",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const handleSubmit = async () => {
    try {
      const url = editing
        ? `http://localhost:8080/api/customers/${editing.id}`
        : "http://localhost:8080/api/customers";
      const method = editing ? "PUT" : "POST";

      await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      toast({
        title: editing ? "Cập nhật khách hàng thành công" : "Thêm khách hàng thành công",
        status: "success",
        duration: 2000,
      });

      fetchCustomers();
      setIsOpen(false);
      setEditing(null);
      setForm({ name: "", email: "", phone: "", address: "" });
    } catch {
      toast({
        title: "Lỗi xử lý",
        status: "error",
        duration: 3000,
      });
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await fetch(`http://localhost:8080/api/customers/${id}`, { method: "DELETE" });
      toast({ title: "Đã xóa khách hàng", status: "success" });
      fetchCustomers();
    } catch {
      toast({ title: "Không thể xóa khách hàng", status: "error" });
    }
  };

  const handleEdit = (c: Customer) => {
    setEditing(c);
    setForm({
      name: c.name,
      email: c.email,
      phone: c.phone,
      address: c.address,
    });
    setIsOpen(true);
  };

  const handleAdd = () => {
    setEditing(null);
    setForm({ name: "", email: "", phone: "", address: "" });
    setIsOpen(true);
  };

  return (
    <Box p={20}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Danh sách khách hàng</h2>
        <Button onClick={handleAdd} colorScheme="teal" size="sm" leftIcon={<Plus size={16} />}>
          Thêm khách hàng
        </Button>
      </div>

      <table className="min-w-full border border-collapse text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-3 py-2">ID</th>
            <th className="border px-3 py-2">Tên</th>
            <th className="border px-3 py-2">Email</th>
            <th className="border px-3 py-2">SĐT</th>
            <th className="border px-3 py-2">Địa chỉ</th>
            <th className="border px-3 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((c) => (
            <tr key={c.id}>
              <td className="border px-3 py-2 text-center">{c.id}</td>
              <td className="border px-3 py-2">{c.name}</td>
              <td className="border px-3 py-2">{c.email}</td>
              <td className="border px-3 py-2">{c.phone}</td>
              <td className="border px-3 py-2">{c.address}</td>
              <td className="border px-3 py-2 text-center space-x-2">
                <button
                  className="text-blue-600 font-medium inline-flex items-center"
                  onClick={() => handleEdit(c)}
                >
                  <Pencil size={14} className="mr-1" />
                  Cập nhật
                </button>
                <button
                  className="text-red-600 font-medium inline-flex items-center"
                  onClick={() => handleDelete(c.id)}
                >
                  <Trash2 size={14} className="mr-1" />
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-30">
          <div className="bg-white rounded-lg w-96 shadow-md">
            <div className="px-4 py-2 border-b font-semibold text-lg">
              {editing ? "Sửa khách hàng" : "Thêm khách hàng"}
            </div>
            <div className="p-4 space-y-3">
              <input
                className="w-full border px-3 py-2 rounded"
                placeholder="Tên khách hàng"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <input
                className="w-full border px-3 py-2 rounded"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              <input
                className="w-full border px-3 py-2 rounded"
                placeholder="Số điện thoại"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
              <input
                className="w-full border px-3 py-2 rounded"
                placeholder="Địa chỉ"
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
              />
            </div>
            <div className="flex justify-end gap-2 px-4 py-2 border-t">
              <button
                className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={handleSubmit}
              >
                {editing ? "Lưu" : "Thêm"}
              </button>
              <button
                className="px-4 py-1 bg-gray-200 rounded hover:bg-gray-300"
                onClick={() => {
                  setIsOpen(false);
                  setEditing(null);
                  setForm({ name: "", email: "", phone: "", address: "" });
                }}
              >
                Hủy
              </button>
            </div>
          </div>
        </div>
      )}
    </Box>
  );
};

export default CustomerManager;
