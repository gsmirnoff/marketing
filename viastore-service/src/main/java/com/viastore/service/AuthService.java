package com.viastore.service;

import com.viastore.db.entities.User;
import com.viastore.db.repositories.UserRepository;
import com.viastore.service.dto.UserAuth;
import org.dozer.DozerBeanMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by GSmirnoff on 15.04.14.
 */
@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private DozerBeanMapper mapper;

    public UserAuth authorize(User req) {
        User user = userRepository.findByNameAndPass(req.getName(), req.getPassword());
        if (user == null) user = req;
        user.createToken();
        user = userRepository.save(user);
        return mapper.map(user, UserAuth.class);
    }
}
