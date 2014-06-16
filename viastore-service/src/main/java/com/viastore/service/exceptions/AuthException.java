package com.viastore.service.exceptions;

/**
 * Created by GSmirnoff on 16.06.14.
 */
public class AuthException extends Exception {

    private AuthExceptionCode exceptionCode;

    public AuthException(AuthExceptionCode code) {
        this.exceptionCode = code;
    }

    @Override
    public String getMessage() {
        return exceptionCode.getCode();
    }
}
