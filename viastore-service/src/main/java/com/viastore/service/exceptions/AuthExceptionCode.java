package com.viastore.service.exceptions;

/**
 * Created by GSmirnoff on 16.06.14.
 */
public enum AuthExceptionCode {
    USER_EXISTS("User already exists"),
    WRONG_PASSWORD("Wrong password");

    private String code;

    private AuthExceptionCode(String code) {
        this.code = code;
    }

    public String getCode() {
        return code;
    }
}
