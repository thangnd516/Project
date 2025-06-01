import React, { useEffect, useState } from "react";
import { Medicine } from "../../../type/UserType";
import * as service from "../../../service/apiService";
import { toast } from "react-toastify";
import { MedicineTable } from "./MedicinceAdmin";
import MedicineForm from "./MedicineForm";

const MedicineListPage: React.FC = () => {
  const [medicines, setMedicines] = useState<Medicine[]>([]);
  const [editingMedicine, setEditingMedicine] = useState<Medicine | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const fetchMedicines = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/medicines");
      const data = await response.json();
      setMedicines(data);
    } catch (err) {
      toast.error("Lỗi khi lấy danh sách thuốc");
    }
  };

  useEffect(() => {
    fetchMedicines();
  }, []);

  const handleDelete = async (id: number) => {
    if (confirm("Bạn có chắc muốn xóa thuốc này?")) {
      try {
        await service.deleteMedicineById(id);
        setMedicines((prev) => prev.filter((m) => m.id !== id));
        toast.success("Xóa thành công");
      } catch {
        toast.error("Xóa thất bại");
      }
    }
  };

  const handleSave = async (medicine: Medicine) => {
    try {
      if (medicine.id) {
        await service.updateMedicine(medicine);
        toast.success("Cập nhật thành công");
      } else {
        await service.createMedicine(medicine);
        toast.success("Thêm thành công");
      }
      setIsFormOpen(false);
      setEditingMedicine(null);
      fetchMedicines();
    } catch {
      toast.error("Lưu thất bại");
    }
  };

  const handleEdit = (medicine: Medicine) => {
    setEditingMedicine(medicine);
    setIsFormOpen(true);
  };

  const handleAdd = () => {
    setEditingMedicine(null);
    setIsFormOpen(true);
  };
  return (
    <div className="p-6">
      <MedicineTable
        medicines={medicines}
        onDelete={handleDelete}
        onEdit={handleEdit}
        onAdd={handleAdd}
      />
      <MedicineForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSubmit={handleSave}
        medicine={editingMedicine}
      />
    </div>
  );
};

export default MedicineListPage;
