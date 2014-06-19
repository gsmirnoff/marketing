package com.viastore.web.filter;


import com.viastore.db.entities.User;

import javax.ws.rs.core.SecurityContext;
import java.security.Principal;

/**
 * Created by GSmirnoff on 08.04.14.
 */
public class Authorizer implements SecurityContext {
    private User user;
    private Principal principal;

    public Authorizer(final User user) {
        this.user = user;
        this.principal = new Principal() {
            @Override
            public String getName() {
                return user.getEmail();
            }
        };
    }

    @Override
    public Principal getUserPrincipal() {
        return this.principal;
    }

    @Override
    public boolean isUserInRole(String role) {
        return role.equals(user.getRole());
    }

    @Override
    public boolean isSecure() {
        return false;
    }

    @Override
    public String getAuthenticationScheme() {
        return SecurityContext.BASIC_AUTH;
    }
}
