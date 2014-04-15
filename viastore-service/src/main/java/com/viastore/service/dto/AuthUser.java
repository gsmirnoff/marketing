package com.viastore.service.dto;

import com.viastore.db.entities.Token;

/**
 * Created by GSmirnoff on 15.04.14.
 */
public class AuthUser {
    private String name;
    private String role = "admin";
    private Token token;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public Token getToken() {
        return token;
    }

    public void setToken(Token token) {
        this.token = token;
    }
}
