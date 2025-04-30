package com.project.demo.service;

import java.util.List;

import com.project.demo.model.Category;

public interface ICategoryService {
    List<Category> getAll();

    Category getById(Long id);

    Category create(Category category);

    Category update(Long id, Category category);

    void delete(Long id);
}