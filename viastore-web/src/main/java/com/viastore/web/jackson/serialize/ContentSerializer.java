package com.viastore.web.jackson.serialize;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.viastore.service.dto.PageContent;

import java.io.IOException;

/**
 * Created by GSmirnoff on 16.04.14.
 */
public class ContentSerializer extends JsonSerializer<PageContent> {

    public ContentSerializer() { super(); }

    @Override
    public void serialize(PageContent content, JsonGenerator jsonGenerator, SerializerProvider serializerProvider) throws IOException, JsonProcessingException {
        jsonGenerator.writeStartObject();

        jsonGenerator.writeFieldName("title");
        jsonGenerator.writeString(content.getTitle());

        jsonGenerator.writeFieldName("num");
        jsonGenerator.writeNumber(content.getNum());

        jsonGenerator.writeFieldName("template");
        jsonGenerator.writeString(content.getTemplate());

        jsonGenerator.writeFieldName("page");
        jsonGenerator.writeString(content.getPage());

        jsonGenerator.writeFieldName("content");
        jsonGenerator.writeRaw(":");
        jsonGenerator.writeRaw(content.getContent());

        jsonGenerator.writeEndObject();
    }
}
