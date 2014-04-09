package com.viastore.db.entities;

import org.joda.time.DateTime;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

/**
 * Created by GSmirnoff on 09.04.14.
 */
@Document
public class Token {
    private String token;
    private DateTime expires;

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public DateTime getExpires() {
        return expires;
    }

    public void setExpires(DateTime expires) {
        this.expires = expires;
    }
}
