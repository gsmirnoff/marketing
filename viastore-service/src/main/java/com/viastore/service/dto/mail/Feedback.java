package com.viastore.service.dto.mail;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by GSmirnoff on 26.05.14.
 */
public class Feedback {
    private String name;
    private String email;
    private String message;

    public Map toMap() {
        Map<String, String> params = new HashMap<String, String>();
        params.put("name", name != null ? name : "anonymous");
        params.put("email", email != null ? email : "unknown");
        params.put("message", message);
        return params;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
