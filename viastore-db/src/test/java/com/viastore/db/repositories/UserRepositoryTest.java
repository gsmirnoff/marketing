package com.viastore.db.repositories;

import com.viastore.db.entities.Token;
import com.viastore.db.entities.User;
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
public class UserRepositoryTest {

    @Autowired
    private UserRepository userRepository;

    @Before
    public void setUp() {
        userRepository.deleteAll();
    }

    @Test
    public void testFindByToken() throws Exception {
        User user = new User("name", "pass");
        user.createToken();
        Token token = user.getToken();
        userRepository.save(user);

        user = userRepository.findByToken(token.getToken());

        assertThat(user, notNullValue());
        assertThat(user.getName(), is("name"));
    }

    @Test
    public void testFindByName() throws Exception {
        User user = new User("name", "pass");
        user.setRole("some_role");
        userRepository.save(user);

        user = userRepository.findByName("name");
        assertThat(user, notNullValue());
        assertThat(user.getRole(), is("some_role"));
    }

    @Test
    public void testFindByNameAndPass() throws Exception {
        User user = new User("name", "pass");
        user.setRole("some_role");

        userRepository.save(user);

        user = userRepository.findByNameAndPass("name", "pass");
        assertThat(user, notNullValue());
        assertThat(user.getRole(), is("some_role"));

        user = userRepository.findByNameAndPass("name", "invalid_pass");
        assertThat(user, nullValue());
    }
}
