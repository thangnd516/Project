package com.project.demo.service;

import java.util.List;

import com.project.demo.model.Manufacturer;

public interface IManufacturerService {
    List<Manufacturer> getAll();

    Manufacturer getById(Long id);

    Manufacturer create(Manufacturer manufacturer);

    Manufacturer update(Long id, Manufacturer manufacturer);

    void delete(Long id);
}