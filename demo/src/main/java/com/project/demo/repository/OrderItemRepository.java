package com.project.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.demo.model.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {
}