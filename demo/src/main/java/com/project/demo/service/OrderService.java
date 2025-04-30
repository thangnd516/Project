package com.project.demo.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.demo.model.Orders;
import com.project.demo.repository.OrderRepository;

@Service
public class OrderService implements IOrderService {
    @Autowired
    private OrderRepository orderRepo;

    public List<Orders> getAllOrders() {
        return orderRepo.findAll();
    }

    public Orders createOrder(Orders order) {
        order.setOrderDate(LocalDateTime.now());
        return orderRepo.save(order);
    }
}
