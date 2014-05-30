package com.viastore.web.controller;

import com.viastore.db.entities.User;
import com.viastore.service.UserService;
import com.viastore.service.dto.UserPersonal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.security.PermitAll;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Request;

/**
 * Created by GSmirnoff on 30.05.14.
 */
@Path("/user")
@Component
public class UserController {

    @Autowired
    private UserService userService;

    private static final String TOKEN_HEADER = "token";

    @PermitAll
    @GET
    @Path("current")
    @Produces({MediaType.APPLICATION_JSON})
    @Consumes({MediaType.APPLICATION_JSON})
    public UserPersonal getCurrentUser(@Context HttpServletRequest request) {
        String token = request.getHeader(TOKEN_HEADER);
        if (token==null) return null;
        return userService.getCurrentUser(token);
    }

    @PermitAll
    @PUT
    @Path("current")
    @Produces({MediaType.APPLICATION_JSON})
    @Consumes({MediaType.APPLICATION_JSON})
    public UserPersonal getCurrentUser(UserPersonal userPersonal, @Context HttpServletRequest request) {
        String token = request.getHeader(TOKEN_HEADER);
        if (token==null) return null;
        return userService.updateCurrentUser(token, userPersonal);
    }
}
