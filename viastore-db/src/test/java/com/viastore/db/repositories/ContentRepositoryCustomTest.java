package com.viastore.db.repositories;

import com.viastore.db.entities.Content;
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
public class ContentRepositoryCustomTest {

    @Autowired
    private ContentRepository contentRepository;

    @Before
    public void setUp() {
        contentRepository.deleteAll();
    }

    @Test
    public void testGetCurrentCount() throws Exception {
        Long current = contentRepository.getCurrentCount("p", "project");
        assertThat(current, equalTo(1L));

        Content content = new Content();
        content.setPage("p");
        content.setTitle("title");
        content.setProject("project");
        content.setNum(2L);
        contentRepository.save(content);

        current = contentRepository.getCurrentCount("p", "project");
        assertThat(current, equalTo(2L));
    }
}
