package com.viastore.service;

import com.viastore.db.entities.User;
import com.viastore.db.repositories.UserRepository;
import com.viastore.service.dto.user.UserPersonal;
import org.dozer.DozerBeanMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by GSmirnoff on 30.05.14.
 */
@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private DozerBeanMapper mapper;

    public UserPersonal getCurrentUser(String token) {
        User user = userRepository.findByToken(token);
        if (user == null) return null;
        return mapper.map(user, UserPersonal.class);
    }

    public UserPersonal updateCurrentUser(String token, UserPersonal updated) {
        User user = userRepository.findByToken(token);
        if (user == null) return null;
        mapper.map(updated, user);
        userRepository.save(user);
        return mapper.map(user, UserPersonal.class);
    }

    public boolean isUserExists(String email) {
        User user = userRepository.findByEmail(email);
        return user != null;
    }

}
