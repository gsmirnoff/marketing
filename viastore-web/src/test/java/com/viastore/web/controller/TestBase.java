package com.viastore.web.controller;

import com.sun.jersey.spi.spring.container.servlet.SpringServlet;
import com.sun.jersey.test.framework.AppDescriptor;
import com.sun.jersey.test.framework.JerseyTest;
import com.sun.jersey.test.framework.WebAppDescriptor;
import org.springframework.web.context.ContextLoaderListener;
import org.springframework.web.context.request.RequestContextListener;

/**
 * Created by GSmirnoff on 26.06.14.
 */
public class TestBase extends JerseyTest {

    protected AppDescriptor configure() {
        return new WebAppDescriptor.Builder("com.viastore.web.controller")
                .contextParam("contextConfigLocation", "test-serviceContext.xml")
                .servletClass(SpringServlet.class)
                .contextListenerClass(ContextLoaderListener.class)
                .requestListenerClass(RequestContextListener.class)
                .initParam("com.sun.jersey.api.json.POJOMappingFeature", "true")
                .initParam("com.sun.jersey.config.property.packages", "com.viastore.web")
                .initParam("com.sun.jersey.spi.container.ResourceFilters", "com.viastore.web.filter.ResourceFilterFactory")
                .build();
    }

}
