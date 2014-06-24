package com.viastore.web.controller;

import com.viastore.service.ProjectService;
import com.viastore.service.dto.project.ProjectContent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.security.PermitAll;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

/**
 * Created by GSmirnoff on 24.06.14.
 */
@Path("project")
@Component
public class ProjectController {

    @Autowired
    private ProjectService projectService;

    @PermitAll
    @GET
    @Produces({MediaType.APPLICATION_JSON})
    @Consumes({MediaType.APPLICATION_JSON})
    public List<ProjectContent> getAll() {
        return projectService.getAll();
    }

    @PermitAll
    @POST
    @Produces({MediaType.APPLICATION_JSON})
    @Consumes({MediaType.APPLICATION_JSON})
    public ProjectContent create(ProjectContent project) {
        return projectService.create(project);
    }
}
