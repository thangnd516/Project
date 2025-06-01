import React, { useEffect, useState } from "react";
import { Box, Button, useToast } from "@chakra-ui/react";
import { Pencil, Trash2, Plus } from "lucide-react";

interface Category {
  id: number;
  name: string;
}

const CategoryManager: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [name, setName] = useState("");
  const [editing, setEditing] = useState<Category | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const toast = useToast();

  const fetchCategories = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/categories");
      const data = await response.json();
      setCategories(data);
    } catch {
      toast({
        title: "Lỗi khi tải danh mục",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleSubmit = async () => {
    try {
      const url = editing
        ? `http://localhost:8080/api/categories/${editing.id}`
        : "http://localhost:8080/api/categories";
      const method = editing ? "PUT" : "POST";

      await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });

      toast({
        title: editing ? "Cập nhật thành công" : "Thêm danh mục thành công",
        status: "success",
        duration: 2000,
      });

      fetchCategories();
      setIsOpen(false);
      setEditing(null);
      setName("");
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
      await fetch(`http://localhost:8080/api/categories/${id}`, { method: "DELETE" });
      toast({ title: "Xóa danh mục thành công", status: "success" });
      fetchCategories();
    } catch {
      toast({ title: "Không thể xóa danh mục", status: "error" });
    }
  };

  const handleEdit = (cat: Category) => {
    setEditing(cat);
    setName(cat.name);
    setIsOpen(true);
  };

  const handleAdd = () => {
    setEditing(null);
    setName("");
    setIsOpen(true);
  };

  return (
    <Box p={20}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Danh sách danh mục</h2>
        <Button onClick={handleAdd} colorScheme="teal" size="sm" leftIcon={<Plus size={16} />}>
          Thêm danh mục
        </Button>
      </div>

      <table className="min-w-full border border-collapse text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-3 py-2">ID</th>
            <th className="border px-3 py-2">Tên danh mục</th>
            <th className="border px-3 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((cat) => (
            <tr key={cat.id}>
              <td className="border px-3 py-2 text-center">{cat.id}</td>
              <td className="border px-3 py-2">{cat.name}</td>
              <td className="border px-3 py-2 text-center space-x-2">
                <button
                  className="text-blue-600 font-medium inline-flex items-center"
                  onClick={() => handleEdit(cat)}
                >
                  <Pencil size={14} className="mr-1" />
                  Cập nhật
                </button>
                <button
                  className="text-red-600 font-medium inline-flex items-center"
                  onClick={() => handleDelete(cat.id)}
                >
                  <Trash2 size={14} className="mr-1" />
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Tailwind Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-30">
          <div className="bg-white rounded-lg w-96 shadow-md">
            <div className="px-4 py-2 border-b font-semibold text-lg">
              {editing ? "Sửa danh mục" : "Thêm danh mục mới"}
            </div>
            <div className="p-4">
              <input
                className="w-full border px-3 py-2 rounded"
                placeholder="Tên danh mục"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                  setName("");
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

export default CategoryManager;
