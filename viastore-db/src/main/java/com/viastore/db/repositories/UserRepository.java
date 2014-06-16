package com.viastore.db.repositories;

import com.viastore.db.entities.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by GSmirnoff on 08.04.14.
 */
@Repository
public interface UserRepository extends MongoRepository<User, String> {

    @Query("{'token.token':?0}")
    public User findByToken(String token);

    @Query("{'email':?0}")
    public User findByEmail(String email);

    @Query("{'email':?0, 'password':?1}")
    public User findByEmailAndPass(String email, String pass);
}
