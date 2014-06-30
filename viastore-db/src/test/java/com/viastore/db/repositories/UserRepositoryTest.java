package com.viastore.db.repositories;

import com.viastore.db.entities.Token;
import com.viastore.db.entities.User;
import com.viastore.db.entities.enums.Gender;
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
        user.setFirstName("1st");
        user.setLastName("last");
        user.setMiddleName("middle");
        user.setAvatarId("some_img");
        user.setOrganization("some_org");
        user.setGender(Gender.MALE);
        user.setPublicEmail("public_mail");
        user.setSkype("skype_contact");
        user.setPhone("12345");
        user.setLocation("location");

        user.createToken();
        Token token = user.getToken();
        userRepository.save(user);

        user = userRepository.findByToken(token.getToken());

        assertThat(user, notNullValue());
        assertThat(user.getId(), is(notNullValue()));
        assertThat(user.getEmail(), is("name@email.com"));
        assertThat(user.getFirstName(), is("1st"));
        assertThat(user.getLastName(), is("last"));
        assertThat(user.getMiddleName(), is("middle"));
        assertThat(user.getAvatarId(), is("some_img"));
        assertThat(user.getOrganization(), is("some_org"));
        assertThat(user.getGender(), is(Gender.MALE));
        assertThat(user.getPublicEmail(), is("public_mail"));
        assertThat(user.getSkype(), is("skype_contact"));
        assertThat(user.getPhone(), is("12345"));
        assertThat(user.getLocation(), is("location"));
    }

    @Test
    public void testFindByName() throws Exception {
        User user = new User();
        user.setEmail("name@mail.com");
        user.setPassword("pass");
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
