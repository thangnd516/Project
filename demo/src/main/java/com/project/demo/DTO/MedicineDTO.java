package com.project.demo.DTO;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import com.project.demo.model.Image;
import com.project.demo.model.Medicine;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MedicineDTO {
    private Long id;
    private String name;
    private String description;
    private Double price;
    private Integer stockQuantity;
    private Date expiryDate;
    private List<String> images;
    private String categoryName;

    public MedicineDTO(Medicine medicine) {
        this.id = medicine.getId();
        this.name = medicine.getName();
        this.description = medicine.getDescription();
        this.price = medicine.getPrice();
        this.stockQuantity = medicine.getStockQuantity();
        this.expiryDate = medicine.getExpiryDate();
        this.images = medicine.getImages().stream()
                .map(Image::getUrl)
                .collect(Collectors.toList());
        this.categoryName = (medicine.getCategory() != null) ? medicine.getCategory().getName() : null;
    }
   
}
