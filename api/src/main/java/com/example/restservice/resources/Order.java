package com.example.restservice.resources;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class Order {
    private String name;
    private String description;
}