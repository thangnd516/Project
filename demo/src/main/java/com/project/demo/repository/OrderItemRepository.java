package com.project.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.project.demo.controller.RevenueProjection;
import com.project.demo.model.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {
    @Query(value = """
                               SELECT
                q.month_name AS period,
                SUM(q.revenue) AS totalRevenue
            FROM (
                SELECT
                    MONTHNAME(o.order_date) AS month_name,
                    MONTH(o.order_date) AS month_num,
                    (oi.price * oi.quantity) AS revenue
                FROM order_items oi
                JOIN orders o ON oi.order_id = o.id
                WHERE YEAR(o.order_date) = 2024
            ) q
            GROUP BY q.month_name, q.month_num
            ORDER BY q.month_num;

                                    """, nativeQuery = true)
    List<RevenueProjection> findMonthlyRevenue(@Param("year") int year);

    @Query(value = """
                    SELECT
                CONCAT('Q', q.quarter) AS period,
                SUM(q.revenue) AS totalRevenue
            FROM (
                SELECT
                    QUARTER(o.order_date) AS quarter,
                    (oi.price * oi.quantity) AS revenue
                FROM order_items oi
                JOIN orders o ON oi.order_id = o.id
                WHERE YEAR(o.order_date) = 2024
            ) q
            GROUP BY q.quarter
            ORDER BY q.quarter;

                        """, nativeQuery = true)
    List<RevenueProjection> findQuarterlyRevenue(@Param("year") int year);

    @Query(value = """
                       SELECT
                q.year AS period,
                SUM(q.revenue) AS totalRevenue
            FROM (
                SELECT
                    YEAR(o.order_date) AS year,
                    (oi.price * oi.quantity) AS revenue
                FROM order_items oi
                JOIN orders o ON oi.order_id = o.id
            ) q
            GROUP BY q.year
            ORDER BY q.year;

                        """, nativeQuery = true)
    List<RevenueProjection> findYearlyRevenue(@Param("year") int year);

}
