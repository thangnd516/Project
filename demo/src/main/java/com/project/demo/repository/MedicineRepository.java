package com.project.demo.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.demo.model.Medicine;

@Repository
public interface MedicineRepository extends JpaRepository<Medicine, Long> {
}
