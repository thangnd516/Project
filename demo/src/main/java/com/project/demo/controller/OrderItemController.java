package com.project.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.demo.model.OrderItem;
import com.project.demo.service.OrderItemService;

@RestController
@RequestMapping("/order-items")
public class OrderItemController {
    @Autowired
    private OrderItemService itemService;

    @PostMapping
    public ResponseEntity<OrderItem> createItem(@RequestBody OrderItem item) {
        return ResponseEntity.ok(itemService.createItem(item));
    }
}
