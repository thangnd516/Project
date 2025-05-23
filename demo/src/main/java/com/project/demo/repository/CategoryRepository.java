package com.project.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.demo.model.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
}