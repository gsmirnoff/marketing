package com.viastore.db.repositories;

import com.viastore.db.entities.Page;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.hamcrest.MatcherAssert.*;
import static org.hamcrest.CoreMatchers.*;

/**
 * Created by GSmirnoff on 25.04.14.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"classpath*:test-dbContext.xml"})
public class PageRepositoryTest {

    @Autowired
    private PageRepository pageRepository;

    @Before
    public void setUp() {
        pageRepository.deleteAll();
    }

    @Test
    public void testFindByName() throws Exception {
        Page page = new Page();
        page.setTemplate("test_tmpl");
        page.setTitle("test_name");
        page.setProject("test_project");

        List<Page> deps = new ArrayList<Page>();
        Page dep1 = new Page();
        deps.add(dep1);
        page.setDeps(deps);
        pageRepository.save(page);

        page = pageRepository.findByName("test_name", "test_project");
        assertThat(page, notNullValue());
        assertThat(page.getId(), is(notNullValue()));
        assertThat(page.getTemplate(), is("test_tmpl"));
        assertThat(page.getProject(), is("test_project"));
        assertThat(page.getDeps(), is(notNullValue()));
        assertThat(page.getDeps().isEmpty(), is(false));
    }
}
