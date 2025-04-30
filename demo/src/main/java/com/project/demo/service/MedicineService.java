package com.project.demo.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.demo.model.Medicine;
import com.project.demo.repository.MedicineRepository;

import java.util.List;

@Service
public class MedicineService implements IMedicineService {

   @Autowired
    private MedicineRepository medicineRepository;
    
    @Override
    public List<Medicine> findAll() {
        return medicineRepository.findAll();
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
}
