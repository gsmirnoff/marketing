package com.viastore.db.repositories;

import com.viastore.db.entities.Image;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Created by GSmirnoff on 05.06.14.
 */
public interface ImageRepository extends MongoRepository<Image, String> {
}
