package com.viastore.db.repositories;

import com.viastore.db.entities.Project;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

/**
 * Created by GSmirnoff on 24.06.14.
 */
public interface ProjectRepository extends MongoRepository<Project, String> {
}
