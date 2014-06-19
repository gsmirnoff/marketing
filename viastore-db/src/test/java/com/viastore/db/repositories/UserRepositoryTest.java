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
        User user = new User("name@email.com", "pass");
        user.createToken();
        Token token = user.getToken();
        userRepository.save(user);

        user = userRepository.findByToken(token.getToken());

        assertThat(user, notNullValue());
        assertThat(user.getEmail(), is("name@email.com"));
    }

    @Test
    public void testFindByName() throws Exception {
        User user = new User("name@mail.com", "pass");
        user.setRole("some_role");
        userRepository.save(user);

        user = userRepository.findByEmail("name@mail.com");
        assertThat(user, notNullValue());
        assertThat(user.getRole(), is("some_role"));
    }

    @Test
    public void testFindByNameAndPass() throws Exception {
        User user = new User("name@mail.com", "pass");
        user.setRole("some_role");

        userRepository.save(user);

        user = userRepository.findByEmailAndPass("name@mail.com", "pass");
        assertThat(user, notNullValue());
        assertThat(user.getRole(), is("some_role"));

        user = userRepository.findByEmailAndPass("name@mail.com", "invalid_pass");
        assertThat(user, nullValue());
    }
}
