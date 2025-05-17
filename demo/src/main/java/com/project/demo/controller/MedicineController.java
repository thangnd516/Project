package com.project.demo.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.project.demo.DTO.MedicineDTO;
import com.project.demo.model.Medicine;
import com.project.demo.service.MedicineService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

@RestController
@RequestMapping("/api/medicines")
public class MedicineController {

    @Autowired
    private MedicineService medicineService;

    @GetMapping("/paginated")
    public ResponseEntity<Page<MedicineDTO>> getPaginatedMedicines(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "default") String sort,
            @RequestParam(required = false) String q) {
        Sort sortBy;

        switch (sort) {
            case "priceLowToHigh":
                sortBy = Sort.by("price").ascending();
                break;
            case "priceHighToLow":
                sortBy = Sort.by("price").descending();
                break;
            case "latest":
                sortBy = Sort.by("expiryDate").descending();
                break;
            case "popularity":
                sortBy = Sort.by("popularity").descending();
                break;
            default:
                sortBy = Sort.unsorted();
                break;
        }

        Pageable pageable = PageRequest.of(page, size, sortBy);
        Page<Medicine> medicinePage;

        if (q != null && !q.isEmpty()) {
            medicinePage = medicineService.searchByName(q, pageable);
        } else {
            medicinePage = medicineService.findAll(pageable);
        }

        Page<MedicineDTO> dtoPage = medicinePage.map(med -> new MedicineDTO(
                med.getId(),
                med.getName(),
                med.getDescription(),
                med.getPrice(),
                med.getStockQuantity(),
                med.getExpiryDate(),
                med.getImages().stream().map(img -> img.getUrl()).collect(Collectors.toList())));

        return ResponseEntity.ok(dtoPage);
    }

      @GetMapping("/best-selling")
    public List<Medicine> getBestSellingProducts() {
        return medicineService.findTop6ByOrderByStockQuantityDesc(); 
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
