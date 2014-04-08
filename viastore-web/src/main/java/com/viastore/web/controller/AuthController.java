package com.viastore.web.controller;

import com.viastore.db.entities.User;
import com.viastore.db.repositories.UserRepository;
import com.viastore.web.response.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.security.PermitAll;
import javax.annotation.security.RolesAllowed;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

/**
 * Created by GSmirnoff on 08.04.14.
 */
@Path("/auth")
@Component
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @PermitAll
    @POST
    @Produces({MediaType.APPLICATION_JSON})
    @Consumes({MediaType.APPLICATION_JSON})
    public ResponseEntity authorize(User req) {
        User user = userRepository.findByName(req.getName());
        if (user==null) user = userRepository.save(req);
        return new ResponseEntity(0, user);
    }

    @RolesAllowed("admin")
    @GET
    @Path("check")
    @Produces({MediaType.APPLICATION_JSON})
    @Consumes({MediaType.APPLICATION_JSON})
    public ResponseEntity pingAuthored() {
        return new ResponseEntity(0, "Admin auth verified");
    }
}
