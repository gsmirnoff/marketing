package com.viastore.db.entities;

import org.springframework.data.annotation.Id;

import java.util.List;

/**
 * Created by GSmirnoff on 24.04.14.
 */
public class Page {

    @Id
    private String id;
    private String name;
    private String template;
    private List<String> deps;

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

    public List<String> getDeps() {
        return deps;
    }

    public void setDeps(List<String> deps) {
        this.deps = deps;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
