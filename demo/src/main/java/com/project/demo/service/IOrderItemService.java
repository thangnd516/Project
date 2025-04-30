package com.project.demo.service;

import java.util.List;

import com.project.demo.model.OrderItem;
import com.project.demo.model.Orders;

public interface IOrderItemService {
    OrderItem createItem(OrderItem item);

    List<OrderItem> getItemsByOrder(Orders order);
}
