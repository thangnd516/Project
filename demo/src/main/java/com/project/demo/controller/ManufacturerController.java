package com.project.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.demo.model.Manufacturer;
import com.project.demo.service.ManufacturerService;

@RestController
@RequestMapping("/api/manufacturers")
public class ManufacturerController {
    @Autowired
    private ManufacturerService manufacturerService;

    @GetMapping
    public ResponseEntity<List<Manufacturer>> getAll() {
        return ResponseEntity.ok(manufacturerService.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Manufacturer> getById(@PathVariable Long id) {
        Manufacturer manufacturer = manufacturerService.getById(id);
        if (manufacturer == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(manufacturer);
    }

    @PostMapping
    public ResponseEntity<Manufacturer> create(@RequestBody Manufacturer manufacturer) {
        return ResponseEntity.ok(manufacturerService.create(manufacturer));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Manufacturer> update(@PathVariable Long id, @RequestBody Manufacturer manufacturer) {
        Manufacturer updated = manufacturerService.update(id, manufacturer);
        if (updated == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(updated);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        manufacturerService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
