package com.viastore.service;

import com.viastore.db.entities.Content;
import com.viastore.db.repositories.ContentRepository;
import com.viastore.service.dto.PageContent;
import org.dozer.DozerBeanMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

/**
 * Created by GSmirnoff on 16.04.14.
 */
@Service
public class ContentService {

    @Autowired
    private ContentRepository contentRepository;
    @Autowired
    private DozerBeanMapper mapper;

    public List<PageContent> getContent(String page) {
        List<Content> found = contentRepository.findByPage(page);
        Collections.sort(found, new Comparator<Content>() {
            @Override
            public int compare(Content o1, Content o2) {
                return o1.getNum().compareTo(o2.getNum());
            }
        });
        List<PageContent> mapped = new ArrayList<PageContent>();
        for (Content content : found) mapped.add(mapper.map(content, PageContent.class));
        return mapped;
    }

    public PageContent create(String page, PageContent pageContent) {
        Content content = mapper.map(pageContent, Content.class);
        content.setPage(page);
        content.setNum(contentRepository.getCurrentCount(page)+1);
        content = contentRepository.save(content);
        return mapper.map(content, PageContent.class);
    }

    public PageContent update(String page, Long num, PageContent pageContent) {
        Content content = contentRepository.findByPageAndNum(page, num);
        if (content==null) return null;
        mapper.map(pageContent, content);
        content.setNum(num);
        contentRepository.save(content);
        return mapper.map(content, PageContent.class);
    }

    public boolean delete(String page, Long num) {
        Content content = contentRepository.findByPageAndNum(page, num);
        if (content != null) {
            contentRepository.delete(content);
            return true;
        }
        return false;
    }
}
