package com.viastore.service.dto;

import java.util.List;

/**
 * Created by GSmirnoff on 24.04.14.
 */
public class PageStructure {

    private String template;
    private String title;
    private List<PageStructure> deps;

    public String getTemplate() {
        return template;
    }

    public void setTemplate(String template) {
        this.template = template;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public List<PageStructure> getDeps() {
        return deps;
    }

    public void setDeps(List<PageStructure> deps) {
        this.deps = deps;
    }
}
