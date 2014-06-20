package com.viastore.db.repositories;

import com.viastore.db.entities.Page;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

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
        pageRepository.save(page);

        page = pageRepository.findByName("test_name");
        assertThat(page, notNullValue());
        assertThat(page.getTemplate(), is("test_tmpl"));
    }
}
