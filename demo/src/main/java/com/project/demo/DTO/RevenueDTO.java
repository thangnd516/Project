package com.project.demo.DTO;

public class RevenueDTO {
    private String period;
    private Double totalRevenue;

    public RevenueDTO(String period, Double totalRevenue) {
        this.period = period;
        this.totalRevenue = totalRevenue;
    }

    public String getPeriod() {
        return period;
    }

    public Double getTotalRevenue() {
        return totalRevenue;
    }
}
