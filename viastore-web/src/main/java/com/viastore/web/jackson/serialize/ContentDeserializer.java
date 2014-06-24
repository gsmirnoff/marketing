package com.viastore.web.jackson.serialize;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.JsonNode;
import com.viastore.service.dto.page.PageContent;

import java.io.IOException;

/**
 * Created by GSmirnoff on 16.04.14.
 */
public class ContentDeserializer extends JsonDeserializer<PageContent> {

    public ContentDeserializer() {super();}

    @Override
    public PageContent deserialize(JsonParser jsonParser, DeserializationContext deserializationContext) throws IOException, JsonProcessingException {
        PageContent content = new PageContent();
        JsonNode node = jsonParser.getCodec().readTree(jsonParser);
        content.setTitle(node.get("title").asText());
        content.setContent(node.get("content").toString());
        content.setTemplate(node.get("template").toString());
        return content;
    }
}
