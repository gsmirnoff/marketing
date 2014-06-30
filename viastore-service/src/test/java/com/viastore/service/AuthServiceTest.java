package com.viastore.service;

import com.viastore.db.entities.User;
import com.viastore.db.repositories.UserRepository;
import com.viastore.service.dto.user.UserAuth;
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
public class AuthServiceTest {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private AuthService authService;

    @Test
    public void testAuthorize() throws Exception {
        User user = new User("tst@tst.com", "tst");
        user = userRepository.save(user);
        UserAuth auth = authService.authorize(user);

        user = userRepository.findByToken(auth.getToken().getToken());
        assertThat(user, is(notNullValue()));
        assertThat(user.getEmail(), is("tst@tst.com"));
        assertThat(user.getPassword(), is("tst"));
    }
}
