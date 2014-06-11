package com.viastore.db.entities;

import org.joda.time.DateTime;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.UUID;

/**
 * Created by GSmirnoff on 08.04.14.
 */
@Document
public class User {
    @Id
    private String id;
    private String name;
    private String password;
    private String role = "admin";
    private Token token;
    private String avatarId;

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

    public Token getToken() {
        return token;
    }

    public void setToken(Token token) {
        this.token = token;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getAvatarId() {
        return avatarId;
    }

    public void setAvatarId(String avatarId) {
        this.avatarId = avatarId;
    }

    public void renewToken() {
        this.token.setExpires(DateTime.now().plusMinutes(30));
    }

    public void createToken() {
        Token token = new Token();
        token.setToken(UUID.randomUUID().toString());
        token.setExpires(DateTime.now().plusMinutes(30));
        this.setToken(token);
    }
}
