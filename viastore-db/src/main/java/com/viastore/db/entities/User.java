package com.viastore.db.entities;

import com.viastore.db.entities.enums.Gender;
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

    private String firstName;
    private String surName;
    private String patronymName;

    private String organization;
    private Gender gender;

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

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getSurName() {
        return surName;
    }

    public void setSurName(String surName) {
        this.surName = surName;
    }

    public String getPatronymName() {
        return patronymName;
    }

    public void setPatronymName(String patronymName) {
        this.patronymName = patronymName;
    }

    public String getOrganization() {
        return organization;
    }

    public void setOrganization(String organization) {
        this.organization = organization;
    }

    public Gender getGender() {
        return gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }

    public void createToken() {
        Token token = new Token();
        token.setToken(UUID.randomUUID().toString());
        token.setExpires(DateTime.now().plusMinutes(30));
        this.setToken(token);
    }
}
