package com.viastore.web.controller;

import com.viastore.service.PageService;
import com.viastore.service.dto.PageStructure;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.security.PermitAll;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

/**
 * Created by GSmirnoff on 24.04.14.
 */
@Path("/pages")
@Component
public class PageController {

    @Autowired
    private PageService pageService;

    @PermitAll
    @GET
    @Produces({MediaType.APPLICATION_JSON})
    @Consumes({MediaType.APPLICATION_JSON})
    @Path("/{page}")
    public PageStructure getListForPage(@PathParam("page") String page, @HeaderParam("project") String project) {
        return pageService.getPage(page, project);
    }


    @PermitAll
    @POST
    @Produces({MediaType.APPLICATION_JSON})
    @Consumes({MediaType.APPLICATION_JSON})
    @Path("/{page}")
    public PageStructure create(@PathParam("page") String page, PageStructure structure, @HeaderParam("project") String project) {
        return pageService.create(page, structure, project);
    }
}
