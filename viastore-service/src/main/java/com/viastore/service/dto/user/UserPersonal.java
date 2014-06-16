package com.viastore.service.dto.user;

import com.viastore.db.entities.enums.Gender;

/**
 * Created by GSmirnoff on 30.05.14.
 */
public class UserPersonal {

    private String avatarId;

    private String firstName;
    private String surName;
    private String patronymName;

    private String organization;
    private Gender gender;

    public String getAvatarId() {
        return avatarId;
    }

    public void setAvatarId(String avatarId) {
        this.avatarId = avatarId;
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
}
