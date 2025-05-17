package com.project.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.demo.DTO.BlogDTO;
import com.project.demo.model.Blog;
import com.project.demo.repository.BlogRepository;
import com.project.demo.repository.UserRepository;

@Service
public class BlogService implements IBlogService {

    @Autowired
    private BlogRepository blogRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public Blog create(BlogDTO dto) {
        Blog blog = new Blog();
        blog.setTitle(dto.getTitle());
        blog.setContent(dto.getContent());
        blog.setExcerpt(dto.getExcerpt());
        blog.setImage(dto.getImage());
        blog.setAuthor(userRepository.findById(dto.getAuthorId()).orElse(null));
        return blogRepository.save(blog);
    }

    @Override
    public List<Blog> getAll() {
        return blogRepository.findAll();
    }

    @Override
    public Blog getById(Long id) {
        return blogRepository.findById(id).orElse(null);
    }

    @Override
    public Blog update(Long id, BlogDTO dto) {
        Blog blog = getById(id);
        if (blog == null) return null;
        blog.setTitle(dto.getTitle());
        blog.setContent(dto.getContent());
        blog.setExcerpt(dto.getExcerpt());
        blog.setImage(dto.getImage());
        return blogRepository.save(blog);
    }

    @Override
    public void delete(Long id) {
        blogRepository.deleteById(id);
    }
}
