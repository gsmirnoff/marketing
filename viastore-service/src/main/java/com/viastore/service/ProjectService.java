package com.viastore.service;

import com.viastore.db.entities.Project;
import com.viastore.db.repositories.ProjectRepository;
import com.viastore.service.dto.project.ProjectContent;
import org.dozer.DozerBeanMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by GSmirnoff on 24.06.14.
 */
@Service
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;
    @Autowired
    private DozerBeanMapper mapper;

    public List<ProjectContent> getAll() {
        List<Project> found = projectRepository.findAll();
        List<ProjectContent> mapped = new ArrayList<ProjectContent>();
        for (Project project : found) mapped.add(mapper.map(project, ProjectContent.class));
        return mapped;
    }

    public ProjectContent create(ProjectContent updated) {
        Project mapped = mapper.map(updated, Project.class);
        mapped = projectRepository.save(mapped);
        return mapper.map(mapped, ProjectContent.class);
    }
}
