package com.project.demo.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.demo.model.OrderItem;
import com.project.demo.model.Orders;
import com.project.demo.repository.OrderItemRepository;

@Service
public class OrderItemService implements IOrderItemService {
    @Autowired
    private OrderItemRepository itemRepo;

    public OrderItem createItem(OrderItem item) {
        try {
            item.setCreatedAt(LocalDateTime.now());
            item.setUpdatedAt(LocalDateTime.now());
            return itemRepo.save(item);
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    public List<OrderItem> getItemsByOrder(Orders order) {
        return itemRepo.findAll().stream()
                .filter(i -> i.getOrder().getId().equals(order.getId()))
                .collect(Collectors.toList());
    }
}
