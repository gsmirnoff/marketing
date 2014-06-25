package com.viastore.service;

import com.viastore.db.entities.Page;
import com.viastore.db.repositories.PageRepository;
import com.viastore.service.dto.PageStructure;
import org.dozer.DozerBeanMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by GSmirnoff on 24.04.14.
 */
@Service
public class PageService {

    @Autowired
    private PageRepository pageRepository;
    @Autowired
    private DozerBeanMapper mapper;

    public PageStructure getPage(String page, String project) {
        Page found = pageRepository.findByName(page, project);
        if (found==null) return null;
        return mapper.map(found, PageStructure.class);
    }

    public PageStructure create(String page, PageStructure structure, String project) {
        Page mapped = mapper.map(structure, Page.class);
        mapped.setTitle(page);
        mapped.setProject(project);
        mapped = pageRepository.save(mapped);
        return mapper.map(mapped, PageStructure.class);
    }

}
