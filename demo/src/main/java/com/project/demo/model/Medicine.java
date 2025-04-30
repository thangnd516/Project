package com.project.demo.model;
import lombok.*;

import java.time.LocalDateTime;
import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name = "medicines") 
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Medicine {

    @Id
    private Long id;

    private String name;
    private String description;
    private Double price;
    private Integer stockQuantity;
    private Date expiryDate;
    private Long categoryId;
    private Long manufacturerId;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
