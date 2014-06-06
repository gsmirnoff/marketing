package com.viastore.service;

import com.viastore.db.entities.Image;
import com.viastore.db.repositories.ImageRepository;
import com.viastore.service.dto.image.ImageData;
import com.viastore.service.dto.image.ImageId;
import org.dozer.DozerBeanMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by GSmirnoff on 05.06.14.
 */
@Service
public class ImageService {

    @Autowired
    private ImageRepository imageRepository;
    @Autowired
    private DozerBeanMapper mapper;

    public ImageId save(Image image) {
        image = imageRepository.save(image);
        return mapper.map(image, ImageId.class);
    }

    public ImageData getById(String id) {
        Image image = imageRepository.findOne(id);
        if (image == null) return null;
        ImageData data = new ImageData();
        data.setData(new String(image.getData()));
        return data;
    }

    public boolean deleteById(String id) {
        if (id == null) return false;
        Image image = imageRepository.findOne(id);
        if (image != null) {
            imageRepository.delete(image);
            return true;
        }
        return false;
    }
}
