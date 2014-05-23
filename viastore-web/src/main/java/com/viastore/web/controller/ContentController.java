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
    public List<PageContent> getAll() {
        return contentService.getALl();
    }

    @PermitAll
    @GET
    @Produces({MediaType.APPLICATION_JSON})
    @Consumes({MediaType.APPLICATION_JSON})
    @Path("/{page}")
    public List<PageContent> getListForPage(@PathParam("page") String page) {
        return contentService.getContent(page);
    }

    @PermitAll
    @GET
    @Produces({MediaType.APPLICATION_JSON})
    @Consumes({MediaType.APPLICATION_JSON})
    @Path("{page}/reduced")
    public List<PageContentReduced> getreducedList(@PathParam("page") String page) {
        return contentService.getReducedList(page);
    }

    @PermitAll
    @GET
    @Produces({MediaType.APPLICATION_JSON})
    @Consumes({MediaType.APPLICATION_JSON})
    @Path("/{page}/{id}")
    public PageContent getOne(@PathParam("page") String page, @PathParam("id") Long id) {
        return contentService.getOne(page, id);
    }

    @PermitAll
    @POST
    @Produces({MediaType.APPLICATION_JSON})
    @Consumes({MediaType.APPLICATION_JSON})
    @Path("/{page}")
    public PageContent create(@PathParam("page") String page, PageContent content) {
        return contentService.create(page, content);
    }

    @PermitAll
    @PUT
    @Produces({MediaType.APPLICATION_JSON})
    @Consumes({MediaType.APPLICATION_JSON})
    @Path("/{page}/{id}")
    public PageContent update(@PathParam("page") String page, @PathParam("id") Long id, PageContent content) {
        return contentService.update(page, id, content);
    }

    @PermitAll
    @DELETE
    @Produces({MediaType.APPLICATION_JSON})
    @Consumes({MediaType.APPLICATION_JSON})
    @Path("/{page}/{id}")
    public ResponseEntity delete(@PathParam("page") String page, @PathParam("id") Long id) {
        if (contentService.delete(page, id)) {
            return new ResponseEntity(0, "Delete successful");
        }
        return new ResponseEntity(0, "No such page");
    }
}
