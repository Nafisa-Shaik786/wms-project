package com.nafisa.wms.repository;

import com.nafisa.wms.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}