package com.viastore.service;

import com.viastore.db.entities.Image;
import com.viastore.db.repositories.ImageRepository;
import com.viastore.service.dto.image.ImageData;
import com.viastore.service.dto.image.ImageId;
import org.dozer.DozerBeanMapper;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import static org.hamcrest.MatcherAssert.*;
import static org.hamcrest.CoreMatchers.*;

/**
 * Created by GSmirnoff on 27.06.14.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"classpath*:test-serviceContext.xml"})
public class ImageServiceTest {

    @Autowired
    private ImageRepository imageRepository;
    @Autowired
    private ImageService imageService;

    @Before
    public void setUp() {
        imageRepository.deleteAll();
    }

    @Test
    public void testSave() throws Exception {
        Image image = new Image();
        image.setData("some_img_src".getBytes());
        ImageId saved = imageService.save(image);
        assertThat(saved, is(notNullValue()));
        assertThat(saved.getId(), is(notNullValue()));
    }

    @Test
    public void testGetById() throws Exception {
        Image image = new Image();
        image.setData("some_img_src".getBytes());
        image = imageRepository.save(image);

        assertThat(image.getId(), is(notNullValue()));

        ImageData imageData = imageService.getById(image.getId());

        assertThat(imageData, is(notNullValue()));
        assertThat(imageData.getData(), is("some_img_src"));
        assertThat(imageService.getById("not_exists"), is(nullValue()));
    }

    @Test
    public void testDeleteById() throws Exception {
        Image image = new Image();
        image.setData("some_img_src".getBytes());
        image = imageRepository.save(image);

        assertThat(image.getId(), is(notNullValue()));

        assertThat(imageService.deleteById(image.getId()), is(true));
        assertThat(imageRepository.findOne(image.getId()), is(nullValue()));

        assertThat(imageService.deleteById("not_exists"), is(false));
        assertThat(imageService.deleteById(null), is(false));
    }
}
