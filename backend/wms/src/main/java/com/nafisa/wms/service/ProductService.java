package com.nafisa.wms.service;

import com.nafisa.wms.dto.ProductDTO;
import com.nafisa.wms.entity.Product;
import com.nafisa.wms.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository repo;

    // CREATE
    public Product addProduct(ProductDTO dto) {
        Product product = new Product();
        product.setName(dto.getName());
        product.setSku(dto.getSku());
        product.setDescription(dto.getDescription());

        return repo.save(product);
    }

    // READ
    public List<Product> getAllProducts() {
        return repo.findAll();
    }

    // UPDATE
    public Product updateProduct(Long id, ProductDTO dto) {
        Product product = repo.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found"));

        product.setName(dto.getName());
        product.setSku(dto.getSku());
        product.setDescription(dto.getDescription());

        return repo.save(product);
    }

    // DELETE
    public void deleteProduct(Long id) {
        repo.deleteById(id);
    }
}