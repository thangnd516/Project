package com.project.demo.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.demo.DTO.RevenueDTO;
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

    public Orders findById(Long id) {
        Optional<Orders> optional = orderRepo.findById(id);
        return optional.orElse(null);
    }

    public List<RevenueDTO> getMonthlyRevenue(int year) {
        return orderRepo.findMonthlyRevenue(year);
    }

    public List<RevenueDTO> getQuarterlyRevenue(int year) {
        return orderRepo.findQuarterlyRevenue(year);
    }

    public List<RevenueDTO> getYearlyRevenue() {
        return orderRepo.findYearlyRevenue();
    }

    public List<RevenueDTO> getRevenueByMonth() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getRevenueByMonth'");
    }

}
