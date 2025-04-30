package com.project.demo.service;

import java.util.List;

import com.project.demo.model.Medicine;

public interface IMedicineService {
    List<Medicine> findAll();
    Medicine findById(Long id);
    Medicine save(Medicine medicine);
    void delete(Long id);
}
