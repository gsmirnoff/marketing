package com.viastore.service;

import com.viastore.db.entities.Page;
import com.viastore.db.repositories.PageRepository;
import com.viastore.service.dto.PageStructure;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.Arrays;

import static org.hamcrest.MatcherAssert.*;
import static org.hamcrest.CoreMatchers.*;

/**
 * Created by GSmirnoff on 28.04.14.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"classpath*:test-serviceContext.xml"})
public class PageServiceTest {

    @Autowired
    private PageService pageService;
    @Autowired
    private PageRepository pageRepository;

    @Before
    public void setUp() {
        pageRepository.deleteAll();
    }

    @Test
    public void testGetPage() throws Exception {
        Page page = new Page();
        page.setTitle("p");
        page.setTemplate("layout");
        Page dep1 = new Page();
        dep1.setTitle("dep1");
        Page dep2 = new Page();
        dep2.setTitle("dep2");
        page.setDeps(Arrays.asList(dep1, dep2));
        pageRepository.save(page);
        PageStructure pageStructure = pageService.getPage("p");
        assertThat(pageStructure, notNullValue());
        assertThat(pageStructure.getTemplate(), is("layout"));
        assertThat(pageStructure.getDeps().size(), is(2));
    }

    @Test
    public void testCreate() throws Exception {
        PageStructure pageStructure = new PageStructure();
        pageStructure.setTemplate("layout");
        PageStructure dep1 = new PageStructure();
        dep1.setTitle("dep1");
        PageStructure dep2 = new PageStructure();
        dep2.setTitle("dep2");
        pageStructure.setDeps(Arrays.asList(dep1, dep2));
        pageService.create("p", pageStructure);

        Page page = pageRepository.findByName("p");
        assertThat(page, notNullValue());
        assertThat(page.getTemplate(), is("layout"));
        assertThat(page.getDeps().size(), is(2));
    }
}
