package com.project.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.demo.model.Blog;

public interface BlogRepository extends JpaRepository<Blog, Long> {
}
