package com.viastore.service;

import com.viastore.db.entities.User;
import com.viastore.db.entities.enums.Gender;
import com.viastore.db.repositories.UserRepository;
import com.viastore.service.dto.user.UserAuth;
import com.viastore.service.dto.user.UserPersonal;
import org.dozer.DozerBeanMapper;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import static org.hamcrest.MatcherAssert.*;
import static org.hamcrest.CoreMatchers.*;

/**
 * Created by GSmirnoff on 25.06.14.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"classpath*:test-serviceContext.xml"})
public class UserServiceTest {

    @Autowired
    private UserService userService;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private AuthService authService;
    @Autowired
    private DozerBeanMapper mapper;

    @Before
    public void setUp() {
        userRepository.deleteAll();
    }

    @Test
    public void testGetCurrentUser() throws Exception {
        User user = new User("tst@tst.com", "tst");
        user.setFirstName("1st_name");
        user.setGender(Gender.MALE);
        user = userRepository.save(user);
        UserAuth auth = authService.authorize(user);

        UserPersonal userPersonal = userService.getCurrentUser(auth.getToken().getToken());
        assertThat(userPersonal, is(notNullValue()));
        assertThat(userPersonal.getEmail(), is("tst@tst.com"));
        assertThat(userPersonal.getGender(), is(Gender.MALE));
        assertThat(userPersonal.getFirstName(), is("1st_name"));
    }

    @Test
    public void testUpdateCurrentUser() throws Exception {
        User user = new User("tst@tst.com", "tst");
        user.setFirstName("1st_name");
        user.setLastName("last_name");
        user.setMiddleName("middle_name");
        user.setLocation("some_location");
        user.setPublicEmail("public_email");
        user.setSkype("skype_contact");
        user.setGender(Gender.MALE);
        user = userRepository.save(user);
        UserAuth auth = authService.authorize(user);

        UserPersonal userPersonal = mapper.map(user, UserPersonal.class);
        userPersonal.setFirstName("another_1st_name");
        userPersonal.setLastName("another_last_name");
        userPersonal.setMiddleName("another_middle_name");
        userPersonal.setGender(Gender.FEMALE);
        userPersonal.setOrganization("tst_organization");
        userPersonal.setAvatarId("some_image");
        userPersonal.setLocation("some_other_location");
        userPersonal = userService.updateCurrentUser(auth.getToken().getToken(), userPersonal);

        assertThat(userPersonal.getFirstName(), is("another_1st_name"));
        assertThat(userPersonal.getGender(), is(Gender.FEMALE));
        assertThat(userPersonal.getOrganization(), is("tst_organization"));
        assertThat(userPersonal.getLastName(), is("another_last_name"));
        assertThat(userPersonal.getMiddleName(), is("another_middle_name"));
        assertThat(userPersonal.getAvatarId(), is("some_image"));
        assertThat(userPersonal.getLocation(), is("some_other_location"));
        assertThat(userPersonal.getSkype(), is("skype_contact"));
        assertThat(userPersonal.getPublicEmail(), is("public_email"));
    }

    @Test
    public void testIsUserExists() throws Exception {
        User user = new User("tst@tst.com", "tst");
        user.setFirstName("1st_name");
        user.setGender(Gender.MALE);
        user = userRepository.save(user);

        assertThat(userService.isUserExists("tst@tst.com"), is(true));
        assertThat(userService.isUserExists("not-exists@tst.com"), is(false));
    }
}
