package com.project.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.demo.DTO.RevenueDTO;
import com.project.demo.model.Orders;
import com.project.demo.service.OrderService;

@RestController
@RequestMapping("/orders")
public class OrderController {
    @Autowired
    private OrderService orderService;

    @GetMapping
    public List<Orders> getAllOrders() {
        return orderService.getAllOrders();
    }

    @PostMapping
    public ResponseEntity<Orders> createOrder(@RequestBody Orders order) {
        return ResponseEntity.ok(orderService.createOrder(order));
    }

    // Doanh thu theo tháng
    @GetMapping("/monthly")
    public List<RevenueDTO> getMonthlyRevenue(@RequestParam int year) {
        return orderService.getMonthlyRevenue(year);
    }

    // Doanh thu theo quý
    @GetMapping("/quarterly")
    public List<RevenueDTO> getQuarterlyRevenue(@RequestParam int year) {
        return orderService.getQuarterlyRevenue(year);
    }

    // Doanh thu theo năm
    @GetMapping("/yearly")
    public List<RevenueDTO> getYearlyRevenue() {
        return orderService.getYearlyRevenue();
    }
}
