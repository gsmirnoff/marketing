package com.viastore.db.repositories;

import com.viastore.db.entities.Content;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.List;

import static org.hamcrest.MatcherAssert.*;
import static org.hamcrest.CoreMatchers.*;

/**
 * Created by GSmirnoff on 25.04.14.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"classpath*:test-dbContext.xml"})
public class ContentRepositoryTest {

    @Autowired
    private ContentRepository contentRepository;

    @Before
    public void setUp() {
        contentRepository.deleteAll();
    }

    @Test
    public void testFindByPage() throws Exception {
        Content content = new Content();
        content.setTitle("title");
        content.setPage("test_page");
        content.setProject("test_project");
        content.setContent("some_content");
        content.setTemplate("some_template");
        contentRepository.save(content);
        List<Content> found = contentRepository.findByPage("test_page", "test_project");
        assertThat(found.isEmpty(), is(false));
        assertThat(found.get(0).getId(), is(notNullValue()));
        assertThat(found.get(0).getTitle(), is("title"));
        assertThat(found.get(0).getPage(), is("test_page"));
        assertThat(found.get(0).getProject(), is("test_project"));
        assertThat(found.get(0).getContent(), is("some_content"));
        assertThat(found.get(0).getTemplate(), is("some_template"));
    }

    @Test
    public void testFindByPageAndNum() throws Exception {
        Content content = new Content();
        content.setPage("p");
        content.setTitle("t1");
        content.setProject("test_project");
        content.setNum(1L);
        contentRepository.save(content);
        content = new Content();
        content.setPage("p");
        content.setTitle("t2");
        content.setProject("test_project");
        content.setNum(2L);
        contentRepository.save(content);

        Content found = contentRepository.findByPageAndNum("p", 1L, "test_project");
        assertThat(found, notNullValue());
        assertThat(found.getTitle(), is("t1"));
        assertThat(found.getNum(), is(1L));
        assertThat(found.getPage(), is("p"));
        assertThat(found.getProject(), is("test_project"));
    }
}
