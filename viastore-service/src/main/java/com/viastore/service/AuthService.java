package com.viastore.service;

import com.viastore.db.entities.User;
import com.viastore.db.repositories.UserRepository;
import com.viastore.service.dto.user.UserAuth;
import com.viastore.service.exceptions.AuthException;
import com.viastore.service.exceptions.AuthExceptionCode;
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

    public UserAuth authorize(User req) throws AuthException {
        User user = userRepository.findByEmailAndPass(req.getEmail(), req.getPassword());
        UserAuth userAuth = new UserAuth();
        if (user == null) {
            if (userRepository.findByEmail(req.getEmail()) != null)
                throw new AuthException(AuthExceptionCode.WRONG_PASSWORD);
            user = req;
            userAuth.setNew(true);
        }
        user.createToken();
        user = userRepository.save(user);
        mapper.map(user, userAuth);
        return userAuth;
    }
}
