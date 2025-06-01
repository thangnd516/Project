import React, { useEffect, useState } from "react";
import { Box, Button, useToast } from "@chakra-ui/react";
import { Pencil, Trash2, Plus } from "lucide-react";

interface Manufacturer {
  id: number;
  name: string;
  address: string;
  phone: string;
}

const ManufacturerManager: React.FC = () => {
  const [manufacturers, setManufacturers] = useState<Manufacturer[]>([]);
  const [form, setForm] = useState<Omit<Manufacturer, "id">>({
    name: "",
    address: "",
    phone: "",
  });
  const [editing, setEditing] = useState<Manufacturer | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const toast = useToast();

  const fetchManufacturers = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/manufacturers");
      const data = await response.json();
      setManufacturers(data);
    } catch {
      toast({
        title: "Lỗi khi tải danh sách nhà sản xuất",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    fetchManufacturers();
  }, []);

  const handleSubmit = async () => {
    try {
      const url = editing
        ? `http://localhost:8080/api/manufacturers/${editing.id}`
        : "http://localhost:8080/api/manufacturers";
      const method = editing ? "PUT" : "POST";

      await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      toast({
        title: editing ? "Cập nhật thành công" : "Thêm nhà sản xuất thành công",
        status: "success",
        duration: 2000,
      });

      fetchManufacturers();
      setIsOpen(false);
      setEditing(null);
      setForm({ name: "", address: "", phone: "" });
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
      await fetch(`http://localhost:8080/api/manufacturers/${id}`, { method: "DELETE" });
      toast({ title: "Xóa nhà sản xuất thành công", status: "success" });
      fetchManufacturers();
    } catch {
      toast({ title: "Không thể xóa", status: "error" });
    }
  };

  const handleEdit = (m: Manufacturer) => {
    setEditing(m);
    setForm({ name: m.name, address: m.address, phone: m.phone });
    setIsOpen(true);
  };

  const handleAdd = () => {
    setEditing(null);
    setForm({ name: "", address: "", phone: "" });
    setIsOpen(true);
  };

  return (
    <Box p={20}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Danh sách nhà sản xuất</h2>
        <Button onClick={handleAdd} colorScheme="teal" size="sm" leftIcon={<Plus size={16} />}>
          Thêm nhà sản xuất
        </Button>
      </div>

      <table className="min-w-full border border-collapse text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-3 py-2">ID</th>
            <th className="border px-3 py-2">Name</th>
            <th className="border px-3 py-2">Address</th>
            <th className="border px-3 py-2">Phone</th>
            <th className="border px-3 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {manufacturers.map((m) => (
            <tr key={m.id}>
              <td className="border px-3 py-2 text-center">{m.id}</td>
              <td className="border px-3 py-2">{m.name}</td>
              <td className="border px-3 py-2">{m.address}</td>
              <td  className="border px-3 py-2">{m.phone}</td>
              <td className="border px-3 py-2 text-center space-x-2">
                <button
                  className="text-blue-600 font-medium inline-flex items-center"
                  onClick={() => handleEdit(m)}
                >
                  <Pencil size={14} className="mr-1" />
                  Cập nhật
                </button>
                <button
                  className="text-red-600 font-medium inline-flex items-center"
                  onClick={() => handleDelete(m.id)}
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
              {editing ? "Sửa nhà sản xuất" : "Thêm nhà sản xuất"}
            </div>
            <div className="p-4 space-y-3">
              <input
                className="w-full border px-3 py-2 rounded"
                placeholder="Tên nhà sản xuất"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <input
                className="w-full border px-3 py-2 rounded"
                placeholder="Địa chỉ"
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
              />
              <input
                className="w-full border px-3 py-2 rounded"
                placeholder="Số điện thoại"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
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
                  setForm({ name: "", address: "", phone: "" });
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

export default ManufacturerManager;
