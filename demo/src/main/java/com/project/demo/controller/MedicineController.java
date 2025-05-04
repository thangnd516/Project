package com.project.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.project.demo.DTO.MedicineDTO;
import com.project.demo.model.Image;
import com.project.demo.model.Medicine;
import com.project.demo.service.MedicineService;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/medicines")
public class MedicineController {

    @Autowired
    private MedicineService medicineService;

    @GetMapping("")
    public ResponseEntity<List<MedicineDTO>> getAllMedicines() {
        List<Medicine> medicines = medicineService.findAll();
        List<MedicineDTO> dtoList = medicines.stream()
                .map(med -> new MedicineDTO(
                        med.getId(),
                        med.getName(),
                        med.getDescription(),
                        med.getPrice(),
                        med.getStockQuantity(),
                        med.getExpiryDate(),
                        med.getImages().stream().map(Image::getUrl).toList()))
                .toList();

        return ResponseEntity.ok(dtoList);
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
