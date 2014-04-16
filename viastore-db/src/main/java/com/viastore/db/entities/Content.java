package com.viastore.db.entities;

import org.springframework.data.mongodb.core.mapping.Document;

/**
 * Created by GSmirnoff on 16.04.14.
 */
@Document
public class Content {

    private String title;
    private String page;
    private String content;
    private Long num;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getPage() {
        return page;
    }

    public void setPage(String page) {
        this.page = page;
    }

    public Long getNum() {
        return num;
    }

    public void setNum(Long num) {
        this.num = num;
    }
}
