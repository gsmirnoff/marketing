package com.viastore.service.dto;

/**
 * Created by GSmirnoff on 30.05.14.
 */
public class UserPersonal {

    private String name;
    private byte[] avatar;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public byte[] getAvatar() {
        return avatar;
    }

    public void setAvatar(byte[] avatar) {
        this.avatar = avatar;
    }
}
