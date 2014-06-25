package com.viastore.db.repositories;

import com.viastore.db.entities.Content;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by GSmirnoff on 16.04.14.
 */
public interface ContentRepository extends MongoRepository<Content, String>, ContentRepositoryCustom {

    @Query("{'page':?0, 'project':?1}")
    public List<Content> findByPage(String page, String project);


    @Query("{'page':?0, 'num':?1, 'project':?2}")
    public Content findByPageAndNum(String page, Long num, String project);

    @Query("{'project':?0}")
    public List<Content> findByProject(String project);
}
