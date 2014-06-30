package com.viastore.web.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.viastore.db.entities.Content;
import com.viastore.db.repositories.ContentRepository;
import com.viastore.service.dto.PageContent;
import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import javax.ws.rs.core.MediaType;
import java.util.List;
import java.util.Map;

import static org.hamcrest.MatcherAssert.*;
import static org.hamcrest.CoreMatchers.*;

/**
 * Created by GSmirnoff on 26.06.14.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"classpath*:test-serviceContext.xml"})
public class ContentControllerTest extends TestBase {

    @Autowired
    private ContentRepository contentRepository;

    private static final String PATH = "content";

    @Before
    public void setUp() throws Exception {
        super.setUp();
        contentRepository.deleteAll();
    }

    private PageContent create() throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        PageContent content = new PageContent();
        content.setContent("\"some_content\"");
        content.setTemplate("some_template");
        content.setTitle("some_title");
        content.setNum(1L);
        return resource().path(PATH+"/p")
                .header("project", "test_project")
                .type(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)
                .post(PageContent.class, mapper.writeValueAsString(content));
    }

    @Test
    public void testGetAll() throws Exception {
        create();
        List list = resource().path(PATH).header("project", "test_project").get(List.class);
        assertThat(list, is(notNullValue()));
        assertThat(list.isEmpty(), is(false));
        Map<String, String> record = (Map) list.get(0);
        assertThat(record.get("title"), is("some_title"));
        assertThat(record.get("template"), is("\"some_template\""));
        assertThat(record.get("page"), is("p"));
        assertThat(record.get("content"), is("some_content"));
    }

    @Test
    public void testGetListForPage() throws Exception {
        create();
        List list = resource().path(PATH+"/p").header("project", "test_project").get(List.class);
        assertThat(list, is(notNullValue()));
        assertThat(list.isEmpty(), is(false));
        Map<String, String> record = (Map) list.get(0);
        assertThat(record.get("title"), is("some_title"));
        assertThat(record.get("template"), is("\"some_template\""));
        assertThat(record.get("page"), is("p"));
        assertThat(record.get("content"), is("some_content"));
    }

    @Test
    public void testGetReducedList() throws Exception {
        create();
        List list = resource().path(PATH+"/p/reduced").header("project", "test_project").get(List.class);
        assertThat(list, is(notNullValue()));
        assertThat(list.isEmpty(), is(false));
        Map<String, String> record = (Map) list.get(0);
        assertThat(record.get("title"), is("some_title"));
    }

    @Test
    public void testGetOne() throws Exception {
        Long num = create().getNum();
        Map<String, String> record = resource().path(PATH+"/p/"+num).header("project", "test_project").get(Map.class);
        assertThat(record.get("title"), is("some_title"));
        assertThat(record.get("template"), is("\"some_template\""));
        assertThat(record.get("page"), is("p"));
        assertThat(record.get("content"), is("some_content"));
    }

    @Test
    @Ignore
    public void testCreate() throws Exception {
        //todo
    }

    @Test
    @Ignore
    public void testUpdate() throws Exception {
        //todo
    }

    @Test
    @Ignore
    public void testDelete() throws Exception {
        //todo
    }
}
