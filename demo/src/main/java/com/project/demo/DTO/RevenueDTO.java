package com.project.demo.DTO;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RevenueDTO {
    private String label;    // ví dụ: "Jan", "Q1", "2025"
    private double total;    // tổng doanh thu
}
