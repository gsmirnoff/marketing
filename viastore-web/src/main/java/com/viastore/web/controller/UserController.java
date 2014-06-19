package com.viastore.web.controller;

import com.viastore.service.UserService;
import com.viastore.service.dto.user.UserPersonal;
import com.viastore.web.response.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.security.PermitAll;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

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

    @PermitAll
    @GET
    @Path("exists/{email}")
    @Produces({MediaType.APPLICATION_JSON})
    @Consumes({MediaType.APPLICATION_JSON})
    public ResponseEntity isUserExists(@PathParam("email") String email) {
        return new ResponseEntity(0, userService.isUserExists(email));
    }
}
