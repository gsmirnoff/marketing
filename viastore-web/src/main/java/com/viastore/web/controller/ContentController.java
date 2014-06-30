package com.viastore.web.controller;

import com.viastore.service.ContentService;
import com.viastore.service.dto.PageContent;
import com.viastore.service.dto.PageContentReduced;
import com.viastore.web.response.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.security.PermitAll;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

/**
 * Created by GSmirnoff on 16.04.14.
 */
@Path("/content")
@Component
public class ContentController {

    @Autowired
    private ContentService contentService;

    @PermitAll
    @GET
    @Produces({MediaType.APPLICATION_JSON})
    @Consumes({MediaType.APPLICATION_JSON})
    public List<PageContent> getAll(@HeaderParam("project") String project) {
        return contentService.getALl(project);
    }

    @PermitAll
    @GET
    @Produces({MediaType.APPLICATION_JSON})
    @Consumes({MediaType.APPLICATION_JSON})
    @Path("/{page}")
    public List<PageContent> getListForPage(@PathParam("page") String page, @HeaderParam("project") String project) {
        return contentService.getContent(page, project);
    }

    @PermitAll
    @GET
    @Produces({MediaType.APPLICATION_JSON})
    @Consumes({MediaType.APPLICATION_JSON})
    @Path("{page}/reduced")
    public List<PageContentReduced> getreducedList(@PathParam("page") String page, @HeaderParam("project") String project) {
        return contentService.getReducedList(page, project);
    }

    @PermitAll
    @GET
    @Produces({MediaType.APPLICATION_JSON})
    @Consumes({MediaType.APPLICATION_JSON})
    @Path("/{page}/{id}")
    public PageContent getOne(@PathParam("page") String page, @PathParam("id") Long num, @HeaderParam("project") String project) {
        return contentService.getOne(page, num, project);
    }

    @PermitAll
    @POST
    @Produces({MediaType.APPLICATION_JSON})
    @Consumes({MediaType.APPLICATION_JSON})
    @Path("/{page}")
    public PageContent create(@PathParam("page") String page, PageContent content, @HeaderParam("project") String project) {
        return contentService.create(page, content, project);
    }

    @PermitAll
    @PUT
    @Produces({MediaType.APPLICATION_JSON})
    @Consumes({MediaType.APPLICATION_JSON})
    @Path("/{page}/{id}")
    public PageContent update(@PathParam("page") String page, @PathParam("id") Long id, PageContent content, @HeaderParam("project") String project) {
        return contentService.update(page, id, content, project);
    }

    @PermitAll
    @DELETE
    @Produces({MediaType.APPLICATION_JSON})
    @Consumes({MediaType.APPLICATION_JSON})
    @Path("/{page}/{id}")
    public ResponseEntity delete(@PathParam("page") String page, @PathParam("id") Long id, @HeaderParam("project") String project) {
        if (contentService.delete(page, id, project)) {
            return new ResponseEntity(0, "Delete successful");
        }
        return new ResponseEntity(0, "No such page");
    }
}
