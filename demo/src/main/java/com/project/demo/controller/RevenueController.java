package com.project.demo.controller;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.demo.repository.OrderItemRepository;

@RestController
@RequestMapping("/api/revenue")
public class RevenueController {

    @Autowired
    private OrderItemRepository orderItemRepository;

    @GetMapping("/monthly")
    public List<RevenueProjection> getMonthlyRevenue(@RequestParam(defaultValue = "2024") int year) {
        return orderItemRepository.findMonthlyRevenue(year);
    }

    @GetMapping("/quarterly")
    public List<RevenueProjection> getQuarterlyRevenue(@RequestParam(defaultValue = "2024") int year) {
        return orderItemRepository.findQuarterlyRevenue(year);
    }

    @GetMapping("/yearly")
    public List<RevenueProjection> getYearlyRevenue(@RequestParam(defaultValue = "2024") int year) {
        return orderItemRepository.findMonthlyRevenue(year);
    }
}
