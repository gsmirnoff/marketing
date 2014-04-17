package com.viastore.db.repositories;

import org.springframework.data.mongodb.repository.Query;

/**
 * Created by GSmirnoff on 17.04.14.
 */
public interface ContentRepositoryCustom {

    Long getCurrentCount(String page);

}
