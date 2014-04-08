package com.viastore.db.repositories;

import com.viastore.db.entities.User;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by GSmirnoff on 08.04.14.
 */
@Repository
public interface UserRepository extends CrudRepository<User, Long> {

    @Query("{'token':?0}")
    public User findByToken(String token);

    @Query("{'name':?0}")
    public User findByName(String name);
}
