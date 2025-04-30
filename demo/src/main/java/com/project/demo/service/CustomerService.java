package com.project.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.demo.model.Customer;
import com.project.demo.repository.CustomerRepository;

@Service
public class CustomerService implements ICustomerService {

    @Autowired
    private CustomerRepository customerRepository;

    @Override
    public List<Customer> getAll() {
        return customerRepository.findAll();
    }

    @Override
    public Customer getById(Long id) {
        return customerRepository.findById(id).orElse(null);
    }

    @Override
    public Customer create(Customer customer) {
        return customerRepository.save(customer);
    }

    @Override
    public Customer update(Long id, Customer customer) {
        Customer existing = customerRepository.findById(id).orElse(null);
        if (existing != null) {
            existing.setName(customer.getName());
            existing.setPhone(customer.getPhone());
            existing.setAddress(customer.getAddress());
            existing.setEmail(customer.getEmail());
            return customerRepository.save(existing);
        }
        return null;
    }

    @Override
    public void delete(Long id) {
        customerRepository.deleteById(id);
    }
}
