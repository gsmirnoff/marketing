package com.viastore.db.repositories.impl;

import com.viastore.db.entities.Content;
import com.viastore.db.repositories.ContentRepositoryCustom;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.TypedAggregation;

import java.util.List;

import static org.springframework.data.mongodb.core.aggregation.Aggregation.*;
import static org.springframework.data.mongodb.core.query.Criteria.*;

/**
 * Created by GSmirnoff on 17.04.14.
 */
public class ContentRepositoryCustomImpl implements ContentRepositoryCustom {

    @Autowired
    private MongoTemplate mongoTemplate;

    @Override
    public Long getCurrentCount(String page, String project) {
        TypedAggregation<Content> aggregation = newAggregation(Content.class,
                match(where("project").is(project)),
                group("page").max("num").as("num"),
                match(where("_id").is(page))
        );
        List<Content> list = mongoTemplate.aggregate(aggregation, Content.class).getMappedResults();
        if (list==null || list.isEmpty()) return 1L;
        return list.get(0).getNum();
    }
}
