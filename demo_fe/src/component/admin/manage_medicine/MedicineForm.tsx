import React, { useEffect, useState } from "react";
import {
  Button,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormLabel,
} from "@chakra-ui/react";
import { Medicine } from "../../../type/UserType";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (medicine: Medicine) => void;
  medicine: Medicine | null;
}

const MedicineForm: React.FC<Props> = ({ isOpen, onClose, onSubmit, medicine }) => {
  const [form, setForm] = useState<Medicine>(
    medicine || {
      id: 0,
      name: "",
      description: "",
      price: 0,
      stockQuantity: 0,
      expiryDate: "",
      categoryId: 0,
      manufacturerId: 0,
      created_at: "",
      updated_at: "",
      categoryName: "",
      images: [],
    }
  );

  useEffect(() => {
    if (medicine) {
      setForm(medicine);
    }
  }, [medicine]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: name === "price" || name === "stockQuantity" || name === "categoryId" || name === "manufacturerId" ? Number(value) : value });
  };

  const handleSubmit = () => {
    onSubmit(form);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{form.id ? "Cập nhật thuốc" : "Thêm thuốc mới"}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormLabel>Tên thuốc</FormLabel>
          <Input name="name" value={form.name} onChange={handleChange} />

          <FormLabel className="mt-2">Mô tả</FormLabel>
          <Input name="description" value={form.description} onChange={handleChange} />

          <FormLabel className="mt-2">Giá</FormLabel>
          <Input name="price" type="number" value={form.price} onChange={handleChange} />

          <FormLabel className="mt-2">Số lượng</FormLabel>
          <Input name="stockQuantity" type="number" value={form.stockQuantity} onChange={handleChange} />

          <FormLabel className="mt-2">Hạn sử dụng</FormLabel>
          <Input name="expiryDate" type="date" value={form.expiryDate.slice(0, 10)} onChange={handleChange} />

          <FormLabel className="mt-2">ID Danh mục</FormLabel>
          <Input name="categoryId" type="number" value={form.categoryName} onChange={handleChange} />

          <FormLabel className="mt-2">ID Nhà sản xuất</FormLabel>
          <Input name="manufacturerId" type="number" value={form.manufacturerId} onChange={handleChange} />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
            {form.id ? "Lưu thay đổi" : "Thêm"}
          </Button>
          <Button onClick={onClose}>Hủy</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default MedicineForm;
