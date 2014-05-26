package com.viastore.web.controller;

import com.viastore.service.MailService;
import com.viastore.service.dto.PageContent;
import com.viastore.service.dto.mail.Feedback;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.security.PermitAll;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

/**
 * Created by GSmirnoff on 26.05.14.
 */
@Path("/mail")
@Component
public class MailController {

    @Autowired
    private MailService mailService;

    @PermitAll
    @POST
    @Produces({MediaType.APPLICATION_JSON})
    @Consumes({MediaType.APPLICATION_JSON})
    @Path("/compose")
    public void create(Feedback feedback) {
        mailService.send(feedback);
    }

}
