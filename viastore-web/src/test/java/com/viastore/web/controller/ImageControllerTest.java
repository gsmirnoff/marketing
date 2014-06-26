package com.viastore.web.controller;

import com.sun.jersey.api.client.WebResource;
import com.sun.jersey.multipart.FormDataMultiPart;
import com.viastore.service.dto.image.ImageId;
import com.viastore.web.response.ResponseEntity;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import javax.ws.rs.core.MediaType;

import java.util.Map;

import static org.hamcrest.MatcherAssert.*;
import static org.hamcrest.CoreMatchers.*;

/**
 * Created by GSmirnoff on 26.06.14.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"classpath*:test-serviceContext.xml"})
public class ImageControllerTest extends TestBase {

    private static final String PATH = "image";

    @Test
    public void testUpload() throws Exception {
        FormDataMultiPart container = new FormDataMultiPart();
        container.field("image", "some_image_src");
        WebResource webResource = resource();

        ResponseEntity re = webResource.path(PATH)
                .type(MediaType.MULTIPART_FORM_DATA)
                .accept(MediaType.APPLICATION_JSON)
                .post(ResponseEntity.class, container);
        assertThat(re.getStatus(), is(0));
        assertThat(re.getResponse(), is(notNullValue()));
        assertThat(((Map<String, String>) re.getResponse()).get("id"), is(notNullValue()));
    }

    @Test
    public void testGetById() throws Exception {
        //todo
    }

    @Test
    public void testDeletebyId() throws Exception {
        //todo
    }
}
