package com.nafisa.wms.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class ProductDTO {

    @NotBlank(message = "Name cannot be empty")
    private String name;

    @NotBlank(message = "SKU cannot be empty")
    private String sku;

    @NotBlank(message = "Description cannot be empty")
    private String description;
}