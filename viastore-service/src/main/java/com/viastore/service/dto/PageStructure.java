package com.viastore.service.dto;

import java.util.List;

/**
 * Created by GSmirnoff on 24.04.14.
 */
public class PageStructure {

    private String template;
    private List<String> deps;

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
}
