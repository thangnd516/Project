package com.project.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.project.demo.model.Medicine;

@Repository
public interface MedicineRepository extends JpaRepository<Medicine, Long> {
    Page<Medicine> findAll(Pageable pageable);

    @Query("SELECT m FROM Medicine m LEFT JOIN FETCH m.category LEFT JOIN FETCH m.images")
    List<Medicine> findAllWithCategory();

    Page<Medicine> findByNameContainingIgnoreCase(String keyword, Pageable pageable);

    List<Medicine> findTop6ByOrderByStockQuantityDesc();
}
