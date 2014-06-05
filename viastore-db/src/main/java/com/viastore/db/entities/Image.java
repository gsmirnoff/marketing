package com.viastore.db.entities;

import org.springframework.data.annotation.Id;

/**
 * Created by GSmirnoff on 05.06.14.
 */
public class Image {

    @Id
    private String id;
    private byte[] data;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public byte[] getData() {
        return data;
    }

    public void setData(byte[] data) {
        this.data = data;
    }
}
