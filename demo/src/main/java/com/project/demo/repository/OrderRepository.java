package com.project.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.project.demo.DTO.RevenueDTO;
import com.project.demo.model.Orders;

public interface OrderRepository extends JpaRepository<Orders, Long> {

    @Query("SELECT new com.project.demo.dto.RevenueDTO(FUNCTION('MONTHNAME', o.orderDate), SUM(oi.price * oi.quantity)) "
            +
            "FROM Order o JOIN o.items oi " +
            "WHERE FUNCTION('YEAR', o.orderDate) = :year " +
            "GROUP BY FUNCTION('MONTH', o.orderDate), FUNCTION('MONTHNAME', o.orderDate)")
    List<RevenueDTO> findMonthlyRevenue(@Param("year") int year);

    @Query("SELECT new com.project.demo.dto.RevenueDTO(CONCAT('Q', FUNCTION('QUARTER', o.orderDate)), SUM(oi.price * oi.quantity)) "
            +
            "FROM Order o JOIN o.items oi " +
            "WHERE FUNCTION('YEAR', o.orderDate) = :year " +
            "GROUP BY FUNCTION('QUARTER', o.orderDate)")
    List<RevenueDTO> findQuarterlyRevenue(@Param("year") int year);

    @Query("SELECT new com.project.demo.dto.RevenueDTO(CAST(FUNCTION('YEAR', o.orderDate) AS string), SUM(oi.price * oi.quantity)) "
            +
            "FROM Order o JOIN o.items oi " +
            "GROUP BY FUNCTION('YEAR', o.orderDate)")
    List<RevenueDTO> findYearlyRevenue();

}