package com.project.demo.model;

import lombok.*;

import java.time.LocalDateTime;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "manufacturers")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Manufacturer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String address;
    private String phone;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
