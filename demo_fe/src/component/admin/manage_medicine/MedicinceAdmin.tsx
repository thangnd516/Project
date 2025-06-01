import React, { useState } from "react";
import { Pencil, Plus, Trash2 } from "lucide-react";
import { Medicine } from "../../../type/UserType";
import { Button } from "@chakra-ui/react";
import MedicineForm from "./MedicineForm";

interface Props {
  medicines: Medicine[];
  onEdit: (medicine: Medicine) => void;
  onDelete: (id: number) => void;
  onAdd: (medicine : Medicine) => void;
}

export const MedicineTable: React.FC<Props> = ({ medicines, onDelete, onEdit, onAdd }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedMedicine, setSelectedMedicine] = useState<Medicine | null>(null);

  const handleAddClick = () => {
    setSelectedMedicine(null);
    setIsFormOpen(true);
  };

  const handleEditClick = (medicine: Medicine) => {
    setSelectedMedicine(medicine);
    setIsFormOpen(true);
  };

  const handleFormSubmit = (medicine: Medicine) => {
    onAdd(medicine);
    setIsFormOpen(false);
    setSelectedMedicine(null);
  };
  return (
    <div className="overflow-x-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Danh sách thuốc</h2>
        <Button
          className="btn bg-teal-300 h-6"
          leftIcon={<Plus size={16} />}
          colorScheme="teal"
          size="sm"
          onClick={handleAddClick}
        >
          Thêm thuốc
        </Button>
      </div>
      <table className="min-w-full border text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-3 py-2 border">ID</th>
            <th className="px-3 py-2 border">Name</th>
            <th className="px-3 py-2 border">Description</th>
            <th className="px-3 py-2 border">Price</th>
            <th className="px-3 py-2 border">Stock</th>
            <th className="px-3 py-2 border">Expiry Date</th>
            <th className="px-3 py-2 border">Category</th>
            <th className="px-3 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {medicines.map((med) => (
            <tr key={med.id} className="hover:bg-gray-50">
              <td className="px-3 py-2 border text-center">{med.id}</td>
              <td className="px-3 py-2 border">{med.name}</td>
              <td className="px-3 py-2 border">{med.description}</td>
              <td className="px-3 py-2 border text-right">{med.price.toLocaleString()}₫</td>
              <td className="px-3 py-2 border text-center">{med.stockQuantity}</td>
              <td className="px-3 py-2 border text-center">
                {new Date(med.expiryDate).toLocaleDateString("vi-VN")}
              </td>
              <td className="px-3 py-2 border text-center">{med.categoryName}</td>
              <td className="px-3 py-2 border flex gap-2 justify-center">
                <Button size="sm" variant="outline" onClick={() => handleEditClick(med)}>
                  <Pencil color="blue" size={16} className="mr-1" /> Cập nhật
                </Button>
                <Button size="sm" variant="destructive" onClick={() => onDelete(med.id)}>
                  <Trash2 color="red" size={16} className="mr-1" /> Xóa
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <MedicineForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSubmit={handleFormSubmit}
        medicine={selectedMedicine}
      />
    </div>
  );
};
