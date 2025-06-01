package com.project.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.demo.model.Orders;

public interface OrderRepository extends JpaRepository<Orders, Long> {

}
