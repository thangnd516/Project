
package com.project.demo.service;

import java.util.List;

import com.project.demo.model.Customer;

public interface ICustomerService {
    List<Customer> getAll();

    Customer getById(Long id);

    Customer create(Customer customer);

    Customer update(Long id, Customer customer);

    void delete(Long id);
}