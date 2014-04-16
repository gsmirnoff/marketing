package com.viastore.web.jackson;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.module.SimpleModule;
import com.viastore.service.dto.PageContent;
import com.viastore.web.jackson.serialize.ContentDeserializer;
import com.viastore.web.jackson.serialize.ContentSerializer;

import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.ext.ContextResolver;
import javax.ws.rs.ext.Provider;

/**
 * Created by GSmirnoff on 16.04.14.
 */
@Provider
@Produces(MediaType.APPLICATION_JSON)
public class ObjectMapperProvider implements ContextResolver<ObjectMapper> {

    @Override
    public ObjectMapper getContext(Class<?> aClass) {
        ObjectMapper objectMapper = new ObjectMapper();

        SimpleModule simpleModule = new SimpleModule();
        simpleModule.addSerializer(PageContent.class, new ContentSerializer());
        simpleModule.addDeserializer(PageContent.class, new ContentDeserializer());

        objectMapper.registerModule(simpleModule);
        return objectMapper;
    }
}
