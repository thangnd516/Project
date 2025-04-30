package com.project.demo.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.project.demo.model.Medicine;
import com.project.demo.service.MedicineService;

import java.util.List;

@RestController
@RequestMapping("/api/medicines")
public class MedicineController {

    
    @Autowired
    private MedicineService medicineService;

    @GetMapping("")
    public ResponseEntity<List<Medicine>> getAll() {
        return ResponseEntity.ok(medicineService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Medicine> getById(@PathVariable Long id) {
        return ResponseEntity.ok(medicineService.findById(id));
    }

    @PostMapping("")
    public ResponseEntity<Medicine> create(@RequestBody Medicine medicine) {
        return ResponseEntity.ok(medicineService.save(medicine));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Medicine> update(@PathVariable Long id, @RequestBody Medicine medicine) {
        medicine.setId(id);
        return ResponseEntity.ok(medicineService.save(medicine));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        medicineService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
