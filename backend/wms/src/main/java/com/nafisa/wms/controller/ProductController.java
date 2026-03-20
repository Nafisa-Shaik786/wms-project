package com.nafisa.wms.controller;

import com.nafisa.wms.dto.ProductDTO;
import com.nafisa.wms.entity.Product;
import com.nafisa.wms.service.ProductService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/products")
@CrossOrigin(origins = "*")
public class ProductController {

    @Autowired
    private ProductService service;

    // CREATE
    @PostMapping
    public Product addProduct(@Valid @RequestBody ProductDTO productDTO) {
        return service.addProduct(productDTO);
    }

    // READ
    @GetMapping
    public List<Product> getAllProducts() {
        return service.getAllProducts();
    }

    // UPDATE
    @PutMapping("/{id}")
    public Product updateProduct(@PathVariable Long id,
                                 @Valid @RequestBody ProductDTO productDTO) {
        return service.updateProduct(id, productDTO);
    }

    // DELETE
    @DeleteMapping("/{id}")
    public String deleteProduct(@PathVariable Long id) {
        service.deleteProduct(id);
        return "Product deleted successfully";
    }
}