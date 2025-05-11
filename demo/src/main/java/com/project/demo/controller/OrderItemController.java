package com.project.demo.controller;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.demo.model.Medicine;
import com.project.demo.model.OrderItem;
import com.project.demo.model.Orders;
import com.project.demo.service.MedicineService;
import com.project.demo.service.OrderItemService;
import com.project.demo.service.OrderService;

@RestController
@RequestMapping("/order-items")
public class OrderItemController {
    @Autowired
    private OrderItemService itemService;
     @Autowired
    private OrderService orderService;
     @Autowired
    private MedicineService medicineService;

    @PostMapping
public ResponseEntity<OrderItem> createItem(@RequestBody OrderItem item) {
    if (item.getOrder() == null || item.getOrder().getId() == null) {
        return ResponseEntity.badRequest().body(null);
    }
    if (item.getMedicine() == null || item.getMedicine().getId() == null) {
        return ResponseEntity.badRequest().body(null);
    }

    item.setCreatedAt(LocalDateTime.now());
    item.setUpdatedAt(LocalDateTime.now());

    OrderItem saved = itemService.createItem(item);

    Orders fullOrder = orderService.findById(saved.getOrder().getId()); 
    Medicine fullMedicine = medicineService.findById(saved.getMedicine().getId());

    saved.setOrder(fullOrder);
    saved.setMedicine(fullMedicine);

    return ResponseEntity.ok(saved);
}

}
