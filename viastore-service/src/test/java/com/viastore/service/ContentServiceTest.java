package com.viastore.service;

import com.viastore.db.entities.Content;
import com.viastore.db.repositories.ContentRepository;
import com.viastore.service.dto.PageContent;
import com.viastore.service.dto.PageContentReduced;
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
 * Created by GSmirnoff on 28.04.14.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"classpath*:test-serviceContext.xml"})
public class ContentServiceTest {

    @Autowired
    private ContentService contentService;
    @Autowired
    private ContentRepository contentRepository;

    @Before
    public void setUp() {
        contentRepository.deleteAll();
    }

    @Test
    public void testGetContent() throws Exception {
        Content content = new Content();
        content.setPage("p");
        content.setNum(1L);
        content.setTitle("title");
        content.setTemplate("layout");
        content.setContent("content");
        content.setProject("test_project");
        contentRepository.save(content);
        List<PageContent> pageContents = contentService.getContent("p", "test_project");
        assertThat(pageContents, notNullValue());
        assertThat(pageContents.size(), is(1));
        PageContent elem = pageContents.get(0);
        assertThat(elem.getTitle(), is("title"));
        assertThat(elem.getTemplate(), is("layout"));
        assertThat(elem.getContent(), is("content"));
        assertThat(elem.getNum(), is(1L));
        assertThat(elem.getPage(), is("p"));
    }

    @Test
    public void testGetOne() throws Exception {
        Content content = new Content();
        content.setPage("p");
        content.setNum(1L);
        content.setTitle("title");
        content.setTemplate("layout");
        content.setContent("content");
        content.setProject("test_project");
        contentRepository.save(content);

        PageContent elem = contentService.getOne("p", 1L, "test_project");
        assertThat(elem.getTitle(), is("title"));
        assertThat(elem.getTemplate(), is("layout"));
        assertThat(elem.getContent(), is("content"));
    }

    @Test
    public void testGetReducedList() throws Exception {
        Content content = new Content();
        content.setPage("p");
        content.setNum(1L);
        content.setTitle("title");
        content.setTemplate("layout");
        content.setContent("content");
        content.setProject("test_project");
        contentRepository.save(content);

        List<PageContentReduced> reducedList = contentService.getReducedList("p", "test_project");
        assertThat(reducedList, notNullValue());
        assertThat(reducedList.size(), is(1));

        PageContentReduced elem = reducedList.get(0);
        assertThat(elem.getTitle(), is("title"));
        assertThat(elem.getNum(), is(1L));
    }

    @Test
    public void testCreate() throws Exception {
        PageContent content = new PageContent();
        content.setTitle("title");
        content.setTemplate("layout");
        content.setContent("content");
        contentService.create("p", content, "test_project");

        List<Content> contents = contentRepository.findByPage("p", "test_project");

        assertThat(contents, notNullValue());
        assertThat(contents.size(), is(1));

        Content elem = contents.get(0);
        assertThat(elem.getId(), notNullValue());
        assertThat(elem.getTitle(), is("title"));
        assertThat(elem.getContent(), is("content"));
        assertThat(elem.getNum(), notNullValue());
        assertThat(elem.getTemplate(), is("layout"));
    }

    @Test
    public void testUpdate() throws Exception {
        Content content = new Content();
        content.setPage("p");
        content.setNum(1L);
        content.setTitle("title");
        content.setTemplate("layout");
        content.setContent("content");
        content.setProject("test_project");
        contentRepository.save(content);

        PageContent toUpdate = new PageContent();
        toUpdate.setContent(content.getContent());
        toUpdate.setTemplate("new-layout");
        toUpdate.setTitle("new-title");
        contentService.update("p", 1L, toUpdate, "test_project");

        List<Content> contents = contentRepository.findByPage("p", "test_project");

        assertThat(contents, notNullValue());
        assertThat(contents.size(), is(1));

        Content elem = contents.get(0);
        assertThat(elem.getId(), notNullValue());
        assertThat(elem.getTitle(), is("new-title"));
        assertThat(elem.getContent(), is("content"));
        assertThat(elem.getNum(), notNullValue());
        assertThat(elem.getTemplate(), is("new-layout"));
    }

    @Test
    public void testDelete() throws Exception {
        Content content = new Content();
        content.setPage("p");
        content.setNum(1L);
        content.setTitle("title");
        content.setTemplate("layout");
        content.setContent("content");
        content.setProject("test_project");
        contentRepository.save(content);

        contentService.delete("p", 1L, "test_project");
        Content found = contentRepository.findByPageAndNum("p", 1L, "test_project");
        assertThat(found, nullValue());
    }
}
