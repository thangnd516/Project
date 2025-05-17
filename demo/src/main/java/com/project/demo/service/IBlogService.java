package com.project.demo.service;

import java.util.List;

import com.project.demo.DTO.BlogDTO;
import com.project.demo.model.Blog;

public interface IBlogService {
    Blog create(BlogDTO dto);
    List<Blog> getAll();
    Blog getById(Long id);
    Blog update(Long id, BlogDTO dto);
    void delete(Long id);
}
