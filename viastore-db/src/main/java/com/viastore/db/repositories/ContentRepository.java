package com.viastore.db.repositories;

import com.viastore.db.entities.Content;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by GSmirnoff on 16.04.14.
 */
public interface ContentRepository extends CrudRepository<Content, Long> {

    @Query("{'page':?0}")
    public List<Content> findByPage(String page);

}
