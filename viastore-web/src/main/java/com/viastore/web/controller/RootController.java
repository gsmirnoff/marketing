package com.viastore.web.controller;

import com.viastore.web.response.ResponseEntity;
import org.springframework.stereotype.Component;

import javax.annotation.security.PermitAll;
import javax.annotation.security.RolesAllowed;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

/**
 * Created with IntelliJ IDEA.
 * User: GSmirnoff
 * Date: 04.04.14
 * Time: 15:58
 * To change this template use File | Settings | File Templates.
 */
@Path("/")
@Component
public class RootController {

    @PermitAll
    @GET
    @Path("ping")
    @Produces({MediaType.APPLICATION_JSON})
    @Consumes({MediaType.APPLICATION_JSON})
    public ResponseEntity ping() {
        return new ResponseEntity(0, "Ping succeeded");
    }
}
