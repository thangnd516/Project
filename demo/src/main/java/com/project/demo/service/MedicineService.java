package com.project.demo.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.demo.DTO.MedicineDTO;
import com.project.demo.model.Medicine;
import com.project.demo.repository.MedicineRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

@Service
public class MedicineService implements IMedicineService {

    @Autowired
    private MedicineRepository medicineRepository;

    @Override
    public Page<Medicine> findAll(Pageable pageable) {
        return medicineRepository.findAll(pageable);
    }

    @Override
    public Medicine findById(Long id) {
        return medicineRepository.findById(id).orElse(null);
    }

    @Override
    public Medicine save(Medicine medicine) {
        return medicineRepository.save(medicine);
    }

    @Override
    public void delete(Long id) {
        medicineRepository.deleteById(id);
    }

    @Override
    public Page<Medicine> searchByName(String keyword, Pageable pageable) {
        return medicineRepository.findByNameContainingIgnoreCase(keyword, pageable);
    }

    @Override
    public List<Medicine> findTop6ByOrderByStockQuantityDesc() {
        return medicineRepository.findTop6ByOrderByStockQuantityDesc();
    }

    @Override
    public List<MedicineDTO> getAllMedicines() {
        List<Medicine> medicines = medicineRepository.findAllWithCategory();
        return medicines.stream().map(MedicineDTO::new).collect(Collectors.toList());
    }

}
