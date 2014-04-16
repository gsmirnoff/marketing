package com.viastore.web.controller;

import com.viastore.service.ContentService;
import com.viastore.service.dto.PageContent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.security.PermitAll;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

/**
 * Created by GSmirnoff on 16.04.14.
 */
@Path("/pages")
@Component
public class ContentController {

    @Autowired
    private ContentService contentService;

    @PermitAll
    @GET
    @Produces({MediaType.APPLICATION_JSON})
    @Consumes({MediaType.APPLICATION_JSON})
    @Path("/{page}")
    public List<PageContent> getListForPage(@PathParam("page") String page) {
        return contentService.getContent(page);
    }

    @PermitAll
    @POST
    @Produces({MediaType.APPLICATION_JSON})
    @Consumes({MediaType.APPLICATION_JSON})
    @Path("/{page}")
    public PageContent create(@PathParam("page") String page, PageContent content) {
        return contentService.create(page, content);
    }

}
