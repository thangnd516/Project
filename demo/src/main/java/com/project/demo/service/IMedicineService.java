package com.project.demo.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import com.project.demo.model.Medicine;

public interface IMedicineService {
    Page<Medicine> findAll(Pageable pageable);

    Medicine findById(Long id);

    Medicine save(Medicine medicine);

    void delete(Long id);

    Page<Medicine> searchByName(String keyword, Pageable pageable);

    List<Medicine> findTop6ByOrderByStockQuantityDesc();
}
