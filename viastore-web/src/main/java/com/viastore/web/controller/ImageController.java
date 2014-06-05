package com.viastore.web.controller;

import com.sun.jersey.multipart.FormDataParam;
import com.viastore.db.entities.Image;
import com.viastore.service.ImageService;
import com.viastore.web.response.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;

/**
 * Created by GSmirnoff on 04.06.14.
 */
@Path("/image")
@Component
public class ImageController {

    @Autowired
    private ImageService imageService;

    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.MULTIPART_FORM_DATA)
    public ResponseEntity upload(@FormDataParam("image") InputStream uploadedInputStream){
        try {
            byte[]  bytes = getBytes(uploadedInputStream);
            Image image = new Image();
            image.setData(bytes);
            return new ResponseEntity(0, imageService.save(image));
        } catch (IOException e) {
            e.printStackTrace();
        }
        return new ResponseEntity(1, "Error occured");
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Path("{id}")
    public ResponseEntity getById(@PathParam("id") String id) {
        return new ResponseEntity(0, imageService.getById(id));
    }

    public byte[] getBytes(InputStream is) throws IOException {
        int len;
        int size = 1024;
        byte[] buf;

        if (is instanceof ByteArrayInputStream) {
            size = is.available();
            buf = new byte[size];
            len = is.read(buf, 0, size);
        } else {
            ByteArrayOutputStream bos = new ByteArrayOutputStream();
            buf = new byte[size];
            while ((len = is.read(buf, 0, size)) != -1)
                bos.write(buf, 0, len);
            buf = bos.toByteArray();
        }
        return buf;
    }

}

