package com.viastore.service.dto.user;

import com.viastore.db.entities.Token;

/**
 * Created by GSmirnoff on 15.04.14.
 */
public class UserAuth {
    private String email;
    private String role = "admin";
    private Token token;
    private boolean isNew;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
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

    public boolean isNew() {
        return isNew;
    }

    public void setNew(boolean isNew) {
        this.isNew = isNew;
    }
}
