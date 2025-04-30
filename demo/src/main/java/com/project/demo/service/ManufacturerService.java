package com.project.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.demo.model.Manufacturer;
import com.project.demo.repository.ManufacturerRepository;

@Service
public class ManufacturerService implements IManufacturerService {
    @Autowired
    private ManufacturerRepository manufacturerRepository;

    @Override
    public List<Manufacturer> getAll() {
        return manufacturerRepository.findAll();
    }

    @Override
    public Manufacturer getById(Long id) {
        return manufacturerRepository.findById(id).orElse(null);
    }

    @Override
    public Manufacturer create(Manufacturer manufacturer) {
        return manufacturerRepository.save(manufacturer);
    }

    @Override
    public Manufacturer update(Long id, Manufacturer manufacturer) {
        Manufacturer existing = manufacturerRepository.findById(id).orElse(null);
        if (existing != null) {
            existing.setName(manufacturer.getName());
            existing.setAddress(manufacturer.getAddress());
            existing.setPhone(manufacturer.getPhone());
            return manufacturerRepository.save(existing);
        }
        return null;
    }

    @Override
    public void delete(Long id) {
        manufacturerRepository.deleteById(id);
    }
}
