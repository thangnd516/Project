package com.project.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.demo.model.User;
import com.project.demo.repository.UserRepository;
@Service
public class UserService implements IUserService {
    @Autowired private UserRepository userRepo;

    public User createUser(User user) {
        return userRepo.save(user);
    }

    public Optional<User> findByUsername(String username) {
        return userRepo.findByUsername(username);
    }

    public List<User> getAllUsers() {
        return userRepo.findAll();
    }
}
