package com.viastore.db.entities;

import org.springframework.data.mongodb.core.mapping.Document;

/**
 * Created by GSmirnoff on 08.04.14.
 */
@Document
public class User {
    private String name;
    private String password;
    private String role = "admin";
    private String token = "aaaaa";

    public User() {}

    public User(String name, String password) {
        this.name = name;
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
