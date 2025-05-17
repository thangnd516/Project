package com.project.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import com.project.demo.model.Medicine;

@Repository
public interface MedicineRepository extends JpaRepository<Medicine, Long> {
    Page<Medicine> findAll(Pageable pageable);

    Page<Medicine> findByNameContainingIgnoreCase(String keyword, Pageable pageable);
}
