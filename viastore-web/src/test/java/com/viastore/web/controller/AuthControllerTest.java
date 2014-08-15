package com.viastore.web.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.sun.jersey.api.client.UniformInterfaceException;
import com.viastore.db.entities.User;
import com.viastore.db.repositories.UserRepository;
import com.viastore.web.response.ResponseEntity;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import javax.ws.rs.core.MediaType;

import java.util.Map;

import static org.hamcrest.MatcherAssert.*;
import static org.hamcrest.CoreMatchers.*;

/**
 * Created by GSmirnoff on 14.08.14.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"classpath*:test-serviceContext.xml"})
public class AuthControllerTest extends TestBase {

    @Autowired
    private UserRepository userRepository;

    private static final String PATH = "auth";

    @Before
    public void setUp() throws Exception {
        super.setUp();
        userRepository.deleteAll();
    }

    private ResponseEntity authorize(User user) throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        return resource().path(PATH)
                .header("project", "test_project")
                .type(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)
                .post(ResponseEntity.class, mapper.writeValueAsString(user));
    }

    @Test
    public void testAuthorize() throws Exception {
        User user = new User("tst@tst.com", "tstpass");
        ResponseEntity response = authorize(user);
        assertThat(response.getStatus(), is(0));
        Map auth = (Map) response.getResponse();
        assertThat((String) auth.get("email"), is(user.getEmail()));
        assertThat(auth.get("token"), is(notNullValue()));
        Long expires = (Long) ((Map) ((Map) auth.get("token")).get("expires")).get("millis");
        response = authorize(user);
        assertThat(response.getStatus(), is(0));
        auth = (Map) response.getResponse();
        assertThat((Long) ((Map) ((Map) auth.get("token")).get("expires")).get("millis"), is(not(expires)));
    }

    @Test
    public void testPingAuthored() throws Exception {
        User user = new User("tst@tst.com", "tstpass");
        ResponseEntity response = authorize(user);
        assertThat(response.getStatus(), is(0));
        boolean notAdminFailed = false;
        try {
            resource().path(PATH + "/check")
                    .header("project", "test_project")
                    .header("token", "abc")
                    .type(MediaType.APPLICATION_JSON)
                    .accept(MediaType.APPLICATION_JSON)
                    .get(ResponseEntity.class);
        } catch (UniformInterfaceException e) {
            notAdminFailed = true;
        }
        assertThat(notAdminFailed, is(true));
        user = new User("tst2@tst.com", "tstpass2");
        user.setRole("admin");
        response = authorize(user);
        assertThat(response.getStatus(), is(0));
        Map auth = (Map) response.getResponse();
        String token = (String) ((Map) auth.get("token")).get("token");
        response = resource().path(PATH + "/check")
                .header("project", "test_project")
                .header("token", token)
                .type(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)
                .get(ResponseEntity.class);
        assertThat(response.getStatus(), is(0));
    }
}
