package com.viastore.db.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;

import java.util.List;

/**
 * Created by GSmirnoff on 24.04.14.
 */
public class Page {

    @Id
    private String id;
    private String title;
    private String template;
    private List<Page> deps;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTemplate() {
        return template;
    }

    public void setTemplate(String template) {
        this.template = template;
    }

    public List<Page> getDeps() {
        return deps;
    }

    public void setDeps(List<Page> deps) {
        this.deps = deps;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}
