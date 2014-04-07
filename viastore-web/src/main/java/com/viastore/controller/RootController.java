package com.viastore.controller;

import org.springframework.stereotype.Component;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.core.Response;

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

    @GET
    public Response index() {
        return Response.status(200).entity("I'm working").build();
    }
}
