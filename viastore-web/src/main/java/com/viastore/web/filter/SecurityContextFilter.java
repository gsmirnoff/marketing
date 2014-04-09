package com.viastore.web.filter;

import com.sun.jersey.spi.container.ContainerRequest;
import com.sun.jersey.spi.container.ContainerRequestFilter;
import com.sun.jersey.spi.container.ContainerResponseFilter;
import com.sun.jersey.spi.container.ResourceFilter;
import com.viastore.db.repositories.UserRepository;
import com.viastore.db.entities.User;
import org.joda.time.DateTime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.ws.rs.WebApplicationException;
import javax.ws.rs.ext.Provider;

/**
 * Created by GSmirnoff on 08.04.14.
 */
@Component
@Provider
public class SecurityContextFilter implements ResourceFilter, ContainerRequestFilter {

    @Autowired
    private UserRepository userRepository;

    @Override
    public ContainerRequest filter(ContainerRequest request) {
        User user = userRepository.findByToken(request.getHeaderValue("token"));
        if (user != null && user.getToken().getExpires().isAfter(DateTime.now())) {
            user.renewToken();
            userRepository.save(user);
            request.setSecurityContext(new Authorizer(user));
        }
        return request;
    }

    @Override
    public ContainerRequestFilter getRequestFilter() {
        return this;
    }

    @Override
    public ContainerResponseFilter getResponseFilter() {
        return null;
    }
}
