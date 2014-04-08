package com.viastore.web.response;

/**
 * Created by GSmirnoff on 07.04.14.
 */
public class ResponseEntity {
    private int status;
    private Object response;

    public ResponseEntity() {}

    public ResponseEntity(int status, Object response) {
        this.status = status;
        this.response = response;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public Object getResponse() {
        return response;
    }

    public void setResponse(Object response) {
        this.response = response;
    }
}
