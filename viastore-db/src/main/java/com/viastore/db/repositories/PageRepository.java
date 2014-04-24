package com.viastore.db.repositories;

import com.viastore.db.entities.Page;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

/**
 * Created by GSmirnoff on 24.04.14.
 */
public interface PageRepository extends MongoRepository<Page, String> {

    @Query("{'name':?0}")
    public Page findByName(String name);

}
