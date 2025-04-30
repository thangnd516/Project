package com.project.demo.service;

import java.util.List;
import java.util.Optional;

import com.project.demo.model.User;

public interface IUserService {

    User createUser(User user);

    Optional<User> findByUsername(String username);

    List<User> getAllUsers();
}
