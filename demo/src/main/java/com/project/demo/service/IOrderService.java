package com.project.demo.service;

import java.util.List;

import com.project.demo.model.Orders;

public interface IOrderService {

    List<Orders> getAllOrders();

    Orders createOrder(Orders order);

    Orders findById(Long id);

}
