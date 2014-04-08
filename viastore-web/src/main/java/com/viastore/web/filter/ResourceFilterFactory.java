package com.viastore.web.filter;

import com.sun.jersey.api.container.filter.RolesAllowedResourceFilterFactory;
import com.sun.jersey.api.model.AbstractMethod;
import com.sun.jersey.spi.container.ResourceFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.ws.rs.ext.Provider;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by GSmirnoff on 08.04.14.
 */
@Component
@Provider
public class ResourceFilterFactory extends RolesAllowedResourceFilterFactory {

    @Autowired
    private SecurityContextFilter securityContextFilter;

    @Override
    public List<ResourceFilter> create(AbstractMethod am) {
        List<ResourceFilter> filters = super.create(am);
        if (filters == null) {
            filters = new ArrayList<ResourceFilter>();
        }
        List<ResourceFilter> securityFilters = new ArrayList<ResourceFilter>(filters);
        //put the Security Filter first in line
        securityFilters.add(0, securityContextFilter);
        return securityFilters;
    }
}
